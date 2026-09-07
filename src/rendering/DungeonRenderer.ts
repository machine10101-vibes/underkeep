import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Grid } from '../game/Grid';
import { DoorState, TILE_SIZE, TileKind, TrapType, isDiggableKind } from '../game/types';
import {
  floorMaterial,
  makeBlockEdgeGeo,
  makeClaimedFloorMesh,
  makeCreatureMesh,
  makeFloorGeo,
  makeGemGlitter,
  makeGoldGlitter,
  makeGoldVeinGeo,
  makeHeartGeo,
  makeRockGeo,
  makeLavaMesh,
  makeWaterMesh,
  makeBridgeMesh,
  makeDoorMesh,
  makeRallyFlagMesh,
  makeRoomDecal,
  makeRoomProps,
  makeSentryTrapMesh,
  makeTorchMesh,
  makeWallGeo,
  makeFortifiedWallMesh,
  makeWallFaceDetail,
  makeKeeperHand,
  tileMaterial,
} from './meshes';

const ColorGradeShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    uContrast: { value: 1.05 },
    uSaturation: { value: 1.08 },
    uVignette: { value: 0.22 },
    uTint: { value: new THREE.Color(1.02, 0.98, 0.92) },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse;
    uniform float uContrast;
    uniform float uSaturation;
    uniform float uVignette;
    uniform vec3 uTint;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      c.rgb = (c.rgb - 0.5) * uContrast + 0.5;
      float luma = dot(c.rgb, vec3(0.299, 0.587, 0.114));
      c.rgb = mix(vec3(luma), c.rgb, uSaturation);
      c.rgb *= uTint;
      float d = distance(vUv, vec2(0.5));
      // Soft vignette — keep map readable on phones
      c.rgb *= mix(1.0, smoothstep(1.05, 0.25, d), uVignette);
      gl_FragColor = c;
    }
  `,
};

export class DungeonRenderer {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private bloomPass: UnrealBloomPass;
  private gridGroup = new THREE.Group();
  private entityGroup = new THREE.Group();
  private fxGroup = new THREE.Group();
  private tileMeshes = new Map<string, THREE.Object3D>();
  private torches: Array<THREE.Group & { flame?: THREE.Mesh; torchLight?: THREE.PointLight }> = [];
  private portals: THREE.Group[] = [];
  private heartGroup: (THREE.Group & {
    heartCore?: THREE.Mesh;
    heartLight?: THREE.PointLight;
    heartCrown?: THREE.Group;
  }) | null = null;
  private dust: THREE.Points;
  private markerMesh: THREE.Mesh;
  private selectRing: THREE.Mesh;
  private clock = 0;
  private edgeMat: THREE.LineBasicMaterial;
  private earthEdgeMat: THREE.LineBasicMaterial;
  private goldEdgeMat: THREE.LineBasicMaterial;
  private rockEdgeMat: THREE.LineBasicMaterial;
  /** WebGL context lost — skip composer until restored/re-inited. */
  contextLost = false;
  private useComposer = true;
  private renderFails = 0;
  onContextLost: (() => void) | null = null;
  onContextRestored: (() => void) | null = null;

  /** Shared FX geos — never dispose these. */
  private fxDebrisGeo = new THREE.BoxGeometry(0.1, 0.08, 0.1);
  private fxSparkGeo = new THREE.SphereGeometry(0.2, 8, 8);
  private fxGlowGeo = new THREE.SphereGeometry(0.4, 10, 10);
  private readonly FX_CAP = 64;
  private digLoad = false;
  private basePixelRatio = 1;
  private dirLight: THREE.DirectionalLight | null = null;
  private markOverlay = new THREE.Group();
  private markPlaneGeo = new THREE.PlaneGeometry(TILE_SIZE * 0.7, TILE_SIZE * 0.7);
  private digWireGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(TILE_SIZE * 0.92, 2.2, TILE_SIZE * 0.92));
  /** Fog of war — one InstancedMesh (shared geo/mat); no per-tile mesh storms. */
  private fogOverlay = new THREE.Group();
  private fogBoxGeo = new THREE.BoxGeometry(TILE_SIZE * 1.05, 4.4, TILE_SIZE * 1.05);
  private fogMat = new THREE.MeshBasicMaterial({
    color: 0x0a080c,
    transparent: true,
    opacity: 0.38,
    depthWrite: false,
  });
  private fogInstanced: THREE.InstancedMesh | null = null;
  private fogCapacity = 0;
  private fogDummy = new THREE.Object3D();
  private keeperHand: THREE.Group;
  private goldHoard = new THREE.Group();
  private goldHoardScale = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x2a2228);
    this.scene.fog = new THREE.FogExp2(0x241c22, 0.0038);

    this.camera = new THREE.PerspectiveCamera(46, 1, 0.1, 240);
    this.camera.position.set(0, 34, 22);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
      preserveDrawingBuffer: false,
      failIfMajorPerformanceCaveat: false,
    });
    // Cap DPR hard — high ratios + bloom rebuilds were a common white-screen path on phones
    const coarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;
    this.basePixelRatio = Math.min(window.devicePixelRatio || 1, coarse ? 1.15 : 1.5);
    this.renderer.setPixelRatio(this.basePixelRatio);
    // Never clear to white if something fails mid-frame
    this.renderer.setClearColor(0x2a2228, 1);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = coarse ? THREE.BasicShadowMap : THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.28;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Warm dungeon lighting — still bright enough that PBR tiles read on mobile
    const amb = new THREE.AmbientLight(0xe0d4c0, 0.8);
    this.scene.add(amb);
    const hemi = new THREE.HemisphereLight(0xffe8cc, 0x3a2838, 0.72);
    hemi.position.set(0, 40, 0);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xfff0d8, 1.45);
    dir.position.set(22, 48, 14);
    dir.castShadow = true;
    dir.shadow.mapSize.set(512, 512);
    this.dirLight = dir;
    dir.shadow.camera.near = 5;
    dir.shadow.camera.far = 120;
    dir.shadow.camera.left = -55;
    dir.shadow.camera.right = 55;
    dir.shadow.camera.top = 55;
    dir.shadow.camera.bottom = -55;
    dir.shadow.bias = -0.0006;
    dir.shadow.intensity = 0.62;
    this.scene.add(dir);

    const fill = new THREE.DirectionalLight(0x8098c8, 0.38);
    fill.position.set(-18, 28, -14);
    this.scene.add(fill);

    // Slow airborne ash/dust gives the empty cavern volume visible depth.
    const dustPos = new Float32Array(260 * 3);
    for (let i = 0; i < dustPos.length; i += 3) {
      dustPos[i] = (Math.random() - 0.5) * 90;
      dustPos[i + 1] = 0.5 + Math.random() * 13;
      dustPos[i + 2] = (Math.random() - 0.5) * 90;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    this.dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({
        color: 0xd49a55,
        size: 0.07,
        transparent: true,
        opacity: 0.38,
        depthWrite: false,
        sizeAttenuation: true,
      })
    );
    this.scene.add(this.dust);

    // Subtle ground plane under the grid for depth / silhouette
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshStandardMaterial({
        color: 0x1a1418,
        metalness: 0.05,
        roughness: 1,
      })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.35;
    ground.receiveShadow = true;
    this.scene.add(ground);

    this.scene.add(this.gridGroup);
    this.scene.add(this.markOverlay);
    this.scene.add(this.fogOverlay);
    this.scene.add(this.entityGroup);
    this.scene.add(this.fxGroup);

    this.edgeMat = new THREE.LineBasicMaterial({
      color: 0x2a2218,
      transparent: true,
      opacity: 0.55,
    });
    this.earthEdgeMat = new THREE.LineBasicMaterial({
      color: 0xa06028,
      transparent: true,
      opacity: 0.85,
    });
    this.goldEdgeMat = new THREE.LineBasicMaterial({
      color: 0xffe066,
      transparent: true,
      opacity: 1,
    });
    this.rockEdgeMat = new THREE.LineBasicMaterial({
      color: 0x8890a8,
      transparent: true,
      opacity: 0.8,
    });

    this.markerMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(TILE_SIZE * 0.9, TILE_SIZE * 0.9),
      new THREE.MeshBasicMaterial({
        color: 0xffaa20,
        transparent: true,
        opacity: 0.35,
        depthWrite: false,
      })
    );
    this.markerMesh.rotation.x = -Math.PI / 2;
    this.markerMesh.position.y = 0.14;
    this.markerMesh.visible = false;
    this.scene.add(this.markerMesh);

    this.selectRing = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.55, 24),
      new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
    );
    this.selectRing.rotation.x = -Math.PI / 2;
    this.selectRing.position.y = 0.16;
    this.selectRing.visible = false;
    this.scene.add(this.selectRing);

    this.keeperHand = makeKeeperHand();
    this.keeperHand.visible = false;
    this.scene.add(this.keeperHand);

    this.goldHoard.visible = false;
    this.scene.add(this.goldHoard);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // Cap bloom so non-emissive earth/floors stay visible
    // Keep bloom subtle — high strength was crushing non-emissive tiles to black
    const isCoarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      isCoarse ? 0.08 : 0.12,
      0.35,
      0.96
    );
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(new ShaderPass(ColorGradeShader));

    this.onResize();
    window.addEventListener('resize', () => this.onResize());
    this.bindContextRecovery(canvas);
  }

  private bindContextRecovery(canvas: HTMLCanvasElement): void {
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      this.contextLost = true;
      this.useComposer = false;
      console.warn('[underkeep] WebGL context lost');
      this.onContextLost?.();
    }, false);
    canvas.addEventListener('webglcontextrestored', () => {
      console.warn('[underkeep] WebGL context restored — reinit renderer pipeline');
      this.contextLost = false;
      try {
        this.reinitPipeline();
        this.onContextRestored?.();
      } catch (err) {
        console.error('[underkeep] context restore failed', err);
        this.onContextLost?.();
      }
    }, false);
  }

  /** Rebuild composer / sizes after context restore. */
  reinitPipeline(): void {
    const size = new THREE.Vector2();
    this.renderer.getSize(size);
    this.renderer.setClearColor(0x2a2228, 1);
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const isCoarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(size.x || 1, size.y || 1),
      isCoarse ? 0.08 : 0.12,
      0.35,
      0.96
    );
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(new ShaderPass(ColorGradeShader));
    this.useComposer = true;
    this.renderFails = 0;
    this.onResize();
  }

  onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }

  /** Dispose non-shared GPU resources (room props, marks, glitter). Shared cached geos/mats stay. */
  private disposeGridChild(obj: THREE.Object3D): void {
    obj.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.isMesh) {
        const g = mesh.geometry;
        // Only dispose uncached one-off geos (props/marks/glitter) — keyed userData
        if (g && (mesh.userData.disposeGeo || g.userData?.disposeGeo)) {
          g.dispose();
        }
        const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
        for (const m of mats) {
          if (m && (m as THREE.Material).userData?.disposeMat) {
            (m as THREE.Material).dispose();
          }
        }
      }
      const light = o as THREE.PointLight;
      if (light.isLight) {
        // point lights are fine to drop with the group
      }
    });
  }

  rebuildGrid(grid: Grid): void {
    while (this.gridGroup.children.length) {
      const c = this.gridGroup.children.pop()!;
      this.disposeGridChild(c);
      this.gridGroup.remove(c);
    }
    this.tileMeshes.clear();
    this.torches = [];
    this.portals = [];
    this.heartGroup = null;

    for (const tile of grid.tiles) {
      const w = grid.tileToWorld(tile.x, tile.y);
      const key = `${tile.x},${tile.y}`;

      if (tile.kind === TileKind.Rock) {
        const mesh = new THREE.Mesh(makeRockGeo(), tileMaterial(TileKind.Rock, false, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.rotation.y = this.tileRotation(tile.x, tile.y);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.tileX = tile.x;
        mesh.userData.tileY = tile.y;
        this.addExposedWallFaces(grid, tile.x, tile.y, mesh, TileKind.Rock, false);
        this.gridGroup.add(mesh);
        this.addEdge(w.x, w.z, 3.5, this.rockEdgeMat);
        this.tileMeshes.set(key, mesh);
        continue;
      }

      // Fortified walls first (kind may still be Earth/Gold)
      if (tile.fortified) {
        const mesh = makeFortifiedWallMesh();
        mesh.position.set(w.x, 0, w.z);
        mesh.rotation.y = this.tileRotation(tile.x, tile.y);
        mesh.userData.tileX = tile.x;
        mesh.userData.tileY = tile.y;
        mesh.traverse((o) => {
          o.userData.tileX = tile.x;
          o.userData.tileY = tile.y;
        });
        this.addExposedWallFaces(grid, tile.x, tile.y, mesh, tile.kind, true);
        this.gridGroup.add(mesh);
        this.addEdge(w.x, w.z, 2.5, this.edgeMat);
        this.tileMeshes.set(key, mesh);
        continue;
      }

      if (isDiggableKind(tile.kind)) {
        const geo = tile.kind === TileKind.Gold || tile.kind === TileKind.Gem ? makeGoldVeinGeo() : makeWallGeo();
        const mesh = new THREE.Mesh(geo, tileMaterial(tile.kind, false, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.rotation.y = this.tileRotation(tile.x, tile.y);
        // Visual chip/shrink while diggers work (digProgress 0→1)
        const dig = Math.max(0, Math.min(0.95, tile.digProgress || 0));
        const s = 1 - dig * 0.7;
        const sy = 1 - dig * 0.85;
        mesh.scale.set(s, sy, s);
        mesh.position.y = -dig * 1.15;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        mesh.userData.tileX = tile.x;
        mesh.userData.tileY = tile.y;
        this.addExposedWallFaces(grid, tile.x, tile.y, mesh, tile.kind, false);
        this.gridGroup.add(mesh);
        if ((tile.kind === TileKind.Gold || tile.kind === TileKind.Gem) && dig < 0.85) {
          const glitter = tile.kind === TileKind.Gem ? makeGemGlitter() : makeGoldGlitter();
          glitter.position.set(w.x, mesh.position.y, w.z);
          glitter.scale.set(s, sy, s);
          glitter.userData.glitterFor = key;
          glitter.userData.glitterSpin = true;
          this.gridGroup.add(glitter);
        }
        const edgeH = 2.35 * sy + mesh.position.y;
        this.addEdge(
          w.x,
          w.z,
          Math.max(0.4, edgeH),
          tile.kind === TileKind.Gem ? this.goldEdgeMat : tile.kind === TileKind.Gold ? this.goldEdgeMat : this.earthEdgeMat
        );
        this.tileMeshes.set(key, mesh);
        // Marks drawn via markOverlay — avoid per-rebuild Plane/Edges allocations
        continue;
      }

      // Hazard / bridge floors (before generic Claimed/Dirt)
      if (tile.kind === TileKind.Lava) {
        const lava = makeLavaMesh();
        lava.position.set(w.x, 0, w.z);
        lava.userData.tileX = tile.x;
        lava.userData.tileY = tile.y;
        lava.traverse((o) => {
          o.userData.tileX = tile.x;
          o.userData.tileY = tile.y;
        });
        this.gridGroup.add(lava);
        this.tileMeshes.set(key, lava);
        continue;
      }
      if (tile.kind === TileKind.Water) {
        const water = makeWaterMesh();
        water.position.set(w.x, 0, w.z);
        water.userData.tileX = tile.x;
        water.userData.tileY = tile.y;
        water.traverse((o) => {
          o.userData.tileX = tile.x;
          o.userData.tileY = tile.y;
        });
        this.gridGroup.add(water);
        this.tileMeshes.set(key, water);
        continue;
      }
      if (tile.kind === TileKind.BridgeWood || tile.kind === TileKind.BridgeStone) {
        const br = makeBridgeMesh(tile.kind === TileKind.BridgeStone);
        br.position.set(w.x, 0, w.z);
        br.userData.tileX = tile.x;
        br.userData.tileY = tile.y;
        br.traverse((o) => {
          o.userData.tileX = tile.x;
          o.userData.tileY = tile.y;
        });
        this.gridGroup.add(br);
        this.tileMeshes.set(key, br);
        continue;
      }

      // floors — Claimed uses geometric fitted stone; Dirt/Heart stay simple
      if (tile.kind === TileKind.Claimed) {
        const claimed = makeClaimedFloorMesh(tile.room);
        claimed.position.set(w.x, 0, w.z);
        claimed.userData.tileX = tile.x;
        claimed.userData.tileY = tile.y;
        claimed.traverse((o) => {
          o.userData.tileX = tile.x;
          o.userData.tileY = tile.y;
        });
        this.gridGroup.add(claimed);
        this.tileMeshes.set(key, claimed);
      } else {
        const floor = new THREE.Mesh(makeFloorGeo(), floorMaterial(tile.kind, tile.room));
        floor.position.set(w.x, 0, w.z);
        floor.receiveShadow = true;
        floor.userData.tileX = tile.x;
        floor.userData.tileY = tile.y;
        this.gridGroup.add(floor);
        this.tileMeshes.set(key, floor);
      }

      if (tile.kind === TileKind.Heart) {
        const heart = makeHeartGeo();
        heart.position.set(w.x, 0, w.z);
        this.gridGroup.add(heart);
        this.heartGroup = heart as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight };
      }

      const decal = makeRoomDecal(tile.room);
      if (decal) {
        decal.position.set(w.x, 0.18, w.z);
        this.gridGroup.add(decal);
      }

      const props = makeRoomProps(tile.room, Math.abs(tile.x * 3 + tile.y * 5));
      if (props) {
        props.position.set(w.x, 0.14, w.z);
        this.gridGroup.add(props);
        if (props.userData.portalAnimated) this.portals.push(props);
      }

      if (tile.door === DoorState.Closed || tile.door === DoorState.Open) {
        const door = makeDoorMesh(tile.door);
        door.position.set(w.x, 0.02, w.z);
        // Orient door across the narrower corridor axis
        const solidX =
          (!!grid.get(tile.x + 1, tile.y) &&
            (grid.get(tile.x + 1, tile.y)!.fortified ||
              isDiggableKind(grid.get(tile.x + 1, tile.y)!.kind) ||
              grid.get(tile.x + 1, tile.y)!.kind === TileKind.Rock)) ||
          (!!grid.get(tile.x - 1, tile.y) &&
            (grid.get(tile.x - 1, tile.y)!.fortified ||
              isDiggableKind(grid.get(tile.x - 1, tile.y)!.kind) ||
              grid.get(tile.x - 1, tile.y)!.kind === TileKind.Rock));
        if (!solidX) door.rotation.y = Math.PI / 2;
        this.gridGroup.add(door);
      }

      if (tile.trap === TrapType.Sentry) {
        const trap = makeSentryTrapMesh();
        trap.position.set(w.x + 0.15, 0.02, w.z - 0.15);
        this.gridGroup.add(trap);
      }

      if (tile.rally) {
        const flag = makeRallyFlagMesh();
        flag.position.set(w.x - 0.25, 0.02, w.z + 0.25);
        this.gridGroup.add(flag);
      }

      if (tile.torch) {
        // Denser warm pools — more real lights
        const withLight = this.torches.filter((x) => x.torchLight).length < 12;
        const torch = makeTorchMesh(withLight) as THREE.Group & {
          flame?: THREE.Mesh;
          torchLight?: THREE.PointLight;
        };
        let ox = 0.65;
        let oz = 0;
        const neighbors: Array<[number, number, number, number]> = [
          [1, 0, 0.65, 0],
          [-1, 0, -0.65, 0],
          [0, 1, 0, 0.65],
          [0, -1, 0, -0.65],
        ];
        for (const [dx, dy, px, pz] of neighbors) {
          const n = grid.get(tile.x + dx, tile.y + dy);
          if (n && (isDiggableKind(n.kind) || n.kind === TileKind.Rock || n.fortified)) {
            ox = px;
            oz = pz;
            break;
          }
        }
        torch.position.set(w.x + ox, 0, w.z + oz);
        this.gridGroup.add(torch);
        this.torches.push(torch);
      }
    }
    this.syncMarkOverlay(grid);
    this.syncFogOverlay(grid);
  }

  private addExposedWallFaces(
    grid: Grid,
    x: number,
    y: number,
    parent: THREE.Object3D,
    kind: TileKind,
    fortified: boolean
  ): void {
    const faces: Array<[number, number, number]> = [
      [0, 1, 0],
      [1, 0, Math.PI / 2],
      [0, -1, Math.PI],
      [-1, 0, -Math.PI / 2],
    ];
    for (const [dx, dy, ry] of faces) {
      const neighbor = grid.get(x + dx, y + dy);
      if (!neighbor || grid.isSolid(neighbor.x, neighbor.y)) continue;
      const detail = makeWallFaceDetail(kind, fortified);
      // Compensate for per-tile quarter turns used to break texture repetition.
      detail.rotation.y = ry - parent.rotation.y;
      parent.add(detail);
    }
  }

  private tileRotation(x: number, y: number): number {
    const quarter = Math.abs(x * 7 + y * 13) % 4;
    return quarter * Math.PI * 0.5;
  }

  /** Lightweight dig/claim/fortify tags — no terrain rebuild required. */
  syncMarkOverlay(grid: Grid): void {
    while (this.markOverlay.children.length) {
      const c = this.markOverlay.children.pop()!;
      this.markOverlay.remove(c);
      const mesh = c as THREE.Mesh;
      if (mesh.material && (mesh.material as THREE.Material).userData?.disposeMat) {
        (mesh.material as THREE.Material).dispose();
      }
    }
    for (const tile of grid.tiles) {
      if (!tile.mark) continue;
      const w = grid.tileToWorld(tile.x, tile.y);
      const dig = Math.max(0, Math.min(0.95, tile.digProgress || 0));
      const sy = 1 - dig * 0.85;
      const yBase =
        isDiggableKind(tile.kind)
          ? Math.max(0.5, 2.42 * sy - dig * 1.15)
          : 0.2;
      const markMat = new THREE.MeshBasicMaterial({
        color: tile.mark === 1 ? 0xff3322 : tile.mark === 2 ? 0x44aaff : 0xccccaa,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
      });
      markMat.userData.disposeMat = true;
      const mark = new THREE.Mesh(this.markPlaneGeo, markMat);
      mark.rotation.x = -Math.PI / 2;
      mark.position.set(w.x, yBase, w.z);
      this.markOverlay.add(mark);
      if (tile.mark === 1 && isDiggableKind(tile.kind)) {
        const wireMat = new THREE.LineBasicMaterial({ color: 0xff4422, transparent: true, opacity: 0.85 });
        wireMat.userData.disposeMat = true;
        const wire = new THREE.LineSegments(this.digWireGeo, wireMat);
        wire.position.set(w.x, 1.1 * sy - dig * 1.15, w.z);
        wire.scale.set(1, Math.max(0.25, sy), 1);
        this.markOverlay.add(wire);
      }
    }
  }


  /**
   * Fog of war overlay — unexplored tiles get a solid dark column.
   * Single InstancedMesh (shared geo/mat) — NO dispose storms, NO terrain rebuild.
   */
  syncFogOverlay(grid: Grid): void {
    const fogged: { x: number; y: number }[] = [];
    for (const tile of grid.tiles) {
      const key = `${tile.x},${tile.y}`;
      const under = this.tileMeshes.get(key);
      if (!tile.explored) {
        // DK2 overview shows the earth mass; don't black-box solid cubes
        const solidMass =
          isDiggableKind(tile.kind) ||
          tile.kind === TileKind.Rock ||
          tile.fortified;
        if (!solidMass) fogged.push(tile);
        if (under) under.visible = true;
      } else if (under && !under.visible) {
        under.visible = true;
      }
    }
    const need = Math.max(fogged.length, 1);
    if (!this.fogInstanced || this.fogCapacity < need) {
      if (this.fogInstanced) {
        this.fogOverlay.remove(this.fogInstanced);
        // Shared geo/mat — do not dispose them with the instanced mesh
        this.fogInstanced = null;
      }
      const cap = Math.max(need, 256);
      const mesh = new THREE.InstancedMesh(this.fogBoxGeo, this.fogMat, cap);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      mesh.castShadow = false;
      mesh.receiveShadow = false;
      mesh.frustumCulled = false;
      this.fogInstanced = mesh;
      this.fogCapacity = cap;
      this.fogOverlay.add(mesh);
    }
    const mesh = this.fogInstanced!;
    for (let i = 0; i < fogged.length; i++) {
      const t = fogged[i];
      const w = grid.tileToWorld(t.x, t.y);
      this.fogDummy.position.set(w.x, 1.9, w.z);
      this.fogDummy.scale.set(1, 1, 1);
      this.fogDummy.updateMatrix();
      mesh.setMatrixAt(i, this.fogDummy.matrix);
    }
    mesh.count = fogged.length;
    mesh.instanceMatrix.needsUpdate = true;
    mesh.visible = fogged.length > 0;
  }

  private addEdge(x: number, z: number, height: number, mat: THREE.LineBasicMaterial): void {
    const line = new THREE.Line(makeBlockEdgeGeo(height), mat);
    line.position.set(x, 0, z);
    this.gridGroup.add(line);
  }

  /**
   * Cheap dig-progress visual — avoids full rebuildGrid (OOM / context-loss white screen).
   * Call only while the tile remains Earth/Gold; full rebuild when kind changes.
   */
  updateDigVisual(x: number, y: number, digProgress: number, kind: TileKind): void {
    const key = `${x},${y}`;
    const mesh = this.tileMeshes.get(key);
    if (!mesh) return;
    const dig = Math.max(0, Math.min(0.95, digProgress || 0));
    const s = 1 - dig * 0.7;
    const sy = 1 - dig * 0.85;
    mesh.scale.set(s, sy, s);
    mesh.position.y = -dig * 1.15;
    // Dim gold glitter sibling if present
    for (const child of this.gridGroup.children) {
      if (child.userData?.glitterFor === key) {
        child.position.y = mesh.position.y;
        child.scale.set(s, sy, s);
        child.visible = dig < 0.85 && (kind === TileKind.Gold || kind === TileKind.Gem);
      }
    }
  }

  setHover(wx: number, wz: number, visible: boolean, color = 0xffaa20): void {
    this.markerMesh.visible = visible;
    if (visible) {
      this.markerMesh.position.x = wx;
      this.markerMesh.position.z = wz;
      (this.markerMesh.material as THREE.MeshBasicMaterial).color.setHex(color);
    }
  }

  setSelectRing(wx: number, wz: number, visible: boolean): void {
    this.selectRing.visible = visible;
    if (visible) {
      this.selectRing.position.x = wx;
      this.selectRing.position.z = wz;
    }
  }

  /** 3D keeper claw follows the pointer in Hand mode. */
  setKeeperHand(wx: number, wz: number, visible: boolean, grabbing = false, hoverY = 3.7): void {
    this.keeperHand.visible = visible;
    if (!visible) return;
    const y = grabbing ? hoverY + 0.45 : hoverY;
    const cam = this.camera.position;
    const dx = cam.x - wx;
    const dz = cam.z - wz;
    const len = Math.hypot(dx, dz) || 1;
    const pull = 0.9;
    this.keeperHand.position.set(wx + (dx / len) * pull, y, wz + (dz / len) * pull);
    this.keeperHand.rotation.x = grabbing ? 0.42 : 0.12;
    this.keeperHand.rotation.z = grabbing ? -0.25 : Math.sin(this.clock * 3) * 0.06;
    this.keeperHand.rotation.y = grabbing ? 0.35 : 0.15;
  }

  /** Gold piles around the Heart grow with stored gold — no terrain rebuild. */
  setHeartGold(amount: number, hx: number, hz: number): void {
    if (this.goldHoard.children.length === 0) {
      const mat = new THREE.MeshStandardMaterial({
        color: 0xe8b028,
        metalness: 0.88,
        roughness: 0.28,
        emissive: 0xa07010,
        emissiveIntensity: 0.5,
      });
      const spots = [
        [1.35, 0.18, 0.55],
        [1.55, 0.12, -0.35],
        [-1.4, 0.16, 0.4],
        [-1.15, 0.1, -0.7],
        [0.4, 0.14, 1.45],
      ];
      for (const [x, y, z] of spots) {
        const pile = new THREE.Mesh(new THREE.SphereGeometry(0.32, 8, 6), mat);
        pile.scale.set(1.25, 0.55, 1.1);
        pile.position.set(x, y, z);
        pile.castShadow = true;
        this.goldHoard.add(pile);
      }
    }
    this.goldHoard.position.set(hx, 0, hz);
    const t = Math.max(0, Math.min(1, amount / 2800));
    this.goldHoardScale = t;
    const s = 0.35 + t * 1.15;
    this.goldHoard.scale.setScalar(s);
    this.goldHoard.visible = amount >= 80;
  }

  clearEntities(): void {
    while (this.entityGroup.children.length) {
      this.entityGroup.remove(this.entityGroup.children[0]);
    }
  }

  addEntityMesh(mesh: THREE.Object3D): void {
    this.entityGroup.add(mesh);
  }

  removeEntityMesh(mesh: THREE.Object3D): void {
    this.entityGroup.remove(mesh);
  }

  createEntityVisual(kind: string, color: number, scale: number): THREE.Group {
    return makeCreatureMesh(color, scale, kind);
  }

  private trimFx(): void {
    while (this.fxGroup.children.length > this.FX_CAP) {
      const c = this.fxGroup.children[0];
      this.disposeFxChild(c);
      this.fxGroup.remove(c);
    }
  }

  private disposeFxChild(c: THREE.Object3D): void {
    const mesh = c as THREE.Mesh;
    if (mesh.isMesh) {
      const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
      for (const m of mats) {
        if (m && (m as THREE.Material).userData?.disposeMat) (m as THREE.Material).dispose();
      }
      // shared geos only — never dispose
    }
    const line = c as THREE.Line;
    if (line.isLine && line.geometry && line.geometry.userData?.disposeGeo) {
      line.geometry.dispose();
    }
    if (line.isLine) {
      const mats = Array.isArray(line.material) ? line.material : line.material ? [line.material] : [];
      for (const m of mats) {
        if (m && (m as THREE.Material).userData?.disposeMat) (m as THREE.Material).dispose();
      }
    }
  }

  /** Shed bloom/shadows/DPR while many tiles are being dug — STABILITY > flash. */
  setDigLoad(active: boolean): void {
    if (this.digLoad === active) return;
    this.digLoad = active;
    if (active) {
      this.useComposer = false;
      this.bloomPass.enabled = false;
      this.renderer.toneMappingExposure = 1.08;
      this.renderer.setPixelRatio(Math.min(this.basePixelRatio, 1.0));
      this.renderer.shadowMap.enabled = false;
      if (this.dirLight) this.dirLight.castShadow = false;
      this.trimFx();
    } else {
      this.bloomPass.enabled = true;
      this.useComposer = !this.contextLost;
      this.renderer.toneMappingExposure = 1.28;
      this.renderer.setPixelRatio(this.basePixelRatio);
      this.renderer.shadowMap.enabled = true;
      if (this.dirLight) this.dirLight.castShadow = true;
      this.onResize();
    }
  }

  spawnFx(pos: THREE.Vector3, color: number, life = 0.6): void {
    if (this.fxGroup.children.length >= this.FX_CAP) return;
    const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 });
    mat.userData.disposeMat = true;
    const m = new THREE.Mesh(this.fxSparkGeo, mat);
    m.position.copy(pos);
    m.position.y += 0.5;
    this.fxGroup.add(m);
    const obj = m as THREE.Mesh & { _fxStart?: number; _fxLife?: number; _vx?: number; _vy?: number; _vz?: number };
    obj._fxStart = this.clock;
    obj._fxLife = life;
  }

  /**
   * Loud, screenshot-readable care sparks (Lair heal / Hatchery feast).
   * More particles, brighter emissive colors, larger size, ~1.5–2.5s visible.
   */
  spawnCareSparks(wx: number, wz: number, mode: 'heal' | 'feast', burst = false): void {
    if (this.fxGroup.children.length > this.FX_CAP - 8) this.trimFx();
    const primary = mode === 'heal' ? 0x55ffaa : 0xffcc33;
    const secondary = mode === 'heal' ? 0xc8ffe8 : 0xffeebb;
    const tertiary = mode === 'heal' ? 0x2aff88 : 0xffaa22;
    const count = burst ? (this.digLoad ? 6 : 10) : (this.digLoad ? 3 : 5);
    for (let i = 0; i < count; i++) {
      if (this.fxGroup.children.length >= this.FX_CAP) break;
      const size = 0.7 + Math.random() * 0.6;
      const col = i % 3 === 0 ? secondary : i % 3 === 1 ? primary : tertiary;
      const mat = new THREE.MeshBasicMaterial({
        color: col,
        transparent: true,
        opacity: 1,
        depthWrite: false,
      });
      mat.userData.disposeMat = true;
      const m = new THREE.Mesh(this.fxSparkGeo, mat);
      m.scale.setScalar(size);
      m.position.set(
        wx + (Math.random() - 0.5) * 0.85,
        0.45 + Math.random() * 0.7,
        wz + (Math.random() - 0.5) * 0.85
      );
      const obj = m as THREE.Mesh & {
        _fxStart?: number;
        _fxLife?: number;
        _vx?: number;
        _vy?: number;
        _vz?: number;
        _fxFloat?: boolean;
      };
      obj._fxStart = this.clock;
      obj._fxLife = 1.2 + Math.random() * 0.7;
      obj._vx = (Math.random() - 0.5) * 1.4;
      obj._vy = 0.9 + Math.random() * 1.6;
      obj._vz = (Math.random() - 0.5) * 1.4;
      obj._fxFloat = true;
      this.fxGroup.add(m);
    }
    if (this.fxGroup.children.length < this.FX_CAP) {
      const mat = new THREE.MeshBasicMaterial({
        color: primary,
        transparent: true,
        opacity: 0.85,
        depthWrite: false,
      });
      mat.userData.disposeMat = true;
      const glow = new THREE.Mesh(this.fxGlowGeo, mat);
      glow.scale.setScalar(burst ? 1.3 : 0.95);
      glow.position.set(wx, 0.7, wz);
      const gObj = glow as THREE.Mesh & {
        _fxStart?: number;
        _fxLife?: number;
        _vx?: number;
        _vy?: number;
        _vz?: number;
        _fxFloat?: boolean;
      };
      gObj._fxStart = this.clock;
      gObj._fxLife = burst ? 1.8 : 1.4;
      gObj._vx = 0;
      gObj._vy = 0.55;
      gObj._vz = 0;
      gObj._fxFloat = true;
      this.fxGroup.add(glow);
    }
  }

  /** Dirt/rock chip burst while digging — shared geo, hard cap. */
  spawnDigDebris(wx: number, wz: number, color = 0xc08040): void {
    if (this.fxGroup.children.length > this.FX_CAP - 4) this.trimFx();
    const count = this.digLoad ? 2 : 4;
    for (let i = 0; i < count; i++) {
      if (this.fxGroup.children.length >= this.FX_CAP) break;
      const mat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 });
      mat.userData.disposeMat = true;
      const m = new THREE.Mesh(this.fxDebrisGeo, mat);
      const s = 0.7 + Math.random() * 0.8;
      m.scale.set(s, s * 0.8, s);
      m.position.set(wx + (Math.random() - 0.5) * 0.6, 0.6 + Math.random() * 0.8, wz + (Math.random() - 0.5) * 0.6);
      const obj = m as THREE.Mesh & { _fxStart?: number; _fxLife?: number; _vx?: number; _vy?: number; _vz?: number };
      obj._fxStart = this.clock;
      obj._fxLife = 0.35 + Math.random() * 0.25;
      obj._vx = (Math.random() - 0.5) * 3;
      obj._vy = 1.5 + Math.random() * 2.5;
      obj._vz = (Math.random() - 0.5) * 3;
      this.fxGroup.add(m);
    }
  }

  /** Raycast tile meshes (correct for tall earth tops) — falls back to ground plane. */
  pickTile(nx: number, ny: number): { x: number; z: number; tileX?: number; tileY?: number } | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(nx, ny), this.camera);
    const hits = raycaster.intersectObjects(this.gridGroup.children, true);
    let sideHit: { x: number; z: number; tileX: number; tileY: number } | null = null;
    for (const h of hits) {
      let o: THREE.Object3D | null = h.object;
      while (o) {
        if (o.userData && typeof o.userData.tileX === 'number') {
          const picked = {
            x: h.point.x,
            z: h.point.z,
            tileX: o.userData.tileX as number,
            tileY: o.userData.tileY as number,
          };
          // Prefer the cube top the cursor is on. Side hits of a neighbor
          // cube otherwise steal the drag and light the wrong row.
          let top = false;
          if (h.face) {
            const n = h.face.normal.clone().transformDirection(h.object.matrixWorld);
            top = n.y > 0.45;
          }
          if (top) return picked;
          if (!sideHit) sideHit = picked;
          break;
        }
        o = o.parent;
      }
    }
    if (sideHit) return sideHit;
    const ground = this.raycastGround(nx, ny);
    if (!ground) return null;
    return { x: ground.x, z: ground.z };
  }

  spawnLightning(from: THREE.Vector3, to: THREE.Vector3): void {
    const points = [from.clone(), to.clone().add(new THREE.Vector3(0, 1, 0))];
    const mid = from.clone().lerp(to, 0.5);
    mid.y += 2 + Math.random();
    mid.x += (Math.random() - 0.5) * 2;
    points.splice(1, 0, mid);
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    geo.userData.disposeGeo = true;
    const lmat = new THREE.LineBasicMaterial({ color: 0xaaddff, transparent: true, opacity: 0.95 });
    lmat.userData.disposeMat = true;
    const line = new THREE.Line(geo, lmat);
    this.fxGroup.add(line);
    const obj = line as THREE.Line & { _fxStart?: number; _fxLife?: number };
    obj._fxStart = this.clock;
    obj._fxLife = 0.35;
  }

  update(dt: number): void {
    this.clock += dt;
    if (this.heartGroup?.heartCore) {
      const s = 1 + Math.sin(this.clock * 3) * 0.05;
      this.heartGroup.heartCore.scale.setScalar(s);
      if (this.heartGroup.heartLight) {
        this.heartGroup.heartLight.intensity = 1.1 + Math.sin(this.clock * 3) * 0.25;
      }
      this.heartGroup.rotation.y += dt * 0.3;
      if (this.heartGroup.heartCrown) {
        this.heartGroup.heartCrown.rotation.y -= dt * 0.45;
      }
    }
    this.dust.rotation.y += dt * 0.012;
    this.dust.position.y = Math.sin(this.clock * 0.18) * 0.3;
    for (const portal of this.portals) {
      const ring = portal.userData.portalRing as THREE.Object3D | undefined;
      const core = portal.userData.portalCore as THREE.Object3D | undefined;
      if (ring) {
        ring.rotation.z += dt * 0.85;
        ring.rotation.y = Math.sin(this.clock * 0.7 + portal.position.x) * 0.18;
      }
      if (core) {
        const pulse = 0.94 + Math.sin(this.clock * 4 + portal.position.z) * 0.08;
        core.scale.setScalar(pulse);
      }
    }
    for (const t of this.torches) {
      if (t.torchLight) {
        t.torchLight.intensity = 2.8 + Math.random() * 0.8 + Math.sin(this.clock * 8 + t.position.x) * 0.35;
      }
      if (t.flame) {
        t.flame.scale.setScalar(0.9 + Math.random() * 0.25);
      }
    }
    // Sparkle gold seams without allocating new meshes
    for (const child of this.gridGroup.children) {
      if (child.userData?.glitterSpin) {
        child.rotation.y += dt * 1.1;
      }
    }
    if (this.goldHoard.visible) {
      this.goldHoard.rotation.y += dt * 0.15;
    }
    for (let i = this.fxGroup.children.length - 1; i >= 0; i--) {
      const c = this.fxGroup.children[i] as THREE.Object3D & {
        _fxStart?: number;
        _fxLife?: number;
        _vx?: number;
        _vy?: number;
        _vz?: number;
        _fxFloat?: boolean;
      };
      if (c._fxStart !== undefined && c._fxLife !== undefined) {
        const age = this.clock - c._fxStart;
        const life = c._fxLife;
        if (age > life) {
          this.disposeFxChild(c);
          this.fxGroup.remove(c);
        } else if ((c as THREE.Mesh).material) {
          const mat = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
          const t = age / life;
          if (mat.opacity !== undefined) mat.opacity = Math.max(0, 1 - t * t);
          const floaty = !!(c as { _fxFloat?: boolean })._fxFloat;
          if (c._vx !== undefined) {
            c.position.x += (c._vx ?? 0) * dt;
            c.position.y += (c._vy ?? 0) * dt;
            c.position.z += (c._vz ?? 0) * dt;
            c._vy = (c._vy ?? 0) - (floaty ? 1.2 : 6) * dt;
            if (floaty) {
              // Soft expand then shrink for screenshot readability
              const s = 1 + Math.sin(t * Math.PI) * 0.45;
              c.scale.setScalar(s);
              c.rotation.y += dt * 2;
            } else {
              c.rotation.x += dt * 4;
              c.rotation.z += dt * 3;
            }
          } else {
            c.position.y += dt * 1.5;
          }
        }
      }
    }
  }

  render(): void {
    if (this.contextLost) return;
    try {
      if (this.useComposer) {
        this.composer.render();
      } else {
        this.renderer.render(this.scene, this.camera);
      }
      this.renderFails = 0;
    } catch (err) {
      this.renderFails++;
      console.error('[underkeep] render failed', err);
      // Fall back to direct render (skip bloom) after first failure
      this.useComposer = false;
      try {
        this.renderer.render(this.scene, this.camera);
      } catch (err2) {
        console.error('[underkeep] fallback render failed', err2);
        if (this.renderFails >= 3) {
          this.contextLost = true;
          this.onContextLost?.();
        }
      }
    }
  }

  raycastGround(nx: number, ny: number): THREE.Vector3 | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(nx, ny), this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, hit)) return hit;
    return null;
  }
}

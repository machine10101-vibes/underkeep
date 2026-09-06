import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Grid } from '../game/Grid';
import { TILE_SIZE, TileKind } from '../game/types';
import {
  floorMaterial,
  makeBlockEdgeGeo,
  makeCreatureMesh,
  makeFloorGeo,
  makeGoldVeinGeo,
  makeHeartGeo,
  makeRockGeo,
  makeRoomDecal,
  makeTorchMesh,
  makeWallGeo,
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
  private heartGroup: (THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }) | null = null;
  private markerMesh: THREE.Mesh;
  private selectRing: THREE.Mesh;
  private clock = 0;
  private edgeMat: THREE.LineBasicMaterial;
  private earthEdgeMat: THREE.LineBasicMaterial;
  private goldEdgeMat: THREE.LineBasicMaterial;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x18141c);
    this.scene.fog = new THREE.FogExp2(0x16121a, 0.0075);

    this.camera = new THREE.PerspectiveCamera(52, 1, 0.1, 220);
    this.camera.position.set(0, 32, 24);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
      alpha: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.55;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    // Bright enough ambient + hemisphere so PBR tiles read on mobile GPUs
    const amb = new THREE.AmbientLight(0xd0c4b0, 0.95);
    this.scene.add(amb);
    const hemi = new THREE.HemisphereLight(0xfff0e0, 0x3a3040, 0.7);
    hemi.position.set(0, 40, 0);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xfff0d8, 1.15);
    dir.position.set(22, 48, 14);
    dir.castShadow = true;
    dir.shadow.mapSize.set(1024, 1024);
    dir.shadow.camera.near = 5;
    dir.shadow.camera.far = 120;
    dir.shadow.camera.left = -55;
    dir.shadow.camera.right = 55;
    dir.shadow.camera.top = 55;
    dir.shadow.camera.bottom = -55;
    dir.shadow.bias = -0.0006;
    dir.shadow.intensity = 0.55;
    this.scene.add(dir);

    const fill = new THREE.DirectionalLight(0x7090c8, 0.35);
    fill.position.set(-18, 28, -14);
    this.scene.add(fill);

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
    this.scene.add(this.entityGroup);
    this.scene.add(this.fxGroup);

    this.edgeMat = new THREE.LineBasicMaterial({
      color: 0x2a2218,
      transparent: true,
      opacity: 0.55,
    });
    this.earthEdgeMat = new THREE.LineBasicMaterial({
      color: 0x3a2818,
      transparent: true,
      opacity: 0.7,
    });
    this.goldEdgeMat = new THREE.LineBasicMaterial({
      color: 0x8a6810,
      transparent: true,
      opacity: 0.85,
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

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    // Cap bloom so non-emissive earth/floors stay visible
    // Keep bloom subtle — high strength was crushing non-emissive tiles to black
    const isCoarse = typeof window !== 'undefined' && window.matchMedia?.('(pointer: coarse)').matches;
    this.bloomPass = new UnrealBloomPass(
      new THREE.Vector2(1, 1),
      isCoarse ? 0.1 : 0.14,
      0.35,
      0.95
    );
    this.composer.addPass(this.bloomPass);
    this.composer.addPass(new ShaderPass(ColorGradeShader));

    this.onResize();
    window.addEventListener('resize', () => this.onResize());
  }

  onResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
  }

  rebuildGrid(grid: Grid): void {
    while (this.gridGroup.children.length) {
      const c = this.gridGroup.children.pop()!;
      this.gridGroup.remove(c);
    }
    this.tileMeshes.clear();
    this.torches = [];
    this.heartGroup = null;

    for (const tile of grid.tiles) {
      const w = grid.tileToWorld(tile.x, tile.y);
      const key = `${tile.x},${tile.y}`;

      if (tile.kind === TileKind.Rock) {
        const mesh = new THREE.Mesh(makeRockGeo(), tileMaterial(TileKind.Rock, false, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.gridGroup.add(mesh);
        this.addEdge(w.x, w.z, 2.85, this.edgeMat);
        this.tileMeshes.set(key, mesh);
        continue;
      }

      if (tile.kind === TileKind.Earth || (tile.kind === TileKind.Gold && !tile.fortified)) {
        const geo = tile.kind === TileKind.Gold ? makeGoldVeinGeo() : makeWallGeo();
        const mesh = new THREE.Mesh(geo, tileMaterial(tile.kind, false, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.gridGroup.add(mesh);
        this.addEdge(
          w.x,
          w.z,
          2.35,
          tile.kind === TileKind.Gold ? this.goldEdgeMat : this.earthEdgeMat
        );
        this.tileMeshes.set(key, mesh);
        if (tile.mark) {
          const mark = new THREE.Mesh(
            new THREE.PlaneGeometry(TILE_SIZE * 0.6, TILE_SIZE * 0.6),
            new THREE.MeshBasicMaterial({
              color: tile.mark === 1 ? 0xff4422 : tile.mark === 2 ? 0x44aaff : 0xaaaaaa,
              transparent: true,
              opacity: 0.55,
              depthWrite: false,
            })
          );
          mark.rotation.x = -Math.PI / 2;
          mark.position.set(w.x, 2.42, w.z);
          this.gridGroup.add(mark);
        }
        continue;
      }

      if (tile.fortified) {
        const mesh = new THREE.Mesh(makeWallGeo(true), tileMaterial(TileKind.Earth, true, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.gridGroup.add(mesh);
        this.addEdge(w.x, w.z, 2.35, this.edgeMat);
        this.tileMeshes.set(key, mesh);
        continue;
      }

      // floors — Claimed / Dirt / Heart with room-specific materials
      const floor = new THREE.Mesh(makeFloorGeo(), floorMaterial(tile.kind, tile.room));
      floor.position.set(w.x, 0, w.z);
      floor.receiveShadow = true;
      this.gridGroup.add(floor);
      this.tileMeshes.set(key, floor);

      if (tile.kind === TileKind.Heart) {
        const heart = makeHeartGeo();
        heart.position.set(w.x, 0, w.z);
        this.gridGroup.add(heart);
        this.heartGroup = heart as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight };
      }

      const decal = makeRoomDecal(tile.room);
      if (decal) {
        decal.position.set(w.x, 0.14, w.z);
        this.gridGroup.add(decal);
      }

      if (tile.mark) {
        const mark = new THREE.Mesh(
          new THREE.PlaneGeometry(TILE_SIZE * 0.7, TILE_SIZE * 0.7),
          new THREE.MeshBasicMaterial({
            color: tile.mark === 1 ? 0xff4422 : tile.mark === 2 ? 0x44aaff : 0xccccaa,
            transparent: true,
            opacity: 0.45,
            depthWrite: false,
          })
        );
        mark.rotation.x = -Math.PI / 2;
        mark.position.set(w.x, 0.16, w.z);
        this.gridGroup.add(mark);
      }

      if (tile.torch) {
        // Limit real point lights for mobile perf — every other torch is emissive-only
        const withLight = this.torches.filter((x) => x.torchLight).length < 14 && (tile.x + tile.y) % 2 === 0;
        const torch = makeTorchMesh(withLight) as THREE.Group & {
          flame?: THREE.Mesh;
          torchLight?: THREE.PointLight;
        };
        // Nestle against nearest solid wall
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
          if (n && (n.kind === TileKind.Earth || n.kind === TileKind.Gold || n.kind === TileKind.Rock || n.fortified)) {
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
  }

  private addEdge(x: number, z: number, height: number, mat: THREE.LineBasicMaterial): void {
    const line = new THREE.Line(makeBlockEdgeGeo(height), mat);
    line.position.set(x, 0, z);
    this.gridGroup.add(line);
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

  spawnFx(pos: THREE.Vector3, color: number, life = 0.6): void {
    const m = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 8, 8),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 })
    );
    m.position.copy(pos);
    m.position.y += 0.5;
    this.fxGroup.add(m);
    const start = this.clock;
    const obj = m as THREE.Mesh & { _fxStart?: number; _fxLife?: number };
    obj._fxStart = start;
    obj._fxLife = life;
  }

  spawnLightning(from: THREE.Vector3, to: THREE.Vector3): void {
    const points = [from.clone(), to.clone().add(new THREE.Vector3(0, 1, 0))];
    const mid = from.clone().lerp(to, 0.5);
    mid.y += 2 + Math.random();
    mid.x += (Math.random() - 0.5) * 2;
    points.splice(1, 0, mid);
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(
      geo,
      new THREE.LineBasicMaterial({ color: 0xaaddff, transparent: true, opacity: 0.95 })
    );
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
        this.heartGroup.heartLight.intensity = 2.0 + Math.sin(this.clock * 3) * 0.5;
      }
      this.heartGroup.rotation.y += dt * 0.3;
    }
    for (const t of this.torches) {
      if (t.torchLight) {
        t.torchLight.intensity = 2.0 + Math.random() * 0.6 + Math.sin(this.clock * 8 + t.position.x) * 0.25;
      }
      if (t.flame) {
        t.flame.scale.setScalar(0.9 + Math.random() * 0.25);
      }
    }
    for (let i = this.fxGroup.children.length - 1; i >= 0; i--) {
      const c = this.fxGroup.children[i] as THREE.Object3D & { _fxStart?: number; _fxLife?: number };
      if (c._fxStart !== undefined && c._fxLife !== undefined) {
        const age = this.clock - c._fxStart;
        if (age > c._fxLife) {
          this.fxGroup.remove(c);
        } else if ((c as THREE.Mesh).material) {
          const mat = (c as THREE.Mesh).material as THREE.MeshBasicMaterial;
          if (mat.opacity !== undefined) mat.opacity = 1 - age / c._fxLife;
          c.position.y += dt * 1.5;
        }
      }
    }
  }

  render(): void {
    this.composer.render();
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

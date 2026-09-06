import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Grid } from '../game/Grid';
import { TILE_SIZE, TileKind } from '../game/types';
import {
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
    uContrast: { value: 1.15 },
    uSaturation: { value: 1.1 },
    uVignette: { value: 0.45 },
    uTint: { value: new THREE.Color(1.05, 0.95, 0.85) },
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
      c.rgb *= smoothstep(0.95, 0.35, d * uVignette + (1.0 - uVignette));
      gl_FragColor = c;
    }
  `,
};

export class DungeonRenderer {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  private composer: EffectComposer;
  private gridGroup = new THREE.Group();
  private entityGroup = new THREE.Group();
  private fxGroup = new THREE.Group();
  private tileMeshes = new Map<string, THREE.Object3D>();
  private torches: Array<THREE.Group & { flame?: THREE.Mesh; torchLight?: THREE.PointLight }> = [];
  private heartGroup: (THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }) | null = null;
  private markerMesh: THREE.Mesh;
  private selectRing: THREE.Mesh;
  private clock = 0;
  private dirtFloorMat: THREE.MeshStandardMaterial;
  private claimedFloorMat: THREE.MeshStandardMaterial;

  constructor(canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x08060a);
    this.scene.fog = new THREE.FogExp2(0x0c0810, 0.028);

    this.camera = new THREE.PerspectiveCamera(50, 1, 0.1, 200);
    this.camera.position.set(0, 28, 22);
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    const amb = new THREE.AmbientLight(0x2a2030, 0.35);
    this.scene.add(amb);
    const dir = new THREE.DirectionalLight(0xffe0c0, 0.55);
    dir.position.set(20, 40, 10);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    dir.shadow.camera.near = 5;
    dir.shadow.camera.far = 100;
    dir.shadow.camera.left = -50;
    dir.shadow.camera.right = 50;
    dir.shadow.camera.top = 50;
    dir.shadow.camera.bottom = -50;
    dir.shadow.bias = -0.0005;
    this.scene.add(dir);
    const fill = new THREE.DirectionalLight(0x4060a0, 0.15);
    fill.position.set(-15, 20, -10);
    this.scene.add(fill);

    this.scene.add(this.gridGroup);
    this.scene.add(this.entityGroup);
    this.scene.add(this.fxGroup);

    this.dirtFloorMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a1c,
      metalness: 0.05,
      roughness: 0.95,
    });
    this.claimedFloorMat = new THREE.MeshStandardMaterial({
      color: 0x4a3a32,
      metalness: 0.2,
      roughness: 0.7,
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
    this.markerMesh.position.y = 0.05;
    this.markerMesh.visible = false;
    this.scene.add(this.markerMesh);

    this.selectRing = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.55, 24),
      new THREE.MeshBasicMaterial({ color: 0xffcc66, transparent: true, opacity: 0.8, side: THREE.DoubleSide })
    );
    this.selectRing.rotation.x = -Math.PI / 2;
    this.selectRing.position.y = 0.08;
    this.selectRing.visible = false;
    this.scene.add(this.selectRing);

    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.35, 0.6, 0.85);
    this.composer.addPass(bloom);
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
    // clear
    while (this.gridGroup.children.length) {
      const c = this.gridGroup.children.pop()!;
      this.gridGroup.remove(c);
      c.traverse((o) => {
        const m = o as THREE.Mesh;
        if (m.geometry && m.geometry !== makeFloorGeo() && m.geometry !== makeWallGeo()) {
          // shared geos — don't dispose shared
        }
      });
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
        this.tileMeshes.set(key, mesh);
        // mark overlay
        if (tile.mark) {
          const mark = new THREE.Mesh(
            new THREE.PlaneGeometry(TILE_SIZE * 0.6, TILE_SIZE * 0.6),
            new THREE.MeshBasicMaterial({
              color: tile.mark === 1 ? 0xff4422 : tile.mark === 2 ? 0x44aaff : 0xaaaaaa,
              transparent: true,
              opacity: 0.5,
              depthWrite: false,
            })
          );
          mark.rotation.x = -Math.PI / 2;
          mark.position.set(w.x, 2.45, w.z);
          this.gridGroup.add(mark);
        }
        continue;
      }

      if (tile.fortified) {
        const mesh = new THREE.Mesh(makeWallGeo(), tileMaterial(TileKind.Earth, true, tile.room));
        mesh.position.set(w.x, 0, w.z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.gridGroup.add(mesh);
        this.tileMeshes.set(key, mesh);
        continue;
      }

      // floors
      const floor = new THREE.Mesh(
        makeFloorGeo(),
        tile.kind === TileKind.Claimed || tile.kind === TileKind.Heart
          ? this.claimedFloorMat
          : this.dirtFloorMat
      );
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
        decal.position.set(w.x, 0.03, w.z);
        this.gridGroup.add(decal);
      }

      if (tile.mark) {
        const mark = new THREE.Mesh(
          new THREE.PlaneGeometry(TILE_SIZE * 0.7, TILE_SIZE * 0.7),
          new THREE.MeshBasicMaterial({
            color: tile.mark === 1 ? 0xff4422 : tile.mark === 2 ? 0x44aaff : 0xccccaa,
            transparent: true,
            opacity: 0.4,
            depthWrite: false,
          })
        );
        mark.rotation.x = -Math.PI / 2;
        mark.position.set(w.x, 0.06, w.z);
        this.gridGroup.add(mark);
      }

      if (tile.torch) {
        const torch = makeTorchMesh() as THREE.Group & {
          flame?: THREE.Mesh;
          torchLight?: THREE.PointLight;
        };
        // place against a wall direction
        torch.position.set(w.x + 0.7, 0, w.z);
        this.gridGroup.add(torch);
        this.torches.push(torch);
      }
    }
  }

  /** Cheaper partial update — rebuild for Phase 1 simplicity when dirty */
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
    // heart pulse
    if (this.heartGroup?.heartCore) {
      const s = 1 + Math.sin(this.clock * 3) * 0.06;
      this.heartGroup.heartCore.scale.setScalar(s);
      if (this.heartGroup.heartLight) {
        this.heartGroup.heartLight.intensity = 3.5 + Math.sin(this.clock * 3) * 1.2;
      }
      this.heartGroup.rotation.y += dt * 0.3;
    }
    // torch flicker
    for (const t of this.torches) {
      if (t.torchLight) {
        t.torchLight.intensity = 1.2 + Math.random() * 0.8 + Math.sin(this.clock * 8 + t.position.x) * 0.3;
      }
      if (t.flame) {
        t.flame.scale.setScalar(0.9 + Math.random() * 0.25);
      }
    }
    // fx cleanup
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

  /** Raycast to ground plane y=0 */
  raycastGround(nx: number, ny: number): THREE.Vector3 | null {
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(new THREE.Vector2(nx, ny), this.camera);
    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(plane, hit)) return hit;
    return null;
  }
}

import * as THREE from 'three';
import {
  CREATURE_STATS,
  CreatureKind,
  DoorState,
  RoomType,
  TileKind,
} from '../game/types';
import {
  floorMaterial,
  makeBridgeMesh,
  makeClaimedFloorMesh,
  makeCreatureMesh,
  makeDoorMesh,
  makeFloorGeo,
  makeFortifiedWallMesh,
  makeGemGlitter,
  makeGoldBag,
  makeGoldGlitter,
  makeGoldVeinGeo,
  makeHealthFlower,
  makeHeartGeo,
  makeKeeperHand,
  makeLavaMesh,
  makeRallyFlagMesh,
  makeRockGeo,
  makeRoomDecal,
  makeRoomProps,
  makeSentryTrapMesh,
  makeTorchMesh,
  makeWallFaceDetail,
  makeWallGeo,
  makeWaterMesh,
  poseScrabblerPickaxe,
  tileMaterial,
} from '../rendering/meshes';

export type StudioPose = 'idle' | 'walk' | 'dig' | 'attack';

interface CatalogEntry {
  id: string;
  name: string;
  group: string;
  poses?: StudioPose[];
  build: () => THREE.Object3D;
}

const POSE_LABEL: Record<StudioPose, string> = {
  idle: 'Idle',
  walk: 'Walk',
  dig: 'Dig',
  attack: 'Attack',
};

function creatureMesh(kind: CreatureKind): THREE.Group {
  const stats = CREATURE_STATS[kind];
  return makeCreatureMesh(stats.color, stats.scale, kind);
}

function solidTile(kind: TileKind): THREE.Group {
  const g = new THREE.Group();
  const geo =
    kind === TileKind.Rock
      ? makeRockGeo()
      : kind === TileKind.Gem
        ? makeGoldVeinGeo()
        : makeWallGeo();
  const mesh = new THREE.Mesh(geo, tileMaterial(kind, false, RoomType.None));
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  g.add(mesh);
  if (kind === TileKind.Gold) {
    const face = makeWallFaceDetail(TileKind.Gold);
    face.position.z = 0;
    g.add(face);
  }
  if (kind === TileKind.Gem) g.add(makeGemGlitter());
  return g;
}

function floorTile(kind: TileKind, room = RoomType.None): THREE.Group {
  const g = new THREE.Group();
  const mesh = new THREE.Mesh(makeFloorGeo(), floorMaterial(kind, room));
  mesh.receiveShadow = true;
  g.add(mesh);
  return g;
}

function roomPreview(room: RoomType): THREE.Group {
  const g = new THREE.Group();
  const floor = makeClaimedFloorMesh(room);
  g.add(floor);
  const props = makeRoomProps(room, 0);
  if (props) g.add(props);
  const decal = makeRoomDecal(room);
  if (decal) g.add(decal);
  return g;
}

const CREATURE_POSES: StudioPose[] = ['idle', 'walk', 'attack'];
const WORKER_POSES: StudioPose[] = ['idle', 'walk', 'dig'];

const CATALOG: CatalogEntry[] = [
  {
    id: 'scrabbler',
    name: 'Scrabbler',
    group: 'Minions',
    poses: WORKER_POSES,
    build: () => creatureMesh(CreatureKind.Scrabbler),
  },
  {
    id: 'skitterwing',
    name: 'Skitterwing',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Skitterwing),
  },
  {
    id: 'rattlekin',
    name: 'Rattlekin',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Rattlekin),
  },
  {
    id: 'emberling',
    name: 'Emberling',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Emberling),
  },
  {
    id: 'gravemage',
    name: 'Gravemage',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Gravemage),
  },
  {
    id: 'thornwitch',
    name: 'Thornwitch',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Thornwitch),
  },
  {
    id: 'bonewretch',
    name: 'Bonewretch',
    group: 'Minions',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.Bonewretch),
  },
  {
    id: 'hero-knight',
    name: 'Hero Knight',
    group: 'Enemies',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.HeroKnight),
  },
  {
    id: 'hero-archer',
    name: 'Hero Archer',
    group: 'Enemies',
    poses: CREATURE_POSES,
    build: () => creatureMesh(CreatureKind.HeroArcher),
  },
  { id: 'door-closed', name: 'Door (closed)', group: 'Items', build: () => makeDoorMesh(DoorState.Closed) },
  { id: 'door-open', name: 'Door (open)', group: 'Items', build: () => makeDoorMesh(DoorState.Open) },
  { id: 'sentry', name: 'Sentry Trap', group: 'Items', build: () => makeSentryTrapMesh() },
  { id: 'rally', name: 'Rally Flag', group: 'Items', build: () => makeRallyFlagMesh() },
  { id: 'gold-bag', name: 'Gold Bag', group: 'Items', build: () => makeGoldBag() },
  { id: 'torch', name: 'Torch', group: 'Items', build: () => makeTorchMesh(false) },
  { id: 'flower-minion', name: 'Health Flower', group: 'Items', build: () => makeHealthFlower(false) },
  { id: 'flower-hero', name: 'Hero Health Flower', group: 'Items', build: () => makeHealthFlower(true) },
  { id: 'keeper-hand', name: 'Keeper Hand', group: 'Items', build: () => makeKeeperHand() },
  { id: 'gold-glitter', name: 'Gold Glitter', group: 'Items', build: () => makeGoldGlitter() },
  { id: 'gem-glitter', name: 'Gem Glitter', group: 'Items', build: () => makeGemGlitter() },
  { id: 'earth', name: 'Earth Wall', group: 'Terrain', build: () => solidTile(TileKind.Earth) },
  { id: 'rock', name: 'Rock', group: 'Terrain', build: () => solidTile(TileKind.Rock) },
  { id: 'gold-vein', name: 'Gold Vein', group: 'Terrain', build: () => solidTile(TileKind.Gold) },
  { id: 'gem-vein', name: 'Gem Seam', group: 'Terrain', build: () => solidTile(TileKind.Gem) },
  { id: 'fort-wall', name: 'Fortified Wall', group: 'Terrain', build: () => makeFortifiedWallMesh() },
  { id: 'dirt', name: 'Dirt Floor', group: 'Terrain', build: () => floorTile(TileKind.Dirt) },
  { id: 'claimed', name: 'Claimed Floor', group: 'Terrain', build: () => makeClaimedFloorMesh(RoomType.None) },
  { id: 'heart', name: 'Dungeon Heart', group: 'Terrain', build: () => makeHeartGeo() },
  { id: 'lava', name: 'Lava', group: 'Terrain', build: () => makeLavaMesh() },
  { id: 'water', name: 'Water', group: 'Terrain', build: () => makeWaterMesh() },
  { id: 'bridge-wood', name: 'Wooden Bridge', group: 'Terrain', build: () => makeBridgeMesh(false) },
  { id: 'bridge-stone', name: 'Stone Bridge', group: 'Terrain', build: () => makeBridgeMesh(true) },
  { id: 'room-treasury', name: 'Treasury', group: 'Rooms', build: () => roomPreview(RoomType.Treasury) },
  { id: 'room-lair', name: 'Lair', group: 'Rooms', build: () => roomPreview(RoomType.Lair) },
  { id: 'room-hatchery', name: 'Hatchery', group: 'Rooms', build: () => roomPreview(RoomType.Hatchery) },
  { id: 'room-training', name: 'Training Room', group: 'Rooms', build: () => roomPreview(RoomType.Training) },
  { id: 'room-library', name: 'Library', group: 'Rooms', build: () => roomPreview(RoomType.Library) },
  { id: 'room-portal', name: 'Portal', group: 'Rooms', build: () => roomPreview(RoomType.Portal) },
  { id: 'room-guard', name: 'Guard Room', group: 'Rooms', build: () => roomPreview(RoomType.Guard) },
  { id: 'room-workshop', name: 'Workshop', group: 'Rooms', build: () => roomPreview(RoomType.Workshop) },
  { id: 'room-prison', name: 'Prison', group: 'Rooms', build: () => roomPreview(RoomType.Prison) },
  { id: 'room-torture', name: 'Torture Chamber', group: 'Rooms', build: () => roomPreview(RoomType.Torture) },
  { id: 'room-graveyard', name: 'Graveyard', group: 'Rooms', build: () => roomPreview(RoomType.Graveyard) },
  { id: 'room-temple', name: 'Temple', group: 'Rooms', build: () => roomPreview(RoomType.Temple) },
  { id: 'room-pit', name: 'Combat Pit', group: 'Rooms', build: () => roomPreview(RoomType.CombatPit) },
  { id: 'room-wagerden', name: 'Wagerden', group: 'Rooms', build: () => roomPreview(RoomType.Casino) },
];

/**
 * In-game model inspect window. Click-drag orbits each procedural mesh
 * so lighting, silhouette, and animation can be reviewed.
 */
export class ModelStudio {
  private root: HTMLElement;
  private listEl: HTMLElement;
  private poseEl: HTMLElement;
  private titleEl: HTMLElement;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private current: THREE.Object3D | null = null;
  private entry: CatalogEntry | null = null;
  private pose: StudioPose = 'idle';
  private animT = 0;
  private spherical = new THREE.Spherical(5.2, 1.12, 0.55);
  private look = new THREE.Vector3(0, 1, 0);
  private dragging = false;
  private dragBtn = 0;
  private lastX = 0;
  private lastY = 0;
  private autoSpin = false;
  private openFlag = false;
  private stage!: THREE.Group;
  private prevClear = new THREE.Color();
  private digWall: THREE.Object3D | null = null;

  constructor(
    private canvas: HTMLCanvasElement,
    private gl: THREE.WebGLRenderer
  ) {
    this.camera = new THREE.PerspectiveCamera(42, Math.max(1, canvas.clientWidth) / Math.max(1, canvas.clientHeight), 0.08, 80);
    this.root = document.getElementById('studio') as HTMLElement;
    this.listEl = document.getElementById('studio-list') as HTMLElement;
    this.poseEl = document.getElementById('studio-poses') as HTMLElement;
    this.titleEl = document.getElementById('studio-model-name') as HTMLElement;
    this.buildScene();
    this.buildList();
    this.bindUi();
    this.bindOrbit();
    window.addEventListener('resize', () => this.resize(this.canvas.clientWidth, this.canvas.clientHeight));
  }

  isOpen(): boolean {
    return this.openFlag;
  }

  catalogCount(): number {
    return CATALOG.length;
  }

  toggle(): void {
    if (this.openFlag) this.close();
    else this.open();
  }

  open(): void {
    this.openFlag = true;
    this.root.hidden = false;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = true;
    this.canvas.style.cursor = 'grab';
    if (!this.entry) this.select(CATALOG[0].id);
    this.fitCurrent();
  }

  close(): void {
    this.openFlag = false;
    this.dragging = false;
    this.root.hidden = true;
    const hud = document.getElementById('hud');
    if (hud) hud.hidden = false;
  }

  resize(w: number, h: number): void {
    this.camera.aspect = Math.max(1, w) / Math.max(1, h);
    this.camera.updateProjectionMatrix();
  }

  tick(dt: number): void {
    if (!this.openFlag) return;
    this.animT += dt;
    if (this.autoSpin) this.spherical.theta += dt * 0.55;
    this.applyPose(dt);
    this.updateCamera();
  }

  render(): void {
    this.gl.getClearColor(this.prevClear);
    const prevA = this.gl.getClearAlpha();
    this.gl.setClearColor(0x140c08, 1);
    this.gl.render(this.scene, this.camera);
    this.gl.setClearColor(this.prevClear, prevA);
  }

  private buildScene(): void {
    this.scene.background = new THREE.Color(0x140c08);
    this.scene.fog = new THREE.Fog(0x140c08, 14, 32);

    this.scene.add(new THREE.HemisphereLight(0xffe8c8, 0x2a1810, 0.9));
    const key = new THREE.DirectionalLight(0xfff0d0, 2.05);
    key.position.set(4.5, 7.5, 5.5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.bias = -0.0004;
    key.shadow.camera.near = 0.5;
    key.shadow.camera.far = 28;
    key.shadow.camera.left = -6;
    key.shadow.camera.right = 6;
    key.shadow.camera.top = 6;
    key.shadow.camera.bottom = -6;
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0x88a0c8, 0.5);
    fill.position.set(-6, 3.5, -2);
    this.scene.add(fill);
    const rim = new THREE.DirectionalLight(0xff8040, 0.38);
    rim.position.set(-2, 4, 7);
    this.scene.add(rim);
    this.scene.add(new THREE.AmbientLight(0x6a5040, 0.32));

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(7.2, 48),
      new THREE.MeshStandardMaterial({ color: 0x2a1c14, roughness: 0.92, metalness: 0.08 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    this.scene.add(floor);

    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.55, 1.62, 48),
      new THREE.MeshBasicMaterial({ color: 0xc08030, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.008;
    this.scene.add(ring);

    const grid = new THREE.GridHelper(8, 16, 0x6a4020, 0x2e2218);
    grid.position.y = 0.004;
    const gridMat = grid.material as THREE.Material;
    gridMat.transparent = true;
    gridMat.opacity = 0.32;
    this.scene.add(grid);

    this.stage = new THREE.Group();
    this.scene.add(this.stage);
  }

  private buildList(): void {
    this.listEl.innerHTML = '';
    let lastGroup = '';
    for (const entry of CATALOG) {
      if (entry.group !== lastGroup) {
        lastGroup = entry.group;
        const h = document.createElement('div');
        h.className = 'studio-group';
        h.textContent = entry.group;
        this.listEl.appendChild(h);
      }
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'studio-item';
      btn.dataset.id = entry.id;
      btn.textContent = entry.name;
      btn.addEventListener('click', () => this.select(entry.id));
      this.listEl.appendChild(btn);
    }
  }

  private bindUi(): void {
    document.getElementById('btn-studio')?.addEventListener('click', () => this.toggle());
    document.getElementById('btn-studio-mobile')?.addEventListener('click', () => this.toggle());
    document.getElementById('studio-close')?.addEventListener('click', () => this.close());
    document.getElementById('studio-reset')?.addEventListener('click', () => this.fitCurrent());
    document.getElementById('studio-spin')?.addEventListener('click', (ev) => {
      this.autoSpin = !this.autoSpin;
      (ev.currentTarget as HTMLButtonElement).classList.toggle('on', this.autoSpin);
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.openFlag) {
        this.close();
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      if (e.key.toLowerCase() === 'v' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const t = e.target as HTMLElement | null;
        if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
        this.toggle();
        e.preventDefault();
      }
    });
  }

  private bindOrbit(): void {
    const onDown = (ev: PointerEvent) => {
      if (!this.openFlag) return;
      if (ev.target !== this.canvas) return;
      this.dragging = true;
      this.dragBtn = ev.button;
      this.lastX = ev.clientX;
      this.lastY = ev.clientY;
      this.canvas.style.cursor = 'grabbing';
      this.canvas.setPointerCapture(ev.pointerId);
      ev.preventDefault();
    };
    const onMove = (ev: PointerEvent) => {
      if (!this.openFlag || !this.dragging) return;
      const dx = ev.clientX - this.lastX;
      const dy = ev.clientY - this.lastY;
      this.lastX = ev.clientX;
      this.lastY = ev.clientY;
      if (this.dragBtn === 2 || ev.shiftKey) {
        const pan = this.spherical.radius * 0.0016;
        const right = new THREE.Vector3();
        const up = new THREE.Vector3();
        this.camera.matrix.extractBasis(right, up, new THREE.Vector3());
        this.look.addScaledVector(right, -dx * pan);
        this.look.addScaledVector(up, dy * pan);
      } else {
        this.spherical.theta -= dx * 0.007;
        this.spherical.phi -= dy * 0.007;
        this.spherical.phi = Math.max(0.06, Math.min(Math.PI - 0.06, this.spherical.phi));
      }
    };
    const onUp = (ev: PointerEvent) => {
      if (!this.dragging) return;
      this.dragging = false;
      if (this.openFlag) this.canvas.style.cursor = 'grab';
      try {
        this.canvas.releasePointerCapture(ev.pointerId);
      } catch {
        /* ignore */
      }
    };
    this.canvas.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    this.canvas.addEventListener('contextmenu', (ev) => {
      if (this.openFlag) ev.preventDefault();
    });
    this.canvas.addEventListener(
      'wheel',
      (ev) => {
        if (!this.openFlag) return;
        ev.preventDefault();
        ev.stopPropagation();
        const next = this.spherical.radius * (ev.deltaY > 0 ? 1.08 : 0.92);
        this.spherical.radius = Math.max(1.1, Math.min(22, next));
      },
      { passive: false, capture: true }
    );
  }

  private select(id: string): void {
    const entry = CATALOG.find((e) => e.id === id);
    if (!entry) return;
    this.entry = entry;
    if (this.current) this.stage.remove(this.current);
    this.current = entry.build();
    this.current.position.set(0, 0, 0);
    this.current.rotation.set(0, 0, 0);
    this.stage.add(this.current);
    this.animT = 0;
    this.pose = entry.poses?.[0] ?? 'idle';
    this.titleEl.textContent = entry.name;
    this.listEl.querySelectorAll('.studio-item').forEach((btn) => {
      btn.classList.toggle('on', (btn as HTMLElement).dataset.id === id);
    });
    this.buildPoseBar();
    this.fitCurrent();
  }

  private buildPoseBar(): void {
    this.poseEl.innerHTML = '';
    const poses = this.entry?.poses;
    if (!poses?.length) {
      this.poseEl.hidden = true;
      return;
    }
    this.poseEl.hidden = false;
    for (const pose of poses) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'studio-pose';
      btn.textContent = POSE_LABEL[pose];
      btn.classList.toggle('on', pose === this.pose);
      btn.addEventListener('click', () => {
        this.pose = pose;
        this.animT = 0;
        this.buildPoseBar();
      });
      this.poseEl.appendChild(btn);
    }
  }

  private fitCurrent(): void {
    if (!this.current) return;
    this.current.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(this.current);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    if (!Number.isFinite(center.y)) center.set(0, 0.8, 0);
    this.look.copy(center);
    this.spherical.radius = Math.max(2.2, size.length() * 1.15);
    this.spherical.phi = 1.12;
    this.spherical.theta = 0.55;
    this.autoSpin = false;
    document.getElementById('studio-spin')?.classList.remove('on');
  }

  private updateCamera(): void {
    const pos = new THREE.Vector3().setFromSpherical(this.spherical).add(this.look);
    this.camera.position.copy(pos);
    this.camera.lookAt(this.look);
  }

  private applyPose(dt: number): void {
    if (!this.current || !this.entry) return;
    if (this.current.userData.portalAnimated) {
      const ring = this.current.userData.portalRing as THREE.Object3D | undefined;
      const core = this.current.userData.portalCore as THREE.Object3D | undefined;
      if (ring) ring.rotation.y += dt * 0.8;
      if (core) {
        const s = 1 + Math.sin(this.animT * 3) * 0.04;
        core.scale.set(s, 1, 1);
      }
    }
    if (!this.entry.poses?.length) return;
    this.applyCreatureMotion(this.current, this.pose, this.animT, dt);
  }

  private applyCreatureMotion(mesh: THREE.Object3D, pose: StudioPose, t: number, _dt: number): void {
    const walk = pose === 'walk';
    const attack = pose === 'attack';
    const dig = pose === 'dig';
    const amp = walk ? 0.55 : 0;
    const w = t * (walk ? 8 : 0);
    mesh.traverse((o) => {
      const tag = o.userData?.walkLimb as string | undefined;
      if (!tag) return;
      const base = o.userData.baseRot as { x: number; y: number; z: number } | undefined;
      const bx = base?.x ?? 0;
      const by = base?.y ?? 0;
      const bz = base?.z ?? 0;
      if (tag === 'legL' || tag === 'armR') o.rotation.set(bx + Math.sin(w) * amp, by, bz);
      else if (tag === 'legR' || tag === 'armL') o.rotation.set(bx + Math.sin(w + Math.PI) * amp, by, bz);
    });
    const pick = (mesh as THREE.Group & { pickaxe?: THREE.Object3D }).pickaxe;
    if (pick) {
      poseScrabblerPickaxe(pick, t, dig);
      if (!dig) pick.visible = this.entry?.id === 'scrabbler';
    }
    if (dig && this.entry?.id === 'scrabbler') {
      if (!this.digWall) {
        this.digWall = solidTile(TileKind.Gold);
        this.digWall.position.set(0, 0, 2.05);
        this.stage.add(this.digWall);
      }
    } else if (this.digWall) {
      this.stage.remove(this.digWall);
      this.digWall = null;
    }
    if (walk) {
      mesh.position.y = Math.abs(Math.sin(t * 8)) * 0.06;
    } else if (attack) {
      mesh.rotation.x = Math.sin(t * 9) * 0.22;
      mesh.position.z = Math.sin(t * 9) * 0.12;
    } else {
      mesh.position.y = 0;
      mesh.rotation.x = 0;
      mesh.position.z = 0;
    }
  }
}

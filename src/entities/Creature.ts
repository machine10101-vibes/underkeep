import * as THREE from 'three';
import { Grid } from '../game/Grid';
import {
  CREATURE_STATS,
  CreatureKind,
  JobType,
  TILE_SIZE,
  Vec2,
} from '../game/types';

let nextId = 1;

export class Creature {
  readonly id: number;
  readonly kind: CreatureKind;
  readonly isHero: boolean;
  readonly isWorker: boolean;

  x: number;
  y: number;
  wx: number;
  wz: number;
  hp: number;
  maxHp: number;
  speed: number;
  damage: number;
  level = 1;

  job: JobType = JobType.Idle;
  jobTarget: Vec2 | null = null;
  path: Vec2[] = [];
  pathIndex = 0;
  workTimer = 0;
  stunTimer = 0;
  speedBuff = 0;
  hunger = 0;
  sleepNeed = 0;
  trainNeed = 0;
  held = false;
  fleeTimer = 0;
  attackCooldown = 0;
  goldCarried = 0;
  alive = true;

  mesh: THREE.Group;
  private bobPhase: number;
  digAnim = 0;
  /** Peck/bob phase while eating at Hatchery. */
  eatAnim = 0;
  /** True once this meal session announced a feast toast. */
  eatAnnounced = false;
  /** Acc for periodic lair heal mentor toasts. */
  restHealAcc = 0;
  /** Smooth facing yaw (radians, Y axis). */
  facing = 0;
  private facingTarget = 0;
  /** Optional pickaxe sub-mesh for dig swing (set by visual). */
  pickaxe: THREE.Object3D | null = null;
  selectRing: THREE.Object3D | null = null;
  /** Assigned Lair bed tile key "x,y" or null. */
  bedKey: string | null = null;

  constructor(kind: CreatureKind, tileX: number, tileY: number, grid: Grid) {
    this.id = nextId++;
    this.kind = kind;
    this.isHero = kind === CreatureKind.HeroKnight || kind === CreatureKind.HeroArcher;
    this.isWorker = kind === CreatureKind.Scrabbler;
    const stats = CREATURE_STATS[kind];
    this.maxHp = stats.hp;
    this.hp = stats.hp;
    this.speed = stats.speed;
    this.damage = stats.damage;
    this.x = tileX;
    this.y = tileY;
    const w = grid.tileToWorld(tileX, tileY);
    this.wx = w.x;
    this.wz = w.z;
    this.bobPhase = Math.random() * Math.PI * 2;
    this.mesh = new THREE.Group(); // filled by renderer
  }

  setMesh(mesh: THREE.Group): void {
    this.mesh = mesh;
    this.syncMesh(0);
  }

  syncMesh(time: number): void {
    if (this.held) {
      this.mesh.visible = false;
      return;
    }
    this.mesh.visible = true;
    const digging = this.job === JobType.Dig || this.job === JobType.Mine || this.job === JobType.Claim || this.job === JobType.Fortify;
    const sleeping = this.job === JobType.Sleep;
    const eating = this.job === JobType.Eat;
    if (eating) this.eatAnim += 0.35;
    const bob =
      this.kind === CreatureKind.Skitterwing
        ? Math.sin(time * 6 + this.bobPhase) * 0.25 + 0.4
        : digging
          ? Math.sin(time * 14 + this.bobPhase) * 0.06
          : sleeping
            ? Math.sin(time * 2 + this.bobPhase) * 0.02
            : eating
              ? Math.sin(this.eatAnim * 14 + this.bobPhase) * 0.1
              : Math.sin(time * 8 + this.bobPhase) * 0.04;
    const yOff = sleeping ? 0.12 : eating ? 0.05 + Math.abs(Math.sin(this.eatAnim * 14)) * 0.08 : 0;
    this.mesh.position.set(this.wx, bob + yOff, this.wz);
    // Smooth Y facing — avoid lookAt snap/jitter
    let face = this.facing;
    let d = this.facingTarget - face;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    face += d * Math.min(1, 10 * (1 / 60)); // ~frame-rate independent-ish; dt applied in move
    this.facing = face;
    this.mesh.rotation.y = this.facing;
    if (this.stunTimer > 0) {
      this.mesh.rotation.z = Math.sin(time * 20) * 0.3;
    } else if (sleeping) {
      this.mesh.rotation.z = 0.35;
      this.mesh.rotation.x = 0.05;
    } else if (eating) {
      // Brief peck/bob pose while feasting
      this.mesh.rotation.x = Math.sin(this.eatAnim * 14) * 0.35;
      this.mesh.rotation.z = Math.sin(this.eatAnim * 10) * 0.12;
    } else {
      this.mesh.rotation.z = 0;
      this.mesh.rotation.x = 0;
    }
    if (this.pickaxe) {
      const swinging = this.job === JobType.Dig || this.job === JobType.Mine;
      if (swinging) {
        // Large arm+tool arc — readable from overview camera
        this.digAnim += 0.45;
        const wave = Math.sin(this.digAnim * 11);
        this.pickaxe.rotation.x = -0.9 + wave * 1.35;
        this.pickaxe.rotation.z = 0.15 + wave * 0.55;
        this.pickaxe.rotation.y = wave * 0.25;
        this.pickaxe.visible = true;
      } else if (digging) {
        this.digAnim += 0.2;
        const wave = Math.sin(this.digAnim * 8);
        this.pickaxe.rotation.x = -0.55 + wave * 0.5;
        this.pickaxe.rotation.z = 0.15 + wave * 0.2;
        this.pickaxe.rotation.y = 0;
        this.pickaxe.visible = true;
      } else {
        this.pickaxe.rotation.x = -0.45;
        this.pickaxe.rotation.z = 0.2;
        this.pickaxe.rotation.y = 0;
        this.pickaxe.visible = this.isWorker;
      }
    }
    if (this.selectRing) {
      this.selectRing.visible = digging || this.held;
      this.selectRing.rotation.z = time * 1.5;
    }
  }

  tilePos(): Vec2 {
    return { x: this.x, y: this.y };
  }

  setPath(path: Vec2[] | null): void {
    this.path = path ?? [];
    this.pathIndex = 0;
  }

  faceToward(wx: number, wz: number): void {
    const dx = wx - this.wx;
    const dz = wz - this.wz;
    if (dx * dx + dz * dz < 1e-6) return;
    this.facingTarget = Math.atan2(dx, dz);
  }

  moveAlongPath(dt: number, grid: Grid): boolean {
    if (this.stunTimer > 0 || this.held) return false;
    if (this.pathIndex >= this.path.length) return true;
    const target = this.path[this.pathIndex];
    const w = grid.tileToWorld(target.x, target.y);
    const spd = this.speed * (this.speedBuff > 0 ? 1.8 : 1) * TILE_SIZE;
    const dx = w.x - this.wx;
    const dz = w.z - this.wz;
    const dist = Math.hypot(dx, dz);
    // Arrive threshold — slightly soft to reduce corner jitter
    if (dist < 0.12) {
      this.wx = w.x;
      this.wz = w.z;
      this.x = target.x;
      this.y = target.y;
      this.pathIndex++;
      return this.pathIndex >= this.path.length;
    }
    const step = Math.min(dist, spd * dt);
    this.wx += (dx / dist) * step;
    this.wz += (dz / dist) * step;
    this.faceToward(w.x, w.z);
    // Smooth facing in sync with dt
    let d = this.facingTarget - this.facing;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    this.facing += d * Math.min(1, 12 * dt);
    // update tile occupancy approx
    const tp = grid.worldToTile(this.wx, this.wz);
    if (grid.inBounds(tp.x, tp.y)) {
      this.x = tp.x;
      this.y = tp.y;
    }
    return false;
  }

  takeDamage(amount: number): void {
    if (!this.alive) return;
    this.hp -= amount;
    if (this.hp <= 0) {
      this.hp = 0;
      this.alive = false;
    }
  }
}

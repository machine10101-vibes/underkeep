import * as THREE from 'three';
import { Grid } from '../game/Grid';
import {
  CREATURE_STATS,
  CreatureKind,
  JobType,
  TILE_SIZE,
  Vec2,
} from '../game/types';
import {
  attackDecayRate,
  poseCreatureBody,
  poseCreatureLimbs,
  walkCadence,
} from '../rendering/creatureMotion';
import { poseScrabblerCombatPick, poseScrabblerPickaxe } from '../rendering/meshes';

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
  /** 0–100. Affects work efficiency; very low → leave threat. */
  mood = 72;
  leaveWarned = false;
  /** Fired once while workEfficiency is below sluggish threshold. */
  efficiencyWarned = false;
  /** Seconds of slap-driven work haste (workers keep their job). */
  slapWorkBuff = 0;
  selected = false;
  trainNeed = 0;
  held = false;
  /** Knocked out in combat — can be dragged to Prison. */
  knockedOut = false;
  /** Held in Prison / converting in Torture. */
  isPrisoner = false;
  /** 0–100 conversion progress while imprisoned. */
  convertProgress = 0;
  fleeTimer = 0;
  /** Temple prayer buff timer (seconds) — mood floor / soft combat edge. */
  prayerBuff = 0;
  /** Lightweight Temple talisman unlock (once). */
  hasTalisman = false;
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
  healthFlower: THREE.Object3D | null = null;
  goldBag: THREE.Object3D | null = null;
  /** Walk-cycle phase for limb swing. */
  walkCycle = 0;
  moving = false;
  /** Brief melee lunge after a hit. */
  attackPulse = 0;
  /** Assigned Lair bed tile key "x,y" or null. */
  bedKey: string | null = null;
  /** Remaining seconds of heal/feast mesh tint pulse. */
  tintPulse = 0;
  /** 'heal' green / 'feast' warm / null. */
  tintMode: 'heal' | 'feast' | null = null;
  private tintBase = new Map<THREE.Material, { emissive: THREE.Color; intensity: number }>();

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

  /** Keep vitals in sane finite ranges (prevents NaN bar widths / HUD overflow). */
  clampStats(): void {
    const fin = (n: number, fallback = 0) => (Number.isFinite(n) ? n : fallback);
    this.maxHp = Math.max(1, fin(this.maxHp, 1));
    this.hp = Math.max(0, Math.min(this.maxHp, fin(this.hp, this.maxHp)));
    this.hunger = this.isWorker ? 0 : Math.max(0, Math.min(100, fin(this.hunger)));
    this.sleepNeed = this.isWorker ? 0 : Math.max(0, Math.min(100, fin(this.sleepNeed)));
    this.mood = Math.max(0, Math.min(100, fin(this.mood, 72)));
    this.wx = fin(this.wx);
    this.wz = fin(this.wz);
    if (!Number.isFinite(this.x)) this.x = 0;
    if (!Number.isFinite(this.y)) this.y = 0;
  }

  syncMesh(time: number, dt = 1 / 60): void {
    try {
      this.clampStats();
      if (!this.mesh) return;
      this.mesh.visible = true;
      const wx = Number.isFinite(this.wx) ? this.wx : 0;
      const wz = Number.isFinite(this.wz) ? this.wz : 0;
      if (this.held) {
        // DK2-like: creature dangles with the Hand cursor
        const bob = Math.sin(time * 10 + this.bobPhase) * 0.08;
        this.mesh.position.set(wx, 1.35 + bob, wz);
        this.mesh.rotation.x = 0.15;
        this.mesh.rotation.z = Math.sin(time * 6) * 0.2;
        if (this.selectRing) {
          this.selectRing.visible = true;
          this.selectRing.rotation.z = time * 3;
        }
        if (this.pickaxe) this.pickaxe.visible = false;
        this.updateHealthFlower(time);
        if (this.goldBag) this.goldBag.visible = this.goldCarried > 0;
        return;
      }
      if (this.knockedOut || this.isPrisoner) {
        const bob = Math.sin(time * 1.5 + this.bobPhase) * 0.01;
        this.mesh.position.set(wx, 0.08 + bob, wz);
        this.mesh.rotation.x = 0.05;
        this.mesh.rotation.z = this.knockedOut ? 1.35 : 0.55;
        if (this.selectRing) {
          this.selectRing.visible = this.selected || this.knockedOut;
          this.selectRing.rotation.z = time * 1.2;
        }
        if (this.pickaxe) this.pickaxe.visible = false;
        return;
      }
    const digging = this.job === JobType.Dig || this.job === JobType.Mine || this.job === JobType.Claim || this.job === JobType.Fortify;
    const sleeping = this.job === JobType.Sleep;
    const eating = this.job === JobType.Eat;
    const claiming = this.job === JobType.Claim;
    if (eating) this.eatAnim += dt * 21;
    if (this.moving) this.walkCycle += dt * walkCadence(this.kind);
    if (this.attackPulse > 0) this.attackPulse = Math.max(0, this.attackPulse - dt * attackDecayRate(this.kind));
    const bob =
      this.kind === CreatureKind.Skitterwing
        ? Math.sin(time * 6 + this.bobPhase) * 0.25 + 0.4
        : digging && !claiming
          ? Math.sin(time * 4.2 + this.bobPhase) * 0.04
          : claiming
            ? Math.abs(Math.sin(time * 11 + this.bobPhase)) * 0.38
            : sleeping
              ? Math.sin(time * 2 + this.bobPhase) * 0.02
              : eating
                ? Math.sin(this.eatAnim * 14 + this.bobPhase) * 0.1
                : this.moving
                  ? Math.abs(Math.sin(this.walkCycle)) * 0.06
                  : Math.sin(time * 8 + this.bobPhase) * 0.04;
    const yOff = sleeping ? 0.12 : eating ? 0.05 + Math.abs(Math.sin(this.eatAnim * 14)) * 0.08 : claiming ? 0.04 : 0;
    const motion = {
      walkCycle: this.walkCycle,
      moving: this.moving,
      attack: this.attackPulse,
      time,
      lock: sleeping || eating || this.stunTimer > 0,
    };
    const body = poseCreatureBody(this.kind, motion);
    this.mesh.position.set(this.wx, bob + yOff + body.y, this.wz);
    // Smooth Y facing — avoid lookAt snap/jitter
    let face = this.facing;
    let d = this.facingTarget - face;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    face += d * Math.min(1, 12 * dt);
    this.facing = face;
    this.mesh.rotation.y = this.facing + (sleeping || eating || this.stunTimer > 0 ? 0 : body.rotY);
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
      this.mesh.rotation.x = body.rotX;
      this.mesh.rotation.z = body.rotZ;
    }
    if (this.pickaxe) {
      const swinging = this.job === JobType.Dig || this.job === JobType.Mine;
      if (this.attackPulse > 0.02 && !swinging) {
        poseScrabblerCombatPick(this.pickaxe, this.attackPulse);
      } else if (swinging) {
        this.digAnim += dt;
        poseScrabblerPickaxe(this.pickaxe, this.digAnim, true);
      } else if (digging) {
        this.digAnim += dt * 0.35;
        poseScrabblerPickaxe(this.pickaxe, this.digAnim, true);
      } else {
        poseScrabblerPickaxe(this.pickaxe, 0, false);
        this.pickaxe.visible = this.isWorker;
      }
    }
    poseCreatureLimbs(this.mesh, this.kind, motion);
    if (this.selectRing) {
      this.selectRing.visible = digging || this.held || this.selected;
      this.selectRing.rotation.z = time * 1.5;
    }
    if (this.goldBag) this.goldBag.visible = this.goldCarried > 8;
    this.updateHealthFlower(time);
    if (this.tintPulse > 0) {
      this.tintPulse = Math.max(0, this.tintPulse - dt);
      if (this.tintPulse <= 0) this.tintMode = null;
    }
    this.applyTintVisual();
    } catch (err) {
      console.warn('[underkeep] syncMesh failed', err);
    }
  }

  private updateHealthFlower(time: number): void {
    if (!this.healthFlower) return;
    const ratio = this.maxHp > 0 ? Math.max(0, Math.min(1, this.hp / this.maxHp)) : 1;
    const petals = (this.healthFlower as THREE.Object3D & { petals?: THREE.Mesh[] }).petals;
    if (petals) {
      const shown = Math.max(0, Math.ceil(ratio * 5));
      for (let i = 0; i < petals.length; i++) petals[i].visible = i < shown;
    }
    this.healthFlower.position.y = 2.05 / Math.max(0.35, this.mesh.scale.x || 1) + Math.sin(time * 2.4 + this.bobPhase) * 0.04;
    this.healthFlower.rotation.y = time * 0.6;
    this.healthFlower.visible = this.alive && !this.held;
  }


  /** Brief screen-friendly mesh tint while healing (green) or eating (warm). */
  /** Dig/work multiplier from mood (≈0.5–1.2). */
  workEfficiency(): number {
    const mood = Number.isFinite(this.mood) ? Math.max(0, Math.min(100, this.mood)) : 50;
    let eff = 0.5 + (mood / 100) * 0.7;
    if (this.prayerBuff > 0) eff += 0.05;
    if (this.hasTalisman) eff += 0.03;
    if (this.slapWorkBuff > 0) eff += 0.12;
    return Number.isFinite(eff) ? Math.max(0.5, Math.min(1.35, eff)) : 0.85;
  }

  pulseTint(mode: 'heal' | 'feast', seconds = 0.85): void {
    this.tintMode = mode;
    this.tintPulse = Math.max(this.tintPulse, seconds);
  }

  private applyTintVisual(): void {
    if (!this.mesh) return;
    try {
    const mats: THREE.MeshStandardMaterial[] = [];
    this.mesh.traverse((o) => {
      const m = (o as THREE.Mesh).material;
      if (!m) return;
      if (Array.isArray(m)) {
        for (const mm of m) if (mm instanceof THREE.MeshStandardMaterial) mats.push(mm);
      } else if (m instanceof THREE.MeshStandardMaterial) {
        mats.push(m);
      }
    });
    for (const mat of mats) {
      if (!this.tintBase.has(mat)) {
        this.tintBase.set(mat, {
          emissive: mat.emissive.clone(),
          intensity: mat.emissiveIntensity,
        });
      }
      const base = this.tintBase.get(mat)!;
      if (this.tintPulse > 0 && this.tintMode) {
        const pulse = 0.55 + 0.45 * Math.sin(this.tintPulse * 14);
        if (this.tintMode === 'heal') {
          mat.emissive.setRGB(0.15 * pulse, 0.95 * pulse, 0.45 * pulse);
          mat.emissiveIntensity = Math.max(base.intensity, 0.85 + pulse * 0.7);
        } else {
          mat.emissive.setRGB(1.0 * pulse, 0.55 * pulse, 0.12 * pulse);
          mat.emissiveIntensity = Math.max(base.intensity, 0.9 + pulse * 0.75);
        }
      } else {
        mat.emissive.copy(base.emissive);
        mat.emissiveIntensity = base.intensity;
      }
    }
    } catch (err) {
      console.warn('[underkeep] tint failed', err);
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
    if (this.stunTimer > 0 || this.held || this.knockedOut || this.isPrisoner) {
      this.moving = false;
      return false;
    }
    if (this.pathIndex >= this.path.length) {
      this.moving = false;
      return true;
    }
    const target = this.path[this.pathIndex];
    const w = grid.tileToWorld(target.x, target.y);
    const spd = this.speed * (this.speedBuff > 0 ? 1.8 : 1) * TILE_SIZE;
    const dx = w.x - this.wx;
    const dz = w.z - this.wz;
    const dist = Math.hypot(dx, dz);
    // Arrive threshold — slightly soft to reduce corner jitter
    if (dist < 0.1) {
      this.wx = w.x;
      this.wz = w.z;
      this.x = target.x;
      this.y = target.y;
      this.pathIndex++;
      this.moving = this.pathIndex < this.path.length;
      return this.pathIndex >= this.path.length;
    }
    const step = Math.min(dist, spd * dt);
    this.wx += (dx / dist) * step;
    this.wz += (dz / dist) * step;
    this.moving = true;
    this.faceToward(w.x, w.z);
    // Smooth facing in sync with dt
    let d = this.facingTarget - this.facing;
    while (d > Math.PI) d -= Math.PI * 2;
    while (d < -Math.PI) d += Math.PI * 2;
    this.facing += d * Math.min(1, 14 * dt);
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

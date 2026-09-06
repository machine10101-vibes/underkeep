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
    const bob =
      this.kind === CreatureKind.Skitterwing
        ? Math.sin(time * 6 + this.bobPhase) * 0.25 + 0.4
        : Math.sin(time * 8 + this.bobPhase) * 0.04;
    this.mesh.position.set(this.wx, bob, this.wz);
    if (this.stunTimer > 0) {
      this.mesh.rotation.z = Math.sin(time * 20) * 0.3;
    } else {
      this.mesh.rotation.z = 0;
    }
  }

  tilePos(): Vec2 {
    return { x: this.x, y: this.y };
  }

  setPath(path: Vec2[] | null): void {
    this.path = path ?? [];
    this.pathIndex = 0;
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
    if (dist < 0.08) {
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
    this.mesh.lookAt(this.wx + dx, this.mesh.position.y, this.wz + dz);
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

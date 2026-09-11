import * as THREE from 'three';
import { CreatureKind } from '../game/types';

/** Shared walk / attack pose — used by Creature.syncMesh and Model Studio. */
export interface CreatureMotionState {
  walkCycle: number;
  moving: boolean;
  /** 1 at impact, decays toward 0. */
  attack: number;
  time: number;
  /** Sleep / eat / stun — freeze limbs on base pose. */
  lock?: boolean;
}

export interface CreatureBodyPose {
  y: number;
  rotX: number;
  rotZ: number;
  rotY: number;
}

export function walkCadence(kind: CreatureKind): number {
  switch (kind) {
    case CreatureKind.Scrabbler:
      return 16;
    case CreatureKind.Skitterwing:
      return 8;
    case CreatureKind.Emberling:
      return 7;
    case CreatureKind.Bonewretch:
      return 7.4;
    case CreatureKind.Gravemage:
      return 6;
    case CreatureKind.HeroKnight:
      return 8;
    case CreatureKind.Rattlekin:
      return 11;
    default:
      return 10;
  }
}

/** Seconds-ish visible swing. Slower than the old dt*4 snap. */
export function attackDecayRate(_kind: CreatureKind): number {
  return 2.6;
}

export function combatHitColor(kind: CreatureKind): number {
  switch (kind) {
    case CreatureKind.Scrabbler:
      return 0xa8e060;
    case CreatureKind.Skitterwing:
      return 0x40e0b0;
    case CreatureKind.Rattlekin:
      return 0xc07040;
    case CreatureKind.Emberling:
      return 0xff5018;
    case CreatureKind.Gravemage:
      return 0xaa66ff;
    case CreatureKind.Thornwitch:
      return 0xff3060;
    case CreatureKind.Bonewretch:
      return 0x70ff40;
    case CreatureKind.HeroKnight:
      return 0x88aaff;
    case CreatureKind.HeroArcher:
      return 0x70b050;
    default:
      return 0xff4040;
  }
}

function defaultGait(limb: string): number {
  if (limb === 'legL' || limb === 'armR') return 0;
  if (limb === 'legR' || limb === 'armL') return 1;
  return 0;
}

function applyRot(
  ch: THREE.Object3D,
  base: { x: number; y: number; z: number },
  dx: number,
  dy: number,
  dz: number
): void {
  ch.rotation.x = base.x + dx;
  ch.rotation.y = base.y + dy;
  ch.rotation.z = base.z + dz;
}

/** Per-species gait + attack overlays on tagged `walkLimb` nodes. */
export function poseCreatureLimbs(root: THREE.Object3D, kind: CreatureKind, s: CreatureMotionState): void {
  const attack = s.attack;
  const moving = s.moving;
  const t = s.walkCycle;
  const lock = !!s.lock;

  root.traverse((ch) => {
    const limb = ch.userData.walkLimb as string | undefined;
    if (!limb) return;
    const base = ch.userData.baseRot as { x: number; y: number; z: number } | undefined;
    if (!base) return;
    if (lock) {
      applyRot(ch, base, 0, 0, 0);
      return;
    }

    const gait = (ch.userData.gait as number | undefined) ?? defaultGait(limb);
    const phase = gait * Math.PI;
    let dx = 0;
    let dy = 0;
    let dz = 0;

    if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
      const flap = Math.sin(s.time * 22 + phase) * (limb === 'wingH' ? 0.62 : 0.88) + (moving ? 0.12 : 0);
      dx = flap;
    } else if (kind === CreatureKind.Emberling) {
      if (limb === 'tail') {
        dy = Math.sin(t * 1.35 + s.time * 0.8) * (moving ? 0.55 : 0.18);
        dz = Math.sin(t * 0.7) * (moving ? 0.16 : 0.05);
      } else {
        dx = Math.sin(t + phase) * (moving ? 0.22 : 0.06);
      }
    } else if (kind === CreatureKind.Bonewretch) {
      const limp = limb === 'legR' ? 0.88 : limb === 'legL' ? 0.22 : limb === 'armR' ? 0.18 : 0.4;
      dx = Math.sin(t + phase) * limp * (moving ? 1 : 0.1);
      if (limb === 'armR' && moving) dx += 0.08;
    } else if (kind === CreatureKind.Scrabbler) {
      dx = Math.sin(t * 1.15 + phase) * (moving ? 0.72 : 0.08);
    } else if (kind === CreatureKind.Gravemage) {
      dx = Math.sin(t + phase) * (moving ? 0.16 : 0.04);
    } else if (kind === CreatureKind.HeroKnight) {
      dx = Math.sin(t + phase) * (moving ? 0.38 : 0.04);
    } else if (kind === CreatureKind.HeroArcher) {
      dx = Math.sin(t + phase) * (moving ? 0.42 : 0.05);
    } else if (kind === CreatureKind.Thornwitch) {
      dx = Math.sin(t + phase) * (moving ? 0.4 : 0.06);
      if (limb === 'legL' || limb === 'legR') dy += Math.sin(t * 0.5) * (moving ? 0.08 : 0.02);
    } else if (kind === CreatureKind.Rattlekin) {
      dx = Math.sin(t + phase) * (moving ? 0.52 : 0.07);
      if (moving) dz += Math.sin(t * 3 + phase) * 0.04;
    } else {
      dx = Math.sin(t + phase) * (moving ? 0.48 : 0.06);
    }

    if (attack > 0.01) {
      const a = attack;
      if (kind === CreatureKind.Scrabbler && (limb === 'armR' || limb === 'armL')) {
        dx += -a * 0.35;
      }
      if (kind === CreatureKind.Rattlekin && limb === 'armR') {
        dx += -a * 1.35;
        dz += a * 0.22;
      }
      if (kind === CreatureKind.HeroKnight && limb === 'armR') {
        dx += -a * 1.22;
        dz += -a * 0.18;
      }
      if (kind === CreatureKind.HeroKnight && limb === 'armL') {
        dz += a * 0.32;
        dx += a * 0.12;
      }
      if (kind === CreatureKind.HeroArcher && limb === 'armL') {
        dz += -a * 0.72;
        dx += -a * 0.15;
      }
      if (kind === CreatureKind.HeroArcher && limb === 'armR') {
        dz += a * 0.18;
        dx += -a * 0.55;
      }
      if (kind === CreatureKind.Thornwitch && limb === 'armR') {
        dy += Math.sin(a * Math.PI) * 1.35;
        dx += -a * 0.45;
      }
      if (kind === CreatureKind.Gravemage && limb === 'armR') {
        dx += -a * 0.95;
        dy += a * 0.28;
      }
      if (kind === CreatureKind.Bonewretch && limb === 'armR') {
        dx += -a * 0.75;
        dz += a * 0.55;
      }
      if (kind === CreatureKind.Emberling && limb === 'tail') {
        dy += -a * 0.85;
      }
      if (kind === CreatureKind.Emberling && (limb === 'armL' || limb === 'armR')) {
        dx += -a * 0.45;
      }
      if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
        dx += a * 0.35;
      }
    }

    applyRot(ch, base, dx, dy, dz);
  });
}

/** Extra body hop / lean on top of the existing bob. */
export function poseCreatureBody(kind: CreatureKind, s: CreatureMotionState): CreatureBodyPose {
  const a = s.attack;
  const moving = s.moving;
  let y = 0;
  let rotX = 0;
  let rotZ = 0;
  let rotY = 0;

  if (s.lock) return { y, rotX, rotZ, rotY };

  if (kind === CreatureKind.Skitterwing) {
    y = a * 0.12;
    rotX = a * -0.28;
  } else if (kind === CreatureKind.Emberling) {
    rotZ = Math.sin(s.walkCycle) * (moving ? 0.14 : 0.03);
    rotX = a * 0.52;
    y = a * 0.1;
  } else if (kind === CreatureKind.Bonewretch) {
    rotZ = moving ? 0.1 + Math.sin(s.walkCycle) * 0.07 : 0.06;
    rotX = 0.1 + a * 0.32;
  } else if (kind === CreatureKind.Gravemage) {
    y = Math.sin(s.time * 2.2) * 0.035 + a * 0.04;
    rotX = a * -0.22;
  } else if (kind === CreatureKind.Thornwitch) {
    rotY = Math.sin(s.walkCycle * 0.5) * (moving ? 0.14 : 0.04);
    rotX = a * 0.16;
  } else if (kind === CreatureKind.Rattlekin) {
    rotY = moving ? Math.sin(s.walkCycle * 2) * 0.05 : 0;
    rotX = a * 0.4;
  } else if (kind === CreatureKind.HeroKnight) {
    rotX = a * 0.26;
    rotZ = moving ? Math.sin(s.walkCycle) * 0.03 : 0;
  } else if (kind === CreatureKind.HeroArcher) {
    rotX = a * -0.14;
    rotY = a * -0.08;
  } else if (kind === CreatureKind.Scrabbler) {
    rotX = a * 0.2;
    rotZ = moving ? Math.sin(s.walkCycle * 2) * 0.045 : 0;
  }

  return { y, rotX, rotZ, rotY };
}

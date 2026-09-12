import * as THREE from 'three';
import { CreatureKind } from '../game/types';

/** Shared walk / attack pose — used by Creature.syncMesh and Model Studio. */
export interface CreatureMotionState {
  walkCycle: number;
  moving: boolean;
  /**
   * In the keep: 1 at the moment of impact, then decays to 0.
   * In Studio with `loopAttack`: a 0–1 cycle (wind → hit → follow → rest).
   */
  attack: number;
  time: number;
  /** Sleep / eat / stun — freeze limbs on base pose. */
  lock?: boolean;
  /** Studio looping strike (full wind-up, not impact-only). */
  loopAttack?: boolean;
}

export interface CreatureBodyPose {
  y: number;
  /** Forward lunge along local +Z. */
  z: number;
  rotX: number;
  rotZ: number;
  rotY: number;
}

/** Wind-up / impact / follow-through weights for a readable strike. */
export interface StrikePhases {
  wind: number;
  hit: number;
  follow: number;
}

export function walkCadence(kind: CreatureKind): number {
  switch (kind) {
    case CreatureKind.Scrabbler:
      return 17;
    case CreatureKind.Skitterwing:
      return 8;
    case CreatureKind.Emberling:
      return 6.6;
    case CreatureKind.Bonewretch:
      return 6.8;
    case CreatureKind.Gravemage:
      return 5.6;
    case CreatureKind.HeroKnight:
      return 7.2;
    case CreatureKind.Rattlekin:
      return 11.5;
    case CreatureKind.Thornwitch:
      return 9.2;
    case CreatureKind.HeroArcher:
      return 9.4;
    default:
      return 10;
  }
}

export function attackDecayRate(kind: CreatureKind): number {
  switch (kind) {
    case CreatureKind.HeroKnight:
    case CreatureKind.Gravemage:
      return 2.05;
    case CreatureKind.Rattlekin:
    case CreatureKind.Thornwitch:
      return 2.35;
    case CreatureKind.HeroArcher:
      return 2.2;
    case CreatureKind.Scrabbler:
    case CreatureKind.Skitterwing:
      return 3.05;
    default:
      return 2.55;
  }
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

/**
 * Map an attack value to wind / hit / follow.
 * `loop` = Studio cycle 0–1. Otherwise 1 is impact and the value decays to rest.
 */
export function strikePhases(attack: number, loop = false): StrikePhases {
  if (loop) {
    const u = ((attack % 1) + 1) % 1;
    if (u < 0.26) {
      const t = u / 0.26;
      return { wind: t * t, hit: 0, follow: 0 };
    }
    if (u < 0.38) {
      const t = (u - 0.26) / 0.12;
      const hit = t * t * (3 - 2 * t);
      return { wind: 1 - hit, hit, follow: 0 };
    }
    if (u < 0.68) {
      const t = (u - 0.38) / 0.3;
      return { wind: 0, hit: 1 - t, follow: t };
    }
    const t = (u - 0.68) / 0.32;
    return { wind: 0, hit: 0, follow: Math.max(0, 1 - t) };
  }
  const a = Math.max(0, Math.min(1, attack));
  if (a <= 0.001) return { wind: 0, hit: 0, follow: 0 };
  if (a > 0.7) {
    const t = (a - 0.7) / 0.3;
    return { wind: 0, hit: t, follow: 1 - t };
  }
  if (a > 0.32) {
    const t = (a - 0.32) / 0.38;
    return { wind: 0, hit: 0, follow: t };
  }
  return { wind: 0, hit: 0, follow: (a / 0.32) * 0.4 };
}

export function walkBob(kind: CreatureKind, s: CreatureMotionState): number {
  if (!s.moving) return 0;
  const w = s.walkCycle;
  switch (kind) {
    case CreatureKind.Scrabbler:
      return Math.abs(Math.sin(w)) * 0.04;
    case CreatureKind.HeroKnight:
      return Math.abs(Math.sin(w)) * 0.12;
    case CreatureKind.Bonewretch:
      return Math.sin(w) > 0.05 ? Math.abs(Math.sin(w)) * 0.15 : 0.015;
    case CreatureKind.Emberling:
      return Math.abs(Math.sin(w * 0.5)) * 0.035;
    case CreatureKind.Skitterwing:
      return 0;
    case CreatureKind.Gravemage:
      return Math.abs(Math.sin(w)) * 0.025;
    case CreatureKind.Rattlekin:
      return Math.abs(Math.sin(w)) * 0.07 + Math.abs(Math.sin(w * 2)) * 0.02;
    case CreatureKind.Thornwitch:
      return Math.abs(Math.sin(w)) * 0.05;
    case CreatureKind.HeroArcher:
      return Math.abs(Math.sin(w)) * 0.055;
    default:
      return Math.abs(Math.sin(w)) * 0.06;
  }
}

function defaultGait(limb: string): number {
  if (limb === 'legL' || limb === 'armR' || limb === 'foreR') return 0;
  if (limb === 'legR' || limb === 'armL' || limb === 'foreL') return 1;
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
  const moving = s.moving;
  const t = s.walkCycle;
  const lock = !!s.lock;
  const p = strikePhases(s.attack, !!s.loopAttack);
  const breath = Math.sin(s.time * 2.35);

  root.traverse((ch) => {
    const limb = ch.userData.walkLimb as string | undefined;
    const tool = ch.userData.heldTool as string | undefined;
    if (!limb && !tool) return;
    const base = ch.userData.baseRot as { x: number; y: number; z: number } | undefined;
    if (!base) return;
    if (lock) {
      applyRot(ch, base, 0, 0, 0);
      return;
    }

    const gait = (ch.userData.gait as number | undefined) ?? defaultGait(limb ?? '');
    const phase = gait * Math.PI;
    const isFore = limb === 'foreL' || limb === 'foreR';
    const lag = isFore ? 0.42 : 0;
    const carry = !!ch.userData.carry;
    let dx = 0;
    let dy = 0;
    let dz = 0;

    if (limb === 'ant') {
      dx = Math.sin(s.time * 7.2 + phase) * 0.18 + (moving ? Math.sin(t * 1.4 + phase) * 0.22 : 0);
      dz = Math.sin(s.time * 5.1 + phase * 1.3) * 0.12;
    } else if (limb === 'hair') {
      dy = Math.sin(s.time * 2.8) * 0.08 + (moving ? Math.sin(t * 0.7) * 0.16 : 0);
      dz = Math.sin(s.time * 2.1 + 0.6) * 0.05 + (moving ? Math.sin(t) * 0.08 : 0);
    } else if (limb === 'jaw') {
      dx = Math.abs(Math.sin(s.time * (kind === CreatureKind.Rattlekin ? 9 : 3.4))) * (kind === CreatureKind.Rattlekin ? 0.16 : 0.08);
      if (moving) dx += Math.abs(Math.sin(t * 2)) * 0.06;
    } else if (!limb) {
      /* held tool — strike flick only */
    } else if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
      const flap = Math.sin(s.time * 26 + phase) * (limb === 'wingH' ? 0.78 : 1.05) + (moving ? 0.2 : 0.08);
      dx = flap;
    } else if (kind === CreatureKind.Skitterwing && (limb === 'legL' || limb === 'legR')) {
      dx = 0.15 + Math.sin(s.time * 8 + phase) * 0.12 + (moving ? Math.sin(t + phase) * 0.2 : 0);
    } else if (kind === CreatureKind.Emberling) {
      if (limb === 'tail') {
        dy = Math.sin(t * 1.45 + s.time * 1.1) * (moving ? 0.82 : 0.32);
        dz = Math.sin(t * 0.7 + 0.4) * (moving ? 0.28 : 0.1);
      } else {
        dx = Math.sin(t + phase) * (moving ? 0.34 : 0.08) + breath * 0.03;
      }
    } else if (kind === CreatureKind.Bonewretch) {
      const limp = limb === 'legR' ? 1.15 : limb === 'legL' ? 0.16 : limb === 'armR' ? 0.28 : 0.38;
      dx = Math.sin(t + phase) * limp * (moving ? 1 : 0.1);
      if (limb === 'armR') {
        dx += moving ? 0.16 + Math.sin(t) * 0.18 : 0.08 + breath * 0.04;
        dz += Math.sin(moving ? t : s.time * 1.6) * (moving ? 0.16 : 0.05);
      }
    } else {
      let amp = moving ? 0.5 : 0.05;
      if (kind === CreatureKind.Scrabbler) amp = moving ? 0.95 : 0.08;
      else if (kind === CreatureKind.Gravemage) amp = moving ? 0.14 : 0.035;
      else if (kind === CreatureKind.HeroKnight) amp = moving ? 0.48 : 0.035;
      else if (kind === CreatureKind.HeroArcher) amp = moving ? 0.4 : 0.04;
      else if (kind === CreatureKind.Thornwitch) amp = moving ? 0.5 : 0.055;
      else if (kind === CreatureKind.Rattlekin) amp = moving ? 0.68 : 0.06;
      if (carry) amp *= kind === CreatureKind.HeroArcher ? 0.18 : 0.26;
      if (isFore) amp *= 0.55;
      const swing = Math.sin(t * (kind === CreatureKind.Scrabbler ? 1.25 : 1) + phase + lag);
      dx = swing * amp + (!moving ? breath * 0.025 : 0);
      dz += Math.cos(t + phase + lag) * amp * 0.22;
      if (kind === CreatureKind.Thornwitch && (limb === 'legL' || limb === 'legR')) {
        dy += Math.sin(t * 0.5) * (moving ? 0.16 : 0.04);
      }
      if (kind === CreatureKind.Rattlekin && moving) dz += Math.sin(t * 3.2 + phase) * 0.055;
      if (kind === CreatureKind.HeroKnight && (limb === 'legL' || limb === 'legR') && moving) {
        dx *= 1.12;
        dz += Math.max(0, -Math.sin(t + phase)) * 0.06;
      }
      if (kind === CreatureKind.HeroArcher && carry) {
        dx *= 0.55;
        dz += breath * 0.02;
      }
    }

    if (p.wind + p.hit + p.follow > 0.01) {
      if (kind === CreatureKind.Scrabbler && (limb === 'armR' || limb === 'armL' || limb === 'ant')) {
        dx += -p.wind * 0.22 - p.hit * 0.5 - p.follow * 0.14;
      }
      if (kind === CreatureKind.Rattlekin && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.6 : 1;
        dx += (p.wind * 1.15 - p.hit * 1.95 - p.follow * 0.6) * k;
        dz += (p.wind * -0.18 + p.hit * 0.45) * k;
      }
      if (kind === CreatureKind.Rattlekin && (limb === 'armL' || limb === 'foreL')) {
        dx += p.hit * 0.28;
        dz += p.hit * 0.22;
      }
      if (kind === CreatureKind.Rattlekin && limb === 'jaw') dx += p.wind * 0.12 + p.hit * 0.28;
      if (kind === CreatureKind.HeroKnight && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.65 : 1;
        dx += (p.wind * 1.05 - p.hit * 1.9 - p.follow * 0.5) * k;
        dz += (-p.wind * 0.14 - p.hit * 0.32) * k;
      }
      if (kind === CreatureKind.HeroKnight && (limb === 'armL' || limb === 'foreL')) {
        dz += p.wind * 0.18 + p.hit * 0.55 + p.follow * 0.2;
        dx += p.wind * 0.12 + p.hit * 0.22;
      }
      if (kind === CreatureKind.HeroArcher && (limb === 'armL' || limb === 'foreL')) {
        dz += p.wind * 0.45 + p.hit * 0.18;
        dx += -p.wind * 0.16 - p.hit * 0.1;
      }
      if (kind === CreatureKind.HeroArcher && (limb === 'armR' || limb === 'foreR')) {
        dz += -p.wind * 1.35 + p.hit * 0.7 + p.follow * 0.18;
        dx += -p.wind * 0.22 - p.hit * 0.35;
      }
      if (kind === CreatureKind.Thornwitch && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.72 : 1;
        dy += (-p.wind * 0.95 + p.hit * 1.8 + p.follow * 0.4) * k;
        dx += (-p.wind * 0.22 - p.hit * 0.78) * k;
        dz += p.hit * 0.4 * k;
      }
      if (kind === CreatureKind.Thornwitch && limb === 'hair') dy += p.hit * 0.25;
      if (kind === CreatureKind.Gravemage && (limb === 'armR' || limb === 'foreR')) {
        dx += -p.wind * 0.62 - p.hit * 1.25 - p.follow * 0.28;
        dy += p.wind * 0.55 + p.hit * 0.22;
      }
      if (kind === CreatureKind.Gravemage && (limb === 'armL' || limb === 'foreL')) {
        dx += p.hit * 0.22;
        dy += p.wind * 0.2;
      }
      if (kind === CreatureKind.Bonewretch && limb === 'armR') {
        dx += p.wind * 0.4 - p.hit * 1.15 - p.follow * 0.28;
        dz += -p.wind * 0.45 + p.hit * 0.95;
      }
      if (kind === CreatureKind.Bonewretch && limb === 'jaw') dx += p.hit * 0.22;
      if (kind === CreatureKind.Emberling && limb === 'tail') {
        dy += p.wind * 0.5 - p.hit * 1.25 - p.follow * 0.32;
      }
      if (kind === CreatureKind.Emberling && (limb === 'armL' || limb === 'armR')) {
        dx += -p.wind * 0.18 - p.hit * 0.78;
      }
      if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
        dx += p.wind * 0.28 + p.hit * 0.62 + p.follow * 0.16;
      }
    }

    if (tool && p.wind + p.hit + p.follow > 0.01) {
      if (tool === 'cleaver' || tool === 'sword') {
        dx += p.wind * 0.14 - p.hit * 0.32;
        dy += p.hit * 0.12;
      } else if (tool === 'whip') {
        dy += -p.wind * 0.4 + p.hit * 0.95;
      } else if (tool === 'staff') {
        dx += -p.hit * 0.22;
        dy += p.wind * 0.18;
      } else if (tool === 'bow') {
        dy += p.wind * 0.1;
      } else if (tool === 'arrow') {
        dz += -p.wind * 0.32 + p.hit * 0.5;
      } else if (tool === 'femur') {
        dx += p.wind * 0.1 - p.hit * 0.2;
      }
    }

    applyRot(ch, base, dx, dy, dz);
  });
}

/** Extra body hop / lean / lunge on top of the existing bob. */
export function poseCreatureBody(kind: CreatureKind, s: CreatureMotionState): CreatureBodyPose {
  const moving = s.moving;
  const p = strikePhases(s.attack, !!s.loopAttack);
  const breath = Math.sin(s.time * 2.35);
  let y = 0;
  let z = 0;
  let rotX = 0;
  let rotZ = 0;
  let rotY = 0;

  if (s.lock) return { y, z, rotX, rotZ, rotY };

  if (kind === CreatureKind.Skitterwing) {
    y = 0.06 + Math.sin(s.time * 6.4) * 0.07 + p.wind * 0.2 - p.hit * 0.24 + p.follow * 0.06;
    rotX = Math.sin(s.time * 3.1) * 0.04 - p.wind * 0.14 - p.hit * 0.45 - p.follow * 0.1;
    rotZ = Math.sin(s.time * 2.2) * 0.03;
    z = p.hit * 0.32 + p.follow * 0.1;
  } else if (kind === CreatureKind.Emberling) {
    rotY = Math.sin(s.walkCycle) * (moving ? 0.26 : 0.06) + breath * 0.03;
    rotZ = Math.sin(s.walkCycle + 0.7) * (moving ? 0.18 : 0.05);
    rotX = (moving ? 0.04 : 0.02) + p.wind * 0.2 + p.hit * 0.68 + p.follow * 0.22;
    y = breath * 0.012 + p.hit * 0.14;
    z = p.hit * 0.38 + p.follow * 0.12;
  } else if (kind === CreatureKind.Bonewretch) {
    rotZ = (moving ? 0.14 + Math.sin(s.walkCycle) * 0.1 : 0.07 + breath * 0.02);
    rotX = 0.12 + p.wind * 0.14 + p.hit * 0.44 + p.follow * 0.14;
    z = p.hit * 0.2;
    y = moving ? 0 : breath * 0.01;
  } else if (kind === CreatureKind.Gravemage) {
    y = Math.sin(s.time * 2.2) * 0.055 + p.wind * 0.08 + p.hit * 0.02;
    rotX = breath * 0.02 - p.wind * 0.1 - p.hit * 0.32 - p.follow * 0.08;
    rotY = Math.sin(s.time * 0.9) * 0.04 + p.hit * 0.1;
  } else if (kind === CreatureKind.Thornwitch) {
    rotY = Math.sin((moving ? s.walkCycle : s.time * 1.4) * 0.5) * (moving ? 0.2 : 0.07) + p.hit * 0.24;
    rotX = breath * 0.015 + p.hit * 0.2;
    rotZ = Math.sin(s.time * 1.6) * 0.02;
    z = p.hit * 0.14;
    y = breath * 0.012;
  } else if (kind === CreatureKind.Rattlekin) {
    rotY = moving ? Math.sin(s.walkCycle * 2) * 0.08 : breath * 0.025;
    rotX = p.wind * -0.14 + p.hit * 0.52 + p.follow * 0.18;
    rotZ = (moving ? Math.sin(s.walkCycle * 3) * 0.03 : 0) + p.hit * -0.1;
    z = p.hit * 0.34 + p.follow * 0.12;
    y = moving ? 0 : breath * 0.01;
  } else if (kind === CreatureKind.HeroKnight) {
    rotX = (moving ? 0.03 : breath * 0.012) + p.wind * -0.1 + p.hit * 0.36 + p.follow * 0.12;
    rotZ = (moving ? Math.sin(s.walkCycle) * 0.05 : breath * 0.015) + p.hit * -0.07;
    z = p.hit * 0.36 + p.follow * 0.14;
    y = breath * 0.008;
  } else if (kind === CreatureKind.HeroArcher) {
    rotX = breath * 0.012 - p.wind * 0.12 - p.hit * 0.06;
    rotY = (moving ? Math.sin(s.walkCycle) * 0.04 : 0) - p.wind * 0.14 - p.hit * 0.05;
    z = -p.wind * 0.12 + p.hit * 0.08;
    y = breath * 0.01;
  } else if (kind === CreatureKind.Scrabbler) {
    rotX = (moving ? 0.04 : breath * 0.02) + p.wind * -0.1 + p.hit * 0.3 + p.follow * 0.08;
    rotZ = moving ? Math.sin(s.walkCycle * 2) * 0.065 : breath * 0.02;
    rotY = moving ? Math.sin(s.walkCycle) * 0.04 : 0;
    z = p.hit * 0.18;
    y = breath * 0.008;
  }

  return { y, z, rotX, rotZ, rotY };
}

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

    if (!limb) {
      /* held tool — strike flick only */
    } else if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
      const flap = Math.sin(s.time * 24 + phase) * (limb === 'wingH' ? 0.7 : 0.98) + (moving ? 0.16 : 0.04);
      dx = flap;
    } else if (kind === CreatureKind.Emberling) {
      if (limb === 'tail') {
        dy = Math.sin(t * 1.45 + s.time * 0.9) * (moving ? 0.7 : 0.22);
        dz = Math.sin(t * 0.7 + 0.4) * (moving ? 0.22 : 0.07);
      } else {
        dx = Math.sin(t + phase) * (moving ? 0.28 : 0.07);
      }
    } else if (kind === CreatureKind.Bonewretch) {
      const limp = limb === 'legR' ? 1.05 : limb === 'legL' ? 0.18 : limb === 'armR' ? 0.22 : 0.42;
      dx = Math.sin(t + phase) * limp * (moving ? 1 : 0.08);
      if (limb === 'armR' && moving) {
        dx += 0.12;
        dz += Math.sin(t) * 0.12;
      }
    } else {
      let amp = 0.06;
      if (kind === CreatureKind.Scrabbler) amp = moving ? 0.88 : 0.1;
      else if (kind === CreatureKind.Gravemage) amp = moving ? 0.16 : 0.04;
      else if (kind === CreatureKind.HeroKnight) amp = moving ? 0.52 : 0.04;
      else if (kind === CreatureKind.HeroArcher) amp = moving ? 0.46 : 0.05;
      else if (kind === CreatureKind.Thornwitch) amp = moving ? 0.46 : 0.06;
      else if (kind === CreatureKind.Rattlekin) amp = moving ? 0.62 : 0.07;
      else amp = moving ? 0.5 : 0.06;
      if (carry) amp *= 0.28;
      if (isFore) amp *= 0.55;
      const swing = Math.sin(t * (kind === CreatureKind.Scrabbler ? 1.2 : 1) + phase + lag);
      dx = swing * amp;
      dz += Math.cos(t + phase + lag) * amp * 0.2;
      if (kind === CreatureKind.Thornwitch && (limb === 'legL' || limb === 'legR')) {
        dy += Math.sin(t * 0.5) * (moving ? 0.12 : 0.03);
      }
      if (kind === CreatureKind.Rattlekin && moving) dz += Math.sin(t * 3 + phase) * 0.04;
    }

    if (p.wind + p.hit + p.follow > 0.01) {
      if (kind === CreatureKind.Scrabbler && (limb === 'armR' || limb === 'armL')) {
        dx += -p.wind * 0.2 - p.hit * 0.45 - p.follow * 0.12;
      }
      if (kind === CreatureKind.Rattlekin && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.55 : 1;
        dx += (p.wind * 1.05 - p.hit * 1.85 - p.follow * 0.55) * k;
        dz += (p.wind * -0.15 + p.hit * 0.4) * k;
      }
      if (kind === CreatureKind.Rattlekin && (limb === 'armL' || limb === 'foreL')) {
        dx += p.hit * 0.22;
        dz += p.hit * 0.18;
      }
      if (kind === CreatureKind.HeroKnight && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.6 : 1;
        dx += (p.wind * 0.95 - p.hit * 1.75 - p.follow * 0.45) * k;
        dz += (-p.wind * 0.12 - p.hit * 0.28) * k;
      }
      if (kind === CreatureKind.HeroKnight && (limb === 'armL' || limb === 'foreL')) {
        dz += p.wind * 0.12 + p.hit * 0.48 + p.follow * 0.18;
        dx += p.hit * 0.18;
      }
      if (kind === CreatureKind.HeroArcher && (limb === 'armL' || limb === 'foreL')) {
        dz += p.wind * 0.35 + p.hit * 0.2;
        dx += -p.wind * 0.12 - p.hit * 0.08;
      }
      if (kind === CreatureKind.HeroArcher && (limb === 'armR' || limb === 'foreR')) {
        dz += -p.wind * 1.2 + p.hit * 0.55 + p.follow * 0.15;
        dx += -p.wind * 0.18 - p.hit * 0.4;
      }
      if (kind === CreatureKind.Thornwitch && (limb === 'armR' || limb === 'foreR')) {
        const k = limb === 'foreR' ? 0.7 : 1;
        dy += (-p.wind * 0.85 + p.hit * 1.65 + p.follow * 0.35) * k;
        dx += (-p.wind * 0.2 - p.hit * 0.7) * k;
        dz += p.hit * 0.35 * k;
      }
      if (kind === CreatureKind.Gravemage && (limb === 'armR' || limb === 'foreR')) {
        dx += -p.wind * 0.55 - p.hit * 1.15 - p.follow * 0.25;
        dy += p.wind * 0.45 + p.hit * 0.2;
      }
      if (kind === CreatureKind.Gravemage && (limb === 'armL' || limb === 'foreL')) {
        dx += p.hit * 0.2;
        dy += p.wind * 0.15;
      }
      if (kind === CreatureKind.Bonewretch && limb === 'armR') {
        dx += p.wind * 0.35 - p.hit * 1.05 - p.follow * 0.25;
        dz += -p.wind * 0.4 + p.hit * 0.85;
      }
      if (kind === CreatureKind.Emberling && limb === 'tail') {
        dy += p.wind * 0.45 - p.hit * 1.15 - p.follow * 0.3;
      }
      if (kind === CreatureKind.Emberling && (limb === 'armL' || limb === 'armR')) {
        dx += -p.wind * 0.15 - p.hit * 0.7;
      }
      if (kind === CreatureKind.Skitterwing && (limb === 'armL' || limb === 'armR' || limb === 'wingH')) {
        dx += p.wind * 0.25 + p.hit * 0.55 + p.follow * 0.15;
      }
    }

    if (tool && p.wind + p.hit + p.follow > 0.01) {
      if (tool === 'cleaver' || tool === 'sword') {
        dx += p.wind * 0.12 - p.hit * 0.28;
        dy += p.hit * 0.1;
      } else if (tool === 'whip') {
        dy += -p.wind * 0.35 + p.hit * 0.85;
      } else if (tool === 'staff') {
        dx += -p.hit * 0.2;
        dy += p.wind * 0.15;
      } else if (tool === 'bow') {
        dy += p.wind * 0.08;
      } else if (tool === 'arrow') {
        dz += -p.wind * 0.25 + p.hit * 0.4;
      }
    }

    applyRot(ch, base, dx, dy, dz);
  });
}

/** Extra body hop / lean / lunge on top of the existing bob. */
export function poseCreatureBody(kind: CreatureKind, s: CreatureMotionState): CreatureBodyPose {
  const moving = s.moving;
  const p = strikePhases(s.attack, !!s.loopAttack);
  let y = 0;
  let z = 0;
  let rotX = 0;
  let rotZ = 0;
  let rotY = 0;

  if (s.lock) return { y, z, rotX, rotZ, rotY };

  if (kind === CreatureKind.Skitterwing) {
    y = p.wind * 0.18 - p.hit * 0.22 + p.follow * 0.06;
    rotX = -p.wind * 0.12 - p.hit * 0.42 - p.follow * 0.1;
    z = p.hit * 0.28 + p.follow * 0.08;
  } else if (kind === CreatureKind.Emberling) {
    rotY = Math.sin(s.walkCycle) * (moving ? 0.22 : 0.05);
    rotZ = Math.sin(s.walkCycle + 0.7) * (moving ? 0.16 : 0.04);
    rotX = p.wind * 0.18 + p.hit * 0.62 + p.follow * 0.2;
    y = p.hit * 0.12;
    z = p.hit * 0.34 + p.follow * 0.1;
  } else if (kind === CreatureKind.Bonewretch) {
    rotZ = moving ? 0.12 + Math.sin(s.walkCycle) * 0.09 : 0.06;
    rotX = 0.1 + p.wind * 0.12 + p.hit * 0.4 + p.follow * 0.12;
    z = p.hit * 0.18;
  } else if (kind === CreatureKind.Gravemage) {
    y = Math.sin(s.time * 2.2) * 0.04 + p.wind * 0.06 + p.hit * 0.02;
    rotX = -p.wind * 0.08 - p.hit * 0.28 - p.follow * 0.08;
    rotY = p.hit * 0.08;
  } else if (kind === CreatureKind.Thornwitch) {
    rotY = Math.sin(s.walkCycle * 0.5) * (moving ? 0.18 : 0.05) + p.hit * 0.22;
    rotX = p.hit * 0.18;
    z = p.hit * 0.12;
  } else if (kind === CreatureKind.Rattlekin) {
    rotY = moving ? Math.sin(s.walkCycle * 2) * 0.07 : 0;
    rotX = p.wind * -0.12 + p.hit * 0.48 + p.follow * 0.16;
    rotZ = p.hit * -0.08;
    z = p.hit * 0.3 + p.follow * 0.1;
  } else if (kind === CreatureKind.HeroKnight) {
    rotX = p.wind * -0.08 + p.hit * 0.32 + p.follow * 0.1;
    rotZ = (moving ? Math.sin(s.walkCycle) * 0.04 : 0) + p.hit * -0.06;
    z = p.hit * 0.32 + p.follow * 0.12;
  } else if (kind === CreatureKind.HeroArcher) {
    rotX = -p.wind * 0.1 - p.hit * 0.06;
    rotY = -p.wind * 0.12 - p.hit * 0.04;
    z = -p.wind * 0.1 + p.hit * 0.06;
  } else if (kind === CreatureKind.Scrabbler) {
    rotX = p.wind * -0.08 + p.hit * 0.28 + p.follow * 0.08;
    rotZ = moving ? Math.sin(s.walkCycle * 2) * 0.055 : 0;
    z = p.hit * 0.16;
  }

  return { y, z, rotX, rotZ, rotY };
}

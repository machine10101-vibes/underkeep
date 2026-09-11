import * as THREE from 'three';

export type WalkLimbTag = 'legL' | 'legR' | 'armL' | 'armR' | 'tail' | 'wingH';

/** Walk-cycle tagged limb. Shared with creatureMotion.ts. */
function limb(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x: number,
  y: number,
  z: number,
  rx = 0,
  ry = 0,
  rz = 0,
  walkLimb?: WalkLimbTag,
  gait?: number
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.userData.baseRot = { x: rx, y: ry, z: rz };
  if (walkLimb) m.userData.walkLimb = walkLimb;
  if (gait !== undefined) m.userData.gait = gait;
  return m;
}

function mat(opts: THREE.MeshStandardMaterialParameters): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial(opts);
}

/** Unlit accent — eyes, flame, magic stay readable even when lighting flattens. */
function glow(color: number): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({ color });
}

function part(
  parent: THREE.Object3D,
  geo: THREE.BufferGeometry,
  material: THREE.Material,
  x: number,
  y: number,
  z: number,
  rx = 0,
  ry = 0,
  rz = 0,
  sx = 1,
  sy = 1,
  sz = 1
): THREE.Mesh {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.scale.set(sx, sy, sz);
  m.castShadow = true;
  parent.add(m);
  return m;
}

function tagged(
  x: number,
  y: number,
  z: number,
  rx: number,
  ry: number,
  rz: number,
  walkLimb?: WalkLimbTag,
  gait?: number
): THREE.Group {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.set(rx, ry, rz);
  g.userData.baseRot = { x: rx, y: ry, z: rz };
  if (walkLimb) g.userData.walkLimb = walkLimb;
  if (gait !== undefined) g.userData.gait = gait;
  return g;
}

/** Skull that reads as a skull: sockets, nasal hole, teeth. */
function addSkull(
  parent: THREE.Object3D,
  bone: THREE.Material,
  x: number,
  y: number,
  z: number,
  opts: { tilt?: number; eye?: number; jawHang?: number; scale?: number } = {}
): void {
  const tilt = opts.tilt ?? 0;
  const s = opts.scale ?? 1;
  const skull = new THREE.Group();
  skull.position.set(x, y, z);
  skull.rotation.z = tilt;
  skull.scale.setScalar(s);
  parent.add(skull);

  part(skull, new THREE.SphereGeometry(0.16, 10, 8), bone, 0, 0.04, 0, 0, 0, 0, 1.05, 1.02, 1.22);
  part(skull, new THREE.BoxGeometry(0.2, 0.05, 0.1), bone, 0, 0.1, 0.12);
  part(skull, new THREE.BoxGeometry(0.18, 0.07, 0.14), bone, 0, -0.1 - (opts.jawHang ?? 0), 0.08, 0.28 + (opts.jawHang ?? 0) * 2, 0, 0);
  for (const sx of [-1, 1] as const) {
    part(skull, new THREE.SphereGeometry(0.07, 6, 6), bone, sx * 0.12, -0.02, 0.05, 0, 0, 0, 0.82, 0.68, 0.78);
  }

  const socket = mat({ color: 0x100808, roughness: 0.9 });
  const eyeCol = opts.eye ?? 0xff6020;
  for (const sx of [-1, 1] as const) {
    part(skull, new THREE.SphereGeometry(0.045, 6, 6), socket, sx * 0.06, 0.05, 0.13, 0, 0, 0, 1, 0.85, 0.7);
    part(skull, new THREE.SphereGeometry(0.028, 6, 6), glow(eyeCol), sx * 0.06, 0.05, 0.155);
  }
  part(skull, new THREE.ConeGeometry(0.028, 0.07, 4), socket, 0, -0.01, 0.16, 1.2, 0, 0);
  for (let i = 0; i < 6; i++) {
    part(skull, new THREE.BoxGeometry(0.018, 0.04, 0.016), bone, -0.075 + i * 0.03, -0.14 - (opts.jawHang ?? 0) * 0.4, 0.14);
  }
}

/**
 * Dress a creature group with a silhouette that matches the species name.
 * Keep pickaxe / selectRing userData for Scrabblers; tag walk limbs for bob.
 */
export function dressCreature(g: THREE.Group, kind: string, bodyMat: THREE.MeshStandardMaterial): void {
  if (kind === 'scrabbler') dressScrabbler(g, bodyMat);
  else if (kind === 'skitterwing') dressSkitterwing(g, bodyMat);
  else if (kind === 'rattlekin') dressRattlekin(g);
  else if (kind === 'emberling') dressEmberling(g);
  else if (kind === 'gravemage') dressGravemage(g);
  else if (kind === 'thornwitch') dressThornwitch(g);
  else if (kind === 'bonewretch') dressBonewretch(g);
  else if (kind === 'hero_knight' || kind === 'hero') dressHeroKnight(g, bodyMat);
  else if (kind === 'hero_archer') dressHeroArcher(g, bodyMat);
  else dressGeneric(g, bodyMat);
}

/** Beetle-worker: split elytra, horn, mandibles, six jointed legs, wall-aimed pick. */
function dressScrabbler(g: THREE.Group, _bodyMat: THREE.MeshStandardMaterial): void {
  const belly = mat({ color: 0xc6e070, metalness: 0.08, roughness: 0.55, emissive: 0x3a5010, emissiveIntensity: 0.12 });
  const shellMat = mat({ color: 0x1a2e0c, metalness: 0.28, roughness: 0.42, emissive: 0x0c1806, emissiveIntensity: 0.16 });
  const plateMat = mat({ color: 0x0e1a08, metalness: 0.35, roughness: 0.38 });
  const headMat = mat({ color: 0x7aaa38, metalness: 0.12, roughness: 0.55 });
  const clawMat = mat({ color: 0xf0e8b8, metalness: 0.72, roughness: 0.26 });
  const dark = mat({ color: 0x1a2010, roughness: 0.7 });

  const abdomen = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 10), belly);
  abdomen.scale.set(1.32, 0.56, 1.78);
  abdomen.position.set(0, 0.3, -0.16);
  abdomen.castShadow = true;
  g.add(abdomen);

  // Split elytra — two dark wing-cases with a bright center seam
  for (const sx of [-1, 1] as const) {
    const elytron = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), shellMat);
    elytron.scale.set(0.82, 0.42, 1.42);
    elytron.position.set(sx * 0.2, 0.5, -0.1);
    elytron.rotation.z = sx * -0.18;
    elytron.castShadow = true;
    g.add(elytron);
    part(g, new THREE.BoxGeometry(0.05, 0.05, 0.52), plateMat, sx * 0.17, 0.6, -0.08);
  }
  part(g, new THREE.BoxGeometry(0.035, 0.07, 0.64), glow(0x8ab040), 0, 0.58, -0.08);

  const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.22, 10, 8), shellMat);
  thorax.scale.set(1.38, 0.58, 1.05);
  thorax.position.set(0, 0.4, 0.3);
  thorax.castShadow = true;
  g.add(thorax);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), headMat);
  head.scale.set(1.42, 0.68, 1.28);
  head.position.set(0, 0.4, 0.54);
  head.castShadow = true;
  g.add(head);
  part(g, new THREE.ConeGeometry(0.075, 0.4, 5), clawMat, 0, 0.64, 0.62, 0.55, 0, 0);
  part(g, new THREE.BoxGeometry(0.28, 0.045, 0.07), plateMat, 0, 0.48, 0.42);

  const eyeMat = glow(0xffee66);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.075, 6, 6), eyeMat, sx * 0.14, 0.46, 0.7);
    const mandible = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.4, 5), clawMat);
    mandible.position.set(sx * 0.13, 0.26, 0.74);
    mandible.rotation.set(1.2, 0, sx * 0.68);
    mandible.castShadow = true;
    g.add(mandible);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.01, 0.34, 4), dark);
    ant.position.set(sx * 0.1, 0.62, 0.56);
    ant.rotation.set(-0.75, 0, sx * 0.45);
    g.add(ant);
    part(g, new THREE.SphereGeometry(0.035, 5, 5), headMat, sx * 0.2, 0.76, 0.42);
  }

  const legMat = mat({ color: 0x2a2010, roughness: 0.7 });
  const zLegs = [-0.32, -0.04, 0.26];
  for (const sx of [-1, 1] as const) {
    zLegs.forEach((sz, i) => {
      const tag = sx < 0 ? 'legL' : 'legR';
      const gait = (sx < 0 ? i : i + 1) % 2;
      const hip = tagged(sx * 0.38, 0.26, sz, 0.12, 0, sx * 1.05, tag, gait);
      part(hip, new THREE.CylinderGeometry(0.04, 0.028, 0.26, 5), legMat, 0, -0.02, 0, 0.35, 0, 0);
      part(hip, new THREE.CylinderGeometry(0.028, 0.02, 0.22, 4), dark, sx * 0.02, -0.2, 0.05, 0.7, 0, sx * 0.15);
      part(hip, new THREE.ConeGeometry(0.028, 0.1, 4), clawMat, sx * 0.03, -0.3, 0.1, 1.1, 0, 0);
      g.add(hip);
    });
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.34, 5), clawMat);
    claw.rotation.set(-0.35, 0, sx * 0.85);
    claw.position.set(sx * 0.34, 0.3, 0.56);
    claw.castShadow = true;
    g.add(claw);
  }

  // Dig arm + pick pointed at the wall face (+Z) — poseScrabblerPickaxe depends on this layout
  const digArm = new THREE.Group();
  const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.28, 3, 6), mat({ color: 0x5a7030, roughness: 0.65 }));
  upper.position.set(0.02, 0.08, 0.12);
  upper.rotation.x = 0.85;
  upper.rotation.z = 0.18;
  digArm.add(upper);
  const pick = new THREE.Group();
  const haftMat = mat({ color: 0x7a5028, roughness: 0.85 });
  const steelMat = mat({
    color: 0xd0d8e8,
    metalness: 0.9,
    roughness: 0.22,
    emissive: 0x405060,
    emissiveIntensity: 0.25,
  });
  const haft = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.72, 6), haftMat);
  haft.rotation.x = Math.PI / 2;
  haft.position.set(0, 0.02, 0.3);
  pick.add(haft);
  const headPick = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.16, 0.2), steelMat);
  headPick.position.set(0, 0.02, 0.66);
  pick.add(headPick);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.09, 0.36, 6), mat({ color: 0xe8f0ff, metalness: 0.85, roughness: 0.2 }));
  tip.rotation.x = Math.PI / 2;
  tip.position.set(0, 0.02, 0.9);
  pick.add(tip);
  const butt = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.2, 6), steelMat);
  butt.rotation.x = -Math.PI / 2;
  butt.position.set(0, 0.02, 0.54);
  pick.add(butt);
  pick.position.set(0.02, 0.02, 0.08);
  pick.rotation.x = 0.12;
  digArm.add(pick);
  digArm.position.set(0.28, 1.02, 0.36);
  digArm.rotation.set(-0.28, 0, 0.04);
  g.add(digArm);
  (g as THREE.Group & { pickaxe?: THREE.Object3D }).pickaxe = digArm;

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.42, 0.52, 20),
    new THREE.MeshBasicMaterial({ color: 0xa8e060, transparent: true, opacity: 0.75, side: THREE.DoubleSide, depthWrite: false })
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.05;
  ring.visible = false;
  g.add(ring);
  (g as THREE.Group & { selectRing?: THREE.Object3D }).selectRing = ring;
}

/** Fragile flying scout — dragonfly: huge compound eyes, long banded tail, four veined wings. */
function dressSkitterwing(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const teal = mat({ color: 0x2a8070, metalness: 0.22, roughness: 0.48, emissive: 0x104030, emissiveIntensity: 0.22 });
  const band = mat({ color: 0x80e0b8, emissive: 0x206050, emissiveIntensity: 0.4 });
  const dark = mat({ color: 0x103028, roughness: 0.6 });

  const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), bodyMat);
  thorax.scale.set(1.05, 0.9, 1.25);
  thorax.position.y = 0.98;
  thorax.castShadow = true;
  g.add(thorax);

  // Long segmented abdomen — the dragonfly tell
  for (let i = 0; i < 5; i++) {
    const seg = new THREE.Mesh(new THREE.SphereGeometry(0.085 - i * 0.006, 8, 6), i % 2 ? band : teal);
    seg.scale.set(0.85, 0.75, 1.15);
    seg.position.set(0, 0.9, -0.18 - i * 0.15);
    g.add(seg);
  }
  part(g, new THREE.ConeGeometry(0.042, 0.3, 5), glow(0xffe080), 0, 0.88, -0.98, Math.PI / 2, 0, 0);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.11, 8, 8), mat({ color: 0x50d0b0, roughness: 0.45 }));
  head.position.set(0, 1.02, 0.2);
  g.add(head);
  // Compound eyes dominate the silhouette
  const eyeMat = glow(0x40ffc0);
  const eyeShell = mat({ color: 0x102820, roughness: 0.35, metalness: 0.2 });
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.1, 8, 6), eyeShell, sx * 0.12, 1.04, 0.26, 0, 0, 0, 0.85, 1.05, 0.95);
    part(g, new THREE.SphereGeometry(0.07, 8, 6), eyeMat, sx * 0.13, 1.05, 0.3, 0, 0, 0, 0.8, 1, 0.75);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.008, 0.26, 4), teal);
    ant.position.set(sx * 0.05, 1.2, 0.26);
    ant.rotation.set(-0.55, 0, sx * 0.45);
    g.add(ant);
    part(g, new THREE.SphereGeometry(0.02, 4, 4), dark, sx * 0.1, 1.32, 0.16);
  }

  const wingMat = mat({
    color: 0xc8fff0,
    emissive: 0x308870,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.55,
    side: THREE.DoubleSide,
    metalness: 0.08,
    roughness: 0.3,
  });
  const vein = mat({ color: 0xa0e8d0, transparent: true, opacity: 0.8, side: THREE.DoubleSide });
  for (const sx of [-1, 1] as const) {
    const fore = new THREE.Group();
    fore.position.set(sx * 0.14, 1.06, 0.04);
    fore.rotation.set(-0.12, sx * 0.15, sx * 0.55);
    fore.userData.walkLimb = sx < 0 ? 'armL' : 'armR';
    fore.userData.baseRot = { x: fore.rotation.x, y: fore.rotation.y, z: fore.rotation.z };
    part(fore, new THREE.PlaneGeometry(0.95, 0.3), wingMat, sx * 0.42, 0, 0);
    part(fore, new THREE.PlaneGeometry(0.88, 0.012), vein, sx * 0.4, 0.04, 0.01);
    part(fore, new THREE.PlaneGeometry(0.7, 0.01), vein, sx * 0.36, -0.05, 0.01);
    g.add(fore);

    const hind = new THREE.Group();
    hind.position.set(sx * 0.12, 0.98, -0.12);
    hind.rotation.set(0.12, sx * 0.3, sx * 0.72);
    hind.userData.walkLimb = 'wingH';
    hind.userData.gait = sx < 0 ? 0 : 1;
    hind.userData.baseRot = { x: hind.rotation.x, y: hind.rotation.y, z: hind.rotation.z };
    part(hind, new THREE.PlaneGeometry(0.68, 0.24), wingMat, sx * 0.3, 0, 0);
    part(hind, new THREE.PlaneGeometry(0.58, 0.01), vein, sx * 0.28, 0.03, 0.01);
    g.add(hind);
  }

  const legMat = mat({ color: 0x206050, roughness: 0.65 });
  for (const sx of [-1, 1] as const) {
    const hang = tagged(sx * 0.1, 0.88, 0.08, 0.7, 0, sx * 0.25, sx < 0 ? 'legL' : 'legR');
    part(hang, new THREE.CylinderGeometry(0.016, 0.01, 0.28, 4), legMat, 0, -0.12, 0);
    part(hang, new THREE.CylinderGeometry(0.012, 0.008, 0.2, 4), dark, 0, -0.3, 0.04, 0.5, 0, 0);
    g.add(hang);
    g.add(limb(new THREE.CylinderGeometry(0.014, 0.009, 0.34, 4), legMat, sx * 0.09, 0.7, -0.06, 0.75, 0, sx * 0.35));
    g.add(limb(new THREE.CylinderGeometry(0.012, 0.008, 0.3, 4), dark, sx * 0.08, 0.68, -0.16, 0.85, 0, sx * 0.3));
  }
}

/** Rattling bone fighter — real skull, hanging ribs, rusty pauldron, jagged cleaver. */
function dressRattlekin(g: THREE.Group): void {
  const bone = mat({ color: 0xc8b898, metalness: 0.18, roughness: 0.42, emissive: 0x403010, emissiveIntensity: 0.1 });
  const rust = mat({ color: 0x8a6040, metalness: 0.55, roughness: 0.4 });
  const steel = mat({ color: 0x9aa0a8, metalness: 0.7, roughness: 0.32 });

  part(g, new THREE.SphereGeometry(0.16, 8, 6), bone, 0, 0.48, 0, 0, 0, 0, 1.35, 0.5, 1.05);
  part(g, new THREE.CylinderGeometry(0.04, 0.05, 0.52, 6), bone, 0, 0.8, -0.02);
  for (let i = 0; i < 3; i++) {
    part(g, new THREE.BoxGeometry(0.07, 0.05, 0.07), bone, 0, 0.62 + i * 0.14, -0.02);
  }

  for (let i = 0; i < 5; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.19 - i * 0.012, 0.02, 4, 12, Math.PI * 1.15), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.02 * (i % 2 ? 1 : -1), 0.58 + i * 0.1, 0.05);
    g.add(rib);
  }
  part(g, new THREE.SphereGeometry(0.06, 6, 6), glow(0xff5018), 0, 0.78, 0.04);

  addSkull(g, bone, 0.03, 1.2, 0.04, { tilt: 0.1, eye: 0xff6020 });

  // Scrap fighter kit — rusty pauldron + jaw guard so it is not a Bonewretch clone
  part(g, new THREE.BoxGeometry(0.2, 0.08, 0.24), rust, 0.24, 1.02, 0, 0, 0, -0.45);
  part(g, new THREE.ConeGeometry(0.05, 0.12, 4), rust, 0.32, 1.12, 0.02, 0, 0, -0.6);

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.26, 0.98, 0, 0.08, 0, sx * 0.35, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.SphereGeometry(0.05, 6, 6), bone, 0, 0, 0);
    part(arm, new THREE.CylinderGeometry(0.038, 0.028, 0.28, 5), bone, 0, -0.16, 0.02, 0.15, 0, 0);
    part(arm, new THREE.SphereGeometry(0.04, 5, 5), bone, 0, -0.3, 0.03);
    part(arm, new THREE.CylinderGeometry(0.03, 0.022, 0.22, 4), bone, 0, -0.42, 0.04, 0.2, 0, 0);
    part(arm, new THREE.SphereGeometry(0.045, 5, 5), bone, 0, -0.54, 0.05);
    if (sx > 0) {
      const cleaver = new THREE.Group();
      part(cleaver, new THREE.CylinderGeometry(0.028, 0.034, 0.3, 5), rust, 0, 0.08, 0);
      part(cleaver, new THREE.BoxGeometry(0.08, 0.5, 0.28), steel, 0.08, 0.42, 0, 0, 0, -0.1);
      part(cleaver, new THREE.ConeGeometry(0.08, 0.18, 4), rust, 0.16, 0.62, 0.06, 0, 0, -0.85);
      cleaver.position.set(0.02, -0.5, 0.04);
      cleaver.rotation.z = -0.15;
      arm.add(cleaver);
    }
    g.add(arm);

    const leg = tagged(sx * 0.12, 0.42, 0, 0.12, 0, sx * 0.08, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.045, 0.034, 0.26, 5), bone, 0, -0.12, 0);
    part(leg, new THREE.SphereGeometry(0.045, 5, 5), bone, 0, -0.26, 0);
    part(leg, new THREE.CylinderGeometry(0.034, 0.028, 0.22, 4), bone, 0, -0.38, 0.02, 0.15, 0, 0);
    part(leg, new THREE.BoxGeometry(0.08, 0.05, 0.14), bone, 0, -0.5, 0.04);
    g.add(leg);
  }
}

/** Living coal salamander — lizard body, lava cracks, flame mane, glowing maw. */
function dressEmberling(g: THREE.Group): void {
  const coal = mat({ color: 0x2a1410, metalness: 0.35, roughness: 0.55, emissive: 0x401008, emissiveIntensity: 0.35 });
  const lava = mat({ color: 0xff5018, emissive: 0xff4010, emissiveIntensity: 0.95, metalness: 0.2, roughness: 0.3 });
  const hot = glow(0xff6620);
  const tip = glow(0xffee66);

  const body = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), coal);
  body.scale.set(0.88, 0.62, 2.25);
  body.position.set(0, 0.42, -0.14);
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.SphereGeometry(0.16, 8, 6), coal, 0, 0.4, -0.58, 0, 0, 0, 0.8, 0.58, 1.4);

  for (let i = 0; i < 5; i++) {
    part(g, new THREE.BoxGeometry(0.05, 0.05, 0.22), hot, (i % 2 ? 0.1 : -0.1), 0.6, 0.16 - i * 0.16);
  }

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), coal);
  head.scale.set(0.95, 0.72, 1.65);
  head.position.set(0, 0.62, 0.48);
  head.castShadow = true;
  g.add(head);
  part(g, new THREE.ConeGeometry(0.15, 0.42, 6), coal, 0, 0.56, 0.78, 1.25, 0, 0);
  part(g, new THREE.ConeGeometry(0.11, 0.3, 6), hot, 0, 0.55, 0.82, 1.25, 0, 0);
  part(g, new THREE.SphereGeometry(0.1, 8, 6), tip, 0, 0.56, 0.68);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.04, 6, 6), tip, sx * 0.11, 0.7, 0.62);
    part(g, new THREE.ConeGeometry(0.04, 0.16, 4), coal, sx * 0.13, 0.82, 0.38, 0.25, 0, sx * 0.45);
  }

  for (let i = 0; i < 7; i++) {
    const h = 0.26 + (i % 3) * 0.1;
    part(g, new THREE.ConeGeometry(0.06 + (i % 2) * 0.025, h, 5), i % 2 ? lava : hot, (i % 2 ? 0.07 : -0.07), 0.78 + h * 0.4, 0.28 - i * 0.12);
  }

  const tail = new THREE.Group();
  tail.position.set(0, 0.38, -0.64);
  tail.userData.walkLimb = 'tail';
  tail.userData.baseRot = { x: 0, y: 0, z: 0 };
  part(tail, new THREE.ConeGeometry(0.1, 0.5, 6), coal, 0, 0, -0.2, Math.PI / 2, 0, 0);
  part(tail, new THREE.ConeGeometry(0.055, 0.28, 5), hot, 0, 0.04, -0.48, Math.PI / 2, 0, 0);
  g.add(tail);

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.26, 0.58, 0.18, 0.15, 0, sx * 0.55, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.05, 0.038, 0.26, 5), lava, 0, -0.1, 0.04, 0.4, 0, 0);
    part(arm, new THREE.SphereGeometry(0.07, 6, 6), hot, 0, -0.24, 0.08);
    g.add(arm);
    const leg = tagged(sx * 0.18, 0.36, -0.18, 0.2, 0, sx * 0.2, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.05, 0.04, 0.22, 5), coal, 0, -0.08, 0);
    part(leg, new THREE.SphereGeometry(0.06, 5, 5), lava, 0, -0.2, 0.04);
    g.add(leg);
  }

  const skirt = new THREE.Mesh(
    new THREE.ConeGeometry(0.28, 0.28, 7, 1, true),
    mat({ color: 0xff5010, emissive: 0xff3008, emissiveIntensity: 0.8, transparent: true, opacity: 0.55, side: THREE.DoubleSide })
  );
  skirt.position.set(0, 0.2, -0.04);
  g.add(skirt);
}

/** Hooded grave-scholar — pointed cowl, hidden face, open grimoire, skull staff. */
function dressGravemage(g: THREE.Group): void {
  const robe = mat({ color: 0x3a2468, metalness: 0.18, roughness: 0.58, emissive: 0x221040, emissiveIntensity: 0.28 });
  const lining = mat({ color: 0x6a40b0, roughness: 0.5, emissive: 0x402070, emissiveIntensity: 0.2 });
  const cloth = mat({ color: 0x2a1848, roughness: 0.7 });
  const wood = mat({ color: 0x5a3820, roughness: 0.72 });
  const bone = mat({ color: 0xd0c4a8, roughness: 0.5 });
  const skin = mat({ color: 0x8a7098, roughness: 0.65 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.5, 5, 10), robe);
  body.position.y = 0.72;
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.ConeGeometry(0.42, 0.58, 8, 1, true), robe, 0, 0.3, 0);
  part(g, new THREE.ConeGeometry(0.3, 0.2, 8, 1, true), lining, 0, 0.52, 0.02);
  part(g, new THREE.TorusGeometry(0.2, 0.025, 4, 10), lining, 0, 0.95, 0, Math.PI / 2, 0, 0);

  // Pointed cowl — the warlock read
  part(g, new THREE.SphereGeometry(0.22, 10, 8), robe, 0, 1.26, -0.04, 0, 0, 0, 1.2, 1.15, 1.28);
  part(g, new THREE.ConeGeometry(0.2, 0.42, 8), robe, 0, 1.58, -0.1, -0.35, 0, 0);
  part(g, new THREE.SphereGeometry(0.11, 8, 6), mat({ color: 0x080310, roughness: 0.92 }), 0, 1.2, 0.1);
  const eye = glow(0xcc88ff);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.038, 6, 6), eye, sx * 0.055, 1.22, 0.2);
  }

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.26, 0.95, 0.02, 0.15, 0, sx * 0.25, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.055, 0.04, 0.34, 5), robe, 0, -0.16, 0.04, 0.25, 0, 0);
    part(arm, new THREE.SphereGeometry(0.045, 5, 5), skin, 0, -0.34, 0.08);
    if (sx < 0) {
      const book = new THREE.Group();
      part(book, new THREE.BoxGeometry(0.2, 0.04, 0.26), lining, 0, 0, 0);
      part(book, new THREE.BoxGeometry(0.17, 0.03, 0.23), mat({ color: 0xe8dcc8, roughness: 0.7 }), 0, 0.025, 0);
      part(book, new THREE.BoxGeometry(0.02, 0.05, 0.26), cloth, -0.1, 0, 0);
      book.position.set(-0.02, -0.4, 0.14);
      book.rotation.set(0.9, 0.35, -0.15);
      arm.add(book);
    } else {
      const staff = new THREE.Group();
      part(staff, new THREE.CylinderGeometry(0.025, 0.035, 1.15, 6), wood, 0, 0.2, 0);
      part(staff, new THREE.SphereGeometry(0.07, 8, 6), bone, 0, 0.82, 0);
      part(staff, new THREE.BoxGeometry(0.08, 0.03, 0.06), bone, 0, 0.74, 0.04, 0.3, 0, 0);
      part(staff, new THREE.SphereGeometry(0.085, 10, 8), glow(0xaa66ff), 0, 0.96, 0);
      staff.position.set(0.04, -0.55, 0.02);
      staff.rotation.z = -0.12;
      arm.add(staff);
    }
    g.add(arm);

    g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.36, 5), robe, sx * 0.1, 0.26, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
  }
}

/** Torture mistress — hourglass, long hair, thorn crown, barbed lash. */
function dressThornwitch(g: THREE.Group): void {
  const silk = mat({ color: 0x8a1848, metalness: 0.22, roughness: 0.42, emissive: 0x501020, emissiveIntensity: 0.32 });
  const leather = mat({ color: 0x4a1020, roughness: 0.55, emissive: 0x300810, emissiveIntensity: 0.15 });
  const thorn = mat({ color: 0x2a1014, emissive: 0xff2040, emissiveIntensity: 0.5 });
  const skin = mat({ color: 0xc8a0b0, roughness: 0.52 });
  const hair = mat({ color: 0x1a0810, roughness: 0.7, emissive: 0x200810, emissiveIntensity: 0.2 });
  const barb = glow(0xff3060);

  part(g, new THREE.SphereGeometry(0.22, 10, 8), silk, 0, 0.48, 0, 0, 0, 0, 1.25, 0.65, 0.95);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.36, 5, 8), silk);
  torso.position.y = 0.88;
  torso.castShadow = true;
  g.add(torso);
  part(g, new THREE.SphereGeometry(0.16, 8, 6), leather, 0, 1.0, 0.04, 0, 0, 0, 1.15, 0.7, 0.9);
  part(g, new THREE.ConeGeometry(0.38, 0.52, 8, 1, true), silk, 0, 0.28, 0);
  part(g, new THREE.BoxGeometry(0.22, 0.06, 0.08), leather, 0, 0.7, 0.12);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.155, 10, 8), skin);
  head.position.y = 1.26;
  g.add(head);
  part(g, new THREE.ConeGeometry(0.04, 0.06, 4), skin, 0, 1.24, 0.15, 1.2, 0, 0);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.028, 6, 6), barb, sx * 0.05, 1.28, 0.14);
  }
  // Long hair + thorn crown
  part(g, new THREE.SphereGeometry(0.17, 8, 6), hair, 0, 1.32, -0.04, 0, 0, 0, 1.15, 0.7, 1.1);
  for (let i = 0; i < 5; i++) {
    const a = -0.8 + i * 0.4;
    part(g, new THREE.CapsuleGeometry(0.04, 0.36, 3, 5), hair, Math.sin(a) * 0.1, 1.02, -0.16 + Math.cos(a) * 0.04, 0.25, 0, a * 0.15);
  }
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.18 + (i % 2) * 0.08, 4), thorn);
    spike.position.set(Math.cos(a) * 0.13, 1.42, Math.sin(a) * 0.12);
    spike.rotation.z = Math.cos(a) * 0.35;
    spike.rotation.x = Math.sin(a) * 0.25;
    g.add(spike);
  }

  for (const sx of [-1, 1] as const) {
    part(g, new THREE.ConeGeometry(0.1, 0.2, 5), thorn, sx * 0.22, 1.1, 0, 0, 0, sx * -0.95);
    const arm = tagged(sx * 0.24, 0.98, 0.02, 0.05, 0, sx * 0.45, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.036, 0.026, 0.36, 5), skin, 0, -0.16, 0.02, 0.15, 0, 0);
    part(arm, new THREE.SphereGeometry(0.035, 5, 5), skin, 0, -0.34, 0.04);
    if (sx > 0) {
      const whip = new THREE.Group();
      part(whip, new THREE.CylinderGeometry(0.028, 0.034, 0.16, 5), thorn, 0, 0, 0);
      let px = 0.02;
      let py = 0.1;
      for (let i = 0; i < 7; i++) {
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.016, 0.16, 4), leather);
        seg.position.set(px, py, 0);
        seg.rotation.z = -0.55 - i * 0.12;
        whip.add(seg);
        const hook = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.08, 3), barb);
        hook.position.set(px + 0.05, py + 0.02, 0);
        hook.rotation.z = -1.2;
        whip.add(hook);
        px += 0.1;
        py += 0.1;
      }
      part(whip, new THREE.ConeGeometry(0.055, 0.18, 4), thorn, px, py, 0, 0, 0, -1.2);
      whip.position.set(0.02, -0.38, 0.06);
      whip.rotation.set(0.2, 0.3, -0.85);
      arm.add(whip);
    }
    g.add(arm);

    const leg = tagged(sx * 0.1, 0.36, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.04, 0.03, 0.28, 5), silk, 0, -0.1, 0);
    part(leg, new THREE.BoxGeometry(0.08, 0.08, 0.16), leather, 0, -0.26, 0.04);
    part(leg, new THREE.ConeGeometry(0.04, 0.1, 4), leather, 0, -0.3, 0.12, 1.2, 0, 0);
    g.add(leg);
  }
}

/** Hunched graveyard wretch — hanging jaw, rags, one arm that scrapes the floor. */
function dressBonewretch(g: THREE.Group): void {
  const bone = mat({ color: 0xd0c8b0, metalness: 0.16, roughness: 0.48, emissive: 0x203010, emissiveIntensity: 0.18 });
  const rag = mat({ color: 0x4a5038, roughness: 0.85, emissive: 0x1a2010, emissiveIntensity: 0.1 });
  const rot = mat({ color: 0x6a6040, roughness: 0.8 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.32, 4, 8), bone);
  torso.position.set(0.1, 0.58, 0);
  torso.rotation.z = 0.55;
  torso.castShadow = true;
  g.add(torso);
  for (let i = 0; i < 4; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.016, 4, 10, Math.PI), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.14, 0.46 + i * 0.08, 0.04);
    rib.rotation.z = 0.4;
    g.add(rib);
  }
  part(g, new THREE.SphereGeometry(0.05, 6, 6), glow(0x70ff40), 0.12, 0.58, 0.06);
  part(g, new THREE.ConeGeometry(0.24, 0.46, 6, 1, true), rag, 0.06, 0.5, -0.06, 0, 0, 0.35);
  part(g, new THREE.BoxGeometry(0.08, 0.28, 0.04), rag, -0.06, 0.42, -0.08, 0.2, 0, 0.4);
  part(g, new THREE.BoxGeometry(0.07, 0.22, 0.04), rot, 0.18, 0.38, -0.1, 0.3, 0, -0.25);

  addSkull(g, bone, 0.22, 1.02, 0.06, { tilt: 0.35, eye: 0x70ff40, jawHang: 0.06, scale: 0.95 });

  // Good arm clutches a femur; the other scrapes the floor
  const clutch = tagged(-0.16, 0.72, 0.06, 0.25, 0, -0.55, 'armL');
  part(clutch, new THREE.CylinderGeometry(0.026, 0.02, 0.32, 4), bone, 0, -0.14, 0.02, 0.2, 0, 0);
  part(clutch, new THREE.SphereGeometry(0.035, 5, 5), bone, 0, -0.3, 0.04);
  part(clutch, new THREE.CylinderGeometry(0.03, 0.04, 0.4, 5), bone, 0.08, -0.38, 0.08, 0, 0, 1.1);
  g.add(clutch);

  const drag = tagged(0.34, 0.58, 0.06, 1.35, 0, 0.2, 'armR');
  part(drag, new THREE.CylinderGeometry(0.036, 0.028, 0.42, 4), bone, 0, -0.18, 0);
  part(drag, new THREE.SphereGeometry(0.04, 5, 5), bone, 0, -0.4, 0.02);
  part(drag, new THREE.CylinderGeometry(0.028, 0.022, 0.4, 4), bone, 0, -0.6, 0.06, 0.3, 0, 0);
  part(drag, new THREE.SphereGeometry(0.065, 5, 5), bone, 0.04, -0.82, 0.1);
  part(drag, new THREE.ConeGeometry(0.04, 0.12, 4), bone, 0.08, -0.9, 0.16, 1.1, 0, 0.4);
  g.add(drag);

  const limp = tagged(-0.04, 0.3, 0.02, 0.2, 0, -0.2, 'legL');
  part(limp, new THREE.CylinderGeometry(0.03, 0.024, 0.28, 4), bone, 0, -0.1, 0);
  part(limp, new THREE.BoxGeometry(0.07, 0.04, 0.12), bone, 0, -0.24, 0.04);
  g.add(limp);
  const hitch = tagged(0.16, 0.28, -0.02, 0.35, 0, 0.25, 'legR');
  part(hitch, new THREE.CylinderGeometry(0.03, 0.024, 0.24, 4), bone, 0, -0.08, 0);
  part(hitch, new THREE.BoxGeometry(0.06, 0.04, 0.1), bone, 0, -0.2, 0.03);
  g.add(hitch);
}

/** Plate knight — great helm with T-visor, kite shield, crossguarded longsword. */
function dressHeroKnight(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const armor = mat({ color: bodyMat.color.getHex() || 0xc0c8d8, metalness: 0.78, roughness: 0.26 });
  const steel = mat({ color: 0xd8e0f0, metalness: 0.88, roughness: 0.2 });
  const cloth = mat({ color: 0x8a2028, roughness: 0.62 });
  const dark = mat({ color: 0x101418, metalness: 0.4, roughness: 0.45 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.42, 6, 10), armor);
  body.position.y = 0.76;
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.BoxGeometry(0.38, 0.32, 0.22), armor, 0, 0.88, 0.02);
  part(g, new THREE.BoxGeometry(0.26, 0.4, 0.06), cloth, 0, 0.78, 0.16);
  part(g, new THREE.BoxGeometry(0.05, 0.28, 0.04), steel, 0, 0.82, 0.2);
  part(g, new THREE.BoxGeometry(0.16, 0.05, 0.04), steel, 0, 0.88, 0.2);
  part(g, new THREE.CylinderGeometry(0.22, 0.28, 0.16, 8), armor, 0, 0.52, 0);

  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.14, 8, 6), armor, sx * 0.3, 1.04, 0, 0, 0, 0, 1.2, 0.65, 1.05);
    const arm = tagged(sx * 0.32, 0.92, 0, 0.05, 0, sx * 0.2, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.065, 0.05, 0.28, 6), armor, 0, -0.14, 0);
    part(arm, new THREE.BoxGeometry(0.1, 0.1, 0.1), armor, 0, -0.3, 0);
    if (sx < 0) {
      const shield = new THREE.Group();
      const kite = new THREE.Shape();
      kite.moveTo(0, 0.34);
      kite.lineTo(0.22, 0.12);
      kite.lineTo(0, -0.36);
      kite.lineTo(-0.22, 0.12);
      kite.closePath();
      const face = new THREE.Mesh(new THREE.ShapeGeometry(kite), armor);
      face.castShadow = true;
      shield.add(face);
      part(shield, new THREE.BoxGeometry(0.05, 0.22, 0.03), cloth, 0, 0.02, 0.01);
      part(shield, new THREE.BoxGeometry(0.16, 0.05, 0.03), cloth, 0, 0.08, 0.01);
      part(shield, new THREE.SphereGeometry(0.05, 6, 6), steel, 0, 0.04, 0.03);
      shield.position.set(-0.06, -0.16, 0.16);
      shield.rotation.y = 0.45;
      arm.add(shield);
    } else {
      const sword = new THREE.Group();
      part(sword, new THREE.CylinderGeometry(0.02, 0.024, 0.16, 6), mat({ color: 0x6a4820, roughness: 0.55 }), 0, 0, 0);
      part(sword, new THREE.BoxGeometry(0.22, 0.04, 0.05), steel, 0, 0.1, 0);
      part(sword, new THREE.BoxGeometry(0.05, 0.58, 0.09), steel, 0, 0.4, 0);
      part(sword, new THREE.ConeGeometry(0.045, 0.12, 4), steel, 0, 0.74, 0);
      sword.position.set(0.04, -0.28, 0.06);
      sword.rotation.z = -0.35;
      arm.add(sword);
    }
    g.add(arm);

    const leg = tagged(sx * 0.1, 0.42, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.075, 0.055, 0.28, 6), armor, 0, -0.12, 0);
    part(leg, new THREE.BoxGeometry(0.12, 0.1, 0.2), armor, 0, -0.28, 0.04);
    g.add(leg);
  }

  // Great helm — boxy T-visor, not a sphere with a slit
  part(g, new THREE.CylinderGeometry(0.16, 0.18, 0.26, 8), armor, 0, 1.3, 0);
  part(g, new THREE.BoxGeometry(0.3, 0.08, 0.3), armor, 0, 1.44, 0);
  part(g, new THREE.BoxGeometry(0.22, 0.12, 0.08), dark, 0, 1.28, 0.14);
  part(g, new THREE.BoxGeometry(0.05, 0.16, 0.06), dark, 0, 1.24, 0.15);
  part(g, new THREE.BoxGeometry(0.16, 0.03, 0.02), glow(0x304058), 0, 1.285, 0.185);
  part(g, new THREE.BoxGeometry(0.028, 0.12, 0.02), glow(0x304058), 0, 1.245, 0.188);
  part(g, new THREE.BoxGeometry(0.04, 0.28, 0.16), cloth, 0, 1.56, 0);
}

/** Woods archer — face out of the hood, cloak, recurve bow in hand, fletched quiver. */
function dressHeroArcher(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const cloth = mat({ color: 0x3a5a70, metalness: 0.12, roughness: 0.68 });
  const hood = mat({ color: 0x243848, roughness: 0.72 });
  const leather = mat({ color: 0x8a5a28, roughness: 0.7 });
  const wood = mat({ color: 0x8a6030, roughness: 0.58 });
  const skin = mat({ color: 0xd4b090, roughness: 0.7 });
  const fletch = mat({ color: 0x50a040, roughness: 0.55 });
  const dark = mat({ color: 0x2a2018, roughness: 0.7 });
  void bodyMat;

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.4, 6, 10), cloth);
  body.position.y = 0.68;
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.BoxGeometry(0.3, 0.34, 0.18), leather, 0, 0.78, 0.04);
  part(g, new THREE.BoxGeometry(0.08, 0.5, 0.04), leather, 0.08, 0.78, 0.16, 0, 0, -0.4);
  part(g, new THREE.BoxGeometry(0.36, 0.58, 0.07), hood, 0, 0.68, -0.18, 0.18, 0, 0);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.155, 10, 8), skin);
  head.position.set(0, 1.14, 0.2);
  g.add(head);
  part(g, new THREE.ConeGeometry(0.035, 0.06, 4), skin, 0, 1.12, 0.32, 1.15, 0, 0);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.024, 6, 6), dark, sx * 0.05, 1.16, 0.32);
  }
  // Dark hood behind a visible face
  part(g, new THREE.SphereGeometry(0.18, 10, 8), hood, 0, 1.24, -0.12, 0, 0, 0, 1.2, 1.0, 1.05);
  part(g, new THREE.ConeGeometry(0.14, 0.2, 8, 1, true), hood, 0, 1.4, -0.16, 2.85, 0, 0);
  part(g, new THREE.ConeGeometry(0.035, 0.12, 4), fletch, 0.1, 1.42, -0.08, 0.35, 0, 0.55);

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.22, 0.88, 0.04, 0.1, 0, sx * 0.35, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.042, 0.034, 0.28, 5), cloth, 0, -0.12, 0.02, 0.2, 0, 0);
    part(arm, new THREE.CylinderGeometry(0.04, 0.036, 0.1, 6), leather, 0, -0.26, 0.04);
    part(arm, new THREE.SphereGeometry(0.032, 5, 5), skin, 0, -0.32, 0.05);
    if (sx > 0) {
      const bow = new THREE.Group();
      part(bow, new THREE.TorusGeometry(0.3, 0.024, 4, 14, Math.PI * 1.2), wood, 0, 0.16, 0, 0, 0, -0.2);
      part(bow, new THREE.CylinderGeometry(0.006, 0.006, 0.52, 4), mat({ color: 0xe8e0d0 }), -0.16, 0.16, 0.02);
      part(bow, new THREE.CylinderGeometry(0.012, 0.012, 0.18, 4), wood, 0.02, 0.16, 0.02, 0, 0, 1.2);
      bow.position.set(0.08, -0.2, 0.16);
      bow.rotation.set(0.15, 0.55, -0.2);
      arm.add(bow);
    }
    g.add(arm);

    const leg = tagged(sx * 0.08, 0.38, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.048, 0.038, 0.28, 5), cloth, 0, -0.1, 0);
    part(leg, new THREE.BoxGeometry(0.09, 0.08, 0.16), leather, 0, -0.26, 0.03);
    g.add(leg);
  }

  const quiver = new THREE.Group();
  part(quiver, new THREE.CylinderGeometry(0.055, 0.065, 0.36, 6), leather, 0, 0, 0);
  for (let i = 0; i < 4; i++) {
    part(quiver, new THREE.CylinderGeometry(0.01, 0.01, 0.4, 4), wood, -0.03 + i * 0.02, 0.12, -0.01 + (i % 2) * 0.02);
    part(quiver, new THREE.ConeGeometry(0.022, 0.07, 4), fletch, -0.03 + i * 0.02, 0.34, -0.01 + (i % 2) * 0.02);
  }
  quiver.position.set(0.14, 0.9, -0.2);
  quiver.rotation.set(0.25, 0, 0.35);
  g.add(quiver);
}

function dressGeneric(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.45, 6, 10), bodyMat);
  body.position.y = 0.6;
  body.castShadow = true;
  g.add(body);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), mat({ color: 0xaa9070, roughness: 0.6 }));
  head.position.y = 1.1;
  g.add(head);
  for (const sx of [-1, 1] as const) {
    g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.35, 5), bodyMat, sx * 0.28, 0.6, 0, 0, 0, sx * 0.4, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.055, 0.045, 0.35, 5), bodyMat, sx * 0.1, 0.25, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
  }
}

import * as THREE from 'three';

export type WalkLimbTag = 'legL' | 'legR' | 'armL' | 'armR' | 'foreL' | 'foreR' | 'tail' | 'wingH';

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

/** Fist that seats a tool handle so weapons do not float off the wrist. */
function addGrip(parent: THREE.Object3D, skin: THREE.Material, x: number, y: number, z: number): void {
  part(parent, new THREE.SphereGeometry(0.042, 6, 6), skin, x, y, z);
  part(parent, new THREE.SphereGeometry(0.018, 5, 5), skin, x + 0.03, y + 0.01, z + 0.018);
}

function markHeld(obj: THREE.Object3D, tool: string): void {
  obj.userData.heldTool = tool;
  obj.userData.baseRot = { x: obj.rotation.x, y: obj.rotation.y, z: obj.rotation.z };
}

/** Skull that reads as a skull: brow, cheeks, sockets, nasal hole, teeth. */
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
  const hang = opts.jawHang ?? 0;
  const skull = new THREE.Group();
  skull.position.set(x, y, z);
  skull.rotation.z = tilt;
  skull.scale.setScalar(s);
  parent.add(skull);

  part(skull, new THREE.SphereGeometry(0.155, 10, 8), bone, 0, 0.06, -0.04, 0, 0, 0, 1.18, 1.12, 1.15);
  part(skull, new THREE.BoxGeometry(0.26, 0.07, 0.12), bone, 0, 0.14, 0.12);
  part(skull, new THREE.BoxGeometry(0.07, 0.08, 0.1), bone, 0, 0.04, 0.16);
  part(skull, new THREE.BoxGeometry(0.22, 0.09, 0.16), bone, 0, -0.14 - hang, 0.1, 0.25 + hang * 1.6, 0, 0);
  for (const sx of [-1, 1] as const) {
    part(skull, new THREE.SphereGeometry(0.08, 6, 6), bone, sx * 0.14, 0.0, 0.04, 0, 0, 0, 0.72, 0.58, 0.68);
  }

  const socket = glow(0x030000);
  const eyeCol = opts.eye ?? 0xff6020;
  for (const sx of [-1, 1] as const) {
    part(skull, new THREE.BoxGeometry(0.08, 0.07, 0.06), socket, sx * 0.07, 0.06, 0.16);
    part(skull, new THREE.SphereGeometry(0.034, 6, 6), glow(eyeCol), sx * 0.068, 0.06, 0.2);
  }
  part(skull, new THREE.BoxGeometry(0.045, 0.07, 0.05), socket, 0, -0.01, 0.2);
  for (let i = 0; i < 5; i++) {
    part(skull, new THREE.BoxGeometry(0.024, 0.055, 0.018), bone, -0.07 + i * 0.035, -0.2 - hang * 0.5, 0.17);
  }
}

/** Living face that sits in front of a hood or hair. */
function addFace(
  parent: THREE.Object3D,
  skin: THREE.Material,
  x: number,
  y: number,
  z: number,
  opts: { eye?: number; scale?: number } = {}
): void {
  const s = opts.scale ?? 1;
  const face = new THREE.Group();
  face.position.set(x, y, z);
  face.scale.setScalar(s);
  parent.add(face);
  part(face, new THREE.SphereGeometry(0.15, 10, 8), skin, 0, 0, 0, 0, 0, 0, 1.02, 1.05, 0.95);
  part(face, new THREE.ConeGeometry(0.038, 0.07, 5), skin, 0, -0.02, 0.14, 1.15, 0, 0);
  part(face, new THREE.SphereGeometry(0.045, 6, 6), skin, 0, -0.06, 0.1, 0, 0, 0, 1.15, 0.55, 0.7);
  const eye = glow(opts.eye ?? 0x1a1410);
  for (const sx of [-1, 1] as const) {
    part(face, new THREE.SphereGeometry(0.042, 6, 6), skin, sx * 0.07, 0.02, 0.08, 0, 0, 0, 0.85, 0.7, 0.55);
    part(face, new THREE.SphereGeometry(0.024, 6, 6), eye, sx * 0.052, 0.03, 0.132);
    part(face, new THREE.SphereGeometry(0.01, 4, 4), glow(0xf0ead8), sx * 0.06, 0.038, 0.148);
  }
  part(face, new THREE.BoxGeometry(0.055, 0.012, 0.02), mat({ color: 0x6a3040, roughness: 0.7 }), 0, -0.07, 0.132);
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

  // Oval lime belly — beetle underside, not a ball
  const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.28, 0.62, 5, 10), belly);
  abdomen.rotation.x = Math.PI / 2;
  abdomen.scale.set(1.35, 0.72, 0.55);
  abdomen.position.set(0, 0.28, -0.14);
  abdomen.castShadow = true;
  g.add(abdomen);
  for (let i = 0; i < 4; i++) {
    part(g, new THREE.BoxGeometry(0.42 - i * 0.04, 0.04, 0.12), belly, 0, 0.22, -0.02 - i * 0.16);
  }

  // Split elytra — flattened wing-cases with a bright center seam
  for (const sx of [-1, 1] as const) {
    const elytron = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.55, 4, 8), shellMat);
    elytron.rotation.x = Math.PI / 2;
    elytron.scale.set(1.05, 0.95, 0.38);
    elytron.position.set(sx * 0.16, 0.5, -0.12);
    elytron.rotation.z = sx * -0.12;
    elytron.castShadow = true;
    g.add(elytron);
    part(g, new THREE.BoxGeometry(0.06, 0.035, 0.48), plateMat, sx * 0.15, 0.6, -0.1);
  }
  part(g, new THREE.BoxGeometry(0.03, 0.08, 0.7), glow(0x9ac048), 0, 0.58, -0.1);

  // Boxy thorax plate between head and wing-cases
  part(g, new THREE.BoxGeometry(0.46, 0.16, 0.28), shellMat, 0, 0.42, 0.28);
  part(g, new THREE.BoxGeometry(0.38, 0.06, 0.2), plateMat, 0, 0.52, 0.28);

  // Wedge head + rhinoceros horn
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), headMat);
  head.scale.set(1.35, 0.62, 1.2);
  head.position.set(0, 0.4, 0.54);
  head.castShadow = true;
  g.add(head);
  part(g, new THREE.ConeGeometry(0.16, 0.22, 6), headMat, 0, 0.38, 0.68, 1.15, 0, 0);
  part(g, new THREE.ConeGeometry(0.07, 0.46, 5), clawMat, 0, 0.68, 0.6, 0.48, 0, 0);
  part(g, new THREE.ConeGeometry(0.03, 0.1, 4), clawMat, 0, 0.9, 0.5, 0.3, 0, 0);
  part(g, new THREE.BoxGeometry(0.3, 0.04, 0.07), plateMat, 0, 0.48, 0.42);

  const eyeMat = glow(0xffee66);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.08, 7, 6), mat({ color: 0x3a5010, roughness: 0.4 }), sx * 0.15, 0.46, 0.68, 0, 0, 0, 0.85, 0.9, 0.7);
    part(g, new THREE.SphereGeometry(0.055, 6, 6), eyeMat, sx * 0.155, 0.47, 0.74);
    const mandible = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.42, 5), clawMat);
    mandible.position.set(sx * 0.14, 0.24, 0.76);
    mandible.rotation.set(1.15, 0, sx * 0.72);
    mandible.castShadow = true;
    g.add(mandible);
    part(g, new THREE.ConeGeometry(0.035, 0.12, 4), clawMat, sx * 0.22, 0.16, 0.88, 1.3, 0, sx * 0.4);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.01, 0.36, 4), dark);
    ant.position.set(sx * 0.1, 0.64, 0.54);
    ant.rotation.set(-0.75, 0, sx * 0.45);
    g.add(ant);
    part(g, new THREE.SphereGeometry(0.038, 5, 5), headMat, sx * 0.21, 0.8, 0.4);
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
  part(digArm, new THREE.SphereGeometry(0.05, 6, 6), clawMat, 0.02, 0.0, 0.1);
  part(digArm, new THREE.ConeGeometry(0.03, 0.1, 4), clawMat, 0.06, -0.02, 0.08, 0.8, 0, 0.6);
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

  const thorax = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.24, 0.34), bodyMat);
  thorax.position.set(0, 0.98, 0.02);
  thorax.castShadow = true;
  g.add(thorax);
  part(g, new THREE.SphereGeometry(0.14, 8, 6), teal, 0, 1.02, 0.02, 0, 0, 0, 1.1, 0.85, 1.2);

  // Long segmented abdomen — the dragonfly tell
  for (let i = 0; i < 7; i++) {
    const seg = new THREE.Mesh(new THREE.SphereGeometry(0.078 - i * 0.005, 8, 6), i % 2 ? band : teal);
    seg.scale.set(0.7, 0.62, 1.35);
    seg.position.set(0, 0.92 - i * 0.012, -0.2 - i * 0.145);
    g.add(seg);
  }
  part(g, new THREE.ConeGeometry(0.04, 0.28, 5), glow(0xffe080), 0, 0.84, -1.22, Math.PI / 2, 0, 0);
  part(g, new THREE.ConeGeometry(0.018, 0.1, 4), glow(0xffa040), 0, 0.84, -1.38, Math.PI / 2, 0, 0);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.09, 8, 8), mat({ color: 0x50d0b0, roughness: 0.45 }));
  head.position.set(0, 1.02, 0.22);
  g.add(head);
  // Compound eyes dominate the silhouette
  const eyeMat = glow(0x40ffc0);
  const eyeShell = mat({ color: 0x102820, roughness: 0.35, metalness: 0.2 });
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.125, 8, 6), eyeShell, sx * 0.13, 1.05, 0.28, 0, 0, 0, 0.88, 1.12, 1.0);
    part(g, new THREE.SphereGeometry(0.09, 8, 6), eyeMat, sx * 0.145, 1.06, 0.34, 0, 0, 0, 0.78, 1.05, 0.72);
    part(g, new THREE.SphereGeometry(0.03, 5, 5), glow(0xe8fff4), sx * 0.16, 1.1, 0.38);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.008, 0.22, 4), teal);
    ant.position.set(sx * 0.04, 1.18, 0.28);
    ant.rotation.set(-0.55, 0, sx * 0.45);
    g.add(ant);
    part(g, new THREE.SphereGeometry(0.018, 4, 4), dark, sx * 0.08, 1.28, 0.18);
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
    part(fore, new THREE.PlaneGeometry(1.05, 0.26), wingMat, sx * 0.48, 0, 0);
    part(fore, new THREE.PlaneGeometry(0.98, 0.012), vein, sx * 0.46, 0.05, 0.01);
    part(fore, new THREE.PlaneGeometry(0.82, 0.01), vein, sx * 0.4, -0.04, 0.01);
    part(fore, new THREE.PlaneGeometry(0.012, 0.2), vein, sx * 0.28, 0, 0.01);
    part(fore, new THREE.PlaneGeometry(0.012, 0.16), vein, sx * 0.55, 0, 0.01);
    g.add(fore);

    const hind = new THREE.Group();
    hind.position.set(sx * 0.12, 0.98, -0.12);
    hind.rotation.set(0.12, sx * 0.3, sx * 0.72);
    hind.userData.walkLimb = 'wingH';
    hind.userData.gait = sx < 0 ? 0 : 1;
    hind.userData.baseRot = { x: hind.rotation.x, y: hind.rotation.y, z: hind.rotation.z };
    part(hind, new THREE.PlaneGeometry(0.78, 0.22), wingMat, sx * 0.34, 0, 0);
    part(hind, new THREE.PlaneGeometry(0.68, 0.01), vein, sx * 0.32, 0.04, 0.01);
    part(hind, new THREE.PlaneGeometry(0.01, 0.16), vein, sx * 0.22, 0, 0.01);
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

  part(g, new THREE.SphereGeometry(0.16, 8, 6), bone, 0, 0.44, 0, 0, 0, 0, 1.45, 0.42, 1.15);
  part(g, new THREE.BoxGeometry(0.22, 0.08, 0.14), bone, 0, 0.4, 0.02);
  part(g, new THREE.CylinderGeometry(0.035, 0.048, 0.58, 6), bone, 0, 0.78, -0.02);
  for (let i = 0; i < 5; i++) {
    part(g, new THREE.BoxGeometry(0.07, 0.04, 0.07), bone, 0, 0.54 + i * 0.12, -0.02);
  }

  for (let i = 0; i < 6; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.2 - i * 0.012, 0.018, 4, 12, Math.PI * 1.2), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.02 * (i % 2 ? 1 : -1), 0.52 + i * 0.09, 0.06);
    g.add(rib);
  }
  part(g, new THREE.SphereGeometry(0.055, 6, 6), glow(0xff5018), 0, 0.76, 0.05);

  addSkull(g, bone, 0.03, 1.26, 0.12, { tilt: 0.06, eye: 0xff6020, scale: 1.28 });

  // Scrap fighter kit — rusty pauldron + jaw guard so it is not a Bonewretch clone
  part(g, new THREE.BoxGeometry(0.24, 0.1, 0.28), rust, 0.26, 1.0, 0.02, 0, 0, -0.5);
  part(g, new THREE.ConeGeometry(0.055, 0.14, 4), rust, 0.36, 1.12, 0.04, 0, 0, -0.65);
  part(g, new THREE.BoxGeometry(0.16, 0.05, 0.12), rust, 0.04, 1.08, 0.16, 0.2, 0, 0);

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.26, 0.98, 0, 0.08, 0, sx * 0.35, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.SphereGeometry(0.05, 6, 6), bone, 0, 0, 0);
    part(arm, new THREE.CylinderGeometry(0.038, 0.03, 0.26, 5), bone, 0, -0.14, 0.02, 0.15, 0, 0);
    part(arm, new THREE.SphereGeometry(0.04, 5, 5), bone, 0, -0.28, 0.03);
    const fore = tagged(0, -0.28, 0.03, 0.28, 0, 0, sx < 0 ? 'foreL' : 'foreR');
    part(fore, new THREE.CylinderGeometry(0.03, 0.024, 0.2, 4), bone, 0, -0.1, 0.02, 0.18, 0, 0);
    addGrip(fore, bone, 0, -0.22, 0.04);
    if (sx > 0) {
      const cleaver = new THREE.Group();
      part(cleaver, new THREE.CylinderGeometry(0.022, 0.028, 0.22, 5), rust, 0, 0.02, 0);
      part(cleaver, new THREE.BoxGeometry(0.08, 0.48, 0.28), steel, 0.06, 0.32, 0, 0, 0, -0.08);
      part(cleaver, new THREE.ConeGeometry(0.08, 0.16, 4), rust, 0.14, 0.54, 0.04, 0, 0, -0.8);
      cleaver.position.set(0.02, -0.2, 0.03);
      cleaver.rotation.set(0.35, 0.12, -0.08);
      markHeld(cleaver, 'cleaver');
      fore.userData.carry = true;
      fore.add(cleaver);
    }
    arm.add(fore);
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

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.85, 5, 10), coal);
  body.rotation.x = Math.PI / 2;
  body.scale.set(1.05, 1.15, 0.72);
  body.position.set(0, 0.4, -0.08);
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.SphereGeometry(0.16, 8, 6), coal, 0, 0.38, -0.62, 0, 0, 0, 0.85, 0.55, 1.35);

  for (let i = 0; i < 6; i++) {
    part(g, new THREE.BoxGeometry(0.05, 0.035, 0.2), glow(0xff5018), (i % 2 ? 0.1 : -0.1), 0.54, 0.22 - i * 0.16);
  }
  part(g, new THREE.BoxGeometry(0.08, 0.055, 1.05), glow(0xff7728), 0, 0.56, -0.06);

  // Open glowing maw — salamander snout, not a dark potato
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), coal);
  head.scale.set(0.92, 0.68, 1.45);
  head.position.set(0, 0.58, 0.52);
  head.castShadow = true;
  g.add(head);
  part(g, new THREE.ConeGeometry(0.14, 0.38, 6), coal, 0, 0.62, 0.78, 1.05, 0, 0);
  part(g, new THREE.ConeGeometry(0.12, 0.34, 6), coal, 0, 0.48, 0.76, 2.05, 0, 0);
  part(g, new THREE.ConeGeometry(0.1, 0.28, 6), hot, 0, 0.55, 0.82, 1.35, 0, 0);
  part(g, new THREE.SphereGeometry(0.09, 8, 6), tip, 0, 0.56, 0.7);
  for (let i = 0; i < 4; i++) {
    part(g, new THREE.ConeGeometry(0.016, 0.05, 3), tip, -0.05 + i * 0.033, 0.5, 0.92, 1.4, 0, 0);
  }
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.038, 6, 6), tip, sx * 0.12, 0.7, 0.64);
    part(g, new THREE.ConeGeometry(0.035, 0.14, 4), coal, sx * 0.14, 0.8, 0.4, 0.25, 0, sx * 0.45);
  }

  for (let i = 0; i < 8; i++) {
    const h = 0.22 + (i % 3) * 0.1;
    part(g, new THREE.ConeGeometry(0.055 + (i % 2) * 0.02, h, 5), i % 2 ? lava : hot, (i % 2 ? 0.06 : -0.06), 0.72 + h * 0.38, 0.32 - i * 0.11);
  }

  const tail = new THREE.Group();
  tail.position.set(0, 0.36, -0.7);
  tail.userData.walkLimb = 'tail';
  tail.userData.baseRot = { x: 0, y: 0, z: 0 };
  part(tail, new THREE.ConeGeometry(0.1, 0.55, 6), coal, 0, 0, -0.22, Math.PI / 2, 0, 0);
  part(tail, new THREE.ConeGeometry(0.05, 0.32, 5), hot, 0, 0.04, -0.52, Math.PI / 2, 0, 0);
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

  // Pointed cowl — dark opening punched in the hood so it is not a wizard-hat blob
  part(g, new THREE.SphereGeometry(0.22, 10, 8), robe, 0, 1.3, -0.12, 0, 0, 0, 1.3, 1.22, 1.28);
  part(g, new THREE.ConeGeometry(0.18, 0.52, 8), robe, 0, 1.68, -0.2, -0.48, 0, 0);
  part(g, new THREE.BoxGeometry(0.2, 0.18, 0.1), glow(0x050210), 0, 1.2, 0.14);
  const eye = glow(0xdd99ff);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.SphereGeometry(0.046, 6, 6), eye, sx * 0.055, 1.22, 0.2);
    part(g, new THREE.SphereGeometry(0.016, 4, 4), glow(0xf4e8ff), sx * 0.06, 1.235, 0.23);
  }

  for (const sx of [-1, 1] as const) {
    const arm = tagged(sx * 0.26, 0.95, 0.02, 0.15, 0, sx * 0.25, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.055, 0.04, 0.26, 5), robe, 0, -0.12, 0.03, 0.22, 0, 0);
    part(arm, new THREE.SphereGeometry(0.042, 5, 5), skin, 0, -0.26, 0.05);
    const fore = tagged(0, -0.26, 0.05, 0.32, 0, 0, sx < 0 ? 'foreL' : 'foreR');
    part(fore, new THREE.CylinderGeometry(0.038, 0.03, 0.18, 5), robe, 0, -0.08, 0.02, 0.2, 0, 0);
    addGrip(fore, skin, 0, -0.2, 0.04);
    if (sx < 0) {
      const book = new THREE.Group();
      part(book, new THREE.BoxGeometry(0.2, 0.04, 0.26), lining, 0, 0, 0);
      part(book, new THREE.BoxGeometry(0.17, 0.03, 0.23), mat({ color: 0xe8dcc8, roughness: 0.7 }), 0, 0.025, 0);
      part(book, new THREE.BoxGeometry(0.02, 0.05, 0.26), cloth, -0.1, 0, 0);
      book.position.set(0, -0.18, 0.1);
      book.rotation.set(0.85, 0.3, -0.12);
      markHeld(book, 'book');
      fore.userData.carry = true;
      fore.add(book);
    } else {
      const staff = new THREE.Group();
      part(staff, new THREE.CylinderGeometry(0.022, 0.03, 1.2, 6), wood, 0, 0.12, 0);
      addSkull(staff, bone, 0, 0.8, 0.04, { tilt: 0.12, eye: 0xaa66ff, scale: 0.58 });
      part(staff, new THREE.SphereGeometry(0.1, 10, 8), glow(0xaa66ff), 0, 1.02, 0);
      staff.position.set(0.02, -0.2, 0.03);
      staff.rotation.set(0.18, 0.05, -0.1);
      markHeld(staff, 'staff');
      fore.userData.carry = true;
      fore.add(staff);
    }
    arm.add(fore);
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

  part(g, new THREE.SphereGeometry(0.24, 10, 8), silk, 0, 0.46, 0, 0, 0, 0, 1.35, 0.58, 0.95);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.11, 0.34, 5, 8), silk);
  torso.position.y = 0.86;
  torso.castShadow = true;
  g.add(torso);
  part(g, new THREE.SphereGeometry(0.17, 8, 6), leather, 0, 1.02, 0.04, 0, 0, 0, 1.22, 0.62, 0.88);
  part(g, new THREE.ConeGeometry(0.4, 0.52, 8, 1, true), silk, 0, 0.26, 0);
  part(g, new THREE.BoxGeometry(0.2, 0.05, 0.08), leather, 0, 0.68, 0.12);

  addFace(g, skin, 0, 1.28, 0.08, { eye: 0xff3060, scale: 1.02 });
  // Long hair + thorn crown
  part(g, new THREE.SphereGeometry(0.18, 8, 6), hair, 0, 1.36, -0.06, 0, 0, 0, 1.2, 0.72, 1.15);
  for (let i = 0; i < 7; i++) {
    const a = -1.2 + i * 0.4;
    part(g, new THREE.CapsuleGeometry(0.04, 0.52, 3, 5), hair, Math.sin(a) * 0.14, 0.92, -0.2 + Math.cos(a) * 0.05, 0.35, 0, a * 0.12);
  }
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * Math.PI * 2;
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.032, 0.2 + (i % 2) * 0.1, 4), thorn);
    spike.position.set(Math.cos(a) * 0.14, 1.46, Math.sin(a) * 0.12 - 0.02);
    spike.rotation.z = Math.cos(a) * 0.4;
    spike.rotation.x = Math.sin(a) * 0.28;
    g.add(spike);
  }
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.ConeGeometry(0.1, 0.2, 5), thorn, sx * 0.22, 1.1, 0, 0, 0, sx * -0.95);
    const arm = tagged(sx * 0.24, 0.98, 0.02, 0.05, 0, sx * 0.45, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.036, 0.028, 0.24, 5), skin, 0, -0.12, 0.02, 0.15, 0, 0);
    part(arm, new THREE.SphereGeometry(0.032, 5, 5), skin, 0, -0.24, 0.03);
    const fore = tagged(0, -0.24, 0.03, 0.22, 0, 0, sx < 0 ? 'foreL' : 'foreR');
    part(fore, new THREE.CylinderGeometry(0.028, 0.022, 0.18, 5), skin, 0, -0.08, 0.02, 0.12, 0, 0);
    addGrip(fore, skin, 0, -0.2, 0.03);
    if (sx > 0) {
      const whip = new THREE.Group();
      part(whip, new THREE.CylinderGeometry(0.024, 0.032, 0.16, 5), thorn, 0, 0, 0);
      let px = 0.02;
      let py = 0.1;
      for (let i = 0; i < 7; i++) {
        const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.02, 0.16, 4), leather);
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
      whip.position.set(0.02, -0.18, 0.04);
      whip.rotation.set(0.35, 0.25, -0.95);
      markHeld(whip, 'whip');
      fore.userData.carry = true;
      fore.add(whip);
    }
    arm.add(fore);
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

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.12, 0.3, 4, 8), bone);
  torso.position.set(0.12, 0.54, 0);
  torso.rotation.z = 0.72;
  torso.castShadow = true;
  g.add(torso);
  for (let i = 0; i < 4; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.12, 0.016, 4, 10, Math.PI), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.16, 0.42 + i * 0.08, 0.04);
    rib.rotation.z = 0.55;
    g.add(rib);
  }
  part(g, new THREE.SphereGeometry(0.045, 6, 6), glow(0x70ff40), 0.14, 0.54, 0.06);
  part(g, new THREE.ConeGeometry(0.26, 0.5, 6, 1, true), rag, 0.04, 0.46, -0.08, 0, 0, 0.45);
  part(g, new THREE.BoxGeometry(0.09, 0.34, 0.04), rag, -0.1, 0.38, -0.1, 0.25, 0, 0.5);
  part(g, new THREE.BoxGeometry(0.07, 0.26, 0.04), rot, 0.2, 0.34, -0.12, 0.35, 0, -0.3);
  part(g, new THREE.BoxGeometry(0.06, 0.2, 0.03), rag, 0.08, 0.28, -0.14, 0.4, 0, 0.2);

  addSkull(g, bone, 0.28, 0.96, 0.08, { tilt: 0.48, eye: 0x70ff40, jawHang: 0.1, scale: 1.0 });

  // Good arm clutches a femur; the other scrapes the floor
  const clutch = tagged(-0.16, 0.72, 0.06, 0.25, 0, -0.55, 'armL');
  part(clutch, new THREE.CylinderGeometry(0.026, 0.02, 0.32, 4), bone, 0, -0.14, 0.02, 0.2, 0, 0);
  addGrip(clutch, bone, 0, -0.3, 0.04);
  const femur = new THREE.Group();
  part(femur, new THREE.CylinderGeometry(0.03, 0.04, 0.4, 5), bone, 0, 0.04, 0);
  part(femur, new THREE.SphereGeometry(0.045, 5, 5), bone, 0, 0.26, 0);
  femur.position.set(0.04, -0.28, 0.06);
  femur.rotation.set(0.15, 0.1, 1.05);
  markHeld(femur, 'femur');
  clutch.add(femur);
  g.add(clutch);

  const drag = tagged(0.34, 0.5, 0.04, 0.42, 0, 0.18, 'armR');
  part(drag, new THREE.CylinderGeometry(0.038, 0.03, 0.36, 4), bone, 0, -0.16, 0.02, 0.2, 0, 0);
  part(drag, new THREE.SphereGeometry(0.04, 5, 5), bone, 0, -0.34, 0.04);
  part(drag, new THREE.CylinderGeometry(0.03, 0.022, 0.38, 4), bone, 0, -0.52, 0.08, 0.35, 0, 0);
  part(drag, new THREE.SphereGeometry(0.072, 5, 5), bone, 0.04, -0.72, 0.12);
  part(drag, new THREE.ConeGeometry(0.045, 0.14, 4), bone, 0.08, -0.82, 0.18, 1.1, 0, 0.4);
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
    part(g, new THREE.SphereGeometry(0.16, 8, 6), armor, sx * 0.32, 1.06, 0, 0, 0, 0, 1.25, 0.68, 1.1);
    const arm = tagged(sx * 0.32, 0.92, 0, 0.05, 0, sx * 0.2, sx < 0 ? 'armL' : 'armR');
    part(arm, new THREE.CylinderGeometry(0.065, 0.05, 0.24, 6), armor, 0, -0.12, 0);
    part(arm, new THREE.BoxGeometry(0.09, 0.08, 0.09), armor, 0, -0.26, 0);
    const fore = tagged(0, -0.26, 0, 0.22, 0, 0, sx < 0 ? 'foreL' : 'foreR');
    part(fore, new THREE.CylinderGeometry(0.05, 0.042, 0.18, 6), armor, 0, -0.08, 0.02);
    addGrip(fore, armor, 0, -0.2, 0.03);
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
      shield.position.set(-0.04, -0.12, 0.14);
      shield.rotation.y = 0.4;
      markHeld(shield, 'shield');
      fore.userData.carry = true;
      fore.add(shield);
    } else {
      const sword = new THREE.Group();
      part(sword, new THREE.CylinderGeometry(0.018, 0.022, 0.12, 6), mat({ color: 0x6a4820, roughness: 0.55 }), 0, 0, 0, Math.PI / 2, 0, 0);
      part(sword, new THREE.BoxGeometry(0.18, 0.035, 0.04), steel, 0, 0, 0.08);
      part(sword, new THREE.BoxGeometry(0.05, 0.08, 0.52), steel, 0, 0.02, 0.36);
      part(sword, new THREE.ConeGeometry(0.04, 0.12, 4), steel, 0, 0.02, 0.66, Math.PI / 2, 0, 0);
      sword.position.set(0.03, -0.18, 0.06);
      sword.rotation.set(-0.55, 0.35, -0.25);
      markHeld(sword, 'sword');
      fore.userData.carry = true;
      fore.add(sword);
    }
    arm.add(fore);
    g.add(arm);

    const leg = tagged(sx * 0.1, 0.42, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.075, 0.055, 0.28, 6), armor, 0, -0.12, 0);
    part(leg, new THREE.BoxGeometry(0.12, 0.1, 0.2), armor, 0, -0.28, 0.04);
    g.add(leg);
  }

  // Great helm — boxy T-visor punched through the face
  part(g, new THREE.CylinderGeometry(0.16, 0.18, 0.26, 8), armor, 0, 1.3, 0);
  part(g, new THREE.BoxGeometry(0.32, 0.1, 0.32), armor, 0, 1.46, 0);
  part(g, new THREE.BoxGeometry(0.26, 0.14, 0.1), dark, 0, 1.27, 0.145);
  part(g, new THREE.BoxGeometry(0.06, 0.2, 0.08), dark, 0, 1.2, 0.155);
  part(g, new THREE.BoxGeometry(0.2, 0.04, 0.02), glow(0x406080), 0, 1.28, 0.2);
  part(g, new THREE.BoxGeometry(0.036, 0.16, 0.02), glow(0x406080), 0, 1.22, 0.205);
  part(g, new THREE.BoxGeometry(0.05, 0.32, 0.16), cloth, 0, 1.58, 0);
}

/** Vertical recurve — stave curves away, string nock-to-nock, grip in the fist. */
function makeRecurveBow(): THREE.Group {
  const wood = mat({ color: 0x8a5a28, roughness: 0.52, metalness: 0.08 });
  const wrap = mat({ color: 0x4a2c14, roughness: 0.75 });
  const string = mat({ color: 0xf0ead8, roughness: 0.4, emissive: 0x403820, emissiveIntensity: 0.12 });
  const bow = new THREE.Group();

  // D in the XY plane so the recurve reads from the front / 3/4, not edge-on.
  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.04, -0.42, 0),
    new THREE.Vector3(-0.1, -0.28, 0),
    new THREE.Vector3(-0.035, -0.14, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(-0.035, 0.14, 0),
    new THREE.Vector3(-0.1, 0.28, 0),
    new THREE.Vector3(0.04, 0.42, 0),
  ]);
  const stave = new THREE.Mesh(new THREE.TubeGeometry(curve, 28, 0.022, 7, false), wood);
  stave.castShadow = true;
  bow.add(stave);
  part(bow, new THREE.CylinderGeometry(0.026, 0.026, 0.14, 6), wrap, 0, 0, 0);
  part(bow, new THREE.SphereGeometry(0.016, 5, 5), wood, 0.04, 0.42, 0);
  part(bow, new THREE.SphereGeometry(0.016, 5, 5), wood, 0.04, -0.42, 0);
  const cord = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.82, 5), string);
  cord.position.set(0.07, 0, 0);
  bow.add(cord);
  return bow;
}

/** Shaft, steel head, three vanes, nock — reads as an arrow, not a stick. */
function makeArrow(): THREE.Group {
  const wood = mat({ color: 0x8a6030, roughness: 0.58 });
  const steel = mat({ color: 0xc8d0dc, metalness: 0.82, roughness: 0.22 });
  const fletch = mat({ color: 0x3a8a38, roughness: 0.5 });
  const nock = mat({ color: 0x2a2018, roughness: 0.7 });
  const arrow = new THREE.Group();
  part(arrow, new THREE.CylinderGeometry(0.012, 0.012, 0.64, 6), wood, 0, 0, 0);
  part(arrow, new THREE.ConeGeometry(0.028, 0.1, 5), steel, 0, 0.36, 0);
  part(arrow, new THREE.BoxGeometry(0.018, 0.03, 0.02), nock, 0, -0.33, 0);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2;
    const vane = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.09, 0.008), fletch);
    vane.position.set(Math.sin(a) * 0.02, -0.24, Math.cos(a) * 0.02);
    vane.rotation.y = a;
    arrow.add(vane);
  }
  return arrow;
}

/** Woods archer — one head in a draped cowl, recurve bow in the left fist, arrow in the right. */
function dressHeroArcher(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const cloth = mat({ color: 0x3a5a70, metalness: 0.12, roughness: 0.68 });
  const hood = mat({ color: 0x243848, roughness: 0.72 });
  const leather = mat({ color: 0x8a5a28, roughness: 0.7 });
  const wood = mat({ color: 0x8a6030, roughness: 0.58 });
  const skin = mat({ color: 0xd4b090, roughness: 0.7 });
  const fletch = mat({ color: 0x3a8a38, roughness: 0.5 });
  const dark = mat({ color: 0x2a2018, roughness: 0.7 });
  void bodyMat;

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.4, 6, 10), cloth);
  body.position.y = 0.68;
  body.castShadow = true;
  g.add(body);
  part(g, new THREE.BoxGeometry(0.3, 0.34, 0.18), leather, 0, 0.78, 0.04);
  part(g, new THREE.BoxGeometry(0.07, 0.46, 0.04), leather, 0.07, 0.78, 0.15, 0, 0, -0.35);
  part(g, new THREE.BoxGeometry(0.34, 0.62, 0.06), hood, 0, 0.64, -0.16, 0.2, 0, 0);

  // One skull. Cowl wraps that same head — no second sphere behind it.
  const headY = 1.18;
  const headZ = 0.1;
  addFace(g, skin, 0, headY, headZ, { eye: 0x1a2010, scale: 0.96 });
  part(g, new THREE.SphereGeometry(0.12, 8, 6), dark, 0, headY + 0.05, headZ - 0.02, 0, 0, 0, 1.05, 0.5, 0.85);
  part(g, new THREE.SphereGeometry(0.155, 10, 8), hood, 0, headY + 0.1, headZ - 0.04, 0, 0, 0, 1.18, 0.4, 1.02);
  part(g, new THREE.SphereGeometry(0.13, 8, 6), hood, 0, headY + 0.02, headZ - 0.1, 0, 0, 0, 1.12, 0.85, 0.52);
  for (const sx of [-1, 1] as const) {
    part(g, new THREE.CapsuleGeometry(0.035, 0.16, 3, 6), hood, sx * 0.13, headY - 0.02, headZ - 0.02, 0.15, 0, sx * 0.28);
  }
  part(g, new THREE.BoxGeometry(0.2, 0.045, 0.055), hood, 0, headY + 0.1, headZ + 0.08, 0.35, 0, 0);
  part(g, new THREE.ConeGeometry(0.2, 0.4, 8, 1, true), hood, 0, 0.92, -0.18, 0.35, 0, 0);

  for (const sx of [-1, 1] as const) {
    const arm = tagged(
      sx * 0.2,
      0.9,
      sx < 0 ? 0.14 : 0.1,
      sx < 0 ? 0.22 : 0.18,
      sx < 0 ? 0.35 : -0.2,
      sx * 0.18,
      sx < 0 ? 'armL' : 'armR'
    );
    part(arm, new THREE.CylinderGeometry(0.042, 0.034, 0.22, 5), cloth, 0, -0.1, 0.02, 0.18, 0, 0);
    part(arm, new THREE.SphereGeometry(0.032, 5, 5), leather, 0, -0.22, 0.03);
    const fore = tagged(0, -0.22, 0.03, sx < 0 ? 0.18 : 0.35, 0, 0, sx < 0 ? 'foreL' : 'foreR');
    part(fore, new THREE.CylinderGeometry(0.034, 0.028, 0.16, 5), cloth, 0, -0.07, 0.02, 0.12, 0, 0);
    if (sx < 0) part(fore, new THREE.BoxGeometry(0.07, 0.1, 0.055), leather, 0, -0.08, 0.03);
    addGrip(fore, skin, 0, -0.18, 0.04);
    if (sx < 0) {
      const bow = makeRecurveBow();
      bow.position.set(0.02, -0.16, 0.04);
      bow.rotation.set(-0.28, 0.15, 0.08);
      markHeld(bow, 'bow');
      fore.userData.carry = true;
      fore.add(bow);
    } else {
      const arrow = makeArrow();
      arrow.position.set(0.02, -0.16, 0.08);
      // Shaft along local Y → pitch so it points world-forward, point first.
      arrow.rotation.set(Math.PI / 2 + 0.12, -0.2, 0.08);
      markHeld(arrow, 'arrow');
      fore.userData.carry = true;
      fore.add(arrow);
    }
    arm.add(fore);
    g.add(arm);

    const leg = tagged(sx * 0.08, 0.38, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR');
    part(leg, new THREE.CylinderGeometry(0.048, 0.038, 0.28, 5), cloth, 0, -0.1, 0);
    part(leg, new THREE.BoxGeometry(0.09, 0.08, 0.16), leather, 0, -0.26, 0.03);
    g.add(leg);
  }

  const quiver = new THREE.Group();
  part(quiver, new THREE.CylinderGeometry(0.05, 0.06, 0.38, 6), leather, 0, 0, 0);
  part(quiver, new THREE.TorusGeometry(0.052, 0.012, 4, 8), leather, 0, 0.18, 0, Math.PI / 2, 0, 0);
  for (let i = 0; i < 4; i++) {
    const ox = -0.024 + i * 0.016;
    const oz = (i % 2) * 0.016 - 0.008;
    part(quiver, new THREE.CylinderGeometry(0.008, 0.008, 0.28, 5), wood, ox, 0.2, oz);
    part(quiver, new THREE.BoxGeometry(0.005, 0.04, 0.07), fletch, ox, 0.36, oz);
  }
  quiver.position.set(-0.12, 0.86, -0.2);
  quiver.rotation.set(0.35, 0, -0.45);
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

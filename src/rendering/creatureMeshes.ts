import * as THREE from 'three';

/** Walk-cycle tagged limb. Shared with Creature.ts animation. */
function limb(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x: number,
  y: number,
  z: number,
  rx = 0,
  ry = 0,
  rz = 0,
  walkLimb?: 'legL' | 'legR' | 'armL' | 'armR'
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  m.userData.baseRot = { x: rx, y: ry, z: rz };
  if (walkLimb) m.userData.walkLimb = walkLimb;
  return m;
}

function mat(opts: THREE.MeshStandardMaterialParameters): THREE.MeshStandardMaterial {
  return new THREE.MeshStandardMaterial(opts);
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

/** Beetle-worker: carapace, mandibles, six legs, wall-aimed pick. */
function dressScrabbler(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const shellMat = mat({ color: 0x3d5a24, metalness: 0.28, roughness: 0.42, emissive: 0x1a280c, emissiveIntensity: 0.18 });
  const headMat = mat({ color: 0x8ab050, metalness: 0.12, roughness: 0.55 });
  const clawMat = mat({ color: 0xe8e0b0, metalness: 0.72, roughness: 0.26 });

  const abdomen = new THREE.Mesh(new THREE.SphereGeometry(0.38, 12, 10), bodyMat);
  abdomen.scale.set(1.15, 0.72, 1.45);
  abdomen.position.set(0, 0.36, -0.08);
  abdomen.castShadow = true;
  g.add(abdomen);

  // Segmented carapace plates — reads as a beetle from overview
  for (let i = 0; i < 3; i++) {
    const plate = new THREE.Mesh(new THREE.SphereGeometry(0.3, 10, 8), shellMat);
    plate.scale.set(1.05 - i * 0.08, 0.42, 0.55);
    plate.position.set(0, 0.52, 0.18 - i * 0.22);
    g.add(plate);
  }

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), headMat);
  head.position.set(0, 0.44, 0.4);
  head.castShadow = true;
  g.add(head);

  const eyeMat = mat({ color: 0xffee88, emissive: 0xffcc44, emissiveIntensity: 0.9 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.055, 6, 6), eyeMat);
    eye.position.set(sx * 0.1, 0.5, 0.55);
    g.add(eye);
    const mandible = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.2, 5), clawMat);
    mandible.position.set(sx * 0.08, 0.36, 0.56);
    mandible.rotation.set(1.15, 0, sx * 0.45);
    g.add(mandible);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.008, 0.26, 4), shellMat);
    ant.position.set(sx * 0.07, 0.64, 0.5);
    ant.rotation.set(-0.7, 0, sx * 0.35);
    g.add(ant);
  }

  const legMat = mat({ color: 0x3a4828, roughness: 0.7 });
  const zLegs = [-0.22, 0.0, 0.2];
  for (const sx of [-1, 1] as const) {
    zLegs.forEach((sz, i) => {
      const tag = i === 0 ? (sx < 0 ? 'legL' : 'legR') : undefined;
      g.add(limb(new THREE.CylinderGeometry(0.032, 0.024, 0.3, 5), legMat, sx * 0.34, 0.14, sz, 0.15, 0, sx * 0.85, tag));
    });
    const claw = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.3, 5), clawMat);
    claw.rotation.set(-0.35, 0, sx * 0.85);
    claw.position.set(sx * 0.3, 0.3, 0.46);
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

/** Fragile flying scout — dragonfly: long tail, compound eyes, four wings. */
function dressSkitterwing(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const teal = mat({ color: 0x2a8070, metalness: 0.22, roughness: 0.48, emissive: 0x104030, emissiveIntensity: 0.22 });
  const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.18, 10, 8), bodyMat);
  thorax.scale.set(1.05, 0.85, 1.15);
  thorax.position.y = 0.98;
  thorax.castShadow = true;
  g.add(thorax);

  const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.55, 4, 8), teal);
  abdomen.rotation.x = Math.PI / 2;
  abdomen.position.set(0, 0.9, -0.42);
  g.add(abdomen);
  for (let i = 0; i < 3; i++) {
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.018, 4, 10), mat({ color: 0x80e0b8, emissive: 0x206050, emissiveIntensity: 0.35 }));
    band.position.set(0, 0.9, -0.22 - i * 0.16);
    g.add(band);
  }

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.13, 8, 8), mat({ color: 0x50d0b0, roughness: 0.45 }));
  head.position.set(0, 1.02, 0.22);
  g.add(head);
  const eyeMat = mat({ color: 0x102820, emissive: 0x40ffc0, emissiveIntensity: 0.85 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), eyeMat);
    eye.scale.set(0.85, 1, 0.9);
    eye.position.set(sx * 0.1, 1.04, 0.3);
    g.add(eye);
    const ant = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.008, 0.28, 4), teal);
    ant.position.set(sx * 0.05, 1.2, 0.28);
    ant.rotation.set(-0.55, 0, sx * 0.45);
    g.add(ant);
  }

  const wingMat = mat({
    color: 0xc8fff0,
    emissive: 0x308870,
    emissiveIntensity: 0.35,
    transparent: true,
    opacity: 0.62,
    side: THREE.DoubleSide,
    metalness: 0.08,
    roughness: 0.3,
  });
  for (const sx of [-1, 1] as const) {
    const fore = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.32), wingMat);
    fore.position.set(sx * 0.42, 1.05, 0.02);
    fore.rotation.set(-0.15, sx * 0.2, sx * 0.55);
    fore.userData.walkLimb = sx < 0 ? 'armL' : 'armR';
    fore.userData.baseRot = { x: fore.rotation.x, y: fore.rotation.y, z: fore.rotation.z };
    g.add(fore);
    const hind = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.26), wingMat);
    hind.position.set(sx * 0.36, 0.98, -0.16);
    hind.rotation.set(0.1, sx * 0.35, sx * 0.7);
    g.add(hind);
  }

  const legMat = mat({ color: 0x206050, roughness: 0.65 });
  for (const sx of [-1, 1] as const) {
    g.add(limb(new THREE.CylinderGeometry(0.018, 0.012, 0.42, 4), legMat, sx * 0.12, 0.72, 0.08, 0.55, 0, sx * 0.35, sx < 0 ? 'legL' : 'legR'));
    g.add(limb(new THREE.CylinderGeometry(0.016, 0.01, 0.36, 4), legMat, sx * 0.1, 0.7, -0.06, 0.65, 0, sx * 0.4));
  }
  const stinger = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.18, 5), mat({ color: 0xffe080, emissive: 0x806010, emissiveIntensity: 0.4 }));
  stinger.rotation.x = Math.PI / 2;
  stinger.position.set(0, 0.88, -0.78);
  g.add(stinger);
}

/** Rattling bone fighter — lopsided skull, hanging ribs, jagged cleaver. */
function dressRattlekin(g: THREE.Group): void {
  const bone = mat({ color: 0xc8b898, metalness: 0.18, roughness: 0.42, emissive: 0x403010, emissiveIntensity: 0.1 });
  const rust = mat({ color: 0x8a6040, metalness: 0.55, roughness: 0.4 });

  const pelvis = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bone);
  pelvis.scale.set(1.3, 0.55, 1.0);
  pelvis.position.y = 0.48;
  g.add(pelvis);

  const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.055, 0.55, 6), bone);
  spine.position.y = 0.78;
  g.add(spine);

  for (let i = 0; i < 4; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.2 - i * 0.012, 0.022, 4, 12, Math.PI * 1.1), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.02 * (i % 2 ? 1 : -1), 0.58 + i * 0.11, 0.04);
    g.add(rib);
  }

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), bone);
  skull.scale.set(1.05, 1.08, 1.2);
  skull.position.set(0.04, 1.22, 0.02);
  skull.rotation.z = 0.12;
  skull.castShadow = true;
  g.add(skull);
  const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.06, 0.14), bone);
  jaw.position.set(0.05, 1.04, 0.12);
  jaw.rotation.x = 0.35;
  g.add(jaw);
  const socket = mat({ color: 0x201008, emissive: 0xff6020, emissiveIntensity: 0.8 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.048, 6, 6), socket);
    eye.position.set(0.04 + sx * 0.08, 1.26, 0.18);
    g.add(eye);
  }

  for (const sx of [-1, 1] as const) {
    const scap = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.06, 0.22), bone);
    scap.position.set(sx * 0.22, 1.0, -0.02);
    scap.rotation.z = sx * -0.4;
    g.add(scap);
    g.add(limb(new THREE.CylinderGeometry(0.04, 0.03, 0.48, 5), bone, sx * 0.32, 0.72, 0.02, 0.1, 0, sx * 0.35, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.048, 0.036, 0.42, 5), bone, sx * 0.12, 0.26, 0, 0.2, 0, sx * 0.12, sx < 0 ? 'legL' : 'legR'));
  }

  const cleaver = new THREE.Group();
  const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.035, 0.38, 5), rust);
  handle.position.y = 0.1;
  cleaver.add(handle);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.42, 0.22), mat({ color: 0x9aa0a8, metalness: 0.7, roughness: 0.32 }));
  blade.position.set(0.06, 0.38, 0);
  blade.rotation.z = -0.15;
  cleaver.add(blade);
  const chip = new THREE.Mesh(new THREE.ConeGeometry(0.07, 0.16, 4), rust);
  chip.position.set(0.12, 0.52, 0.04);
  chip.rotation.z = -0.8;
  cleaver.add(chip);
  cleaver.position.set(0.46, 0.55, 0.08);
  cleaver.rotation.z = -0.45;
  g.add(cleaver);
}

/** Living coal / lava elemental — cracked rock, flame hair, no feet. */
function dressEmberling(g: THREE.Group): void {
  const coal = mat({ color: 0x2a1410, metalness: 0.35, roughness: 0.55, emissive: 0x401008, emissiveIntensity: 0.35 });
  const lava = mat({ color: 0xff5018, emissive: 0xff4010, emissiveIntensity: 0.95, metalness: 0.2, roughness: 0.3 });
  const body = new THREE.Mesh(new THREE.DodecahedronGeometry(0.32, 0), coal);
  body.scale.set(1.05, 1.35, 0.95);
  body.position.y = 0.72;
  body.castShadow = true;
  g.add(body);
  for (let i = 0; i < 5; i++) {
    const crack = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.03), lava);
    const a = (i / 5) * Math.PI * 2;
    crack.position.set(Math.cos(a) * 0.22, 0.7 + (i % 2) * 0.12, Math.sin(a) * 0.18);
    crack.rotation.z = a;
    g.add(crack);
  }

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), coal);
  head.position.y = 1.22;
  g.add(head);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), lava);
  face.position.set(0, 1.2, 0.12);
  g.add(face);
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.04, 6, 6), mat({ color: 0xffee88, emissive: 0xffcc40, emissiveIntensity: 1 }));
    eye.position.set(sx * 0.07, 1.24, 0.2);
    g.add(eye);
  }

  for (let i = 0; i < 5; i++) {
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.07 + (i % 2) * 0.03, 0.28 + i * 0.04, 5), lava);
    const a = (i / 5) * Math.PI * 2;
    flame.position.set(Math.cos(a) * 0.1, 1.48 + (i % 2) * 0.06, Math.sin(a) * 0.08);
    g.add(flame);
  }

  for (const sx of [-1, 1] as const) {
    g.add(limb(new THREE.CylinderGeometry(0.055, 0.04, 0.38, 6), lava, sx * 0.3, 0.78, 0, 0, 0, sx * 0.5, sx < 0 ? 'armL' : 'armR'));
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.09, 6, 6), lava);
    hand.position.set(sx * 0.44, 0.58, 0.04);
    g.add(hand);
  }

  const skirt = new THREE.Mesh(
    new THREE.ConeGeometry(0.38, 0.5, 8, 1, true),
    mat({ color: 0xff5010, emissive: 0xff3008, emissiveIntensity: 0.8, transparent: true, opacity: 0.72, side: THREE.DoubleSide })
  );
  skirt.position.y = 0.32;
  g.add(skirt);
  const inner = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.36, 6, 1, true), lava);
  inner.position.y = 0.28;
  g.add(inner);
}

/** Hooded grave-scholar — deep cowl, spellbook, skull-topped staff. */
function dressGravemage(g: THREE.Group): void {
  const robe = mat({ color: 0x3a2468, metalness: 0.18, roughness: 0.58, emissive: 0x221040, emissiveIntensity: 0.28 });
  const lining = mat({ color: 0x6a40b0, roughness: 0.5, emissive: 0x402070, emissiveIntensity: 0.2 });
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.52, 5, 10), robe);
  body.position.y = 0.72;
  body.castShadow = true;
  g.add(body);
  const flare = new THREE.Mesh(new THREE.ConeGeometry(0.4, 0.55, 8, 1, true), robe);
  flare.position.y = 0.32;
  g.add(flare);

  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.24, 10, 8), robe);
  hood.scale.set(1.15, 1.2, 1.25);
  hood.position.set(0, 1.28, -0.02);
  g.add(hood);
  const cowl = new THREE.Mesh(new THREE.ConeGeometry(0.28, 0.36, 8, 1, true), robe);
  cowl.rotation.x = Math.PI;
  cowl.position.set(0, 1.42, -0.04);
  g.add(cowl);
  const dark = mat({ color: 0x140818, roughness: 0.8 });
  const voidFace = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 6), dark);
  voidFace.position.set(0, 1.2, 0.12);
  g.add(voidFace);
  const eyeMat = mat({ color: 0xaa66ff, emissive: 0x8844ff, emissiveIntensity: 1 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.032, 6, 6), eyeMat);
    eye.position.set(sx * 0.05, 1.22, 0.2);
    g.add(eye);
    g.add(limb(new THREE.CylinderGeometry(0.045, 0.035, 0.4, 5), robe, sx * 0.28, 0.72, 0, 0, 0, sx * 0.18, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.36, 5), robe, sx * 0.1, 0.26, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
  }

  const book = new THREE.Group();
  const cover = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.04, 0.24), lining);
  book.add(cover);
  const pages = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.03, 0.22), mat({ color: 0xe8dcc8, roughness: 0.7 }));
  pages.position.y = 0.02;
  book.add(pages);
  book.position.set(-0.34, 0.62, 0.16);
  book.rotation.set(0.4, 0.5, -0.3);
  g.add(book);

  const staff = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 1.35, 6), mat({ color: 0x5a3820, roughness: 0.72 }));
  staff.position.set(0.4, 0.78, 0.04);
  g.add(staff);
  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.08, 8, 6), mat({ color: 0xd0c4a8, roughness: 0.5 }));
  skull.position.set(0.4, 1.42, 0.04);
  g.add(skull);
  const orb = new THREE.Mesh(
    new THREE.SphereGeometry(0.09, 10, 8),
    mat({ color: 0x8866ff, emissive: 0xaa66ff, emissiveIntensity: 0.9, metalness: 0.3, roughness: 0.32 })
  );
  orb.position.set(0.4, 1.56, 0.04);
  g.add(orb);
}

/** Torture mistress — thorn crown, spiked shoulders, barbed whip. */
function dressThornwitch(g: THREE.Group): void {
  const silk = mat({ color: 0x8a1848, metalness: 0.22, roughness: 0.42, emissive: 0x501020, emissiveIntensity: 0.32 });
  const thorn = mat({ color: 0x2a1014, emissive: 0xff2040, emissiveIntensity: 0.5 });
  const skin = mat({ color: 0xc8a0b0, roughness: 0.52 });

  const hips = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), silk);
  hips.scale.set(1.15, 0.7, 0.9);
  hips.position.y = 0.48;
  g.add(hips);
  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.38, 5, 8), silk);
  torso.position.y = 0.86;
  torso.castShadow = true;
  g.add(torso);
  const skirt = new THREE.Mesh(new THREE.ConeGeometry(0.36, 0.5, 8, 1, true), silk);
  skirt.position.y = 0.3;
  g.add(skirt);

  const head = new THREE.Mesh(new THREE.SphereGeometry(0.17, 10, 8), skin);
  head.position.y = 1.24;
  g.add(head);
  for (let i = 0; i < 7; i++) {
    const spike = new THREE.Mesh(new THREE.ConeGeometry(0.035, 0.22 + (i % 2) * 0.08, 4), thorn);
    const a = (i / 7) * Math.PI * 2;
    spike.position.set(Math.cos(a) * 0.13, 1.4, Math.sin(a) * 0.13);
    spike.rotation.z = Math.cos(a) * 0.25;
    g.add(spike);
  }
  const eyeMat = mat({ color: 0x200810, emissive: 0xff3060, emissiveIntensity: 0.75 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), eyeMat);
    eye.position.set(sx * 0.055, 1.26, 0.15);
    g.add(eye);
    const pauldron = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.2, 5), thorn);
    pauldron.position.set(sx * 0.22, 1.08, 0);
    pauldron.rotation.z = sx * -0.9;
    g.add(pauldron);
    g.add(limb(new THREE.CylinderGeometry(0.038, 0.028, 0.44, 5), silk, sx * 0.26, 0.78, 0, 0, 0, sx * 0.4, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.042, 0.032, 0.4, 5), silk, sx * 0.1, 0.24, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
  }

  const whip = new THREE.Group();
  const grip = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.03, 0.22, 5), thorn);
  whip.add(grip);
  let y = 0.14;
  for (let i = 0; i < 5; i++) {
    const seg = new THREE.Mesh(new THREE.CylinderGeometry(0.016, 0.012, 0.16, 4), mat({ color: 0x401018, roughness: 0.55 }));
    seg.position.set(0.04 * i, y, 0);
    seg.rotation.z = -0.35 - i * 0.08;
    whip.add(seg);
    y += 0.13;
  }
  const barb = new THREE.Mesh(new THREE.ConeGeometry(0.04, 0.14, 4), thorn);
  barb.position.set(0.22, 0.82, 0);
  barb.rotation.z = -1.1;
  whip.add(barb);
  whip.position.set(0.42, 0.55, 0.06);
  whip.rotation.z = -0.55;
  g.add(whip);
}

/** Hunched graveyard wretch — rags, sickly glow, dragging arm. Not a fighter. */
function dressBonewretch(g: THREE.Group): void {
  const bone = mat({ color: 0xd0c8b0, metalness: 0.16, roughness: 0.48, emissive: 0x203010, emissiveIntensity: 0.18 });
  const rag = mat({ color: 0x4a5038, roughness: 0.85, emissive: 0x1a2010, emissiveIntensity: 0.1 });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.34, 4, 8), bone);
  torso.position.set(0.06, 0.62, 0);
  torso.rotation.z = 0.35;
  torso.castShadow = true;
  g.add(torso);
  for (let i = 0; i < 3; i++) {
    const rib = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.018, 4, 10, Math.PI), bone);
    rib.rotation.x = Math.PI / 2;
    rib.position.set(0.08, 0.5 + i * 0.09, 0.03);
    g.add(rib);
  }
  const ragCloth = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.4, 6, 1, true), rag);
  ragCloth.position.set(0.04, 0.55, -0.04);
  ragCloth.rotation.z = 0.3;
  g.add(ragCloth);

  const skull = new THREE.Mesh(new THREE.SphereGeometry(0.16, 10, 8), bone);
  skull.scale.set(1, 1.15, 1.1);
  skull.position.set(0.16, 1.08, 0.04);
  skull.rotation.z = 0.25;
  g.add(skull);
  const eyeMat = mat({ color: 0x102008, emissive: 0x70ff40, emissiveIntensity: 1 });
  for (const sx of [-1, 1] as const) {
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.038, 6, 6), eyeMat);
    eye.position.set(0.16 + sx * 0.06, 1.1, 0.16);
    g.add(eye);
  }
  // One good arm, one dragging
  g.add(limb(new THREE.CylinderGeometry(0.028, 0.022, 0.4, 4), bone, -0.18, 0.7, 0.04, 0.2, 0, -0.5, 'armL'));
  g.add(limb(new THREE.CylinderGeometry(0.028, 0.022, 0.55, 4), bone, 0.28, 0.48, 0.06, 0.9, 0, 0.35, 'armR'));
  g.add(limb(new THREE.CylinderGeometry(0.032, 0.026, 0.36, 4), bone, -0.06, 0.24, 0.02, 0.15, 0, -0.15, 'legL'));
  g.add(limb(new THREE.CylinderGeometry(0.032, 0.026, 0.32, 4), bone, 0.14, 0.22, -0.02, 0.25, 0, 0.2, 'legR'));

  const femur = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.04, 0.38, 5), bone);
  femur.position.set(0.38, 0.22, 0.12);
  femur.rotation.z = 0.9;
  g.add(femur);
}

/** Plate knight — T-visor helm, kite shield, crossguarded sword. */
function dressHeroKnight(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const armor = mat({ color: bodyMat.color.getHex() || 0xc0c8d8, metalness: 0.78, roughness: 0.26 });
  const steel = mat({ color: 0xd8e0f0, metalness: 0.88, roughness: 0.2 });
  const cloth = mat({ color: 0x8a2028, roughness: 0.62 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.48, 6, 10), armor);
  body.position.y = 0.74;
  body.castShadow = true;
  g.add(body);
  const tabard = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.42, 0.06), cloth);
  tabard.position.set(0, 0.78, 0.22);
  g.add(tabard);
  const crossV = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.28, 0.04), steel);
  crossV.position.set(0, 0.82, 0.26);
  g.add(crossV);
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.05, 0.04), steel);
  crossH.position.set(0, 0.88, 0.26);
  g.add(crossH);

  for (const sx of [-1, 1] as const) {
    const p = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), armor);
    p.scale.set(1.15, 0.65, 1.05);
    p.position.set(sx * 0.3, 1.02, 0);
    g.add(p);
    g.add(limb(new THREE.CylinderGeometry(0.07, 0.052, 0.4, 6), armor, sx * 0.34, 0.7, 0, 0, 0, sx * 0.18, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.08, 0.06, 0.4, 6), armor, sx * 0.1, 0.26, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
    const boot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.1, 0.2), armor);
    boot.position.set(sx * 0.1, 0.06, 0.04);
    g.add(boot);
  }

  const helm = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), armor);
  helm.position.y = 1.3;
  g.add(helm);
  const visor = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.06), mat({ color: 0x101418, metalness: 0.4, roughness: 0.45 }));
  visor.position.set(0, 1.3, 0.17);
  g.add(visor);
  const slit = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.02, 0.04), mat({ color: 0x000000 }));
  slit.position.set(0, 1.3, 0.2);
  g.add(slit);
  const crest = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.26, 0.16), cloth);
  crest.position.set(0, 1.52, 0);
  g.add(crest);

  const sword = new THREE.Group();
  sword.add(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.025, 0.18, 6), mat({ color: 0x6a4820, roughness: 0.55 })));
  const guard = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.04, 0.05), steel);
  guard.position.y = 0.1;
  sword.add(guard);
  const blade = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.58, 0.09), steel);
  blade.position.y = 0.4;
  sword.add(blade);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.12, 4), steel);
  tip.position.y = 0.74;
  sword.add(tip);
  sword.position.set(0.42, 0.52, 0.06);
  sword.rotation.z = -0.28;
  g.add(sword);

  const shield = new THREE.Mesh(new THREE.CircleGeometry(0.28, 8), armor);
  shield.scale.set(0.85, 1.15, 1);
  shield.position.set(-0.38, 0.72, 0.12);
  shield.rotation.y = 0.6;
  g.add(shield);
  const boss = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), steel);
  boss.position.set(-0.32, 0.72, 0.18);
  g.add(boss);
}

/** Woods archer — hood, quiver of arrows, readable bow. */
function dressHeroArcher(g: THREE.Group, bodyMat: THREE.MeshStandardMaterial): void {
  const cloth = mat({ color: bodyMat.color.getHex() || 0x5080a0, metalness: 0.12, roughness: 0.68 });
  const leather = mat({ color: 0x6a4a28, roughness: 0.7 });
  const wood = mat({ color: 0x8a6030, roughness: 0.58 });

  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.44, 6, 10), cloth);
  body.position.y = 0.68;
  body.castShadow = true;
  g.add(body);
  const strap = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.04), leather);
  strap.position.set(0.08, 0.78, 0.16);
  strap.rotation.z = -0.4;
  g.add(strap);

  const hood = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), cloth);
  hood.scale.set(1.08, 1.15, 1.2);
  hood.position.y = 1.2;
  g.add(hood);
  const face = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 8), mat({ color: 0xc4a888, roughness: 0.7 }));
  face.position.set(0, 1.14, 0.1);
  g.add(face);

  for (const sx of [-1, 1] as const) {
    g.add(limb(new THREE.CylinderGeometry(0.048, 0.038, 0.36, 5), cloth, sx * 0.24, 0.7, 0, 0, 0, sx * 0.28, sx < 0 ? 'armL' : 'armR'));
    g.add(limb(new THREE.CylinderGeometry(0.052, 0.042, 0.38, 5), cloth, sx * 0.09, 0.26, 0, 0, 0, 0, sx < 0 ? 'legL' : 'legR'));
  }
  const bracer = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.05, 0.12, 6), leather);
  bracer.position.set(-0.26, 0.58, 0.04);
  bracer.rotation.z = 0.4;
  g.add(bracer);

  const bow = new THREE.Mesh(new THREE.TorusGeometry(0.32, 0.028, 4, 14, Math.PI * 1.15), wood);
  bow.rotation.y = Math.PI / 2;
  bow.position.set(-0.34, 0.78, 0.04);
  g.add(bow);
  const string = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.58, 4), mat({ color: 0xe8e0d0 }));
  string.position.set(-0.2, 0.78, 0.04);
  g.add(string);

  const quiver = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.38, 6), leather);
  quiver.position.set(0.16, 0.88, -0.18);
  quiver.rotation.z = 0.35;
  quiver.rotation.x = 0.2;
  g.add(quiver);
  for (let i = 0; i < 3; i++) {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.42, 4), wood);
    shaft.position.set(0.12 + i * 0.03, 1.08, -0.2 + i * 0.02);
    shaft.rotation.z = 0.35;
    g.add(shaft);
    const fletch = new THREE.Mesh(new THREE.ConeGeometry(0.025, 0.08, 4), mat({ color: 0x306040 }));
    fletch.position.set(0.12 + i * 0.03, 1.28, -0.22 + i * 0.02);
    g.add(fletch);
  }
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

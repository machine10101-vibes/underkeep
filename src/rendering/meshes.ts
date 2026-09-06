import * as THREE from 'three';
import { RoomType, TILE_SIZE, TileKind } from '../game/types';
import {
  bumpFor,
  claimedStoneTex,
  dirtTex,
  earthTex,
  fortifiedTex,
  goldVeinTex,
  hatcheryFloorTex,
  heartFloorTex,
  lairFloorTex,
  libraryFloorTex,
  makeDecalTexture,
  portalFloorTex,
  rockTex,
  trainingFloorTex,
  treasuryFloorTex,
} from './textures';

const geoCache = new Map<string, THREE.BufferGeometry>();
const matCache = new Map<string, THREE.MeshStandardMaterial>();

function cachedGeo(key: string, factory: () => THREE.BufferGeometry): THREE.BufferGeometry {
  let g = geoCache.get(key);
  if (!g) {
    g = factory();
    geoCache.set(key, g);
  }
  return g;
}

function cachedMat(key: string, factory: () => THREE.MeshStandardMaterial): THREE.MeshStandardMaterial {
  let m = matCache.get(key);
  if (!m) {
    m = factory();
    matCache.set(key, m);
  }
  return m;
}

/** Darken vertices near the ground for cheap contact AO. */
function applyBaseAo(geo: THREE.BufferGeometry, baseY: number, height: number, strength = 0.45): void {
  const pos = geo.attributes.position as THREE.BufferAttribute;
  const colors = new Float32Array(pos.count * 3);
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i);
    const t = Math.max(0, Math.min(1, (y - baseY) / (height * 0.45)));
    const shade = 1 - strength * (1 - t) * (1 - t);
    colors[i * 3] = shade;
    colors[i * 3 + 1] = shade;
    colors[i * 3 + 2] = shade;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
}


/** Claimed floor: 2×2 fitted stone slabs + dark mortar (no canvas map required). */
export function makeClaimedFloorMesh(room: RoomType): THREE.Group {
  const g = new THREE.Group();

  // Room tint overrides for slab color
  const roomTint: Partial<Record<RoomType, number>> = {
    [RoomType.Treasury]: 0xd4b040,
    [RoomType.Lair]: 0xb070a0,
    [RoomType.Hatchery]: 0x98b040,
    [RoomType.Training]: 0xc06050,
    [RoomType.Library]: 0x5070c8,
    [RoomType.Portal]: 0xa050d0,
  };
  const slabColor = roomTint[room] ?? 0xb8a888;
  const slabEmissive =
    room === RoomType.None
      ? 0x2a2418
      : room === RoomType.Treasury
        ? 0x4a3010
        : room === RoomType.Lair
          ? 0x401028
          : room === RoomType.Hatchery
            ? 0x304010
            : room === RoomType.Training
              ? 0x401010
              : room === RoomType.Library
                ? 0x101848
                : 0x301048;

  const mortar = new THREE.MeshStandardMaterial({
    color: 0x2a2218,
    metalness: 0.04,
    roughness: 0.95,
  });
  const under = new THREE.Mesh(
    new THREE.BoxGeometry(TILE_SIZE * 0.98, 0.18, TILE_SIZE * 0.98),
    mortar
  );
  under.position.y = 0.02;
  under.receiveShadow = true;
  g.add(under);

  const slabMat = new THREE.MeshStandardMaterial({
    color: slabColor,
    metalness: room === RoomType.Treasury ? 0.45 : room === RoomType.Portal ? 0.35 : 0.18,
    roughness: room === RoomType.Treasury ? 0.4 : 0.62,
    emissive: slabEmissive,
    emissiveIntensity: room === RoomType.None ? 0.14 : 0.28,
  });

  const slab = TILE_SIZE * 0.44;
  const gap = 0.06;
  const offsets = [-0.5, 0.5];
  for (const ox of offsets) {
    for (const oz of offsets) {
      const s = new THREE.Mesh(
        new THREE.BoxGeometry(slab, 0.12, slab),
        slabMat
      );
      s.position.set(ox * (slab / 2 + gap), 0.16, oz * (slab / 2 + gap));
      s.receiveShadow = true;
      s.castShadow = false;
      g.add(s);
    }
  }

  // Subtle bevel lip
  const lip = new THREE.Mesh(
    new THREE.BoxGeometry(TILE_SIZE * 0.99, 0.025, TILE_SIZE * 0.99),
    new THREE.MeshStandardMaterial({
      color: 0xd0c0a8,
      metalness: 0.12,
      roughness: 0.55,
      emissive: 0x3a3020,
      emissiveIntensity: 0.1,
    })
  );
  lip.position.y = 0.11;
  g.add(lip);
  return g;
}

export function makeFloorGeo(): THREE.BufferGeometry {
  return cachedGeo('floor', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 0.28, TILE_SIZE * 0.98, 2, 1, 2);
    g.translate(0, 0.02, 0);
    return g;
  });
}

export function makeWallGeo(fortified = false): THREE.BufferGeometry {
  return cachedGeo(fortified ? 'wall-fort' : 'wall', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.96, 2.35, TILE_SIZE * 0.96, 3, 4, 3);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      let x = pos.getX(i);
      let y = pos.getY(i);
      let z = pos.getZ(i);
      if (fortified) {
        // flatter dressed stone, slight bevel at top
        if (y > 0.95) {
          x *= 0.94;
          z *= 0.94;
        }
        x += Math.sin(i * 0.7) * 0.012;
        z += Math.cos(i * 0.9) * 0.012;
      } else {
        // diggable earth — more irregular silhouette
        if (y > 0.85) {
          x *= 0.88;
          z *= 0.88;
        }
        x += Math.sin(i * 1.7) * 0.04;
        z += Math.cos(i * 2.1) * 0.04;
        if (y > -0.3 && y < 0.5) {
          y += Math.sin(i * 0.9) * 0.06;
        }
      }
      pos.setXYZ(i, x, y, z);
    }
    pos.needsUpdate = true;
    applyBaseAo(g, -1.175, 2.35, fortified ? 0.35 : 0.5);
    g.computeVertexNormals();
    g.translate(0, 1.175, 0);
    return g;
  });
}

export function makeRockGeo(): THREE.BufferGeometry {
  return cachedGeo('rock-v2', () => {
    // Taller + denser than diggable earth so Rock reads as impassable
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.99, 3.55, TILE_SIZE * 0.99, 3, 5, 3);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 3.1) * 0.045);
      pos.setY(i, pos.getY(i) + Math.cos(i * 2.3) * 0.035);
      pos.setZ(i, pos.getZ(i) + Math.sin(i * 4.7) * 0.045);
    }
    pos.needsUpdate = true;
    applyBaseAo(g, -1.775, 3.55, 0.62);
    g.computeVertexNormals();
    g.translate(0, 1.775, 0);
    return g;
  });
}

export function makeGoldVeinGeo(): THREE.BufferGeometry {
  return cachedGeo('gold', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.96, 2.35, TILE_SIZE * 0.96, 3, 4, 3);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 5.1) * 0.05);
      pos.setZ(i, pos.getZ(i) + Math.cos(i * 3.9) * 0.05);
      if (pos.getY(i) > 0.9) {
        pos.setX(i, pos.getX(i) * 0.9);
        pos.setZ(i, pos.getZ(i) * 0.9);
      }
    }
    pos.needsUpdate = true;
    applyBaseAo(g, -1.175, 2.35, 0.4);
    g.computeVertexNormals();
    g.translate(0, 1.175, 0);
    return g;
  });
}

/** Thin top-edge outline so diggable blocks read on mobile */
export function makeBlockEdgeGeo(height: number): THREE.BufferGeometry {
  // Quantize height so dig shrinks don't explode the geo cache (OOM → white screen)
  const q = Math.round(Math.max(0.25, height) * 4) / 4;
  return cachedGeo(`edge-${q.toFixed(2)}`, () => {
    const s = TILE_SIZE * 0.5 * 0.97;
    const y = q;
    const points = [
      new THREE.Vector3(-s, y, -s),
      new THREE.Vector3(s, y, -s),
      new THREE.Vector3(s, y, s),
      new THREE.Vector3(-s, y, s),
      new THREE.Vector3(-s, y, -s),
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  });
}

export function makeHeartGeo(): THREE.Group {
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.75, 2),
    new THREE.MeshStandardMaterial({
      color: 0x6a1820,
      emissive: 0xff3048,
      emissiveIntensity: 0.55,
      metalness: 0.35,
      roughness: 0.4,
    })
  );
  core.position.y = 1.05;
  group.add(core);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.05, 0.1, 10, 32),
    new THREE.MeshStandardMaterial({
      color: 0x3a1820,
      emissive: 0xaa2030,
      emissiveIntensity: 0.45,
      metalness: 0.55,
      roughness: 0.35,
    })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 1.05;
  group.add(ring);

  const pedestal = new THREE.Mesh(
    new THREE.CylinderGeometry(1.05, 1.25, 0.45, 12),
    new THREE.MeshStandardMaterial({
      color: 0x5a4538,
      metalness: 0.35,
      roughness: 0.55,
      map: claimedStoneTex(),
    })
  );
  pedestal.position.y = 0.25;
  group.add(pedestal);

  // Subtle lava pool / embers around the heart
  const lava = new THREE.Mesh(
    new THREE.CircleGeometry(1.55, 24),
    new THREE.MeshStandardMaterial({
      color: 0x4a1010,
      emissive: 0xff3018,
      emissiveIntensity: 0.55,
      metalness: 0.2,
      roughness: 0.7,
      transparent: true,
      opacity: 0.85,
    })
  );
  lava.rotation.x = -Math.PI / 2;
  lava.position.y = 0.13;
  group.add(lava);

  for (let i = 0; i < 6; i++) {
    const ang = (i / 6) * Math.PI * 2;
    const ember = new THREE.Mesh(
      new THREE.SphereGeometry(0.06 + (i % 3) * 0.02, 6, 6),
      new THREE.MeshStandardMaterial({
        color: 0xff6020,
        emissive: 0xff4010,
        emissiveIntensity: 1.2,
        roughness: 1,
      })
    );
    ember.position.set(Math.cos(ang) * 1.15, 0.22, Math.sin(ang) * 1.15);
    group.add(ember);
  }

  const light = new THREE.PointLight(0xff4058, 1.15, 8, 2);
  light.position.y = 1.35;
  light.castShadow = false;
  group.add(light);

  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartCore = core;
  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartLight = light;
  return group;
}

export function makeTorchMesh(withLight = true): THREE.Group {
  const g = new THREE.Group();
  const bracket = new THREE.Mesh(
    new THREE.BoxGeometry(0.12, 0.08, 0.18),
    new THREE.MeshStandardMaterial({ color: 0x4a4038, metalness: 0.5, roughness: 0.5 })
  );
  bracket.position.set(0, 1.35, 0);
  g.add(bracket);

  const stick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.065, 0.55, 6),
    new THREE.MeshStandardMaterial({ color: 0x5a4020, roughness: 0.85 })
  );
  stick.position.y = 1.55;
  g.add(stick);

  const flame = new THREE.Mesh(
    new THREE.ConeGeometry(0.11, 0.28, 6),
    new THREE.MeshStandardMaterial({
      color: 0xffaa40,
      emissive: 0xff7700,
      emissiveIntensity: 1.5,
      roughness: 1,
    })
  );
  flame.position.y = 1.92;
  g.add(flame);

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 6, 6),
    new THREE.MeshBasicMaterial({ color: 0xff8830, transparent: true, opacity: 0.55 })
  );
  glow.position.y = 1.82;
  g.add(glow);

  if (withLight) {
    const light = new THREE.PointLight(0xff9944, 3.2, 14, 1.6);
    light.position.y = 1.9;
    light.castShadow = false;
    g.add(light);
    (g as THREE.Group & { torchLight?: THREE.PointLight }).torchLight = light;
  }

  (g as THREE.Group & { flame?: THREE.Mesh }).flame = flame;
  return g;
}

function limb(
  geo: THREE.BufferGeometry,
  mat: THREE.Material,
  x: number,
  y: number,
  z: number,
  rx = 0,
  ry = 0,
  rz = 0
): THREE.Mesh {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.rotation.set(rx, ry, rz);
  m.castShadow = true;
  return m;
}

export function makeCreatureMesh(color: number, scale: number, kind: string): THREE.Group {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.18,
    roughness: 0.55,
    emissive: color,
    emissiveIntensity: 0.1,
  });

  if (kind === 'scrabbler') {
    // Compact multi-part beetle-worker readable at overview zoom
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 10), bodyMat);
    body.scale.set(1.2, 0.75, 1.3);
    body.position.y = 0.38;
    body.castShadow = true;
    g.add(body);

    const shell = new THREE.Mesh(
      new THREE.SphereGeometry(0.32, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x4a6830, metalness: 0.25, roughness: 0.45, emissive: 0x203010, emissiveIntensity: 0.15 })
    );
    shell.scale.set(1.15, 0.55, 1.05);
    shell.position.set(0, 0.5, -0.06);
    g.add(shell);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x8ab050, metalness: 0.15, roughness: 0.55 })
    );
    head.position.set(0, 0.44, 0.36);
    head.castShadow = true;
    g.add(head);

    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xffee88,
      emissive: 0xffcc44,
      emissiveIntensity: 0.85,
    });
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), eyeMat);
      eye.position.set(sx * 0.09, 0.48, 0.5);
      g.add(eye);
    }

    const legMat = new THREE.MeshStandardMaterial({ color: 0x3a4828, roughness: 0.7 });
    for (const sx of [-1, 1]) {
      for (const sz of [-0.14, 0.16]) {
        g.add(limb(new THREE.CylinderGeometry(0.035, 0.028, 0.32, 5), legMat, sx * 0.32, 0.14, sz, 0, 0, sx * 0.7));
      }
      const claw = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.34, 5),
        new THREE.MeshStandardMaterial({ color: 0xd0d0a8, metalness: 0.7, roughness: 0.28 })
      );
      claw.rotation.z = sx * 0.85;
      claw.rotation.x = -0.4;
      claw.position.set(sx * 0.32, 0.32, 0.42);
      claw.castShadow = true;
      g.add(claw);
    }

    // Dig arm + oversized pickaxe — readable swing at overview zoom
    const digArm = new THREE.Group();
    const upper = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.07, 0.28, 3, 6),
      new THREE.MeshStandardMaterial({ color: 0x5a7030, roughness: 0.65 })
    );
    upper.position.set(0, 0.18, 0);
    upper.rotation.z = 0.35;
    digArm.add(upper);
    const pick = new THREE.Group();
    const haft = new THREE.Mesh(
      new THREE.CylinderGeometry(0.04, 0.05, 0.85, 6),
      new THREE.MeshStandardMaterial({ color: 0x7a5028, roughness: 0.85 })
    );
    haft.position.y = 0.35;
    pick.add(haft);
    const headPick = new THREE.Mesh(
      new THREE.BoxGeometry(0.48, 0.12, 0.12),
      new THREE.MeshStandardMaterial({
        color: 0xd0d8e8,
        metalness: 0.9,
        roughness: 0.22,
        emissive: 0x405060,
        emissiveIntensity: 0.25,
      })
    );
    headPick.position.set(0.08, 0.78, 0);
    pick.add(headPick);
    const tip = new THREE.Mesh(
      new THREE.ConeGeometry(0.08, 0.28, 6),
      new THREE.MeshStandardMaterial({ color: 0xe8f0ff, metalness: 0.85, roughness: 0.2 })
    );
    tip.rotation.z = Math.PI / 2;
    tip.position.set(0.38, 0.78, 0);
    pick.add(tip);
    const tip2 = tip.clone();
    tip2.rotation.z = -Math.PI / 2;
    tip2.position.set(-0.22, 0.78, 0);
    pick.add(tip2);
    pick.position.set(0.05, 0.05, 0.05);
    digArm.add(pick);
    digArm.position.set(0.42, 0.38, 0.22);
    digArm.rotation.z = 0.2;
    digArm.rotation.x = -0.45;
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
  } else if (kind === 'skitterwing') {
    // Flying insectoid: thorax + abdomen + wings + legs
    const thorax = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), bodyMat);
    thorax.position.y = 0.95;
    thorax.castShadow = true;
    g.add(thorax);

    const abdomen = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x2a8070, metalness: 0.2, roughness: 0.5, emissive: 0x104030, emissiveIntensity: 0.2 })
    );
    abdomen.scale.set(0.9, 0.8, 1.3);
    abdomen.position.set(0, 0.88, -0.22);
    g.add(abdomen);

    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x50d0b0, roughness: 0.5 })
    );
    head.position.set(0, 1.0, 0.22);
    g.add(head);

    for (const sx of [-1, 1]) {
      const ant = new THREE.Mesh(
        new THREE.CylinderGeometry(0.012, 0.01, 0.22, 4),
        new THREE.MeshStandardMaterial({ color: 0x208060 })
      );
      ant.position.set(sx * 0.06, 1.14, 0.28);
      ant.rotation.z = sx * 0.4;
      ant.rotation.x = -0.5;
      g.add(ant);
    }

    const wingMat = new THREE.MeshStandardMaterial({
      color: 0xa8ffe8,
      emissive: 0x308870,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      metalness: 0.1,
      roughness: 0.35,
    });
    for (const sx of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.38), wingMat);
      wing.position.set(sx * 0.38, 1.0, 0);
      wing.rotation.y = sx * 0.35;
      wing.rotation.z = sx * 0.25;
      g.add(wing);
      const wing2 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.28), wingMat);
      wing2.position.set(sx * 0.32, 0.88, -0.08);
      wing2.rotation.y = sx * 0.5;
      g.add(wing2);
    }

    const legMat = new THREE.MeshStandardMaterial({ color: 0x206050, roughness: 0.65 });
    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.02, 0.015, 0.35, 4), legMat, sx * 0.14, 0.7, 0.05, 0.4, 0, sx * 0.5));
    }
  } else if (kind === 'rattlekin') {
    // Bone warrior: ribcage torso, skull, spindly limbs
    const bone = new THREE.MeshStandardMaterial({
      color: 0xc8b898,
      metalness: 0.15,
      roughness: 0.45,
      emissive: 0x403010,
      emissiveIntensity: 0.08,
    });
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.35, 4, 8), bone);
    torso.position.y = 0.7;
    torso.castShadow = true;
    g.add(torso);

    // ribs hint
    for (let i = 0; i < 3; i++) {
      const rib = new THREE.Mesh(
        new THREE.TorusGeometry(0.2, 0.025, 4, 10, Math.PI),
        bone
      );
      rib.rotation.x = Math.PI / 2;
      rib.position.set(0, 0.55 + i * 0.12, 0.05);
      g.add(rib);
    }

    const skull = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), bone);
    skull.scale.set(1, 1.05, 1.15);
    skull.position.y = 1.2;
    skull.castShadow = true;
    g.add(skull);

    const jaw = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.08, 0.16), bone);
    jaw.position.set(0, 1.05, 0.1);
    g.add(jaw);

    const socket = new THREE.MeshStandardMaterial({
      color: 0x201008,
      emissive: 0xff6020,
      emissiveIntensity: 0.7,
    });
    for (const sx of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 6, 6), socket);
      eye.position.set(sx * 0.08, 1.24, 0.16);
      g.add(eye);
    }

    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.045, 0.035, 0.45, 5), bone, sx * 0.3, 0.75, 0, 0, 0, sx * 0.25));
      g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.4, 5), bone, sx * 0.12, 0.28, 0, 0.15, 0, sx * 0.1));
    }

    const blade = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.5, 0.12),
      new THREE.MeshStandardMaterial({ color: 0x8890a0, metalness: 0.8, roughness: 0.25 })
    );
    blade.position.set(0.42, 0.7, 0.05);
    blade.rotation.z = -0.3;
    g.add(blade);
  } else if (kind === 'emberling') {
    // Fire elemental: glowing body, crest, arms
    const fireMat = new THREE.MeshStandardMaterial({
      color: 0xe04820,
      emissive: 0xff4018,
      emissiveIntensity: 0.65,
      metalness: 0.25,
      roughness: 0.35,
    });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.45, 6, 10), fireMat);
    body.position.y = 0.7;
    body.castShadow = true;
    g.add(body);

    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), fireMat);
    head.position.y = 1.2;
    g.add(head);

    const crest = new THREE.Mesh(
      new THREE.ConeGeometry(0.14, 0.42, 6),
      new THREE.MeshStandardMaterial({ color: 0xff9020, emissive: 0xff6010, emissiveIntensity: 0.95 })
    );
    crest.position.y = 1.5;
    g.add(crest);

    for (let i = 0; i < 3; i++) {
      const spike = new THREE.Mesh(
        new THREE.ConeGeometry(0.06, 0.22, 5),
        new THREE.MeshStandardMaterial({ color: 0xff7010, emissive: 0xff4008, emissiveIntensity: 0.8 })
      );
      spike.position.set((i - 1) * 0.12, 1.38, -0.12);
      spike.rotation.x = -0.5;
      g.add(spike);
    }

    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.06, 0.04, 0.4, 6), fireMat, sx * 0.32, 0.75, 0, 0, 0, sx * 0.45));
      const hand = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 6, 6),
        new THREE.MeshStandardMaterial({ color: 0xffaa40, emissive: 0xff6010, emissiveIntensity: 1.0 })
      );
      hand.position.set(sx * 0.42, 0.55, 0.05);
      g.add(hand);
    }

    const skirt = new THREE.Mesh(
      new THREE.ConeGeometry(0.32, 0.35, 8, 1, true),
      new THREE.MeshStandardMaterial({
        color: 0xff5010,
        emissive: 0xff3008,
        emissiveIntensity: 0.7,
        transparent: true,
        opacity: 0.75,
        side: THREE.DoubleSide,
      })
    );
    skirt.position.y = 0.28;
    g.add(skirt);
  } else if (kind === 'hero_knight' || kind === 'hero') {
    const armor = new THREE.MeshStandardMaterial({
      color: color || 0xc0c8d8,
      metalness: 0.75,
      roughness: 0.28,
    });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.5, 6, 10), armor);
    body.position.y = 0.72;
    body.castShadow = true;
    g.add(body);

    const pauldronMat = new THREE.MeshStandardMaterial({ color: 0xa8b0c0, metalness: 0.8, roughness: 0.25 });
    for (const sx of [-1, 1]) {
      const p = new THREE.Mesh(new THREE.SphereGeometry(0.14, 8, 6), pauldronMat);
      p.scale.set(1.1, 0.7, 1);
      p.position.set(sx * 0.28, 1.0, 0);
      g.add(p);
      g.add(limb(new THREE.CylinderGeometry(0.07, 0.055, 0.4, 6), armor, sx * 0.34, 0.7, 0, 0, 0, sx * 0.2));
    }

    const helm = new THREE.Mesh(new THREE.SphereGeometry(0.2, 10, 8), armor);
    helm.position.y = 1.28;
    g.add(helm);

    const visor = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.06, 0.08),
      new THREE.MeshStandardMaterial({ color: 0x1a2030, metalness: 0.5, roughness: 0.4 })
    );
    visor.position.set(0, 1.28, 0.16);
    g.add(visor);

    const crest = new THREE.Mesh(
      new THREE.BoxGeometry(0.04, 0.22, 0.16),
      new THREE.MeshStandardMaterial({ color: 0xb02028, roughness: 0.6 })
    );
    crest.position.set(0, 1.48, 0);
    g.add(crest);

    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.08, 0.06, 0.4, 6), armor, sx * 0.1, 0.28, 0));
    }

    const sword = new THREE.Mesh(
      new THREE.BoxGeometry(0.05, 0.55, 0.1),
      new THREE.MeshStandardMaterial({ color: 0xd8e0f0, metalness: 0.9, roughness: 0.2 })
    );
    sword.position.set(0.4, 0.75, 0.05);
    sword.rotation.z = -0.25;
    g.add(sword);
    const hilt = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.04, 0.06),
      new THREE.MeshStandardMaterial({ color: 0x8a6030, metalness: 0.4, roughness: 0.5 })
    );
    hilt.position.set(0.38, 0.5, 0.05);
    g.add(hilt);
  } else if (kind === 'hero_archer') {
    const cloth = new THREE.MeshStandardMaterial({
      color: color || 0x5080a0,
      metalness: 0.15,
      roughness: 0.65,
    });
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22, 0.45, 6, 10), cloth);
    body.position.y = 0.68;
    body.castShadow = true;
    g.add(body);

    const hood = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x3a5870, roughness: 0.7 })
    );
    hood.scale.set(1.05, 1.1, 1.15);
    hood.position.y = 1.2;
    g.add(hood);

    const face = new THREE.Mesh(
      new THREE.SphereGeometry(0.12, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0xc4a888, roughness: 0.7 })
    );
    face.position.set(0, 1.15, 0.1);
    g.add(face);

    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.35, 5), cloth, sx * 0.26, 0.7, 0, 0, 0, sx * 0.3));
      g.add(limb(new THREE.CylinderGeometry(0.055, 0.045, 0.38, 5), cloth, sx * 0.09, 0.28, 0));
    }

    // Bow silhouette
    const bow = new THREE.Mesh(
      new THREE.TorusGeometry(0.28, 0.025, 4, 12, Math.PI),
      new THREE.MeshStandardMaterial({ color: 0x8a6030, roughness: 0.6 })
    );
    bow.rotation.y = Math.PI / 2;
    bow.position.set(-0.32, 0.75, 0.05);
    g.add(bow);
    const string = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.008, 0.5, 4),
      new THREE.MeshStandardMaterial({ color: 0xd8d0c0 })
    );
    string.position.set(-0.2, 0.75, 0.05);
    g.add(string);
  } else {
    // Generic fallback minion
    const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.26, 0.45, 6, 10), bodyMat);
    body.position.y = 0.6;
    body.castShadow = true;
    g.add(body);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xaa9070, roughness: 0.6 })
    );
    head.position.y = 1.1;
    g.add(head);
    for (const sx of [-1, 1]) {
      g.add(limb(new THREE.CylinderGeometry(0.05, 0.04, 0.35, 5), bodyMat, sx * 0.28, 0.6, 0, 0, 0, sx * 0.4));
      g.add(limb(new THREE.CylinderGeometry(0.055, 0.045, 0.35, 5), bodyMat, sx * 0.1, 0.25, 0));
    }
  }

  g.scale.setScalar(scale);
  return g;
}

function texturedMat(
  key: string,
  map: THREE.CanvasTexture,
  opts: {
    color?: number;
    metalness?: number;
    roughness?: number;
    emissive?: number;
    emissiveIntensity?: number;
    bump?: number;
    vertexColors?: boolean;
  } = {}
): THREE.MeshStandardMaterial {
  return cachedMat(key, () => {
    const bump = bumpFor(map, opts.bump ?? 1);
    return new THREE.MeshStandardMaterial({
      map,
      bumpMap: bump,
      bumpScale: opts.bump ?? 0.08,
      color: opts.color ?? 0xffffff,
      metalness: opts.metalness ?? 0.08,
      roughness: opts.roughness ?? 0.82,
      emissive: opts.emissive ?? 0x000000,
      emissiveIntensity: opts.emissiveIntensity ?? 0,
      vertexColors: opts.vertexColors ?? false,
    });
  });
}

export function floorMaterial(kind: TileKind, room: RoomType): THREE.MeshStandardMaterial {
  if (kind === TileKind.Heart) {
    return texturedMat('floor-heart', heartFloorTex(), {
      metalness: 0.3,
      roughness: 0.55,
      emissive: 0x501820,
      emissiveIntensity: 0.22,
      bump: 0.06,
    });
  }
  if (kind === TileKind.Dirt) {
    return texturedMat('floor-dirt', dirtTex(), {
      metalness: 0.02,
      roughness: 0.95,
      emissive: 0x0a0804,
      emissiveIntensity: 0.03,
      bump: 0.12,
    });
  }
  // Claimed — room-specific
  switch (room) {
    case RoomType.Treasury:
      return texturedMat('floor-treasury', treasuryFloorTex(), {
        metalness: 0.55,
        roughness: 0.4,
        emissive: 0x3a2808,
        emissiveIntensity: 0.15,
        bump: 0.05,
      });
    case RoomType.Lair:
      return texturedMat('floor-lair', lairFloorTex(), {
        metalness: 0.08,
        roughness: 0.85,
        emissive: 0x201018,
        emissiveIntensity: 0.1,
        bump: 0.09,
      });
    case RoomType.Hatchery:
      return texturedMat('floor-hatchery', hatcheryFloorTex(), {
        metalness: 0.05,
        roughness: 0.88,
        emissive: 0x202010,
        emissiveIntensity: 0.12,
        bump: 0.08,
      });
    case RoomType.Training:
      return texturedMat('floor-training', trainingFloorTex(), {
        metalness: 0.2,
        roughness: 0.7,
        emissive: 0x201010,
        emissiveIntensity: 0.08,
        bump: 0.1,
      });
    case RoomType.Library:
      return texturedMat('floor-library', libraryFloorTex(), {
        metalness: 0.15,
        roughness: 0.65,
        emissive: 0x101828,
        emissiveIntensity: 0.18,
        bump: 0.06,
      });
    case RoomType.Portal:
      return texturedMat('floor-portal', portalFloorTex(), {
        metalness: 0.35,
        roughness: 0.45,
        emissive: 0x401868,
        emissiveIntensity: 0.35,
        bump: 0.07,
      });
    default:
      return texturedMat('floor-claimed-v2', claimedStoneTex(), {
        color: 0xb8a890,
        metalness: 0.2,
        roughness: 0.58,
        emissive: 0x2a2418,
        emissiveIntensity: 0.1,
        bump: 0.1,
      });
  }
}

export function makeRoomDecal(room: RoomType): THREE.Mesh | null {
  if (room === RoomType.None) return null;

  const specs: Record<
    number,
    { kind: 'goldRing' | 'bedding' | 'warmSpot' | 'worn' | 'runes' | 'swirl'; color: [number, number, number]; emissive: number; ei: number; size: number }
  > = {
    [RoomType.Treasury]: { kind: 'goldRing', color: [224, 176, 40], emissive: 0xc09020, ei: 0.35, size: 1.5 },
    [RoomType.Lair]: { kind: 'bedding', color: [130, 80, 140], emissive: 0x603070, ei: 0.2, size: 1.45 },
    [RoomType.Hatchery]: { kind: 'warmSpot', color: [140, 170, 60], emissive: 0x708020, ei: 0.25, size: 1.4 },
    [RoomType.Training]: { kind: 'worn', color: [170, 70, 60], emissive: 0x802020, ei: 0.18, size: 1.4 },
    [RoomType.Library]: { kind: 'runes', color: [90, 120, 210], emissive: 0x4060c0, ei: 0.4, size: 1.45 },
    [RoomType.Portal]: { kind: 'swirl', color: [160, 80, 220], emissive: 0x8030c0, ei: 0.55, size: 1.5 },
  };
  const s = specs[room];
  if (!s) return null;

  const map = makeDecalTexture(s.kind, s.color);
  const mat = new THREE.MeshStandardMaterial({
    map,
    transparent: true,
    depthWrite: false,
    color: 0xffffff,
    emissive: s.emissive,
    emissiveIntensity: s.ei,
    metalness: room === RoomType.Treasury ? 0.65 : 0.15,
    roughness: 0.5,
    polygonOffset: true,
    polygonOffsetFactor: -1,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(s.size, s.size), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.14;
  return mesh;
}

export function tileMaterial(kind: TileKind, fortified: boolean, _room: RoomType): THREE.MeshStandardMaterial {
  if (fortified) {
    return texturedMat('fortified', fortifiedTex(), {
      metalness: 0.42,
      roughness: 0.48,
      emissive: 0x2a2420,
      emissiveIntensity: 0.06,
      bump: 0.06,
      vertexColors: true,
    });
  }
  switch (kind) {
    case TileKind.Rock:
      return texturedMat('rock-v3', rockTex(), {
        metalness: 0.18,
        roughness: 0.72,
        emissive: 0x282838,
        emissiveIntensity: 0.12,
        bump: 0.12,
        vertexColors: true,
      });
    case TileKind.Earth:
      return texturedMat('earth-v2', earthTex(), {
        metalness: 0.04,
        roughness: 0.9,
        emissive: 0x3a2008,
        emissiveIntensity: 0.16,
        bump: 0.15,
        vertexColors: true,
      });
    case TileKind.Gold:
      return texturedMat('gold-v3', goldVeinTex(), {
        metalness: 0.88,
        roughness: 0.2,
        emissive: 0xe0a018,
        emissiveIntensity: 0.95,
        bump: 0.08,
        vertexColors: true,
      });
    case TileKind.Dirt:
      return floorMaterial(TileKind.Dirt, RoomType.None);
    case TileKind.Claimed:
      return floorMaterial(TileKind.Claimed, _room);
    case TileKind.Heart:
      return floorMaterial(TileKind.Heart, RoomType.None);
    default:
      return cachedMat('default', () => new THREE.MeshStandardMaterial({ color: 0x555555 }));
  }
}


/** 1–2 readable 3D props per room tile (Treasury chests/gold, Lair bedrolls, etc.). */
export function makeRoomProps(room: RoomType): THREE.Group | null {
  if (room === RoomType.None) return null;
  const g = new THREE.Group();

  if (room === RoomType.Treasury) {
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe0b028,
      metalness: 0.85,
      roughness: 0.3,
      emissive: 0xa07010,
      emissiveIntensity: 0.45,
    });
    const pile = new THREE.Mesh(new THREE.SphereGeometry(0.35, 10, 8), goldMat);
    pile.scale.set(1.3, 0.55, 1.1);
    pile.position.set(-0.35, 0.22, 0.15);
    pile.castShadow = true;
    g.add(pile);
    const pile2 = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), goldMat);
    pile2.scale.set(1.1, 0.5, 1.0);
    pile2.position.set(0.15, 0.16, -0.35);
    g.add(pile2);
    const chest = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.35, 0.4),
      new THREE.MeshStandardMaterial({ color: 0x6a3a18, metalness: 0.25, roughness: 0.7 })
    );
    chest.position.set(0.4, 0.28, 0.25);
    chest.castShadow = true;
    g.add(chest);
    const lid = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.08, 0.42),
      new THREE.MeshStandardMaterial({ color: 0x8a5020, metalness: 0.3, roughness: 0.65 })
    );
    lid.position.set(0.4, 0.48, 0.25);
    g.add(lid);
    const band = new THREE.Mesh(
      new THREE.BoxGeometry(0.58, 0.06, 0.08),
      new THREE.MeshStandardMaterial({ color: 0xd4a020, metalness: 0.8, roughness: 0.3, emissive: 0x805010, emissiveIntensity: 0.3 })
    );
    band.position.set(0.4, 0.3, 0.25);
    g.add(band);
  } else if (room === RoomType.Lair) {
    const cloth = new THREE.MeshStandardMaterial({ color: 0x6a4068, roughness: 0.9, emissive: 0x301028, emissiveIntensity: 0.12 });
    const roll = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.55, 4, 8), cloth);
    roll.rotation.z = Math.PI / 2;
    roll.position.set(-0.2, 0.2, 0.1);
    roll.castShadow = true;
    g.add(roll);
    const roll2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.45, 4, 8), cloth);
    roll2.rotation.z = Math.PI / 2;
    roll2.rotation.y = 0.4;
    roll2.position.set(0.35, 0.18, -0.25);
    g.add(roll2);
  } else if (room === RoomType.Hatchery) {
    const nest = new THREE.Mesh(
      new THREE.TorusGeometry(0.55, 0.16, 8, 16),
      new THREE.MeshStandardMaterial({ color: 0x6a8030, roughness: 0.85, emissive: 0x405018, emissiveIntensity: 0.28 })
    );
    nest.rotation.x = -Math.PI / 2;
    nest.position.y = 0.16;
    g.add(nest);
    const yolk = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xe8c040, emissive: 0xa08020, emissiveIntensity: 0.35, roughness: 0.5 })
    );
    yolk.position.y = 0.22;
    g.add(yolk);
  } else if (room === RoomType.Training) {
    const wood = new THREE.MeshStandardMaterial({ color: 0x6a4828, roughness: 0.8 });
    const steel = new THREE.MeshStandardMaterial({ color: 0x8890a0, metalness: 0.75, roughness: 0.35 });
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.9, 6), wood);
    post.position.set(-0.35, 0.5, 0);
    post.castShadow = true;
    g.add(post);
    const post2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.9, 6), wood);
    post2.position.set(0.35, 0.5, 0);
    g.add(post2);
    const rack = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.08, 0.12), wood);
    rack.position.set(0, 0.7, 0);
    g.add(rack);
    for (const x of [-0.2, 0.05, 0.3]) {
      const blade = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.45, 0.08), steel);
      blade.position.set(x, 0.55, 0.05);
      g.add(blade);
    }
    const dummy = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.22, 0.7, 8),
      new THREE.MeshStandardMaterial({ color: 0x8a6050, roughness: 0.75, emissive: 0x401010, emissiveIntensity: 0.15 })
    );
    dummy.position.set(0, 0.4, -0.45);
    dummy.castShadow = true;
    g.add(dummy);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.16, 8, 6),
      new THREE.MeshStandardMaterial({ color: 0xc09070, roughness: 0.7 })
    );
    head.position.set(0, 0.85, -0.45);
    g.add(head);
  } else if (room === RoomType.Library) {
    const wood = new THREE.MeshStandardMaterial({ color: 0x5a3a22, roughness: 0.75 });
    const desk = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.12, 0.45), wood);
    desk.position.set(0, 0.55, 0);
    desk.castShadow = true;
    g.add(desk);
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.45, 6), wood);
    stem.position.set(0, 0.28, 0);
    g.add(stem);
    const book = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.06, 0.22),
      new THREE.MeshStandardMaterial({ color: 0x3050a0, emissive: 0x102060, emissiveIntensity: 0.25, roughness: 0.6 })
    );
    book.position.set(0.05, 0.65, 0);
    g.add(book);
    const candle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.035, 0.14, 6),
      new THREE.MeshStandardMaterial({ color: 0xe8d8a0, emissive: 0xffaa40, emissiveIntensity: 0.4 })
    );
    candle.position.set(-0.22, 0.68, 0.08);
    g.add(candle);
  } else if (room === RoomType.Portal) {
    const swirlMat = new THREE.MeshStandardMaterial({
      color: 0x8030c0,
      emissive: 0xa040ff,
      emissiveIntensity: 0.7,
      metalness: 0.4,
      roughness: 0.35,
      transparent: true,
      opacity: 0.85,
    });
    const pillar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.28, 1.4, 10), swirlMat);
    pillar.position.y = 0.75;
    pillar.castShadow = true;
    g.add(pillar);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.42, 0.06, 8, 20), swirlMat);
    ring.position.y = 1.15;
    ring.rotation.x = Math.PI / 2;
    g.add(ring);
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xe0a0ff, emissive: 0xc060ff, emissiveIntensity: 1.1, roughness: 0.3 })
    );
    core.position.y = 1.15;
    g.add(core);
  } else {
    return null;
  }
  return g;
}


/** Bright sparkle accents for gold seams (overview-readable). */
export function makeGoldGlitter(): THREE.Group {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({
    color: 0xfff0a0,
    emissive: 0xffd040,
    emissiveIntensity: 1.65,
    metalness: 0.98,
    roughness: 0.1,
  });
  const spots = [
    [0.35, 1.7, 0.2],
    [-0.4, 1.35, -0.3],
    [0.1, 2.0, -0.45],
    [-0.25, 1.9, 0.4],
    [0.45, 1.1, 0.35],
    [-0.5, 2.15, 0.05],
    [0.0, 2.35, 0.15],
    [0.55, 1.55, -0.2],
  ];
  for (const [x, y, z] of spots) {
    const s = new THREE.Mesh(new THREE.OctahedronGeometry(0.11 + (Math.abs(x) % 0.05), 0), mat);
    s.position.set(x, y, z);
    g.add(s);
  }
  // Vertical glitter streak — brighter for overview readability
  const streak = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 1.85, 0.14),
    new THREE.MeshStandardMaterial({
      color: 0xffe070,
      emissive: 0xffb020,
      emissiveIntensity: 1.35,
      metalness: 0.95,
      roughness: 0.15,
    })
  );
  streak.position.set(0.15, 1.45, -0.1);
  streak.rotation.z = 0.2;
  g.add(streak);
  return g;
}

export function disposeMat(m: THREE.Material | THREE.Material[]): void {
  if (Array.isArray(m)) m.forEach((x) => x.dispose());
  else m.dispose();
}

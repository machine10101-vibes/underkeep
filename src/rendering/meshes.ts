import * as THREE from 'three';
import { RoomType, TILE_SIZE, TileKind } from '../game/types';

const geoCache = new Map<string, THREE.BufferGeometry>();

function cachedGeo(key: string, factory: () => THREE.BufferGeometry): THREE.BufferGeometry {
  let g = geoCache.get(key);
  if (!g) {
    g = factory();
    geoCache.set(key, g);
  }
  return g;
}

export function makeFloorGeo(): THREE.BufferGeometry {
  return cachedGeo('floor', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 0.28, TILE_SIZE * 0.98, 2, 1, 2);
    g.translate(0, 0.02, 0);
    return g;
  });
}

export function makeWallGeo(): THREE.BufferGeometry {
  return cachedGeo('wall', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.96, 2.35, TILE_SIZE * 0.96, 2, 3, 2);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 0.9) {
        pos.setX(i, pos.getX(i) * 0.9);
        pos.setZ(i, pos.getZ(i) * 0.9);
      }
      // subtle surface variation for diggable earth readability
      pos.setX(i, pos.getX(i) + Math.sin(i * 1.7) * 0.025);
      pos.setZ(i, pos.getZ(i) + Math.cos(i * 2.1) * 0.025);
      if (y > -0.2 && y < 0.4) {
        pos.setY(i, y + Math.sin(i * 0.9) * 0.04);
      }
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.175, 0);
    return g;
  });
}

export function makeRockGeo(): THREE.BufferGeometry {
  return cachedGeo('rock', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 2.9, TILE_SIZE * 0.98, 2, 3, 2);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 3.1) * 0.05);
      pos.setY(i, pos.getY(i) + Math.cos(i * 2.3) * 0.04);
      pos.setZ(i, pos.getZ(i) + Math.sin(i * 4.7) * 0.05);
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.45, 0);
    return g;
  });
}

export function makeGoldVeinGeo(): THREE.BufferGeometry {
  return cachedGeo('gold', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.96, 2.35, TILE_SIZE * 0.96, 2, 3, 2);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 5.1) * 0.04);
      pos.setZ(i, pos.getZ(i) + Math.cos(i * 3.9) * 0.04);
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.175, 0);
    return g;
  });
}

/** Thin top-edge outline so diggable blocks read on mobile */
export function makeBlockEdgeGeo(height: number): THREE.BufferGeometry {
  return cachedGeo(`edge-${height.toFixed(2)}`, () => {
    const s = TILE_SIZE * 0.5 * 0.97;
    const y = height;
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
      emissiveIntensity: 0.85,
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
    })
  );
  pedestal.position.y = 0.25;
  group.add(pedestal);

  const light = new THREE.PointLight(0xff4058, 2.2, 12, 2);
  light.position.y = 1.35;
  light.castShadow = false;
  group.add(light);

  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartCore = core;
  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartLight = light;
  return group;
}

export function makeTorchMesh(): THREE.Group {
  const g = new THREE.Group();
  const stick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.07, 0.6, 6),
    new THREE.MeshStandardMaterial({ color: 0x5a4020, roughness: 0.85 })
  );
  stick.position.y = 1.5;
  g.add(stick);
  const flame = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 8, 8),
    new THREE.MeshStandardMaterial({
      color: 0xffaa40,
      emissive: 0xff7700,
      emissiveIntensity: 1.4,
      roughness: 1,
    })
  );
  flame.position.y = 1.85;
  g.add(flame);
  const light = new THREE.PointLight(0xff8830, 2.4, 10, 1.8);
  light.position.y = 1.9;
  light.castShadow = false;
  g.add(light);
  (g as THREE.Group & { flame?: THREE.Mesh; torchLight?: THREE.PointLight }).flame = flame;
  (g as THREE.Group & { flame?: THREE.Mesh; torchLight?: THREE.PointLight }).torchLight = light;
  return g;
}

export function makeCreatureMesh(color: number, scale: number, kind: string): THREE.Group {
  const g = new THREE.Group();
  const bodyMat = new THREE.MeshStandardMaterial({
    color,
    metalness: 0.2,
    roughness: 0.55,
    emissive: color,
    emissiveIntensity: 0.12,
  });

  if (kind === 'scrabbler') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), bodyMat);
    body.scale.set(1, 0.75, 1.1);
    body.position.y = 0.35;
    body.castShadow = true;
    g.add(body);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x6a8a48, metalness: 0.2, roughness: 0.6 })
    );
    head.position.set(0, 0.55, 0.25);
    head.castShadow = true;
    g.add(head);
    for (const sx of [-1, 1]) {
      const claw = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.35, 5),
        new THREE.MeshStandardMaterial({ color: 0xc8c8a8, metalness: 0.65, roughness: 0.3 })
      );
      claw.rotation.z = sx * 0.6;
      claw.position.set(sx * 0.35, 0.25, 0.3);
      g.add(claw);
    }
  } else if (kind === 'skitterwing') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), bodyMat);
    body.position.y = 0.9;
    body.castShadow = true;
    g.add(body);
    const wingMat = new THREE.MeshStandardMaterial({
      color: 0x90ffe8,
      emissive: 0x308870,
      emissiveIntensity: 0.35,
      transparent: true,
      opacity: 0.75,
      side: THREE.DoubleSide,
    });
    for (const sx of [-1, 1]) {
      const wing = new THREE.Mesh(new THREE.PlaneGeometry(0.7, 0.35), wingMat);
      wing.position.set(sx * 0.35, 0.95, 0);
      wing.rotation.y = sx * 0.4;
      g.add(wing);
    }
  } else if (kind === 'emberling') {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.28, 0.5, 6, 10),
      new THREE.MeshStandardMaterial({
        color: 0xe04820,
        emissive: 0xff4018,
        emissiveIntensity: 0.55,
        metalness: 0.3,
        roughness: 0.4,
      })
    );
    body.position.y = 0.65;
    body.castShadow = true;
    g.add(body);
    const crest = new THREE.Mesh(
      new THREE.ConeGeometry(0.15, 0.4, 6),
      new THREE.MeshStandardMaterial({ color: 0xff9020, emissive: 0xff6010, emissiveIntensity: 0.8 })
    );
    crest.position.y = 1.25;
    g.add(crest);
  } else if (kind.startsWith('hero')) {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.28, 0.55, 6, 10),
      new THREE.MeshStandardMaterial({ color, metalness: 0.5, roughness: 0.35 })
    );
    body.position.y = 0.7;
    body.castShadow = true;
    g.add(body);
    const helm = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xd8e0f0, metalness: 0.75, roughness: 0.25 })
    );
    helm.position.y = 1.25;
    g.add(helm);
  } else {
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
  }

  g.scale.setScalar(scale);
  return g;
}

export function makeRoomDecal(room: RoomType): THREE.Mesh | null {
  if (room === RoomType.None) return null;
  const colors: Record<number, number> = {
    [RoomType.Treasury]: 0xe0b028,
    [RoomType.Lair]: 0x7a5080,
    [RoomType.Hatchery]: 0x7aa038,
    [RoomType.Training]: 0xb04040,
    [RoomType.Library]: 0x4060b0,
    [RoomType.Portal]: 0x8030c0,
  };
  const mat = new THREE.MeshStandardMaterial({
    color: colors[room] ?? 0x555555,
    emissive: colors[room] ?? 0x333333,
    emissiveIntensity: room === RoomType.Portal ? 0.45 : 0.22,
    metalness: room === RoomType.Treasury ? 0.75 : 0.2,
    roughness: 0.45,
    transparent: true,
    opacity: 0.9,
  });
  const mesh = new THREE.Mesh(new THREE.CircleGeometry(0.6, 16), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.12;
  return mesh;
}

const matCache = new Map<string, THREE.MeshStandardMaterial>();

function cachedMat(key: string, factory: () => THREE.MeshStandardMaterial): THREE.MeshStandardMaterial {
  let m = matCache.get(key);
  if (!m) {
    m = factory();
    matCache.set(key, m);
  }
  return m;
}

export function tileMaterial(kind: TileKind, fortified: boolean, room: RoomType): THREE.MeshStandardMaterial {
  if (fortified) {
    return cachedMat('fortified', () => new THREE.MeshStandardMaterial({
      color: 0x7a7068,
      metalness: 0.4,
      roughness: 0.45,
      emissive: 0x2a2420,
      emissiveIntensity: 0.08,
    }));
  }
  switch (kind) {
    case TileKind.Rock:
      return cachedMat('rock', () => new THREE.MeshStandardMaterial({
        color: 0x5a5868,
        metalness: 0.12,
        roughness: 0.82,
        emissive: 0x121018,
        emissiveIntensity: 0.04,
      }));
    case TileKind.Earth:
      return cachedMat('earth', () => new THREE.MeshStandardMaterial({
        color: 0x9a6a42,
        metalness: 0.04,
        roughness: 0.85,
        emissive: 0x3a2010,
        emissiveIntensity: 0.12,
      }));
    case TileKind.Gold:
      return cachedMat('gold', () => new THREE.MeshStandardMaterial({
        color: 0xc8a028,
        metalness: 0.82,
        roughness: 0.28,
        emissive: 0x6a4808,
        emissiveIntensity: 0.35,
      }));
    case TileKind.Dirt:
      return cachedMat('dirt', () => new THREE.MeshStandardMaterial({
        color: 0x6a4a30,
        metalness: 0.04,
        roughness: 0.92,
      }));
    case TileKind.Claimed:
      return cachedMat(room !== RoomType.None ? 'claimed-room' : 'claimed', () => new THREE.MeshStandardMaterial({
        color: room !== RoomType.None ? 0x5a4a40 : 0x6a5848,
        metalness: 0.22,
        roughness: 0.62,
      }));
    case TileKind.Heart:
      return cachedMat('heart', () => new THREE.MeshStandardMaterial({
        color: 0x5a2830,
        metalness: 0.35,
        roughness: 0.5,
        emissive: 0x501820,
        emissiveIntensity: 0.25,
      }));
    default:
      return cachedMat('default', () => new THREE.MeshStandardMaterial({ color: 0x555555 }));
  }
}

export function disposeMat(m: THREE.Material | THREE.Material[]): void {
  if (Array.isArray(m)) m.forEach((x) => x.dispose());
  else m.dispose();
}

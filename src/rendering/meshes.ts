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
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 0.25, TILE_SIZE * 0.98, 2, 1, 2);
    g.translate(0, -0.125, 0);
    return g;
  });
}

export function makeWallGeo(): THREE.BufferGeometry {
  return cachedGeo('wall', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 2.4, TILE_SIZE * 0.98, 2, 3, 2);
    // bevel-ish by scaling top verts slightly — approximate with position noise
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      if (y > 1.0) {
        pos.setX(i, pos.getX(i) * 0.92);
        pos.setZ(i, pos.getZ(i) * 0.92);
      }
      // subtle surface variation
      pos.setX(i, pos.getX(i) + (Math.sin(i * 1.7) * 0.02));
      pos.setZ(i, pos.getZ(i) + (Math.cos(i * 2.1) * 0.02));
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.2, 0);
    return g;
  });
}

export function makeRockGeo(): THREE.BufferGeometry {
  return cachedGeo('rock', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 2.8, TILE_SIZE * 0.98, 2, 3, 2);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 3.1) * 0.04);
      pos.setY(i, pos.getY(i) + Math.cos(i * 2.3) * 0.03);
      pos.setZ(i, pos.getZ(i) + Math.sin(i * 4.7) * 0.04);
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.4, 0);
    return g;
  });
}

export function makeGoldVeinGeo(): THREE.BufferGeometry {
  return cachedGeo('gold', () => {
    const g = new THREE.BoxGeometry(TILE_SIZE * 0.98, 2.4, TILE_SIZE * 0.98, 2, 3, 2);
    const pos = g.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      pos.setX(i, pos.getX(i) + Math.sin(i * 5.1) * 0.035);
      pos.setZ(i, pos.getZ(i) + Math.cos(i * 3.9) * 0.035);
    }
    pos.needsUpdate = true;
    g.computeVertexNormals();
    g.translate(0, 1.2, 0);
    return g;
  });
}

export function makeHeartGeo(): THREE.Group {
  const group = new THREE.Group();
  const core = new THREE.Mesh(
    new THREE.IcosahedronGeometry(0.85, 2),
    new THREE.MeshStandardMaterial({
      color: 0x4a0810,
      emissive: 0xff2040,
      emissiveIntensity: 1.4,
      metalness: 0.3,
      roughness: 0.35,
    })
  );
  core.position.y = 1.1;
  group.add(core);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(1.15, 0.12, 10, 32),
    new THREE.MeshStandardMaterial({
      color: 0x2a1018,
      emissive: 0xaa1028,
      emissiveIntensity: 0.8,
      metalness: 0.6,
      roughness: 0.3,
    })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 1.1;
  group.add(ring);

  const pedestal = new THREE.Mesh(
    new THREE.CylinderGeometry(1.1, 1.3, 0.5, 12),
    new THREE.MeshStandardMaterial({
      color: 0x3a2a22,
      metalness: 0.4,
      roughness: 0.55,
    })
  );
  pedestal.position.y = 0.25;
  group.add(pedestal);

  const light = new THREE.PointLight(0xff3048, 4, 14, 2);
  light.position.y = 1.4;
  light.castShadow = true;
  light.shadow.mapSize.set(256, 256);
  group.add(light);

  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartCore = core;
  (group as THREE.Group & { heartCore?: THREE.Mesh; heartLight?: THREE.PointLight }).heartLight = light;
  return group;
}

export function makeTorchMesh(): THREE.Group {
  const g = new THREE.Group();
  const stick = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.07, 0.6, 6),
    new THREE.MeshStandardMaterial({ color: 0x3a2810, roughness: 0.9 })
  );
  stick.position.y = 1.5;
  g.add(stick);
  const flame = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 8, 8),
    new THREE.MeshStandardMaterial({
      color: 0xff8820,
      emissive: 0xff6600,
      emissiveIntensity: 2.0,
      roughness: 1,
    })
  );
  flame.position.y = 1.85;
  g.add(flame);
  const light = new THREE.PointLight(0xff7722, 1.6, 8, 2);
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
    metalness: 0.25,
    roughness: 0.55,
    emissive: color,
    emissiveIntensity: 0.08,
  });

  if (kind === 'scrabbler') {
    const body = new THREE.Mesh(new THREE.SphereGeometry(0.35, 12, 10), bodyMat);
    body.scale.set(1, 0.75, 1.1);
    body.position.y = 0.35;
    body.castShadow = true;
    g.add(body);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x5a7a38, metalness: 0.2, roughness: 0.6 })
    );
    head.position.set(0, 0.55, 0.25);
    head.castShadow = true;
    g.add(head);
    // dig claws
    for (const sx of [-1, 1]) {
      const claw = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.35, 5),
        new THREE.MeshStandardMaterial({ color: 0xc0c0a0, metalness: 0.7, roughness: 0.3 })
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
      color: 0x80ffe0,
      emissive: 0x208060,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7,
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
        color: 0xe04018,
        emissive: 0xff4010,
        emissiveIntensity: 0.7,
        metalness: 0.3,
        roughness: 0.4,
      })
    );
    body.position.y = 0.65;
    body.castShadow = true;
    g.add(body);
    const crest = new THREE.Mesh(
      new THREE.ConeGeometry(0.15, 0.4, 6),
      new THREE.MeshStandardMaterial({ color: 0xff8020, emissive: 0xff6000, emissiveIntensity: 1 })
    );
    crest.position.y = 1.25;
    g.add(crest);
  } else if (kind.startsWith('hero')) {
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.28, 0.55, 6, 10),
      new THREE.MeshStandardMaterial({ color, metalness: 0.55, roughness: 0.35 })
    );
    body.position.y = 0.7;
    body.castShadow = true;
    g.add(body);
    const helm = new THREE.Mesh(
      new THREE.SphereGeometry(0.22, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0xd0d8e8, metalness: 0.8, roughness: 0.25 })
    );
    helm.position.y = 1.25;
    g.add(helm);
  } else {
    // rattlekin default humanoid
    const body = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.26, 0.45, 6, 10),
      bodyMat
    );
    body.position.y = 0.6;
    body.castShadow = true;
    g.add(body);
    const head = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 10, 8),
      new THREE.MeshStandardMaterial({ color: 0x9a8060, roughness: 0.6 })
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
    [RoomType.Treasury]: 0xd4a017,
    [RoomType.Lair]: 0x5a4060,
    [RoomType.Hatchery]: 0x6a8a30,
    [RoomType.Training]: 0x8a3030,
    [RoomType.Library]: 0x304080,
    [RoomType.Portal]: 0x6020a0,
  };
  const mat = new THREE.MeshStandardMaterial({
    color: colors[room] ?? 0x444444,
    emissive: colors[room] ?? 0x222222,
    emissiveIntensity: room === RoomType.Portal ? 0.6 : 0.15,
    metalness: room === RoomType.Treasury ? 0.8 : 0.2,
    roughness: 0.5,
    transparent: true,
    opacity: 0.85,
  });
  const mesh = new THREE.Mesh(new THREE.CircleGeometry(0.55, 16), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0.02;
  return mesh;
}

export function tileMaterial(kind: TileKind, fortified: boolean, room: RoomType): THREE.MeshStandardMaterial {
  if (fortified) {
    return new THREE.MeshStandardMaterial({
      color: 0x5a5048,
      metalness: 0.35,
      roughness: 0.55,
      emissive: 0x1a1510,
      emissiveIntensity: 0.05,
    });
  }
  switch (kind) {
    case TileKind.Rock:
      return new THREE.MeshStandardMaterial({
        color: 0x2a2830,
        metalness: 0.15,
        roughness: 0.85,
      });
    case TileKind.Earth:
      return new THREE.MeshStandardMaterial({
        color: 0x4a3428,
        metalness: 0.05,
        roughness: 0.92,
      });
    case TileKind.Gold:
      return new THREE.MeshStandardMaterial({
        color: 0x8a7010,
        metalness: 0.75,
        roughness: 0.35,
        emissive: 0x4a3000,
        emissiveIntensity: 0.25,
      });
    case TileKind.Dirt:
      return new THREE.MeshStandardMaterial({
        color: 0x3a2a1c,
        metalness: 0.05,
        roughness: 0.95,
      });
    case TileKind.Claimed:
      return new THREE.MeshStandardMaterial({
        color: room !== RoomType.None ? 0x3a322c : 0x4a3a32,
        metalness: 0.2,
        roughness: 0.7,
      });
    case TileKind.Heart:
      return new THREE.MeshStandardMaterial({
        color: 0x3a1820,
        metalness: 0.4,
        roughness: 0.5,
        emissive: 0x401018,
        emissiveIntensity: 0.3,
      });
    default:
      return new THREE.MeshStandardMaterial({ color: 0x333333 });
  }
}

export function disposeMat(m: THREE.Material | THREE.Material[]): void {
  if (Array.isArray(m)) m.forEach((x) => x.dispose());
  else m.dispose();
}

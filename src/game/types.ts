export const TILE_SIZE = 2;

export enum TileKind {
  Rock = 0,      // impenetrable
  Earth = 1,     // diggable
  Gold = 2,      // diggable ore
  Dirt = 3,      // dug, unclaimed floor
  Claimed = 4,   // claimed floor
  Heart = 5,     // dungeon heart
  Wall = 6,      // fortified wall (occupies earth/gold that became wall edge)
}

export enum RoomType {
  None = 0,
  Treasury = 1,
  Lair = 2,
  Hatchery = 3,
  Training = 4,
  Library = 5,
  Portal = 6,
}

export enum MarkType {
  None = 0,
  Dig = 1,
  Claim = 2,
  Fortify = 3,
}

export enum CreatureKind {
  Scrabbler = 'scrabbler',
  Skitterwing = 'skitterwing',
  Rattlekin = 'rattlekin',
  Emberling = 'emberling',
  HeroKnight = 'hero_knight',
  HeroArcher = 'hero_archer',
}

export enum JobType {
  Idle = 'idle',
  Dig = 'dig',
  Claim = 'claim',
  Fortify = 'fortify',
  Mine = 'mine',
  Haul = 'haul',
  Sleep = 'sleep',
  Eat = 'eat',
  Train = 'train',
  Fight = 'fight',
  Flee = 'flee',
  Wander = 'wander',
}

export interface Tile {
  x: number;
  y: number;
  kind: TileKind;
  room: RoomType;
  mark: MarkType;
  fortified: boolean;
  goldAmount: number;
  claimedProgress: number;
  /** 0 = intact solid, 1 = fully excavated (earth/gold). */
  digProgress: number;
  torch: boolean;
}

export interface Vec2 {
  x: number;
  y: number;
}

export const ROOM_COST: Record<RoomType, number> = {
  [RoomType.None]: 0,
  [RoomType.Treasury]: 50,
  [RoomType.Lair]: 100,
  [RoomType.Hatchery]: 150,
  [RoomType.Training]: 200,
  [RoomType.Library]: 250,
  [RoomType.Portal]: 300,
};

export const ROOM_NAMES: Record<RoomType, string> = {
  [RoomType.None]: 'None',
  [RoomType.Treasury]: 'Treasury',
  [RoomType.Lair]: 'Lair',
  [RoomType.Hatchery]: 'Hatchery',
  [RoomType.Training]: 'Training Room',
  [RoomType.Library]: 'Library',
  [RoomType.Portal]: 'Portal',
};

export const CREATURE_STATS: Record<
  CreatureKind,
  { hp: number; speed: number; damage: number; goldWage: number; color: number; scale: number }
> = {
  [CreatureKind.Scrabbler]: { hp: 40, speed: 3.8, damage: 4, goldWage: 0, color: 0x6a8a40, scale: 1.55 },
  [CreatureKind.Skitterwing]: { hp: 50, speed: 4.0, damage: 6, goldWage: 8, color: 0x40c0a0, scale: 0.6 },
  [CreatureKind.Rattlekin]: { hp: 80, speed: 2.6, damage: 12, goldWage: 15, color: 0x8a7050, scale: 0.75 },
  [CreatureKind.Emberling]: { hp: 90, speed: 2.4, damage: 16, goldWage: 25, color: 0xe05020, scale: 0.8 },
  [CreatureKind.HeroKnight]: { hp: 120, speed: 2.2, damage: 18, goldWage: 0, color: 0xc0c8d8, scale: 0.85 },
  [CreatureKind.HeroArcher]: { hp: 70, speed: 2.5, damage: 14, goldWage: 0, color: 0x5080a0, scale: 0.7 },
};

export type ToolMode =
  | 'select'
  | 'dig'
  | 'claim'
  | 'fortify'
  | 'treasury'
  | 'lair'
  | 'hatchery'
  | 'training'
  | 'library'
  | 'portal';

export type SpellId = 'createWorker' | 'speed' | 'lightning';

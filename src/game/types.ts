export const TILE_SIZE = 2;

export enum TileKind {
  Rock = 0,      // impenetrable
  Earth = 1,     // diggable
  Gold = 2,      // diggable ore
  Dirt = 3,      // dug, unclaimed floor
  Claimed = 4,   // claimed floor
  Heart = 5,     // dungeon heart
  Wall = 6,      // fortified wall (occupies earth/gold that became wall edge)
  Lava = 7,      // hazard floor — damages non-resistant; Scrabblers avoid
  Water = 8,     // hazard floor — moat; bridgeable
  BridgeWood = 9,
  BridgeStone = 10,
}

export enum RoomType {
  None = 0,
  Treasury = 1,
  Lair = 2,
  Hatchery = 3,
  Training = 4,
  Library = 5,
  Portal = 6,
  Guard = 7,
  Workshop = 8,
  Prison = 9,
  Torture = 10,
  Graveyard = 11,
  Temple = 12,
  CombatPit = 13,
}

/** Wooden door on a claimed corridor tile. */
export enum DoorState {
  None = 0,
  Closed = 1,
  Open = 2,
}

/** Placeable trap on claimed floor. */
export enum TrapType {
  None = 0,
  Sentry = 1,
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
  Gravemage = 'gravemage',
  Thornwitch = 'thornwitch',
  Bonewretch = 'bonewretch',
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
  Research = 'research',
  Fight = 'fight',
  Flee = 'flee',
  Wander = 'wander',
  Guard = 'guard',
  AttackMove = 'attack',
  Craft = 'craft',
  DragPrisoner = 'drag',
  Pray = 'pray',
  DragWounded = 'dragwounded',
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
  door: DoorState;
  trap: TrapType;
  /** Call-to-arms rally flag on this tile. */
  rally: boolean;
  /** Fog of war — once true, stays visible forever. */
  explored: boolean;
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
  [RoomType.Guard]: 175,
  [RoomType.Workshop]: 200,
  [RoomType.Prison]: 225,
  [RoomType.Torture]: 275,
  [RoomType.Graveyard]: 250,
  [RoomType.Temple]: 300,
  [RoomType.CombatPit]: 350,
};

export const DOOR_COST = 75;
export const SENTRY_COST = 150;
export const RALLY_COST = 40;
export const BRIDGE_WOOD_COST = 60;
export const BRIDGE_STONE_COST = 120;
export const POSSESS_COST = 35;
/** Payday interval (seconds). */
export const PAYDAY_INTERVAL = 48;
/** Survive this many hero waves to win (or hit gold threshold). */
export const WIN_WAVES = 3;
/** Treasury gold threshold alternate win. */
export const GOLD_WIN_THRESHOLD = 2500;
/** Max manufactured kits stored from Workshop. */
export const KIT_CAP = 5;


export const ROOM_NAMES: Record<RoomType, string> = {
  [RoomType.None]: 'None',
  [RoomType.Treasury]: 'Treasury',
  [RoomType.Lair]: 'Lair',
  [RoomType.Hatchery]: 'Hatchery',
  [RoomType.Training]: 'Training Room',
  [RoomType.Library]: 'Library',
  [RoomType.Portal]: 'Portal',
  [RoomType.Guard]: 'Guard Room',
  [RoomType.Workshop]: 'Workshop',
  [RoomType.Prison]: 'Prison',
  [RoomType.Torture]: 'Torture Chamber',
  [RoomType.Graveyard]: 'Graveyard',
  [RoomType.Temple]: 'Temple',
  [RoomType.CombatPit]: 'Combat Pit',
};

export const CREATURE_STATS: Record<
  CreatureKind,
  { hp: number; speed: number; damage: number; goldWage: number; color: number; scale: number }
> = {
  [CreatureKind.Scrabbler]: { hp: 40, speed: 4.6, damage: 4, goldWage: 0, color: 0x6a8a40, scale: 1.55 },
  [CreatureKind.Skitterwing]: { hp: 50, speed: 4.6, damage: 6, goldWage: 8, color: 0x40c0a0, scale: 0.6 },
  [CreatureKind.Rattlekin]: { hp: 80, speed: 3.1, damage: 12, goldWage: 15, color: 0x8a7050, scale: 0.75 },
  [CreatureKind.Emberling]: { hp: 90, speed: 2.9, damage: 16, goldWage: 25, color: 0xe05020, scale: 0.8 },
  [CreatureKind.Gravemage]: { hp: 70, speed: 2.6, damage: 10, goldWage: 20, color: 0x7050c0, scale: 0.78 },
  [CreatureKind.Thornwitch]: { hp: 85, speed: 2.9, damage: 15, goldWage: 22, color: 0xa03060, scale: 0.78 },
  [CreatureKind.Bonewretch]: { hp: 55, speed: 3.2, damage: 11, goldWage: 0, color: 0xd8d0b8, scale: 0.72 },
  [CreatureKind.HeroKnight]: { hp: 120, speed: 2.55, damage: 18, goldWage: 0, color: 0xc0c8d8, scale: 0.85 },
  [CreatureKind.HeroArcher]: { hp: 70, speed: 2.9, damage: 14, goldWage: 0, color: 0x5080a0, scale: 0.7 },
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
  | 'portal'
  | 'guard'
  | 'door'
  | 'sentry'
  | 'rally'
  | 'bridgeWood'
  | 'bridgeStone'
  | 'workshop'
  | 'prison'
  | 'torture'
  | 'graveyard'
  | 'temple'
  | 'combatPit';

export type SpellId = 'createWorker' | 'speed' | 'lightning' | 'heal' | 'possess';

/** Emberling shrugs lava; Skitterwing flies over hazards. */
export function isHeatResistant(kind: CreatureKind): boolean {
  return kind === CreatureKind.Emberling;
}

export function isFlyer(kind: CreatureKind): boolean {
  return kind === CreatureKind.Skitterwing;
}

/** Contiguous room-size bonus for Lair/Hatchery/Library (0–0.5). */
export function roomSizeEfficiencyBonus(tileCount: number): number {
  if (tileCount <= 1) return 0;
  return Math.min(0.5, (tileCount - 1) * 0.06);
}

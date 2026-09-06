import { CreatureKind, MarkType, RoomType, Tile, TileKind, Vec2 } from './types';

export const SAVE_KEY = 'underkeep-save-v1';

export interface SavedCreature {
  kind: CreatureKind;
  x: number;
  y: number;
  wx: number;
  wz: number;
  hp: number;
  maxHp: number;
  level: number;
  goldCarried: number;
  hunger: number;
  sleepNeed: number;
  trainNeed: number;
  isHero: boolean;
}

export interface SaveData {
  v: 1;
  width: number;
  height: number;
  heartPos: Vec2;
  tiles: Array<{
    kind: TileKind;
    room: RoomType;
    mark: MarkType;
    fortified: boolean;
    goldAmount: number;
    claimedProgress: number;
    digProgress: number;
    torch: boolean;
  }>;
  gold: number;
  mana: number;
  creatures: SavedCreature[];
  attracted: { skitterwing: boolean; rattlekin: boolean; emberling: boolean };
  heroWaveSpawned: boolean;
  heroWaveTimer: number;
  workerCostScale: number;
  portalCooldown: number;
  time: number;
  wageAcc: number;
  mentored: string[];
  gameOver: boolean;
  won: boolean;
  cam?: { tx: number; tz: number; cx: number; cy: number; cz: number };
}

export function hasSave(): boolean {
  try {
    return !!localStorage.getItem(SAVE_KEY);
  } catch {
    return false;
  }
}

export function loadSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SaveData;
    if (!data || data.v !== 1 || !Array.isArray(data.tiles) || !data.width) return null;
    return data;
  } catch {
    return null;
  }
}

export function writeSave(data: SaveData): void {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
  } catch {
    // quota / private mode — ignore
  }
}

export function clearSave(): void {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch {
    /* ignore */
  }
}

export function packTiles(tiles: Tile[]): SaveData['tiles'] {
  return tiles.map((t) => ({
    kind: t.kind,
    room: t.room,
    mark: t.mark,
    fortified: t.fortified,
    goldAmount: t.goldAmount,
    claimedProgress: t.claimedProgress,
    digProgress: t.digProgress,
    torch: t.torch,
  }));
}

export function unpackTiles(gridTiles: Tile[], packed: SaveData['tiles']): void {
  const n = Math.min(gridTiles.length, packed.length);
  for (let i = 0; i < n; i++) {
    const t = gridTiles[i];
    const p = packed[i];
    t.kind = p.kind;
    t.room = p.room;
    t.mark = p.mark;
    t.fortified = !!p.fortified;
    t.goldAmount = p.goldAmount ?? 0;
    t.claimedProgress = p.claimedProgress ?? 0;
    t.digProgress = p.digProgress ?? 0;
    t.torch = !!p.torch;
  }
}

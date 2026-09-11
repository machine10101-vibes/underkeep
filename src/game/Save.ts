import { CreatureKind, DoorState, MarkType, RoomType, Tile, TileKind, TrapType, Vec2 } from './types';

export const SAVE_KEY = 'underkeep-save-v1';

const VALID_KINDS = new Set<string>(Object.values(CreatureKind));
const VALID_TILE_KINDS = new Set<number>([
  TileKind.Rock,
  TileKind.Earth,
  TileKind.Gold,
  TileKind.Dirt,
  TileKind.Claimed,
  TileKind.Heart,
  TileKind.Wall,
  TileKind.Lava,
  TileKind.Water,
  TileKind.BridgeWood,
  TileKind.BridgeStone,
  TileKind.Gem,
]);

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
  job?: string;
  mood?: number;
  knockedOut?: boolean;
  isPrisoner?: boolean;
  convertProgress?: number;
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
    door?: DoorState;
    trap?: TrapType;
    rally?: boolean;
    explored?: boolean;
  }>;
  gold: number;
  mana: number;
  creatures: SavedCreature[];
  attracted: { skitterwing: boolean; rattlekin: boolean; emberling: boolean; gravemage?: boolean };
  researchProgress?: number;
  researchRank?: number;
  healUnlocked?: boolean;
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
  rallyPos?: Vec2 | null;
  /** Pass 7.2 — hero waves cleared toward WIN_WAVES. */
  wavesCleared?: number;
  doorKits?: number;
  sentryKits?: number;
  goldEver?: number;
  heartHp?: number;
}

function finiteNum(n: unknown): n is number {
  return typeof n === 'number' && Number.isFinite(n);
}

/** Returns null if OK, otherwise a short reason string. */
export function validateSave(
  data: unknown,
  expectW: number,
  expectH: number
): data is SaveData {
  return validateSaveReason(data, expectW, expectH) === null;
}

export function validateSaveReason(
  data: unknown,
  expectW: number,
  expectH: number
): string | null {
  if (!data || typeof data !== 'object') return 'not-object';
  const d = data as Partial<SaveData>;
  if (d.v !== 1) return 'bad-version';
  if (d.width !== expectW || d.height !== expectH) return 'size-mismatch';
  if (!d.heartPos || !finiteNum(d.heartPos.x) || !finiteNum(d.heartPos.y)) return 'bad-heartPos';
  if (
    d.heartPos.x < 0 ||
    d.heartPos.y < 0 ||
    d.heartPos.x >= expectW ||
    d.heartPos.y >= expectH
  ) {
    return 'heartPos-oob';
  }
  if (!Array.isArray(d.tiles) || d.tiles.length !== expectW * expectH) return 'bad-tiles-length';
  if (!finiteNum(d.gold) || d.gold < 0) return 'bad-gold';
  if (!finiteNum(d.mana) || d.mana < 0) return 'bad-mana';
  if (!Array.isArray(d.creatures)) return 'bad-creatures';

  let hearts = 0;
  let diggable = 0;
  for (let i = 0; i < d.tiles.length; i++) {
    const t = d.tiles[i];
    if (!t || typeof t !== 'object') return 'bad-tile';
    if (!VALID_TILE_KINDS.has(t.kind as number)) return 'bad-tile-kind';
    if (t.kind === TileKind.Heart) hearts++;
    if (t.kind === TileKind.Earth || t.kind === TileKind.Gold) diggable++;
  }
  if (hearts < 1) return 'no-heart-tile';

  const heartIdx = d.heartPos.y * expectW + d.heartPos.x;
  if (d.tiles[heartIdx]?.kind !== TileKind.Heart) return 'heartPos-mismatch';

  // Playable session must have diggable terrain (unless game already over)
  if (!d.gameOver && diggable < 1) return 'no-diggable';

  let scrabblers = 0;
  for (const c of d.creatures) {
    if (!c || typeof c !== 'object') return 'bad-creature';
    if (!VALID_KINDS.has(c.kind as string)) return 'bad-creature-kind';
    if (!finiteNum(c.x) || !finiteNum(c.y)) return 'bad-creature-pos';
    if (c.kind === CreatureKind.Scrabbler) scrabblers++;
  }

  // Never enter playing without ≥1 Scrabbler (accept gameOver saves without workers)
  if (!d.gameOver && scrabblers < 1) return 'no-scrabbler';

  if (d.cam) {
    const cam = d.cam;
    if (
      !finiteNum(cam.tx) ||
      !finiteNum(cam.tz) ||
      !finiteNum(cam.cx) ||
      !finiteNum(cam.cy) ||
      !finiteNum(cam.cz)
    ) {
      return 'bad-cam';
    }
  }

  return null;
}

export function hasSave(): boolean {
  try {
    return !!localStorage.getItem(SAVE_KEY);
  } catch {
    return false;
  }
}

export function loadSave(expectW?: number, expectH?: number): SaveData | null {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as unknown;
    if (expectW != null && expectH != null) {
      const reason = validateSaveReason(data, expectW, expectH);
      if (reason) {
        console.warn('[underkeep] rejecting save:', reason);
        try {
          localStorage.removeItem(SAVE_KEY);
        } catch {
          /* ignore */
        }
        return null;
      }
      return data as SaveData;
    }
    // Loose pre-check when size unknown
    if (!data || typeof data !== 'object') return null;
    const d = data as Partial<SaveData>;
    if (d.v !== 1 || !Array.isArray(d.tiles) || !d.width || !d.height) return null;
    return d as SaveData;
  } catch (e) {
    console.warn('[underkeep] save parse failed', e);
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
    door: t.door ?? DoorState.None,
    trap: t.trap ?? TrapType.None,
    rally: !!t.rally,
    explored: !!t.explored,
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
    t.door = (p.door as DoorState) ?? DoorState.None;
    t.trap = (p.trap as TrapType) ?? TrapType.None;
    t.rally = !!p.rally;
    // Missing explored (pre-6.5 saves): leave false; caller reseeds from territory
    t.explored = p.explored === undefined ? false : !!p.explored;
  }
}

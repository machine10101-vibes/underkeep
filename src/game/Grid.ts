import { MarkType, RoomType, TILE_SIZE, Tile, TileKind, Vec2 } from './types';

export class Grid {
  readonly width: number;
  readonly height: number;
  readonly tiles: Tile[];
  heartPos: Vec2 = { x: 0, y: 0 };

  constructor(width = 48, height = 48) {
    this.width = width;
    this.height = height;
    this.tiles = [];
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        this.tiles.push({
          x,
          y,
          kind: TileKind.Earth,
          room: RoomType.None,
          mark: MarkType.None,
          fortified: false,
          goldAmount: 0,
          claimedProgress: 0,
          torch: false,
        });
      }
    }
    this.generate();
  }

  idx(x: number, y: number): number {
    return y * this.width + x;
  }

  inBounds(x: number, y: number): boolean {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  }

  get(x: number, y: number): Tile | null {
    if (!this.inBounds(x, y)) return null;
    return this.tiles[this.idx(x, y)];
  }

  worldToTile(wx: number, wz: number): Vec2 {
    return {
      x: Math.floor(wx / TILE_SIZE + this.width / 2),
      y: Math.floor(wz / TILE_SIZE + this.height / 2),
    };
  }

  tileToWorld(x: number, y: number): { x: number; z: number } {
    return {
      x: (x - this.width / 2 + 0.5) * TILE_SIZE,
      z: (y - this.height / 2 + 0.5) * TILE_SIZE,
    };
  }

  private generate(): void {
    const cx = Math.floor(this.width / 2);
    const cy = Math.floor(this.height / 2);
    this.heartPos = { x: cx, y: cy };

    // Border rock
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const t = this.get(x, y)!;
        if (x < 2 || y < 2 || x >= this.width - 2 || y >= this.height - 2) {
          t.kind = TileKind.Rock;
        }
      }
    }

    // Gold veins
    for (let i = 0; i < 14; i++) {
      let gx = 4 + Math.floor(Math.random() * (this.width - 8));
      let gy = 4 + Math.floor(Math.random() * (this.height - 8));
      const len = 4 + Math.floor(Math.random() * 8);
      for (let j = 0; j < len; j++) {
        const t = this.get(gx, gy);
        if (t && t.kind === TileKind.Earth) {
          t.kind = TileKind.Gold;
          t.goldAmount = 200 + Math.floor(Math.random() * 300);
        }
        gx += Math.floor(Math.random() * 3) - 1;
        gy += Math.floor(Math.random() * 3) - 1;
        gx = Math.max(3, Math.min(this.width - 4, gx));
        gy = Math.max(3, Math.min(this.height - 4, gy));
      }
    }

    // Starting chamber around heart
    for (let dy = -3; dy <= 3; dy++) {
      for (let dx = -3; dx <= 3; dx++) {
        const t = this.get(cx + dx, cy + dy);
        if (!t) continue;
        if (dx === 0 && dy === 0) {
          t.kind = TileKind.Heart;
          t.room = RoomType.None;
          continue;
        }
        const dist = Math.max(Math.abs(dx), Math.abs(dy));
        if (dist <= 2) {
          t.kind = TileKind.Claimed;
          t.claimedProgress = 1;
        } else if (dist === 3) {
          // leave earth walls around chamber, carve a corridor north
          if (!(dx === 0 && dy === -3)) {
            // keep as earth (wall of chamber)
          } else {
            t.kind = TileKind.Claimed;
            t.claimedProgress = 1;
          }
        }
      }
    }

    // Open corridor toward north for hero path later
    for (let y = cy - 8; y < cy - 3; y++) {
      for (let x = cx - 1; x <= cx + 1; x++) {
        const t = this.get(x, y);
        if (t && t.kind !== TileKind.Rock && t.kind !== TileKind.Heart) {
          t.kind = TileKind.Claimed;
          t.claimedProgress = 1;
        }
      }
    }

    // Place a few torches on claimed tiles near walls
    this.refreshTorches();
  }

  refreshTorches(): void {
    for (const t of this.tiles) t.torch = false;
    for (const t of this.tiles) {
      if (t.kind !== TileKind.Claimed && t.kind !== TileKind.Dirt && t.kind !== TileKind.Heart) continue;
      if ((t.x + t.y) % 7 !== 0) continue;
      // near a solid wall
      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ];
      for (const [dx, dy] of dirs) {
        const n = this.get(t.x + dx, t.y + dy);
        if (n && (n.kind === TileKind.Earth || n.kind === TileKind.Gold || n.kind === TileKind.Rock || n.fortified)) {
          t.torch = true;
          break;
        }
      }
    }
  }

  isSolid(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t) return true;
    return (
      t.kind === TileKind.Earth ||
      t.kind === TileKind.Gold ||
      t.kind === TileKind.Rock ||
      t.fortified
    );
  }

  isWalkable(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t) return false;
    return (
      !t.fortified &&
      (t.kind === TileKind.Dirt ||
        t.kind === TileKind.Claimed ||
        t.kind === TileKind.Heart)
    );
  }

  isDiggable(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t || t.fortified) return false;
    return t.kind === TileKind.Earth || t.kind === TileKind.Gold;
  }

  countClaimed(): number {
    let n = 0;
    for (const t of this.tiles) {
      if (t.kind === TileKind.Claimed || t.kind === TileKind.Heart) n++;
    }
    return n;
  }

  countRoom(room: RoomType): number {
    let n = 0;
    for (const t of this.tiles) if (t.room === room) n++;
    return n;
  }

  neighbors4(x: number, y: number): Tile[] {
    const out: Tile[] = [];
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ] as const) {
      const t = this.get(x + dx, y + dy);
      if (t) out.push(t);
    }
    return out;
  }

  hasAdjacentClaimed(x: number, y: number): boolean {
    return this.neighbors4(x, y).some(
      (t) => t.kind === TileKind.Claimed || t.kind === TileKind.Heart
    );
  }

  /** A* pathfinding on walkable tiles */
  findPath(sx: number, sy: number, gx: number, gy: number): Vec2[] | null {
    if (!this.inBounds(sx, sy) || !this.inBounds(gx, gy)) return null;
    if (!this.isWalkable(gx, gy) && !(gx === this.heartPos.x && gy === this.heartPos.y)) {
      // allow targeting adjacent to solid for dig jobs — caller handles
    }
    const key = (x: number, y: number) => y * this.width + x;
    const open: { x: number; y: number; f: number }[] = [{ x: sx, y: sy, f: 0 }];
    const came = new Map<number, number>();
    const gScore = new Map<number, number>();
    gScore.set(key(sx, sy), 0);
    const closed = new Set<number>();

    const h = (x: number, y: number) => Math.abs(x - gx) + Math.abs(y - gy);

    let guard = 0;
    while (open.length && guard++ < 4000) {
      open.sort((a, b) => a.f - b.f);
      const cur = open.shift()!;
      const ck = key(cur.x, cur.y);
      if (closed.has(ck)) continue;
      closed.add(ck);
      if (cur.x === gx && cur.y === gy) {
        const path: Vec2[] = [{ x: gx, y: gy }];
        let k = ck;
        while (came.has(k)) {
          const prev = came.get(k)!;
          path.push({ x: prev % this.width, y: Math.floor(prev / this.width) });
          k = prev;
        }
        path.reverse();
        return path;
      }
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ] as const) {
        const nx = cur.x + dx;
        const ny = cur.y + dy;
        if (!this.inBounds(nx, ny)) continue;
        const walk =
          this.isWalkable(nx, ny) || (nx === gx && ny === gy && this.isDiggable(nx, ny));
        // Allow standing next to dig target: if goal is diggable solid, path to adjacent walkable
        if (!walk && !(nx === gx && ny === gy)) continue;
        if (!this.isWalkable(nx, ny) && !(nx === gx && ny === gy)) continue;
        const nk = key(nx, ny);
        if (closed.has(nk)) continue;
        const tent = (gScore.get(ck) ?? Infinity) + 1;
        if (tent < (gScore.get(nk) ?? Infinity)) {
          came.set(nk, ck);
          gScore.set(nk, tent);
          open.push({ x: nx, y: ny, f: tent + h(nx, ny) });
        }
      }
    }
    return null;
  }

  /** Path to a tile adjacent to target (for digging/mining/fortify) */
  findPathAdjacent(sx: number, sy: number, tx: number, ty: number): Vec2[] | null {
    let best: Vec2[] | null = null;
    for (const [dx, dy] of [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ] as const) {
      const ax = tx + dx;
      const ay = ty + dy;
      if (!this.isWalkable(ax, ay)) continue;
      const p = this.findPath(sx, sy, ax, ay);
      if (p && (!best || p.length < best.length)) best = p;
    }
    return best;
  }
}

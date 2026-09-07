import { DoorState, MarkType, RoomType, TILE_SIZE, Tile, TileKind, TrapType, Vec2 } from './types';

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
          digProgress: 0,
          torch: false,
          door: DoorState.None,
          trap: TrapType.None,
          rally: false,
          explored: false,
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

    // Inland rock outcrops (cool gray, taller) so Rock ≠ Earth at overview
    for (let i = 0; i < 8; i++) {
      let rx = 5 + Math.floor(Math.random() * (this.width - 10));
      let ry = 5 + Math.floor(Math.random() * (this.height - 10));
      // keep clear of heart area
      if (Math.abs(rx - cx) < 7 && Math.abs(ry - cy) < 7) continue;
      const blob = 2 + Math.floor(Math.random() * 3);
      for (let dy = -blob; dy <= blob; dy++) {
        for (let dx = -blob; dx <= blob; dx++) {
          if (Math.abs(dx) + Math.abs(dy) > blob) continue;
          const t = this.get(rx + dx, ry + dy);
          if (t && t.kind === TileKind.Earth) {
            t.kind = TileKind.Rock;
            t.goldAmount = 0;
          }
        }
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

    // Guaranteed gold vein on diggable faces adjacent to the starting claimed area
    // (south + east of heart) so new games always show bright gold without wandering.
    const paintGold = (x: number, y: number, amount: number) => {
      const t = this.get(x, y);
      if (!t) return;
      if (t.kind === TileKind.Earth || t.kind === TileKind.Gold) {
        t.kind = TileKind.Gold;
        t.goldAmount = Math.max(t.goldAmount, amount);
        t.fortified = false;
      }
    };
    // South dig face (chamber wall at cy+3) + one tile deeper
    for (let i = 0; i < 5; i++) {
      paintGold(cx - 1 + i, cy + 3, 380 + i * 30);
    }
    for (let i = 0; i < 4; i++) {
      paintGold(cx + i, cy + 4, 320 + i * 40);
    }
    // East dig face (chamber wall at cx+3)
    for (let i = 0; i < 4; i++) {
      paintGold(cx + 3, cy - 1 + i, 360 + i * 25);
    }
    for (let i = 0; i < 3; i++) {
      paintGold(cx + 4, cy + i, 300 + i * 35);
    }

    // Lava river / pools (west of heart) — distinct from gold veins
    this.paintHazardBlob(cx - 10, cy + 2, 3, TileKind.Lava);
    this.paintHazardBlob(cx - 12, cy - 1, 2, TileKind.Lava);
    // Thin lava seam south-east for bridge demos
    for (let i = 0; i < 5; i++) {
      const t = this.get(cx + 6 + (i % 2), cy + 6 + Math.floor(i / 2));
      if (t && (t.kind === TileKind.Earth || t.kind === TileKind.Gold)) {
        t.kind = TileKind.Lava;
        t.goldAmount = 0;
        t.fortified = false;
      }
    }
    // Small water moat pocket north-west
    this.paintHazardBlob(cx - 8, cy - 8, 2, TileKind.Water);

    // Place a few torches on claimed tiles near walls
    this.refreshTorches();
    this.seedExploration();
  }

  /** Carve a soft blob of lava/water into diggable earth (keeps clear of heart). */
  private paintHazardBlob(cx: number, cy: number, radius: number, kind: TileKind.Lava | TileKind.Water): void {
    const hx = this.heartPos.x;
    const hy = this.heartPos.y;
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (dx * dx + dy * dy > radius * radius + 0.5) continue;
        const x = cx + dx;
        const y = cy + dy;
        if (Math.abs(x - hx) < 5 && Math.abs(y - hy) < 5) continue;
        const t = this.get(x, y);
        if (!t) continue;
        if (t.kind === TileKind.Earth || t.kind === TileKind.Gold) {
          t.kind = kind;
          t.goldAmount = 0;
          t.fortified = false;
          t.digProgress = 0;
          t.room = RoomType.None;
        }
      }
    }
  }

  refreshTorches(): void {
    for (const t of this.tiles) t.torch = false;
    for (const t of this.tiles) {
      if (t.kind !== TileKind.Claimed && t.kind !== TileKind.Dirt && t.kind !== TileKind.Heart) continue;
      if ((t.x + t.y) % 4 !== 0) continue;
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

  isHazard(x: number, y: number): boolean {
    const t = this.get(x, y);
    return !!t && (t.kind === TileKind.Lava || t.kind === TileKind.Water);
  }

  isBridge(x: number, y: number): boolean {
    const t = this.get(x, y);
    return !!t && (t.kind === TileKind.BridgeWood || t.kind === TileKind.BridgeStone);
  }

  /**
   * Default walkable floors. Lava/water are NOT walkable for Scrabblers (block pathing).
   * Pass allowHazard for heat-resistant / flyers / combat units that can risk crossing.
   */
  isWalkable(x: number, y: number, opts?: { allowHazard?: boolean }): boolean {
    const t = this.get(x, y);
    if (!t || t.fortified) return false;
    if (
      t.kind === TileKind.Dirt ||
      t.kind === TileKind.Claimed ||
      t.kind === TileKind.Heart ||
      t.kind === TileKind.BridgeWood ||
      t.kind === TileKind.BridgeStone
    ) {
      return true;
    }
    if (opts?.allowHazard && (t.kind === TileKind.Lava || t.kind === TileKind.Water)) {
      return true;
    }
    return false;
  }

  /** Bridge must sit on lava/water and touch an existing walkable tile. */
  canPlaceBridge(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t) return false;
    if (t.kind !== TileKind.Lava && t.kind !== TileKind.Water) return false;
    return this.neighbors4(x, y).some(
      (n) =>
        !n.fortified &&
        (n.kind === TileKind.Dirt ||
          n.kind === TileKind.Claimed ||
          n.kind === TileKind.Heart ||
          n.kind === TileKind.BridgeWood ||
          n.kind === TileKind.BridgeStone)
    );
  }

  isDiggable(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t) return false;
    if (t.kind !== TileKind.Earth && t.kind !== TileKind.Gold) return false;
    // Player Dig marks tear down auto-fortified earth so the opening excavation can happen
    if (t.fortified && t.mark !== MarkType.Dig) return false;
    return true;
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

  /** Largest 4-connected contiguous block of a room type. */
  largestContiguousRoom(room: RoomType): number {
    if (room === RoomType.None) return 0;
    const seen = new Set<string>();
    let best = 0;
    for (const start of this.tiles) {
      if (start.room !== room) continue;
      const key0 = `${start.x},${start.y}`;
      if (seen.has(key0)) continue;
      let size = 0;
      const stack = [start];
      seen.add(key0);
      while (stack.length) {
        const t = stack.pop()!;
        size++;
        for (const n of this.neighbors4(t.x, t.y)) {
          const k = `${n.x},${n.y}`;
          if (n.room === room && !seen.has(k)) {
            seen.add(k);
            stack.push(n);
          }
        }
      }
      if (size > best) best = size;
    }
    return best;
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


  /** True if a diggable tile has at least one orthogonal walkable neighbor. */
  isReachableSolid(x: number, y: number): boolean {
    return this.neighbors4(x, y).some((t) => this.isWalkable(t.x, t.y));
  }

  hasAdjacentClaimed(x: number, y: number): boolean {
    return this.neighbors4(x, y).some(
      (t) => t.kind === TileKind.Claimed || t.kind === TileKind.Heart
    );
  }

  /** True if a closed door blocks heroes on this tile. Creatures may open/pass. */
  blocksHero(x: number, y: number): boolean {
    const t = this.get(x, y);
    return !!t && t.door === DoorState.Closed;
  }

  /** Corridor mouth / room-adjacent claimed tile suitable for a wooden door. */
  canPlaceDoor(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t || t.kind !== TileKind.Claimed || t.room !== RoomType.None) return false;
    if (t.door !== DoorState.None) return true; // allow re-click toggle
    let solid = 0;
    let walk = 0;
    let roomAdj = false;
    for (const n of this.neighbors4(x, y)) {
      if (n.fortified || n.kind === TileKind.Earth || n.kind === TileKind.Gold || n.kind === TileKind.Rock) {
        solid++;
      }
      if (
        !n.fortified &&
        (n.kind === TileKind.Dirt ||
          n.kind === TileKind.Claimed ||
          n.kind === TileKind.Heart ||
          n.kind === TileKind.BridgeWood ||
          n.kind === TileKind.BridgeStone)
      ) {
        walk++;
      }
      if (n.room !== RoomType.None) roomAdj = true;
    }
    // Corridor mouth: walls + open path, or room-adjacent corridor
    return (solid >= 1 && walk >= 1) || roomAdj;
  }


  /**
   * Fog of war seed: claimed/heart/dirt known, plus orthogonal wall faces (LOS).
   * Far earth/rock stays dark until dig/claim expands territory.
   */
  seedExploration(): void {
    for (const t of this.tiles) t.explored = false;
    for (const t of this.tiles) {
      if (
        t.kind === TileKind.Claimed ||
        t.kind === TileKind.Heart ||
        t.kind === TileKind.Dirt
      ) {
        t.explored = true;
      }
    }
    // LOS: solids adjacent to claimed/heart are visible wall faces
    for (const t of this.tiles) {
      if (!t.explored) continue;
      if (
        t.kind !== TileKind.Claimed &&
        t.kind !== TileKind.Heart &&
        t.kind !== TileKind.Dirt
      ) {
        continue;
      }
      for (const n of this.neighbors4(t.x, t.y)) {
        n.explored = true;
      }
    }
  }

  /** Reveal a tile; returns true if newly explored. */
  revealTile(x: number, y: number): boolean {
    const t = this.get(x, y);
    if (!t || t.explored) return false;
    t.explored = true;
    return true;
  }

  /**
   * Reveal tile + Chebyshev neighborhood (dig/claim nearby).
   * Returns true if any tile newly explored.
   */
  revealAround(x: number, y: number, radius = 1): boolean {
    let changed = false;
    for (let dy = -radius; dy <= radius; dy++) {
      for (let dx = -radius; dx <= radius; dx++) {
        if (this.revealTile(x + dx, y + dy)) changed = true;
      }
    }
    return changed;
  }

  /**
   * Expand LOS from all claimed/heart/dirt — call after claim or dig-open.
   * Cheap enough for coalesced rebuild path (not every chip).
   */
  revealFromTerritory(): boolean {
    let changed = false;
    for (const t of this.tiles) {
      if (
        t.kind !== TileKind.Claimed &&
        t.kind !== TileKind.Heart &&
        t.kind !== TileKind.Dirt
      ) {
        continue;
      }
      if (!t.explored) {
        t.explored = true;
        changed = true;
      }
      for (const n of this.neighbors4(t.x, t.y)) {
        if (!n.explored) {
          n.explored = true;
          changed = true;
        }
      }
    }
    return changed;
  }

  isExplored(x: number, y: number): boolean {
    const t = this.get(x, y);
    return !!t && t.explored;
  }

  /** A* pathfinding on walkable tiles (goal may be diggable solid when explicitly targeted). */
  findPath(
    sx: number,
    sy: number,
    gx: number,
    gy: number,
    opts?: { forHero?: boolean; allowHazard?: boolean }
  ): Vec2[] | null {
    if (!this.inBounds(sx, sy) || !this.inBounds(gx, gy)) return null;
    if (sx === gx && sy === gy) return [{ x: gx, y: gy }];

    const key = (x: number, y: number) => y * this.width + x;
    const open: { x: number; y: number; f: number }[] = [{ x: sx, y: sy, f: 0 }];
    const came = new Map<number, number>();
    const gScore = new Map<number, number>();
    gScore.set(key(sx, sy), 0);
    const closed = new Set<number>();
    const h = (x: number, y: number) => Math.abs(x - gx) + Math.abs(y - gy);
    const forHero = !!opts?.forHero;
    const allowHazard = !!opts?.allowHazard;
    const passable = (nx: number, ny: number): boolean => {
      if (forHero && this.blocksHero(nx, ny)) return false;
      if (this.isWalkable(nx, ny, { allowHazard })) return true;
      // Allow stepping onto diggable goal only (stand-in for adjacent jobs uses walkable goals)
      if (nx === gx && ny === gy && this.isDiggable(nx, ny)) return true;
      if (nx === gx && ny === gy && (nx === this.heartPos.x && ny === this.heartPos.y)) return true;
      return false;
    };
    const stepCost = (nx: number, ny: number): number => {
      const t = this.get(nx, ny);
      if (!t) return 1;
      if (t.kind === TileKind.Lava) return 4; // slow / discourage
      if (t.kind === TileKind.Water) return 3;
      return 1;
    };

    let guard = 0;
    while (open.length && guard++ < 5000) {
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
        if (!this.inBounds(nx, ny) || !passable(nx, ny)) continue;
        const nk = key(nx, ny);
        if (closed.has(nk)) continue;
        const tent = (gScore.get(ck) ?? Infinity) + stepCost(nx, ny);
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
  findPathAdjacent(
    sx: number,
    sy: number,
    tx: number,
    ty: number,
    opts?: { forHero?: boolean; allowHazard?: boolean }
  ): Vec2[] | null {
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
      if (opts?.forHero && this.blocksHero(ax, ay)) continue;
      const p = this.findPath(sx, sy, ax, ay, opts);
      if (p && (!best || p.length < best.length)) best = p;
    }
    return best;
  }
}

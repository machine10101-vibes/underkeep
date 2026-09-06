import * as THREE from 'three';
import { Creature } from '../entities/Creature';
import { DungeonRenderer } from '../rendering/DungeonRenderer';
import { HUD, MENTOR_LINES } from '../ui/HUD';
import { Grid } from './Grid';
import {
  CREATURE_STATS,
  CreatureKind,
  JobType,
  MarkType,
  ROOM_COST,
  RoomType,
  SpellId,
  TILE_SIZE,
  ToolMode,
  Vec2,
  TileKind,
} from './types';
import {
  SaveData,
  clearSave,
  loadSave,
  packTiles,
  unpackTiles,
  writeSave,
} from './Save';

const WORKER_BASE_COST = 150;
const MANA_MAX_BASE = 100;
const SPEED_COST = 25;
const LIGHTNING_COST = 40;

export class Game {
  private grid: Grid;
  private renderer: DungeonRenderer;
  private hud: HUD;
  private creatures: Creature[] = [];
  private gold = 600;
  private mana = 50;
  private tool: ToolMode = 'select';
  private held: Creature | null = null;
  private gridDirty = true;
  private time = 0;
  private workerCostScale = 0;
  private portalCooldown = 0;
  private attracted = { skitterwing: false, rattlekin: false, emberling: false };
  private heroWaveSpawned = false;
  private heroWaveTimer = 90; // seconds until heroes
  private gameOver = false;
  private won = false;
  private paint = false;
  private lastPaint: Vec2 | null = null;
  private camTarget = new THREE.Vector3(0, 0, 0);
  private keys = new Set<string>();
  private mentored = new Set<string>();
  // touch / mobile
  private touchMode: 'none' | 'tap' | 'pan' | 'paint' | 'pinch' | 'longpress' = 'none';
  private touchStartTime = 0;
  private touchStartClient = { clientX: 0, clientY: 0 };
  private touchMoved = false;
  private longPressTimer: number | null = null;
  private pinchStartDist = 0;
  private pinchStartCamY = 0;
  private activeTouches = new Map<number, { clientX: number; clientY: number }>();
  private ignoreMouseUntil = 0;
  private panAccum = { x: 0, y: 0 };
  private saveAcc = 0;
  private restoredFromSave = false;

  constructor(canvas: HTMLCanvasElement) {
    this.grid = new Grid(40, 40);
    this.renderer = new DungeonRenderer(canvas);
    this.hud = new HUD();
    this.hud.onToolChange = (t) => {
      this.tool = t;
    };
    this.hud.onSpell = (s) => this.castSpell(s);
    this.hud.onOverlayContinue = () => {
      if (this.gameOver) {
        clearSave();
        location.reload();
      }
    };
    this.hud.onNewGame = () => this.confirmNewGame();

    const saved = loadSave();
    if (saved) {
      this.applySave(saved);
      this.restoredFromSave = true;
      this.hud.say(MENTOR_LINES.resume);
      // Skip intro — dungeon restored from localStorage
    } else {
      // starting workers
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x + 1, this.grid.heartPos.y);
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x - 1, this.grid.heartPos.y);
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x, this.grid.heartPos.y + 1);

      // ~55° elevated camera for DK2-style overview readability
      const hw = this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y);
      this.camTarget.set(hw.x, 0, hw.z);
      this.renderer.camera.position.set(hw.x + 4, 28, hw.z + 18);
      this.renderer.camera.lookAt(this.camTarget);

      this.hud.say(MENTOR_LINES.start);
      this.hud.showOverlay(
        'Underkeep',
        'You are the Keeper of the Underkeep. Dig earth, claim territory, raise rooms, and crush the heroes who dare enter. The Dungeon Heart must not fall.',
        'Begin'
      );
    }

    this.bindInput(canvas);
    this.rebuild();
    if (saved) this.saveNow();
  }

  private mentioneOnce(key: string, line: string): void {
    if (this.mentored.has(key)) return;
    this.mentored.add(key);
    this.hud.say(line);
  }

  private confirmNewGame(): void {
    this.hud.showOverlay(
      'New Game?',
      'This clears your saved dungeon and starts fresh. Hard refresh will no longer restore the old map.',
      'Keep Playing',
      'Erase & Restart'
    );
    // Secondary button already wired to onNewGame — temporarily rebind
    const prev = this.hud.onNewGame;
    const prevCont = this.hud.onOverlayContinue;
    this.hud.onOverlayContinue = () => {
      this.hud.onNewGame = prev;
      this.hud.onOverlayContinue = prevCont;
    };
    this.hud.onNewGame = () => {
      clearSave();
      location.reload();
    };
  }

  private buildSave(): SaveData {
    return {
      v: 1,
      width: this.grid.width,
      height: this.grid.height,
      heartPos: { ...this.grid.heartPos },
      tiles: packTiles(this.grid.tiles),
      gold: this.gold,
      mana: this.mana,
      creatures: this.creatures
        .filter((c) => c.alive)
        .map((c) => ({
          kind: c.kind,
          x: c.x,
          y: c.y,
          wx: c.wx,
          wz: c.wz,
          hp: c.hp,
          maxHp: c.maxHp,
          level: c.level,
          goldCarried: c.goldCarried,
          hunger: c.hunger,
          sleepNeed: c.sleepNeed,
          trainNeed: c.trainNeed,
          isHero: c.isHero,
        })),
      attracted: { ...this.attracted },
      heroWaveSpawned: this.heroWaveSpawned,
      heroWaveTimer: this.heroWaveTimer,
      workerCostScale: this.workerCostScale,
      portalCooldown: this.portalCooldown,
      time: this.time,
      wageAcc: this.wageAcc,
      mentored: [...this.mentored],
      gameOver: this.gameOver,
      won: this.won,
      cam: {
        tx: this.camTarget.x,
        tz: this.camTarget.z,
        cx: this.renderer.camera.position.x,
        cy: this.renderer.camera.position.y,
        cz: this.renderer.camera.position.z,
      },
    };
  }

  private saveNow(): void {
    if (this.gameOver) return;
    writeSave(this.buildSave());
  }

  private applySave(data: SaveData): void {
    if (data.width !== this.grid.width || data.height !== this.grid.height) {
      // size mismatch — ignore tiles but still try resources
    } else {
      unpackTiles(this.grid.tiles, data.tiles);
      this.grid.heartPos = { ...data.heartPos };
    }
    this.gold = data.gold;
    this.mana = data.mana;
    this.attracted = { ...data.attracted };
    this.heroWaveSpawned = !!data.heroWaveSpawned;
    this.heroWaveTimer = data.heroWaveTimer ?? 90;
    this.workerCostScale = data.workerCostScale ?? 0;
    this.portalCooldown = data.portalCooldown ?? 0;
    this.time = data.time ?? 0;
    this.wageAcc = data.wageAcc ?? 0;
    this.mentored = new Set(data.mentored ?? []);
    this.gameOver = !!data.gameOver;
    this.won = !!data.won;

    // Clear default creatures then respawn from save
    for (const c of this.creatures) {
      this.renderer.removeEntityMesh(c.mesh);
      if (c.mesh.parent) c.mesh.parent.remove(c.mesh);
    }
    this.creatures = [];
    for (const sc of data.creatures ?? []) {
      const c = this.spawnCreature(sc.kind, sc.x, sc.y);
      c.wx = sc.wx;
      c.wz = sc.wz;
      c.hp = sc.hp;
      c.maxHp = sc.maxHp;
      c.level = sc.level ?? 1;
      c.goldCarried = sc.goldCarried ?? 0;
      c.hunger = sc.hunger ?? 0;
      c.sleepNeed = sc.sleepNeed ?? 0;
      c.trainNeed = sc.trainNeed ?? 0;
      c.syncMesh(this.time);
    }
    if (data.cam) {
      this.camTarget.set(data.cam.tx, 0, data.cam.tz);
      this.renderer.camera.position.set(data.cam.cx, data.cam.cy, data.cam.cz);
      this.renderer.camera.lookAt(this.camTarget);
    } else {
      const hw = this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y);
      this.camTarget.set(hw.x, 0, hw.z);
      this.renderer.camera.position.set(hw.x + 4, 28, hw.z + 18);
      this.renderer.camera.lookAt(this.camTarget);
    }
  }

  private spawnCreature(kind: CreatureKind, x: number, y: number): Creature {
    const c = new Creature(kind, x, y, this.grid);
    const stats = CREATURE_STATS[kind];
    const mesh = this.renderer.createEntityVisual(
      kind,
      stats.color,
      stats.scale
    );
    c.setMesh(mesh);
    const extras = mesh as THREE.Group & { pickaxe?: THREE.Object3D; selectRing?: THREE.Object3D };
    c.pickaxe = extras.pickaxe ?? null;
    c.selectRing = extras.selectRing ?? null;
    this.renderer.addEntityMesh(mesh);
    this.creatures.push(c);
    return c;
  }

  private rebuild(): void {
    this.grid.refreshTorches();
    this.renderer.rebuildGrid(this.grid);
    this.gridDirty = false;
  }

  private bindInput(canvas: HTMLCanvasElement): void {
    window.addEventListener('keydown', (e) => {
      this.keys.add(e.key.toLowerCase());
      const map: Record<string, ToolMode> = {
        '1': 'select',
        '2': 'dig',
        '3': 'claim',
        '4': 'fortify',
        '5': 'treasury',
        '6': 'lair',
        '7': 'hatchery',
        '8': 'training',
        '9': 'library',
        '0': 'portal',
      };
      if (map[e.key]) {
        this.tool = map[e.key];
        this.hud.setActiveTool(this.tool);
      }
      if (e.key.toLowerCase() === 'q') this.castSpell('createWorker');
      if (e.key.toLowerCase() === 'e') this.castSpell('speed');
      if (e.key.toLowerCase() === 'r') this.castSpell('lightning');
      if (e.key.toLowerCase() === ' ' && this.held) {
        e.preventDefault();
        this.dropHeld();
      }
    });
    window.addEventListener('keyup', (e) => this.keys.delete(e.key.toLowerCase()));

    canvas.addEventListener('contextmenu', (e) => e.preventDefault());

    // Prevent browser scroll/zoom gestures on the game surface
    const blockGesture = (e: Event) => e.preventDefault();
    canvas.addEventListener('gesturestart', blockGesture as EventListener, { passive: false });
    canvas.addEventListener('gesturechange', blockGesture as EventListener, { passive: false });

    canvas.addEventListener('mousedown', (e) => {
      if (performance.now() < this.ignoreMouseUntil) return;
      if (this.gameOver) return;
      const tp = this.pointerToTile(e, canvas);
      if (!tp) return;
      const hit = this.pointerToWorld(e, canvas) ?? new THREE.Vector3();

      if (e.button === 2) {
        this.handleSecondaryAt(tp.x, tp.y);
        return;
      }

      if (e.button === 0) {
        this.handlePrimaryAt(tp.x, tp.y, hit);
      }
    });

    canvas.addEventListener('mouseup', () => {
      if (performance.now() < this.ignoreMouseUntil) return;
      this.paint = false;
      this.lastPaint = null;
    });

    canvas.addEventListener('mousemove', (e) => {
      if (performance.now() < this.ignoreMouseUntil) return;
      this.updatePointerHover(e, canvas);
      if (this.paint && this.tool !== 'select') {
        const tp = this.pointerToTile(e, canvas);
        if (!tp) return;
        if (!this.lastPaint || this.lastPaint.x !== tp.x || this.lastPaint.y !== tp.y) {
          this.applyTool(tp.x, tp.y);
          this.lastPaint = { ...tp };
        }
      }
      if (this.held) {
        const hit = this.pointerToWorld(e, canvas);
        if (hit) {
          this.held.wx = hit.x;
          this.held.wz = hit.z;
        }
      }
    });

    canvas.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.zoomBy(-Math.sign(e.deltaY) * 1.5);
    }, { passive: false });

    // --- Touch controls ---
    canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.ignoreMouseUntil = performance.now() + 600;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        this.activeTouches.set(t.identifier, { clientX: t.clientX, clientY: t.clientY });
      }
      const touches = [...this.activeTouches.values()];

      if (touches.length >= 2) {
        this.clearLongPress();
        // Two-finger: pinch zoom, or quick two-finger tap = secondary
        const [a, b] = touches;
        this.pinchStartDist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
        this.pinchStartCamY = this.renderer.camera.position.y;
        if (this.touchMode === 'tap' && !this.touchMoved && performance.now() - this.touchStartTime < 280) {
          // second finger arrived quickly → treat as two-finger tap (secondary)
          const tp = this.pointerToTile(this.touchStartClient, canvas);
          if (tp) {
            this.handleSecondaryAt(tp.x, tp.y);
          }
          this.touchMode = 'none';
          this.activeTouches.clear();
          return;
        }
        this.touchMode = 'pinch';
        this.paint = false;
        return;
      }

      if (touches.length === 1) {
        const p = touches[0];
        this.touchStartClient = { clientX: p.clientX, clientY: p.clientY };
        this.touchStartTime = performance.now();
        this.touchMoved = false;
        this.panAccum = { x: 0, y: 0 };
        this.touchMode = 'tap';

        // Long-press → secondary (slap / cancel / drop)
        this.clearLongPress();
        this.longPressTimer = window.setTimeout(() => {
          if (this.touchMode !== 'tap' || this.touchMoved) return;
          this.touchMode = 'longpress';
          const tp = this.pointerToTile(this.touchStartClient, canvas);
          if (tp) {
            this.handleSecondaryAt(tp.x, tp.y);
          }
          // haptic if available
          try { navigator.vibrate?.(15); } catch { /* ignore */ }
        }, 450);
      }
    }, { passive: false });

    canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      this.ignoreMouseUntil = performance.now() + 600;
      for (let i = 0; i < e.changedTouches.length; i++) {
        const t = e.changedTouches[i];
        this.activeTouches.set(t.identifier, { clientX: t.clientX, clientY: t.clientY });
      }
      const touches = [...this.activeTouches.values()];

      if (this.touchMode === 'pinch' || touches.length >= 2) {
        this.clearLongPress();
        this.touchMode = 'pinch';
        if (touches.length >= 2) {
          const [a, b] = touches;
          const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
          if (this.pinchStartDist > 0) {
            const ratio = dist / this.pinchStartDist;
            // pinch out = zoom in (lower cam Y toward ground along look dir)
            const cam = this.renderer.camera;
            const targetY = THREE.MathUtils.clamp(this.pinchStartCamY / ratio, 12, 45);
            const dy = targetY - cam.position.y;
            if (Math.abs(dy) > 0.01) {
              const dir = new THREE.Vector3();
              cam.getWorldDirection(dir);
              // move along view so look-at stays sensible
              cam.position.y = targetY;
              // nudge xz with height change for isometric feel
              const scale = dy * 0.35;
              cam.position.x += dir.x * -scale;
              cam.position.z += dir.z * -scale;
              cam.lookAt(this.camTarget.x, 0, this.camTarget.z);
            }
          }
        }
        return;
      }

      if (touches.length !== 1) return;
      const p = touches[0];
      const dx = p.clientX - this.touchStartClient.clientX;
      const dy = p.clientY - this.touchStartClient.clientY;
      const dist = Math.hypot(dx, dy);

      if (!this.touchMoved && dist > 12) {
        this.touchMoved = true;
        this.clearLongPress();

        if (this.tool !== 'select' && !this.held) {
          // paint with current tool
          this.touchMode = 'paint';
          this.paint = true;
          const tp = this.pointerToTile(p, canvas);
          if (tp) {
            this.applyTool(tp.x, tp.y);
            this.lastPaint = { ...tp };
          }
        } else if (this.held) {
          this.touchMode = 'tap'; // drag held creature
        } else {
          // pan camera on empty-space drag
          this.touchMode = 'pan';
        }
      }

      if (this.touchMode === 'paint') {
        const tp = this.pointerToTile(p, canvas);
        if (tp) {
          if (!this.lastPaint || this.lastPaint.x !== tp.x || this.lastPaint.y !== tp.y) {
            this.applyTool(tp.x, tp.y);
            this.lastPaint = { ...tp };
          }
          this.updatePointerHover(p, canvas);
        }
      } else if (this.touchMode === 'pan') {
        const moveDx = p.clientX - (this.touchStartClient.clientX + this.panAccum.x);
        const moveDy = p.clientY - (this.touchStartClient.clientY + this.panAccum.y);
        this.panAccum.x = dx;
        this.panAccum.y = dy;
        this.panCameraByScreen(-moveDx, -moveDy);
      } else if (this.held) {
        const hit = this.pointerToWorld(p, canvas);
        if (hit) {
          this.held.wx = hit.x;
          this.held.wz = hit.z;
        }
        this.updatePointerHover(p, canvas);
      } else {
        this.updatePointerHover(p, canvas);
      }
    }, { passive: false });

    canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.ignoreMouseUntil = performance.now() + 600;
      for (let i = 0; i < e.changedTouches.length; i++) {
        this.activeTouches.delete(e.changedTouches[i].identifier);
      }

      if (this.touchMode === 'pinch') {
        if (this.activeTouches.size < 2) {
          this.touchMode = this.activeTouches.size === 1 ? 'pan' : 'none';
          this.pinchStartDist = 0;
        }
        if (this.activeTouches.size === 0) {
          this.touchMode = 'none';
          this.paint = false;
          this.lastPaint = null;
        }
        return;
      }

      if (this.activeTouches.size > 0) return;

      const mode = this.touchMode;
      this.clearLongPress();

      if (mode === 'tap' && !this.touchMoved && !this.gameOver) {
        const tp = this.pointerToTile(this.touchStartClient, canvas);
        const hit = this.pointerToWorld(this.touchStartClient, canvas);
        if (tp && hit) {
          this.handlePrimaryAt(tp.x, tp.y, hit);
        }
      }

      this.touchMode = 'none';
      this.paint = false;
      this.lastPaint = null;
    }, { passive: false });

    canvas.addEventListener('touchcancel', (e) => {
      for (let i = 0; i < e.changedTouches.length; i++) {
        this.activeTouches.delete(e.changedTouches[i].identifier);
      }
      this.clearLongPress();
      this.touchMode = 'none';
      this.paint = false;
      this.lastPaint = null;
      this.pinchStartDist = 0;
    });

    // Dedicated pan zone (mobile)
    const panZone = document.getElementById('pan-zone');
    if (panZone) {
      let panLast: { x: number; y: number } | null = null;
      panZone.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const t = e.changedTouches[0];
        panLast = { x: t.clientX, y: t.clientY };
      }, { passive: false });
      panZone.addEventListener('touchmove', (e) => {
        e.preventDefault();
        const t = e.changedTouches[0];
        if (!panLast) {
          panLast = { x: t.clientX, y: t.clientY };
          return;
        }
        this.panCameraByScreen(-(t.clientX - panLast.x), -(t.clientY - panLast.y));
        panLast = { x: t.clientX, y: t.clientY };
      }, { passive: false });
      panZone.addEventListener('touchend', () => { panLast = null; });
      panZone.addEventListener('touchcancel', () => { panLast = null; });
    }
  }

  private clearLongPress(): void {
    if (this.longPressTimer !== null) {
      clearTimeout(this.longPressTimer);
      this.longPressTimer = null;
    }
  }

  private handlePrimaryAt(tx: number, ty: number, hit: THREE.Vector3): void {
    if (this.tool === 'select') {
      if (this.held) {
        this.dropHeldAt(tx, ty);
        return;
      }
      const c = this.creatureAt(tx, ty);
      if (c && !c.isHero) {
        this.pickUp(c);
        return;
      }
    } else {
      this.paint = true;
      this.applyTool(tx, ty);
      this.lastPaint = { x: tx, y: ty };
    }
    void hit;
  }

  private handleSecondaryAt(tx: number, ty: number): void {
    if (this.held) {
      this.dropHeld();
      return;
    }
    const c = this.creatureAt(tx, ty);
    if (c && !c.isHero) {
      this.slap(c);
    } else {
      const tile = this.grid.get(tx, ty);
      if (tile && tile.mark !== MarkType.None) {
        tile.mark = MarkType.None;
        this.gridDirty = true;
      }
    }
  }

  private updatePointerHover(e: { clientX: number; clientY: number }, canvas: HTMLCanvasElement): void {
    const tp = this.pointerToTile(e, canvas);
    if (!tp || !this.grid.inBounds(tp.x, tp.y)) {
      this.renderer.setHover(0, 0, false);
      return;
    }
    const w = this.grid.tileToWorld(tp.x, tp.y);
    this.renderer.setHover(w.x, w.z, true, this.toolColor());
    const tile = this.grid.get(tp.x, tp.y);
    if (tile) {
      const room =
        tile.room !== RoomType.None ? ` · ${['', 'Treasury', 'Lair', 'Hatchery', 'Training', 'Library', 'Portal'][tile.room]}` : '';
      const dig = tile.digProgress > 0 ? ` · dig ${Math.floor(tile.digProgress * 100)}%` : '';
      this.hud.setTooltip(`(${tp.x},${tp.y}) ${TileKind[tile.kind]}${tile.fortified ? ' [fortified]' : ''}${room}${dig}`);
    }
  }

  private panCameraByScreen(dx: number, dy: number): void {
    const cam = this.renderer.camera;
    const forward = new THREE.Vector3();
    cam.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const scale = cam.position.y * 0.0028;
    const move = right.multiplyScalar(dx * scale).add(forward.multiplyScalar(-dy * scale));
    cam.position.add(move);
    this.camTarget.add(move);
    cam.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }

  private zoomBy(amount: number): void {
    const cam = this.renderer.camera;
    const dir = new THREE.Vector3();
    cam.getWorldDirection(dir);
    cam.position.addScaledVector(dir, amount);
    cam.position.y = THREE.MathUtils.clamp(cam.position.y, 12, 45);
    cam.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }

  private pointerNdc(
    e: MouseEvent | PointerEvent | { clientX: number; clientY: number },
    canvas: HTMLCanvasElement
  ): { nx: number; ny: number } {
    const rect = canvas.getBoundingClientRect();
    return {
      nx: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      ny: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    };
  }

  private pointerToWorld(
    e: MouseEvent | PointerEvent | { clientX: number; clientY: number },
    canvas: HTMLCanvasElement
  ): THREE.Vector3 | null {
    const { nx, ny } = this.pointerNdc(e, canvas);
    const hit = this.renderer.pickTile(nx, ny);
    if (!hit) return null;
    return new THREE.Vector3(hit.x, 0, hit.z);
  }

  /** Height-aware tile pick — dig marks land on intended earth tops, not unreachable tiles behind. */
  private pointerToTile(
    e: MouseEvent | PointerEvent | { clientX: number; clientY: number },
    canvas: HTMLCanvasElement
  ): Vec2 | null {
    const { nx, ny } = this.pointerNdc(e, canvas);
    const hit = this.renderer.pickTile(nx, ny);
    if (!hit) return null;
    if (typeof hit.tileX === 'number' && typeof hit.tileY === 'number') {
      return { x: hit.tileX, y: hit.tileY };
    }
    return this.grid.worldToTile(hit.x, hit.z);
  }

  private toolColor(): number {
    switch (this.tool) {
      case 'dig':
        return 0xff4422;
      case 'claim':
        return 0x4488ff;
      case 'fortify':
        return 0xaaaaaa;
      case 'select':
        return 0xffcc66;
      default:
        return 0x88ff66;
    }
  }

  private creatureAt(x: number, y: number): Creature | null {
    let best: Creature | null = null;
    let bestD = 1.2;
    for (const c of this.creatures) {
      if (!c.alive || c.held) continue;
      const d = Math.hypot(c.x - x, c.y - y);
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }

  private applyTool(x: number, y: number): void {
    const tile = this.grid.get(x, y);
    if (!tile) return;

    if (this.tool === 'dig') {
      if (this.grid.isDiggable(x, y)) {
        tile.mark = MarkType.Dig;
        if (tile.digProgress <= 0) tile.digProgress = 0;
        this.gridDirty = true;
      }
    } else if (this.tool === 'claim') {
      if (tile.kind === TileKind.Dirt) {
        tile.mark = MarkType.Claim;
        this.gridDirty = true;
      }
    } else if (this.tool === 'fortify') {
      if (
        (tile.kind === TileKind.Earth || tile.kind === TileKind.Gold) &&
        this.grid.hasAdjacentClaimed(x, y)
      ) {
        tile.mark = MarkType.Fortify;
        this.gridDirty = true;
      }
    } else {
      const roomMap: Partial<Record<ToolMode, RoomType>> = {
        treasury: RoomType.Treasury,
        lair: RoomType.Lair,
        hatchery: RoomType.Hatchery,
        training: RoomType.Training,
        library: RoomType.Library,
        portal: RoomType.Portal,
      };
      const room = roomMap[this.tool];
      if (room && tile.kind === TileKind.Claimed && tile.room === RoomType.None) {
        const cost = ROOM_COST[room];
        if (this.gold >= cost) {
          this.gold -= cost;
          tile.room = room;
          this.gridDirty = true;
          this.mentioneOnce('firstRoom', MENTOR_LINES.firstRoom);
          if (room === RoomType.Portal) this.mentioneOnce('portal', MENTOR_LINES.portal);
          this.saveNow();
        }
      }
    }
  }

  private pickUp(c: Creature): void {
    c.held = true;
    c.setPath(null);
    c.job = JobType.Idle;
    this.held = c;
  }

  private dropHeld(): void {
    if (!this.held) return;
    const tp = this.grid.worldToTile(this.held.wx, this.held.wz);
    this.dropHeldAt(tp.x, tp.y);
  }

  private dropHeldAt(x: number, y: number): void {
    const c = this.held;
    if (!c) return;
    if (!this.grid.isWalkable(x, y) && !(this.grid.get(x, y)?.kind === TileKind.Heart)) {
      // find nearby walkable
      let placed = false;
      for (let r = 0; r < 4 && !placed; r++) {
        for (let dy = -r; dy <= r && !placed; dy++) {
          for (let dx = -r; dx <= r && !placed; dx++) {
            if (this.grid.isWalkable(x + dx, y + dy)) {
              x = x + dx;
              y = y + dy;
              placed = true;
            }
          }
        }
      }
      if (!placed) return;
    }
    c.held = false;
    c.x = x;
    c.y = y;
    const w = this.grid.tileToWorld(x, y);
    c.wx = w.x;
    c.wz = w.z;

    // stun if dropped into fight (near enemy)
    const nearEnemy = this.creatures.some(
      (o) =>
        o.alive &&
        o !== c &&
        o.isHero !== c.isHero &&
        Math.hypot(o.x - x, o.y - y) < 2.5
    );
    if (nearEnemy) {
      c.stunTimer = 1.5;
    }
    this.held = null;
  }

  private slap(c: Creature): void {
    c.speedBuff = Math.max(c.speedBuff, 2.5);
    c.sleepNeed = Math.max(0, c.sleepNeed - 10);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.5, c.wz), 0xffee88, 0.4);
    this.mentioneOnce('slap', MENTOR_LINES.slap);
  }

  private workerCost(): number {
    return WORKER_BASE_COST + this.workerCostScale * 50;
  }

  private castSpell(spell: SpellId): void {
    if (this.gameOver) return;
    if (spell === 'createWorker') {
      const cost = this.workerCost();
      if (this.gold < cost) return;
      // spawn near heart on claimed
      const hx = this.grid.heartPos.x;
      const hy = this.grid.heartPos.y;
      let sx = hx;
      let sy = hy;
      for (let r = 1; r < 6; r++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dx = -r; dx <= r; dx++) {
            if (this.grid.isWalkable(hx + dx, hy + dy)) {
              sx = hx + dx;
              sy = hy + dy;
              r = 99;
              break;
            }
          }
        }
      }
      this.gold -= cost;
      this.workerCostScale++;
      this.spawnCreature(CreatureKind.Scrabbler, sx, sy);
      this.hud.say(MENTOR_LINES.worker);
      return;
    }
    if (spell === 'speed') {
      if (this.mana < SPEED_COST) return;
      this.mana -= SPEED_COST;
      for (const c of this.creatures) {
        if (c.alive && !c.isHero) c.speedBuff = Math.max(c.speedBuff, 6);
      }
      this.hud.say(MENTOR_LINES.speed);
      return;
    }
    if (spell === 'lightning') {
      if (this.mana < LIGHTNING_COST) return;
      // strike nearest hero to cursor/heart
      const heroes = this.creatures.filter((c) => c.alive && c.isHero);
      if (!heroes.length) return;
      this.mana -= LIGHTNING_COST;
      const target = heroes.reduce((a, b) => {
        const da = Math.hypot(a.x - this.grid.heartPos.x, a.y - this.grid.heartPos.y);
        const db = Math.hypot(b.x - this.grid.heartPos.x, b.y - this.grid.heartPos.y);
        return da < db ? a : b;
      });
      target.takeDamage(45);
      const from = new THREE.Vector3(
        this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y).x,
        4,
        this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y).z
      );
      this.renderer.spawnLightning(from, new THREE.Vector3(target.wx, 1, target.wz));
      this.hud.say(MENTOR_LINES.lightning);
    }
  }

  private maxMana(): number {
    return MANA_MAX_BASE + Math.floor(this.grid.countClaimed() * 0.5);
  }



  /** QA/screenshot: multi-room identity + rock/earth/gold + pickaxe swing. */
  preparePass4Shot(): void {
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;

    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.fortified = false;
      t.room = room;
    };

    // Open plaza south/east of heart for rooms
    for (let x = hx - 1; x <= hx + 5; x++) {
      for (let y = hy - 1; y <= hy + 4; y++) {
        claim(x, y);
      }
    }
    // Distinct rooms
    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    claim(hx + 2, hy + 1, RoomType.Lair);
    claim(hx + 3, hy + 1, RoomType.Lair);
    claim(hx + 2, hy + 2, RoomType.Training);
    claim(hx + 3, hy + 2, RoomType.Training);
    claim(hx + 4, hy, RoomType.Hatchery);
    claim(hx + 4, hy + 1, RoomType.Library);
    claim(hx + 4, hy + 2, RoomType.Portal);

    // Rock | Earth | Gold strip on dig face — unmistakable at overview
    const faceY = hy - 3;
    for (let i = 0; i < 2; i++) {
      const rock = this.grid.get(hx - 1 + i, faceY);
      if (rock) {
        rock.kind = TileKind.Rock;
        rock.fortified = false;
        rock.mark = MarkType.None;
        rock.room = RoomType.None;
        rock.digProgress = 0;
        rock.goldAmount = 0;
      }
    }
    for (let i = 0; i < 2; i++) {
      const earth = this.grid.get(hx + 1 + i, faceY);
      if (earth) {
        earth.kind = TileKind.Earth;
        earth.fortified = false;
        earth.mark = MarkType.Dig;
        earth.digProgress = i === 0 ? 0.4 : 0.15;
        earth.room = RoomType.None;
        earth.goldAmount = 0;
      }
    }
    for (let i = 0; i < 3; i++) {
      const gold = this.grid.get(hx + 3 + i, faceY);
      if (gold) {
        gold.kind = TileKind.Gold;
        gold.goldAmount = 400;
        gold.fortified = false;
        gold.mark = MarkType.Dig;
        gold.digProgress = 0.08;
        gold.room = RoomType.None;
      }
    }
    // Corridor to dig face
    for (let x = hx - 1; x <= hx + 5; x++) {
      claim(x, hy - 2);
    }

    // Workers swinging at earth — force mid-swing pose for evidence shot
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    const digTarget = { x: hx + 1, y: faceY };
    for (let i = 0; i < workers.length; i++) {
      const w = workers[i];
      const tx = hx + (i % 3);
      const ty = hy - 2;
      const world = this.grid.tileToWorld(tx, ty);
      w.x = tx;
      w.y = ty;
      w.wx = world.x + (i - 1) * 0.15;
      w.wz = world.z;
      w.job = JobType.Dig;
      w.jobTarget = digTarget;
      w.workTimer = 0.25;
      w.digAnim = 0.4 + i * 0.35;
      w.setPath(null);
      // Face the dig block and apply one sync so pickaxe is mid-arc
      const tw = this.grid.tileToWorld(digTarget.x, digTarget.y);
      w.mesh.lookAt(tw.x, w.mesh.position.y, tw.z);
      w.syncMesh(this.time + 0.5);
      if (w.pickaxe) {
        const wave = Math.sin(w.digAnim * 11);
        w.pickaxe.rotation.x = -0.9 + wave * 1.35;
        w.pickaxe.rotation.z = 0.15 + wave * 0.55;
        w.pickaxe.visible = true;
      }
      if (w.selectRing) w.selectRing.visible = true;
    }

    this.gold = Math.max(this.gold, 800);
    this.grid.refreshTorches();
    this.gridDirty = true;
    this.rebuild();
    this.saveNow();

    const focus = this.grid.tileToWorld(hx + 2, hy);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 3, 24, focus.z + 14);
    this.renderer.camera.lookAt(this.camTarget);
  }

  /** QA/screenshot: dig-in-progress + claimed stone + Treasury props in frame. */
  preparePass3Shot(): void {
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;

    // Carve a small wing west of heart and claim it
    const wing: Vec2[] = [];
    for (let x = hx - 6; x <= hx - 3; x++) {
      for (let y = hy - 1; y <= hy + 1; y++) {
        const t = this.grid.get(x, y);
        if (!t || t.kind === TileKind.Rock || t.kind === TileKind.Heart) continue;
        t.kind = TileKind.Claimed;
        t.claimedProgress = 1;
        t.mark = MarkType.None;
        t.digProgress = 0;
        t.fortified = false;
        wing.push({ x, y });
      }
    }
    // Treasury on two tiles
    for (const pos of wing.slice(0, 2)) {
      const t = this.grid.get(pos.x, pos.y)!;
      t.room = RoomType.Treasury;
    }
    // Dirt strip waiting to show contrast next to claimed
    for (let y = hy - 1; y <= hy + 1; y++) {
      const t = this.grid.get(hx - 2, y);
      if (t && t.kind !== TileKind.Heart) {
        t.kind = TileKind.Dirt;
        t.room = RoomType.None;
        t.mark = MarkType.None;
      }
    }
    // Dig-in-progress blocks north of corridor
    const digTargets = [
      { x: hx - 1, y: hy - 4 },
      { x: hx, y: hy - 4 },
      { x: hx + 1, y: hy - 4 },
      { x: hx - 1, y: hy - 5 },
    ];
    for (const [i, pos] of digTargets.entries()) {
      const t = this.grid.get(pos.x, pos.y);
      if (!t) continue;
      t.kind = TileKind.Earth;
      t.fortified = false;
      t.mark = MarkType.Dig;
      t.digProgress = i === 1 ? 0.72 : i === 0 ? 0.45 : i === 2 ? 0.28 : 0.12;
      t.room = RoomType.None;
    }
    // Ensure corridor to dig targets is claimed
    for (let y = hy - 3; y <= hy - 1; y++) {
      for (let x = hx - 1; x <= hx + 1; x++) {
        const t = this.grid.get(x, y);
        if (t && t.kind !== TileKind.Heart && t.kind !== TileKind.Rock) {
          if (t.kind === TileKind.Earth || t.kind === TileKind.Gold) {
            t.kind = TileKind.Claimed;
            t.claimedProgress = 1;
            t.mark = MarkType.None;
            t.digProgress = 0;
          }
        }
      }
    }

    // Park workers at dig face
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    for (let i = 0; i < workers.length; i++) {
      const w = workers[i];
      const tx = hx - 1 + (i % 3);
      const ty = hy - 3;
      const world = this.grid.tileToWorld(tx, ty);
      w.x = tx;
      w.y = ty;
      w.wx = world.x;
      w.wz = world.z;
      w.job = JobType.Idle;
      w.jobTarget = digTargets[Math.min(i, digTargets.length - 1)];
      w.workTimer = 0.15;
      w.setPath(null);
      // Show work pose without completing excavation during the shot
      w.job = JobType.Dig;
      if (w.selectRing) w.selectRing.visible = true;
    }

    this.grid.refreshTorches();
    this.gridDirty = true;
    this.rebuild();

    // Keep dig-in-progress blocks visible for evidence (don't let AI finish them instantly)
    for (const [i, pos] of digTargets.entries()) {
      const tile = this.grid.get(pos.x, pos.y);
      if (!tile) continue;
      tile.kind = TileKind.Earth;
      tile.mark = MarkType.Dig;
      tile.digProgress = i === 1 ? 0.72 : i === 0 ? 0.48 : i === 2 ? 0.3 : 0.15;
      tile.fortified = false;
    }
    this.rebuild();
    // Spawn dust near dig face
    for (const pos of digTargets.slice(0, 2)) {
      const w = this.grid.tileToWorld(pos.x, pos.y);
      this.renderer.spawnDigDebris(w.x, w.z, 0xc08040);
    }

    // Frame the action
    const focus = this.grid.tileToWorld(hx - 2, hy - 2);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 5, 26, focus.z + 16);
    this.renderer.camera.lookAt(this.camTarget);
  }

  update(dt: number): void {
    if (!this.gameOver) {
      this.time += dt;
      this.updateCamera(dt);
      this.regenMana(dt);
      this.assignJobs();
      this.updateCreatures(dt);
      this.updatePortal(dt);
      this.updateHeroWave(dt);
      this.checkHeart();
      this.payWages(dt);
      this.saveAcc += dt;
      if (this.saveAcc >= 4) {
        this.saveAcc = 0;
        this.saveNow();
      }
    }

    if (this.gridDirty) this.rebuild();

    for (const c of this.creatures) {
      if (c.alive) c.syncMesh(this.time);
      else c.mesh.visible = false;
    }

    this.renderer.update(dt);
    this.hud.update(dt);
    this.hud.updateStats(
      this.gold,
      this.mana,
      this.maxMana(),
      this.creatures.filter((c) => c.alive && c.isWorker).length,
      this.creatures.filter((c) => c.alive && !c.isWorker && !c.isHero).length
    );
    this.hud.setSpellAffordable('createWorker', this.gold >= this.workerCost());
    this.hud.setSpellAffordable('speed', this.mana >= SPEED_COST);
    this.hud.setSpellAffordable('lightning', this.mana >= LIGHTNING_COST);

    // cleanup dead meshes periodically
    this.creatures = this.creatures.filter((c) => {
      if (!c.alive) {
        this.renderer.removeEntityMesh(c.mesh);
        return false;
      }
      return true;
    });
  }

  private wageAcc = 0;
  private payWages(dt: number): void {
    this.wageAcc += dt;
    if (this.wageAcc < 10) return;
    this.wageAcc = 0;
    let due = 0;
    for (const c of this.creatures) {
      if (!c.alive || c.isHero || c.isWorker) continue;
      due += CREATURE_STATS[c.kind].goldWage;
    }
    if (due > 0) {
      this.gold = Math.max(0, this.gold - due);
    }
  }

  private updateCamera(dt: number): void {
    const cam = this.renderer.camera;
    const speed = 18;
    const forward = new THREE.Vector3();
    cam.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();
    const right = new THREE.Vector3().crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
    const move = new THREE.Vector3();
    if (this.keys.has('w') || this.keys.has('arrowup')) move.add(forward);
    if (this.keys.has('s') || this.keys.has('arrowdown')) move.sub(forward);
    if (this.keys.has('a') || this.keys.has('arrowleft')) move.sub(right);
    if (this.keys.has('d') || this.keys.has('arrowright')) move.add(right);
    if (move.lengthSq() > 0) {
      move.normalize().multiplyScalar(speed * dt);
      cam.position.add(move);
      this.camTarget.add(move);
      cam.lookAt(this.camTarget.x, 0, this.camTarget.z);
    }
  }

  private regenMana(dt: number): void {
    const claimed = this.grid.countClaimed();
    const rate = 2 + claimed * 0.08;
    this.mana = Math.min(this.maxMana(), this.mana + rate * dt);
  }

  private assignJobs(): void {
    const workers = this.creatures.filter((c) => c.alive && c.isWorker && !c.held && c.stunTimer <= 0);
    // heroes force flee
    for (const w of workers) {
      const threat = this.creatures.find(
        (h) => h.alive && h.isHero && Math.hypot(h.x - w.x, h.y - w.y) < 5
      );
      if (threat) {
        w.job = JobType.Flee;
        w.fleeTimer = 2;
        const dx = w.x - threat.x;
        const dy = w.y - threat.y;
        const fx = Math.max(0, Math.min(this.grid.width - 1, w.x + Math.sign(dx || 1) * 3));
        const fy = Math.max(0, Math.min(this.grid.height - 1, w.y + Math.sign(dy || 1) * 3));
        // path to nearest walkable near flee point
        let best: Vec2 | null = null;
        for (let r = 0; r < 5 && !best; r++) {
          for (let oy = -r; oy <= r && !best; oy++) {
            for (let ox = -r; ox <= r && !best; ox++) {
              if (this.grid.isWalkable(fx + ox, fy + oy)) best = { x: fx + ox, y: fy + oy };
            }
          }
        }
        if (best) w.setPath(this.grid.findPath(w.x, w.y, best.x, best.y));
        continue;
      }
    }

    const digMarks: Vec2[] = [];
    const claimMarks: Vec2[] = [];
    const fortMarks: Vec2[] = [];
    for (const t of this.grid.tiles) {
      if (t.mark === MarkType.Dig && this.grid.isDiggable(t.x, t.y)) digMarks.push({ x: t.x, y: t.y });
      if (t.mark === MarkType.Claim && t.kind === TileKind.Dirt) claimMarks.push({ x: t.x, y: t.y });
      if (t.mark === MarkType.Fortify && !t.fortified) fortMarks.push({ x: t.x, y: t.y });
    }

    const claimedTargets = new Set<string>();
    for (const w of workers) {
      if (w.jobTarget && (w.job === JobType.Dig || w.job === JobType.Mine || w.job === JobType.Claim || w.job === JobType.Fortify)) {
        claimedTargets.add(`${w.jobTarget.x},${w.jobTarget.y}`);
      }
      // Unstick: dig/mine job whose mark vanished or became unreachable
      if (
        (w.job === JobType.Dig || w.job === JobType.Mine) &&
        w.jobTarget &&
        (!this.grid.get(w.jobTarget.x, w.jobTarget.y) ||
          this.grid.get(w.jobTarget.x, w.jobTarget.y)!.mark !== MarkType.Dig ||
          !this.grid.isDiggable(w.jobTarget.x, w.jobTarget.y))
      ) {
        w.job = JobType.Idle;
        w.jobTarget = null;
        w.setPath(null);
      }
    }

    const idle = workers.filter((w) => w.job === JobType.Idle || (w.job === JobType.Flee && w.fleeTimer <= 0));
    for (const w of idle) {
      w.job = JobType.Idle;
      w.jobTarget = null;
      let assigned = false;

      // Prefer nearest reachable dig marks (edge of cavern first)
      const digSorted = digMarks
        .map((m) => ({ m, d: Math.abs(m.x - w.x) + Math.abs(m.y - w.y) }))
        .sort((a, b) => a.d - b.d);
      for (const { m } of digSorted) {
        const key = `${m.x},${m.y}`;
        if (claimedTargets.has(key)) continue;
        if (!this.grid.isReachableSolid(m.x, m.y)) continue;
        const tile = this.grid.get(m.x, m.y)!;
        const path = this.grid.findPathAdjacent(w.x, w.y, m.x, m.y);
        if (!path) continue;
        w.job = tile.kind === TileKind.Gold ? JobType.Mine : JobType.Dig;
        w.jobTarget = m;
        w.setPath(path);
        w.workTimer = 0;
        claimedTargets.add(key);
        assigned = true;
        break;
      }
      if (assigned) continue;

      const claimSorted = claimMarks
        .map((m) => ({ m, d: Math.abs(m.x - w.x) + Math.abs(m.y - w.y) }))
        .sort((a, b) => a.d - b.d);
      for (const { m } of claimSorted) {
        const key = `${m.x},${m.y}`;
        if (claimedTargets.has(key)) continue;
        const path = this.grid.findPath(w.x, w.y, m.x, m.y);
        if (!path) continue;
        w.job = JobType.Claim;
        w.jobTarget = m;
        w.setPath(path);
        w.workTimer = 0;
        claimedTargets.add(key);
        assigned = true;
        break;
      }
      if (assigned) continue;

      for (const m of fortMarks) {
        const key = `${m.x},${m.y}`;
        if (claimedTargets.has(key)) continue;
        if (!this.grid.isReachableSolid(m.x, m.y)) continue;
        const path = this.grid.findPathAdjacent(w.x, w.y, m.x, m.y);
        if (!path) continue;
        w.job = JobType.Fortify;
        w.jobTarget = m;
        w.setPath(path);
        w.workTimer = 0;
        claimedTargets.add(key);
        assigned = true;
        break;
      }
      if (!assigned && w.goldCarried > 0) {
        const treasury = this.grid.tiles.find((t) => t.room === RoomType.Treasury);
        const tx = treasury?.x ?? this.grid.heartPos.x;
        const ty = treasury?.y ?? this.grid.heartPos.y;
        const path = this.grid.findPath(w.x, w.y, tx, ty);
        if (path) {
          w.job = JobType.Haul;
          w.jobTarget = { x: tx, y: ty };
          w.setPath(path);
        }
      }
    }

    // non-worker jobs: eat / sleep / train / fight
    for (const c of this.creatures) {
      if (!c.alive || c.isWorker || c.isHero || c.held || c.stunTimer > 0) continue;
      // fight if hero near
      const enemy = this.creatures.find(
        (h) => h.alive && h.isHero && Math.hypot(h.x - c.x, h.y - c.y) < 10
      );
      if (enemy) {
        c.job = JobType.Fight;
        c.jobTarget = { x: enemy.x, y: enemy.y };
        if (Math.hypot(c.x - enemy.x, c.y - enemy.y) > 1.2) {
          const path = this.grid.findPath(c.x, c.y, enemy.x, enemy.y);
          if (path) c.setPath(path);
        } else {
          c.setPath(null);
        }
        continue;
      }

      c.hunger += 0.3;
      c.sleepNeed += 0.2;
      c.trainNeed += 0.15;

      if (c.job === JobType.Fight) {
        c.job = JobType.Idle;
      }

      if (c.hunger > 40 && this.grid.countRoom(RoomType.Hatchery) > 0) {
        const t = this.findRoomTile(RoomType.Hatchery);
        if (t) {
          c.job = JobType.Eat;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }
      if (c.sleepNeed > 50 && this.grid.countRoom(RoomType.Lair) > 0) {
        const t = this.findRoomTile(RoomType.Lair);
        if (t) {
          c.job = JobType.Sleep;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }
      if (c.trainNeed > 35 && this.grid.countRoom(RoomType.Training) > 0 && c.level < 4) {
        const t = this.findRoomTile(RoomType.Training);
        if (t) {
          c.job = JobType.Train;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }
      if (c.job === JobType.Idle || c.path.length === 0) {
        // wander claimed
        if (Math.random() < 0.01) {
          const claimed = this.grid.tiles.filter((t) => t.kind === TileKind.Claimed);
          if (claimed.length) {
            const t = claimed[Math.floor(Math.random() * claimed.length)];
            c.job = JobType.Wander;
            c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          }
        }
      }
    }

    // heroes path to heart
    for (const h of this.creatures) {
      if (!h.alive || !h.isHero || h.stunTimer > 0) continue;
      const minion = this.creatures.find(
        (c) => c.alive && !c.isHero && !c.isWorker && Math.hypot(c.x - h.x, c.y - h.y) < 6
      );
      if (minion) {
        h.job = JobType.Fight;
        h.jobTarget = { x: minion.x, y: minion.y };
        if (Math.hypot(h.x - minion.x, h.y - minion.y) > 1.2) {
          h.setPath(this.grid.findPath(h.x, h.y, minion.x, minion.y));
        } else h.setPath(null);
      } else {
        h.job = JobType.Fight;
        const hx = this.grid.heartPos.x;
        const hy = this.grid.heartPos.y;
        if (h.path.length === 0 || Math.random() < 0.02) {
          // path toward heart — may need to dig? heroes walk claimed/dirt only; if blocked, path as far as possible
          const path = this.grid.findPath(h.x, h.y, hx, hy);
          if (path) h.setPath(path);
          else {
            // approach nearest walkable toward heart
            let best: Vec2 | null = null;
            let bestD = Infinity;
            for (const t of this.grid.tiles) {
              if (!this.grid.isWalkable(t.x, t.y) && t.kind !== TileKind.Heart) continue;
              const d = Math.hypot(t.x - hx, t.y - hy);
              const from = Math.hypot(t.x - h.x, t.y - h.y);
              if (d < bestD && from < 20) {
                bestD = d;
                best = { x: t.x, y: t.y };
              }
            }
            if (best) h.setPath(this.grid.findPath(h.x, h.y, best.x, best.y));
          }
        }
      }
    }
  }

  private findRoomTile(room: RoomType): Vec2 | null {
    const tiles = this.grid.tiles.filter((t) => t.room === room);
    if (!tiles.length) return null;
    const t = tiles[Math.floor(Math.random() * tiles.length)];
    return { x: t.x, y: t.y };
  }

  private updateCreatures(dt: number): void {
    for (const c of this.creatures) {
      if (!c.alive || c.held) continue;
      if (c.stunTimer > 0) {
        c.stunTimer -= dt;
        continue;
      }
      if (c.speedBuff > 0) c.speedBuff -= dt;
      if (c.fleeTimer > 0) c.fleeTimer -= dt;
      if (c.attackCooldown > 0) c.attackCooldown -= dt;

      const arrived = c.moveAlongPath(dt, this.grid);

      if (c.isWorker) {
        this.updateWorkerJob(c, dt, arrived);
      } else if (!c.isHero) {
        this.updateMinionJob(c, dt, arrived);
      } else {
        this.updateHeroJob(c, dt);
      }
    }
  }

  private updateWorkerJob(c: Creature, dt: number, arrived: boolean): void {
    if (c.job === JobType.Flee) {
      if (arrived || c.fleeTimer <= 0) {
        c.job = JobType.Idle;
        c.setPath(null);
      }
      return;
    }
    if (!c.jobTarget) return;
    const t = this.grid.get(c.jobTarget.x, c.jobTarget.y);
    if (!t) {
      c.job = JobType.Idle;
      return;
    }

    if (c.job === JobType.Dig || c.job === JobType.Mine) {
      if (!arrived && c.pathIndex < c.path.length) return;
      // Must stand on an orthogonal neighbor
      const manhattan = Math.abs(c.x - t.x) + Math.abs(c.y - t.y);
      if (manhattan !== 1 && Math.hypot(c.x - t.x, c.y - t.y) > 1.55) {
        const path = this.grid.findPathAdjacent(c.x, c.y, t.x, t.y);
        if (path) c.setPath(path);
        else {
          c.job = JobType.Idle;
          c.jobTarget = null;
        }
        return;
      }
      // Face the block and chip
      const tw = this.grid.tileToWorld(t.x, t.y);
      c.mesh.lookAt(tw.x, c.mesh.position.y, tw.z);
      c.workTimer += dt;
      // Chip cadence ~0.35s; earth fully dug after ~3 chips (~1.05s)
      if (c.workTimer >= 0.35) {
        c.workTimer = 0;
        const wpos = this.grid.tileToWorld(t.x, t.y);
        this.renderer.spawnDigDebris(wpos.x, wpos.z, t.kind === TileKind.Gold ? 0xe0b040 : 0xc08040);
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.4, c.wz), 0xd0a060, 0.25);

        if (t.kind === TileKind.Gold) {
          const mined = Math.min(40, t.goldAmount);
          t.goldAmount -= mined;
          c.goldCarried += mined;
          t.digProgress = Math.min(1, t.digProgress + 0.2);
          this.gridDirty = true;
          this.mentioneOnce('firstGold', MENTOR_LINES.firstGold);
          if (t.goldAmount <= 0) {
            t.kind = TileKind.Dirt;
            t.mark = MarkType.None;
            t.goldAmount = 0;
            t.digProgress = 0;
            this.gridDirty = true;
            c.job = JobType.Idle;
            c.jobTarget = null;
          }
        } else if (t.kind === TileKind.Earth) {
          t.digProgress = Math.min(1, t.digProgress + 0.34);
          this.gridDirty = true;
          if (t.digProgress >= 1) {
            t.kind = TileKind.Dirt;
            t.mark = MarkType.None;
            t.digProgress = 0;
            this.gridDirty = true;
            c.job = JobType.Idle;
            c.jobTarget = null;
            this.saveNow();
          }
        } else {
          t.mark = MarkType.None;
          t.digProgress = 0;
          c.job = JobType.Idle;
          c.jobTarget = null;
          this.gridDirty = true;
        }
      }
    } else if (c.job === JobType.Claim) {
      if (!arrived && c.pathIndex < c.path.length) return;
      if (Math.hypot(c.x - t.x, c.y - t.y) > 1.2) {
        const path = this.grid.findPath(c.x, c.y, t.x, t.y);
        if (path) c.setPath(path);
        else {
          c.job = JobType.Idle;
          c.jobTarget = null;
        }
        return;
      }
      if (t.kind !== TileKind.Dirt) {
        t.mark = MarkType.None;
        c.job = JobType.Idle;
        c.jobTarget = null;
        this.gridDirty = true;
        return;
      }
      c.workTimer += dt;
      // Fast claim — stone floor appears almost instantly
      if (c.workTimer >= 0.35) {
        t.kind = TileKind.Claimed;
        t.claimedProgress = 1;
        t.mark = MarkType.None;
        this.gridDirty = true;
        c.job = JobType.Idle;
        c.jobTarget = null;
        const wpos = this.grid.tileToWorld(t.x, t.y);
        this.renderer.spawnFx(new THREE.Vector3(wpos.x, 0.3, wpos.z), 0xc8bca8, 0.4);
        this.mentioneOnce('claim', MENTOR_LINES.claim);
        this.saveNow();
      }
    } else if (c.job === JobType.Fortify) {
      if (Math.hypot(c.x - t.x, c.y - t.y) > 1.6) return;
      c.workTimer += dt;
      if (c.workTimer >= 1.5) {
        t.fortified = true;
        t.mark = MarkType.None;
        // keep kind as earth visually via fortified flag
        this.gridDirty = true;
        c.job = JobType.Idle;
        c.jobTarget = null;
      }
    } else if (c.job === JobType.Haul) {
      if (!arrived) return;
      this.gold += c.goldCarried;
      c.goldCarried = 0;
      c.job = JobType.Idle;
      c.jobTarget = null;
    }
  }

  private updateMinionJob(c: Creature, dt: number, arrived: boolean): void {
    if (c.job === JobType.Eat && arrived) {
      c.hunger = Math.max(0, c.hunger - 50 * dt);
      if (c.hunger < 5) {
        c.job = JobType.Idle;
      }
    } else if (c.job === JobType.Sleep && arrived) {
      c.sleepNeed = Math.max(0, c.sleepNeed - 40 * dt);
      if (c.sleepNeed < 5) c.job = JobType.Idle;
    } else if (c.job === JobType.Train && arrived) {
      c.trainNeed = Math.max(0, c.trainNeed - 30 * dt);
      c.workTimer += dt;
      if (c.workTimer > 8 && c.level < 4) {
        c.level++;
        c.maxHp += 15;
        c.hp = c.maxHp;
        c.damage += 3;
        c.workTimer = 0;
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1, c.wz), 0xffaa44, 0.6);
      }
      if (c.trainNeed < 5) c.job = JobType.Idle;
    } else if (c.job === JobType.Fight) {
      this.doCombat(c, dt);
    } else if (c.job === JobType.Wander && arrived) {
      c.job = JobType.Idle;
    }
  }

  private updateHeroJob(c: Creature, dt: number): void {
    // damage heart if adjacent
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    if (Math.hypot(c.x - hx, c.y - hy) <= 1.5) {
      if (c.attackCooldown <= 0) {
        c.attackCooldown = 1.2;
        // damage tracked via heartHp
        this.heartHp -= c.damage;
        this.renderer.spawnFx(
          new THREE.Vector3(
            this.grid.tileToWorld(hx, hy).x,
            1,
            this.grid.tileToWorld(hx, hy).z
          ),
          0xff2040,
          0.4
        );
        this.mentioneOnce('heartHurt', MENTOR_LINES.heartHurt);
      }
    }
    this.doCombat(c, dt);
  }

  private heartHp = 500;

  private doCombat(c: Creature, dt: number): void {
    const foes = this.creatures.filter(
      (o) => o.alive && o !== c && o.isHero !== c.isHero && !o.isWorker && Math.hypot(o.x - c.x, o.y - c.y) < 1.5
    );
    // workers also get hit if heroes adjacent
    const extra =
      c.isHero
        ? this.creatures.filter(
            (o) => o.alive && o.isWorker && Math.hypot(o.x - c.x, o.y - c.y) < 1.2
          )
        : [];
    const targets = foes.length ? foes : extra;
    if (!targets.length) return;
    if (c.attackCooldown > 0) return;
    c.attackCooldown = 0.9;
    const target = targets[0];
    target.takeDamage(c.damage * (0.9 + Math.random() * 0.2));
    this.renderer.spawnFx(new THREE.Vector3(target.wx, 0.8, target.wz), 0xff4040, 0.25);
  }

  private updatePortal(dt: number): void {
    this.portalCooldown -= dt;
    if (this.portalCooldown > 0) return;
    const portals = this.grid.countRoom(RoomType.Portal);
    if (portals <= 0) return;

    const lair = this.grid.countRoom(RoomType.Lair);
    const hatch = this.grid.countRoom(RoomType.Hatchery);
    const train = this.grid.countRoom(RoomType.Training);
    const claimed = this.grid.countClaimed();

    const portalTile = this.grid.tiles.find((t) => t.room === RoomType.Portal);
    if (!portalTile) return;
    // spawn on adjacent claimed
    let sx = portalTile.x;
    let sy = portalTile.y;
    for (const n of this.grid.neighbors4(portalTile.x, portalTile.y)) {
      if (this.grid.isWalkable(n.x, n.y)) {
        sx = n.x;
        sy = n.y;
        break;
      }
    }

    if (!this.attracted.skitterwing && claimed >= 20 && portals >= 1) {
      this.spawnCreature(CreatureKind.Skitterwing, sx, sy);
      this.attracted.skitterwing = true;
      this.portalCooldown = 8;
      this.hud.say(MENTOR_LINES.skitterwing);
      return;
    }
    if (!this.attracted.rattlekin && lair >= 4 && hatch >= 2) {
      this.spawnCreature(CreatureKind.Rattlekin, sx, sy);
      this.attracted.rattlekin = true;
      this.portalCooldown = 10;
      this.hud.say(MENTOR_LINES.rattlekin);
      return;
    }
    if (!this.attracted.emberling && train >= 4 && lair >= 6 && this.gold >= 200) {
      this.spawnCreature(CreatureKind.Emberling, sx, sy);
      this.attracted.emberling = true;
      this.portalCooldown = 12;
      this.hud.say(MENTOR_LINES.emberling);
      return;
    }

    // periodic extra minions if thresholds remain met
    if (this.attracted.rattlekin && lair >= 4 && Math.random() < 0.15) {
      const count = this.creatures.filter((c) => c.alive && c.kind === CreatureKind.Rattlekin).length;
      if (count < 4) {
        this.spawnCreature(CreatureKind.Rattlekin, sx, sy);
        this.portalCooldown = 20;
      }
    }
  }

  private updateHeroWave(dt: number): void {
    if (this.heroWaveSpawned) {
      // win check
      if (!this.won && !this.gameOver) {
        const heroesLeft = this.creatures.some((c) => c.alive && c.isHero);
        if (!heroesLeft && this.time > this.heroWaveTimer + 2) {
          this.won = true;
          this.hud.say(MENTOR_LINES.win);
          this.hud.showOverlay('Victory', MENTOR_LINES.win + ' The Underkeep stands.', 'Reign Again');
          this.gameOver = true;
        }
      }
      return;
    }
    this.heroWaveTimer -= dt;
    if (this.heroWaveTimer > 0) return;
    this.heroWaveSpawned = true;
    this.hud.say(MENTOR_LINES.heroes);

    // spawn at north edge of dug corridor / map
    const cx = this.grid.heartPos.x;
    let sy = 3;
    let sx = cx;
    for (let y = 3; y < this.grid.height / 2; y++) {
      if (this.grid.isWalkable(cx, y)) {
        sy = y;
        sx = cx;
        break;
      }
    }
    // ensure spawn walkable — carve a small entry if needed
    for (let x = cx - 1; x <= cx + 1; x++) {
      const t = this.grid.get(x, sy);
      if (t && (t.kind === TileKind.Earth || t.kind === TileKind.Gold)) {
        t.kind = TileKind.Dirt;
        this.gridDirty = true;
      }
    }
    if (!this.grid.isWalkable(sx, sy)) {
      const t = this.grid.get(sx, sy);
      if (t) {
        t.kind = TileKind.Dirt;
        this.gridDirty = true;
      }
    }

    this.spawnCreature(CreatureKind.HeroKnight, sx, sy);
    this.spawnCreature(CreatureKind.HeroKnight, sx + 1, sy);
    this.spawnCreature(CreatureKind.HeroArcher, sx - 1, sy);
  }

  private checkHeart(): void {
    if (this.heartHp <= 0 && !this.gameOver) {
      this.gameOver = true;
      this.hud.say(MENTOR_LINES.lose);
      this.hud.showOverlay('Defeat', MENTOR_LINES.lose, 'Try Again');
    }
  }

  render(): void {
    this.renderer.render();
  }
}

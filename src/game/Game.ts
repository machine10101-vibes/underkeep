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
  validateSaveReason,
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
  private selected: Creature | null = null;
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
  /** Hatchery food stock (DK2 chickens vibe) — regenerates on Hatchery tiles. */
  private hatcheryFood = 0;
  private foodRegenAcc = 0;
  /** Lair bed occupancy: "x,y" -> creature id */
  private bedOwners = new Map<string, number>();
  private contextRecoveryShown = false;

  constructor(canvas: HTMLCanvasElement) {
    // HUD first so New Game / sheets stay wired even if boot later fails
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
    this.hud.onInspectorClose = () => this.clearSelection();

    this.grid = new Grid(40, 40);
    this.renderer = new DungeonRenderer(canvas);
    this.renderer.onContextLost = () => this.handleContextLost();
    this.renderer.onContextRestored = () => this.handleContextRestored();

    let restored = false;
    try {
      restored = this.bootFromSaveOrFresh();
    } catch (err) {
      console.error('[underkeep] boot failed — clearing save and starting Intro', err);
      clearSave();
      this.resetRuntimeState();
      this.startFresh(true);
      restored = false;
    }

    this.bindInput(canvas);
    this.rebuild();
    this.syncAllEntityMeshes();

    // Only persist a validated playable (or game-over) session — never re-save voids
    if (restored && this.isPlayableOrEnded()) {
      this.saveNow();
    }

    // First real HUD numbers before revealing UI (kills zero-on-black flash)
    this.hud.updateStats(
      this.gold,
      this.mana,
      this.maxMana(),
      this.creatures.filter((c) => c.alive && c.isWorker).length,
      this.creatures.filter((c) => c.alive && !c.isWorker && !c.isHero).length
    );
    this.markReady();
  }

  /** Dismiss boot splash and reveal HUD once meshes + stats are ready. */
  markReady(): void {
    document.body.classList.remove('booting');
  }

  handleContextLost(): void {
    if (this.contextRecoveryShown) return;
    this.contextRecoveryShown = true;
    this.hud.showOverlay(
      'Graphics hiccup',
      'The dungeon view lost its WebGL context (often after heavy digging). Reload to restore — your save is kept.',
      'Reload Dungeon'
    );
    this.hud.onOverlayContinue = () => {
      location.reload();
    };
  }

  private handleContextRestored(): void {
    this.contextRecoveryShown = false;
    this.gridDirty = true;
    this.rebuild();
    this.syncAllEntityMeshes();
    this.hud.say('The Underkeep re-solidifies. Dig on, Keeper.');
    this.hud.hideOverlay();
  }

  /** True when dungeon has heart + diggable earth + ≥1 Scrabbler, or match ended. */
  private isPlayableOrEnded(): boolean {
    if (this.gameOver) return true;
    const heart = this.grid.get(this.grid.heartPos.x, this.grid.heartPos.y);
    if (!heart || heart.kind !== TileKind.Heart) return false;
    const diggable = this.grid.tiles.some(
      (t) => t.kind === TileKind.Earth || t.kind === TileKind.Gold
    );
    if (!diggable) return false;
    const scrabblers = this.creatures.filter((c) => c.alive && c.isWorker).length;
    return scrabblers >= 1;
  }

  private syncAllEntityMeshes(): void {
    for (const c of this.creatures) {
      if (c.alive) c.syncMesh(this.time);
    }
  }

  private resetRuntimeState(): void {
    for (const c of this.creatures) {
      try {
        this.renderer?.removeEntityMesh(c.mesh);
        if (c.mesh?.parent) c.mesh.parent.remove(c.mesh);
      } catch {
        /* ignore */
      }
    }
    this.creatures = [];
    this.gold = 600;
    this.mana = 50;
    this.tool = 'select';
    this.held = null;
    this.selected = null;
    this.hud.hideInspector();
    this.time = 0;
    this.workerCostScale = 0;
    this.portalCooldown = 0;
    this.attracted = { skitterwing: false, rattlekin: false, emberling: false };
    this.heroWaveSpawned = false;
    this.heroWaveTimer = 90;
    this.gameOver = false;
    this.won = false;
    this.mentored = new Set();
    this.wageAcc = 0;
    this.heartHp = 500;
    this.restoredFromSave = false;
    this.hatcheryFood = 0;
    this.foodRegenAcc = 0;
    this.bedOwners.clear();
    this.contextRecoveryShown = false;
    this.grid = new Grid(40, 40);
  }

  private bootFromSaveOrFresh(): boolean {
    const saved = loadSave(this.grid.width, this.grid.height);
    if (!saved) {
      this.startFresh(true);
      return false;
    }

    const reason = validateSaveReason(saved, this.grid.width, this.grid.height);
    if (reason) {
      console.warn('[underkeep] invalid save on boot:', reason);
      clearSave();
      this.startFresh(true);
      return false;
    }

    try {
      this.applySave(saved);
    } catch (err) {
      console.error('[underkeep] applySave threw', err);
      clearSave();
      this.resetRuntimeState();
      this.startFresh(true);
      return false;
    }

    if (!this.isPlayableOrEnded()) {
      console.warn('[underkeep] restored state not playable — falling back to Intro');
      clearSave();
      this.resetRuntimeState();
      this.startFresh(true);
      return false;
    }

    this.restoredFromSave = true;
    if (this.gameOver) {
      this.hud.showOverlay(
        this.won ? 'Victory' : 'Defeat',
        this.won ? MENTOR_LINES.win + ' The Underkeep stands.' : MENTOR_LINES.lose,
        'Try Again'
      );
    } else {
      this.hud.say(MENTOR_LINES.resume);
    }
    return true;
  }

  private startFresh(showIntro: boolean): void {
    // Ensure starting workers on a generated grid
    if (this.creatures.length === 0) {
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x + 1, this.grid.heartPos.y);
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x - 1, this.grid.heartPos.y);
      this.spawnCreature(CreatureKind.Scrabbler, this.grid.heartPos.x, this.grid.heartPos.y + 1);
    }

    const hw = this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y);
    this.camTarget.set(hw.x, 0, hw.z);
    this.renderer.camera.position.set(hw.x + 4, 28, hw.z + 18);
    this.renderer.camera.lookAt(this.camTarget);

    this.hud.say(MENTOR_LINES.start);
    if (showIntro) {
      this.hud.showOverlay(
        'Underkeep',
        'You are the Keeper of the Underkeep. Dig earth, claim territory, raise rooms, and crush the heroes who dare enter. The Dungeon Heart must not fall.',
        'Begin'
      );
    }
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
    const prev = this.hud.onNewGame;
    const prevCont = this.hud.onOverlayContinue;
    this.hud.onOverlayContinue = () => {
      this.hud.onNewGame = prev;
      this.hud.onOverlayContinue = prevCont;
    };
    this.hud.onNewGame = () => {
      // Wipe save then full reload so grid/renderer/entities re-init cleanly
      clearSave();
      const url = new URL(location.href);
      url.searchParams.delete('shot');
      url.searchParams.delete('pass');
      location.replace(url.pathname + url.search + url.hash);
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
    if (!this.isPlayableOrEnded()) return;
    writeSave(this.buildSave());
  }

  private applySave(data: SaveData): void {
    // Validated before call — still refuse size drift
    if (data.width !== this.grid.width || data.height !== this.grid.height) {
      throw new Error('save size mismatch');
    }
    unpackTiles(this.grid.tiles, data.tiles);
    this.grid.heartPos = { x: data.heartPos.x, y: data.heartPos.y };

    this.gold = data.gold;
    this.mana = data.mana;
    this.attracted = {
      skitterwing: !!data.attracted?.skitterwing,
      rattlekin: !!data.attracted?.rattlekin,
      emberling: !!data.attracted?.emberling,
    };
    this.heroWaveSpawned = !!data.heroWaveSpawned;
    this.heroWaveTimer = data.heroWaveTimer ?? 90;
    this.workerCostScale = data.workerCostScale ?? 0;
    this.portalCooldown = data.portalCooldown ?? 0;
    this.time = data.time ?? 0;
    this.wageAcc = data.wageAcc ?? 0;
    this.mentored = new Set(data.mentored ?? []);
    this.gameOver = !!data.gameOver;
    this.won = !!data.won;

    for (const c of this.creatures) {
      this.renderer.removeEntityMesh(c.mesh);
      if (c.mesh.parent) c.mesh.parent.remove(c.mesh);
    }
    this.creatures = [];
    for (const sc of data.creatures) {
      const c = this.spawnCreature(sc.kind, sc.x, sc.y);
      if (Number.isFinite(sc.wx) && Number.isFinite(sc.wz)) {
        c.wx = sc.wx;
        c.wz = sc.wz;
      }
      c.hp = sc.hp;
      c.maxHp = sc.maxHp;
      c.level = sc.level ?? 1;
      c.goldCarried = sc.goldCarried ?? 0;
      c.hunger = sc.hunger ?? 0;
      c.sleepNeed = sc.sleepNeed ?? 0;
      c.trainNeed = sc.trainNeed ?? 0;
      c.syncMesh(this.time);
    }

    const hw = this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y);
    if (
      data.cam &&
      Number.isFinite(data.cam.tx) &&
      Number.isFinite(data.cam.tz) &&
      Number.isFinite(data.cam.cx) &&
      Number.isFinite(data.cam.cy) &&
      Number.isFinite(data.cam.cz) &&
      data.cam.cy > 5
    ) {
      this.camTarget.set(data.cam.tx, 0, data.cam.tz);
      this.renderer.camera.position.set(data.cam.cx, data.cam.cy, data.cam.cz);
      this.renderer.camera.lookAt(this.camTarget);
    } else {
      this.camTarget.set(hw.x, 0, hw.z);
      this.renderer.camera.position.set(hw.x + 4, 28, hw.z + 18);
      this.renderer.camera.lookAt(this.camTarget);
    }

    this.gridDirty = true;
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
        this.handleSecondaryAt(tp.x, tp.y, hit);
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
      const c = this.creatureAt(tx, ty, hit);
      if (c && !c.isHero) {
        this.selectCreature(c);
        this.pickUp(c);
        return;
      }
      // Empty tile — deselect
      this.clearSelection();
    } else {
      this.paint = true;
      this.applyTool(tx, ty);
      this.lastPaint = { x: tx, y: ty };
    }
  }

  private handleSecondaryAt(tx: number, ty: number, worldHit?: THREE.Vector3): void {
    // Hand tool: right-click / long-press = conclusive slap (hovered, selected, or held)
    if (this.tool === 'select') {
      let c: Creature | null = null;
      if (this.held && !this.held.isHero) {
        c = this.held;
      } else {
        c = this.creatureAt(tx, ty, worldHit);
        if ((!c || c.isHero) && this.selected && this.selected.alive && !this.selected.isHero) {
          c = this.selected;
        }
      }
      if (c && !c.isHero) {
        if (!c.held) this.selectCreature(c);
        this.slap(c);
        return;
      }
    } else if (this.held) {
      // Non-hand tools: secondary still drops held creature
      this.dropHeld();
      return;
    }
    const tile = this.grid.get(tx, ty);
    if (tile && tile.mark !== MarkType.None) {
      tile.mark = MarkType.None;
      this.gridDirty = true;
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
      let room =
        tile.room !== RoomType.None ? ` · ${['', 'Treasury', 'Lair', 'Hatchery', 'Training', 'Library', 'Portal'][tile.room]}` : '';
      if (tile.room === RoomType.Hatchery) room += ` · food ${Math.floor(this.hatcheryFood)}`;
      if (tile.room === RoomType.Lair) {
        const beds = this.grid.countRoom(RoomType.Lair);
        room += ` · beds ${this.countOccupiedBeds()}/${beds}`;
      }
      const dig = tile.digProgress > 0 ? ` · dig ${Math.floor(tile.digProgress * 100)}%` : '';
      const kindLabel =
        tile.kind === TileKind.Gold
          ? 'Gold'
          : tile.kind === TileKind.Earth
            ? 'Earth'
            : tile.kind === TileKind.Rock
              ? 'Rock'
              : TileKind[tile.kind];
      let tip = `(${tp.x},${tp.y}) ${kindLabel}${tile.fortified ? ' [fortified]' : ''}${room}${dig}`;
      if (this.tool === 'select') {
        const c = this.creatureAt(tp.x, tp.y);
        if (c && !c.isHero) {
          tip += ` · ${c.kind} mood ${Math.floor(c.mood)} · eff ${Math.round(c.workEfficiency() * 100)}%`;
        } else if (this.held) {
          tip += ' · drop here';
        }
      }
      this.hud.setTooltip(tip);
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

  private creatureAt(x: number, y: number, worldHit?: THREE.Vector3): Creature | null {
    let best: Creature | null = null;
    let bestD = 1.85; // forgiving Hand pick radius (desktop + overview cam)
    for (const c of this.creatures) {
      if (!c.alive || c.held) continue;
      let d = Math.hypot(c.x - x, c.y - y);
      if (worldHit) {
        const wd = Math.hypot(c.wx - worldHit.x, c.wz - worldHit.z) / TILE_SIZE;
        d = Math.min(d, wd);
      }
      if (d < bestD) {
        bestD = d;
        best = c;
      }
    }
    return best;
  }

  private clearSelection(): void {
    if (this.selected) this.selected.selected = false;
    this.selected = null;
    this.hud.hideInspector();
  }

  private selectCreature(c: Creature): void {
    if (this.selected && this.selected !== c) this.selected.selected = false;
    this.selected = c;
    c.selected = true;
    this.refreshInspector();
  }

  private refreshInspector(): void {
    const c = this.held ?? this.selected;
    if (!c || !c.alive) {
      this.hud.hideInspector();
      return;
    }
    const kindNames: Record<string, string> = {
      scrabbler: 'Scrabbler',
      skitterwing: 'Skitterwing',
      rattlekin: 'Rattlekin',
      emberling: 'Emberling',
      hero_knight: 'Hero Knight',
      hero_archer: 'Hero Archer',
    };
    this.hud.showInspector({
      kind: kindNames[c.kind] ?? c.kind,
      job: c.held ? 'Held' : c.job.charAt(0).toUpperCase() + c.job.slice(1),
      hp: c.hp,
      maxHp: c.maxHp,
      hunger: c.hunger,
      tired: c.sleepNeed,
      mood: c.mood,
      efficiency: c.workEfficiency(),
      held: c.held,
    });
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
          if (room === RoomType.Lair) {
            this.mentioneOnce('lairBuilt', MENTOR_LINES.lairBuilt);
            // Demo spike: weary + lightly hurt so beds fill within ~60s
            this.spikeNeedsForRoom(RoomType.Lair);
          }
          if (room === RoomType.Hatchery) {
            this.mentioneOnce('hatcheryBuilt', MENTOR_LINES.hatcheryBuilt);
            this.hatcheryFood = Math.max(this.hatcheryFood, 4);
            this.spikeNeedsForRoom(RoomType.Hatchery);
          }
          this.saveNow();
        }
      }
    }
  }

  private pickUp(c: Creature): void {
    // Release bed if carried off
    if (c.bedKey && this.bedOwners.get(c.bedKey) === c.id) {
      this.bedOwners.delete(c.bedKey);
    }
    c.bedKey = null;
    c.held = true;
    c.setPath(null);
    c.job = JobType.Idle;
    c.jobTarget = null;
    c.workTimer = 0;
    this.held = c;
    this.selectCreature(c);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.0, c.wz), 0xffdd88, 0.45);
    this.mentioneOnce('pickUp', MENTOR_LINES.pickUp);
    this.refreshInspector();
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
    c.mood = Math.min(100, c.mood + 4);
    this.mentioneOnce('drop', MENTOR_LINES.drop);
    this.refreshInspector();
  }

  private slap(c: Creature): void {
    // Stun + interrupt current job (DK2-like Hand slap)
    c.stunTimer = Math.max(c.stunTimer, 1.35);
    c.speedBuff = Math.max(c.speedBuff, 2.8);
    c.sleepNeed = Math.max(0, c.sleepNeed - 12);
    c.hunger = Math.max(0, c.hunger - 4);
    c.mood = Math.min(100, c.mood + 8);
    c.setPath(null);
    c.workTimer = 0;
    if (c.job !== JobType.Sleep && c.job !== JobType.Eat) {
      c.job = JobType.Idle;
      c.jobTarget = null;
    }
    // Brief slap VFX (impact + flash)
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.7, c.wz), 0xffee88, 0.7);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.15, c.wz), 0xffaa44, 0.55);
    this.renderer.spawnFx(new THREE.Vector3(c.wx + 0.25, 0.9, c.wz), 0xffffff, 0.35);
    this.renderer.spawnDigDebris(c.wx, c.wz, 0xffdd88);
    // Conclusive toast on EVERY successful slap
    this.hud.sayNow(MENTOR_LINES.slap);
    this.refreshInspector();
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

  /** QA/screenshot: Lair beds N/M>0 + Hatchery feast toast/pose. */
  preparePass5bShot(): void {
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
    for (let x = hx - 1; x <= hx + 5; x++) {
      for (let y = hy - 1; y <= hy + 4; y++) {
        claim(x, y);
      }
    }
    claim(hx + 2, hy + 1, RoomType.Lair);
    claim(hx + 3, hy + 1, RoomType.Lair);
    claim(hx + 4, hy, RoomType.Hatchery);
    claim(hx + 4, hy + 1, RoomType.Hatchery);
    this.hatcheryFood = 6;
    this.spikeNeedsForRoom(RoomType.Lair);
    this.spikeNeedsForRoom(RoomType.Hatchery);

    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    // Bed sleeper — occupies Lair, regenerating
    if (workers[0]) {
      const w = workers[0];
      const bx = hx + 2;
      const by = hy + 1;
      const world = this.grid.tileToWorld(bx, by);
      w.x = bx;
      w.y = by;
      w.wx = world.x;
      w.wz = world.z;
      w.hp = w.maxHp * 0.45;
      w.sleepNeed = 80;
      w.hunger = 10;
      const key = `${bx},${by}`;
      this.bedOwners.set(key, w.id);
      w.bedKey = key;
      w.job = JobType.Sleep;
      w.jobTarget = { x: bx, y: by };
      w.restHealAcc = 1.7;
      w.setPath(null);
      w.syncMesh(this.time);
      this.renderer.spawnCareSparks(w.wx, w.wz, 'heal', true);
      w.pulseTint('heal', 2.2);
    }
    // Feaster at Hatchery
    if (workers[1]) {
      const w = workers[1];
      const ex = hx + 4;
      const ey = hy;
      const world = this.grid.tileToWorld(ex, ey);
      w.x = ex;
      w.y = ey;
      w.wx = world.x;
      w.wz = world.z;
      w.hunger = 60;
      w.job = JobType.Eat;
      w.jobTarget = { x: ex, y: ey };
      w.eatAnnounced = true;
      w.eatAnim = 2.5;
      w.setPath(null);
      w.syncMesh(this.time);
      this.renderer.spawnCareSparks(w.wx, w.wz, 'feast', true);
      w.pulseTint('feast', 2.2);
    }
    // Third worker still diggable nearby so dig marks don't starve needs demo
    if (workers[2]) {
      const w = workers[2];
      const world = this.grid.tileToWorld(hx + 1, hy + 2);
      w.x = hx + 1;
      w.y = hy + 2;
      w.wx = world.x;
      w.wz = world.z;
      w.hunger = 5;
      w.sleepNeed = 5;
      w.job = JobType.Idle;
      w.setPath(null);
    }

    this.gold = Math.max(this.gold, 800);
    this.grid.refreshTorches();
    this.gridDirty = true;
    this.rebuild();
    this.hud.setTooltip(`(${hx + 2},${hy + 1}) Claimed · Lair · beds ${this.countOccupiedBeds()}/2`);
    this.hud.say(MENTOR_LINES.feasting);
    this.hud.say(MENTOR_LINES.bedClaim);
    this.hud.say(MENTOR_LINES.lairResting);

    const focus = this.grid.tileToWorld(hx + 3, hy + 1);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 2, 22, focus.z + 12);
    this.renderer.camera.lookAt(this.camTarget);
  }

  /** QA/screenshot: Pass 6.1 inspector + Hand hold + mood. */
  preparePass61Shot(): void {
    this.preparePass5bShot();
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    const target = workers[2] ?? workers[0];
    if (target) {
      target.mood = 38;
      target.hunger = 55;
      target.sleepNeed = 40;
      target.hp = target.maxHp * 0.7;
      this.selectCreature(target);
      // Hold a second creature to show Hand carry
      const carry = workers.find((c) => c !== target && c.job !== JobType.Sleep) ?? workers[1];
      if (carry) {
        this.pickUp(carry);
        const focus = this.grid.tileToWorld(target.x, target.y);
        carry.wx = focus.x + 1.2;
        carry.wz = focus.z + 0.4;
        carry.syncMesh(this.time);
      }
      this.refreshInspector();
      const focusW = this.grid.tileToWorld(target.x, target.y);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 18, focusW.z + 11);
      this.renderer.camera.lookAt(this.camTarget);
      this.hud.say(MENTOR_LINES.pickUp);
    }
  }

  /** QA/screenshot: Pass 6.1b slap toast + efficiency in inspector. */
  preparePass61bShot(focus: 'both' | 'slap' | 'efficiency' = 'both'): void {
    this.preparePass5bShot();
    this.tool = 'select';
    this.hud.setActiveTool('select');
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    const target = workers.find((c) => c.job !== JobType.Sleep && c.job !== JobType.Eat) ?? workers[0];
    if (!target) return;
    // Low mood → ~62% efficiency (workEfficiency ≈ 0.5 + 0.17)
    target.mood = 24;
    target.hunger = 70;
    target.sleepNeed = 55;
    target.hp = target.maxHp * 0.65;
    target.efficiencyWarned = true;
    this.held = null;
    for (const c of this.creatures) c.held = false;
    this.selectCreature(target);
    const focusW = this.grid.tileToWorld(target.x, target.y);
    this.camTarget.set(focusW.x, 0, focusW.z);
    this.renderer.camera.position.set(focusW.x + 2, 17, focusW.z + 10);
    this.renderer.camera.lookAt(this.camTarget);
    this.refreshInspector();
    if (focus === 'efficiency') {
      this.hud.sayNow(MENTOR_LINES.sluggishDig);
    } else {
      // Stun + VFX + conclusive slap toast (do not rely on mood bump for inspector %)
      const moodKeep = target.mood;
      this.slap(target);
      target.mood = moodKeep;
      this.refreshInspector();
      if (focus === 'both') {
        // Keep slap line visible; efficiency still on inspector panel
        this.hud.sayNow(MENTOR_LINES.slap);
      }
    }
  }

  /** QA/screenshot: Pass 5c louder heal + feast sparks (also usable as heal-only / feast-only). */
  preparePass5cShot(focus: 'both' | 'heal' | 'feast' = 'both'): void {
    this.preparePass5bShot();
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    const sleeper = workers.find((c) => c.job === JobType.Sleep);
    const eater = workers.find((c) => c.job === JobType.Eat);
    if (sleeper && (focus === 'both' || focus === 'heal')) {
      this.renderer.spawnCareSparks(sleeper.wx, sleeper.wz, 'heal', true);
      sleeper.pulseTint('heal', 2.4);
      // Extra burst so a single frame always catches sparks
      for (let i = 0; i < 2; i++) this.renderer.spawnCareSparks(sleeper.wx, sleeper.wz, 'heal', true);
    }
    if (eater && (focus === 'both' || focus === 'feast')) {
      this.renderer.spawnCareSparks(eater.wx, eater.wz, 'feast', true);
      eater.pulseTint('feast', 2.4);
      for (let i = 0; i < 2; i++) this.renderer.spawnCareSparks(eater.wx, eater.wz, 'feast', true);
    }
    if (focus === 'heal' && sleeper) {
      const focusW = this.grid.tileToWorld(sleeper.x, sleeper.y);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 16, focusW.z + 10);
      this.renderer.camera.lookAt(this.camTarget);
      this.hud.say(MENTOR_LINES.lairResting);
    } else if (focus === 'feast' && eater) {
      const focusW = this.grid.tileToWorld(eater.x, eater.y);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 16, focusW.z + 10);
      this.renderer.camera.lookAt(this.camTarget);
      this.hud.say(MENTOR_LINES.feasting);
    }
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
    if (this.renderer.contextLost) {
      // Still tick HUD so reload overlay stays usable
      this.hud.update(dt);
      return;
    }
    if (!this.gameOver) {
      this.time += dt;
      this.updateCamera(dt);
      this.regenMana(dt);
      this.regenHatcheryFood(dt);
      this.assignJobs(dt);
      this.updateMoods(dt);
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
    if (this.selected || this.held) this.refreshInspector();
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

  private regenHatcheryFood(dt: number): void {
    const hatchTiles = this.grid.countRoom(RoomType.Hatchery);
    if (hatchTiles <= 0) {
      this.hatcheryFood = 0;
      return;
    }
    // ~1 food / 2.5s per hatchery tile, cap = 4 * tiles
    this.foodRegenAcc += dt;
    const interval = 2.5;
    while (this.foodRegenAcc >= interval) {
      this.foodRegenAcc -= interval;
      const cap = hatchTiles * 4;
      if (this.hatcheryFood < cap) {
        this.hatcheryFood = Math.min(cap, this.hatcheryFood + hatchTiles);
      }
    }
  }

  private assignJobs(dt: number): void {
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

      // Needs beat new dig jobs when rooms exist
      {
        const hasHatch = this.grid.countRoom(RoomType.Hatchery) > 0;
        const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
        const hungry = w.hunger > (hasHatch ? 26 : 55);
        const tired = w.sleepNeed > (hasLair ? 30 : 70) || w.hp < w.maxHp * 0.65;
        if (hungry && hasHatch && (this.hatcheryFood > 0 || w.hunger > 50)) {
          if (this.assignEat(w)) continue;
        }
        if (tired && hasLair) {
          if (this.assignSleep(w)) continue;
        }
      }

      // Haul gold to Treasury first when carrying a load
      if (w.goldCarried >= 40) {
        const treasury = this.grid.tiles.find((t) => t.room === RoomType.Treasury);
        const tx = treasury?.x ?? this.grid.heartPos.x;
        const ty = treasury?.y ?? this.grid.heartPos.y;
        const path = this.grid.findPath(w.x, w.y, tx, ty);
        if (path) {
          w.job = JobType.Haul;
          w.jobTarget = { x: tx, y: ty };
          w.setPath(path);
          assigned = true;
        }
      }
      if (assigned) continue;

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

    // Scrabblers: always accrue needs (even while digging) so dig marks cannot starve rest/eat
    for (const w of workers) {
      if (w.job === JobType.Flee) continue;
      const hasHatch = this.grid.countRoom(RoomType.Hatchery) > 0;
      const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
      // Faster when rooms exist so beta sees eat/rest within ~60–90s; milder otherwise
      w.hunger += (hasHatch ? 7.5 : 2.8) * dt;
      w.sleepNeed += (hasLair ? 6.5 : 1.5) * dt;
      if (w.job === JobType.Eat || w.job === JobType.Sleep) continue;

      const hungry = w.hunger > (hasHatch ? 26 : 55);
      const tired = w.sleepNeed > (hasLair ? 30 : 70) || w.hp < w.maxHp * 0.65;
      if (!hungry && !tired) continue;

      // Prefer Hatchery / Lair over dig/claim/mine/haul until satisfied
      if (
        hungry &&
        hasHatch &&
        (this.hatcheryFood > 0 || w.hunger > 50)
      ) {
        this.assignEat(w);
      } else if (tired && hasLair) {
        this.assignSleep(w);
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
        if (c.bedKey) this.releaseBed(c);
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

      // Needs accumulate in real time; faster when Hatchery/Lair exist (demo-provable)
      const hasHatch = this.grid.countRoom(RoomType.Hatchery) > 0;
      const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
      c.hunger += (hasHatch ? 8.0 : 4.5) * dt;
      c.sleepNeed += (hasLair ? 7.0 : 3.0) * dt;
      c.trainNeed += 2.2 * dt;

      // Already committed to eat/sleep/train — keep path, do not re-roll target every frame
      if (c.job === JobType.Eat || c.job === JobType.Sleep || c.job === JobType.Train) {
        if (c.job === JobType.Sleep && c.jobTarget) {
          // Ensure bed still owned
          const key = `${c.jobTarget.x},${c.jobTarget.y}`;
          if (c.bedKey !== key) c.bedKey = key;
          if (!this.bedOwners.has(key)) this.bedOwners.set(key, c.id);
        }
        if (c.path.length === 0 && c.jobTarget) {
          const path = this.grid.findPath(c.x, c.y, c.jobTarget.x, c.jobTarget.y);
          if (path) c.setPath(path);
        }
        continue;
      }

      if (c.job === JobType.Fight) {
        c.job = JobType.Idle;
      }

      // Hurt creatures seek Lair to rest/heal
      const hurt = c.hp < c.maxHp * 0.65;
      if (c.hunger > (hasHatch ? 24 : 40) && hasHatch) {
        if (this.assignEat(c)) continue;
      }
      if ((c.sleepNeed > (hasLair ? 28 : 50) || hurt) && hasLair) {
        if (this.assignSleep(c)) continue;
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
      if (c.job === JobType.Idle || (c.job === JobType.Wander && c.path.length === 0)) {
        // Prefer idling near own bed / Lair when available
        if (Math.random() < 0.008) {
          const lair = this.findFreeOrOwnedBed(c);
          if (lair) {
            c.job = JobType.Wander;
            c.setPath(this.grid.findPath(c.x, c.y, lair.x, lair.y));
          } else {
            const claimed = this.grid.tiles.filter((t) => t.kind === TileKind.Claimed);
            if (claimed.length) {
              const t = claimed[Math.floor(Math.random() * claimed.length)];
              c.job = JobType.Wander;
              c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
            }
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

  private releaseBed(c: Creature): void {
    if (!c.bedKey) return;
    if (this.bedOwners.get(c.bedKey) === c.id) this.bedOwners.delete(c.bedKey);
    c.bedKey = null;
  }

  private findFreeOrOwnedBed(c: Creature): Vec2 | null {
    if (c.bedKey) {
      const [x, y] = c.bedKey.split(',').map(Number);
      const t = this.grid.get(x, y);
      if (t && t.room === RoomType.Lair) return { x, y };
      this.releaseBed(c);
    }
    const beds = this.grid.tiles.filter((t) => t.room === RoomType.Lair);
    for (const t of beds) {
      const key = `${t.x},${t.y}`;
      const owner = this.bedOwners.get(key);
      if (owner === undefined || owner === c.id) return { x: t.x, y: t.y };
    }
    return beds.length ? { x: beds[0].x, y: beds[0].y } : null;
  }

  private assignSleep(c: Creature): boolean {
    const bed = this.findFreeOrOwnedBed(c);
    if (!bed) return false;
    const key = `${bed.x},${bed.y}`;
    const owner = this.bedOwners.get(key);
    if (owner !== undefined && owner !== c.id) {
      // Capacity full — try any free
      const free = this.grid.tiles.find((t) => {
        if (t.room !== RoomType.Lair) return false;
        const k = `${t.x},${t.y}`;
        return !this.bedOwners.has(k);
      });
      if (!free) {
        this.mentioneOnce('lairFull', MENTOR_LINES.lairFull);
        return false;
      }
      const fk = `${free.x},${free.y}`;
      this.bedOwners.set(fk, c.id);
      c.bedKey = fk;
      c.job = JobType.Sleep;
      c.jobTarget = { x: free.x, y: free.y };
      c.restHealAcc = 0;
      c.setPath(this.grid.findPath(c.x, c.y, free.x, free.y));
      this.mentioneOnce('lairUse', MENTOR_LINES.lairUse);
      this.hud.say(MENTOR_LINES.bedClaim);
      return true;
    }
    this.bedOwners.set(key, c.id);
    c.bedKey = key;
    c.job = JobType.Sleep;
    c.jobTarget = bed;
    c.restHealAcc = 0;
    c.setPath(this.grid.findPath(c.x, c.y, bed.x, bed.y));
    this.mentioneOnce('lairUse', MENTOR_LINES.lairUse);
    this.hud.say(MENTOR_LINES.bedClaim);
    return true;
  }

  private assignEat(c: Creature): boolean {
    if (this.hatcheryFood <= 0 && this.grid.countRoom(RoomType.Hatchery) > 0) {
      // Still walk there — food regenerates; low stock mentor once
      this.mentioneOnce('hatcheryHungry', MENTOR_LINES.hatcheryHungry);
    }
    const t = this.findRoomTile(RoomType.Hatchery);
    if (!t) return false;
    c.job = JobType.Eat;
    c.jobTarget = t;
    c.eatAnnounced = false;
    c.eatAnim = 0;
    c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
    this.mentioneOnce('hatcheryUse', MENTOR_LINES.hatcheryUse);
    return true;
  }

  private countOccupiedBeds(): number {
    let n = 0;
    for (const c of this.creatures) {
      if (!c.alive || c.job !== JobType.Sleep || !c.bedKey) continue;
      n++;
    }
    return n;
  }

  /** After placing Lair/Hatchery, spike needs so Scrabblers/minions seek rooms quickly (beta). */
  private spikeNeedsForRoom(room: RoomType): void {
    for (const c of this.creatures) {
      if (!c.alive || c.isHero) continue;
      if (room === RoomType.Hatchery) {
        c.hunger = Math.max(c.hunger, 70);
      }
      if (room === RoomType.Lair) {
        c.sleepNeed = Math.max(c.sleepNeed, 75);
        // Light wound so HP regen is visible while resting
        if (c.hp > c.maxHp * 0.55) {
          c.hp = Math.min(c.hp, c.maxHp * 0.5);
        }
      }
    }
  }


  private updateMoods(dt: number): void {
    const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
    const lairBeds = Math.max(1, this.grid.countRoom(RoomType.Lair));
    const minionCount = this.creatures.filter((c) => c.alive && !c.isHero).length;
    const overcrowded = hasLair && minionCount > lairBeds + 1;
    for (const c of this.creatures) {
      if (!c.alive || c.isHero || c.held) continue;
      let delta = 2.0 * dt; // gentle recover
      if (c.hunger > 45) delta -= 10 * dt * ((c.hunger - 45) / 55);
      if (c.sleepNeed > 40) delta -= 8 * dt * ((c.sleepNeed - 40) / 60);
      if (!hasLair) delta -= 3.5 * dt;
      if (overcrowded) delta -= 4.5 * dt;
      if (c.job === JobType.Sleep || c.job === JobType.Eat) delta += 12 * dt;
      if (c.hp < c.maxHp * 0.4) delta -= 3 * dt;
      c.mood = Math.max(0, Math.min(100, c.mood + delta));
      if (c.mood < 14 && !c.leaveWarned) {
        c.leaveWarned = true;
        this.hud.say(MENTOR_LINES.leaveThreat);
        this.mentioneOnce('moodLow', MENTOR_LINES.moodLow);
      } else if (c.mood > 35) {
        c.leaveWarned = false;
      }
      // Mood → dig speed: toast once when efficiency drops below ~75%
      const eff = c.workEfficiency();
      if (c.isWorker && eff < 0.75 && !c.efficiencyWarned) {
        c.efficiencyWarned = true;
        this.hud.say(MENTOR_LINES.sluggishDig);
      } else if (eff >= 0.82) {
        c.efficiencyWarned = false;
      }
      // Soft leave: very low mood idle creatures may despawn slowly (non-workers less sticky)
      if (c.mood < 6 && !c.isWorker && c.job === JobType.Idle && Math.random() < dt * 0.015) {
        c.alive = false;
        c.mesh.visible = false;
        this.hud.say('A minion has left the Underkeep.');
        if (this.selected === c) this.clearSelection();
      }
    }
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
    // Workers can eat/sleep too
    if (c.job === JobType.Eat || c.job === JobType.Sleep) {
      this.updateMinionJob(c, dt, arrived);
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
      // Must stand on an orthogonal neighbor (planted at dig face)
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
      // Face the block — pickaxe swing synced via digAnim in Creature.syncMesh
      const tw = this.grid.tileToWorld(t.x, t.y);
      c.faceToward(tw.x, tw.z);
      c.workTimer += dt;
      // Chip cadence ~0.38s at full efficiency; low mood digs visibly slower
      const digCadence = 0.38 / Math.max(0.5, Math.min(1.25, c.workEfficiency()));
      if (c.workTimer >= digCadence) {
        c.workTimer = 0;
        const wpos = this.grid.tileToWorld(t.x, t.y);
        this.renderer.spawnDigDebris(wpos.x, wpos.z, t.kind === TileKind.Gold ? 0xe0b040 : 0xc08040);
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.4, c.wz), 0xd0a060, 0.25);

        if (t.kind === TileKind.Gold) {
          const mined = Math.min(40, t.goldAmount);
          t.goldAmount -= mined;
          c.goldCarried += mined;
          t.digProgress = Math.min(1, t.digProgress + 0.2 * c.workEfficiency());
          // Incremental visual — NO full mesh rebuild (white-screen fix)
          this.renderer.updateDigVisual(t.x, t.y, t.digProgress, t.kind);
          this.mentioneOnce('firstGold', MENTOR_LINES.firstGold);
          if (t.goldAmount <= 0) {
            t.kind = TileKind.Dirt;
            t.mark = MarkType.None;
            t.goldAmount = 0;
            t.digProgress = 0;
            this.gridDirty = true; // kind change needs rebuild
            c.job = JobType.Idle;
            c.jobTarget = null;
          } else if (c.goldCarried >= 120) {
            // Break to haul a full load to Treasury
            c.job = JobType.Idle;
            c.jobTarget = null;
            c.setPath(null);
          }
        } else if (t.kind === TileKind.Earth) {
          t.digProgress = Math.min(1, t.digProgress + 0.34 * c.workEfficiency());
          this.renderer.updateDigVisual(t.x, t.y, t.digProgress, t.kind);
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
      if (c.goldCarried > 0) {
        this.gold += c.goldCarried;
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.6, c.wz), 0xffd040, 0.55);
        this.mentioneOnce('firstGold', MENTOR_LINES.firstGold);
      }
      c.goldCarried = 0;
      c.job = JobType.Idle;
      c.jobTarget = null;
    }
  }

  private updateMinionJob(c: Creature, dt: number, arrived: boolean): void {
    if (c.job === JobType.Eat) {
      if (!arrived && c.pathIndex < c.path.length) return;
      // Arrived — feast toast every meal (not once-per-game)
      if (!c.eatAnnounced) {
        c.eatAnnounced = true;
        this.hud.say(MENTOR_LINES.feasting);
        this.renderer.spawnCareSparks(c.wx, c.wz, 'feast', true);
        c.pulseTint('feast', 1.4);
      }
      // Consume hatchery food while eating
      if (this.hatcheryFood > 0) {
        this.hatcheryFood = Math.max(0, this.hatcheryFood - 1.8 * dt);
        c.hunger = Math.max(0, c.hunger - 70 * dt);
        // Loud food-spark VFX while pecking (screenshot-readable)
        if (Math.random() < dt * 5) {
          this.renderer.spawnCareSparks(c.wx, c.wz, 'feast', false);
          c.pulseTint('feast', 0.7);
        }
      } else {
        c.hunger = Math.max(0, c.hunger - 12 * dt); // meager scraps
      }
      if (c.hunger < 5) {
        c.job = JobType.Idle;
        c.jobTarget = null;
        c.eatAnnounced = false;
      }
    } else if (c.job === JobType.Sleep) {
      if (!arrived && c.pathIndex < c.path.length) return;
      // On bed — ensure occupancy counted
      if (c.jobTarget) {
        const key = `${c.jobTarget.x},${c.jobTarget.y}`;
        c.bedKey = key;
        this.bedOwners.set(key, c.id);
      }
      c.sleepNeed = Math.max(0, c.sleepNeed - 40 * dt);
      // Rest heals + visible regen cue
      const before = c.hp;
      if (c.hp < c.maxHp) c.hp = Math.min(c.maxHp, c.hp + 12 * dt);
      if (c.hp > before) {
        c.restHealAcc += dt;
        if (Math.random() < dt * 4.5) {
          this.renderer.spawnCareSparks(c.wx, c.wz, 'heal', false);
          c.pulseTint('heal', 0.75);
        }
        if (c.restHealAcc >= 1.6) {
          c.restHealAcc = 0;
          this.hud.say(MENTOR_LINES.lairResting);
          this.renderer.spawnCareSparks(c.wx, c.wz, 'heal', true);
          c.pulseTint('heal', 1.5);
        }
      }
      if (c.sleepNeed < 5 && c.hp >= c.maxHp * 0.95) {
        c.job = JobType.Idle;
        c.jobTarget = null;
        // Keep bed reservation for attraction/capacity; release only if leaving dungeon
      }
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

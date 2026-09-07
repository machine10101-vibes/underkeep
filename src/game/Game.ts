import * as THREE from 'three';
import { Creature } from '../entities/Creature';
import { DungeonRenderer } from '../rendering/DungeonRenderer';
import { HUD, MENTOR_LINES } from '../ui/HUD';
import { Grid } from './Grid';
import {
  BRIDGE_STONE_COST,
  BRIDGE_WOOD_COST,
  CREATURE_STATS,
  CreatureKind,
  DOOR_COST,
  DoorState,
  GOLD_WIN_THRESHOLD,
  JobType,
  KIT_CAP,
  MarkType,
  PAYDAY_INTERVAL,
  POSSESS_COST,
  RALLY_COST,
  ROOM_COST,
  RoomType,
  SENTRY_COST,
  SpellId,
  TILE_SIZE,
  ToolMode,
  TrapType,
  Vec2,
  TileKind,
  WIN_WAVES,
  isFlyer,
  isHeatResistant,
  roomSizeEfficiencyBonus,
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
  /** Multi-select set (Pass 6.4). Includes primary `selected`. */
  private selectedGroup: Creature[] = [];
  /** Possession — temporary FP follow of one minion. */
  private possessed: Creature | null = null;
  private possessCamBackup: {
    tx: number;
    tz: number;
    cx: number;
    cy: number;
    cz: number;
  } | null = null;
  private possessArmed = false;
  private lavaDmgAcc = 0;
  private paydayToastCooldown = 0;
  /** Pass 7.2 mission progress */
  private wavesCleared = 0;
  private doorKits = 0;
  private sentryKits = 0;
  private goldEver = 600;
  private minimapAcc = 0;
  private nextKitIsDoor = true;
  /** Pass 7.3 — corpses awaiting Graveyard raise. */
  private corpses: Array<{ x: number; y: number; timer: number; fromHero: boolean }> = [];
  /** Pass 7.4 — roster UI refresh accumulator. */
  private rosterAcc = 0;
  /** Temple prayer contributes to mana (active praying count). */
  private templePrayCount = 0;
  private boxSelecting = false;
  private boxStartClient: { x: number; y: number } | null = null;
  private boxMoved = false;
  private boxPointerId: number | null = null;
  private pendingPrimary: { tx: number; ty: number; hit: THREE.Vector3; shift: boolean } | null = null;
  private marqueeEl: HTMLElement | null = null;
  private heroWarn30 = false;
  private heroWarn10 = false;
  private heroEngageAnnounced = false;
  private gridDirty = true;
  private time = 0;
  private workerCostScale = 0;
  private portalCooldown = 0;
  private attracted = { skitterwing: false, rattlekin: false, emberling: false, gravemage: false };
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
  /** Mark paint without structural rebuild (overlay only). */
  private marksDirty = false;
  /** Fog reveal without structural rebuild. */
  private fogDirty = false;
  /** Coalesce expensive rebuildGrid calls. */
  private rebuildCooldown = 0;
  private pendingStructuralRebuild = false;
  /** Research progress 0–100 per rank; unlocks spell potency. */
  private researchProgress = 0;
  private researchRank = 0;
  private healUnlocked = false;

  constructor(canvas: HTMLCanvasElement) {
    // HUD first so New Game / sheets stay wired even if boot later fails
    this.hud = new HUD();
    this.marqueeEl = document.getElementById('select-marquee');
    this.hud.onToolChange = (t) => {
      this.tool = t;
      if (t !== 'select') {
        this.cancelBoxSelect();
      }
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
    this.hud.onRosterSelect = (id) => this.focusCreatureById(id);

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
    this.selectedGroup = [];
    this.boxSelecting = false;
    this.boxStartClient = null;
    this.boxMoved = false;
    this.pendingPrimary = null;
    this.hideMarquee();
    this.heroWarn30 = false;
    this.heroWarn10 = false;
    this.heroEngageAnnounced = false;
    this.hud.hideInspector();
    this.time = 0;
    this.workerCostScale = 0;
    this.portalCooldown = 0;
    this.attracted = { skitterwing: false, rattlekin: false, emberling: false, gravemage: false };
    this.heroWaveSpawned = false;
    this.heroWaveTimer = 90;
    this.wavesCleared = 0;
    this.doorKits = 0;
    this.sentryKits = 0;
    this.goldEver = 600;
    this.minimapAcc = 0;
    this.nextKitIsDoor = true;
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
    this.researchProgress = 0;
    this.researchRank = 0;
    this.healUnlocked = false;
    this.exitPossession(true);
    this.possessArmed = false;
    this.lavaDmgAcc = 0;
    this.paydayToastCooldown = 0;
    this.marksDirty = false;
    this.fogDirty = false;
    this.pendingStructuralRebuild = false;
    this.rebuildCooldown = 0;
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
        'Mission Briefing',
        `You are the Keeper of the Underkeep. Dig, claim, raise rooms, and crush heroes — the Heart must not fall. Objective: Survive ${WIN_WAVES} hero waves — OR gather ${GOLD_WIN_THRESHOLD} gold in the Treasury. Workshop kits arm doors & traps.`,
        'Begin'
      );
      this.hud.say(MENTOR_LINES.missionBrief.replace('%w', String(WIN_WAVES)).replace('%g', String(GOLD_WIN_THRESHOLD)));
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
      researchProgress: this.researchProgress,
      researchRank: this.researchRank,
      healUnlocked: this.healUnlocked,
      heroWaveSpawned: this.heroWaveSpawned,
      heroWaveTimer: this.heroWaveTimer,
      workerCostScale: this.workerCostScale,
      portalCooldown: this.portalCooldown,
      time: this.time,
      wageAcc: this.wageAcc,
      mentored: [...this.mentored],
      gameOver: this.gameOver,
      won: this.won,
      wavesCleared: this.wavesCleared,
      doorKits: this.doorKits,
      sentryKits: this.sentryKits,
      goldEver: this.goldEver,
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
    // Pre-6.5 saves lack explored flags — seed from claimed territory once
    if (!this.grid.tiles.some((tile) => tile.explored)) {
      this.grid.seedExploration();
    } else {
      // Ensure claimed/dirt/heart always lit + wall-face LOS
      this.grid.revealFromTerritory();
    }

    this.gold = data.gold;
    this.mana = data.mana;
    this.attracted = {
      skitterwing: !!data.attracted?.skitterwing,
      rattlekin: !!data.attracted?.rattlekin,
      emberling: !!data.attracted?.emberling,
      gravemage: !!(data.attracted as { gravemage?: boolean } | undefined)?.gravemage,
    };
    this.researchProgress = (data as SaveData & { researchProgress?: number }).researchProgress ?? 0;
    this.researchRank = (data as SaveData & { researchRank?: number }).researchRank ?? 0;
    this.healUnlocked = !!(data as SaveData & { healUnlocked?: boolean }).healUnlocked;
    this.heroWaveSpawned = !!data.heroWaveSpawned;
    this.heroWaveTimer = data.heroWaveTimer ?? 90;
    this.workerCostScale = data.workerCostScale ?? 0;
    this.portalCooldown = data.portalCooldown ?? 0;
    this.time = data.time ?? 0;
    this.wageAcc = data.wageAcc ?? 0;
    this.mentored = new Set(data.mentored ?? []);
    this.gameOver = !!data.gameOver;
    this.won = !!data.won;
    this.wavesCleared = data.wavesCleared ?? 0;
    this.doorKits = data.doorKits ?? 0;
    this.sentryKits = data.sentryKits ?? 0;
    this.goldEver = data.goldEver ?? Math.max(data.gold, 600);
    // Mid-wave-clear saves from pre-7.2: count a finished first wave
    if (
      this.heroWaveSpawned &&
      this.wavesCleared === 0 &&
      !this.won &&
      !this.gameOver &&
      !(data.creatures ?? []).some((c) => c.isHero)
    ) {
      this.wavesCleared = 1;
      if (this.wavesCleared < WIN_WAVES) {
        this.heroWaveSpawned = false;
        this.heroWaveTimer = 55;
        this.heroWarn30 = false;
        this.heroWarn10 = false;
      }
    }

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
      c.mood = 72;
      c.clampStats();
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
    this.marksDirty = false;
    this.fogDirty = false;
    this.pendingStructuralRebuild = false;
    this.rebuildCooldown = 0.22;
  }

  /** Structural terrain change — coalesced to avoid context-loss during dig/claim storms. */
  private requestStructuralRebuild(): void {
    this.pendingStructuralRebuild = true;
    this.gridDirty = true;
  }

  private flushMarks(): void {
    if (!this.marksDirty) return;
    this.renderer.syncMarkOverlay(this.grid);
    this.marksDirty = false;
  }

  private flushFog(): void {
    if (!this.fogDirty) return;
    this.renderer.syncFogOverlay(this.grid);
    this.fogDirty = false;
  }

  /** Reveal territory LOS / dig neighborhood without a structural rebuild. */
  private noteFogChange(changed: boolean): void {
    if (changed) this.fogDirty = true;
  }

  /** Mood must never become NaN — Math.min/max(NaN) stays NaN and poisons inspector bars. */
  private safeMood(c: Creature, next: number): void {
    const cur = Number.isFinite(c.mood) ? c.mood : 72;
    const n = Number.isFinite(next) ? next : cur;
    c.mood = Math.max(0, Math.min(100, n));
  }

  /** Purge dead/hero entries from multi-select without throwing. */
  private pruneSelection(): void {
    try {
      this.selectedGroup = this.selectedGroup.filter((c) => c && c.alive && !c.isHero);
      if (this.selected && (!this.selected.alive || this.selected.isHero)) {
        this.selected = null;
      }
      if (this.selected && !this.selectedGroup.includes(this.selected)) {
        this.selectedGroup.push(this.selected);
      }
      if (!this.selected && this.selectedGroup.length) {
        this.selected = this.selectedGroup[this.selectedGroup.length - 1];
      }
      if (!this.selectedGroup.length) {
        this.selected = null;
        this.hud.hideInspector();
      }
    } catch (err) {
      console.warn('[underkeep] pruneSelection failed', err);
      this.selected = null;
      this.selectedGroup = [];
      try { this.hud.hideInspector(); } catch { /* ignore */ }
    }
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
        g: 'guard',
        u: 'workshop',
        j: 'prison',
        k: 'torture',
        h: 'graveyard',
        m: 'temple',
        c: 'combatPit',
        d: 'door',
        f: 'sentry',
        y: 'rally',
      };
      if (map[e.key]) {
        this.tool = map[e.key];
        this.hud.setActiveTool(this.tool);
      }
      if (e.key.toLowerCase() === 'q') this.castSpell('createWorker');
      if (e.key.toLowerCase() === 'e') this.castSpell('speed');
      if (e.key.toLowerCase() === 'r') this.castSpell('lightning');
      if (e.key.toLowerCase() === 't') this.castSpell('heal');
      if (e.key.toLowerCase() === 'p') this.castSpell('possess');
      if (e.key.toLowerCase() === 'b') {
        this.tool = 'bridgeWood';
        this.hud.setActiveTool(this.tool);
      }
      if (e.key.toLowerCase() === 'n') {
        this.tool = 'bridgeStone';
        this.hud.setActiveTool(this.tool);
      }
      if (e.key.toLowerCase() === ' ' && this.held) {
        e.preventDefault();
        this.dropHeld();
      }
      if (e.key === 'Escape') {
        if (this.possessed) {
          this.exitPossession();
          return;
        }
        this.cancelBoxSelect();
        this.clearSelection();
        this.possessArmed = false;
      }
      if (e.key.toLowerCase() === 'l' && !e.metaKey && !e.ctrlKey) {
        this.refreshRosterUi(true);
        this.hud.openRoster();
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
        this.cancelBoxSelect();
        this.handleSecondaryAt(tp.x, tp.y, hit);
        return;
      }

      if (e.button === 0) {
        if (this.tool === 'select' && !this.held) {
          const onCreature = this.creatureAt(tp.x, tp.y, hit);
          // Start potential drag-box on empty ground (or always track; commit only if dragged)
          if (!onCreature || onCreature.isHero) {
            this.boxSelecting = true;
            this.boxMoved = false;
            this.boxStartClient = { x: e.clientX, y: e.clientY };
            this.pendingPrimary = { tx: tp.x, ty: tp.y, hit: hit.clone(), shift: e.shiftKey };
            return;
          }
          // Creature under cursor — immediate Hand / shift-select
          this.handlePrimaryAt(tp.x, tp.y, hit, e.shiftKey);
          return;
        }
        this.handlePrimaryAt(tp.x, tp.y, hit, e.shiftKey);
      }
    });

    canvas.addEventListener('mouseup', (e) => {
      if (performance.now() < this.ignoreMouseUntil) return;
      if (this.boxSelecting && this.boxStartClient) {
        const start = this.boxStartClient;
        if (this.boxMoved) {
          this.selectCreaturesInScreenBox(
            canvas,
            start.x,
            start.y,
            e.clientX,
            e.clientY,
            e.shiftKey || !!(this.pendingPrimary?.shift)
          );
        } else if (this.pendingPrimary) {
          const p = this.pendingPrimary;
          this.handlePrimaryAt(p.tx, p.ty, p.hit, p.shift || e.shiftKey);
        }
        this.cancelBoxSelect();
      }
      this.paint = false;
      this.lastPaint = null;
      this.flushMarks();
    });

    canvas.addEventListener('mouseleave', () => {
      if (this.boxSelecting) this.cancelBoxSelect();
    });

    canvas.addEventListener('mousemove', (e) => {
      if (performance.now() < this.ignoreMouseUntil) return;
      this.updatePointerHover(e, canvas);
      if (this.boxSelecting && this.boxStartClient && this.tool === 'select') {
        const dx = e.clientX - this.boxStartClient.x;
        const dy = e.clientY - this.boxStartClient.y;
        if (Math.hypot(dx, dy) > 8) {
          this.boxMoved = true;
          this.updateMarquee(this.boxStartClient.x, this.boxStartClient.y, e.clientX, e.clientY);
        }
      }
      if (this.paint && this.tool !== 'select') {
        const tp = this.pointerToTile(e, canvas);
        if (!tp) return;
        if (!this.lastPaint || this.lastPaint.x !== tp.x || this.lastPaint.y !== tp.y) {
          this.applyTool(tp.x, tp.y);
          this.lastPaint = { ...tp };
        }
      }
      if (this.held) {
        try {
          const hit = this.pointerToWorld(e, canvas);
          if (hit && Number.isFinite(hit.x) && Number.isFinite(hit.z)) {
            this.held.wx = hit.x;
            this.held.wz = hit.z;
          }
        } catch (err) {
          console.warn('[underkeep] held follow failed', err);
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
        try {
          const hit = this.pointerToWorld(p, canvas);
          if (hit && Number.isFinite(hit.x) && Number.isFinite(hit.z)) {
            this.held.wx = hit.x;
            this.held.wz = hit.z;
          }
        } catch { /* ignore held follow */ }
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

  private handlePrimaryAt(tx: number, ty: number, hit: THREE.Vector3, shift = false): void {
    try {
      if (this.tool === 'select') {
        if (this.possessed) {
          // While possessing: click ground to move the vessel
          this.possessMoveTo(tx, ty);
          return;
        }
        if (this.held) {
          this.dropHeldAt(tx, ty);
          return;
        }
        const c = this.creatureAt(tx, ty, hit);
        // Armed Possess spell — click a minion to enter them
        if (this.possessArmed && c && !c.isHero) {
          this.possessArmed = false;
          if (this.mana < POSSESS_COST) {
            this.hud.say('Not enough mana to Possess.');
            return;
          }
          this.mana -= POSSESS_COST;
          this.enterPossession(c);
          return;
        }
        // Shift-click: toggle multi-select without Hand pick-up
        if (c && !c.isHero && shift) {
          this.toggleSelectCreature(c);
          return;
        }
        // Click knocked-out hero → Hand pick for Prison
        if (c && c.isHero && (c.knockedOut || c.isPrisoner)) {
          this.pickUp(c);
          return;
        }
        // Click hero while squad selected → attack-move toward them
        if (c && c.isHero && !c.knockedOut && !c.isPrisoner && this.selectedGroup.some((x) => x.alive && !x.isWorker)) {
          this.issueAttackMove(c.x, c.y, true);
          return;
        }
        if (c && !c.isHero) {
          this.selectCreature(c);
          this.pickUp(c);
          return;
        }
        // Empty tile with selection → attack-move / rally attack
        if (this.selectedGroup.some((x) => x.alive && !x.held)) {
          const walk =
            this.grid.isWalkable(tx, ty) || this.grid.get(tx, ty)?.kind === TileKind.Heart;
          if (walk) {
            this.issueAttackMove(tx, ty, false);
            return;
          }
        }
        // Empty / invalid — deselect
        this.clearSelection();
      } else {
        this.paint = true;
        this.applyTool(tx, ty);
        this.lastPaint = { x: tx, y: ty };
      }
    } catch (err) {
      console.warn('[underkeep] primary input failed', err);
    }
  }

  private handleSecondaryAt(tx: number, ty: number, worldHit?: THREE.Vector3): void {
    try {
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
        this.marksDirty = true;
        this.flushMarks();
      }
    } catch (err) {
      console.warn('[underkeep] secondary input failed', err);
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
        tile.room !== RoomType.None
          ? ` · ${['', 'Treasury', 'Lair', 'Hatchery', 'Training', 'Library', 'Portal', 'Guard', 'Workshop', 'Prison', 'Torture Chamber', 'Graveyard', 'Temple', 'Combat Pit'][tile.room]}`
          : '';
      if (tile.room === RoomType.Hatchery) room += ` · food ${Math.floor(this.hatcheryFood)}`;
      if (tile.room === RoomType.Workshop) room += ` · kits D${this.doorKits}/S${this.sentryKits}`;
      if (
        tile.room === RoomType.Lair ||
        tile.room === RoomType.Hatchery ||
        tile.room === RoomType.Library
      ) {
        const sz = this.grid.largestContiguousRoom(tile.room);
        const bonus = roomSizeEfficiencyBonus(sz);
        if (sz > 0) {
          room += ` · size ${sz}`;
          if (bonus > 0) room += ` · +${Math.round(bonus * 100)}% eff`;
        }
      }
      if (tile.room === RoomType.Prison) {
        const n = this.creatures.filter((c) => c.alive && c.isPrisoner).length;
        room += ` · prisoners ${n}`;
      }
      if (tile.room === RoomType.Graveyard) {
        room += ` · corpses ${this.corpses.length}`;
      }
      if (tile.room === RoomType.Temple) {
        room += ` · praying ${this.templePrayCount}`;
      }
      if (tile.room === RoomType.CombatPit) {
        const pitters = this.creatures.filter(
          (c) => c.alive && !c.isHero && c.job === JobType.Train && this.grid.get(c.x, c.y)?.room === RoomType.CombatPit
        ).length;
        room += ` · sparring ${pitters}`;
      }
      if (tile.door === DoorState.Closed) room += ' · Door (closed)';
      if (tile.door === DoorState.Open) room += ' · Door (open)';
      if (tile.trap === TrapType.Sentry) room += ' · Sentry trap';
      if (tile.rally) room += ' · Rally flag';
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
              : tile.kind === TileKind.Lava
                ? 'Lava'
                : tile.kind === TileKind.Water
                  ? 'Water'
                  : tile.kind === TileKind.BridgeWood
                    ? 'Wood Bridge'
                    : tile.kind === TileKind.BridgeStone
                      ? 'Stone Bridge'
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
      case 'bridgeWood':
        return 0xc08040;
      case 'bridgeStone':
        return 0x8090a8;
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

  private hideMarquee(): void {
    if (this.marqueeEl) {
      this.marqueeEl.classList.add('hidden');
      this.marqueeEl.style.width = '0';
      this.marqueeEl.style.height = '0';
    }
  }

  private cancelBoxSelect(): void {
    this.boxSelecting = false;
    this.boxStartClient = null;
    this.boxMoved = false;
    this.pendingPrimary = null;
    this.hideMarquee();
  }

  private updateMarquee(x0: number, y0: number, x1: number, y1: number): void {
    if (!this.marqueeEl) return;
    const left = Math.min(x0, x1);
    const top = Math.min(y0, y1);
    const w = Math.abs(x1 - x0);
    const h = Math.abs(y1 - y0);
    this.marqueeEl.classList.remove('hidden');
    this.marqueeEl.style.left = `${left}px`;
    this.marqueeEl.style.top = `${top}px`;
    this.marqueeEl.style.width = `${w}px`;
    this.marqueeEl.style.height = `${h}px`;
  }

  private clearSelection(): void {
    for (const c of this.selectedGroup) c.selected = false;
    if (this.selected) this.selected.selected = false;
    this.selected = null;
    this.selectedGroup = [];
    this.hud.hideInspector();
  }

  private syncSelectionPrimary(): void {
    try {
      this.selectedGroup = this.selectedGroup.filter((c) => c && c.alive && !c.isHero);
      for (const c of this.creatures) {
        if (!this.selectedGroup.includes(c)) c.selected = false;
      }
      for (const c of this.selectedGroup) c.selected = true;
      this.selected = this.selectedGroup.length ? this.selectedGroup[this.selectedGroup.length - 1] : null;
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] syncSelectionPrimary failed', err);
      this.pruneSelection();
    }
  }

  private selectCreature(c: Creature): void {
    if (!c || !c.alive || c.isHero) return;
    for (const o of this.selectedGroup) o.selected = false;
    this.selectedGroup = [c];
    this.selected = c;
    c.selected = true;
    this.refreshInspector();
  }

  private toggleSelectCreature(c: Creature): void {
    if (!c || !c.alive || c.isHero) return;
    const idx = this.selectedGroup.indexOf(c);
    if (idx >= 0) {
      c.selected = false;
      this.selectedGroup.splice(idx, 1);
    } else {
      this.selectedGroup.push(c);
      c.selected = true;
      this.mentioneOnce('groupSelect', MENTOR_LINES.groupSelect);
    }
    this.syncSelectionPrimary();
  }

  private selectCreaturesInScreenBox(
    canvas: HTMLCanvasElement,
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    additive: boolean
  ): void {
    try {
      const left = Math.min(x0, x1);
      const right = Math.max(x0, x1);
      const top = Math.min(y0, y1);
      const bottom = Math.max(y0, y1);
      if (right - left < 6 && bottom - top < 6) return;
      const cam = this.renderer.camera;
      const rect = canvas.getBoundingClientRect();
      const picked: Creature[] = [];
      const v = new THREE.Vector3();
      for (const c of this.creatures) {
        if (!c.alive || c.isHero || c.held) continue;
        if (!Number.isFinite(c.wx) || !Number.isFinite(c.wz)) continue;
        v.set(c.wx, 0.6, c.wz);
        v.project(cam);
        if (!Number.isFinite(v.x) || !Number.isFinite(v.y)) continue;
        const sx = ((v.x + 1) / 2) * rect.width + rect.left;
        const sy = ((-v.y + 1) / 2) * rect.height + rect.top;
        if (sx >= left && sx <= right && sy >= top && sy <= bottom) picked.push(c);
      }
      if (!additive) {
        for (const o of this.selectedGroup) o.selected = false;
        this.selectedGroup = [];
      }
      for (const c of picked) {
        if (!this.selectedGroup.includes(c)) this.selectedGroup.push(c);
        c.selected = true;
      }
      if (picked.length) this.mentioneOnce('groupSelect', MENTOR_LINES.groupSelect);
      this.syncSelectionPrimary();
    } catch (err) {
      console.warn('[underkeep] box select failed', err);
    }
  }

  /** Attack-move / rally attack for selected fighters (and combat minions). */
  private issueAttackMove(tx: number, ty: number, towardHero = false): void {
    try {
      this.pruneSelection();
      const units = this.selectedGroup.filter(
        (c) => c.alive && !c.isHero && !c.isWorker && !c.held
      );
      if (!units.length) {
        // Allow Scrabblers to still get a move order if that's all that's selected
        const any = this.selectedGroup.filter((c) => c.alive && !c.isHero && !c.held);
        if (!any.length) return;
        for (const c of any) {
          try {
            if (c.bedKey) this.releaseBed(c);
            c.job = JobType.Wander;
            c.jobTarget = { x: tx, y: ty };
            c.setPath(this.grid.findPath(c.x, c.y, tx, ty));
          } catch (err) {
            console.warn('[underkeep] move order unit failed', err);
          }
        }
        this.hud.sayNow('Move order issued.');
        return;
      }
      let i = 0;
      for (const c of units) {
        try {
          if (c.bedKey) this.releaseBed(c);
          // Slight scatter so they don't stack on one tile
          const ox = (i % 3) - 1;
          const oy = Math.floor(i / 3) % 2;
          i++;
          let dx = tx + ox;
          let dy = ty + oy;
          if (!this.grid.isWalkable(dx, dy)) {
            dx = tx;
            dy = ty;
          }
          c.job = JobType.AttackMove;
          c.jobTarget = { x: dx, y: dy };
          const path = this.grid.findPath(
            Number.isFinite(c.x) ? c.x : dx,
            Number.isFinite(c.y) ? c.y : dy,
            dx,
            dy
          );
          if (path) c.setPath(path);
          else c.setPath(null);
          this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + 3);
          c.clampStats();
        } catch (err) {
          console.warn('[underkeep] attack-move unit failed', err);
        }
      }
      try {
        const w = this.grid.tileToWorld(tx, ty);
        if (Number.isFinite(w.x) && Number.isFinite(w.z)) {
          this.renderer.spawnFx(new THREE.Vector3(w.x, 0.9, w.z), towardHero ? 0xff6040 : 0xffcc44, 0.55);
        }
      } catch { /* ignore fx */ }
      this.hud.sayNow(towardHero ? MENTOR_LINES.attackHero : MENTOR_LINES.attackMove);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] issueAttackMove failed', err);
    }
  }

  private refreshInspector(): void {
    try {
      const c = this.held ?? this.selected;
      if (!c || !c.alive) {
        this.hud.hideInspector();
        return;
      }
      c.clampStats();
      const kindNames: Record<string, string> = {
        scrabbler: 'Scrabbler',
        skitterwing: 'Skitterwing',
        rattlekin: 'Rattlekin',
        emberling: 'Emberling',
        gravemage: 'Gravemage',
        thornwitch: 'Thornwitch',
        bonewretch: 'Bonewretch',
        hero_knight: 'Hero Knight',
        hero_archer: 'Hero Archer',
      };
      const jobRaw = typeof c.job === 'string' && c.job.length > 0 ? c.job : 'idle';
      const jobLabel = c.held
        ? 'Held'
        : c.isPrisoner
          ? c.convertProgress > 0
            ? `Converting ${Math.floor(c.convertProgress)}%`
            : 'Prisoner'
          : c.knockedOut
            ? 'Knocked out'
            : jobRaw === JobType.AttackMove
              ? 'Attack'
              : jobRaw === JobType.Pray
                ? 'Praying'
                : jobRaw === JobType.DragWounded
                  ? 'Dragging wounded'
                  : jobRaw === JobType.Flee
                    ? 'Fleeing'
                    : jobRaw.charAt(0).toUpperCase() + jobRaw.slice(1);
      const groupN = this.selectedGroup.filter((x) => x.alive).length;
      const kindLabel = kindNames[c.kind] ?? String(c.kind);
      this.hud.showInspector({
        kind: groupN > 1 ? `${kindLabel} (+${groupN - 1})` : kindLabel,
        job: groupN > 1 ? `${jobLabel} · squad ${groupN}` : jobLabel,
        hp: c.hp,
        maxHp: c.maxHp,
        hunger: c.hunger,
        tired: c.sleepNeed,
        mood: c.mood,
        efficiency: c.workEfficiency(),
        held: c.held,
      });
    } catch (err) {
      console.warn('[underkeep] refreshInspector failed', err);
    }
  }

  private applyTool(x: number, y: number): void {
    const tile = this.grid.get(x, y);
    if (!tile) return;

    if (this.tool === 'dig') {
      if (this.grid.isDiggable(x, y)) {
        tile.mark = MarkType.Dig;
        if (tile.digProgress <= 0) tile.digProgress = 0;
        this.marksDirty = true;
      }
    } else if (this.tool === 'claim') {
      if (tile.kind === TileKind.Dirt) {
        tile.mark = MarkType.Claim;
        this.marksDirty = true;
      }
    } else if (this.tool === 'fortify') {
      if (
        (tile.kind === TileKind.Earth || tile.kind === TileKind.Gold) &&
        this.grid.hasAdjacentClaimed(x, y)
      ) {
        tile.mark = MarkType.Fortify;
        this.marksDirty = true;
      }
    } else if (this.tool === 'bridgeWood' || this.tool === 'bridgeStone') {
      this.placeBridge(x, y, this.tool === 'bridgeStone');
    } else if (this.tool === 'door') {
      if (this.grid.canPlaceDoor(x, y)) {
        if (tile.door === DoorState.None) {
          if (!this.spendDoorOrSentry('door')) return;
          tile.door = DoorState.Closed;
          this.requestStructuralRebuild();
          this.mentioneOnce('doorBuilt', MENTOR_LINES.doorBuilt);
          this.saveNow();
        } else if (tile.door === DoorState.Closed) {
          tile.door = DoorState.Open;
          this.requestStructuralRebuild();
          this.hud.say(MENTOR_LINES.doorOpen);
          this.saveNow();
        } else {
          tile.door = DoorState.Closed;
          this.requestStructuralRebuild();
          this.hud.say(MENTOR_LINES.doorClosed);
          this.saveNow();
        }
      }
    } else if (this.tool === 'sentry') {
      if (tile.kind === TileKind.Claimed && tile.trap === TrapType.None) {
        if (!this.spendDoorOrSentry('sentry')) return;
        tile.trap = TrapType.Sentry;
        this.requestStructuralRebuild();
        this.mentioneOnce('sentryBuilt', MENTOR_LINES.sentryBuilt);
        this.saveNow();
      }
    } else if (this.tool === 'rally') {
      if (tile.kind === TileKind.Claimed) {
        if (tile.rally) {
          tile.rally = false;
          this.hud.say(MENTOR_LINES.rallyCleared);
          this.requestStructuralRebuild();
          this.saveNow();
          return;
        }
        if (this.gold < RALLY_COST) return;
        this.gold -= RALLY_COST;
        // Single rally: clear others
        for (const t of this.grid.tiles) t.rally = false;
        tile.rally = true;
        this.requestStructuralRebuild();
        this.hud.say(MENTOR_LINES.rallyPlanted);
        // Snap fighters to Guard on the flag
        for (const c of this.creatures) {
          if (!c.alive || c.isHero || c.isWorker || c.held) continue;
          if (
            c.kind === CreatureKind.Rattlekin ||
            c.kind === CreatureKind.Emberling ||
            c.kind === CreatureKind.Skitterwing
          ) {
            c.job = JobType.Guard;
            c.jobTarget = { x, y };
            const path = this.grid.findPath(c.x, c.y, x, y);
            if (path) c.setPath(path);
          }
        }
        this.saveNow();
      }
    } else {
      const roomMap: Partial<Record<ToolMode, RoomType>> = {
        treasury: RoomType.Treasury,
        lair: RoomType.Lair,
        hatchery: RoomType.Hatchery,
        training: RoomType.Training,
        library: RoomType.Library,
        portal: RoomType.Portal,
        guard: RoomType.Guard,
        workshop: RoomType.Workshop,
        prison: RoomType.Prison,
        torture: RoomType.Torture,
        graveyard: RoomType.Graveyard,
        temple: RoomType.Temple,
        combatPit: RoomType.CombatPit,
      };
      const room = roomMap[this.tool];
      if (room && tile.kind === TileKind.Claimed && tile.room === RoomType.None) {
        const cost = ROOM_COST[room];
        if (this.gold >= cost) {
          this.gold -= cost;
          tile.room = room;
          this.requestStructuralRebuild();
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
          if (room === RoomType.Guard) {
            this.mentioneOnce('guardBuilt', MENTOR_LINES.guardBuilt);
          }
          if (room === RoomType.Workshop) {
            this.mentioneOnce('workshopBuilt', MENTOR_LINES.workshopBuilt);
          }
          if (room === RoomType.Prison) {
            this.mentioneOnce('prisonBuilt', MENTOR_LINES.prisonBuilt);
          }
          if (room === RoomType.Torture) {
            this.mentioneOnce('tortureBuilt', MENTOR_LINES.tortureBuilt);
          }
          if (room === RoomType.Graveyard) {
            this.mentioneOnce('graveyardBuilt', MENTOR_LINES.graveyardBuilt);
          }
          if (room === RoomType.Temple) {
            this.mentioneOnce('templeBuilt', MENTOR_LINES.templeBuilt);
          }
          if (room === RoomType.CombatPit) {
            this.mentioneOnce('combatPitBuilt', MENTOR_LINES.combatPitBuilt);
          }
          this.saveNow();
        }
      }
    }
  }

  private pickUp(c: Creature): void {
    try {
      if (!c || !c.alive) return;
      // Only heroes allowed in Hand are knocked-out / prisoner captives
      if (c.isHero && !c.knockedOut && !c.isPrisoner) return;
      // Release bed if carried off
      if (c.bedKey && this.bedOwners.get(c.bedKey) === c.id) {
        this.bedOwners.delete(c.bedKey);
      }
      c.bedKey = null;
      c.clampStats();
      c.held = true;
      c.setPath(null);
      c.job = JobType.Idle;
      c.jobTarget = null;
      c.workTimer = 0;
      this.held = c;
      this.selectCreature(c);
      const wx = Number.isFinite(c.wx) ? c.wx : 0;
      const wz = Number.isFinite(c.wz) ? c.wz : 0;
      this.renderer.spawnFx(new THREE.Vector3(wx, 1.0, wz), 0xffdd88, 0.45);
      this.mentioneOnce('pickUp', MENTOR_LINES.pickUp);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] pickUp failed', err);
      // Never leave a half-held creature that desyncs the Hand
      try {
        if (c) {
          c.held = false;
          if (this.held === c) this.held = null;
        }
      } catch { /* ignore */ }
    }
  }

  private dropHeld(): void {
    if (!this.held) return;
    const tp = this.grid.worldToTile(this.held.wx, this.held.wz);
    this.dropHeldAt(tp.x, tp.y);
  }

  private dropHeldAt(x: number, y: number): void {
    const c = this.held;
    if (!c) return;
    try {
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

    // Dropping captive on Prison → imprison
    const dropTile = this.grid.get(x, y);
    if (c.isHero && (c.knockedOut || c.isPrisoner) && dropTile?.room === RoomType.Prison) {
      this.imprisonCreature(c, x, y);
      this.held = null;
      this.refreshInspector();
      return;
    }
    // Dropping captive on Torture → start conversion faster
    if (c.isHero && (c.knockedOut || c.isPrisoner) && dropTile?.room === RoomType.Torture) {
      this.imprisonCreature(c, x, y);
      c.convertProgress = Math.max(c.convertProgress, 25);
      this.hud.sayNow(MENTOR_LINES.converting);
      this.held = null;
      this.refreshInspector();
      return;
    }
    // Dropping KO ally onto Lair bed → recover toward sleep
    if (!c.isHero && c.knockedOut && dropTile?.room === RoomType.Lair) {
      c.knockedOut = false;
      c.hp = Math.max(c.hp, Math.floor(c.maxHp * 0.25));
      c.job = JobType.Sleep;
      c.jobTarget = { x, y };
      c.bedKey = `${x},${y}`;
      this.bedOwners.set(c.bedKey, c.id);
      c.setPath(null);
      this.hud.sayNow(MENTOR_LINES.lairResting);
      this.held = null;
      this.refreshInspector();
      return;
    }
    // stun if dropped into fight (near enemy) — Combat Pit training exception (DK2-style)
    if (!c.isHero) {
      const onPit = dropTile?.room === RoomType.CombatPit;
      const nearEnemy = this.creatures.some(
        (o) =>
          o.alive &&
          o !== c &&
          o.isHero !== c.isHero &&
          !o.knockedOut &&
          !o.isPrisoner &&
          Math.hypot(o.x - x, o.y - y) < 2.5
      );
      if (nearEnemy && !onPit) {
        c.stunTimer = 1.5;
      }
      this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + 4);
    }
    this.held = null;
    c.clampStats();
    this.mentioneOnce('drop', MENTOR_LINES.drop);
    this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] dropHeldAt failed', err);
      try {
        if (c) {
          c.held = false;
          c.clampStats();
        }
        this.held = null;
      } catch { /* ignore */ }
    }
  }

  private slap(c: Creature): void {
    try {
      if (!c || !c.alive || c.isHero) return;
      c.clampStats();
      // Stun + interrupt current job (DK2-like Hand slap)
      c.stunTimer = Math.max(c.stunTimer, 1.35);
      c.speedBuff = Math.max(c.speedBuff, 2.8);
      c.sleepNeed = Math.max(0, Math.min(100, c.sleepNeed - 12));
      c.hunger = Math.max(0, Math.min(100, c.hunger - 4));
      this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + 8);
      c.setPath(null);
      c.workTimer = 0;
      if (c.job !== JobType.Sleep && c.job !== JobType.Eat) {
        c.job = JobType.Idle;
        c.jobTarget = null;
      }
      const wx = Number.isFinite(c.wx) ? c.wx : 0;
      const wz = Number.isFinite(c.wz) ? c.wz : 0;
      // Brief slap VFX (capped — excess particles contributed to context-loss blackouts)
      this.renderer.spawnFx(new THREE.Vector3(wx, 0.7, wz), 0xffee88, 0.7);
      this.renderer.spawnFx(new THREE.Vector3(wx, 1.15, wz), 0xffaa44, 0.55);
      this.renderer.spawnDigDebris(wx, wz, 0xffdd88);
      // Conclusive toast on EVERY successful slap — before any further UI work
      this.hud.sayNow(MENTOR_LINES.slap);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] slap failed', err);
      // Still show the toast even if VFX/inspector blows up
      try { this.hud.sayNow(MENTOR_LINES.slap); } catch { /* ignore */ }
    }
  }


  /** Prefer Workshop kits; else gold (discounted if Workshop exists). */
  private spendDoorOrSentry(kind: 'door' | 'sentry'): boolean {
    if (kind === 'door' && this.doorKits > 0) {
      this.doorKits--;
      this.hud.sayNow(`Door kit spent (${this.doorKits} left).`);
      return true;
    }
    if (kind === 'sentry' && this.sentryKits > 0) {
      this.sentryKits--;
      this.hud.sayNow(`Sentry kit spent (${this.sentryKits} left).`);
      return true;
    }
    const hasShop = this.grid.countRoom(RoomType.Workshop) > 0;
    const base = kind === 'door' ? DOOR_COST : SENTRY_COST;
    const cost = hasShop ? Math.floor(base * 0.7) : base;
    if (this.gold < cost) {
      this.hud.sayNow(
        hasShop
          ? `Need ${cost}g (Workshop discount) or a ${kind} kit.`
          : `Need ${cost} gold — or craft kits in a Workshop.`
      );
      return false;
    }
    this.gold -= cost;
    if (hasShop) this.hud.say(`Workshop discount — ${kind} for ${cost}g.`);
    return true;
  }

  private syncMissionHud(): void {
    this.hud.setObjective(`W${this.wavesCleared}/${WIN_WAVES} · ${Math.floor(this.gold)}/${GOLD_WIN_THRESHOLD}g`);
    this.hud.setKits(this.doorKits, this.sentryKits);
    this.hud.setWorkerCost(this.workerCost());
  }

  private updateMinimap(): void {
    this.hud.drawMinimap({
      width: this.grid.width,
      height: this.grid.height,
      heartX: this.grid.heartPos.x,
      heartY: this.grid.heartPos.y,
      kindAt: (x, y) => this.grid.get(x, y)?.kind ?? 0,
      exploredAt: (x, y) => !!this.grid.get(x, y)?.explored,
      roomAt: (x, y) => this.grid.get(x, y)?.room ?? 0,
    });
  }

  private checkMissionWin(): void {
    if (this.won || this.gameOver) return;
    if (this.gold >= GOLD_WIN_THRESHOLD) {
      this.won = true;
      this.gameOver = true;
      this.hud.sayNow(MENTOR_LINES.winGold);
      this.hud.showOverlay('Victory — Gold', MENTOR_LINES.winGold + ' The Underkeep gleams.', 'Reign Again');
      return;
    }
    if (this.wavesCleared >= WIN_WAVES) {
      this.won = true;
      this.gameOver = true;
      this.hud.sayNow(MENTOR_LINES.winWaves);
      this.hud.showOverlay('Victory', MENTOR_LINES.winWaves + ' The dark endures.', 'Reign Again');
    }
  }

  private workerCost(): number {
    return WORKER_BASE_COST + this.workerCostScale * 50;
  }

  private castSpell(spell: SpellId): void {
    if (this.gameOver) return;
    if (spell === 'createWorker') {
      const cost = this.workerCost();
      if (this.gold < cost) {
        this.hud.sayNow(`Need ${cost} gold to forge a Scrabbler.`);
        return;
      }
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
      const c = this.spawnCreature(CreatureKind.Scrabbler, sx, sy);
      c.pulseTint('heal', 0.9);
      c.speedBuff = Math.max(c.speedBuff, 2.5);
      const w = this.grid.tileToWorld(sx, sy);
      this.renderer.spawnFx(new THREE.Vector3(w.x, 0.6, w.z), 0x88ff60, 0.85);
      this.renderer.spawnFx(new THREE.Vector3(w.x, 1.2, w.z), 0xffe080, 0.7);
      this.renderer.spawnCareSparks(w.x, w.z, 'heal', true);
      const next = this.workerCost();
      this.hud.sayNow(
        MENTOR_LINES.workerSpawn.replace('%g', String(cost)).replace('%n', String(next))
      );
      this.hud.say(MENTOR_LINES.worker);
      this.hud.setWorkerCost(next);
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
      const heroes = this.creatures.filter(
        (c) => c.alive && c.isHero && !c.knockedOut && !c.isPrisoner
      );
      if (!heroes.length) return;
      this.mana -= LIGHTNING_COST;
      const target = heroes.reduce((a, b) => {
        const da = Math.hypot(a.x - this.grid.heartPos.x, a.y - this.grid.heartPos.y);
        const db = Math.hypot(b.x - this.grid.heartPos.x, b.y - this.grid.heartPos.y);
        return da < db ? a : b;
      });
      const dmg = 45 + this.researchRank * 12;
      const wasAlive = target.alive;
      target.takeDamage(dmg);
      if (wasAlive && !target.alive) {
        if (this.grid.countRoom(RoomType.Prison) > 0) {
          target.alive = true;
          target.hp = 1;
          target.knockedOut = true;
          target.job = JobType.Idle;
          target.jobTarget = null;
          target.setPath(null);
          this.hud.sayNow(MENTOR_LINES.heroKnocked);
        } else {
          this.spawnCorpse(target.x, target.y, true);
        }
      }
      const from = new THREE.Vector3(
        this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y).x,
        4,
        this.grid.tileToWorld(this.grid.heartPos.x, this.grid.heartPos.y).z
      );
      this.renderer.spawnLightning(from, new THREE.Vector3(target.wx, 1, target.wz));
      this.hud.say(MENTOR_LINES.lightning);
      return;
    }
    if (spell === 'heal') {
      if (!this.healUnlocked) {
        this.hud.say('Heal is sealed. Staff a Library with Gravemages to research it.');
        return;
      }
      const cost = 30;
      if (this.mana < cost) return;
      this.mana -= cost;
      let healed = 0;
      for (const c of this.creatures) {
        if (!c.alive || c.isHero) continue;
        if (c.hp < c.maxHp) {
          c.hp = Math.min(c.maxHp, c.hp + 35 + this.researchRank * 8);
          c.pulseTint('heal', 1.1);
          this.renderer.spawnCareSparks(c.wx, c.wz, 'heal', false);
          healed++;
        }
      }
      this.hud.say(healed ? MENTOR_LINES.heal : 'No wounds to mend — for now.');
      return;
    }
    if (spell === 'possess') {
      if (this.possessed) {
        this.exitPossession();
        return;
      }
      if (this.mana < POSSESS_COST) {
        this.hud.say('Not enough mana to Possess.');
        return;
      }
      // Prefer currently selected / held minion
      const target =
        (this.held && this.held.alive && !this.held.isHero ? this.held : null) ||
        (this.selected && this.selected.alive && !this.selected.isHero ? this.selected : null);
      if (target) {
        this.mana -= POSSESS_COST;
        if (this.held === target) {
          // Drop from Hand into possession
          target.held = false;
          this.held = null;
        }
        this.enterPossession(target);
        return;
      }
      // Arm click-to-possess
      this.possessArmed = true;
      this.hud.say(MENTOR_LINES.possessArm);
      this.hud.sayNow('Possess armed — click a minion to ride their senses. Esc exits.');
      return;
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

  /** QA/screenshot: Pass 6.1c — pick+inspector Efficiency + slap toast, no blackout. */
  preparePass61cShot(focus: 'pick' | 'slap' | 'both' = 'both'): void {
    this.preparePass5bShot();
    this.tool = 'select';
    this.hud.setActiveTool('select');
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    const target = workers.find((c) => c.job !== JobType.Sleep && c.job !== JobType.Eat) ?? workers[0];
    if (!target) return;
    // Prove clamps: briefly force garbage then clamp before UI
    target.mood = 24;
    target.hunger = 70;
    target.sleepNeed = 55;
    target.hp = target.maxHp * 0.65;
    target.efficiencyWarned = true;
    target.clampStats();
    this.mana = Math.max(0, this.mana);
    this.held = null;
    for (const c of this.creatures) c.held = false;
    this.pickUp(target);
    const focusW = this.grid.tileToWorld(target.x, target.y);
    target.wx = focusW.x + 0.8;
    target.wz = focusW.z + 0.3;
    target.syncMesh(this.time);
    this.camTarget.set(focusW.x, 0, focusW.z);
    this.renderer.camera.position.set(focusW.x + 2, 17, focusW.z + 10);
    this.renderer.camera.lookAt(this.camTarget);
    this.refreshInspector();
    if (focus === 'pick') {
      this.hud.sayNow(MENTOR_LINES.sluggishDig);
      this.refreshInspector();
      return;
    }
    const moodKeep = target.mood;
    this.slap(target);
    target.mood = moodKeep;
    target.clampStats();
    this.refreshInspector();
    this.hud.sayNow(MENTOR_LINES.slap);
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

  /** QA: sustained dig load — many marks + diggers, no context-loss expected. */
  preparePass62aStabShot(): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    // Claim a work yard
    for (let y = hy - 5; y <= hy + 2; y++) {
      for (let x = hx - 4; x <= hx + 4; x++) {
        const t = this.grid.get(x, y);
        if (!t || t.kind === TileKind.Heart || t.kind === TileKind.Rock) continue;
        if (t.kind === TileKind.Earth || t.kind === TileKind.Gold || t.kind === TileKind.Dirt) {
          t.kind = TileKind.Claimed;
          t.claimedProgress = 1;
          t.mark = MarkType.None;
          t.digProgress = 0;
        }
      }
    }
    // Ring of dig marks
    const digs: Array<{ x: number; y: number }> = [];
    for (let x = hx - 5; x <= hx + 5; x++) {
      digs.push({ x, y: hy - 6 });
      digs.push({ x, y: hy + 4 });
    }
    for (let y = hy - 5; y <= hy + 3; y++) {
      digs.push({ x: hx - 5, y });
      digs.push({ x: hx + 5, y });
    }
    for (const pos of digs) {
      const t = this.grid.get(pos.x, pos.y);
      if (!t || t.kind === TileKind.Heart || t.kind === TileKind.Rock) continue;
      t.kind = TileKind.Earth;
      t.fortified = false;
      t.mark = MarkType.Dig;
      t.digProgress = 0.15 + Math.random() * 0.35;
      t.room = RoomType.None;
    }
    // Extra workers for dig pressure
    while (this.creatures.filter((c) => c.alive && c.isWorker).length < 6) {
      this.spawnCreature(CreatureKind.Scrabbler, hx + 1, hy + 1);
    }
    const workers = this.creatures.filter((c) => c.alive && c.isWorker);
    for (let i = 0; i < workers.length; i++) {
      const w = workers[i];
      const target = digs[i % digs.length];
      const stand = this.grid.findPathAdjacent(hx, hy, target.x, target.y);
      const world = this.grid.tileToWorld(hx + (i % 3) - 1, hy - 1);
      w.wx = world.x;
      w.wz = world.z;
      w.x = hx + (i % 3) - 1;
      w.y = hy - 1;
      w.job = JobType.Dig;
      w.jobTarget = target;
      w.workTimer = 0.1;
      if (stand) w.setPath(stand);
      w.mood = 80;
    }
    this.requestStructuralRebuild();
    this.rebuild();
    this.renderer.setDigLoad(true);
    this.hud.sayNow('Stab dig load — watch for Graphics hiccup. Should stay solid.');
    const focus = this.grid.tileToWorld(hx, hy - 3);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 6, 28, focus.z + 18);
    this.renderer.camera.lookAt(this.camTarget);
  }

  /** QA: portal composition + Gravemage research + fighter training. */
  preparePass62Shot(): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
    };
    for (let y = hy - 2; y <= hy + 3; y++) {
      for (let x = hx - 3; x <= hx + 5; x++) claim(x, y);
    }
    claim(hx - 2, hy + 1, RoomType.Lair);
    claim(hx - 1, hy + 1, RoomType.Lair);
    claim(hx, hy + 1, RoomType.Lair);
    claim(hx + 1, hy + 1, RoomType.Lair);
    claim(hx - 2, hy + 2, RoomType.Hatchery);
    claim(hx - 1, hy + 2, RoomType.Hatchery);
    claim(hx + 2, hy + 1, RoomType.Training);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 2, hy + 2, RoomType.Training);
    claim(hx + 3, hy + 2, RoomType.Training);
    claim(hx + 4, hy + 1, RoomType.Library);
    claim(hx + 5, hy + 1, RoomType.Library);
    claim(hx + 4, hy + 2, RoomType.Library);
    claim(hx + 5, hy + 2, RoomType.Library);
    claim(hx + 4, hy - 1, RoomType.Portal);
    claim(hx + 5, hy - 1, RoomType.Portal);
    this.hatcheryFood = 12;
    this.gold = 400;
    // Force composition recruits
    const portalSpawn = this.grid.tileToWorld(hx + 4, hy);
    void portalSpawn;
    if (!this.creatures.some((c) => c.kind === CreatureKind.Skitterwing && c.alive)) {
      this.spawnCreature(CreatureKind.Skitterwing, hx + 3, hy);
      this.attracted.skitterwing = true;
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      const r = this.spawnCreature(CreatureKind.Rattlekin, hx + 2, hy + 1);
      r.trainNeed = 60;
      r.job = JobType.Train;
      r.jobTarget = { x: hx + 2, y: hy + 1 };
      r.workTimer = 7.2;
      r.level = 1;
      this.attracted.rattlekin = true;
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Emberling && c.alive)) {
      this.spawnCreature(CreatureKind.Emberling, hx + 3, hy + 2);
      this.attracted.emberling = true;
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      const g = this.spawnCreature(CreatureKind.Gravemage, hx + 4, hy + 1);
      g.job = JobType.Research;
      g.jobTarget = { x: hx + 4, y: hy + 1 };
      this.attracted.gravemage = true;
    }
    this.researchProgress = 88;
    this.researchRank = 0;
    this.healUnlocked = false;
    this.requestStructuralRebuild();
    this.rebuild();
    this.hud.sayNow('A Gravemage has entered the Underkeep.');
    this.hud.say(MENTOR_LINES.gravemage);
    const focus = this.grid.tileToWorld(hx + 2, hy + 1);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 4, 24, focus.z + 14);
    this.renderer.camera.lookAt(this.camTarget);
    // Select training fighter for inspector
    const fighter = this.creatures.find((c) => c.alive && c.kind === CreatureKind.Rattlekin);
    if (fighter) this.selectCreature(fighter);
  }

  /** QA/screenshot: doors + sentry trap + Guard/rally. */
  preparePass63Shot(): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
    };
    for (let y = hy - 3; y <= hy + 3; y++) {
      for (let x = hx - 3; x <= hx + 5; x++) claim(x, y);
    }
    // Keep Portal/Library/Training intact for non-regression
    claim(hx + 2, hy + 1, RoomType.Training);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 4, hy + 1, RoomType.Library);
    claim(hx + 5, hy + 1, RoomType.Library);
    claim(hx + 4, hy - 1, RoomType.Portal);
    claim(hx + 5, hy - 1, RoomType.Portal);
    claim(hx - 2, hy + 1, RoomType.Lair);
    claim(hx - 1, hy + 1, RoomType.Lair);
    claim(hx - 2, hy + 2, RoomType.Hatchery);
    claim(hx + 2, hy + 2, RoomType.Guard);
    claim(hx + 3, hy + 2, RoomType.Guard);

    // Corridor walls so door mouths read clearly
    for (const [x, y] of [
      [hx, hy - 2],
      [hx + 1, hy - 2],
      [hx - 1, hy - 2],
      [hx + 2, hy - 2],
    ] as const) {
      const wall = this.grid.get(x, y);
      if (wall && wall.kind !== TileKind.Heart) {
        wall.kind = TileKind.Earth;
        wall.fortified = true;
        wall.room = RoomType.None;
        wall.door = DoorState.None;
      }
    }
    // Open corridor mouth with closed door
    claim(hx, hy - 1);
    claim(hx + 1, hy - 1);
    const doorTile = this.grid.get(hx, hy - 1)!;
    doorTile.door = DoorState.Closed;
    // Open door variant next to it for visual contrast
    const doorOpen = this.grid.get(hx + 1, hy - 1)!;
    doorOpen.door = DoorState.Open;
    // Sentry on approach tile
    claim(hx, hy - 3);
    claim(hx + 1, hy - 3);
    claim(hx, hy - 4);
    const sentry = this.grid.get(hx, hy - 3)!;
    sentry.trap = TrapType.Sentry;
    // Rally flag in Guard plaza
    const rally = this.grid.get(hx + 2, hy)!;
    claim(hx + 2, hy);
    rally.rally = true;

    this.hatcheryFood = 8;
    this.gold = 900;
    // Hero approaching door (blocked)
    const hero = this.spawnCreature(CreatureKind.HeroKnight, hx, hy - 4);
    hero.job = JobType.Fight;
    hero.jobTarget = { ...this.grid.heartPos };
    // Fighter holding rally / Guard
    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      this.spawnCreature(CreatureKind.Rattlekin, hx + 2, hy + 2);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Emberling && c.alive)) {
      this.spawnCreature(CreatureKind.Emberling, hx + 3, hy + 2);
    }
    for (const c of this.creatures) {
      if (!c.alive || c.isHero || c.isWorker) continue;
      if (c.kind === CreatureKind.Rattlekin || c.kind === CreatureKind.Emberling) {
        const world = this.grid.tileToWorld(hx + 2, hy);
        c.x = hx + 2;
        c.y = hy;
        c.wx = world.x + (c.kind === CreatureKind.Emberling ? 0.35 : -0.2);
        c.wz = world.z;
        c.job = JobType.Guard;
        c.jobTarget = { x: hx + 2, y: hy };
        c.setPath(null);
        c.syncMesh(this.time);
      }
    }
    // Keep a Gravemage researching so Library doesn't regress
    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      const g = this.spawnCreature(CreatureKind.Gravemage, hx + 4, hy + 1);
      g.job = JobType.Research;
      g.jobTarget = { x: hx + 4, y: hy + 1 };
    }
    this.requestStructuralRebuild();
    this.rebuild();
    this.hud.sayNow('Doors sealed. Sentry armed. Rally flies — hold the line!');
    this.hud.say(MENTOR_LINES.doorBuilt);
    this.hud.say(MENTOR_LINES.sentryBuilt);
    this.hud.say(MENTOR_LINES.rallyPlanted);
    this.hud.setTooltip(`(${hx},${hy - 1}) Claimed · Door (closed)`);
    const focus = this.grid.tileToWorld(hx + 1, hy - 1);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 2, 22, focus.z + 13);
    this.renderer.camera.lookAt(this.camTarget);
    const guard = this.creatures.find((c) => c.alive && c.kind === CreatureKind.Rattlekin);
    if (guard) this.selectCreature(guard);
  }


  /** QA/screenshot: Pass 6.5 fog of war and/or idle auto-fortify. */

  /** QA/screenshot: lava + bridges + possess + payday (Pass 7.1). */
  preparePass71Shot(focus: 'lava' | 'bridge' | 'possess' | 'payday' | 'both' = 'both'): void {
    this.hud.hideOverlay();
    this.exitPossession(true);
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
      t.explored = true;
      t.goldAmount = 0;
    };

    // Plaza
    for (let y = hy - 2; y <= hy + 2; y++) {
      for (let x = hx - 2; x <= hx + 3; x++) claim(x, y);
    }
    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    claim(hx + 2, hy + 1, RoomType.Lair);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 2, hy + 2, RoomType.Library);
    claim(hx + 3, hy + 2, RoomType.Portal);
    claim(hx - 2, hy + 1, RoomType.Hatchery);
    claim(hx - 1, hy + 1, RoomType.Guard);

    // Open claimed lip south of plaza (no gold wall blocking the lava view)
    for (let x = hx - 1; x <= hx + 4; x++) {
      claim(x, hy + 3);
    }
    // Lava river south of plaza — unmistakable vs gold
    for (let x = hx - 1; x <= hx + 4; x++) {
      for (let y = hy + 4; y <= hy + 6; y++) {
        const t = this.grid.get(x, y);
        if (!t || t.kind === TileKind.Heart) continue;
        t.kind = TileKind.Lava;
        t.room = RoomType.None;
        t.goldAmount = 0;
        t.fortified = false;
        t.mark = MarkType.None;
        t.explored = true;
        t.digProgress = 0;
      }
    }
    // Far bank claimed so bridges connect
    for (let x = hx; x <= hx + 3; x++) {
      claim(x, hy + 7);
      claim(x, hy + 8);
    }
    // Gold vein nearby to prove lava ≠ gold
    for (const [x, y] of [
      [hx + 5, hy + 1],
      [hx + 5, hy + 2],
      [hx + 6, hy + 1],
    ] as const) {
      const g = this.grid.get(x, y);
      if (!g) continue;
      g.kind = TileKind.Gold;
      g.goldAmount = 400;
      g.explored = true;
      g.fortified = false;
      g.room = RoomType.None;
    }
    // Water pocket west
    for (const [x, y] of [
      [hx - 4, hy],
      [hx - 4, hy + 1],
      [hx - 5, hy],
    ] as const) {
      const w = this.grid.get(x, y);
      if (!w) continue;
      w.kind = TileKind.Water;
      w.explored = true;
      w.room = RoomType.None;
      w.goldAmount = 0;
    }
    claim(hx - 3, hy);
    claim(hx - 3, hy + 1);

    // Pre-build one wood + one stone bridge over lava
    const wood = this.grid.get(hx + 1, hy + 4);
    if (wood) {
      wood.kind = TileKind.BridgeWood;
      wood.explored = true;
    }
    const stone = this.grid.get(hx + 2, hy + 5);
    if (stone) {
      stone.kind = TileKind.BridgeStone;
      stone.explored = true;
    }
    // Leave a gap of open lava at hx+3, hy+4 for Scrabbler block visual

    // Non-regression door/sentry/rally
    claim(hx, hy - 1);
    this.grid.get(hx, hy - 1)!.door = DoorState.Closed;
    claim(hx - 1, hy - 2);
    this.grid.get(hx - 1, hy - 2)!.trap = TrapType.Sentry;
    this.grid.get(hx - 1, hy + 1)!.rally = true;

    this.hatcheryFood = 6;
    this.gold = focus === 'payday' ? 12 : 900;
    this.mana = 80;
    this.healUnlocked = true;
    this.wageAcc = PAYDAY_INTERVAL - 1.2;

    // Units
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    while (workers.length < 3) workers.push(this.spawnCreature(CreatureKind.Scrabbler, hx, hy));
    for (let i = 0; i < workers.length; i++) {
      const w = workers[i];
      const world = this.grid.tileToWorld(hx - 1 + (i % 2), hy);
      w.x = hx - 1 + (i % 2);
      w.y = hy;
      w.wx = world.x;
      w.wz = world.z;
      w.job = JobType.Idle;
      w.setPath(null);
      w.held = false;
      w.mood = 70;
    }

    let ember = this.creatures.find((c) => c.kind === CreatureKind.Emberling && c.alive);
    if (!ember) ember = this.spawnCreature(CreatureKind.Emberling, hx + 1, hy + 3);
    {
      const world = this.grid.tileToWorld(hx + 1, hy + 3);
      ember.x = hx + 1;
      ember.y = hy + 3;
      ember.wx = world.x;
      ember.wz = world.z;
      ember.job = JobType.Idle;
      ember.setPath(null);
      ember.mood = 75;
    }

    let rattler = this.creatures.find((c) => c.kind === CreatureKind.Rattlekin && c.alive);
    if (!rattler) rattler = this.spawnCreature(CreatureKind.Rattlekin, hx, hy + 1);
    rattler.mood = 70;
    rattler.goldCarried = 0;

    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      this.spawnCreature(CreatureKind.Gravemage, hx + 2, hy + 2);
    }

    this.grid.revealFromTerritory();
    this.requestStructuralRebuild();
    this.rebuild();
    this.fogDirty = false;
    this.marksDirty = false;

    if (focus === 'possess') {
      this.mana = Math.max(this.mana, POSSESS_COST + 10);
      this.enterPossession(ember);
      // Re-assert after any portal recruit toasts
      setTimeout(() => {
        try { this.hud.sayNow(MENTOR_LINES.possess); } catch { /* ignore */ }
      }, 0);
    }
    if (focus === 'lava' || focus === 'bridge' || focus === 'both') {
      this.hud.say(MENTOR_LINES.lava);
      this.hud.say(MENTOR_LINES.bridgeWood);
    }
    if (focus === 'payday') {
      this.gold = 8;
      this.wageAcc = PAYDAY_INTERVAL;
      this.payWages(0.01);
      this.hud.sayNow(MENTOR_LINES.paydayFail);
      this.hud.setTooltip('Payday — empty Treasury crashes moods');
    } else if (focus === 'lava') {
      const focusW = this.grid.tileToWorld(hx + 2, hy + 5);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 16, focusW.z + 11);
      this.hud.setTooltip('Lava hazards · bridges · gold vein contrast');
    } else if (focus === 'bridge') {
      const focusW = this.grid.tileToWorld(hx + 1, hy + 5);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 1, 14, focusW.z + 10);
      this.hud.setTooltip('Wooden + stone bridges over lava');
    } else if (focus === 'possess') {
      this.hud.setTooltip('Possession — FP follow · WASD move · Esc exits');
    } else {
      const focusW = this.grid.tileToWorld(hx + 1, hy + 4);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 18, focusW.z + 12);
      this.hud.setTooltip('Pass 7.1 — lava · bridges · possess · payday');
      this.hud.sayNow('Pass 7.1 live — lava burns, bridges span, Possess rides, payday bites.');
    }
    this.renderer.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }


  /** QA/screenshot: Pass 7.2 minimap, mission, Workshop craft, Scrabbler polish. */
  preparePass72Shot(focus: 'minimap' | 'mission' | 'workshop' | 'worker' | 'both' = 'both'): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
      t.explored = true;
    };

    for (let y = hy - 3; y <= hy + 4; y++) {
      for (let x = hx - 3; x <= hx + 5; x++) claim(x, y);
    }
    // Non-regression: lava/bridge strip + FoW contrast
    for (let x = hx - 1; x <= hx + 3; x++) {
      const lava = this.grid.get(x, hy + 5);
      if (lava && lava.kind !== TileKind.Heart) {
        lava.kind = TileKind.Lava;
        lava.room = RoomType.None;
        lava.explored = true;
      }
    }
    const wood = this.grid.get(hx + 1, hy + 5)!;
    wood.kind = TileKind.BridgeWood;
    wood.explored = true;
    const stone = this.grid.get(hx + 2, hy + 5)!;
    stone.kind = TileKind.BridgeStone;
    stone.explored = true;

    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    claim(hx + 2, hy + 1, RoomType.Lair);
    claim(hx + 3, hy + 1, RoomType.Hatchery);
    claim(hx + 4, hy + 1, RoomType.Training);
    claim(hx + 4, hy, RoomType.Library);
    claim(hx + 5, hy, RoomType.Portal);
    claim(hx - 1, hy + 1, RoomType.Guard);
    claim(hx + 2, hy + 2, RoomType.Workshop);
    claim(hx + 3, hy + 2, RoomType.Workshop);
    claim(hx + 4, hy + 2, RoomType.Workshop);

    // Door + sentry non-regression
    claim(hx, hy - 1);
    this.grid.get(hx, hy - 1)!.door = DoorState.Closed;
    claim(hx, hy - 2);
    this.grid.get(hx, hy - 2)!.trap = TrapType.Sentry;

    // Explored tongue + fog beyond for minimap contrast
    for (let x = hx + 6; x <= hx + 9; x++) {
      const t = this.grid.get(x, hy);
      if (t && t.kind !== TileKind.Heart) {
        t.kind = TileKind.Dirt;
        t.explored = true;
        t.room = RoomType.None;
      }
    }
    for (let x = hx + 10; x <= hx + 14; x++) {
      for (let y = hy - 1; y <= hy + 1; y++) {
        const t = this.grid.get(x, y);
        if (t) t.explored = false;
      }
    }

    this.gold = focus === 'mission' ? 2480 : 900;
    this.goldEver = this.gold;
    this.doorKits = 2;
    this.sentryKits = 1;
    this.wavesCleared = focus === 'mission' ? 2 : 1;
    this.heroWaveSpawned = false;
    this.heroWaveTimer = 40;
    this.mana = 80;
    this.hatcheryFood = 6;
    this.workerCostScale = 1;

    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    while (workers.length < 4) {
      workers.push(this.spawnCreature(CreatureKind.Scrabbler, hx - 1, hy));
    }
    // Crafting Scrabblers at Workshop
    for (let i = 0; i < Math.min(2, workers.length); i++) {
      const w = workers[i];
      const wx = hx + 2 + i;
      const wy = hy + 2;
      const world = this.grid.tileToWorld(wx, wy);
      w.x = wx;
      w.y = wy;
      w.wx = world.x;
      w.wz = world.z;
      w.job = JobType.Craft;
      w.jobTarget = { x: wx, y: wy };
      w.workTimer = 3 + i;
      w.setPath(null);
    }

    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      this.spawnCreature(CreatureKind.Rattlekin, hx - 1, hy + 1);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Emberling && c.alive)) {
      const ember = this.spawnCreature(CreatureKind.Emberling, hx + 1, hy + 5);
      ember.job = JobType.Idle;
    }

    this.grid.revealFromTerritory();
    this.requestStructuralRebuild();
    this.rebuild();
    this.updateMinimap();
    this.syncMissionHud();

    if (focus === 'mission') {
      this.hud.showOverlay(
        'Mission Briefing',
        `Survive ${WIN_WAVES} hero waves — OR gather ${GOLD_WIN_THRESHOLD} gold. Heart must stand.`,
        'Begin'
      );
      this.hud.sayNow(MENTOR_LINES.missionBrief.replace('%w', String(WIN_WAVES)).replace('%g', String(GOLD_WIN_THRESHOLD)));
      this.hud.setTooltip(`Mission W${this.wavesCleared}/${WIN_WAVES} · Gold ${this.gold}/${GOLD_WIN_THRESHOLD}`);
    } else if (focus === 'workshop') {
      this.hud.sayNow(MENTOR_LINES.workshopBuilt);
      this.hud.say(MENTOR_LINES.craftBusy);
      this.hud.setTooltip('Workshop — Scrabblers craft Door/Sentry kits');
      const focusW = this.grid.tileToWorld(hx + 3, hy + 2);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 16, focusW.z + 11);
    } else if (focus === 'worker') {
      const cost = this.workerCost();
      this.gold = Math.max(this.gold, cost + 50);
      this.castSpell('createWorker');
      this.hud.setTooltip(`Create Scrabbler — ${cost}g · cost scales`);
    } else if (focus === 'minimap') {
      this.hud.sayNow('Minimap — explored claim glow, Heart marker, fog beyond.');
      this.hud.setTooltip('Minimap · explored / claimed / Heart');
      const focusW = this.grid.tileToWorld(hx + 2, hy + 1);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 3, 22, focusW.z + 14);
    } else {
      this.hud.sayNow('Pass 7.2 — minimap, mission win, Workshop kits, Scrabbler polish.');
      this.hud.say(MENTOR_LINES.workshopBuilt);
      this.hud.setTooltip('Pass 7.2 — minimap · mission · Workshop · Worker');
      const focusW = this.grid.tileToWorld(hx + 2, hy + 2);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 18, focusW.z + 12);
    }
    this.renderer.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }



  private focusCreatureById(id: number): void {
    try {
      const c = this.creatures.find((x) => x.id === id && x.alive && !x.isHero);
      if (!c) return;
      this.selectCreature(c);
      const w = this.grid.tileToWorld(c.x, c.y);
      this.camTarget.set(w.x, 0, w.z);
      this.renderer.camera.position.set(w.x + 4, 26, w.z + 16);
      this.renderer.camera.lookAt(this.camTarget);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] focusCreatureById failed', err);
    }
  }

  private refreshRosterUi(force = false): void {
    try {
      if (!force && !this.hud.isRosterOpen()) return;
      const kindNames: Record<string, string> = {
        scrabbler: 'Scrabbler',
        skitterwing: 'Skitterwing',
        rattlekin: 'Rattlekin',
        emberling: 'Emberling',
        gravemage: 'Gravemage',
        thornwitch: 'Thornwitch',
        bonewretch: 'Bonewretch',
      };
      const rows = this.creatures
        .filter((c) => c.alive && !c.isHero)
        .map((c) => {
          const jobRaw = typeof c.job === 'string' ? c.job : 'idle';
          let job =
            c.held
              ? 'Held'
              : c.knockedOut
                ? 'Knocked out'
                : jobRaw === JobType.AttackMove
                  ? 'Attack'
                  : jobRaw === JobType.Pray
                    ? 'Praying'
                    : jobRaw === JobType.DragWounded
                      ? 'Hauling'
                      : jobRaw.charAt(0).toUpperCase() + jobRaw.slice(1);
          if (c.hasTalisman) job += ' ✦';
          return {
            id: c.id,
            name: `${kindNames[c.kind] ?? c.kind} Lv${c.level}`,
            job,
            hp: c.hp,
            maxHp: c.maxHp,
            mood: c.mood,
            knockedOut: c.knockedOut,
          };
        });
      this.hud.updateRoster(rows);
    } catch (err) {
      console.warn('[underkeep] roster ui failed', err);
    }
  }

  /** QA/screenshot: Pass 7.4 Temple / Combat Pit / roster / flee-drag wounded. */
  preparePass74Shot(
    focus: 'temple' | 'combatPit' | 'roster' | 'flee' | 'both' = 'both'
  ): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
      t.explored = true;
    };

    for (let y = hy - 3; y <= hy + 5; y++) {
      for (let x = hx - 3; x <= hx + 6; x++) claim(x, y);
    }
    // Keep Pass 7.3 rooms for non-regression
    claim(hx - 2, hy + 3, RoomType.Prison);
    claim(hx - 1, hy + 3, RoomType.Prison);
    claim(hx, hy + 3, RoomType.Torture);
    claim(hx - 2, hy + 5, RoomType.Graveyard);
    claim(hx - 1, hy + 5, RoomType.Graveyard);

    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    for (let x = hx + 2; x <= hx + 5; x++) {
      for (let y = hy + 1; y <= hy + 2; y++) claim(x, y, RoomType.Lair);
    }
    for (let x = hx - 2; x <= hx; x++) claim(x, hy + 1, RoomType.Hatchery);
    claim(hx + 4, hy, RoomType.Library);
    claim(hx + 5, hy, RoomType.Library);
    claim(hx + 5, hy + 3, RoomType.Portal);
    claim(hx + 2, hy + 3, RoomType.Workshop);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 4, hy + 1, RoomType.Training);

    // Temple cluster
    claim(hx + 2, hy + 4, RoomType.Temple);
    claim(hx + 3, hy + 4, RoomType.Temple);
    claim(hx + 4, hy + 4, RoomType.Temple);
    // Combat Pit
    claim(hx + 5, hy + 4, RoomType.CombatPit);
    claim(hx + 5, hy + 5, RoomType.CombatPit);
    claim(hx + 4, hy + 5, RoomType.CombatPit);

    this.gold = 1400;
    this.goldEver = this.gold;
    this.mana = 80;
    this.hatcheryFood = 8;
    this.doorKits = 1;
    this.sentryKits = 1;
    this.wavesCleared = 1;
    this.heroWaveSpawned = true;
    this.heroWaveTimer = 0;

    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    while (workers.length < 3) {
      workers.push(this.spawnCreature(CreatureKind.Scrabbler, hx - 1, hy));
    }

    // Ensure roster variety
    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      this.spawnCreature(CreatureKind.Rattlekin, hx + 1, hy);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Emberling && c.alive)) {
      this.spawnCreature(CreatureKind.Emberling, hx + 2, hy);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      this.spawnCreature(CreatureKind.Gravemage, hx + 3, hy);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Thornwitch && c.alive)) {
      this.spawnCreature(CreatureKind.Thornwitch, hx + 1, hy + 2);
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Bonewretch && c.alive)) {
      this.spawnCreature(CreatureKind.Bonewretch, hx - 1, hy + 5);
    }

    // Prayer demo
    const pray = this.creatures.find((c) => c.kind === CreatureKind.Gravemage && c.alive);
    if (pray) {
      pray.x = hx + 3;
      pray.y = hy + 4;
      const pw = this.grid.tileToWorld(pray.x, pray.y);
      pray.wx = pw.x;
      pray.wz = pw.z;
      pray.mood = 42;
      pray.job = JobType.Pray;
      pray.jobTarget = { x: hx + 3, y: hy + 4 };
      pray.workTimer = 2.8;
      pray.prayerBuff = 12;
      pray.setPath(null);
    }

    // Combat Pit veteran leveling
    const pit = this.creatures.find((c) => c.kind === CreatureKind.Emberling && c.alive);
    if (pit) {
      pit.x = hx + 5;
      pit.y = hy + 4;
      const ww = this.grid.tileToWorld(pit.x, pit.y);
      pit.wx = ww.x;
      pit.wz = ww.z;
      pit.level = 4;
      pit.trainNeed = 80;
      pit.job = JobType.Train;
      pit.jobTarget = { x: hx + 5, y: hy + 4 };
      pit.workTimer = 11.2;
      pit.setPath(null);
    }

    // Flee / drag wounded demo
    const wounded = this.creatures.find((c) => c.kind === CreatureKind.Rattlekin && c.alive);
    if (wounded) {
      wounded.x = hx + 1;
      wounded.y = hy + 4;
      const ww = this.grid.tileToWorld(wounded.x, wounded.y);
      wounded.wx = ww.x;
      wounded.wz = ww.z;
      wounded.hp = 1;
      wounded.knockedOut = true;
      wounded.job = JobType.Idle;
      wounded.setPath(null);
    }
    const hauler = workers[0];
    if (hauler && wounded) {
      hauler.x = hx + 1;
      hauler.y = hy + 3;
      const hw = this.grid.tileToWorld(hauler.x, hauler.y);
      hauler.wx = hw.x;
      hauler.wz = hw.z;
      hauler.job = JobType.DragWounded;
      hauler.jobTarget = { x: wounded.x, y: wounded.y };
      hauler.workTimer = 0;
      const path = this.grid.findPath(hauler.x, hauler.y, wounded.x, wounded.y);
      if (path) hauler.setPath(path);
    }

    // Fleeing minion toward Lair
    const fleer = this.creatures.find((c) => c.kind === CreatureKind.Thornwitch && c.alive);
    if (fleer) {
      fleer.x = hx;
      fleer.y = hy + 4;
      const fw = this.grid.tileToWorld(fleer.x, fleer.y);
      fleer.wx = fw.x;
      fleer.wz = fw.z;
      fleer.hp = fleer.maxHp * 0.28;
      fleer.job = JobType.Flee;
      fleer.fleeTimer = 3;
      fleer.jobTarget = { x: hx + 3, y: hy + 1 };
      const path = this.grid.findPath(fleer.x, fleer.y, hx + 3, hy + 1);
      if (path) fleer.setPath(path);
    }

    this.requestStructuralRebuild();
    this.rebuild();

    const focusW = this.grid.tileToWorld(hx + 3, hy + 4);
    this.camTarget.set(focusW.x, 0, focusW.z);
    this.renderer.camera.position.set(focusW.x + 3, 24, focusW.z + 14);
    this.renderer.camera.lookAt(this.camTarget);

    if (focus === 'temple') {
      const tw = this.grid.tileToWorld(hx + 3, hy + 4);
      this.camTarget.set(tw.x, 0, tw.z);
      this.renderer.camera.position.set(tw.x + 2, 20, tw.z + 12);
      this.renderer.camera.lookAt(this.camTarget);
      if (pray) this.selectCreature(pray);
      this.hud.setTooltip('Temple — prayer mood buff · talisman hook');
      this.hud.sayNow(MENTOR_LINES.praying);
    } else if (focus === 'combatPit') {
      const tw = this.grid.tileToWorld(hx + 5, hy + 4);
      this.camTarget.set(tw.x, 0, tw.z);
      this.renderer.camera.position.set(tw.x + 2, 20, tw.z + 12);
      this.renderer.camera.lookAt(this.camTarget);
      if (pit) this.selectCreature(pit);
      this.hud.setTooltip('Combat Pit — veteran leveling past 4');
      this.hud.sayNow(
        MENTOR_LINES.combatLevelUp.replace('%n', 'Emberling').replace('%l', '5')
      );
    } else if (focus === 'roster') {
      this.refreshRosterUi(true);
      this.hud.openRoster();
      this.hud.sayNow('Creature roster — HP · job · mood. Click to focus.');
    } else if (focus === 'flee') {
      const tw = this.grid.tileToWorld(hx + 1, hy + 3);
      this.camTarget.set(tw.x, 0, tw.z);
      this.renderer.camera.position.set(tw.x + 2, 20, tw.z + 12);
      this.renderer.camera.lookAt(this.camTarget);
      this.hud.setTooltip('Flee / drag wounded → Lair beds');
      this.hud.sayNow(MENTOR_LINES.dragWounded);
    } else {
      this.refreshRosterUi(true);
      this.hud.openRoster();
      this.hud.sayNow('Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag wounded.');
      this.hud.setTooltip('Pass 7.4 — Temple · Combat Pit · Roster · Flee/drag');
    }
  }

  /** QA/screenshot: Pass 7.3 Prison/Torture/Graveyard + room-size efficiency. */
  preparePass73Shot(focus: 'prison' | 'torture' | 'graveyard' | 'efficiency' | 'both' = 'both'): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
      t.explored = true;
    };

    for (let y = hy - 3; y <= hy + 5; y++) {
      for (let x = hx - 3; x <= hx + 6; x++) claim(x, y);
    }
    // Non-regression: lava/bridge + Workshop
    for (let x = hx - 1; x <= hx + 3; x++) {
      const lava = this.grid.get(x, hy + 6);
      if (lava && lava.kind !== TileKind.Heart) {
        lava.kind = TileKind.Lava;
        lava.room = RoomType.None;
        lava.explored = true;
      }
    }
    const wood = this.grid.get(hx + 1, hy + 6)!;
    wood.kind = TileKind.BridgeWood;
    wood.explored = true;

    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    // Large contiguous Lair for efficiency tooltip
    for (let x = hx + 2; x <= hx + 5; x++) {
      for (let y = hy + 1; y <= hy + 2; y++) claim(x, y, RoomType.Lair);
    }
    for (let x = hx - 2; x <= hx; x++) claim(x, hy + 1, RoomType.Hatchery);
    for (let x = hx + 4; x <= hx + 6; x++) claim(x, hy, RoomType.Library);
    claim(hx + 5, hy + 3, RoomType.Portal);
    claim(hx - 1, hy + 2, RoomType.Guard);
    claim(hx + 2, hy + 3, RoomType.Workshop);
    claim(hx + 3, hy + 3, RoomType.Workshop);

    // Prison / Torture / Graveyard cluster
    claim(hx - 2, hy + 3, RoomType.Prison);
    claim(hx - 1, hy + 3, RoomType.Prison);
    claim(hx - 2, hy + 4, RoomType.Prison);
    claim(hx, hy + 3, RoomType.Torture);
    claim(hx + 1, hy + 3, RoomType.Torture);
    claim(hx - 2, hy + 5, RoomType.Graveyard);
    claim(hx - 1, hy + 5, RoomType.Graveyard);
    claim(hx, hy + 5, RoomType.Graveyard);

    claim(hx, hy - 1);
    this.grid.get(hx, hy - 1)!.door = DoorState.Closed;
    claim(hx, hy - 2);
    this.grid.get(hx, hy - 2)!.trap = TrapType.Sentry;

    this.gold = 1100;
    this.goldEver = this.gold;
    this.doorKits = 1;
    this.sentryKits = 1;
    this.wavesCleared = 1;
    this.heroWaveSpawned = true;
    this.heroWaveTimer = 0;
    this.mana = 70;
    this.hatcheryFood = 8;
    this.corpses = [
      { x: hx - 1, y: hy + 5, timer: 5, fromHero: true },
      { x: hx, y: hy + 5, timer: 3, fromHero: false },
    ];

    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    while (workers.length < 3) {
      workers.push(this.spawnCreature(CreatureKind.Scrabbler, hx - 1, hy));
    }

    // Clear prior heroes then place KO + prisoner
    for (const c of [...this.creatures]) {
      if (c.isHero) {
        c.alive = false;
        try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
      }
    }
    this.creatures = this.creatures.filter((c) => c.alive);

    const ko = this.spawnCreature(CreatureKind.HeroKnight, hx + 1, hy + 4);
    ko.knockedOut = true;
    ko.hp = 1;
    ko.job = JobType.Idle;
    ko.setPath(null);

    const pris = this.spawnCreature(CreatureKind.HeroArcher, hx - 1, hy + 3);
    this.imprisonCreature(pris, hx - 1, hy + 3);
    pris.convertProgress = focus === 'torture' ? 72 : 35;
    pris.hunger = focus === 'graveyard' ? 92 : 40;

    if (focus === 'torture') {
      // Move prisoner onto Torture for conversion VFX
      this.imprisonCreature(pris, hx, hy + 3);
      pris.convertProgress = 78;
      const tw = this.creatures.find((c) => c.kind === CreatureKind.Thornwitch && c.alive);
      if (!tw) {
        const m = this.spawnCreature(CreatureKind.Thornwitch, hx + 1, hy + 3);
        m.mood = 85;
      }
    }

    if (!this.creatures.some((c) => c.kind === CreatureKind.Bonewretch && c.alive)) {
      if (focus === 'graveyard' || focus === 'both') {
        this.spawnCreature(CreatureKind.Bonewretch, hx - 2, hy + 5);
      }
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      this.spawnCreature(CreatureKind.Rattlekin, hx - 1, hy + 2);
    }

    // Scrabbler dragging KO toward prison
    if (focus === 'prison' || focus === 'both') {
      const w = workers[0];
      const world = this.grid.tileToWorld(hx + 1, hy + 4);
      w.x = hx;
      w.y = hy + 4;
      const ww = this.grid.tileToWorld(w.x, w.y);
      w.wx = ww.x;
      w.wz = ww.z;
      w.job = JobType.DragPrisoner;
      w.jobTarget = { x: ko.x, y: ko.y };
      w.workTimer = 0;
      w.setPath(this.grid.findPath(w.x, w.y, ko.x, ko.y));
    }

    this.grid.revealFromTerritory();
    this.requestStructuralRebuild();
    this.rebuild();
    this.updateMinimap();
    this.syncMissionHud();

    const lairSz = this.grid.largestContiguousRoom(RoomType.Lair);
    const lairBonus = Math.round(roomSizeEfficiencyBonus(lairSz) * 100);

    if (focus === 'prison') {
      this.hud.sayNow(MENTOR_LINES.prisonBuilt);
      this.hud.say(MENTOR_LINES.heroKnocked);
      this.hud.setTooltip(`Prison — prisoners ${this.creatures.filter((c) => c.isPrisoner).length} · KO ready`);
      const focusW = this.grid.tileToWorld(hx - 1, hy + 3);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 16, focusW.z + 11);
    } else if (focus === 'torture') {
      this.hud.sayNow(MENTOR_LINES.tortureBuilt);
      this.hud.say(MENTOR_LINES.converting);
      this.hud.setTooltip('Torture Chamber — converting captive → Thornwitch');
      const focusW = this.grid.tileToWorld(hx, hy + 3);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 15, focusW.z + 10);
    } else if (focus === 'graveyard') {
      this.hud.sayNow(MENTOR_LINES.graveyardBuilt);
      this.hud.say(MENTOR_LINES.boneRaised);
      this.hud.setTooltip(`Graveyard — corpses ${this.corpses.length} → Bonewretch`);
      const focusW = this.grid.tileToWorld(hx - 1, hy + 5);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 15, focusW.z + 10);
    } else if (focus === 'efficiency') {
      this.hud.sayNow(
        MENTOR_LINES.roomSizeBonus.replace('%n', String(lairSz)).replace('%p', String(lairBonus))
      );
      this.hud.setTooltip(`Lair size ${lairSz} · +${lairBonus}% eff · Hatchery/Library scale too`);
      const focusW = this.grid.tileToWorld(hx + 3, hy + 1);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 18, focusW.z + 12);
    } else {
      this.hud.sayNow('Pass 7.3 — Prison, Torture, Graveyard, room-size efficiency.');
      this.hud.say(MENTOR_LINES.prisonBuilt);
      this.hud.setTooltip(
        `Pass 7.3 — Prison · Torture · Graveyard · Lair size ${lairSz} +${lairBonus}%`
      );
      const focusW = this.grid.tileToWorld(hx - 1, hy + 4);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 2, 18, focusW.z + 12);
    }
    this.renderer.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
  }

  preparePass65Shot(focus: 'fow' | 'fortify' | 'both' = 'both'): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
      t.explored = true;
    };

    // Compact heart plaza — leave most of the map fogged
    for (let y = hy - 2; y <= hy + 2; y++) {
      for (let x = hx - 2; x <= hx + 3; x++) claim(x, y);
    }
    // Non-regression rooms (small)
    claim(hx + 2, hy, RoomType.Treasury);
    claim(hx + 3, hy, RoomType.Treasury);
    claim(hx + 2, hy + 1, RoomType.Lair);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 2, hy + 2, RoomType.Library);
    claim(hx + 3, hy + 2, RoomType.Portal);
    claim(hx - 2, hy + 1, RoomType.Hatchery);
    claim(hx - 1, hy + 1, RoomType.Guard);

    // Soft earth walls around plaza (fortify candidates) — NOT rock
    for (const [x, y] of [
      [hx - 3, hy],
      [hx - 3, hy + 1],
      [hx - 3, hy - 1],
      [hx + 4, hy],
      [hx + 4, hy + 1],
      [hx + 4, hy - 1],
      [hx, hy + 3],
      [hx + 1, hy + 3],
      [hx + 2, hy + 3],
      [hx, hy - 3],
      [hx + 1, hy - 3],
    ] as const) {
      const wall = this.grid.get(x, y);
      if (!wall || wall.kind === TileKind.Heart) continue;
      wall.kind = TileKind.Earth;
      wall.fortified = false;
      wall.mark = MarkType.None;
      wall.room = RoomType.None;
      wall.goldAmount = 0;
      wall.digProgress = 0;
      wall.explored = true; // wall-face LOS
    }

    // One rock pillar to prove rock stays impassable / not auto-fortified
    const rock = this.grid.get(hx + 5, hy);
    if (rock) {
      rock.kind = TileKind.Rock;
      rock.fortified = false;
      rock.mark = MarkType.None;
      rock.explored = true;
      rock.room = RoomType.None;
    }

    // Dig tongue east into fog so FoW boundary reads clearly
    for (let x = hx + 4; x <= hx + 7; x++) {
      claim(x, hy - 2);
    }
    // Beyond the tongue — force UNEXPLORED dark
    for (let y = 0; y < this.grid.height; y++) {
      for (let x = 0; x < this.grid.width; x++) {
        const t = this.grid.get(x, y)!;
        const near =
          Math.abs(x - hx) <= 4 && Math.abs(y - hy) <= 3
            ? true
            : Math.abs(x - (hx + 5)) <= 2 && Math.abs(y - (hy - 2)) <= 1;
        if (!near && t.kind !== TileKind.Heart) {
          // Keep far tiles fogged even if generator claimed corridor north
          if (t.kind === TileKind.Claimed || t.kind === TileKind.Dirt) {
            t.kind = TileKind.Earth;
            t.claimedProgress = 0;
            t.room = RoomType.None;
          }
          t.explored = false;
          t.mark = MarkType.None;
          t.fortified = false;
        }
      }
    }
    // Re-assert plaza explored + LOS
    this.grid.revealFromTerritory();

    // Door/sentry snippet for non-regression visual
    claim(hx, hy - 1);
    this.grid.get(hx, hy - 1)!.door = DoorState.Closed;
    claim(hx - 1, hy - 2);
    this.grid.get(hx - 1, hy - 2)!.trap = TrapType.Sentry;
    this.grid.get(hx - 1, hy + 1)!.rally = true;

    this.hatcheryFood = 6;
    this.gold = 900;
    this.healUnlocked = true;

    // Workers for auto-fortify
    const workers = this.creatures.filter((c) => c.isWorker && c.alive);
    while (workers.length < 4) {
      workers.push(this.spawnCreature(CreatureKind.Scrabbler, hx, hy));
    }
    for (let i = 0; i < workers.length; i++) {
      const w = workers[i];
      const tx = hx - 1 + (i % 3);
      const ty = hy + (i % 2);
      const world = this.grid.tileToWorld(tx, ty);
      w.x = tx;
      w.y = ty;
      w.wx = world.x;
      w.wz = world.z;
      w.hunger = 5;
      w.sleepNeed = 5;
      w.goldCarried = 0;
      w.job = JobType.Idle;
      w.jobTarget = null;
      w.setPath(null);
      w.held = false;
    }

    // Keep a Gravemage / fighter so Library + combat systems don't vanish
    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      const g = this.spawnCreature(CreatureKind.Gravemage, hx + 2, hy + 2);
      g.job = JobType.Research;
      g.jobTarget = { x: hx + 2, y: hy + 2 };
    }
    if (!this.creatures.some((c) => c.kind === CreatureKind.Rattlekin && c.alive)) {
      this.spawnCreature(CreatureKind.Rattlekin, hx - 1, hy + 1);
    }

    if (focus === 'fortify' || focus === 'both') {
      // Pre-mark a couple walls + force one worker mid-fortify for readable shot
      for (const [x, y] of [
        [hx - 3, hy],
        [hx - 3, hy + 1],
        [hx + 4, hy],
        [hx, hy + 3],
      ] as const) {
        const wt = this.grid.get(x, y);
        if (wt && wt.kind === TileKind.Earth && !wt.fortified) {
          wt.mark = MarkType.Fortify;
          wt.explored = true;
        }
      }
      // One already fortified for contrast
      const done = this.grid.get(hx + 1, hy + 3);
      if (done && done.kind === TileKind.Earth) {
        done.fortified = true;
        done.mark = MarkType.None;
        done.explored = true;
      }
      const w0 = workers[0];
      const target = { x: hx - 3, y: hy };
      const adj = this.grid.tileToWorld(hx - 2, hy);
      w0.x = hx - 2;
      w0.y = hy;
      w0.wx = adj.x;
      w0.wz = adj.z;
      w0.job = JobType.Fortify;
      w0.jobTarget = target;
      w0.workTimer = 0.8;
      w0.setPath(null);
      this.hud.sayNow(MENTOR_LINES.autoFortify);
    }

    if (focus === 'fow' || focus === 'both') {
      this.hud.say(MENTOR_LINES.fog);
      this.hud.sayNow('Fog of war — unexplored earth stays dark until dig/claim.');
    }

    this.requestStructuralRebuild();
    this.rebuild();
    this.fogDirty = false;
    this.marksDirty = false;

    if (focus === 'fortify') {
      const focusW = this.grid.tileToWorld(hx - 2, hy);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 3, 20, focusW.z + 12);
      this.hud.setTooltip(`Idle Scrabblers auto-fortify soft earth · Rock impassable`);
    } else {
      // Pull camera back so fogged periphery is obvious
      const focusW = this.grid.tileToWorld(hx + 2, hy - 1);
      this.camTarget.set(focusW.x, 0, focusW.z);
      this.renderer.camera.position.set(focusW.x + 6, 32, focusW.z + 22);
      this.hud.setTooltip(`Fog of war — explored heart vs dark unexplored`);
    }
    this.renderer.camera.lookAt(this.camTarget);
  }


  /** QA/screenshot: Pass 6.4b Hand pick + shift multi-select + attack-move, no blackout. */
  preparePass64bShot(): void {
    this.hud.hideOverlay();
    // Reuse 6.4 arena then force Hand/group/AttackMove proof state
    this.preparePass64Shot();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    // Ensure moods are finite (Leaving? must not poison bars)
    for (const c of this.creatures) {
      if (!c.alive) continue;
      c.clampStats();
      this.safeMood(c, Number.isFinite(c.mood) ? Math.max(40, c.mood) : 72);
      c.hunger = Math.max(0, Math.min(40, c.hunger));
      c.sleepNeed = Math.max(0, Math.min(40, c.sleepNeed));
    }
    // Pick one Scrabbler into Hand for pick proof
    const worker = this.creatures.find((c) => c.alive && c.isWorker);
    if (worker) {
      this.tool = 'select';
      this.hud.setActiveTool('select');
      this.pickUp(worker);
    }
    // Multi-select fighters (not held)
    const fighters = this.creatures.filter(
      (c) =>
        c.alive &&
        !c.isHero &&
        !c.isWorker &&
        (c.kind === CreatureKind.Rattlekin || c.kind === CreatureKind.Emberling)
    );
    // Drop worker first so Hand is free for screenshot of squad, then re-pick after group order
    if (this.held) {
      this.dropHeldAt(hx, hy);
    }
    this.clearSelection();
    for (const f of fighters.slice(0, 3)) {
      f.selected = true;
      if (!this.selectedGroup.includes(f)) this.selectedGroup.push(f);
    }
    this.syncSelectionPrimary();
    this.issueAttackMove(hx, hy - 3, true);
    // Also demonstrate Hand pick on a fighter without blackout
    const pickTarget = fighters[0];
    if (pickTarget) {
      // Keep squad attack-move on others; pick one for inspector Held
      this.pickUp(pickTarget);
    }
    this.hud.sayNow('Hand pick + squad Attack — no blackout.');
    this.hud.say(MENTOR_LINES.groupSelect);
    this.hud.say(MENTOR_LINES.attackMove);
    this.refreshInspector();
    const focus = this.grid.tileToWorld(hx + 1, hy - 1);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 3, 22, focus.z + 14);
    this.renderer.camera.lookAt(this.camTarget);
  }

  /** QA/screenshot: group select rings + attack-move + hero combat. */
  preparePass64Shot(): void {
    this.hud.hideOverlay();
    const hx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    const claim = (x: number, y: number, room = RoomType.None) => {
      const t = this.grid.get(x, y);
      if (!t || t.kind === TileKind.Heart) return;
      t.kind = TileKind.Claimed;
      t.claimedProgress = 1;
      t.room = room;
      t.mark = MarkType.None;
      t.digProgress = 0;
      t.door = DoorState.None;
      t.trap = TrapType.None;
      t.rally = false;
      t.fortified = false;
    };
    for (let y = hy - 4; y <= hy + 3; y++) {
      for (let x = hx - 3; x <= hx + 5; x++) claim(x, y);
    }
    // Keep prior systems visible (non-regression)
    claim(hx + 2, hy + 1, RoomType.Training);
    claim(hx + 3, hy + 1, RoomType.Training);
    claim(hx + 4, hy + 1, RoomType.Library);
    claim(hx + 5, hy + 1, RoomType.Library);
    claim(hx + 4, hy - 1, RoomType.Portal);
    claim(hx + 5, hy - 1, RoomType.Portal);
    claim(hx - 2, hy + 1, RoomType.Lair);
    claim(hx - 1, hy + 1, RoomType.Lair);
    claim(hx - 2, hy + 2, RoomType.Hatchery);
    claim(hx + 2, hy + 2, RoomType.Guard);
    claim(hx + 3, hy + 2, RoomType.Guard);
    // Approach corridor + door + sentry
    for (const [x, y] of [
      [hx - 1, hy - 2],
      [hx + 1, hy - 2],
      [hx + 2, hy - 2],
    ] as const) {
      const wall = this.grid.get(x, y);
      if (wall && wall.kind !== TileKind.Heart) {
        wall.kind = TileKind.Earth;
        wall.fortified = true;
        wall.room = RoomType.None;
      }
    }
    claim(hx, hy - 1);
    claim(hx, hy - 2);
    claim(hx, hy - 3);
    claim(hx, hy - 4);
    this.grid.get(hx, hy - 1)!.door = DoorState.Closed;
    this.grid.get(hx, hy - 3)!.trap = TrapType.Sentry;
    this.grid.get(hx + 2, hy)!.rally = true;

    this.hatcheryFood = 8;
    this.gold = 1000;
    this.heroWaveSpawned = true;
    this.heroWaveTimer = 0;
    this.heroWarn30 = true;
    this.heroWarn10 = true;

    // Clear extras then spawn a readable fight
    for (const c of [...this.creatures]) {
      if (c.isHero) {
        c.alive = false;
        try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
      }
    }
    this.creatures = this.creatures.filter((c) => c.alive);

    const place = (kind: CreatureKind, x: number, y: number) => {
      const c = this.spawnCreature(kind, x, y);
      const w = this.grid.tileToWorld(x, y);
      c.x = x;
      c.y = y;
      c.wx = w.x;
      c.wz = w.z;
      c.held = false;
      c.stunTimer = 0;
      c.hunger = 10;
      c.sleepNeed = 10;
      c.trainNeed = 0;
      return c;
    };
    // Remove prior fighters so the squad reads cleanly
    for (const c of [...this.creatures]) {
      if (
        c.alive &&
        (c.kind === CreatureKind.Rattlekin || c.kind === CreatureKind.Emberling)
      ) {
        c.alive = false;
        try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
      }
    }
    this.creatures = this.creatures.filter((c) => c.alive);
    const r1 = place(CreatureKind.Rattlekin, hx + 1, hy);
    const r2 = place(CreatureKind.Rattlekin, hx + 2, hy);
    const e1 = place(CreatureKind.Emberling, hx + 3, hy);
    if (!this.creatures.some((c) => c.kind === CreatureKind.Gravemage && c.alive)) {
      const g = this.spawnCreature(CreatureKind.Gravemage, hx + 4, hy + 1);
      g.job = JobType.Research;
      g.jobTarget = { x: hx + 4, y: hy + 1 };
    }

    // Heroes in the corridor — fight loop readable
    const h1 = this.spawnCreature(CreatureKind.HeroKnight, hx, hy - 4);
    const h2 = this.spawnCreature(CreatureKind.HeroArcher, hx + 1, hy - 4);
    h1.job = JobType.Fight;
    h2.job = JobType.Fight;
    h1.jobTarget = { x: hx, y: hy };
    h2.jobTarget = { x: hx, y: hy };
    h1.hp = Math.floor(h1.maxHp * 0.7);
    h2.hp = Math.floor(h2.maxHp * 0.75);

    // Group-select fighters + attack-move toward heroes
    this.clearSelection();
    this.selectedGroup = [r1, r2, e1];
    for (const c of this.selectedGroup) c.selected = true;
    this.syncSelectionPrimary();
    this.issueAttackMove(hx, hy - 3, true);

    this.requestStructuralRebuild();
    this.rebuild();
    this.hud.sayNow('Squad selected — attack-move into the heroes!');
    this.hud.say(MENTOR_LINES.groupSelect);
    this.hud.say(MENTOR_LINES.attackHero);
    this.hud.say(MENTOR_LINES.heroEngage);
    this.hud.setTooltip(`(${hx},${hy}) Claimed · squad ${this.selectedGroup.length} attack-move`);
    const focus = this.grid.tileToWorld(hx + 1, hy - 2);
    this.camTarget.set(focus.x, 0, focus.z);
    this.renderer.camera.position.set(focus.x + 1.5, 21, focus.z + 12);
    this.renderer.camera.lookAt(this.camTarget);
  }

  update(dt: number): void {
    if (this.renderer.contextLost) {
      // Still tick HUD so reload overlay stays usable
      try { this.hud.update(dt); } catch { /* ignore */ }
      return;
    }
    try {
      // Global resource clamps every frame (negative mana was observed in beta inspector)
      if (!Number.isFinite(this.mana)) this.mana = 0;
      this.mana = Math.max(0, Math.min(this.maxMana(), this.mana));
      if (!Number.isFinite(this.gold)) this.gold = 0;
      this.gold = Math.max(0, this.gold);
      if (this.gold > this.goldEver) this.goldEver = this.gold;

      if (!this.gameOver) {
        this.time += dt;
        try { this.updateCamera(dt); } catch (e) { console.warn('[underkeep] camera', e); }
        try { this.regenMana(dt); } catch (e) { console.warn('[underkeep] mana', e); }
        try { this.regenHatcheryFood(dt); } catch (e) { console.warn('[underkeep] food', e); }
        try { this.assignJobs(dt); } catch (e) { console.warn('[underkeep] assignJobs', e); }
        try { this.updateMoods(dt); } catch (e) { console.warn('[underkeep] moods', e); }
        try { this.updateCreatures(dt); } catch (e) { console.warn('[underkeep] creatures', e); }
        try { this.updatePortal(dt); } catch (e) { console.warn('[underkeep] portal', e); }
        try { this.updateHeroWave(dt); } catch (e) { console.warn('[underkeep] heroes', e); }
        try { this.checkHeart(); } catch (e) { console.warn('[underkeep] heart', e); }
        try { this.payWages(dt); } catch (e) { console.warn('[underkeep] wages', e); }
        try { this.updateHazards(dt); } catch (e) { console.warn('[underkeep] hazards', e); }
        try { this.checkMissionWin(); } catch (e) { console.warn('[underkeep] mission', e); }
        this.saveAcc += dt;
        if (this.saveAcc >= 4) {
          this.saveAcc = 0;
          try { this.saveNow(); } catch (e) { console.warn('[underkeep] save', e); }
        }
      }

      // Dig load shedding: pause bloom/shadows when many diggers or dig marks active
      const digMarks = this.grid.tiles.reduce((n, t) => n + (t.mark === MarkType.Dig ? 1 : 0), 0);
      const activeDiggers = this.creatures.filter(
        (c) => c.alive && (c.job === JobType.Dig || c.job === JobType.Mine)
      ).length;
      this.renderer.setDigLoad(digMarks >= 6 || activeDiggers >= 2);

      if (this.rebuildCooldown > 0) this.rebuildCooldown -= dt;
      if (this.pendingStructuralRebuild || this.gridDirty) {
        if (this.rebuildCooldown <= 0) this.rebuild();
      } else {
        if (this.marksDirty && !this.paint) this.flushMarks();
        if (this.fogDirty) this.flushFog();
      }

      for (const c of this.creatures) {
        try {
          if (c.alive) {
            c.clampStats();
            c.syncMesh(this.time);
            // FoW: hide units on unexplored tiles (explored stays visible). Never throw.
            try {
              if (c.mesh) {
                if (c.held) {
                  c.mesh.visible = true;
                } else {
                  const tx = Number.isFinite(c.x) ? Math.round(c.x) : 0;
                  const ty = Number.isFinite(c.y) ? Math.round(c.y) : 0;
                  c.mesh.visible = this.grid.isExplored(tx, ty);
                }
              }
            } catch {
              if (c.mesh) c.mesh.visible = true;
            }
          } else if (c.mesh) {
            c.mesh.visible = false;
          }
        } catch (err) {
          console.warn('[underkeep] creature sync failed', c?.id, err);
        }
      }

      this.renderer.update(dt);
      this.hud.update(dt);
      // Pass 7.4 — prayer buff decay + temple pray count
      this.templePrayCount = 0;
      for (const c of this.creatures) {
        if (!c.alive) continue;
        if (c.prayerBuff > 0) c.prayerBuff = Math.max(0, c.prayerBuff - dt);
        if (c.job === JobType.Pray && !c.isHero) this.templePrayCount++;
      }
      this.rosterAcc += dt;
      if (this.rosterAcc >= 0.45) {
        this.rosterAcc = 0;
        this.refreshRosterUi(false);
      }
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
      this.hud.setSpellAffordable('heal', this.healUnlocked && this.mana >= 30);
      this.hud.setSpellAffordable('possess', this.possessed ? true : this.mana >= POSSESS_COST);
      this.syncMissionHud();
      this.minimapAcc += dt;
      if (this.minimapAcc >= 0.35) {
        this.minimapAcc = 0;
        try { this.updateMinimap(); } catch { /* ignore */ }
      }

      // cleanup dead meshes periodically
      this.creatures = this.creatures.filter((c) => {
        if (!c.alive) {
          try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
          return false;
        }
        return true;
      });
      // Drop stale held/selected refs
      if (this.held && !this.held.alive) this.held = null;
      const beforeSel = this.selectedGroup.length;
      this.selectedGroup = this.selectedGroup.filter((c) => c.alive);
      if (this.selected && !this.selected.alive) this.selected = null;
      if (beforeSel !== this.selectedGroup.length) this.syncSelectionPrimary();
      else if (!this.selected && this.selectedGroup.length === 0) this.hud.hideInspector();
    } catch (err) {
      console.error('[underkeep] update failed', err);
      throw err; // let main.ts frame guard count toward recovery
    }
  }

  private wageAcc = 0;
  private payWages(dt: number): void {
    this.wageAcc += dt;
    if (this.paydayToastCooldown > 0) this.paydayToastCooldown -= dt;
    if (this.wageAcc < PAYDAY_INTERVAL) return;
    this.wageAcc = 0;
    let due = 0;
    const payees: Creature[] = [];
    for (const c of this.creatures) {
      if (!c.alive || c.isHero || c.isWorker) continue;
      const w = CREATURE_STATS[c.kind].goldWage;
      if (w > 0) {
        due += w;
        payees.push(c);
      }
    }
    if (due <= 0 || payees.length === 0) return;
    if (this.gold >= due) {
      this.gold -= due;
      this.hud.say(MENTOR_LINES.payday.replace('%g', String(due)));
      // Small mood bump for paid wages
      for (const c of payees) this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + 4);
    } else {
      // Empty / short Treasury — drain what remains, mood crash
      this.gold = 0;
      for (const c of payees) {
        this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) - 32);
        c.leaveWarned = true;
      }
      this.hud.sayNow(MENTOR_LINES.paydayFail);
      this.paydayToastCooldown = 8;
    }
  }


  private pathOptsFor(c: Creature): { forHero?: boolean; allowHazard?: boolean } {
    return {
      forHero: c.isHero,
      allowHazard: c.isHero || isHeatResistant(c.kind) || isFlyer(c.kind),
    };
  }

  private placeBridge(x: number, y: number, stone: boolean): void {
    if (!this.grid.canPlaceBridge(x, y)) return;
    const cost = stone ? BRIDGE_STONE_COST : BRIDGE_WOOD_COST;
    if (this.gold < cost) {
      this.hud.say(stone ? 'Need more gold for a stone bridge.' : 'Need more gold for a wooden bridge.');
      return;
    }
    const tile = this.grid.get(x, y);
    if (!tile) return;
    this.gold -= cost;
    tile.kind = stone ? TileKind.BridgeStone : TileKind.BridgeWood;
    tile.goldAmount = 0;
    tile.digProgress = 0;
    tile.fortified = false;
    tile.mark = MarkType.None;
    tile.room = RoomType.None;
    tile.explored = true;
    this.requestStructuralRebuild();
    this.fogDirty = true;
    this.hud.say(stone ? MENTOR_LINES.bridgeStone : MENTOR_LINES.bridgeWood);
    this.mentioneOnce('bridge', MENTOR_LINES.bridgeWood);
    this.saveNow();
  }

  private enterPossession(c: Creature): void {
    try {
      if (!c || !c.alive || c.isHero) return;
      if (this.possessed) this.exitPossession(true);
      // Mana already spent when casting on selected; if armed-click, spend now
      // (armed path spends here if not yet charged — castSpell spends when target known)
      c.clampStats();
      c.held = false;
      c.stunTimer = 0;
      c.setPath(null);
      c.job = JobType.Idle;
      c.jobTarget = null;
      this.possessed = c;
      this.selectCreature(c);
      const cam = this.renderer.camera;
      this.possessCamBackup = {
        tx: this.camTarget.x,
        tz: this.camTarget.z,
        cx: cam.position.x,
        cy: cam.position.y,
        cz: cam.position.z,
      };
      this.hud.sayNow(MENTOR_LINES.possess);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] enterPossession failed', err);
      this.possessed = null;
    }
  }

  private exitPossession(silent = false): void {
    try {
      const c = this.possessed;
      this.possessed = null;
      this.possessArmed = false;
      if (this.possessCamBackup) {
        const b = this.possessCamBackup;
        this.camTarget.set(b.tx, 0, b.tz);
        this.renderer.camera.position.set(b.cx, b.cy, b.cz);
        this.renderer.camera.lookAt(this.camTarget.x, 0, this.camTarget.z);
        this.possessCamBackup = null;
      }
      if (c && c.alive) {
        c.setPath(null);
        c.job = JobType.Idle;
      }
      if (!silent) this.hud.say(MENTOR_LINES.possessEnd);
      this.refreshInspector();
    } catch (err) {
      console.warn('[underkeep] exitPossession failed', err);
      this.possessed = null;
      this.possessCamBackup = null;
    }
  }

  /** Direct tile step / path while possessing. */
  private possessMoveTo(tx: number, ty: number): void {
    const c = this.possessed;
    if (!c || !c.alive) {
      this.exitPossession(true);
      return;
    }
    const allowHazard = !c.isWorker || isHeatResistant(c.kind) || isFlyer(c.kind);
    if (!this.grid.isWalkable(tx, ty, { allowHazard }) && !(this.grid.get(tx, ty)?.kind === TileKind.Heart)) {
      return;
    }
    const path = this.grid.findPath(c.x, c.y, tx, ty, {
      allowHazard: !c.isWorker || isHeatResistant(c.kind) || isFlyer(c.kind),
    });
    if (path) {
      c.setPath(path);
      c.job = JobType.Wander;
      c.jobTarget = { x: tx, y: ty };
    }
  }

  /** Lava damages non-resistant / non-flyer units; water slows everyone lightly via path cost. */
  private updateHazards(dt: number): void {
    this.lavaDmgAcc += dt;
    if (this.lavaDmgAcc < 0.45) return;
    const tick = this.lavaDmgAcc;
    this.lavaDmgAcc = 0;
    for (const c of this.creatures) {
      if (!c.alive || c.held) continue;
      if (this.possessed === c) {
        // still damaged while possessed
      }
      const t = this.grid.get(Math.round(c.x), Math.round(c.y));
      if (!t) continue;
      if (t.kind === TileKind.Lava) {
        if (isHeatResistant(c.kind) || isFlyer(c.kind)) continue;
        const dmg = 8 * tick;
        c.takeDamage(dmg);
        if (!c.alive) {
          try {
            this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.6, c.wz), 0xff4400, 0.7);
          } catch { /* ignore */ }
          if (this.possessed === c) this.exitPossession();
        } else if (Math.random() < 0.08) {
          try {
            this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.4, c.wz), 0xff6622, 0.35);
          } catch { /* ignore */ }
        }
      } else if (t.kind === TileKind.Water) {
        // Water is a bridgeable moat — no damage tick (lava only).
      }
    }
  }

  private updateCamera(dt: number): void {
    const cam = this.renderer.camera;
    // Possession: FP-style follow + WASD steers the vessel
    if (this.possessed && this.possessed.alive) {
      const c = this.possessed;
      const look = new THREE.Vector3(c.wx, 0.35, c.wz);
      this.camTarget.lerp(look, Math.min(1, 8 * dt));
      const want = new THREE.Vector3(
        c.wx - Math.sin(c.facing) * 3.2,
        2.55,
        c.wz - Math.cos(c.facing) * 3.2
      );
      cam.position.lerp(want, Math.min(1, 6 * dt));
      cam.lookAt(c.wx, 0.9, c.wz);
      // WASD → facing-relative tile steps
      const fx = Math.round(Math.sin(c.facing));
      const fz = Math.round(Math.cos(c.facing));
      let mx = 0;
      let mz = 0;
      if (this.keys.has('w') || this.keys.has('arrowup')) {
        mx += fx;
        mz += fz;
      }
      if (this.keys.has('s') || this.keys.has('arrowdown')) {
        mx -= fx;
        mz -= fz;
      }
      if (this.keys.has('a') || this.keys.has('arrowleft')) {
        mx -= fz;
        mz += fx;
      }
      if (this.keys.has('d') || this.keys.has('arrowright')) {
        mx += fz;
        mz -= fx;
      }
      if (mx !== 0 || mz !== 0) {
        const tx = Math.round(c.x) + Math.sign(mx);
        const ty = Math.round(c.y) + Math.sign(mz);
        if (c.path.length === 0 || c.pathIndex >= c.path.length) {
          this.possessMoveTo(tx, ty);
        } else {
          const goal = c.path[c.path.length - 1];
          if (goal.x !== tx || goal.y !== ty) this.possessMoveTo(tx, ty);
        }
      }
      return;
    }
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
    const templeTiles = this.grid.countRoom(RoomType.Temple);
    const prayBonus = this.templePrayCount * 0.55 + templeTiles * 0.12;
    const rate = 2 + claimed * 0.08 + prayBonus;
    const m = Number.isFinite(this.mana) ? this.mana : 0;
    this.mana = Math.max(0, Math.min(this.maxMana(), m + rate * dt));
  }

  private regenHatcheryFood(dt: number): void {
    const hatchTiles = this.grid.countRoom(RoomType.Hatchery);
    if (hatchTiles <= 0) {
      this.hatcheryFood = 0;
      return;
    }
    const sizeBonus = roomSizeEfficiencyBonus(this.grid.largestContiguousRoom(RoomType.Hatchery));
    // ~1 food / 2.5s per hatchery tile, faster with contiguous size; cap = 4 * tiles
    this.foodRegenAcc += dt * (1 + sizeBonus);
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
      if (w.job === JobType.DragPrisoner || w.job === JobType.DragWounded) continue;
      const threat = this.creatures.find(
        (h) => h.alive && h.isHero && !h.knockedOut && !h.isPrisoner && Math.hypot(h.x - w.x, h.y - w.y) < 5
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

    const idle = workers.filter(
      (w) => w.job === JobType.Idle || (w.job === JobType.Flee && w.fleeTimer <= 0)
    );
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

      // Drag knocked-out heroes to Prison (auto-capture)
      if (this.grid.countRoom(RoomType.Prison) > 0) {
        const ko = this.creatures.find(
          (h) =>
            h.alive &&
            h.isHero &&
            h.knockedOut &&
            !h.isPrisoner &&
            !h.held &&
            !this.creatures.some(
              (o) =>
                o.alive &&
                o.isWorker &&
                o.job === JobType.DragPrisoner &&
                o.jobTarget &&
                o.jobTarget.x === h.x &&
                o.jobTarget.y === h.y
            )
        );
        if (ko) {
          const path = this.grid.findPath(w.x, w.y, ko.x, ko.y);
          if (path) {
            w.job = JobType.DragPrisoner;
            w.jobTarget = { x: ko.x, y: ko.y };
            w.setPath(path);
            w.workTimer = 0;
            assigned = true;
          }
        }
      }
      if (assigned) continue;

      // Drag knocked-out friendly minions to Lair beds
      if (this.grid.countRoom(RoomType.Lair) > 0) {
        const wounded = this.creatures.find(
          (h) =>
            h.alive &&
            !h.isHero &&
            !h.isWorker &&
            h.knockedOut &&
            !h.held &&
            !this.creatures.some(
              (o) =>
                o.alive &&
                o.isWorker &&
                o.job === JobType.DragWounded &&
                (Math.floor(o.workTimer) === h.id ||
                  (o.jobTarget && o.jobTarget.x === h.x && o.jobTarget.y === h.y))
            )
        );
        if (wounded) {
          const path = this.grid.findPath(w.x, w.y, wounded.x, wounded.y);
          if (path) {
            w.job = JobType.DragWounded;
            w.jobTarget = { x: wounded.x, y: wounded.y };
            w.setPath(path);
            w.workTimer = 0;
            assigned = true;
            this.mentioneOnce('dragWounded', MENTOR_LINES.dragWounded);
          }
        }
      }
      if (assigned) continue;

      // Workshop craft — idle Scrabblers manufacture door/sentry kits when under cap
      if (
        this.grid.countRoom(RoomType.Workshop) > 0 &&
        (this.doorKits < KIT_CAP || this.sentryKits < KIT_CAP)
      ) {
        const shop = this.findRoomTile(RoomType.Workshop);
        if (shop) {
          const crafters = workers.filter((c) => c.job === JobType.Craft).length;
          if (crafters < Math.max(1, Math.min(3, this.grid.countRoom(RoomType.Workshop)))) {
            const path = this.grid.findPath(w.x, w.y, shop.x, shop.y);
            if (path) {
              w.job = JobType.Craft;
              w.jobTarget = shop;
              w.setPath(path);
              w.workTimer = 0;
              assigned = true;
              this.mentioneOnce('craftBusy', MENTOR_LINES.craftBusy);
            }
          }
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
      // Pass 6.5: idle Scrabblers auto-fortify soft earth walls next to claimed land (rock stays impassable)
      if (!assigned) {
        let best: Vec2 | null = null;
        let bestD = 999;
        // Scan claimed/heart neighbors only — O(frontier) instead of full map
        for (const claimed of this.grid.tiles) {
          if (claimed.kind !== TileKind.Claimed && claimed.kind !== TileKind.Heart) continue;
          for (const tile of this.grid.neighbors4(claimed.x, claimed.y)) {
            if (tile.kind !== TileKind.Earth || tile.fortified) continue;
            if (tile.mark === MarkType.Dig) continue; // don't steal dig marks
            if (!tile.explored) continue; // FoW: don't send workers into the dark
            if (!this.grid.isReachableSolid(tile.x, tile.y)) continue;
            const key = `${tile.x},${tile.y}`;
            if (claimedTargets.has(key)) continue;
            const d = Math.abs(tile.x - w.x) + Math.abs(tile.y - w.y);
            if (d < bestD && d <= 16) {
              bestD = d;
              best = { x: tile.x, y: tile.y };
            }
          }
        }
        if (best) {
          const path = this.grid.findPathAdjacent(w.x, w.y, best.x, best.y);
          if (path) {
            const ft = this.grid.get(best.x, best.y)!;
            if (ft.mark !== MarkType.Fortify) {
              ft.mark = MarkType.Fortify;
              this.marksDirty = true;
            }
            w.job = JobType.Fortify;
            w.jobTarget = best;
            w.setPath(path);
            w.workTimer = 0;
            claimedTargets.add(`${best.x},${best.y}`);
            assigned = true;
            this.mentioneOnce('autoFortify', MENTOR_LINES.autoFortify);
          }
        }
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
      if (w.job === JobType.Flee || w.held) continue;
      const hasHatch = this.grid.countRoom(RoomType.Hatchery) > 0;
      const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
      // Faster when rooms exist so beta sees eat/rest within ~60–90s; milder otherwise
      w.hunger = Math.min(100, w.hunger + (hasHatch ? 7.5 : 2.8) * dt);
      w.sleepNeed = Math.min(100, w.sleepNeed + (hasLair ? 6.5 : 1.5) * dt);
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

    // non-worker jobs: eat / sleep / train / fight / pray
    for (const c of this.creatures) {
      if (!c.alive || c.isWorker || c.isHero || c.held || c.stunTimer > 0 || c.knockedOut) continue;

      // Sticky attack-move orders (Pass 6.4) — engage heroes en route, keep destination
      if (c.job === JobType.AttackMove && c.jobTarget) {
        const enemy = this.creatures.find(
          (h) => h.alive && h.isHero && Math.hypot(h.x - c.x, h.y - c.y) < 9
        );
        if (enemy) {
          if (c.bedKey) this.releaseBed(c);
          if (Math.hypot(c.x - enemy.x, c.y - enemy.y) > 1.2) {
            const path = this.grid.findPath(c.x, c.y, enemy.x, enemy.y);
            if (path) c.setPath(path);
          } else {
            c.setPath(null);
          }
        } else if (c.path.length === 0) {
          const tx = c.jobTarget.x;
          const ty = c.jobTarget.y;
          if (c.x !== tx || c.y !== ty) {
            const path = this.grid.findPath(c.x, c.y, tx, ty);
            if (path) c.setPath(path);
          }
        }
        continue;
      }

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
      c.hunger = Math.min(100, c.hunger + (hasHatch ? 8.0 : 4.5) * dt);
      c.sleepNeed = Math.min(100, c.sleepNeed + (hasLair ? 7.0 : 3.0) * dt);
      c.trainNeed = Math.min(100, c.trainNeed + 2.2 * dt);

      // Already committed to eat/sleep/train/research — keep path
      // (Guard is re-asserted below so hunger/sleep can interrupt)
      if (
        c.job === JobType.Eat ||
        c.job === JobType.Sleep ||
        c.job === JobType.Train ||
        c.job === JobType.Research ||
        c.job === JobType.Pray ||
        c.job === JobType.Flee
      ) {
        if (c.job === JobType.Sleep && c.jobTarget) {
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
      // Drop Guard only when re-evaluating (may re-assign immediately)
      if (c.job === JobType.Guard) {
        c.job = JobType.Idle;
      }
      // Never idle-wipe AttackMove here — handled as sticky above

      // Critical wound → Flee to Lair (Pass 7.4)
      const critical = c.hp < c.maxHp * 0.35;
      const hurt = c.hp < c.maxHp * 0.65;
      if (critical && hasLair) {
        const bed = this.findFreeOrOwnedBed(c);
        if (bed) {
          c.job = JobType.Flee;
          c.fleeTimer = 4;
          c.jobTarget = bed;
          c.setPath(this.grid.findPath(c.x, c.y, bed.x, bed.y));
          this.mentioneOnce('fleeLair', MENTOR_LINES.fleeLair);
          continue;
        }
      }
      if (c.hunger > (hasHatch ? 24 : 40) && hasHatch) {
        if (this.assignEat(c)) continue;
      }
      if ((c.sleepNeed > (hasLair ? 28 : 50) || hurt) && hasLair) {
        if (this.assignSleep(c)) continue;
      }

      const isResearcher = c.kind === CreatureKind.Gravemage;
      const isFighter =
        c.kind === CreatureKind.Rattlekin ||
        c.kind === CreatureKind.Emberling ||
        c.kind === CreatureKind.Thornwitch ||
        c.kind === CreatureKind.Bonewretch;

      // Low mood → Temple prayer (Pass 7.4)
      if (c.mood < 58 && this.grid.countRoom(RoomType.Temple) > 0) {
        const t = this.findRoomTile(RoomType.Temple);
        if (t) {
          c.job = JobType.Pray;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }

      // Researchers → Library (spell research over time)
      if (isResearcher && this.grid.countRoom(RoomType.Library) > 0) {
        const t = this.findRoomTile(RoomType.Library);
        if (t) {
          c.job = JobType.Research;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }

      // Fighters → Combat Pit for levels 4+ (Pass 7.4)
      if (
        isFighter &&
        c.trainNeed > 22 &&
        c.level >= 4 &&
        c.level < 10 &&
        this.grid.countRoom(RoomType.CombatPit) > 0
      ) {
        const t = this.findRoomTile(RoomType.CombatPit);
        if (t) {
          c.job = JobType.Train;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }

      // Fighters → Training Room levels (timer + level-up) up to 4
      if (
        isFighter &&
        c.trainNeed > 28 &&
        this.grid.countRoom(RoomType.Training) > 0 &&
        c.level < 4
      ) {
        const t = this.findRoomTile(RoomType.Training);
        if (t) {
          c.job = JobType.Train;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }

      // Rally flag call-to-arms — fighters (and scouts) hold the flag tile
      const rallyTile = this.grid.tiles.find((t) => t.rally);
      if (
        rallyTile &&
        (isFighter || c.kind === CreatureKind.Skitterwing) &&
        c.trainNeed <= 50
      ) {
        c.job = JobType.Guard;
        c.jobTarget = { x: rallyTile.x, y: rallyTile.y };
        if (c.x !== rallyTile.x || c.y !== rallyTile.y) {
          c.setPath(this.grid.findPath(c.x, c.y, rallyTile.x, rallyTile.y));
        } else {
          c.setPath(null);
        }
        continue;
      }

      // Guard Room — idle fighters hold post when not training
      if (isFighter && this.grid.countRoom(RoomType.Guard) > 0 && c.trainNeed <= 35) {
        const t = this.findRoomTile(RoomType.Guard);
        if (t) {
          c.job = JobType.Guard;
          c.jobTarget = t;
          if (c.x !== t.x || c.y !== t.y) {
            c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          } else {
            c.setPath(null);
          }
          continue;
        }
      }

      // Soft train need for non-fighters too (Skitterwing scouts)
      if (
        !isResearcher &&
        c.trainNeed > 45 &&
        c.level < 4 &&
        this.grid.countRoom(RoomType.Training) > 0
      ) {
        const t = this.findRoomTile(RoomType.Training);
        if (t) {
          c.job = JobType.Train;
          c.jobTarget = t;
          c.setPath(this.grid.findPath(c.x, c.y, t.x, t.y));
          continue;
        }
      }
      if (
        !isResearcher &&
        c.trainNeed > 40 &&
        c.level >= 4 &&
        c.level < 10 &&
        this.grid.countRoom(RoomType.CombatPit) > 0
      ) {
        const t = this.findRoomTile(RoomType.CombatPit);
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

    // heroes path to heart (closed doors block heroes) — Pass 6.4 clearer fight loop
    for (const h of this.creatures) {
      if (!h.alive || !h.isHero || h.stunTimer > 0) continue;
      // Prefer nearest combat minion in wider aggro; else march on Heart
      let minion: Creature | null = null;
      let best = 8.5;
      for (const c of this.creatures) {
        if (!c.alive || c.isHero || c.isWorker || c.held) continue;
        const d = Math.hypot(c.x - h.x, c.y - h.y);
        if (d < best) {
          best = d;
          minion = c;
        }
      }
      if (minion) {
        h.job = JobType.Fight;
        h.jobTarget = { x: minion.x, y: minion.y };
        if (Math.hypot(h.x - minion.x, h.y - minion.y) > 1.15) {
          h.setPath(this.grid.findPath(h.x, h.y, minion.x, minion.y, { forHero: true, allowHazard: true }));
        } else h.setPath(null);
      } else {
        h.job = JobType.Fight;
        const hx = this.grid.heartPos.x;
        const hy = this.grid.heartPos.y;
        if (h.path.length === 0 || Math.random() < 0.045) {
          // path toward heart — closed doors block; walk claimed/dirt only
          const path = this.grid.findPath(h.x, h.y, hx, hy, { forHero: true, allowHazard: true });
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
            if (best) h.setPath(this.grid.findPath(h.x, h.y, best.x, best.y, { forHero: true, allowHazard: true }));
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
    try {
      const hasLair = this.grid.countRoom(RoomType.Lair) > 0;
      const lairBeds = Math.max(1, this.grid.countRoom(RoomType.Lair));
      const minionCount = this.creatures.filter((c) => c.alive && !c.isHero).length;
      const overcrowded = hasLair && minionCount > lairBeds + 1;
      for (const c of this.creatures) {
        try {
          if (!c.alive || c.isHero || c.held) continue;
          c.clampStats();
          let delta = 2.0 * dt; // gentle recover
          if (c.hunger > 45) delta -= 10 * dt * ((c.hunger - 45) / 55);
          if (c.sleepNeed > 40) delta -= 8 * dt * ((c.sleepNeed - 40) / 60);
          if (!hasLair) delta -= 3.5 * dt;
          if (overcrowded) delta -= 4.5 * dt;
          if (c.job === JobType.Sleep || c.job === JobType.Eat) delta += 12 * dt;
          if (c.job === JobType.Pray) delta += 16 * dt;
          if (c.prayerBuff > 0) delta += 4 * dt;
          if (c.hasTalisman) delta += 1.5 * dt;
          if (this.grid.countRoom(RoomType.Temple) > 0 && c.mood < 50) delta += 1.2 * dt;
          if (c.hp < c.maxHp * 0.4) delta -= 3 * dt;
          if (!Number.isFinite(delta)) delta = 0;
          this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + delta);
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
          // Pass 6.4b: never throw on mesh / selection — Leaving? must not black-screen the canvas
          if (c.mood < 6 && !c.isWorker && c.job === JobType.Idle && Math.random() < dt * 0.015) {
            c.alive = false;
            try {
              if (c.mesh) c.mesh.visible = false;
            } catch { /* ignore */ }
            if (this.held === c) this.held = null;
            c.held = false;
            c.selected = false;
            this.selectedGroup = this.selectedGroup.filter((x) => x !== c && x.alive);
            if (this.selected === c) this.selected = null;
            this.pruneSelection();
            this.hud.say('A minion has left the Underkeep.');
            if (!this.selected) this.hud.hideInspector();
            else this.refreshInspector();
          }
        } catch (err) {
          console.warn('[underkeep] mood tick failed', c?.id, err);
        }
      }
    } catch (err) {
      console.warn('[underkeep] updateMoods failed', err);
    }
  }

  private updateCreatures(dt: number): void {
    for (const c of this.creatures) {
      if (!c.alive || c.held) continue;
      // Captives are handled by updatePrisonEconomy (no fight / path AI)
      if (c.knockedOut || c.isPrisoner) continue;
      if (c.stunTimer > 0) {
        c.stunTimer -= dt;
        continue;
      }
      if (c.speedBuff > 0) c.speedBuff -= dt;
      if (c.fleeTimer > 0) c.fleeTimer -= dt;
      if (c.attackCooldown > 0) c.attackCooldown -= dt;

      const arrived = c.moveAlongPath(dt, this.grid);

      // Creatures open closed doors they stand on; heroes cannot.
      if (!c.isHero) {
        const doorTile = this.grid.get(c.x, c.y);
        if (doorTile && doorTile.door === DoorState.Closed) {
          doorTile.door = DoorState.Open;
          this.requestStructuralRebuild();
        }
      } else {
        this.triggerTrapsForHero(c);
      }

      if (c.isWorker) {
        this.updateWorkerJob(c, dt, arrived);
      } else if (!c.isHero) {
        this.updateMinionJob(c, dt, arrived);
      } else {
        this.updateHeroJob(c, dt);
      }
    }
  }

  /** Sentry trap: fire once on hero footprint, then disarm. */
  private triggerTrapsForHero(c: Creature): void {
    const t = this.grid.get(c.x, c.y);
    if (!t || t.trap !== TrapType.Sentry) return;
    const dmg = 38;
    c.hp -= dmg;
    c.pulseTint('feast', 0.55);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.1, c.wz), 0xffaa44, 0.55);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.4, c.wz), 0xff6622, 0.4);
    t.trap = TrapType.None;
    this.requestStructuralRebuild();
    this.hud.say(MENTOR_LINES.sentryFire);
    if (c.hp <= 0) {
      if (this.grid.countRoom(RoomType.Prison) > 0) {
        c.alive = true;
        c.hp = 1;
        c.knockedOut = true;
        c.job = JobType.Idle;
        c.jobTarget = null;
        c.setPath(null);
        this.hud.sayNow(MENTOR_LINES.heroKnocked);
      } else {
        c.alive = false;
        c.mesh.visible = false;
        this.spawnCorpse(c.x, c.y, true);
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
    if (c.job === JobType.DragPrisoner) {
      if (!c.jobTarget) {
        c.job = JobType.Idle;
        c.workTimer = 0;
        return;
      }
      // workTimer == 0 → seek KO; workTimer == ko.id → haul to Prison
      if (c.workTimer <= 0) {
        const ko = this.creatures.find(
          (h) =>
            h.alive &&
            h.isHero &&
            h.knockedOut &&
            !h.isPrisoner &&
            !h.held &&
            Math.hypot(h.x - c.jobTarget!.x, h.y - c.jobTarget!.y) < 2.2
        );
        if (!arrived && c.pathIndex < c.path.length) return;
        if (!ko) {
          c.job = JobType.Idle;
          c.jobTarget = null;
          return;
        }
        if (Math.hypot(c.x - ko.x, c.y - ko.y) > 1.6) {
          const path = this.grid.findPath(c.x, c.y, ko.x, ko.y);
          if (path) {
            c.setPath(path);
            c.jobTarget = { x: ko.x, y: ko.y };
          } else {
            c.job = JobType.Idle;
            c.jobTarget = null;
          }
          return;
        }
        const prison = this.findRoomTile(RoomType.Prison);
        if (!prison) {
          c.job = JobType.Idle;
          c.jobTarget = null;
          return;
        }
        c.workTimer = ko.id;
        c.jobTarget = prison;
        const path = this.grid.findPath(c.x, c.y, prison.x, prison.y);
        if (path) c.setPath(path);
        else {
          c.job = JobType.Idle;
          c.workTimer = 0;
          c.jobTarget = null;
        }
        return;
      }
      const ko = this.creatures.find((h) => h.id === Math.floor(c.workTimer) && h.alive);
      if (ko) {
        ko.wx = c.wx;
        ko.wz = c.wz;
        ko.x = c.x;
        ko.y = c.y;
        ko.knockedOut = true;
      } else {
        c.job = JobType.Idle;
        c.workTimer = 0;
        c.jobTarget = null;
        return;
      }
      if (!arrived && c.pathIndex < c.path.length) return;
      const dest = c.jobTarget;
      if (dest && this.grid.get(dest.x, dest.y)?.room === RoomType.Prison) {
        this.imprisonCreature(ko, dest.x, dest.y);
      }
      c.workTimer = 0;
      c.job = JobType.Idle;
      c.jobTarget = null;
      c.setPath(null);
      return;
    }
    if (c.job === JobType.DragWounded) {
      if (!c.jobTarget) {
        c.job = JobType.Idle;
        c.workTimer = 0;
        return;
      }
      // workTimer == 0 → seek KO ally; workTimer == id → haul to Lair bed
      if (c.workTimer <= 0) {
        const ko = this.creatures.find(
          (h) =>
            h.alive &&
            !h.isHero &&
            !h.isWorker &&
            h.knockedOut &&
            !h.held &&
            Math.hypot(h.x - c.jobTarget!.x, h.y - c.jobTarget!.y) < 2.4
        );
        if (!arrived && c.pathIndex < c.path.length) return;
        if (!ko) {
          c.job = JobType.Idle;
          c.jobTarget = null;
          return;
        }
        if (Math.hypot(c.x - ko.x, c.y - ko.y) > 1.6) {
          const path = this.grid.findPath(c.x, c.y, ko.x, ko.y);
          if (path) {
            c.setPath(path);
            c.jobTarget = { x: ko.x, y: ko.y };
          } else {
            c.job = JobType.Idle;
            c.jobTarget = null;
          }
          return;
        }
        const bed = this.findFreeOrOwnedBed(ko) ?? this.findRoomTile(RoomType.Lair);
        if (!bed) {
          c.job = JobType.Idle;
          c.jobTarget = null;
          return;
        }
        c.workTimer = ko.id;
        c.jobTarget = bed;
        const path = this.grid.findPath(c.x, c.y, bed.x, bed.y);
        if (path) c.setPath(path);
        else {
          c.job = JobType.Idle;
          c.workTimer = 0;
          c.jobTarget = null;
        }
        return;
      }
      const ko = this.creatures.find((h) => h.id === Math.floor(c.workTimer) && h.alive);
      if (ko) {
        ko.wx = c.wx;
        ko.wz = c.wz;
        ko.x = c.x;
        ko.y = c.y;
        ko.knockedOut = true;
      } else {
        c.job = JobType.Idle;
        c.workTimer = 0;
        c.jobTarget = null;
        return;
      }
      if (!arrived && c.pathIndex < c.path.length) return;
      const dest = c.jobTarget;
      if (dest && this.grid.get(dest.x, dest.y)?.room === RoomType.Lair) {
        ko.knockedOut = false;
        ko.hp = Math.max(ko.hp, Math.floor(ko.maxHp * 0.3));
        ko.x = dest.x;
        ko.y = dest.y;
        const ww = this.grid.tileToWorld(dest.x, dest.y);
        ko.wx = ww.x;
        ko.wz = ww.z;
        ko.job = JobType.Sleep;
        ko.jobTarget = { x: dest.x, y: dest.y };
        ko.bedKey = `${dest.x},${dest.y}`;
        this.bedOwners.set(ko.bedKey, ko.id);
        ko.setPath(null);
        this.hud.sayNow(MENTOR_LINES.lairResting);
        this.renderer.spawnFx(new THREE.Vector3(ko.wx, 0.9, ko.wz), 0x60e090, 0.55);
      }
      c.workTimer = 0;
      c.job = JobType.Idle;
      c.jobTarget = null;
      c.setPath(null);
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
        // Skip extra spark under dig load (debris alone is enough)

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
            this.noteFogChange(this.grid.revealAround(t.x, t.y, 1));
            this.noteFogChange(this.grid.revealFromTerritory());
            this.requestStructuralRebuild();
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
            t.door = DoorState.None;
            t.trap = TrapType.None;
            t.rally = false;
            t.room = RoomType.None;
            this.noteFogChange(this.grid.revealAround(t.x, t.y, 1));
            this.noteFogChange(this.grid.revealFromTerritory());
            this.requestStructuralRebuild();
            c.job = JobType.Idle;
            c.jobTarget = null;
            this.saveNow();
          }
        } else {
          t.mark = MarkType.None;
          t.digProgress = 0;
          c.job = JobType.Idle;
          c.jobTarget = null;
          this.marksDirty = true;
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
        this.marksDirty = true;
        return;
      }
      c.workTimer += dt;
      // Fast claim — stone floor appears almost instantly
      if (c.workTimer >= 0.35) {
        t.kind = TileKind.Claimed;
        t.claimedProgress = 1;
        t.mark = MarkType.None;
        this.noteFogChange(this.grid.revealFromTerritory());
        this.requestStructuralRebuild();
        c.job = JobType.Idle;
        c.jobTarget = null;
        const wpos = this.grid.tileToWorld(t.x, t.y);
        this.renderer.spawnFx(new THREE.Vector3(wpos.x, 0.3, wpos.z), 0xc8bca8, 0.4);
        this.mentioneOnce('claim', MENTOR_LINES.claim);
        this.mentioneOnce('fog', MENTOR_LINES.fog);
        this.saveNow();
      }
    } else if (c.job === JobType.Fortify) {
      if (Math.hypot(c.x - t.x, c.y - t.y) > 1.6) return;
      c.workTimer += dt;
      if (c.workTimer >= 1.5) {
        t.fortified = true;
        t.mark = MarkType.None;
        // keep kind as earth visually via fortified flag
        this.requestStructuralRebuild();
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
      const lairBonus = roomSizeEfficiencyBonus(this.grid.largestContiguousRoom(RoomType.Lair));
      c.sleepNeed = Math.max(0, c.sleepNeed - 40 * dt * (1 + lairBonus * 0.5));
      // Rest heals + visible regen cue (room-size efficiency)
      const before = c.hp;
      if (c.hp < c.maxHp) c.hp = Math.min(c.maxHp, c.hp + 12 * dt * (1 + lairBonus));
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
    } else if (c.job === JobType.Craft) {
      if (!c.jobTarget) {
        c.job = JobType.Idle;
        return;
      }
      const shopTile = this.grid.get(c.jobTarget.x, c.jobTarget.y);
      if (!shopTile || shopTile.room !== RoomType.Workshop) {
        c.job = JobType.Idle;
        c.jobTarget = null;
        return;
      }
      if (!arrived) {
        if (c.path.length === 0) {
          const path = this.grid.findPath(c.x, c.y, c.jobTarget.x, c.jobTarget.y);
          if (path) c.setPath(path);
        }
        return;
      }
      c.setPath(null);
      c.workTimer += dt * c.workEfficiency();
      if (Math.random() < dt * 0.5) {
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.7, c.wz), 0xffaa44, 0.3);
      }
      // ~6s per kit at full efficiency
      if (c.workTimer >= 6) {
        c.workTimer = 0;
        let made: 'door' | 'sentry' | null = null;
        if (this.nextKitIsDoor && this.doorKits < KIT_CAP) {
          this.doorKits++;
          made = 'door';
        } else if (this.sentryKits < KIT_CAP) {
          this.sentryKits++;
          made = 'sentry';
        } else if (this.doorKits < KIT_CAP) {
          this.doorKits++;
          made = 'door';
        }
        this.nextKitIsDoor = !this.nextKitIsDoor;
        if (made) {
          this.hud.sayNow(MENTOR_LINES.craftKit.replace('%k', made === 'door' ? 'Door' : 'Sentry'));
          this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.1, c.wz), 0xffd070, 0.75);
        }
        // Leave craft if both caps full
        if (this.doorKits >= KIT_CAP && this.sentryKits >= KIT_CAP) {
          c.job = JobType.Idle;
          c.jobTarget = null;
        }
      }
    } else if (c.job === JobType.Research && arrived) {
      // Gravemage (and library researchers) unlock/improve spells over time
      const libBonus = roomSizeEfficiencyBonus(this.grid.largestContiguousRoom(RoomType.Library));
      this.researchProgress = Math.min(100, this.researchProgress + 12 * dt * (1 + libBonus));
      c.workTimer += dt;
      if (Math.random() < dt * 0.35) {
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.9, c.wz), 0x8866ff, 0.35);
      }
      if (this.researchProgress >= 100) {
        this.researchProgress = 0;
        this.researchRank = Math.min(3, this.researchRank + 1);
        if (this.researchRank >= 1 && !this.healUnlocked) {
          this.healUnlocked = true;
          this.hud.sayNow(MENTOR_LINES.researchHeal);
        } else {
          this.hud.sayNow(
            MENTOR_LINES.researchDone.replace('%r', String(this.researchRank))
          );
        }
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.2, c.wz), 0xaa88ff, 0.8);
      }
    } else if (c.job === JobType.Guard) {
      if (!c.jobTarget) {
        c.job = JobType.Idle;
        return;
      }
      if (!arrived && c.path.length > 0) return;
      if (c.x !== c.jobTarget.x || c.y !== c.jobTarget.y) {
        const path = this.grid.findPath(c.x, c.y, c.jobTarget.x, c.jobTarget.y);
        if (path) c.setPath(path);
        return;
      }
      // Hold post — idle stance at rally / Guard Room
      c.setPath(null);
      return;
    } else if (c.job === JobType.Train && arrived) {
      c.trainNeed = Math.max(0, c.trainNeed - 30 * dt);
      c.workTimer += dt;
      const tileRoom = this.grid.get(c.x, c.y)?.room;
      const onPit = tileRoom === RoomType.CombatPit;
      const names: Record<string, string> = {
        rattlekin: 'Rattlekin',
        emberling: 'Emberling',
        skitterwing: 'Skitterwing',
        gravemage: 'Gravemage',
        thornwitch: 'Thornwitch',
        bonewretch: 'Bonewretch',
      };
      const name = names[c.kind] ?? 'Minion';
      // Training Room — ~8s per level up to 4
      if (!onPit && c.workTimer > 8 && c.level < 4) {
        c.level++;
        c.maxHp += 15;
        c.hp = c.maxHp;
        c.damage += 3;
        c.workTimer = 0;
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1, c.wz), 0xffaa44, 0.6);
        this.hud.sayNow(`${name} reaches training level ${c.level}!`);
      }
      // Combat Pit — ~12s per level from 4 → 10 (DK2-style extension)
      if (onPit && c.workTimer > 12 && c.level >= 4 && c.level < 10) {
        c.level++;
        c.maxHp += 18;
        c.hp = c.maxHp;
        c.damage += 4;
        c.workTimer = 0;
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.15, c.wz), 0xff6040, 0.75);
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 0.7, c.wz), 0xffaa66, 0.45);
        this.hud.sayNow(
          MENTOR_LINES.combatLevelUp.replace('%n', name).replace('%l', String(c.level))
        );
      }
      // If they outgrew Training Room, leave so assignJobs can send them to Pit
      if (!onPit && c.level >= 4 && this.grid.countRoom(RoomType.CombatPit) > 0) {
        c.job = JobType.Idle;
        c.jobTarget = null;
      } else if (c.trainNeed < 5 || (onPit && c.level >= 10)) {
        c.job = JobType.Idle;
        c.jobTarget = null;
      }
    } else if (c.job === JobType.Pray) {
      if (!c.jobTarget) {
        c.job = JobType.Idle;
        return;
      }
      if (!arrived && c.path.length > 0) return;
      if (c.x !== c.jobTarget.x || c.y !== c.jobTarget.y) {
        const path = this.grid.findPath(c.x, c.y, c.jobTarget.x, c.jobTarget.y);
        if (path) c.setPath(path);
        return;
      }
      const tile = this.grid.get(c.x, c.y);
      if (!tile || tile.room !== RoomType.Temple) {
        c.job = JobType.Idle;
        c.jobTarget = null;
        return;
      }
      c.setPath(null);
      c.workTimer += dt;
      this.safeMood(c, (Number.isFinite(c.mood) ? c.mood : 72) + 18 * dt);
      if (Math.random() < dt * 0.4) {
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.0, c.wz), 0xffe080, 0.35);
      }
      // After ~3.5s praying → prayer buff
      if (c.workTimer >= 3.5) {
        c.prayerBuff = Math.max(c.prayerBuff, 28);
        c.workTimer = 0;
        this.mentioneOnce('prayerBuff', MENTOR_LINES.prayerBuff);
        this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.3, c.wz), 0xffd060, 0.7);
        // Lightweight talisman hook — first long prayer
        if (!c.hasTalisman && c.mood > 70 && Math.random() < 0.35) {
          c.hasTalisman = true;
          this.safeMood(c, Math.min(100, c.mood + 8));
          this.hud.sayNow(MENTOR_LINES.talismanGift);
          this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.5, c.wz), 0xfff0a0, 0.9);
        } else {
          this.mentioneOnce('praying', MENTOR_LINES.praying);
        }
      }
      if (c.mood >= 88 && c.prayerBuff > 10) {
        c.job = JobType.Idle;
        c.jobTarget = null;
      }
    } else if (c.job === JobType.Flee) {
      if (arrived || c.fleeTimer <= 0) {
        // Convert flee into sleep at Lair if possible
        if (c.jobTarget && this.grid.get(c.jobTarget.x, c.jobTarget.y)?.room === RoomType.Lair) {
          this.assignSleep(c);
        } else {
          c.job = JobType.Idle;
          c.setPath(null);
        }
      }
    } else if (c.job === JobType.AttackMove) {
      this.doCombat(c, dt);
      if (arrived && c.jobTarget && c.x === c.jobTarget.x && c.y === c.jobTarget.y) {
        // Hold the ordered tile; keep AttackMove so assignJobs stays sticky until heroes gone
        const nearHero = this.creatures.some(
          (h) => h.alive && h.isHero && Math.hypot(h.x - c.x, h.y - c.y) < 12
        );
        if (!nearHero) {
          // Convert to Guard hold at ordered tile (rally-attack destination)
          c.job = JobType.Guard;
        }
      }
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

  private doCombat(c: Creature, _dt: number): void {
    try {
    const meleeR = c.isHero ? 1.65 : 1.55;
    const foes = this.creatures.filter(
      (o) =>
        o.alive &&
        o !== c &&
        o.isHero !== c.isHero &&
        !o.isWorker &&
        !o.knockedOut &&
        !o.isPrisoner &&
        Math.hypot(o.x - c.x, o.y - c.y) < meleeR
    );
    // workers also get hit if heroes adjacent
    const extra =
      c.isHero
        ? this.creatures.filter(
            (o) => o.alive && o.isWorker && Math.hypot(o.x - c.x, o.y - c.y) < 1.35
          )
        : [];
    const targets = foes.length ? foes : extra;
    if (!targets.length) return;
    if (!this.heroEngageAnnounced && (c.isHero || targets.some((t) => t.isHero))) {
      this.heroEngageAnnounced = true;
      this.hud.say(MENTOR_LINES.heroEngage);
    }
    if (c.attackCooldown > 0) return;
    // Level scales minion damage slightly; heroes hit a bit harder for readable pressure
    const levelBonus = c.isHero ? 1 : 1 + (c.level - 1) * 0.12;
    const prayerMul = !c.isHero && c.prayerBuff > 0 ? 1.08 : 1;
    const taliMul = !c.isHero && c.hasTalisman ? 1.05 : 1;
    c.attackCooldown = c.isHero ? 0.85 : 0.78;
    const target = targets[0];
    const beforeAlive = target.alive;
    const dmg = c.damage * (0.95 + Math.random() * 0.25) * levelBonus * prayerMul * taliMul;
    target.takeDamage(dmg);
    this.renderer.spawnFx(new THREE.Vector3(target.wx, 0.85, target.wz), c.isHero ? 0x88aaff : 0xff4040, 0.32);
    this.renderer.spawnFx(new THREE.Vector3(target.wx, 1.15, target.wz), 0xffddaa, 0.18);
    if (beforeAlive && !target.alive) {
      if (target.isHero && this.grid.countRoom(RoomType.Prison) > 0) {
        // Knock out for Prison capture instead of permanent death
        target.alive = true;
        target.hp = 1;
        target.knockedOut = true;
        target.isPrisoner = false;
        target.convertProgress = 0;
        target.job = JobType.Idle;
        target.jobTarget = null;
        target.setPath(null);
        target.attackCooldown = 0;
        this.hud.sayNow(MENTOR_LINES.heroKnocked);
        this.renderer.spawnFx(new THREE.Vector3(target.wx, 1.2, target.wz), 0xa0c0ff, 0.7);
      } else if (
        !target.isHero &&
        !target.isWorker &&
        this.grid.countRoom(RoomType.Lair) > 0
      ) {
        // Friendly KO — Scrabblers can drag to Lair beds (Pass 7.4)
        target.alive = true;
        target.hp = 1;
        target.knockedOut = true;
        target.job = JobType.Idle;
        target.jobTarget = null;
        target.setPath(null);
        target.attackCooldown = 0;
        this.hud.sayNow(MENTOR_LINES.allyKnocked);
        this.renderer.spawnFx(new THREE.Vector3(target.wx, 1.1, target.wz), 0xff8860, 0.65);
      } else {
        this.spawnCorpse(target.x, target.y, target.isHero);
        if (target.isHero) {
          this.hud.sayNow(MENTOR_LINES.heroDown);
          this.renderer.spawnFx(new THREE.Vector3(target.wx, 1.2, target.wz), 0xffee88, 0.7);
        }
      }
    }
    } catch (err) {
      console.warn('[underkeep] doCombat failed', err);
    }
  }

  private announceSpecies(kind: CreatureKind, mentorLine: string): void {
    const names: Record<string, string> = {
      skitterwing: 'Skitterwing',
      rattlekin: 'Rattlekin',
      emberling: 'Emberling',
      gravemage: 'Gravemage',
      thornwitch: 'Thornwitch',
      bonewretch: 'Bonewretch',
    };
    const label = names[kind] ?? 'minion';
    this.hud.sayNow(`A ${label} has entered the Underkeep.`);
    this.hud.say(mentorLine);
  }

  private updatePortal(dt: number): void {
    this.portalCooldown -= dt;
    if (this.portalCooldown > 0) return;
    const portals = this.grid.countRoom(RoomType.Portal);
    if (portals <= 0) return;

    // Recruitment driven by dungeon composition (room tiles)
    const lair = this.grid.countRoom(RoomType.Lair);
    const hatch = this.grid.countRoom(RoomType.Hatchery);
    const train = this.grid.countRoom(RoomType.Training);
    const library = this.grid.countRoom(RoomType.Library);
    const treasury = this.grid.countRoom(RoomType.Treasury);
    const claimed = this.grid.countClaimed();

    const portalTile = this.grid.tiles.find((t) => t.room === RoomType.Portal);
    if (!portalTile) return;
    let sx = portalTile.x;
    let sy = portalTile.y;
    for (const n of this.grid.neighbors4(portalTile.x, portalTile.y)) {
      if (this.grid.isWalkable(n.x, n.y)) {
        sx = n.x;
        sy = n.y;
        break;
      }
    }

    // Skitterwing — Portal + claimed land (scouts)
    if (!this.attracted.skitterwing && claimed >= 16 && portals >= 1) {
      this.spawnCreature(CreatureKind.Skitterwing, sx, sy);
      this.attracted.skitterwing = true;
      this.portalCooldown = 8;
      this.announceSpecies(CreatureKind.Skitterwing, MENTOR_LINES.skitterwing);
      return;
    }
    // Rattlekin — Lair + Hatchery composition
    if (!this.attracted.rattlekin && lair >= 4 && hatch >= 2) {
      this.spawnCreature(CreatureKind.Rattlekin, sx, sy);
      this.attracted.rattlekin = true;
      this.portalCooldown = 10;
      this.announceSpecies(CreatureKind.Rattlekin, MENTOR_LINES.rattlekin);
      return;
    }
    // Emberling — Training + Lair + gold reserves
    if (!this.attracted.emberling && train >= 4 && lair >= 6 && this.gold >= 200) {
      this.spawnCreature(CreatureKind.Emberling, sx, sy);
      this.attracted.emberling = true;
      this.portalCooldown = 12;
      this.announceSpecies(CreatureKind.Emberling, MENTOR_LINES.emberling);
      return;
    }
    // Gravemage — Library + Lair (researchers)
    if (!this.attracted.gravemage && library >= 4 && lair >= 4) {
      this.spawnCreature(CreatureKind.Gravemage, sx, sy);
      this.attracted.gravemage = true;
      this.portalCooldown = 12;
      this.announceSpecies(CreatureKind.Gravemage, MENTOR_LINES.gravemage);
      return;
    }

    // Periodic extras while composition remains attractive
    if (this.attracted.rattlekin && lair >= 4 && hatch >= 2 && Math.random() < 0.12) {
      const count = this.creatures.filter((c) => c.alive && c.kind === CreatureKind.Rattlekin).length;
      if (count < 4) {
        this.spawnCreature(CreatureKind.Rattlekin, sx, sy);
        this.portalCooldown = 22;
        this.hud.sayNow('A Rattlekin has entered the Underkeep.');
        return;
      }
    }
    if (this.attracted.gravemage && library >= 4 && Math.random() < 0.1) {
      const count = this.creatures.filter((c) => c.alive && c.kind === CreatureKind.Gravemage).length;
      if (count < 2) {
        this.spawnCreature(CreatureKind.Gravemage, sx, sy);
        this.portalCooldown = 28;
        this.hud.sayNow('A Gravemage has entered the Underkeep.');
        return;
      }
    }
    if (this.attracted.emberling && train >= 4 && treasury >= 2 && Math.random() < 0.08) {
      const count = this.creatures.filter((c) => c.alive && c.kind === CreatureKind.Emberling).length;
      if (count < 2) {
        this.spawnCreature(CreatureKind.Emberling, sx, sy);
        this.portalCooldown = 30;
        this.hud.sayNow('An Emberling has entered the Underkeep.');
      }
    }
  }


  private spawnCorpse(x: number, y: number, fromHero: boolean): void {
    this.corpses.push({ x, y, timer: 0, fromHero });
    // Cap corpse pile
    if (this.corpses.length > 24) this.corpses.shift();
  }

  private imprisonCreature(c: Creature, x: number, y: number): void {
    c.knockedOut = false;
    c.isPrisoner = true;
    c.convertProgress = Math.max(0, c.convertProgress);
    c.hp = Math.max(1, Math.min(c.maxHp, c.hp));
    c.alive = true;
    c.held = false;
    c.job = JobType.Idle;
    c.jobTarget = null;
    c.setPath(null);
    c.x = x;
    c.y = y;
    const w = this.grid.tileToWorld(x, y);
    c.wx = w.x;
    c.wz = w.z;
    c.hunger = Math.max(c.hunger, 20);
    this.hud.sayNow(MENTOR_LINES.prisonerHeld);
    this.renderer.spawnFx(new THREE.Vector3(c.wx, 1.0, c.wz), 0x8090a8, 0.55);
  }

  private convertPrisoner(c: Creature): void {
    const x = c.x;
    const y = c.y;
    c.alive = false;
    try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
    // Prefer Thornwitch; occasionally Rattlekin
    const kind =
      Math.random() < 0.7 ? CreatureKind.Thornwitch : CreatureKind.Rattlekin;
    const m = this.spawnCreature(kind, x, y);
    m.mood = 80;
    m.hunger = 15;
    this.hud.sayNow(MENTOR_LINES.converted);
    this.renderer.spawnFx(new THREE.Vector3(m.wx, 1.2, m.wz), 0xff4060, 0.8);
    this.announceSpecies(kind, MENTOR_LINES.converted);
  }

  private raiseBonewretch(x: number, y: number, mentor: string): void {
    // Prefer a Graveyard tile
    const gy = this.findRoomTile(RoomType.Graveyard);
    const sx = gy?.x ?? x;
    const sy = gy?.y ?? y;
    const b = this.spawnCreature(CreatureKind.Bonewretch, sx, sy);
    b.mood = 90;
    b.hunger = 0;
    b.sleepNeed = 0;
    this.hud.sayNow(mentor);
    this.renderer.spawnFx(new THREE.Vector3(b.wx, 1.1, b.wz), 0x80ff60, 0.75);
  }

  /** Prison hold, Torture conversion, Graveyard corpse → Bonewretch, starve path. */
  private updatePrisonEconomy(dt: number): void {
    const hasPrison = this.grid.countRoom(RoomType.Prison) > 0;
    const hasTorture = this.grid.countRoom(RoomType.Torture) > 0;
    const hasGrave = this.grid.countRoom(RoomType.Graveyard) > 0;

    // Auto-snap nearby KO heroes onto Prison if standing on a Prison tile
    for (const c of this.creatures) {
      if (!c.alive || !c.isHero || c.held) continue;
      if (c.knockedOut && !c.isPrisoner) {
        const t = this.grid.get(c.x, c.y);
        if (t?.room === RoomType.Prison) {
          this.imprisonCreature(c, c.x, c.y);
        }
      }
    }

    for (const c of this.creatures) {
      if (!c.alive || !c.isPrisoner) continue;
      // Starve over time in the cell
      c.hunger = Math.min(100, c.hunger + 6 * dt);
      const onTorture = this.grid.get(c.x, c.y)?.room === RoomType.Torture;
      const onPrison = this.grid.get(c.x, c.y)?.room === RoomType.Prison;
      if (!onPrison && !onTorture && hasPrison) {
        // Wandered? snap back
        const p = this.findRoomTile(RoomType.Prison);
        if (p) {
          c.x = p.x;
          c.y = p.y;
          const w = this.grid.tileToWorld(p.x, p.y);
          c.wx = w.x;
          c.wz = w.z;
        }
      }
      // Conversion when Torture exists
      if (hasTorture) {
        const rate = onTorture ? 9 : 4.5; // % per second
        const before = c.convertProgress;
        c.convertProgress = Math.min(100, c.convertProgress + rate * dt);
        if (before < 40 && c.convertProgress >= 40) {
          this.hud.say(MENTOR_LINES.converting);
        }
        if (c.convertProgress >= 100) {
          this.convertPrisoner(c);
          continue;
        }
      }
      // Starved prisoner → Bonewretch via Graveyard (or directly if Graveyard exists)
      if (c.hunger >= 100) {
        const x = c.x;
        const y = c.y;
        c.alive = false;
        try { this.renderer.removeEntityMesh(c.mesh); } catch { /* ignore */ }
        if (hasGrave) {
          this.raiseBonewretch(x, y, MENTOR_LINES.starvedBones);
        } else {
          this.spawnCorpse(x, y, true);
          this.hud.sayNow(MENTOR_LINES.starvedBones);
        }
      }
    }

    // Graveyard raises corpses over time
    if (hasGrave && this.corpses.length) {
      const remain: typeof this.corpses = [];
      for (const corpse of this.corpses) {
        // Accelerate if corpse sits on/near Graveyard
        const onGy = this.grid.get(corpse.x, corpse.y)?.room === RoomType.Graveyard;
        corpse.timer += dt * (onGy ? 1.6 : 1);
        if (corpse.timer >= 8) {
          this.raiseBonewretch(corpse.x, corpse.y, MENTOR_LINES.boneRaised);
        } else {
          remain.push(corpse);
        }
      }
      this.corpses = remain;
    } else if (!hasGrave) {
      // Corpses slowly despawn without Graveyard
      this.corpses = this.corpses.filter((c) => {
        c.timer += dt * 0.25;
        return c.timer < 40;
      });
    }
  }

  private updateHeroWave(dt: number): void {
    if (this.heroWaveSpawned) {
      // Wave clear → next wave or mission win
      if (!this.won && !this.gameOver) {
        const heroesLeft = this.creatures.some(
          (c) => c.alive && c.isHero && !c.knockedOut && !c.isPrisoner
        );
        if (!heroesLeft && this.time > 2) {
          this.wavesCleared = Math.min(WIN_WAVES, this.wavesCleared + 1);
          this.heroWaveSpawned = false;
          if (this.wavesCleared >= WIN_WAVES) {
            this.checkMissionWin();
            return;
          }
          // Schedule next wave
          this.heroWaveTimer = 50 + this.wavesCleared * 8;
          this.heroWarn30 = false;
          this.heroWarn10 = false;
          this.heroEngageAnnounced = false;
          const next = this.wavesCleared + 1;
          this.hud.sayNow(
            MENTOR_LINES.waveCleared
              .replace('%n', String(this.wavesCleared))
              .replace('%next', String(next))
              .replace('%w', String(WIN_WAVES))
          );
          this.hud.say(MENTOR_LINES.win); // keep classic toast flavor between waves
        }
      }
      return;
    }
    this.heroWaveTimer -= dt;
    if (!this.heroWarn30 && this.heroWaveTimer <= 30 && this.heroWaveTimer > 10) {
      this.heroWarn30 = true;
      this.hud.sayNow(MENTOR_LINES.heroesSoon);
    }
    if (!this.heroWarn10 && this.heroWaveTimer <= 10 && this.heroWaveTimer > 0) {
      this.heroWarn10 = true;
      this.hud.sayNow(MENTOR_LINES.heroesImminent);
    }
    if (this.heroWaveTimer > 0) return;
    this.heroWaveSpawned = true;
    const waveNum = this.wavesCleared + 1;
    this.hud.sayNow(`${MENTOR_LINES.heroes} (Wave ${waveNum}/${WIN_WAVES})`);
    this.hud.say(MENTOR_LINES.heroes);

    // Spawn at north edge — carve a clear entry corridor so pathing/fight loop reads
    const cx = this.grid.heartPos.x;
    const hy = this.grid.heartPos.y;
    let sy = 2;
    let sx = cx;
    for (let y = 2; y < Math.min(hy - 1, this.grid.height / 2); y++) {
      if (this.grid.isWalkable(cx, y)) {
        sy = y;
        sx = cx;
        break;
      }
    }
    // Carve 3-wide dirt corridor from spawn toward heart for readable approach
    for (let y = sy; y <= Math.min(sy + 4, hy - 2); y++) {
      for (let x = cx - 1; x <= cx + 1; x++) {
        const tile = this.grid.get(x, y);
        if (!tile || tile.kind === TileKind.Heart || tile.kind === TileKind.Rock) continue;
        if (tile.kind === TileKind.Earth || tile.kind === TileKind.Gold || tile.kind === TileKind.Wall) {
          tile.kind = TileKind.Dirt;
          tile.fortified = false;
          tile.digProgress = 0;
          this.gridDirty = true;
        }
      }
    }
    if (!this.grid.isWalkable(sx, sy)) {
      const tile = this.grid.get(sx, sy);
      if (tile && tile.kind !== TileKind.Rock && tile.kind !== TileKind.Heart) {
        tile.kind = TileKind.Dirt;
        this.gridDirty = true;
      }
    }
    this.requestStructuralRebuild();

    const k1 = this.spawnCreature(CreatureKind.HeroKnight, sx, sy);
    const k2 = this.spawnCreature(CreatureKind.HeroKnight, sx + 1, sy);
    const a1 = this.spawnCreature(CreatureKind.HeroArcher, sx - 1, sy);
    // Slightly tougher wave so doors/traps/fighters matter (scales with wave #)
    const waveScale = 1.05 + this.wavesCleared * 0.12;
    for (const h of [k1, k2, a1]) {
      h.job = JobType.Fight;
      h.jobTarget = { ...this.grid.heartPos };
      h.hp = Math.floor(h.maxHp * waveScale);
      h.maxHp = h.hp;
      const w = this.grid.tileToWorld(h.x, h.y);
      this.renderer.spawnFx(new THREE.Vector3(w.x, 1.2, w.z), 0xa0c0ff, 0.65);
    }
    // Optional 4th skirmisher if dungeon is well developed
    if (this.grid.countClaimed() >= 40) {
      const k3 = this.spawnCreature(CreatureKind.HeroKnight, sx, sy + 1);
      k3.job = JobType.Fight;
      k3.jobTarget = { ...this.grid.heartPos };
      this.renderer.spawnFx(
        new THREE.Vector3(k3.wx, 1.2, k3.wz),
        0xa0c0ff,
        0.5
      );
    }
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

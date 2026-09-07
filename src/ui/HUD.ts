import { SpellId, ToolMode } from '../game/types';

const ROOM_TOOLS: ToolMode[] = ['treasury', 'lair', 'hatchery', 'training', 'library', 'guard', 'workshop', 'prison', 'torture', 'graveyard', 'temple', 'combatPit', 'casino', 'door', 'sentry', 'rally', 'bridgeWood', 'bridgeStone', 'sell'];

export class HUD {
  private goldEl: HTMLElement;
  private manaEl: HTMLElement;
  private manaBar: HTMLElement;
  private workersEl: HTMLElement;
  private creaturesEl: HTMLElement;
  private mentorEl: HTMLElement;
  private mentorText: HTMLElement;
  private tooltipEl: HTMLElement;
  private overlay: HTMLElement;
  private overlayTitle: HTMLElement;
  private overlayMsg: HTMLElement;
  private buildSheet: HTMLElement;
  private spellsSheet: HTMLElement;
  private btnBuild: HTMLElement | null;
  private btnSpells: HTMLElement | null;
  private mentorTimer = 0;
  private mentorQueue: string[] = [];
  private inspectorEl: HTMLElement;
  private inspName: HTMLElement;
  private inspJob: HTMLElement;
  private inspHp: HTMLElement;
  private inspHpBar: HTMLElement;
  private inspHunger: HTMLElement;
  private inspTired: HTMLElement;
  private inspMood: HTMLElement;
  private inspMoodBar: HTMLElement;
  private inspEfficiency: HTMLElement;
  private minimap: HTMLCanvasElement | null;
  private minimapCtx: CanvasRenderingContext2D | null;
  private objectiveEl: HTMLElement | null;
  private kitsValueEl: HTMLElement | null;
  private createWorkerBtn: HTMLElement | null;
  private rosterSheet: HTMLElement | null;
  private rosterList: HTMLElement | null;
  private btnRoster: HTMLElement | null;
  private goldCapEl: HTMLElement | null;
  private heartEl: HTMLElement | null;
  private heartBar: HTMLElement | null;
  private paydayEl: HTMLElement | null;
  private inspHungerRow: HTMLElement | null;
  private inspTiredRow: HTMLElement | null;

  onToolChange: ((tool: ToolMode) => void) | null = null;
  onSpell: ((spell: SpellId) => void) | null = null;
  onOverlayContinue: (() => void) | null = null;
  onNewGame: (() => void) | null = null;
  onInspectorClose: (() => void) | null = null;
  onRosterSelect: ((creatureId: number) => void) | null = null;

  constructor() {
    this.goldEl = document.getElementById('gold-value')!;
    this.manaEl = document.getElementById('mana-value')!;
    this.manaBar = document.getElementById('mana-bar')!;
    this.workersEl = document.getElementById('workers-value')!;
    this.creaturesEl = document.getElementById('creatures-value')!;
    this.mentorEl = document.getElementById('mentor')!;
    this.mentorText = document.getElementById('mentor-text')!;
    this.tooltipEl = document.getElementById('tooltip')!;
    this.overlay = document.getElementById('overlay')!;
    this.overlayTitle = document.getElementById('overlay-title')!;
    this.overlayMsg = document.getElementById('overlay-msg')!;
    this.buildSheet = document.getElementById('build-sheet')!;
    this.spellsSheet = document.getElementById('spells-sheet')!;
    this.btnBuild = document.getElementById('btn-build');
    this.btnSpells = document.getElementById('btn-spells');
    this.inspectorEl = document.getElementById('inspector')!;
    this.inspName = document.getElementById('insp-name')!;
    this.inspJob = document.getElementById('insp-job')!;
    this.inspHp = document.getElementById('insp-hp')!;
    this.inspHpBar = document.getElementById('insp-hp-bar')!;
    this.inspHunger = document.getElementById('insp-hunger')!;
    this.inspTired = document.getElementById('insp-tired')!;
    this.inspMood = document.getElementById('insp-mood')!;
    this.inspMoodBar = document.getElementById('insp-mood-bar')!;
    this.inspEfficiency = document.getElementById('insp-efficiency')!;
    this.minimap = document.getElementById('minimap') as HTMLCanvasElement | null;
    this.minimapCtx = this.minimap?.getContext('2d') ?? null;
    this.objectiveEl = document.getElementById('objective-value');
    this.kitsValueEl = document.getElementById('kits-value');
    this.createWorkerBtn = document.getElementById('btn-create-worker')
      ?? (document.querySelector('.spell[data-spell="createWorker"]') as HTMLElement | null);
    this.rosterSheet = document.getElementById('roster-sheet');
    this.rosterList = document.getElementById('roster-list');
    this.btnRoster = document.getElementById('btn-roster');
    this.goldCapEl = document.getElementById('gold-cap');
    this.heartEl = document.getElementById('heart-value');
    this.heartBar = document.getElementById('heart-bar');
    this.paydayEl = document.getElementById('payday-value');
    this.inspHungerRow = document.getElementById('insp-hunger-row');
    this.inspTiredRow = document.getElementById('insp-tired-row');
    document.getElementById('insp-close')?.addEventListener('click', () => {
      this.hideInspector();
      this.onInspectorClose?.();
    });

    document.querySelectorAll('.tool').forEach((btn) => {
      btn.addEventListener('click', () => {
        const tool = (btn as HTMLElement).dataset.tool as ToolMode;
        this.setActiveTool(tool);
        this.onToolChange?.(tool);
        if (ROOM_TOOLS.includes(tool)) this.closeSheets();
      });
    });
    document.querySelectorAll('.spell').forEach((btn) => {
      btn.addEventListener('click', () => {
        const spell = (btn as HTMLElement).dataset.spell as SpellId;
        this.onSpell?.(spell);
        if (spell === 'speed' || spell === 'lightning' || spell === 'possess' || spell === 'sight' || spell === 'callToArms') this.closeSheet('spells');
      });
    });
    document.getElementById('overlay-btn')!.addEventListener('click', () => {
      this.hideOverlay();
      this.onOverlayContinue?.();
    });
    document.getElementById('overlay-btn-secondary')?.addEventListener('click', () => {
      this.hideOverlay();
      this.onNewGame?.();
    });
    document.getElementById('btn-new-game')?.addEventListener('click', () => {
      this.onNewGame?.();
    });

    this.btnBuild?.addEventListener('click', () => this.toggleSheet('build'));
    this.btnSpells?.addEventListener('click', () => this.toggleSheet('spells'));
    this.btnRoster?.addEventListener('click', () => this.toggleSheet('roster'));
    // Desktop sheet toggles share the same sheets
    document.getElementById('btn-build-desktop')?.addEventListener('click', () => this.toggleSheet('build'));
    document.getElementById('btn-spells-desktop')?.addEventListener('click', () => this.toggleSheet('spells'));
    document.getElementById('btn-roster-desktop')?.addEventListener('click', () => this.toggleSheet('roster'));

    document.querySelectorAll('.sheet-close').forEach((btn) => {
      btn.addEventListener('click', () => {
        const which = (btn as HTMLElement).dataset.close;
        if (which === 'build' || which === 'spells' || which === 'roster') this.closeSheet(which as 'build' | 'spells' | 'roster');
      });
    });
    document.getElementById('mentor-dismiss')?.addEventListener('click', () => this.dismissMentor());
  }

  private sheetButtons(which: 'build' | 'spells' | 'roster'): HTMLElement[] {
    const ids =
      which === 'build'
        ? ['btn-build', 'btn-build-desktop']
        : which === 'spells'
          ? ['btn-spells', 'btn-spells-desktop']
          : ['btn-roster', 'btn-roster-desktop'];
    return ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
  }

  private sheetEl(which: 'build' | 'spells' | 'roster'): HTMLElement | null {
    if (which === 'build') return this.buildSheet;
    if (which === 'spells') return this.spellsSheet;
    return this.rosterSheet;
  }

  private toggleSheet(which: 'build' | 'spells' | 'roster'): void {
    const sheet = this.sheetEl(which);
    if (!sheet) return;
    const open = sheet.hasAttribute('hidden');
    for (const w of ['build', 'spells', 'roster'] as const) {
      if (w === which) continue;
      this.sheetEl(w)?.setAttribute('hidden', '');
      for (const b of this.sheetButtons(w)) {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      }
    }
    if (open) {
      sheet.removeAttribute('hidden');
      for (const b of this.sheetButtons(which)) {
        b.classList.add('active');
        b.setAttribute('aria-expanded', 'true');
      }
    } else {
      sheet.setAttribute('hidden', '');
      for (const b of this.sheetButtons(which)) {
        b.classList.remove('active');
        b.setAttribute('aria-expanded', 'false');
      }
    }
  }

  private closeSheet(which: 'build' | 'spells' | 'roster'): void {
    const sheet = this.sheetEl(which);
    sheet?.setAttribute('hidden', '');
    for (const b of this.sheetButtons(which)) {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    }
  }

  private closeSheets(): void {
    this.closeSheet('build');
    this.closeSheet('spells');
    this.closeSheet('roster');
  }

  openRoster(): void {
    this.toggleSheet('roster');
  }

  isRosterOpen(): boolean {
    return !!this.rosterSheet && !this.rosterSheet.hasAttribute('hidden');
  }

  updateRoster(
    rows: Array<{
      id: number;
      name: string;
      job: string;
      hp: number;
      maxHp: number;
      mood: number;
      knockedOut?: boolean;
    }>
  ): void {
    if (!this.rosterList) return;
    this.rosterList.innerHTML = '';
    if (!rows.length) {
      const empty = document.createElement('div');
      empty.className = 'roster-hint';
      empty.textContent = 'No minions yet — dig to the Portal and claim it.';
      this.rosterList.appendChild(empty);
      return;
    }
    for (const r of rows) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'roster-row';
      btn.setAttribute('role', 'listitem');
      btn.dataset.id = String(r.id);
      if (r.knockedOut) btn.classList.add('ko');
      if (r.hp < r.maxHp * 0.4) btn.classList.add('hurt');
      btn.innerHTML =
        `<span class="r-name">${r.name}</span>` +
        `<span class="r-job">${r.job}</span>` +
        `<span class="r-hp">${Math.floor(r.hp)}/${Math.floor(r.maxHp)}</span>` +
        `<span class="r-mood">${Math.floor(r.mood)}</span>`;
      btn.addEventListener('click', () => {
        this.onRosterSelect?.(r.id);
        this.closeSheet('roster');
      });
      this.rosterList.appendChild(btn);
    }
  }

  setActiveTool(tool: ToolMode): void {
    document.querySelectorAll('.tool').forEach((b) => {
      b.classList.toggle('active', (b as HTMLElement).dataset.tool === tool);
    });
    if (ROOM_TOOLS.includes(tool)) {
      this.btnBuild?.classList.add('active');
    } else if (tool === 'select' || tool === 'dig' || tool === 'claim' || tool === 'fortify') {
      this.btnBuild?.classList.remove('active');
    }
  }

  updateStats(gold: number, mana: number, maxMana: number, workers: number, creatures: number): void {
    const g = Number.isFinite(gold) ? Math.max(0, gold) : 0;
    const mm = Number.isFinite(maxMana) && maxMana > 0 ? maxMana : 1;
    const m = Number.isFinite(mana) ? Math.max(0, Math.min(mm, mana)) : 0;
    this.goldEl.textContent = String(Math.floor(g));
    this.manaEl.textContent = `${Math.floor(m)}/${Math.floor(mm)}`;
    const manaPct = Math.max(0, Math.min(100, (m / mm) * 100));
    this.manaBar.style.width = `${Number.isFinite(manaPct) ? manaPct : 0}%`;
    this.workersEl.textContent = String(Math.max(0, workers | 0));
    this.creaturesEl.textContent = String(Math.max(0, creatures | 0));
  }

  updateKeepVitals(opts: {
    goldCap: number;
    heartHp: number;
    heartMax: number;
    paydayIn: number;
    paydayDue: number;
    portalCount: number;
    portalCap: number;
  }): void {
    if (this.goldCapEl) {
      this.goldCapEl.textContent = `/${Math.floor(opts.goldCap)}`;
    }
    if (this.heartEl) {
      this.heartEl.textContent = `${Math.max(0, Math.ceil(opts.heartHp))}`;
    }
    if (this.heartBar) {
      const pct = opts.heartMax > 0 ? Math.max(0, Math.min(100, (opts.heartHp / opts.heartMax) * 100)) : 0;
      this.heartBar.style.width = `${pct}%`;
    }
    if (this.paydayEl) {
      const secs = Math.max(0, Math.ceil(opts.paydayIn));
      this.paydayEl.textContent = opts.paydayDue > 0 ? `${secs}s · ${opts.paydayDue}g` : `${secs}s`;
    }
    if (opts.portalCap > 0) {
      this.creaturesEl.textContent = `${Math.max(0, opts.portalCount | 0)}/${opts.portalCap}`;
    }
  }

  setSpellAffordable(spell: SpellId, ok: boolean): void {
    document.querySelectorAll(`.spell[data-spell="${spell}"]`).forEach((el) => {
      (el as HTMLButtonElement).disabled = !ok;
    });
  }

  say(line: string): void {
    this.mentorQueue.push(line);
    if (this.mentorTimer <= 0) this.popMentor();
  }

  /** Immediate mentor toast — preempts queue (slap feedback must be conclusive). */
  sayNow(line: string): void {
    this.mentorQueue.length = 0;
    this.mentorText.textContent = line;
    this.mentorEl.classList.add('visible');
    this.mentorTimer = 3.8;
  }

  dismissMentor(): void {
    this.mentorTimer = 0;
    this.mentorQueue.length = 0;
    this.mentorEl.classList.remove('visible');
  }

  private popMentor(): void {
    const line = this.mentorQueue.shift();
    if (!line) {
      this.mentorEl.classList.remove('visible');
      return;
    }
    this.mentorText.textContent = line;
    this.mentorEl.classList.add('visible');
    this.mentorTimer = 3.8;
  }

  setTooltip(text: string): void {
    this.tooltipEl.textContent = text;
  }

  update(dt: number): void {
    if (this.mentorTimer > 0) {
      this.mentorTimer -= dt;
      if (this.mentorTimer <= 0) this.popMentor();
    }
  }


  showInspector(data: {
    kind: string;
    job: string;
    hp: number;
    maxHp: number;
    hunger: number;
    tired: number;
    mood: number;
    efficiency: number;
    held?: boolean;
    worker?: boolean;
  }): void {
    try {
    const clamp01 = (n: number, lo: number, hi: number, fb = lo) => {
      if (!Number.isFinite(n)) return fb;
      return Math.max(lo, Math.min(hi, n));
    };
    const maxHp = clamp01(data.maxHp, 1, 9999, 1);
    const hp = clamp01(data.hp, 0, maxHp, 0);
    const hunger = clamp01(data.hunger, 0, 100, 0);
    const tired = clamp01(data.tired, 0, 100, 0);
    const mood = clamp01(data.mood, 0, 100, 50);
    // efficiency may be 0–1.2 fraction OR already a percent — normalize to fraction
    let eff = Number.isFinite(data.efficiency) ? data.efficiency : 0.85;
    if (eff > 1.5) eff = eff / 100;
    eff = clamp01(eff, 0, 1.2, 0.85);
    const effPct = Math.round(eff * 100);

    this.inspName.textContent = data.held ? `${data.kind} (held)` : data.kind;
    this.inspJob.textContent = data.job || 'Idle';
    this.inspHp.textContent = `${Math.ceil(hp)}/${Math.ceil(maxHp)}`;
    const hpPct = clamp01((hp / maxHp) * 100, 0, 100, 0);
    this.inspHpBar.style.width = `${hpPct}%`;
    if (data.worker) {
      this.inspHunger.textContent = 'None';
      this.inspTired.textContent = 'None';
      this.inspHungerRow?.classList.add('insp-na');
      this.inspTiredRow?.classList.add('insp-na');
    } else {
      this.inspHunger.textContent = `${Math.floor(hunger)}`;
      this.inspTired.textContent = `${Math.floor(tired)}`;
      this.inspHungerRow?.classList.remove('insp-na');
      this.inspTiredRow?.classList.remove('insp-na');
    }
    const moodLabel =
      mood >= 75 ? 'Happy' : mood >= 50 ? 'Content' : mood >= 30 ? 'Grumpy' : mood >= 15 ? 'Angry' : 'Leaving?';
    this.inspMood.textContent = `${Math.floor(mood)} · ${moodLabel}`;
    this.inspMoodBar.style.width = `${clamp01(mood, 0, 100, 0)}%`;
    // Always visible Efficiency: N%
    this.inspEfficiency.textContent = `${effPct}%`;
    this.inspectorEl.classList.remove('hidden');
    } catch (err) {
      console.warn('[underkeep] showInspector failed', err);
      try { this.inspectorEl.classList.add('hidden'); } catch { /* ignore */ }
    }
  }

  hideInspector(): void {
    this.inspectorEl.classList.add('hidden');
  }


  setObjective(text: string): void {
    if (this.objectiveEl) this.objectiveEl.textContent = text;
  }

  setKits(doorKits: number, sentryKits: number): void {
    if (this.kitsValueEl) this.kitsValueEl.textContent = `D${doorKits} · S${sentryKits}`;
  }

  setWorkerCost(cost: number): void {
    if (!this.createWorkerBtn) return;
    const label = this.createWorkerBtn.classList.contains('tool') || true;
    // Keep emoji; show cost for desktop primary bar
    if (this.createWorkerBtn.id === 'btn-create-worker' || (this.createWorkerBtn.textContent || '').includes('Worker')) {
      this.createWorkerBtn.textContent = `✨ Worker ${cost}g`;
    }
    this.createWorkerBtn.title = `Create Scrabbler (Q) — ${cost} gold (cost scales)`;
    void label;
  }

  /** Draw explored/claimed overview with Heart + buried Portal markers. */
  drawMinimap(opts: {
    width: number;
    height: number;
    heartX: number;
    heartY: number;
    portalX: number;
    portalY: number;
    kindAt: (x: number, y: number) => number;
    exploredAt: (x: number, y: number) => boolean;
    roomAt: (x: number, y: number) => number;
    claimedPortalAt?: (x: number, y: number) => boolean;
  }): void {
    const canvas = this.minimap;
    const ctx = this.minimapCtx;
    if (!canvas || !ctx) return;
    const W = canvas.width;
    const H = canvas.height;
    ctx.fillStyle = '#0a0806';
    ctx.fillRect(0, 0, W, H);
    const gw = opts.width;
    const gh = opts.height;
    const cell = Math.min(W / gw, H / gh);
    const ox = (W - gw * cell) / 2;
    const oy = (H - gh * cell) / 2;
    for (let y = 0; y < gh; y++) {
      for (let x = 0; x < gw; x++) {
        if (!opts.exploredAt(x, y)) continue;
        const kind = opts.kindAt(x, y);
        const room = opts.roomAt(x, y);
        let color = '#3a3028'; // dirt / generic explored
        // TileKind: Rock=0 Earth=1 Gold=2 Dirt=3 Claimed=4 Heart=5 Wall=6 Lava=7 Water=8 BridgeWood=9 BridgeStone=10
        if (kind === 0) color = '#1a1820';
        else if (kind === 1) color = '#4a3828';
        else if (kind === 2) color = '#c0a020';
        else if (kind === 3) color = '#5a4838';
        else if (kind === 4) color = '#7a6848';
        else if (kind === 5) color = '#e04020';
        else if (kind === 6) color = '#686060';
        else if (kind === 7) color = '#e05010';
        else if (kind === 8) color = '#2060a0';
        else if (kind === 9 || kind === 10) color = '#8a7050';
        else if (kind === 11) color = '#40e0c0'; // Gem
        if (kind === 4 && room === 8) color = '#a07840'; // Workshop
        if (kind === 4 && room === 7) color = '#607080'; // Guard
        if (kind === 4 && room === 9) color = '#506070'; // Prison
        if (kind === 4 && room === 10) color = '#a04050'; // Torture
        if (kind === 4 && room === 11) color = '#406850'; // Graveyard
        if (kind === 4 && room === 12) color = '#c0a040'; // Temple
        if (kind === 4 && room === 13) color = '#a04030'; // Combat Pit
        if (kind === 4 && room === 14) color = '#c060a0'; // Wagerden
        if (room === 6) color = kind === 4 ? '#c080ff' : '#4a2080'; // Portal
        ctx.fillStyle = color;
        ctx.fillRect(ox + x * cell, oy + y * cell, Math.max(1, cell), Math.max(1, cell));
      }
    }
    // DK2 map shadow — the buried Portal reads even through fog
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const px = opts.portalX + dx;
        const py = opts.portalY + dy;
        if (px < 0 || py < 0 || px >= gw || py >= gh) continue;
        const claimed = opts.claimedPortalAt?.(px, py);
        ctx.fillStyle = claimed ? '#c080ff' : '#2a1048';
        ctx.fillRect(ox + px * cell, oy + py * cell, Math.max(1, cell), Math.max(1, cell));
      }
    }
    // Heart marker (pulsing ring)
    const hx = ox + (opts.heartX + 0.5) * cell;
    const hy = oy + (opts.heartY + 0.5) * cell;
    ctx.strokeStyle = '#ff6040';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(hx, hy, Math.max(3, cell * 1.1), 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#ff3020';
    ctx.beginPath();
    ctx.arc(hx, hy, Math.max(1.5, cell * 0.45), 0, Math.PI * 2);
    ctx.fill();
    if (opts.portalX > 0 || opts.portalY > 0) {
      const px = ox + (opts.portalX + 0.5) * cell;
      const py = oy + (opts.portalY + 0.5) * cell;
      ctx.strokeStyle = '#a060ff';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(px, py, Math.max(2.5, cell * 1.35), 0, Math.PI * 2);
      ctx.stroke();
    }
  }

  showOverlay(title: string, msg: string, btn = 'Continue', secondaryBtn?: string): void {
    this.overlayTitle.textContent = title;
    this.overlayMsg.textContent = msg;
    document.getElementById('overlay-btn')!.textContent = btn;
    const sec = document.getElementById('overlay-btn-secondary');
    if (sec) {
      if (secondaryBtn) {
        sec.textContent = secondaryBtn;
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    }
    this.overlay.classList.remove('hidden');
  }

  hideOverlay(): void {
    this.overlay.classList.add('hidden');
  }
}

export const MENTOR_LINES = {
  start: "A Portal sleeps in the rock. Dig to it. Claim it. Then the hungry things will come.",
  portalCannotBuild: "Portals cannot be built. Dig to the gateway buried in the earth and claim it.",
  portalCannotSell: "The Portal cannot be sold or destroyed. It is a wound in the world, not a floor tile.",
  portalClaimed: "The Portal is yours. Beds and chickens decide who crosses. No Lair, and the veil stays shut.",
  portalSack: "Back through the veil. Wasteful — but the Portal does not argue.",
  needLair: "They will not come without a bed. Raise a Lair.",
  biggerLair: "Your creatures need a bigger Lair. The Portal waits.",
  resume: "Welcome back, Keeper. Your dungeon endures — dig on.",
  newGame: "A fresh Underkeep. The old one is dust.",
  firstGold: "Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",
  firstRoom: "A room! How civilized. Your minions prefer beds to sleeping in the mud.",
  needGold: "The Treasury is too light. You need %g gold.",
  cannotDig: "That rock laughs at your marks. Earth, gold, and gem seams only.",
  cannotClaim: "Only freshly dug dirt can be claimed.",
  cannotFortify: "Fortify soft earth beside your land — never gold, never rock.",
  cannotRoom: "Rooms sit on claimed flagstones that are still empty.",
  marksFirst: "Your marks come first. Scrabblers drop chores and go to the tagged earth.",
  digTaggedOnly: "Scrabblers chip only what you tag. Mark a path of earth if the block is buried.",
  portal: "The Portal hums. Hungry things beyond the veil hear its song.",
  skitterwing: "A Skitterwing flutters in. Fragile, but it sees what you cannot.",
  rattlekin: "Rattlekin arrive — bony enthusiasm and questionable hygiene.",
  emberling: "An Emberling. Do try not to burn down your own treasury.",
  gravemage: "A Gravemage darkens the Portal. Point them at the Library — research feeds your spells.",
  researchHeal: "Library research unlocks Heal! Mend your bruised nightmares.",
  researchDone: "Research rank %r complete. Spells grow sharper in the dark.",
  levelUp: "Training pays off — a minion levels up!",
  heroes: "Heroes at the gate! How quaint. Show them the meaning of Underkeep.",
  worker: "Another Scrabbler clawed into being. Point it at dirt and watch miracles.",
  heartHurt: "Your Heart bleeds! Protect it, or this story ends poorly.",
  win: "The heroes fall. The dark endures. For now.",
  lose: "The Heart is silent. The Underkeep… underwhelms.",
  slap: "A firm slap. Back to work!",
  slapAlt: "A firm slap. Morale through violence — classic.",
  speed: "Haste, my little nightmares. The clock is cruel.",
  lightning: "Heaven's temper, redirected. Delightful.",
  heal: "Green fire stitches flesh. The Library earns its keep.",
  claim: "Claimed land feeds your mana. Ambition has a wattage.",
  lairBuilt: "A Lair. Beds for the weary and the wounded. Capacity equals tiles.",
  lairUse: "Minions claim their bedrolls. Tired claws seek the Lair.",
  bedClaim: "A minion claims a Lair bed.",
  lairResting: "A minion is resting in the Lair…",
  lairFull: "Every bed is taken. Expand the Lair or expect cranky minions.",
  hatcheryBuilt: "A Hatchery. Nest-food grows while you scheme — hungry mouths will come.",
  hatcheryUse: "Feast! The Hatchery soothes rumbling guts. Work resumes after.",
  feasting: "Feasting at the Hatchery.",
  hatcheryHungry: "The nests are bare. Wait for more Hatchery food… or build more nests.",
  pickUp: "Into the Hand. Drop them where the work is — or slap sense into them.",
  drop: "Back on their feet. Back to the dirt.",
  moodLow: "A minion's mood is crumbling. Beds, food, and space — or they may leave.",
  sluggishDig: "Sluggish claws… mood is dragging the dig.",
  leaveThreat: "A minion threatens to leave the Underkeep…",
  doorBuilt: "A wooden door bars the corridor. Heroes hate hinges.",
  doorOpen: "Door swings open — minions pass; heroes still hesitate if you close it again.",
  doorClosed: "Door sealed. Heroes bounce. Creatures can pry it open.",
  sentryBuilt: "Sentry trap armed. Heroes who tread here learn about arrows.",
  sentryFire: "Twang! The Sentry greets a hero with sharp hospitality.",
  guardBuilt: "Guard Room raised. Fighters will hold the line when idle.",
  rallyPlanted: "Rally flag planted! Call to arms — minions hold this tile.",
  rallyCleared: "Rally flag struck. Back to ordinary scheming.",
  groupSelect: "Squad marked. Shift-click or drag-box to gather more — then click a tile to attack-move.",
  attackMove: "Attack-move! Selected fighters advance and engage.",
  attackHero: "Hunt them down! Fighters surge toward the heroes.",
  fog: "Beyond the torchlight — unexplored dark. Dig and claim to push the fog back.",
  autoFortify: "Mark earth with Fortify if you want the walls reinforced. Scrabblers will not brick them on their own.",
  autoClaim: "Scrabblers claim freshly dug earth on their own. Gold borders mean the land is yours.",
  lava: "Lava! It cooks the careless. Emberlings laugh; Scrabblers refuse the path — build a bridge.",
  bridgeWood: "Wooden planks over the fire. Crude, fragrant, and gloriously flammable.",
  bridgeStone: "Stone bridge — heavier gold, steadier nerves. The lava still sulks beneath.",
  possess: "Possession! Ride a minion's senses. WASD to steer, Esc to return to the Keeper throne.",
  possessArm: "Choose a vessel. Click any living minion to Possess them.",
  possessEnd: "Back in the Keeper's seat. The vessel blinks, confused but intact.",
  payday: "Payday! %g gold leaves the Treasury — wages keep moods from mutiny.",
  paydayFail: "Payday failed — the Treasury is empty! Moods crash. Mint gold or expect desertions.",
  heroesSoon: "Footsteps in the dark… heroes approach. Mark walls, set traps, rally fighters.",
  heroesImminent: "Steel at the gate! Heroes arrive any moment.",
  heroEngage: "Heroes clash with your minions — doors and traps earn their keep.",
  heroDown: "A hero falls. The Underkeep drinks deep.",
  workshopBuilt: "Workshop raised! Scrabblers craft door and Sentry kits — or pay less gold at the bench.",
  craftKit: "Workshop finished a %k kit. Place it free from Build.",
  craftBusy: "Scrabblers hammer in the Workshop. Kits will stack for doors and traps.",
  missionBrief: "Mission: Survive %w hero waves — or amass %g gold in the Treasury. Protect the Heart.",
  waveCleared: "Wave %n cleared! Steel will return — prepare for wave %next of %w.",
  winWaves: "All hero waves broken. The Underkeep endures!",
  winGold: "Treasury overflows! Gold wins the day — heroes be damned.",
  workerSpawn: "Scrabbler forged for %g gold. Next costs %n. Point it at dirt!",
  prisonBuilt: "Prison raised! Knocked-out heroes can be dragged in — or drop them yourself.",
  tortureBuilt: "Torture Chamber humming. Prisoners will convert into loyal Thornwitches.",
  graveyardBuilt: "Graveyard consecrated. Corpses and starved captives rise as Bonewretches.",
  heroKnocked: "Hero knocked out! Drag them to Prison before they fade.",
  prisonerHeld: "Captive secured in the Prison. Starve them… or convert them.",
  converting: "Conversion underway — the hero's will cracks.",
  converted: "A Thornwitch joins your roster. Loyalty tastes like iron.",
  boneRaised: "A Bonewretch claws up from the Graveyard. Fearless bones.",
  starvedBones: "The prisoner starved — bones claim them for the dark.",
  roomSizeBonus: "Room size %n · +%p% efficiency",
  templeBuilt: "Temple raised. Prayer soothes moods — and may gift a talisman.",
  combatPitBuilt: "Combat Pit ready. Veterans past training level 4 fight for glory here.",
  praying: "A minion kneels in the Temple. Mood climbs with the incense.",
  prayerBuff: "Prayer buff granted — claws steadier, spirits higher.",
  talismanGift: "A talisman forms in the Temple haze. Keep them close.",
  combatLevelUp: "%n rises to Combat Pit level %l!",
  fleeLair: "Wounded minions flee toward the Lair!",
  dragWounded: "Scrabblers drag the wounded home to their beds.",
  allyKnocked: "A minion collapses! Scrabblers can haul them to a Lair bed.",
  sellRoom: "Sold for %g gold. The flagstones remember nothing.",
  cannotSell: "Nothing to sell — rooms and doors only, never the Heart.",
  workerRefund: "The Heart reclaims a Scrabbler. %g gold returns to the vault.",
  slapWork: "A sting of purpose. The Scrabbler digs harder.",
  slapWitch: "The Thornwitch smiles. Pain is a language she speaks.",
  slapAnger: "That minion did not enjoy the Hand. Mood sours.",
  sightArm: "Sight of Evil armed — click the dark to peel the fog.",
  sightCast: "The veil lifts. What was hidden now belongs to you.",
  callToArms: "Call to Arms! Fighters muster to the banner.",
  gemSeam: "A gem seam! It never runs dry — haul until the vault groans.",
  treasuryFull: "The vault is full. Build more Treasury, or gold stays in their claws.",
  trainGold: "Training costs gold. Empty coffers mean idle claws.",
  portalFull: "The Portal is crowded. Sack a minion, or find another gateway.",
  casinoBuilt: "Wagerden opens. Idle minions will gamble their moods into shape.",
  gambling: "Dice clatter in the Wagerden. Fortune is a cheap friend.",
  heartDefend: "Scrabblers defend the Heart! Even workers have teeth when home burns.",
};

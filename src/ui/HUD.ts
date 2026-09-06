import { SpellId, ToolMode } from '../game/types';

const ROOM_TOOLS: ToolMode[] = ['treasury', 'lair', 'hatchery', 'training', 'library', 'portal', 'guard', 'door', 'sentry', 'rally'];

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

  onToolChange: ((tool: ToolMode) => void) | null = null;
  onSpell: ((spell: SpellId) => void) | null = null;
  onOverlayContinue: (() => void) | null = null;
  onNewGame: (() => void) | null = null;
  onInspectorClose: (() => void) | null = null;

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
        if (spell === 'speed' || spell === 'lightning') this.closeSheet('spells');
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
    // Desktop sheet toggles share the same sheets
    document.getElementById('btn-build-desktop')?.addEventListener('click', () => this.toggleSheet('build'));
    document.getElementById('btn-spells-desktop')?.addEventListener('click', () => this.toggleSheet('spells'));

    document.querySelectorAll('.sheet-close').forEach((btn) => {
      btn.addEventListener('click', () => {
        const which = (btn as HTMLElement).dataset.close;
        if (which === 'build' || which === 'spells') this.closeSheet(which);
      });
    });
    document.getElementById('mentor-dismiss')?.addEventListener('click', () => this.dismissMentor());
  }

  private sheetButtons(which: 'build' | 'spells'): HTMLElement[] {
    const ids =
      which === 'build'
        ? ['btn-build', 'btn-build-desktop']
        : ['btn-spells', 'btn-spells-desktop'];
    return ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
  }

  private toggleSheet(which: 'build' | 'spells'): void {
    const sheet = which === 'build' ? this.buildSheet : this.spellsSheet;
    const other = which === 'build' ? this.spellsSheet : this.buildSheet;
    const open = sheet.hasAttribute('hidden');
    other.setAttribute('hidden', '');
    for (const b of [...this.sheetButtons('build'), ...this.sheetButtons('spells')]) {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    }
    if (open) {
      sheet.removeAttribute('hidden');
      for (const b of this.sheetButtons(which)) {
        b.classList.add('active');
        b.setAttribute('aria-expanded', 'true');
      }
    } else {
      sheet.setAttribute('hidden', '');
    }
  }

  private closeSheet(which: 'build' | 'spells'): void {
    const sheet = which === 'build' ? this.buildSheet : this.spellsSheet;
    sheet.setAttribute('hidden', '');
    for (const b of this.sheetButtons(which)) {
      b.classList.remove('active');
      b.setAttribute('aria-expanded', 'false');
    }
  }

  private closeSheets(): void {
    this.closeSheet('build');
    this.closeSheet('spells');
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
    this.inspHunger.textContent = `${Math.floor(hunger)}`;
    this.inspTired.textContent = `${Math.floor(tired)}`;
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
  start: "The earth awaits your cruelty, Keeper. Dig. Claim. Thrive.",
  resume: "Welcome back, Keeper. Your dungeon endures — dig on.",
  newGame: "A fresh Underkeep. The old one is dust.",
  firstGold: "Ah, glittering greed. Stockpile it — Scrabblers don't dig for free forever.",
  firstRoom: "A room! How civilized. Your minions prefer beds to sleeping in the mud.",
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
  autoFortify: "Idle Scrabblers reinforce soft earth walls on their own. Rock still laughs at them.",
  autoClaim: "Scrabblers claim freshly dug earth on their own. Gold borders mean the land is yours.",
  heroesSoon: "Footsteps in the dark… heroes approach. Fortify doors, set traps, rally fighters.",
  heroesImminent: "Steel at the gate! Heroes arrive any moment.",
  heroEngage: "Heroes clash with your minions — doors and traps earn their keep.",
  heroDown: "A hero falls. The Underkeep drinks deep.",
};

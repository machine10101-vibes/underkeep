import { SpellId, ToolMode } from '../game/types';

const ROOM_TOOLS: ToolMode[] = ['treasury', 'lair', 'hatchery', 'training', 'library', 'portal'];

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

  onToolChange: ((tool: ToolMode) => void) | null = null;
  onSpell: ((spell: SpellId) => void) | null = null;
  onOverlayContinue: (() => void) | null = null;
  onNewGame: (() => void) | null = null;

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
    this.goldEl.textContent = String(Math.floor(gold));
    this.manaEl.textContent = `${Math.floor(mana)}/${maxMana}`;
    this.manaBar.style.width = `${Math.max(0, Math.min(100, (mana / maxMana) * 100))}%`;
    this.workersEl.textContent = String(workers);
    this.creaturesEl.textContent = String(creatures);
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
  heroes: "Heroes at the gate! How quaint. Show them the meaning of Underkeep.",
  worker: "Another Scrabbler clawed into being. Point it at dirt and watch miracles.",
  heartHurt: "Your Heart bleeds! Protect it, or this story ends poorly.",
  win: "The heroes fall. The dark endures. For now.",
  lose: "The Heart is silent. The Underkeep… underwhelms.",
  slap: "A firm slap. Morale through violence — classic.",
  speed: "Haste, my little nightmares. The clock is cruel.",
  lightning: "Heaven's temper, redirected. Delightful.",
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
};

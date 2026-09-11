import { Game } from './game/Game';
import { clearSave } from './game/Save';

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;

function showBootRecovery(message: string): void {
  const overlay = document.getElementById('overlay');
  const title = document.getElementById('overlay-title');
  const msg = document.getElementById('overlay-msg');
  const btn = document.getElementById('overlay-btn');
  const sec = document.getElementById('overlay-btn-secondary');
  if (!overlay || !title || !msg || !btn) return;
  title.textContent = 'Underkeep';
  msg.textContent = message;
  btn.textContent = 'New Game';
  sec?.classList.add('hidden');
  overlay.classList.remove('hidden');
  const restart = () => {
    clearSave();
    location.reload();
  };
  btn.onclick = restart;
  document.getElementById('btn-new-game')?.addEventListener('click', restart, { once: true });
}

let game: Game | null = null;
try {
  game = new Game(canvas);
} catch (err) {
  console.error('[underkeep] fatal boot error — clearing save', err);
  clearSave();
  document.body.classList.remove('booting');
  showBootRecovery(
    'Something went wrong loading your dungeon. Your save was cleared. Tap New Game to begin again.'
  );
}

// Expose for QA / screenshot harness
(window as unknown as { __underkeep?: Game | null }).__underkeep = game;

let last = performance.now();
let frameErrors = 0;
function frame(now: number): void {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  if (game) {
    try {
      game.update(dt);
      game.render();
      frameErrors = 0;
    } catch (err) {
      frameErrors++;
      console.error('[underkeep] frame error', err);
      // Pass 6.4b: Hand/select/AttackMove logic faults must NOT fake a WebGL context-loss
      // overlay (that reads as a full black screen). Only escalate when the renderer
      // actually lost context or render itself is wedged.
      const g = game as unknown as {
        renderer?: { contextLost?: boolean };
        handleContextLost?: () => void;
      };
      if (g.renderer?.contextLost) {
        g.handleContextLost?.();
        frameErrors = 0;
      } else if (frameErrors >= 8) {
        // Persistent unknown faults — soft recover without claiming context loss
        console.warn('[underkeep] many frame errors — continuing without overlay');
        frameErrors = 0;
      }
    }
  }
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

const params = new URLSearchParams(location.search);
if (
  game &&
  (params.get('shot') === '1' ||
    params.get('shot') === '4' ||
    params.get('shot') === '5b' ||
    params.get('shot') === '5c' ||
    params.get('shot') === '5c-heal' ||
    params.get('shot') === '5c-feast' ||
    params.get('shot') === '6.1' ||
    params.get('shot') === '61' ||
    params.get('shot') === '6.1b' ||
    params.get('shot') === '61b' ||
    params.get('shot') === '6.1b-slap' ||
    params.get('shot') === '6.1b-eff' ||
    params.get('shot') === '6.1c' ||
    params.get('shot') === '61c' ||
    params.get('shot') === '6.1c-pick' ||
    params.get('shot') === '6.1c-slap' ||
    params.get('shot') === '6.2a' ||
    params.get('shot') === '62a' ||
    params.get('shot') === '6.2' ||
    params.get('shot') === '62' ||
    params.get('shot') === '6.3' ||
    params.get('shot') === '63' ||
    params.get('shot') === '6.4' ||
    params.get('shot') === '64' ||
    params.get('shot') === '6.4b' ||
    params.get('shot') === '64b' ||
    params.get('shot') === '6.5' ||
    params.get('shot') === '65' ||
    params.get('shot') === '6.5-fow' ||
    params.get('shot') === '6.5-fortify' ||
    params.get('shot') === '7' ||
    params.get('shot') === '7.0' ||
    params.get('shot') === '8' ||
    params.get('shot') === '8.0' ||
    params.get('shot') === '7.1' ||
    params.get('shot') === '71' ||
    params.get('shot') === '7.1-lava' ||
    params.get('shot') === '71-lava' ||
    params.get('shot') === '7.1-bridge' ||
    params.get('shot') === '71-bridge' ||
    params.get('shot') === '7.1-possess' ||
    params.get('shot') === '71-possess' ||
    params.get('shot') === '7.1-payday' ||
    params.get('shot') === '71-payday' ||
    params.get('shot') === '7.2' ||
    params.get('shot') === '72' ||
    params.get('shot') === '7.2-minimap' ||
    params.get('shot') === '72-minimap' ||
    params.get('shot') === '7.2-mission' ||
    params.get('shot') === '72-mission' ||
    params.get('shot') === '7.2-workshop' ||
    params.get('shot') === '72-workshop' ||
    params.get('shot') === '7.2-worker' ||
    params.get('shot') === '72-worker' ||
    params.get('shot') === '7.3' ||
    params.get('shot') === '73' ||
    params.get('shot') === '7.3-prison' ||
    params.get('shot') === '73-prison' ||
    params.get('shot') === '7.3-torture' ||
    params.get('shot') === '73-torture' ||
    params.get('shot') === '7.3-graveyard' ||
    params.get('shot') === '73-graveyard' ||
    params.get('shot') === '7.3-efficiency' ||
    params.get('shot') === '73-efficiency' ||
    params.get('shot') === '7.4' ||
    params.get('shot') === '74' ||
    params.get('shot') === '7.4-temple' ||
    params.get('shot') === '74-temple' ||
    params.get('shot') === '7.4-combat' ||
    params.get('shot') === '74-combat' ||
    params.get('shot') === '7.4-roster' ||
    params.get('shot') === '74-roster' ||
    params.get('shot') === '7.4-flee' ||
    params.get('shot') === '74-flee' ||
    params.get('shot') === '10' ||
    params.get('shot') === 'pass10' ||
    params.get('shot') === '10.1' ||
    params.get('shot') === '101' ||
    params.get('shot') === '10.8' ||
    params.get('shot') === '108' ||
    params.get('shot') === '10.8-buried' ||
    params.get('shot') === '10.8-claimed' ||
    params.get('shot') === '10.9' ||
    params.get('shot') === '109' ||
    params.get('shot') === '10.10' ||
    params.get('shot') === '1010' ||
    params.get('shot') === '10.11' ||
    params.get('shot') === '1011' ||
    params.get('shot') === '10.12' ||
    params.get('shot') === '1012' ||
    params.get('shot') === '10.13' ||
    params.get('shot') === '1013' ||
    params.get('shot') === '10.14' ||
    params.get('shot') === '1014' ||
    params.get('shot') === '10.15' ||
    params.get('shot') === '1015')
) {
  // Auto-arrange evidence shots
  setTimeout(() => {
    const g = game as unknown as {
      hud: { hideOverlay: () => void };
      preparePass4Shot?: () => void;
      preparePass3Shot?: () => void;
      preparePass5bShot?: () => void;
      preparePass5cShot?: (focus?: 'both' | 'heal' | 'feast') => void;
      preparePass61Shot?: () => void;
      preparePass61bShot?: (focus?: 'both' | 'slap' | 'efficiency') => void;
      preparePass61cShot?: (focus?: 'pick' | 'slap' | 'both') => void;
      preparePass62aStabShot?: () => void;
      preparePass62Shot?: () => void;
      preparePass63Shot?: () => void;
      preparePass64Shot?: () => void;
      preparePass64bShot?: () => void;
      preparePass65Shot?: (focus?: 'fow' | 'fortify' | 'both') => void;
      preparePass7Shot?: () => void;
      preparePass8Shot?: () => void;
      preparePass71Shot?: (focus?: 'lava' | 'bridge' | 'possess' | 'payday' | 'both') => void;
      preparePass72Shot?: (focus?: 'minimap' | 'mission' | 'workshop' | 'worker' | 'both') => void;
      preparePass73Shot?: (focus?: 'prison' | 'torture' | 'graveyard' | 'efficiency' | 'both') => void;
      preparePass74Shot?: (focus?: 'temple' | 'combatPit' | 'roster' | 'flee' | 'both') => void;
      preparePass10Shot?: () => void;
      preparePass101Shot?: () => void;
      preparePass108Shot?: (focus?: 'buried' | 'claimed' | 'both') => void;
      preparePass109Shot?: () => void;
      preparePass1011Shot?: () => void;
      preparePass1012Shot?: () => void;
      preparePass1013Shot?: () => void;
      preparePass1014Shot?: () => void;
      preparePass1015Shot?: () => void;
    };
    g.hud.hideOverlay();
    const shot = params.get('shot');
    if (shot === '10.15' || shot === '1015') g.preparePass1015Shot?.();
    else if (shot === '10.14' || shot === '1014') g.preparePass1014Shot?.();
    else if (shot === '10.13' || shot === '1013') g.preparePass1013Shot?.();
    else if (shot === '10.12' || shot === '1012') g.preparePass1012Shot?.();
    else if (shot === '10.11' || shot === '1011') g.preparePass1011Shot?.();
    else if (shot === '10.10' || shot === '1010' || shot === '10.9' || shot === '109') g.preparePass109Shot?.();
    else if (shot === '10.8-buried') g.preparePass108Shot?.('buried');
    else if (shot === '10.8-claimed' || shot === '10.8' || shot === '108') g.preparePass108Shot?.('claimed');
    else if (shot === '10.1' || shot === '101') g.preparePass101Shot?.();
    else if (shot === '10' || shot === 'pass10') g.preparePass10Shot?.();
    else if (shot === '8' || shot === '8.0') g.preparePass8Shot?.();
    else if (shot === '7' || shot === '7.0') g.preparePass7Shot?.();
    else if (shot === '7.4-temple' || shot === '74-temple') g.preparePass74Shot?.('temple');
    else if (shot === '7.4-combat' || shot === '74-combat') g.preparePass74Shot?.('combatPit');
    else if (shot === '7.4-roster' || shot === '74-roster') g.preparePass74Shot?.('roster');
    else if (shot === '7.4-flee' || shot === '74-flee') g.preparePass74Shot?.('flee');
    else if (shot === '7.4' || shot === '74') g.preparePass74Shot?.('both');
    else if (shot === '7.3-prison' || shot === '73-prison') g.preparePass73Shot?.('prison');
    else if (shot === '7.3-torture' || shot === '73-torture') g.preparePass73Shot?.('torture');
    else if (shot === '7.3-graveyard' || shot === '73-graveyard') g.preparePass73Shot?.('graveyard');
    else if (shot === '7.3-efficiency' || shot === '73-efficiency') g.preparePass73Shot?.('efficiency');
    else if (shot === '7.3' || shot === '73') g.preparePass73Shot?.('both');
    else if (shot === '7.2-minimap' || shot === '72-minimap') g.preparePass72Shot?.('minimap');
    else if (shot === '7.2-mission' || shot === '72-mission') g.preparePass72Shot?.('mission');
    else if (shot === '7.2-workshop' || shot === '72-workshop') g.preparePass72Shot?.('workshop');
    else if (shot === '7.2-worker' || shot === '72-worker') g.preparePass72Shot?.('worker');
    else if (shot === '7.2' || shot === '72') g.preparePass72Shot?.('both');
    else if (shot === '7.1-lava' || shot === '71-lava') g.preparePass71Shot?.('lava');
    else if (shot === '7.1-bridge' || shot === '71-bridge') g.preparePass71Shot?.('bridge');
    else if (shot === '7.1-possess' || shot === '71-possess') g.preparePass71Shot?.('possess');
    else if (shot === '7.1-payday' || shot === '71-payday') g.preparePass71Shot?.('payday');
    else if (shot === '7.1' || shot === '71') g.preparePass71Shot?.('both');
    else if (shot === '6.5-fortify') g.preparePass65Shot?.('fortify');
    else if (shot === '6.5-fow') g.preparePass65Shot?.('fow');
    else if (shot === '6.5' || shot === '65') g.preparePass65Shot?.('both');
    else if (shot === '6.4b' || shot === '64b') g.preparePass64bShot?.();
    else if (shot === '6.4' || shot === '64') g.preparePass64Shot?.();
    else if (shot === '6.3' || shot === '63') g.preparePass63Shot?.();
    else if (shot === '6.2a' || shot === '62a') g.preparePass62aStabShot?.();
    else if (shot === '6.2' || shot === '62') g.preparePass62Shot?.();
    else if (shot === '6.1c-slap') g.preparePass61cShot?.('slap');
    else if (shot === '6.1c-pick') g.preparePass61cShot?.('pick');
    else if (shot === '6.1c' || shot === '61c') g.preparePass61cShot?.('both');
    else if (shot === '6.1b-slap') g.preparePass61bShot?.('slap');
    else if (shot === '6.1b-eff') g.preparePass61bShot?.('efficiency');
    else if (shot === '6.1b' || shot === '61b') g.preparePass61bShot?.('both');
    else if (shot === '6.1' || shot === '61') g.preparePass61Shot?.();
    else if (shot === '5c-heal') g.preparePass5cShot?.('heal');
    else if (shot === '5c-feast') g.preparePass5cShot?.('feast');
    else if (shot === '5c' || shot === '5b') {
      if (g.preparePass5cShot) g.preparePass5cShot('both');
      else g.preparePass5bShot?.();
    }
    else if (shot === '4' || !g.preparePass3Shot) g.preparePass4Shot?.();
    else if (params.get('pass') === '3') g.preparePass3Shot?.();
    else g.preparePass4Shot?.();
  }, 400);
}

if (game && (params.get('studio') === '1' || params.get('shot') === 'studio')) {
  setTimeout(() => {
    const g = game as unknown as { hud: { hideOverlay: () => void }; openStudio?: () => void };
    g.hud.hideOverlay();
    g.openStudio?.();
  }, 500);
}

if (game && params.get('smoke') === '1') {
  setTimeout(() => {
    const g = game as unknown as { hud: { hideOverlay: () => void }; runGuideSmoke?: (s?: number) => unknown };
    g.hud.hideOverlay();
    const result = g.runGuideSmoke?.(16);
    let el = document.getElementById('smoke-result');
    if (!el) {
      el = document.createElement('pre');
      el.id = 'smoke-result';
      el.setAttribute('data-smoke', '1');
      document.body.appendChild(el);
    }
    el.textContent = JSON.stringify(result ?? { error: 'no-smoke' });
    const r = result as {
      mined?: boolean;
      extraDigMarks?: number;
      stuckHaul?: number;
      resumedDig?: boolean;
    } | null;
    const ok = !!r?.mined && (r.extraDigMarks ?? 1) === 0 && (r.stuckHaul ?? 1) === 0 && r.resumedDig === true;
    document.title = `smoke:${ok ? 'ok' : 'fail'}`;
  }, 600);
}

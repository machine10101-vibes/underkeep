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
      // Recover fast — never leave a stuck black/white canvas on Hand/inspector exceptions
      if (frameErrors >= 2) {
        const g = game as unknown as { handleContextLost?: () => void };
        g.handleContextLost?.();
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
    params.get('shot') === '63')
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
    };
    g.hud.hideOverlay();
    const shot = params.get('shot');
    if (shot === '6.3' || shot === '63') g.preparePass63Shot?.();
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

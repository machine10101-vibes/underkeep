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
      // After repeated uncaught update/render exceptions, offer recovery (never stuck white)
      if (frameErrors >= 5) {
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
if (game && (params.get('shot') === '1' || params.get('shot') === '4')) {
  // Auto-arrange Pass-4 evidence: rooms + rock/earth/gold + pickaxe
  setTimeout(() => {
    const g = game as unknown as {
      hud: { hideOverlay: () => void };
      preparePass4Shot?: () => void;
      preparePass3Shot?: () => void;
    };
    g.hud.hideOverlay();
    if (params.get('shot') === '4' || !g.preparePass3Shot) g.preparePass4Shot?.();
    else if (params.get('pass') === '3') g.preparePass3Shot?.();
    else g.preparePass4Shot?.();
  }, 400);
}

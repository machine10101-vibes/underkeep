import { Game } from './game/Game';

const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
const game = new Game(canvas);

// Expose for QA / screenshot harness
(window as unknown as { __underkeep?: Game }).__underkeep = game;

let last = performance.now();
function frame(now: number): void {
  const dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  game.update(dt);
  game.render();
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

const params = new URLSearchParams(location.search);
if (params.get('shot') === '1') {
  // Auto-arrange a readable Pass-3 evidence scene after first frames
  setTimeout(() => {
    const g = game as unknown as {
      hud: { hideOverlay: () => void };
      preparePass3Shot?: () => void;
    };
    g.hud.hideOverlay();
    g.preparePass3Shot?.();
  }, 400);
}

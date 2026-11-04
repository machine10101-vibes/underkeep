const MUTE_KEY = 'underkeep-mute';

export type SoundId =
  | 'dig'
  | 'gold'
  | 'slap'
  | 'hit'
  | 'hitHeavy'
  | 'lightning'
  | 'spell'
  | 'cavein'
  | 'horn'
  | 'heart'
  | 'summon'
  | 'trap'
  | 'win'
  | 'lose';

/**
 * Procedural keeper SFX — no asset files. Unlocks on the first gesture
 * (browser autoplay policy) and stays quiet when muted.
 */
export class KeeperAudio {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private muted: boolean;
  private last = new Map<string, number>();

  constructor() {
    try {
      this.muted = localStorage.getItem(MUTE_KEY) === '1';
    } catch {
      this.muted = false;
    }
  }

  isMuted(): boolean {
    return this.muted;
  }

  toggleMute(): boolean {
    this.muted = !this.muted;
    try {
      localStorage.setItem(MUTE_KEY, this.muted ? '1' : '0');
    } catch {
      /* private mode */
    }
    if (this.master) this.master.gain.value = this.muted ? 0 : 0.32;
    return this.muted;
  }

  unlock(): void {
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AC) return;
      if (!this.ctx) {
        this.ctx = new AC();
        this.master = this.ctx.createGain();
        this.master.gain.value = this.muted ? 0 : 0.32;
        this.master.connect(this.ctx.destination);
        const len = Math.floor(this.ctx.sampleRate * 0.4);
        const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
        const data = buf.getChannelData(0);
        for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1;
        this.noise = buf;
      }
      if (this.ctx.state === 'suspended') void this.ctx.resume();
    } catch {
      /* missing API */
    }
  }

  play(id: SoundId): void {
    if (this.muted) return;
    this.unlock();
    const ctx = this.ctx;
    if (!ctx || !this.master || ctx.state !== 'running') return;
    const now = ctx.currentTime;
    const gap =
      id === 'dig' ? 0.07 : id === 'hit' ? 0.04 : id === 'gold' ? 0.18 : id === 'heart' ? 0.45 : id === 'trap' ? 0.1 : 0;
    const prev = this.last.get(id) ?? -999;
    if (gap && now - prev < gap) return;
    this.last.set(id, now);
    try {
      this.voice(id, now);
    } catch {
      /* a bad ramp must never break the sim */
    }
  }

  private env(gain: GainNode, t: number, dur: number, peak: number): void {
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, peak), t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.012 + dur);
  }

  private tone(freq: number, t: number, dur: number, type: OscillatorType, peak: number, slideTo?: number): void {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(Math.max(40, freq), t);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(40, slideTo), t + dur);
    this.env(g, t, dur, peak);
    osc.connect(g);
    g.connect(master);
    osc.start(t);
    osc.stop(t + dur + 0.06);
  }

  private burst(t: number, dur: number, peak: number, filterFreq: number): void {
    const ctx = this.ctx;
    const master = this.master;
    if (!ctx || !master || !this.noise) return;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = filterFreq;
    filter.Q.value = 0.7;
    const g = ctx.createGain();
    this.env(g, t, dur, peak);
    src.connect(filter);
    filter.connect(g);
    g.connect(master);
    src.start(t);
    src.stop(t + dur + 0.03);
  }

  private voice(id: SoundId, t: number): void {
    switch (id) {
      case 'dig':
        this.burst(t, 0.06, 0.2, 900);
        this.tone(140, t, 0.05, 'square', 0.05, 70);
        break;
      case 'gold':
        this.tone(880, t, 0.08, 'triangle', 0.11);
        this.tone(1320, t + 0.06, 0.1, 'triangle', 0.07);
        break;
      case 'slap':
        this.burst(t, 0.05, 0.32, 1400);
        this.tone(220, t, 0.07, 'square', 0.07, 90);
        break;
      case 'hit':
        this.tone(320, t, 0.06, 'square', 0.06, 140);
        break;
      case 'hitHeavy':
        this.burst(t, 0.08, 0.26, 480);
        this.tone(180, t, 0.1, 'sawtooth', 0.07, 60);
        break;
      case 'lightning':
        this.burst(t, 0.18, 0.38, 2200);
        this.tone(900, t, 0.16, 'sawtooth', 0.07, 120);
        break;
      case 'spell':
        this.tone(520, t, 0.1, 'sine', 0.07);
        this.tone(780, t + 0.05, 0.12, 'sine', 0.05);
        break;
      case 'cavein':
        this.burst(t, 0.28, 0.48, 240);
        this.tone(90, t, 0.35, 'sine', 0.18, 40);
        break;
      case 'horn':
        this.tone(196, t, 0.32, 'sawtooth', 0.07);
        this.tone(247, t + 0.16, 0.36, 'sawtooth', 0.07);
        this.tone(165, t + 0.34, 0.42, 'triangle', 0.06);
        break;
      case 'heart':
        this.tone(70, t, 0.2, 'sine', 0.15, 46);
        break;
      case 'summon':
        this.tone(110, t, 0.4, 'sawtooth', 0.09, 55);
        this.tone(165, t + 0.08, 0.32, 'triangle', 0.07);
        this.tone(220, t + 0.16, 0.28, 'sine', 0.06);
        break;
      case 'trap':
        this.tone(1400, t, 0.05, 'square', 0.06, 400);
        this.burst(t, 0.04, 0.18, 1800);
        break;
      case 'win':
        for (const [i, f] of [523, 659, 784, 1046].entries()) {
          this.tone(f, t + i * 0.1, 0.16, 'triangle', 0.08);
        }
        break;
      case 'lose':
        this.tone(392, t, 0.25, 'sine', 0.09, 196);
        this.tone(247, t + 0.2, 0.4, 'triangle', 0.07, 90);
        break;
      default:
        break;
    }
  }
}

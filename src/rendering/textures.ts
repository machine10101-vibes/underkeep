import * as THREE from 'three';

/** Small procedural canvas maps for DK2-ish dungeon surfaces. Cached + shared. */

const texCache = new Map<string, THREE.CanvasTexture>();

function hash2(x: number, y: number, seed: number): number {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return n - Math.floor(n);
}

function noise2(x: number, y: number, seed: number): number {
  const x0 = Math.floor(x);
  const y0 = Math.floor(y);
  const fx = x - x0;
  const fy = y - y0;
  const u = fx * fx * (3 - 2 * fx);
  const v = fy * fy * (3 - 2 * fy);
  const a = hash2(x0, y0, seed);
  const b = hash2(x0 + 1, y0, seed);
  const c = hash2(x0, y0 + 1, seed);
  const d = hash2(x0 + 1, y0 + 1, seed);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}

function fbm(x: number, y: number, seed: number, octaves = 4): number {
  let amp = 0.5;
  let freq = 1;
  let sum = 0;
  let norm = 0;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise2(x * freq, y * freq, seed + i * 19);
    norm += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return sum / norm;
}

function makeCanvas(size: number): { canvas: HTMLCanvasElement; ctx: CanvasRenderingContext2D; data: ImageData } {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d', { willReadFrequently: true })!;
  const data = ctx.createImageData(size, size);
  return { canvas, ctx, data };
}

function toTexture(canvas: HTMLCanvasElement, repeat = 2): THREE.CanvasTexture {
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(repeat, repeat);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.LinearFilter;
  tex.minFilter = THREE.LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

function setPixel(
  data: ImageData,
  x: number,
  y: number,
  r: number,
  g: number,
  b: number,
  a = 255
): void {
  const i = (y * data.width + x) * 4;
  data.data[i] = r;
  data.data[i + 1] = g;
  data.data[i + 2] = b;
  data.data[i + 3] = a;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function mixRgb(
  c0: [number, number, number],
  c1: [number, number, number],
  t: number
): [number, number, number] {
  return [lerp(c0[0], c1[0], t), lerp(c0[1], c1[1], t), lerp(c0[2], c1[2], t)];
}

type Rgb = [number, number, number];

function paintNoise(
  size: number,
  opts: {
    seed: number;
    base: Rgb;
    dark: Rgb;
    light: Rgb;
    scale?: number;
    contrast?: number;
    speck?: number;
    speckColor?: Rgb;
    veins?: { color: Rgb; scale: number; thresh: number; seed: number };
    bricks?: { bw: number; bh: number; mortar: Rgb; mortarW: number };
    cracks?: boolean;
    borderDark?: number;
  }
): THREE.CanvasTexture {
  const key = JSON.stringify(opts) + `|${size}`;
  const hit = texCache.get(key);
  if (hit) return hit;

  const { canvas, ctx, data } = makeCanvas(size);
  const scale = opts.scale ?? 4;
  const contrast = opts.contrast ?? 1;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = (x / size) * scale;
      const ny = (y / size) * scale;
      let n = fbm(nx, ny, opts.seed);
      n = (n - 0.5) * contrast + 0.5;
      n = Math.max(0, Math.min(1, n));

      let rgb = mixRgb(opts.dark, opts.base, n);
      if (n > 0.62) {
        rgb = mixRgb(rgb, opts.light, (n - 0.62) / 0.38);
      }

      if (opts.bricks) {
        const { bw, bh, mortar, mortarW } = opts.bricks;
        const row = Math.floor(y / bh);
        const ox = row % 2 === 0 ? 0 : bw * 0.5;
        const lx = (x + ox) % bw;
        const ly = y % bh;
        if (lx < mortarW || ly < mortarW) {
          rgb = mortar;
        } else {
          // per-brick tint
          const bx = Math.floor((x + ox) / bw);
          const by = Math.floor(y / bh);
          const tint = hash2(bx, by, opts.seed + 9) * 0.18 - 0.09;
          rgb = [
            Math.max(0, Math.min(255, rgb[0] * (1 + tint))),
            Math.max(0, Math.min(255, rgb[1] * (1 + tint))),
            Math.max(0, Math.min(255, rgb[2] * (1 + tint))),
          ];
        }
      }

      if (opts.veins) {
        const v = fbm(nx * opts.veins.scale, ny * opts.veins.scale, opts.veins.seed);
        if (v > opts.veins.thresh) {
          const t = (v - opts.veins.thresh) / (1 - opts.veins.thresh);
          rgb = mixRgb(rgb, opts.veins.color, Math.min(1, t * 1.4));
        }
      }

      if (opts.speck && hash2(x, y, opts.seed + 3) < opts.speck) {
        const sc = opts.speckColor ?? opts.light;
        rgb = mixRgb(rgb, sc, 0.55);
      }

      if (opts.cracks) {
        const c = Math.abs(fbm(nx * 2.5, ny * 0.4, opts.seed + 40) - 0.5);
        if (c < 0.035) {
          rgb = mixRgb(rgb, opts.dark, 0.7);
        }
      }

      if (opts.borderDark) {
        const edge = Math.min(x, y, size - 1 - x, size - 1 - y) / size;
        if (edge < opts.borderDark) {
          const t = 1 - edge / opts.borderDark;
          rgb = mixRgb(rgb, opts.dark, t * 0.55);
        }
      }

      setPixel(data, x, y, rgb[0] | 0, rgb[1] | 0, rgb[2] | 0);
    }
  }
  ctx.putImageData(data, 0, 0);
  const tex = toTexture(canvas, 1);
  texCache.set(key, tex);
  return tex;
}

/** Grayscale bump from luminance of an albedo (or dedicated). */
function bumpFromAlbedo(albedo: THREE.CanvasTexture, strength = 1): THREE.CanvasTexture {
  const key = `bump:${(albedo.image as HTMLCanvasElement).width}:${strength}:${albedo.uuid}`;
  const hit = texCache.get(key);
  if (hit) return hit;

  const src = albedo.image as HTMLCanvasElement;
  const size = src.width;
  const { canvas, ctx, data } = makeCanvas(size);
  const sctx = src.getContext('2d', { willReadFrequently: true })!;
  const srcData = sctx.getImageData(0, 0, size, size);

  for (let i = 0; i < size * size; i++) {
    const r = srcData.data[i * 4];
    const g = srcData.data[i * 4 + 1];
    const b = srcData.data[i * 4 + 2];
    let lum = (0.299 * r + 0.587 * g + 0.114 * b) * strength;
    lum = Math.max(0, Math.min(255, lum));
    const o = i * 4;
    data.data[o] = lum;
    data.data[o + 1] = lum;
    data.data[o + 2] = lum;
    data.data[o + 3] = 255;
  }
  ctx.putImageData(data, 0, 0);
  const tex = toTexture(canvas, albedo.repeat.x);
  tex.colorSpace = THREE.NoColorSpace;
  texCache.set(key, tex);
  return tex;
}

export function earthTex(): THREE.CanvasTexture {
  // Warm orange-brown dirt cubes — DK2-readable vs cool gray rock
  return paintNoise(64, {
    seed: 11,
    base: [186, 118, 48],
    dark: [98, 48, 18],
    light: [228, 162, 82],
    scale: 5.8,
    contrast: 1.55,
    speck: 0.06,
    speckColor: [150, 86, 32],
    cracks: true,
    borderDark: 0.07,
  });
}

export function rockTex(): THREE.CanvasTexture {
  // Cool dense gray — impassable / taller blocks (must read gray, not black)
  return paintNoise(64, {
    seed: 22,
    base: [118, 124, 140],
    dark: [58, 62, 78],
    light: [175, 182, 198],
    scale: 3.6,
    contrast: 1.25,
    cracks: true,
    speck: 0.05,
    speckColor: [210, 215, 230],
  });
}

export function dirtTex(): THREE.CanvasTexture {
  // Unclaimed packed earth — darker, no gold, reads as "not yours yet"
  return paintNoise(64, {
    seed: 33,
    base: [78, 50, 30],
    dark: [36, 22, 12],
    light: [112, 76, 46],
    scale: 6.4,
    contrast: 1.3,
    speck: 0.08,
    speckColor: [62, 42, 24],
    cracks: true,
  });
}

export function claimedStoneTex(): THREE.CanvasTexture {
  // Cool gray flagstones — gold trim is applied in mesh, not baked here
  return paintNoise(64, {
    seed: 44,
    base: [152, 146, 138],
    dark: [88, 82, 76],
    light: [198, 192, 182],
    scale: 2.6,
    contrast: 1.3,
    bricks: { bw: 18, bh: 12, mortar: [42, 36, 32], mortarW: 2 },
  });
}

export function fortifiedTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 55,
    base: [128, 122, 112],
    dark: [70, 66, 60],
    light: [168, 162, 150],
    scale: 3,
    contrast: 1.1,
    bricks: { bw: 14, bh: 12, mortar: [42, 40, 38], mortarW: 2 },
    borderDark: 0.08,
  });
}

export function gemVeinTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 71,
    base: [28, 140, 128],
    dark: [8, 48, 52],
    light: [140, 255, 230],
    scale: 3.4,
    contrast: 1.55,
    veins: { color: [180, 255, 240], scale: 1.05, thresh: 0.36, seed: 111 },
    speck: 0.24,
    speckColor: [220, 255, 250],
  });
}

export function goldVeinTex(): THREE.CanvasTexture {
  // Dirt wall with gold chunks — not a solid gold cube
  const key = 'gold-in-dirt-v4|64';
  const hit = texCache.get(key);
  if (hit) return hit;
  const earth = earthTex();
  const src = earth.image as HTMLCanvasElement;
  const size = src.width;
  const { canvas, ctx, data } = makeCanvas(size);
  const sctx = src.getContext('2d', { willReadFrequently: true })!;
  const srcData = sctx.getImageData(0, 0, size, size);
  data.data.set(srcData.data);
  const gold: [number, number, number] = [242, 186, 58];
  const deep: [number, number, number] = [168, 96, 18];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const nx = (x / size) * 6.2;
      const ny = (y / size) * 6.2;
      const blob = fbm(nx, ny, 77);
      const vein = fbm(nx * 2.8, ny * 0.55, 91);
      const i = (y * size + x) * 4;
      let t = 0;
      if (blob > 0.78) t = Math.min(1, (blob - 0.78) / 0.16);
      else if (vein > 0.74 && Math.abs(fbm(nx * 0.4, ny * 3.2, 104) - 0.5) < 0.08) {
        t = 0.55 + (vein - 0.74) * 1.4;
      }
      if (t > 0) {
        const gcol = mixRgb(deep, gold, Math.min(1, t));
        data.data[i] = gcol[0] | 0;
        data.data[i + 1] = gcol[1] | 0;
        data.data[i + 2] = gcol[2] | 0;
      }
    }
  }
  ctx.putImageData(data, 0, 0);
  const tex = toTexture(canvas, 1);
  texCache.set(key, tex);
  return tex;
}

export function heartFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 77,
    base: [90, 40, 48],
    dark: [40, 16, 22],
    light: [140, 60, 70],
    scale: 3.8,
    contrast: 1.2,
    veins: { color: [180, 40, 50], scale: 1.2, thresh: 0.62, seed: 12 },
  });
}

export function treasuryFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 81,
    base: [100, 78, 42],
    dark: [52, 38, 20],
    light: [180, 140, 60],
    scale: 3.2,
    contrast: 1.15,
    bricks: { bw: 16, bh: 16, mortar: [90, 70, 30], mortarW: 1 },
    veins: { color: [220, 180, 60], scale: 0.9, thresh: 0.7, seed: 3 },
  });
}

export function lairFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 82,
    base: [92, 62, 88],
    dark: [48, 30, 50],
    light: [130, 90, 120],
    scale: 5,
    contrast: 1.15,
    speck: 0.08,
    speckColor: [160, 120, 140],
  });
}

export function hatcheryFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 83,
    base: [100, 110, 50],
    dark: [50, 58, 24],
    light: [150, 160, 80],
    scale: 5.5,
    contrast: 1.2,
    speck: 0.1,
    speckColor: [180, 170, 70],
  });
}

export function trainingFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 84,
    base: [110, 70, 60],
    dark: [55, 35, 30],
    light: [150, 100, 85],
    scale: 4,
    contrast: 1.25,
    cracks: true,
    bricks: { bw: 20, bh: 12, mortar: [40, 28, 24], mortarW: 1 },
  });
}

export function libraryFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 85,
    base: [58, 68, 110],
    dark: [28, 34, 60],
    light: [90, 105, 160],
    scale: 3.5,
    contrast: 1.15,
    veins: { color: [140, 160, 220], scale: 2.2, thresh: 0.68, seed: 7 },
  });
}

export function portalFloorTex(): THREE.CanvasTexture {
  return paintNoise(64, {
    seed: 86,
    base: [70, 40, 100],
    dark: [30, 16, 48],
    light: [130, 70, 180],
    scale: 4.5,
    contrast: 1.3,
    veins: { color: [180, 100, 255], scale: 1.5, thresh: 0.55, seed: 21 },
  });
}

export function bumpFor(tex: THREE.CanvasTexture, strength = 1): THREE.CanvasTexture {
  return bumpFromAlbedo(tex, strength);
}

/** Soft radial glow / decal maps */
export function makeDecalTexture(
  kind: 'goldRing' | 'bedding' | 'warmSpot' | 'worn' | 'runes' | 'swirl',
  color: Rgb
): THREE.CanvasTexture {
  const key = `decal:${kind}:${color.join(',')}`;
  const hit = texCache.get(key);
  if (hit) return hit;

  const size = 64;
  const { canvas, ctx, data } = makeCanvas(size);
  const cx = size / 2;
  const cy = size / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = (x + 0.5 - cx) / cx;
      const dy = (y + 0.5 - cy) / cy;
      const r = Math.hypot(dx, dy);
      let a = 0;
      let rgb: Rgb = color;

      if (kind === 'goldRing') {
        const ring = Math.abs(r - 0.72);
        a = ring < 0.12 ? (1 - ring / 0.12) * 220 : 0;
        if (r < 0.35) a = Math.max(a, (1 - r / 0.35) * 90);
        // corner gold trim ticks
        if ((Math.abs(dx) > 0.78 && Math.abs(dy) < 0.2) || (Math.abs(dy) > 0.78 && Math.abs(dx) < 0.2)) {
          a = Math.max(a, 180);
        }
      } else if (kind === 'bedding') {
        const stripe = Math.sin((x + y) * 0.35) * 0.5 + 0.5;
        a = r < 0.85 ? (1 - r / 0.85) * (120 + stripe * 80) : 0;
      } else if (kind === 'warmSpot') {
        a = r < 0.9 ? Math.pow(1 - r / 0.9, 1.2) * 180 : 0;
        const speck = hash2(x, y, 5);
        if (speck > 0.92 && r < 0.7) {
          a = 220;
          rgb = [220, 200, 80];
        }
      } else if (kind === 'worn') {
        const n = fbm(x * 0.12, y * 0.12, 9);
        a = r < 0.9 && n > 0.45 ? (n - 0.45) * 280 : 0;
      } else if (kind === 'runes') {
        a = 0;
        if (r > 0.55 && r < 0.78) a = 160;
        // rune ticks around ring
        const ang = Math.atan2(dy, dx);
        const spoke = Math.abs(((ang / (Math.PI * 2)) * 8) % 1 - 0.5);
        if (r > 0.35 && r < 0.85 && spoke < 0.06) a = 210;
        if (r < 0.22) a = 140;
      } else if (kind === 'swirl') {
        const ang = Math.atan2(dy, dx);
        const swirl = Math.sin(ang * 3 + r * 10);
        a = r < 0.92 ? Math.max(0, swirl) * (1 - r) * 255 : 0;
        if (r < 0.2) a = Math.max(a, 200);
      }

      setPixel(data, x, y, rgb[0], rgb[1], rgb[2], Math.max(0, Math.min(255, a | 0)));
    }
  }
  ctx.putImageData(data, 0, 0);
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  texCache.set(key, tex);
  return tex;
}

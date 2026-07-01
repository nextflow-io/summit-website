import {
  AVATAR_CANVAS,
  CARD_BRANDING,
  EXPORT,
  resolveColors,
  resolveLayers,
  type ColorSelection,
  type RecolorRule,
  type Selection,
} from './manifest';

const imageCache = new Map<string, Promise<HTMLImageElement>>();

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const h = hex.replace('#', '');
  const n = parseInt(
    h.length === 3
      ? h.split('').map((c) => c + c).join('')
      : h,
    16
  );
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

export function loadImage(src: string): Promise<HTMLImageElement> {
  const cached = imageCache.get(src);
  if (cached) return cached;

  const promise = new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    // Same-origin assets, but set anyway so the export canvas is never tainted.
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Failed to load ${src}`));
    img.src = src;
  });

  imageCache.set(src, promise);
  return promise;
}

/** Fit `src` inside a box preserving aspect ratio (object-fit: contain). */
function contain(
  srcW: number,
  srcH: number,
  boxW: number,
  boxH: number
): { w: number; h: number } {
  const scale = Math.min(boxW / srcW, boxH / srcH);
  return { w: srcW * scale, h: srcH * scale };
}

/**
 * Draw one layer to an offscreen canvas, applying its recolor rules against the
 * resolved palette. Flat-color art means an exact pixel swap ("match") or a full
 * tint of every opaque pixel (no "match") — both preserve alpha.
 */
function recolorLayer(
  img: HTMLImageElement,
  rules: RecolorRule[],
  colors: Record<string, string>
): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = AVATAR_CANVAS.width;
  canvas.height = AVATAR_CANVAS.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No 2D context');
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  const parsed = rules
    .filter((r) => colors[r.channel])
    .map((r) => ({ match: r.match, to: hexToRgb(colors[r.channel]) }));
  if (parsed.length === 0) return canvas;

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imageData.data;
  for (let i = 0; i < d.length; i += 4) {
    if (d[i + 3] === 0) continue;
    for (const r of parsed) {
      if (r.match) {
        if (d[i] === r.match[0] && d[i + 1] === r.match[1] && d[i + 2] === r.match[2]) {
          d[i] = r.to.r;
          d[i + 1] = r.to.g;
          d[i + 2] = r.to.b;
        }
      } else {
        d[i] = r.to.r;
        d[i + 1] = r.to.g;
        d[i + 2] = r.to.b;
      }
    }
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

/** Draw the stacked (recolored) avatar layers onto a canvas (native asset size). */
export async function renderAvatar(
  selection: Selection,
  colors: ColorSelection,
  target?: HTMLCanvasElement
): Promise<HTMLCanvasElement> {
  const canvas = target ?? document.createElement('canvas');
  canvas.width = AVATAR_CANVAS.width;
  canvas.height = AVATAR_CANVAS.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No 2D context');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  const resolvedColors = resolveColors(colors);
  const layers = resolveLayers(selection);
  const images = await Promise.all(layers.map((l) => loadImage(l.src)));
  layers.forEach((layer, i) => {
    const source =
      layer.recolor && layer.recolor.length > 0
        ? recolorLayer(images[i], layer.recolor, resolvedColors)
        : images[i];
    ctx.drawImage(source, 0, 0, canvas.width, canvas.height);
  });
  return canvas;
}

/**
 * Compose the final horizontal share card:
 *   left ~2/3  → static branding panel
 *   right ~1/3 → the built avatar (bottom-anchored)
 */
export async function composeCard(
  selection: Selection,
  colors: ColorSelection
): Promise<Blob> {
  const { width: W, height: H } = EXPORT;

  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No 2D context');

  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, W, H);

  // --- Left: branding panel (smooth, it's anti-aliased type) ---
  const brandRegionW = Math.round(W * 0.6);
  const branding = await loadImage(CARD_BRANDING.src);
  ctx.imageSmoothingEnabled = true;
  const b = contain(CARD_BRANDING.width, CARD_BRANDING.height, brandRegionW, H);
  ctx.drawImage(branding, 0, (H - b.h) / 2, b.w, b.h);

  // --- Right: avatar (crisp, it's pixel art) on a nextflow-100 panel ---
  const rx = brandRegionW;
  const rw = W - brandRegionW;
  const pad = 40;
  ctx.fillStyle = '#E2F7F3'; // nextflow-100
  ctx.fillRect(rx, 0, rw, H);
  const avatar = await renderAvatar(selection, colors);
  const a = contain(avatar.width, avatar.height, rw - pad * 2, H - pad * 2);
  const ax = rx + (rw - a.w) / 2;
  const ay = H - pad - a.h; // bottom-anchored
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(avatar, ax, ay, a.w, a.h);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error('Canvas export failed'));
    }, 'image/png');
  });
}

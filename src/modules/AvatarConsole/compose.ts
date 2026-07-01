import {
  AVATAR_CANVAS,
  CARD_BRANDING,
  EXPORT,
  resolveLayers,
  type Selection,
} from './manifest';

const imageCache = new Map<string, Promise<HTMLImageElement>>();

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

/** Draw the stacked avatar layers onto an offscreen canvas (native asset size). */
async function renderAvatar(selection: Selection): Promise<HTMLCanvasElement> {
  const canvas = document.createElement('canvas');
  canvas.width = AVATAR_CANVAS.width;
  canvas.height = AVATAR_CANVAS.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('No 2D context');

  const layers = await Promise.all(resolveLayers(selection).map(loadImage));
  for (const layer of layers) {
    ctx.drawImage(layer, 0, 0, canvas.width, canvas.height);
  }
  return canvas;
}

/**
 * Compose the final horizontal share card:
 *   left ~2/3  → static branding panel
 *   right ~1/3 → the built avatar (bottom-anchored)
 */
export async function composeCard(selection: Selection): Promise<Blob> {
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
  const avatar = await renderAvatar(selection);
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

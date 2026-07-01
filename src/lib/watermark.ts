// Client-side branded-image generation, shared by the single share panel
// (SharePanel.astro) and the bulk multi view (SharePanelMulti.astro).
//
// Rasterizes a hosted image onto a canvas with a white strip + two-tone
// "Uploaded on imagetourl.cloud" caption, then uploads the PNG to
// /api/brand-image and returns the hosted branded URL. Results are cached in
// localStorage under `wm:<cleanUrl>` so re-toggling is instant and free.
//
// Browser-only (uses Image/canvas/localStorage) — import from a component
// <script>, never from server code.

const ID_RE = /^[a-z0-9]{8}$/;

// A hosted upload can be branded only if it's one of our 8-char short-id images
// and not a GIF/SVG (can't rasterize a strip onto those cleanly). Returns the
// image id when brandable, else '' — callers use this to hide the toggle.
export function brandableId(cleanUrl: string): string {
  const ext = (cleanUrl.split('.').pop() || '').toLowerCase();
  const id = (cleanUrl.split('/').pop() || '').replace(/\.[^.]+$/, '');
  return ID_RE.test(id) && ext !== 'gif' && ext !== 'svg' ? id : '';
}

export function cachedBranded(cleanUrl: string): string | null {
  try {
    return localStorage.getItem(`wm:${cleanUrl}`);
  } catch {
    return null;
  }
}

// Generate (or reuse) the branded variant of a clean image URL. Returns the
// hosted branded URL, or null if the image isn't brandable / generation fails
// (cross-origin taint, encode error, upload failure) — callers fall back to the
// clean URL. `onLocalPreview` fires with an instant object-URL preview of the
// freshly rasterized canvas, before the upload round-trip completes.
export async function generateBrandedUrl(
  cleanUrl: string,
  onLocalPreview?: (objectUrl: string) => void,
): Promise<string | null> {
  const originalId = brandableId(cleanUrl);
  if (!originalId) return null;

  const cached = cachedBranded(cleanUrl);
  if (cached) return cached;

  const img = new Image();
  img.crossOrigin = 'anonymous';
  const loaded = new Promise<boolean>((resolve) => {
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
  img.src = cleanUrl;
  if (!(await loaded) || !img.naturalWidth) return null;

  // Best-effort: make sure the brand font is ready before we rasterize text.
  try { await (document as any).fonts?.load?.('600 24px "Space Grotesk Variable"'); } catch { /* ignore */ }

  // Cap the long edge so the generated PNG stays a sensible size.
  const scale = Math.min(1, 2000 / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.round(img.naturalWidth * scale);
  const h = Math.round(img.naturalHeight * scale);
  const stripH = Math.min(80, Math.max(60, Math.round(h * 0.11)));

  const c = document.createElement('canvas');
  c.width = w;
  c.height = h + stripH;
  const ctx = c.getContext('2d');
  if (!ctx) return null;

  // White strip + centered brand text, shrunk to fit narrow images. The brand
  // link is drawn in rose so it stands out from the "Uploaded on" prefix.
  const wmPrefix = 'Uploaded on ';
  const wmLink = 'imagetourl.cloud';
  const wmText = wmPrefix + wmLink;
  const fontFor = (px: number) => `600 ${px}px "Space Grotesk Variable", "Space Grotesk", system-ui, sans-serif`;
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, w, stripH);
  ctx.textBaseline = 'middle';
  const maxTextW = w * 0.9;
  let fontPx = Math.round(stripH * 0.46);
  while (fontPx > 9) {
    ctx.font = fontFor(fontPx);
    if (ctx.measureText(wmText).width <= maxTextW) break;
    fontPx -= 1;
  }
  ctx.font = fontFor(fontPx);
  // Two-tone, centered: dark prefix + rose brand link.
  ctx.textAlign = 'left';
  const prefixW = ctx.measureText(wmPrefix).width;
  const linkW = ctx.measureText(wmLink).width;
  const startX = (w - (prefixW + linkW)) / 2;
  const cy = stripH / 2 + 1;
  ctx.fillStyle = '#171717';
  ctx.fillText(wmPrefix, startX, cy);
  ctx.fillStyle = '#e11d48';
  ctx.fillText(wmLink, startX + prefixW, cy);

  // Original image below the strip.
  ctx.drawImage(img, 0, stripH, w, h);

  const blob: Blob | null = await new Promise((resolve) => {
    try { c.toBlob((b) => resolve(b), 'image/png'); } catch { resolve(null); }
  });
  if (!blob) return null; // tainted canvas (cross-origin) or encode failure

  // Instant local preview from the canvas — the caller can show the watermark
  // before the upload + re-download round trip finishes.
  if (onLocalPreview) {
    try { onLocalPreview(URL.createObjectURL(blob)); } catch { /* ignore */ }
  }

  const fd = new FormData();
  fd.append('file', new File([blob], `branded-${originalId}.png`, { type: 'image/png' }));
  fd.append('original_id', originalId);

  try {
    const res = await fetch('/api/brand-image', { method: 'POST', body: fd });
    const data = await res.json();
    if (res.ok && data?.data?.url) {
      const url = data.data.url as string;
      try { localStorage.setItem(`wm:${cleanUrl}`, url); } catch { /* ignore */ }
      return url;
    }
  } catch { /* leave clean-only */ }
  return null;
}

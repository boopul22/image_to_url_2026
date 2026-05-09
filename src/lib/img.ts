// Rewrite cdn.imagetourl.cloud URLs through our /img transform route so the
// edge fetches a right-sized WebP from R2 via the Cloudflare IMAGES binding
// instead of serving the raw 1.5–2.5 MB source JPEG. External URLs (or URLs
// we don't own) fall through untouched.
//
// Allowed widths come from src/pages/img/[...path].ts:
//   96, 160, 200, 308, 400, 616, 800, 1200, 1600
//
// Use the absolute variant for og:image, twitter:image, and Schema.org JSON-LD,
// where social scrapers and Google's parser expect a fully-qualified URL.

const SITE_ORIGIN = 'https://imagetourl.cloud';
const OWNED_CDN_HOST = 'cdn.imagetourl.cloud';
const TRANSFORMABLE_IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

export function imgUrl(src: string | null | undefined, width: number): string | undefined {
  if (!src) return undefined;
  try {
    const u = new URL(src);
    if (u.hostname !== OWNED_CDN_HOST) return src;
    if (!TRANSFORMABLE_IMAGE_EXT.test(u.pathname)) return src;
    const key = u.pathname.replace(/^\/+/, '');
    return `/img/${key}?w=${width}&f=webp`;
  } catch {
    return src;
  }
}

export function imgUrlAbs(src: string | null | undefined, width: number): string | undefined {
  const rel = imgUrl(src, width);
  if (!rel) return undefined;
  if (rel.startsWith('http')) return rel;
  return SITE_ORIGIN + rel;
}

export function rewriteOwnedCdnImagesInHtml(html: string, width = 800): string {
  return html.replace(/\bsrc=(["'])(https:\/\/cdn\.imagetourl\.cloud\/[^"']+)\1/gi, (match, quote, src) => {
    const rewritten = imgUrl(src, width);
    return rewritten && rewritten !== src ? `src=${quote}${rewritten}${quote}` : match;
  });
}

export const prerender = false;

import type { APIRoute } from 'astro';
import { ImageResponse } from 'workers-og';
import { defaultLocale, isRtl } from '../../i18n/config';
import {
  BRAND_FAMILY,
  buildCardFonts,
  familyForLocale,
  isValidLocale,
  NEEDS_LATIN_FALLBACK,
  type SatoriFont,
} from '../../lib/og-fonts';

// Dynamic Open Graph card generator. Renders a 1200x630 branded PNG with the
// page's own title + tagline, per page AND per locale, on the Cloudflare edge.
//
// URL:  /og/card.png?t=<title>&s=<subtitle>&l=<locale>&en=<english-title>
//   t   localized title         (required)
//   s   localized subtitle      (optional)
//   l   locale                  (optional, default 'en')
//   en  English title fallback  (optional — used if the locale's script font
//                                fails to load, so we never emit tofu boxes)
//
// The wordmark/URL always render in the brand font (Space Grotesk); non-Latin
// titles render in the matching Noto Sans family (fonts are text-subsetted at
// runtime by workers-og, then the whole PNG is immutable-cached at the edge).

const BRAND = 'ImageToURL';
const BRAND_DISPLAY = 'IMAGETOURL'; // wordmark is shown uppercase
const URL_LABEL = 'imagetourl.cloud';
const TAG = 'FREE IMAGE HOSTING';
const DEFAULT_SUBTITLE = 'Host images free, get an instant shareable link.';

const MAX_TITLE = 90;
const MAX_SUBTITLE = 120;

function clamp(s: string, max: number): string {
  const t = s.trim();
  return t.length > max ? t.slice(0, max - 1).trimEnd() + '…' : t;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Scale the headline down as it gets longer so it always fits the card.
function titleSize(title: string): number {
  const n = title.length;
  if (n <= 24) return 70;
  if (n <= 38) return 60;
  if (n <= 55) return 50;
  return 42;
}

function buildHtml(opts: {
  family: string;
  title: string;
  subtitle: string;
  rtl: boolean;
}): string {
  const { family, title, subtitle, rtl } = opts;
  const fontStack = `'${family}', 'Space Grotesk'`;
  const titleFs = titleSize(title);
  const rowDir = rtl ? 'row-reverse' : 'row';
  const align = rtl ? 'right' : 'left';
  const dir = rtl ? 'rtl' : 'ltr';

  return `
    <div style="display:flex;width:1200px;height:630px;padding:60px;background:#f7f5f1;font-family:${fontStack};" dir="${dir}">
      <div style="display:flex;flex-direction:column;flex:1;justify-content:space-between;background:#ffffff;border:3px solid #1a1a1a;box-shadow:16px 16px 0 #e11d48;padding:56px;">

        <div style="display:flex;flex-direction:${rowDir};align-items:center;">
          <div style="display:flex;width:46px;height:46px;background:#e11d48;border:3px solid #1a1a1a;margin-${rtl ? 'left' : 'right'}:18px;"></div>
          <div style="display:flex;font-family:'Space Grotesk';font-size:30px;font-weight:700;letter-spacing:2px;color:#1a1a1a;">${escapeHtml(BRAND_DISPLAY)}</div>
        </div>

        <div style="display:flex;flex-direction:column;text-align:${align};">
          <div style="display:flex;font-size:${titleFs}px;font-weight:700;line-height:1.04;color:#1a1a1a;">${escapeHtml(title)}</div>
          <div style="display:flex;font-size:27px;font-weight:400;line-height:1.35;color:#555555;margin-top:22px;">${escapeHtml(subtitle)}</div>
        </div>

        <div style="display:flex;flex-direction:${rowDir};align-items:center;justify-content:space-between;">
          <div style="display:flex;font-family:'Space Grotesk';font-size:26px;font-weight:700;color:#1a1a1a;">${escapeHtml(URL_LABEL)}</div>
          <div style="display:flex;font-family:'Space Grotesk';font-size:18px;font-weight:700;letter-spacing:1px;color:#ffffff;background:#e11d48;border:2px solid #1a1a1a;padding:9px 16px;">${escapeHtml(TAG)}</div>
        </div>

      </div>
    </div>`;
}

export const GET: APIRoute = async ({ request, locals }) => {
  const url = new URL(request.url);
  const rawTitle = (url.searchParams.get('t') || BRAND).slice(0, 200);
  const rawSubtitle = (url.searchParams.get('s') || DEFAULT_SUBTITLE).slice(0, 200);
  const rawEnTitle = (url.searchParams.get('en') || rawTitle).slice(0, 200);
  const localeParam = url.searchParams.get('l') || defaultLocale;
  const locale = isValidLocale(localeParam) ? localeParam : defaultLocale;

  // The card shows the title uppercase. Uppercase in JS (not via CSS
  // text-transform) so the runtime font subset contains exactly the glyphs we
  // render — otherwise text-transform asks for glyphs (e.g. "V") that were never
  // requested from Google Fonts and Satori draws tofu boxes.
  const title = clamp(rawTitle, MAX_TITLE).toUpperCase();
  const subtitle = clamp(rawSubtitle, MAX_SUBTITLE);
  const enTitle = clamp(rawEnTitle, MAX_TITLE).toUpperCase();

  // Edge cache: canonicalized URL with params in a fixed order so equivalent
  // requests collapse to one entry. Mirrors src/pages/img/[...path].ts.
  const cache = (caches as unknown as { default: Cache }).default;
  const canonical = new URL(url);
  canonical.pathname = '/og/card.png';
  canonical.search = '';
  canonical.searchParams.set('l', locale);
  canonical.searchParams.set('t', title);
  canonical.searchParams.set('s', subtitle);
  canonical.searchParams.set('en', enTitle);
  const cacheKey = new Request(canonical.toString(), { method: 'GET' });

  const cached = await cache.match(cacheKey);
  if (cached) {
    const headers = new Headers(cached.headers);
    headers.set('X-OG-Cache', 'HIT');
    return new Response(cached.body, { status: cached.status, headers });
  }

  const brandText = `${BRAND_DISPLAY} ${URL_LABEL} ${TAG}`;
  const defaultPng = () => Response.redirect(new URL('/og-default.png', url.origin).toString(), 302);

  // Render eagerly to bytes so a Satori/resvg failure is caught HERE (before any
  // 200 headers are committed to a streaming body) and we can fall back cleanly.
  async function renderPng(html: string, fonts: SatoriFont[]): Promise<Uint8Array> {
    const resp = new ImageResponse(html, { width: 1200, height: 630, format: 'png', fonts });
    const buf = new Uint8Array(await resp.arrayBuffer());
    if (buf.byteLength === 0) throw new Error('empty render');
    return buf;
  }

  // Build the all-English Latin card used both for complex-shaping locales and
  // as the last-resort fallback when a localized render fails.
  async function renderEnglishCard(): Promise<Uint8Array> {
    const en = await buildCardFonts({
      locale: defaultLocale,
      title: enTitle,
      subtitle: DEFAULT_SUBTITLE,
      brandText,
      enTitle,
      enSubtitle: DEFAULT_SUBTITLE,
    });
    if (en.fonts.length === 0) throw new Error('no fonts');
    const html = buildHtml({ family: BRAND_FAMILY, title: enTitle, subtitle: DEFAULT_SUBTITLE, rtl: false });
    return renderPng(html, en.fonts);
  }

  let png: Uint8Array;
  try {
    if (NEEDS_LATIN_FALLBACK.has(locale)) {
      // Arabic/Indic: Satori can't shape these — render a clean English card.
      png = await renderEnglishCard();
    } else {
      const resolved = await buildCardFonts({
        locale, title, subtitle, brandText, enTitle, enSubtitle: DEFAULT_SUBTITLE,
      });
      if (resolved.fonts.length === 0) throw new Error('no fonts');
      const html = buildHtml({
        family: familyForLocale(locale),
        title: resolved.title,
        subtitle: resolved.subtitle,
        rtl: isRtl(locale),
      });
      png = await renderPng(html, resolved.fonts);
    }
  } catch {
    // Localized render failed — try the English card before giving up.
    try {
      png = await renderEnglishCard();
    } catch {
      return defaultPng();
    }
  }

  const headers = new Headers({
    'Content-Type': 'image/png',
    'Cache-Control': 'public, max-age=31536000, immutable',
    'X-OG-Cache': 'MISS',
  });
  const out = new Response(png, { status: 200, headers });

  const cfCtx = (locals as unknown as { cfContext?: { waitUntil?: (p: Promise<unknown>) => void } }).cfContext;
  const put = cache.put(cacheKey, out.clone());
  if (cfCtx?.waitUntil) cfCtx.waitUntil(put); else put.catch(() => {});

  return out;
};

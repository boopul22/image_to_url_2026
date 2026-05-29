// Font loading for the dynamic OG card endpoint (src/pages/og/[...params].png.ts).
//
// Satori (inside workers-og) renders any glyph it has no font for as a tofu box,
// so a 28-locale OG generator must hand it a font that covers the page's script.
// We use workers-og's `loadGoogleFont`, which fetches a *text-subsetted* TTF from
// Google Fonts (only the glyphs in `text`) — so even CJK titles stay tiny, and
// there are no font files to bundle or host in R2. The rendered PNG is then
// edge-cached by the endpoint, so Google Fonts is hit at most once per unique
// (title, locale) pair.

import { loadGoogleFont } from 'workers-og';
import { locales, type Locale } from '../i18n/config';

// Brand display font (Latin + Latin-ext + Vietnamese). Used for the wordmark,
// the URL line, and as the title font for every Latin-script locale.
export const BRAND_FAMILY = 'Space Grotesk';

// Google Fonts family that covers each locale's script. Latin-script locales
// reuse the brand font; every other script maps to its matching Noto Sans family
// so Satori has glyph coverage.
const SCRIPT_FAMILY: Record<Locale, string> = {
  en: BRAND_FAMILY, es: BRAND_FAMILY, fr: BRAND_FAMILY, de: BRAND_FAMILY,
  ja: 'Noto Sans JP',
  'zh-Hans': 'Noto Sans SC',
};

export function isValidLocale(v: string | undefined | null): v is Locale {
  return !!v && (locales as readonly string[]).includes(v);
}

export function familyForLocale(locale: Locale): string {
  return SCRIPT_FAMILY[locale] ?? BRAND_FAMILY;
}

export function isLatinLocale(locale: Locale): boolean {
  return familyForLocale(locale) === BRAND_FAMILY;
}

// Scripts Satori can't shape (it has no HarfBuzz): Arabic needs contextual
// joining, Indic scripts need conjunct formation and vowel reordering. Without
// shaping those render as broken/disconnected glyphs (or nothing). For these
// locales we render a clean English card instead — correct English beats
// garbled localized text. Latin, Cyrillic, CJK (no shaping), Thai and Korean
// render acceptably and stay localized.
export const NEEDS_LATIN_FALLBACK: ReadonlySet<Locale> = new Set<Locale>([]);

export interface SatoriFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: 'normal';
}

// Load a single Google font, subsetted to `text`. Returns null on any failure
// (unknown family, network error, empty body) so callers can fall back instead
// of throwing a 500.
async function tryFont(family: string, weight: 400 | 700, text: string): Promise<SatoriFont | null> {
  try {
    const data = await loadGoogleFont({ family, weight, text });
    if (!data || (data as ArrayBuffer).byteLength === 0) return null;
    return { name: family, data: data as ArrayBuffer, weight, style: 'normal' };
  } catch {
    return null;
  }
}

export interface CardFonts {
  /** Fonts to hand to ImageResponse, in glyph-fallback priority order. */
  fonts: SatoriFont[];
  /** Title actually used (swapped to English if the locale's script font failed). */
  title: string;
  /** Subtitle actually used (likewise). */
  subtitle: string;
}

/**
 * Resolve the fonts for one OG card. Always loads a Latin font (Space Grotesk)
 * for the wordmark + URL line; for non-Latin locales it additionally loads the
 * script font for the localized title/subtitle. If the script font cannot be
 * loaded, it degrades to the English title/subtitle in the brand font rather
 * than emitting tofu.
 */
export async function buildCardFonts(opts: {
  locale: Locale;
  title: string;
  subtitle: string;
  /** Latin text that always appears on the card (wordmark + URL). */
  brandText: string;
  /** English fallbacks used when the locale's script font fails to load. */
  enTitle: string;
  enSubtitle: string;
}): Promise<CardFonts> {
  const family = familyForLocale(opts.locale);
  const latinSubset = `${opts.brandText} ${opts.enTitle} ${opts.enSubtitle}`;

  // Latin locale: one family covers everything (title + subtitle + brand).
  if (family === BRAND_FAMILY) {
    const [t, s] = await Promise.all([
      tryFont(BRAND_FAMILY, 700, `${opts.title} ${opts.brandText}`),
      tryFont(BRAND_FAMILY, 400, opts.subtitle || opts.brandText),
    ]);
    return { fonts: [t, s].filter(Boolean) as SatoriFont[], title: opts.title, subtitle: opts.subtitle };
  }

  // Non-Latin locale: script font for the localized copy + Latin font for the
  // wordmark/URL. Satori falls back across the array per-glyph.
  const [scriptTitle, scriptSub, latin] = await Promise.all([
    tryFont(family, 700, opts.title),
    tryFont(family, 400, opts.subtitle || opts.title),
    tryFont(BRAND_FAMILY, 700, latinSubset),
  ]);

  if (!scriptTitle) {
    // Script font unavailable — render an all-English card so we never ship tofu.
    const [t, s] = await Promise.all([
      latin ? Promise.resolve(latin) : tryFont(BRAND_FAMILY, 700, `${opts.enTitle} ${opts.brandText}`),
      tryFont(BRAND_FAMILY, 400, opts.enSubtitle || opts.brandText),
    ]);
    return {
      fonts: [t, s].filter(Boolean) as SatoriFont[],
      title: opts.enTitle,
      subtitle: opts.enSubtitle,
    };
  }

  // Script font first (localized title/subtitle), Latin last (wordmark/URL).
  const fonts = [scriptTitle, scriptSub, latin].filter(Boolean) as SatoriFont[];
  return { fonts, title: opts.title, subtitle: opts.subtitle };
}

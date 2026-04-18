// Fast resolvers built on top of SLUGS. Two directions:
//
//   localizedUrl(pageKey, locale)  -> "/fr/gif-vers-url"
//   resolveSlug(locale, slug)      -> pageKey | null (used by the dynamic route)
//
// Falls back to English for any locale that doesn't have its own translated
// slug yet. Also exposes hreflangPairs() which Layout.astro uses to emit
// <link rel="alternate"> tags for all locales that have a slug defined.

import { locales, defaultLocale, type Locale } from '../config';
import { SLUGS, PAGE_KEYS, type PageKey } from './slugs';

export { SLUGS, PAGE_KEYS, type PageKey };

export function getSlug(pageKey: PageKey, locale: Locale): string {
  return SLUGS[pageKey][locale] ?? SLUGS[pageKey][defaultLocale]!;
}

export function localizedUrl(pageKey: PageKey, locale: Locale): string {
  // Trailing slash matches the canonical URL Astro emits for landing pages.
  return `/${locale}/${getSlug(pageKey, locale)}/`;
}

export function isPageKey(v: string): v is PageKey {
  return (PAGE_KEYS as readonly string[]).includes(v);
}

// Reverse index — built once at module load. Maps "<locale>/<slug>" -> pageKey.
// Includes English for every page (always present) and each locale's translated
// slug when defined.
const REVERSE: Map<string, PageKey> = (() => {
  const m = new Map<string, PageKey>();
  for (const pageKey of PAGE_KEYS) {
    const slugs = SLUGS[pageKey];
    for (const locale of locales) {
      const slug = slugs[locale] ?? slugs[defaultLocale];
      if (slug) m.set(`${locale}/${slug}`, pageKey);
    }
  }
  return m;
})();

export function resolveSlug(locale: Locale, slug: string): PageKey | null {
  return REVERSE.get(`${locale}/${slug}`) ?? null;
}

// For hreflang link tags: emit one entry per locale that has a slug for this
// page. Locales without a translated slug fall back to their English slug
// under their locale prefix (still linguistically navigable).
export function hreflangPairs(pageKey: PageKey): { locale: Locale; url: string }[] {
  return locales.map(locale => ({
    locale,
    url: localizedUrl(pageKey, locale),
  }));
}

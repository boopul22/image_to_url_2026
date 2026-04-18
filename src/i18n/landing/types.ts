// Shared LandingContent type used by every tool/landing page module.
// Modules live at src/i18n/landing/<page-key>.ts and export a `content`
// object typed as Record<Locale, LandingContent>.

import type { Locale } from '../config';

export interface LandingContent {
  metaTitle: string;
  metaDescription: string;
  schemaName: string;
  schemaDescription: string;
  badge: string;
  h1Pre: string;
  h1Highlight: string;
  intro: string;
  howTitle: string;
  steps: { title: string; body: string }[];
  whyTitle: string;
  whyItems: { title: string; body: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
}

export type LandingContentMap = Record<Locale, LandingContent>;

/**
 * Build a LandingContentMap from an English canonical object plus optional
 * per-locale overrides. Locales without an override fall back to English.
 * The runtime dynamic route also falls back to defaultLocale, but using this
 * helper keeps the map type-safe without 27-per-module copy-paste.
 */
import { locales } from '../config';
export function fillLocales(
  en: LandingContent,
  overrides: Partial<Record<Locale, LandingContent>> = {},
): LandingContentMap {
  const out = {} as LandingContentMap;
  for (const loc of locales) out[loc] = overrides[loc] ?? en;
  return out;
}

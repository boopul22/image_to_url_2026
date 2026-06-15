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
  // Optional short lead-in paragraph rendered above the FAQ list.
  faqIntro?: string;
  faqs: { q: string; a: string }[];
  // Optional extra "use cases" section, rendered after the Why section.
  useCasesTitle?: string;
  useCasesIntro?: string;
  useCases?: { title: string; body: string }[];
  ctaTitle: string;
  ctaBody: string;
  ctaButton: string;
  // Optional freshness signals for structured data (ISO 8601, e.g. "2026-06-15").
  // When set, the dynamic route adds datePublished/dateModified to the page's
  // WebApplication JSON-LD so search engines see the page as recently updated.
  datePublished?: string;
  dateModified?: string;

  // --- Optional richer SEO sections (only some pages populate these) ---
  // A compact "at a glance" data block (key/value specs). Rendered after the hero.
  specsTitle?: string;
  specs?: { label: string; value: string }[];
  // A comparison table. `comparisonColumns` are the header cells; each row's
  // `cells` array must align to the columns (first cell is usually the tool name).
  comparisonTitle?: string;
  comparisonIntro?: string;
  comparisonColumns?: string[];
  comparisonRows?: { cells: string[] }[];
  // Extra long-form prose sections (each an <h2> + paragraph) for topical depth.
  sections?: { heading: string; body: string }[];
  // Internal links to related pages. `pageKey` resolves to a localized URL;
  // `label` is the (translatable) anchor text.
  relatedTitle?: string;
  related?: { pageKey: string; label: string }[];
  // Opt-in: emit HowTo JSON-LD built from `steps` for richer search results.
  howToSchema?: boolean;
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

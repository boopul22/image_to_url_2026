import type { Locale } from './config';
import { defaultLocale, locales } from './config';

import en from './translations/en.json';
import hi from './translations/hi.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import ja from './translations/ja.json';

const translations: Record<Locale, Record<string, string>> = { en, hi, es, fr, de, ja };

/**
 * Translate a key for the given locale. Falls back to English if key is missing.
 * Supports simple {param} interpolation.
 */
export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const dict = translations[locale] ?? translations[defaultLocale];
  let value = dict[key] ?? translations[defaultLocale][key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replaceAll(`{${k}}`, String(v));
    }
  }
  return value;
}

/** Extract locale from the first URL path segment. */
export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  return locales.includes(segment as Locale) ? (segment as Locale) : defaultLocale;
}

/** Strip the locale prefix from a pathname to get the base path. */
export function stripLocalePrefix(pathname: string): string {
  const segment = pathname.split('/')[1];
  if (locales.includes(segment as Locale) && segment !== defaultLocale) {
    return pathname.replace(`/${segment}`, '') || '/';
  }
  return pathname;
}

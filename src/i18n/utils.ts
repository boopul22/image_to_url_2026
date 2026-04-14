import type { Locale } from './config';
import { defaultLocale, locales } from './config';

import en from './translations/en.json';
import hi from './translations/hi.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import ja from './translations/ja.json';
import zhHans from './translations/zh.json';
import id from './translations/id.json';
import vi from './translations/vi.json';
import ptBR from './translations/pt-BR.json';
import tr from './translations/tr.json';
import tl from './translations/tl.json';
import pl from './translations/pl.json';
import nl from './translations/nl.json';
import it from './translations/it.json';
import ar from './translations/ar.json';
import bn from './translations/bn.json';
import fa from './translations/fa.json';
import ur from './translations/ur.json';
import ru from './translations/ru.json';
import th from './translations/th.json';
import ko from './translations/ko.json';
import sw from './translations/sw.json';
import ms from './translations/ms.json';
import ta from './translations/ta.json';
import mr from './translations/mr.json';
import te from './translations/te.json';
import zhHant from './translations/zh-Hant.json';






















const translations: Record<Locale, Record<string, string>> = { en, hi, es, fr, de, ja, 'zh-Hans': zhHans, id, vi, 'pt-BR': ptBR, tr, tl, pl, nl, it, ar, bn, fa, ur, ru, th, ko, sw, ms, ta, mr, te, 'zh-Hant': zhHant };

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
  if (locales.includes(segment as Locale)) {
    return pathname.replace(`/${segment}`, '') || '/';
  }
  return pathname;
}

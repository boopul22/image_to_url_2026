export const locales = ['en', 'es', 'fr', 'de', 'ja', 'zh-Hans'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Locales that need `dir="rtl"` on the <html> element. */
export const rtlLocales = [] as const satisfies readonly Locale[];
export function isRtl(loc: Locale): boolean {
  return (rtlLocales as readonly string[]).includes(loc);
}

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  'zh-Hans': '简体中文',
};

/** BCP 47 locale tags for og:locale */
export const localeOgTags: Record<Locale, string> = {
  en: 'en_US',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  ja: 'ja_JP',
  'zh-Hans': 'zh_CN',
};

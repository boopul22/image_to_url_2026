export const locales = ['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh-Hans', 'id', 'vi', 'pt-BR', 'tr', 'tl', 'pl', 'nl', 'it', 'ar', 'bn', 'fa', 'ur', 'ru', 'th', 'ko', 'sw', 'ms', 'ta', 'mr', 'te', 'zh-Hant'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** Locales that need `dir="rtl"` on the <html> element. */
export const rtlLocales = ['ar', 'fa', 'ur'] as const satisfies readonly Locale[];
export function isRtl(loc: Locale): boolean {
  return (rtlLocales as readonly string[]).includes(loc);
}

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  'zh-Hans': '简体中文',
  id: 'Bahasa Indonesia',
  vi: 'Tiếng Việt',
  'pt-BR': 'Português (Brasil)',
  tr: 'Türkçe',
  tl: 'Filipino',
  pl: 'Polski',
  nl: 'Nederlands',
  it: 'Italiano',
  ar: 'العربية',
  bn: 'বাংলা',
  fa: 'فارسی',
  ur: 'اردو',
  ru: 'Русский',
  th: 'ไทย',
  ko: '한국어',
  sw: 'Kiswahili',
  ms: 'Bahasa Melayu',
  ta: 'தமிழ்',
  mr: 'मराठी',
  te: 'తెలుగు',
  'zh-Hant': '繁體中文',
};

/** BCP 47 locale tags for og:locale */
export const localeOgTags: Record<Locale, string> = {
  en: 'en_US',
  hi: 'hi_IN',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  ja: 'ja_JP',
  'zh-Hans': 'zh_CN',
  id: 'id_ID',
  vi: 'vi_VN',
  'pt-BR': 'pt_BR',
  tr: 'tr_TR',
  tl: 'tl_PH',
  pl: 'pl_PL',
  nl: 'nl_NL',
  it: 'it_IT',
  ar: 'ar_AR',
  bn: 'bn_BD',
  fa: 'fa_IR',
  ur: 'ur_PK',
  ru: 'ru_RU',
  th: 'th_TH',
  ko: 'ko_KR',
  sw: 'sw_KE',
  ms: 'ms_MY',
  ta: 'ta_IN',
  mr: 'mr_IN',
  te: 'te_IN',
  'zh-Hant': 'zh_TW',
};

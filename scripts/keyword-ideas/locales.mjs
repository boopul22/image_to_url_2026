// Maps each site locale -> Google Ads targeting.
// languageId  = Google Ads language_constant ID  (languageConstants/<id>)
// geoId       = Google Ads geo_target_constant ID (geoTargetConstants/<id>), or null = worldwide
//
// The main script resolves every languageId against the live `language_constant`
// resource on startup and prints the resolved name, so a wrong ID is caught
// immediately (look for a name that doesn't match the locale).
//
// IDs flagged "verify" are best-effort for smaller-volume languages — confirm
// them once via the printed resolution table, then delete the comment.

export const localeTargets = {
  en:        { languageId: 1000, geoId: 2840, label: 'English (US)' },
  hi:        { languageId: 1023, geoId: 2356, label: 'Hindi (India)' },
  es:        { languageId: 1003, geoId: 2724, label: 'Spanish (Spain)' },
  fr:        { languageId: 1002, geoId: 2250, label: 'French (France)' },
  de:        { languageId: 1001, geoId: 2276, label: 'German (Germany)' },
  ja:        { languageId: 1005, geoId: 2392, label: 'Japanese (Japan)' },
  'zh-Hans': { languageId: 1017, geoId: 2156, label: 'Chinese Simplified (China)' },
  id:        { languageId: 1025, geoId: 2360, label: 'Indonesian (Indonesia)' },
  vi:        { languageId: 1040, geoId: 2704, label: 'Vietnamese (Vietnam)' },
  'pt-BR':   { languageId: 1014, geoId: 2076, label: 'Portuguese (Brazil)' },
  tr:        { languageId: 1037, geoId: 2792, label: 'Turkish (Turkey)' },
  tl:        { languageId: 1042, geoId: 2608, label: 'Filipino (Philippines)' },
  pl:        { languageId: 1030, geoId: 2616, label: 'Polish (Poland)' },
  nl:        { languageId: 1010, geoId: 2528, label: 'Dutch (Netherlands)' },
  it:        { languageId: 1004, geoId: 2380, label: 'Italian (Italy)' },
  ar:        { languageId: 1019, geoId: null, label: 'Arabic (worldwide)' },
  bn:        { languageId: 1056, geoId: 2050, label: 'Bengali (Bangladesh)' },
  fa:        { languageId: 1064, geoId: 2364, label: 'Persian (Iran)' },          // verify
  ur:        { languageId: 1041, geoId: 2586, label: 'Urdu (Pakistan)' },
  ru:        { languageId: 1031, geoId: 2643, label: 'Russian (Russia)' },
  th:        { languageId: 1044, geoId: 2764, label: 'Thai (Thailand)' },
  ko:        { languageId: 1012, geoId: 2410, label: 'Korean (South Korea)' },
  sw:        { languageId: 1108, geoId: 2404, label: 'Swahili (Kenya)' },          // verify
  ms:        { languageId: 1102, geoId: 2458, label: 'Malay (Malaysia)' },         // verify
  ta:        { languageId: 1098, geoId: 2356, label: 'Tamil (India)' },            // verify
  mr:        { languageId: 1101, geoId: 2356, label: 'Marathi (India)' },          // verify
  te:        { languageId: 1097, geoId: 2356, label: 'Telugu (India)' },           // verify
  'zh-Hant': { languageId: 1018, geoId: 2158, label: 'Chinese Traditional (Taiwan)' },
};

export const defaultLocale = 'en';

# How to add a new language

A mechanical, copy-paste playbook for adding a new locale to imagetourl.cloud.
Written so a small LLM (or a junior dev) can follow it end to end without
having to make judgment calls.

If you already know the system, the short version is:

1. Pick a BCP-47 code.
2. Edit 4 files (`src/i18n/config.ts`, `astro.config.mjs`, `src/i18n/utils.ts`, plus a new `src/i18n/translations/{code}.json`).
3. Translate every key in `en.json` (do not skip any).
4. Run the verification commands at the bottom.
5. Commit + push.

The full version is below. Follow each step in order. Do not skip the verification steps.

---

## 0. Mental model (read this once)

The site supports many locales using **manual i18n routing**. Every page either:

- Lives under `src/pages/[locale]/...` and is rendered at request time for any locale (e.g. `/en/`, `/es/pricing`, `/ja/blog/some-post`). These are the pages you are translating.
- Or lives under `src/pages/*.astro` (root, no `[locale]` segment). These are **English-only** marketing/tool pages (`/png-to-url`, `/imgur-alternative`, etc.) and **must not** be added in localized form. Leave them alone.

The pages translated by this guide are in the second category — `[locale]` pages. The translation lookup is handled by `t(locale, key)` in `src/i18n/utils.ts`. If a key is missing in the locale's JSON file, `t()` silently falls back to English. **A page that looks English in your new locale almost always means a missing key.**

There are 4 declarations that must agree:

1. `src/i18n/config.ts` — the source of truth `locales` tuple, `localeLabels`, `localeOgTags`.
2. `astro.config.mjs` — Astro's `i18n.locales` array (must contain the same codes).
3. `src/i18n/utils.ts` — imports each translation JSON and registers it in the `translations` map.
4. `src/i18n/translations/{code}.json` — the actual strings.

If any of these four drift, things break.

---

## 1. Pick the BCP-47 locale code

Use a [BCP-47](https://www.rfc-editor.org/info/bcp47) tag, not just a language code.

| Language | Use this code | Do NOT use |
|---|---|---|
| Brazilian Portuguese | `pt-BR` | `pt`, `br` |
| European Portuguese | `pt-PT` | `pt` |
| Simplified Chinese | `zh-Hans` | `zh`, `zh-CN` |
| Traditional Chinese | `zh-Hant` | `zh-TW` |
| Latin American Spanish | `es-419` | `es-LA` |
| British English | `en-GB` | `en-UK` |
| Korean | `ko` | `kr` |
| Italian | `it` | — |
| Russian | `ru` | — |
| Arabic | `ar` | — |

Rules of thumb:

- If the language has only one major written form, use the bare 2-letter code (`it`, `ru`, `ko`, `nl`, `pl`, `tr`).
- If there are multiple regional/script variants, use the qualified form (`zh-Hans`, `pt-BR`).
- Never invent codes. If unsure, look up the BCP-47 registry.
- The code is case-sensitive in this codebase: `zh-Hans`, not `zh-hans`.

This guide uses **`it`** (Italian) as the running example. Substitute your code everywhere you see `it` or `Italian`.

---

## 2. Edit `src/i18n/config.ts`

Add the new code to **three** places in this file: `locales`, `localeLabels`, `localeOgTags`.

```ts
// src/i18n/config.ts
export const locales = ['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh-Hans', 'it'] as const;
//                                                                        ^^^^ NEW

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
  es: 'Español',
  fr: 'Français',
  de: 'Deutsch',
  ja: '日本語',
  'zh-Hans': '简体中文',
  it: 'Italiano',          // NEW — use the language's NATIVE name, not English
};

export const localeOgTags: Record<Locale, string> = {
  en: 'en_US',
  hi: 'hi_IN',
  es: 'es_ES',
  fr: 'fr_FR',
  de: 'de_DE',
  ja: 'ja_JP',
  'zh-Hans': 'zh_CN',
  it: 'it_IT',             // NEW — Open Graph format: lang_REGION (underscore)
};
```

`localeOgTags` uses the underscore form `xx_YY` (Facebook/OG convention), not the dash form. Pick a sensible default region:

| Locale | OG tag |
|---|---|
| `it` | `it_IT` |
| `ko` | `ko_KR` |
| `ru` | `ru_RU` |
| `pt-BR` | `pt_BR` |
| `pt-PT` | `pt_PT` |
| `nl` | `nl_NL` |
| `pl` | `pl_PL` |
| `tr` | `tr_TR` |
| `ar` | `ar_AR` |
| `zh-Hant` | `zh_TW` |

---

## 3. Edit `astro.config.mjs`

Add the new code to the `i18n.locales` array. Order does not matter functionally but keep it consistent with `src/i18n/config.ts`.

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'hi', 'es', 'fr', 'de', 'ja', 'zh-Hans', 'it'],
  //                                                       ^^^^ NEW
  routing: 'manual',
},
```

**Important:** This array MUST exactly match `locales` in `src/i18n/config.ts`. If they drift, Astro will route requests inconsistently.

---

## 4. Create the translation JSON file

Generate a starter file by copying `en.json`. From the project root:

```bash
cp src/i18n/translations/en.json src/i18n/translations/it.json
```

This gives you a file with all 386 keys, all values still in English. You will translate the values in step 6.

---

## 5. Edit `src/i18n/utils.ts`

Import the new file and register it in the `translations` map:

```ts
// src/i18n/utils.ts
import en from './translations/en.json';
import hi from './translations/hi.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import ja from './translations/ja.json';
import zhHans from './translations/zh.json';
import it from './translations/it.json';   // NEW

const translations: Record<Locale, Record<string, string>> = {
  en, hi, es, fr, de, ja, 'zh-Hans': zhHans,
  it,                                       // NEW
};
```

Notes:

- The import name is just a JS identifier. It does **not** have to match the locale code. (Example: `zhHans` is the import for `zh.json`, registered under the `'zh-Hans'` key. That mismatch is intentional and harmless.)
- If the locale code contains a dash (`pt-BR`, `zh-Hant`), you **must** quote the key in the map: `'pt-BR': ptBR,`. JS object literal keys with dashes are not valid identifiers.

---

## 6. Translate every key

Open `src/i18n/translations/it.json`. There are 386 keys. You must translate every value. **Do not delete or rename any keys.** If you skip a key, the page will silently render English in that spot.

### 6.1 Translation rules (read all of these before starting)

These are non-negotiable. Violating them will break the build, break SEO, or render broken HTML.

1. **Translate values, never keys.** Keys are stable identifiers like `home.hero.headline1`. They never change.
2. **Preserve placeholders verbatim.** Anything wrapped in `{curly_braces}` is a runtime variable injected by `t(locale, key, params)`. Example:
   - EN: `"errors.fileTooBig": "File is too big — max {size} MB"`
   - IT: `"errors.fileTooBig": "Il file è troppo grande — massimo {size} MB"`  ✅
   - IT: `"errors.fileTooBig": "Il file è troppo grande — massimo {dimensione} MB"`  ❌ (renamed the placeholder)
3. **Preserve HTML entities and escapes.** `&mdash;`, `&amp;`, `&#39;`, `\n`, `\"` must stay in the translated string.
4. **Do NOT translate brand names**, even when they look like English words:
   - `ImageToURL` (the product name) — never localize.
   - `Cloudflare`, `Cloudflare R2`, `Google Analytics`, `Google OAuth`, `Pro`, `Business`, `Free` (when used as the literal plan name).
   - SI units and file types: `MB`, `KB`, `JPG`, `PNG`, `WebP`, `GIF`, `SVG`, `API`, `CDN`, `URL`, `HTTPS`, `SSL/TLS`, `DDoS`.
5. **Do NOT translate URLs, email addresses, or domain names.** `blog.boopul@gmail.com` and `https://imagetourl.cloud/...` stay literal.
6. **Currency** stays in USD ($). The product is priced in USD globally; do not convert to local currency.
7. **Match the register of the source.** Privacy policy and terms of service are the most formal pages — use the formal/legal register the language uses for contracts (`Sie` in German, `usted` in Spanish, `vous` in French, `お客様` in Japanese, etc.). Marketing copy (home, features) can be slightly more direct but stay polite.
8. **Keep punctuation locale-appropriate.** Use the language's native quotation marks (`« »` in French, `„ "` in German, `「 」` in Japanese, `《 》` in Chinese for titles, `「 」` for quotes), full-width punctuation in CJK languages where appropriate, and the correct decimal separator.
9. **Preserve length budget for UI strings where you can.** Buttons, badges, nav items, and labels (any key under `nav.*`, `hero.badge`, `*.cta`, `*.button*`) should not balloon — they live in fixed-width components and will overflow. If a faithful translation is much longer, use the standard short form for that language. Example: "Sign in" → `Accedi` (it), not `Effettua l'accesso`.
10. **Date strings.** Where EN says `April 1, 2026`, use the locale's standard format: `1 aprile 2026` (it), `1er avril 2026` (fr), `1. April 2026` (de), `2026年4月1日` (ja/zh), `1 अप्रैल 2026` (hi).
11. **For RTL languages** (Arabic, Hebrew, Persian, Urdu): translate normally. Do NOT inject `<bdo>` tags or unicode RLM marks. RTL rendering is a separate concern (see §10) and is not handled here.

### 6.2 How to translate mechanically (small-LLM workflow)

Do not try to translate the whole 386-key file in one pass — it's too long and you will silently drop keys. Instead:

**Step A.** Group the keys by namespace prefix (everything before the first `.`):

```bash
jq -r 'keys[] | split(".")[0]' src/i18n/translations/en.json | sort -u
```

You'll see groups like `home`, `nav`, `pricing`, `features`, `blog`, `privacy`, `terms`, `errors`, `footer`, etc.

**Step B.** Translate one group at a time. For each group, extract just that group's EN key/value pairs:

```bash
jq 'with_entries(select(.key | startswith("privacy.")))' src/i18n/translations/en.json > /tmp/group.json
```

Translate all values in `/tmp/group.json` keeping the keys identical. Save the result.

**Step C.** Merge the translated group back into the locale file, replacing any existing keys in that group:

```bash
jq -s '.[0] as $orig | .[1] as $new
  | ($orig | with_entries(select((.key | startswith("privacy.")) | not))) + $new' \
  src/i18n/translations/it.json /tmp/group.json > /tmp/it.new && mv /tmp/it.new src/i18n/translations/it.json
```

Adjust the `startswith("privacy.")` filter to whatever group you just did. Repeat for every group until done.

**Step D.** After every group, run the key-count check from §7. If the count changes, you dropped or added a key — find which one and fix it before continuing.

### 6.3 Hard groups to watch out for

- **`privacy.*` and `terms.*`** — formal legal register, ~131 keys combined, the longest values in the file. Most likely place to drop a key. Translate slowly.
- **`pricing.*`** — has plan names (`Free`, `Pro`, `Business`) which must NOT be localized, but the surrounding sentences MUST be.
- **`home.hero.*`, `home.cta.*`** — strict length budgets; do not balloon.
- **`errors.*`** — almost always have `{placeholders}`. Re-check each one.
- **`*.meta.title` and `*.meta.description`** — these become `<title>` and `<meta description>` tags. Keep titles ≤60 characters and descriptions ≤155 characters in the target language.

---

## 7. Verification (every step is mandatory)

Run all of these from the project root before committing.

### 7.1 Key set must exactly match English

```bash
jq -r 'keys[]' src/i18n/translations/en.json | sort > /tmp/en.keys
jq -r 'keys[]' src/i18n/translations/it.json | sort > /tmp/it.keys
diff /tmp/en.keys /tmp/it.keys
```

Expected output: **nothing**. (An empty diff means the key sets match.)

If you see lines starting with `<` (only in EN) or `>` (only in IT), the file has drifted. Fix it before continuing.

### 7.2 Key count must equal English

```bash
jq 'length' src/i18n/translations/en.json
jq 'length' src/i18n/translations/it.json
```

Both numbers must be the same (currently `386`).

### 7.3 No empty values

```bash
jq -r 'to_entries[] | select(.value == "" or .value == null) | .key' src/i18n/translations/it.json
```

Expected output: **nothing**. Any key listed here has been left blank — translate it.

### 7.4 No untranslated values (sanity check)

This catches the common bug of forgetting to translate part of the file. It compares EN values against IT values and flags any that are still identical. Some collisions are legitimate (brand names, emails, URLs), so review the output rather than treating it as a hard fail.

```bash
jq -r --slurpfile en src/i18n/translations/en.json '
  to_entries[]
  | select(.value == ($en[0][.key]))
  | .key + " = " + .value
' src/i18n/translations/it.json
```

Expected output: a small list containing only brand names, URLs, emails, and very short ambiguous words. If you see full sentences in there, those rows are still in English — go back and translate them.

### 7.5 Build must succeed

```bash
npx astro build
```

Expected: build completes with no errors and you see the prerendering log followed by `Complete!`. If you get a TypeScript error about `Locale` types, you forgot to update `src/i18n/config.ts` `locales` tuple — go back to step 2.

### 7.6 Live smoke test (after deploy)

After pushing and waiting for Cloudflare to deploy:

```bash
for path in / pricing features blog privacy terms; do
  echo "=== /it$path ==="
  curl -sIL "https://imagetourl.cloud/it$path" -o /dev/null -w "status=%{http_code}\n"
done
```

All should return `200`. Then open `https://imagetourl.cloud/it/` in a browser and skim each page. If you see English text, that key is missing from `it.json` — go find it.

---

## 8. Sitemap and hreflang

You do not need to edit the sitemap by hand. `src/pages/sitemap.xml.ts` reads the `locales` array from `src/i18n/config.ts` and automatically:

- Emits one `<url>` per locale per shared page (`/`, `/features`, `/pricing`, `/blog`, `/docs`, `/privacy`, `/terms`).
- Wraps each entry in `<xhtml:link rel="alternate" hreflang="...">` for every locale plus `x-default`.

After your build, check that the new locale appears in the live sitemap:

```bash
curl -s https://imagetourl.cloud/sitemap.xml | grep -c '/it/'
```

Should print a positive integer. If it prints `0`, the locale didn't make it into `src/i18n/config.ts`.

`src/layouts/Layout.astro` injects `<link rel="alternate" hreflang>` tags in the `<head>` of every localized page using the same `locales` array, so that's automatic too.

---

## 9. Middleware and legacy redirects

The middleware (`src/middleware.ts`) detects the locale from the URL's first path segment. Because it pulls from `getLocaleFromPath()` which reads `locales` from config, **no middleware changes are needed for the new locale itself**.

You only need to touch the middleware if:

1. The new code replaces an old code (e.g. you renamed `zh` → `zh-Hans`). In that case add a permanent 301 redirect block, mirroring the existing `zh` → `zh-Hans` block:
   ```ts
   // /old/* -> /new/*
   if (path === '/old' || path.startsWith('/old/')) {
     const tail = path === '/old' ? '/' : path.slice(4);
     return redirect(`/new${tail}`, 301);
   }
   ```
2. The new locale needs a redirect from a regional shortcut (e.g. you want `/cn/...` to redirect to `/zh-Hans/...`).

For a fresh, never-shipped-before locale, skip this section entirely.

---

## 10. Things this guide does NOT cover (be aware)

- **RTL layout for Arabic / Hebrew / Persian / Urdu.** Translating the JSON works; the page will render LTR by default. To flip the page direction you need to add `dir="rtl"` to `<html>` in `src/layouts/Layout.astro` conditional on locale, plus audit Tailwind classes for `ml-*`/`mr-*`/`text-left` etc. Treat RTL as a separate, larger task.
- **Locale-specific fonts.** Hindi, Arabic, Japanese, Chinese, Thai, etc. need fonts that cover their script. The site currently uses Space Grotesk + DM Sans which cover Latin scripts only; CJK and Devanagari fall back to system fonts, which is acceptable but not designed. If you want a polished look, add a script-specific webfont in `src/styles/global.css` scoped to `:lang(ja)`, `:lang(zh-Hans)`, etc.
- **Translated blog posts.** Blog content is stored in the D1 database (`posts` table), not in JSON. A new locale won't get translated blog posts automatically — those have to be authored in the CMS.
- **Translated CMS pages** (`/p/[slug]`). Same as blog posts — stored in D1.
- **Translation memory or TM tools.** This is a flat-file workflow. If translations grow past ~10 locales, consider migrating to a TMS like Crowdin or Lokalise.

---

## 11. Quick reference — files to touch

| File | What changes |
|---|---|
| `src/i18n/config.ts` | Add code to `locales`, `localeLabels`, `localeOgTags` |
| `astro.config.mjs` | Add code to `i18n.locales` |
| `src/i18n/utils.ts` | Import the new JSON, register in `translations` map |
| `src/i18n/translations/{code}.json` | New file — all 386 keys translated |

That is the complete list. You should not need to touch any other file to add a language.

---

## 12. Commit message template

```
feat(i18n): add Italian (it) locale

- Register `it` in i18n config (locales, labels, og tags)
- Add it.json with all 386 keys translated
- Sitemap + hreflang pick up the new locale automatically

Verified:
- jq diff against en.json: empty (key sets match)
- npx astro build: success
- /it/{,/pricing,/features,/blog,/privacy,/terms} return 200
```

---

## 13. Failure modes cheat sheet

| Symptom | Likely cause |
|---|---|
| Page renders English in your new locale | Missing key in `{code}.json` — run §7.1 to find it |
| TypeScript error about `Locale` type | `locales` tuple in `src/i18n/config.ts` not updated |
| Astro build fails with "missing route" | `astro.config.mjs` `i18n.locales` doesn't match `src/i18n/config.ts` |
| `/{code}/...` returns 404 | New code not in `astro.config.mjs` `i18n.locales` |
| `t(locale, ...)` returns the raw key | Key doesn't exist in EN either — typo, or you tried to call it with a key from a different system |
| Sitemap doesn't list the new locale | New code not in `src/i18n/config.ts` `locales` |
| `<html lang="en">` instead of `<html lang="it">` | Middleware didn't pick up the locale — check that the code is in `getLocaleFromPath`'s `locales` list (i.e. in config) |
| Page renders but with `{placeholder}` literal text | You renamed a placeholder during translation (rule §6.1.2). Restore the original `{name}`. |
| Plan names show in the wrong language ("Gratuito" instead of "Free") | You translated a brand name (rule §6.1.4). Revert. |

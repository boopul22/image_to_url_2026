# Language Roadmap — SEO Opportunity Edition

Top 20 locales to add to imagetourl.cloud, ranked **purely by SEO opportunity**: markets with high search demand and low competition where this site can rank quickly.

**Currently shipped (28):** `en`, `hi`, `es`, `fr`, `de`, `ja`, `zh-Hans`, `id`, `vi`, `pt-BR`, `tr`, `tl`, `pl`, `nl`, `it`, `ar`, `bn`, `fa`, `ur`, `ru`, `th`, `ko`, `sw`, `ms`, `ta`, `mr`, `te`, `zh-Hant`

To add a new locale, follow `docs/i18n/ADD_LANGUAGE.md` for the step-by-step playbook.

---

## How "opportunity" is scored

Opportunity is defined as the gap between **demand** (how many internet users speak the language) and **supply** (how much web content actually exists in that language).

```
Opportunity Score ≈  (% of internet users in language)  ÷  (% of web content in language)
```

The bigger the ratio, the more underserved the market — and the easier it is to rank because most competitors haven't shown up yet.

**Reality check:** English makes up **>50%** of all indexed web content (W3Techs, April 2026) but only **~26%** of internet users. The remaining ~74% of users are scrambling for content in languages where supply is thin. That gap is the entire opportunity.

Three other filters narrow the 200+ possible languages down to a shippable 20:

1. **Tool-fit signal** — does the audience actually search for things like "image to url", "free image hosting", "imgur alternative"? Markets with active blogger / dev / small-creator populations score higher than markets dominated by closed messaging apps.
2. **Friction discount** — RTL scripts, languages needing a webfont we don't bundle, or locales that require splitting (e.g. `pt-BR` vs `pt-PT`) get pushed down a tier.
3. **AI-search bonus** — Perplexity, ChatGPT search, and Google AI Overviews now actively look for *credible localized content* to cite. Languages where AI engines are returning English-only answers are the highest GEO/AEO opportunity right now.

---

## Tier 1 — Highest opportunity, ship next (8 locales)

These are the highest-leverage adds. Big audiences, weak competition, Latin/Cyrillic scripts (no RTL work, no script-font work), all directly searchable for image-hosting intent.

| # | Code | Native name | OG tag | Internet users (M) | Web content share | Opportunity ratio | Why it's an opportunity |
|---|---|---|---|---|---|---|---|
| 1 | `id` | Bahasa Indonesia | `id_ID` | ~210 | ~0.6% | **~7×** | 4th-largest internet population, fastest-growing creator economy in SEA, almost no localized image-hosting competition. Latin script. |
| 2 | `vi` | Tiếng Việt | `vi_VN` | ~75 | ~0.5% | **~6×** | Vietnam internet penetration >75%, blogger/affiliate scene is exploding, English content fills the SERPs because almost no one ships Vietnamese tools. |
| 3 | `pt-BR` | Português (Brasil) | `pt_BR` | ~170 | ~2.0% | **~2×** | Brazil is #5 country by internet users; massive blogger/Instagram/YouTube creator base. **Must split from `pt-PT`** — vocabulary and SEO terms diverge. |
| 4 | `tr` | Türkçe | `tr_TR` | ~70 | ~1.4% | **~2×** | Bridges EU and MENA. Latin script. Mobile-first user base. Local image hosts are weak. |
| 5 | `tl` | Filipino / Tagalog | `tl_PH` | ~70 | <0.1% | **>20×** | Almost completely uncovered. Philippines has high internet penetration, English-comfortable users will still click localized SERP results when offered. Massive AI-citation opportunity. |
| 6 | `pl` | Polski | `pl_PL` | ~32 | ~1.7% | **~1.5×** | EU member with strong purchasing power. Lower opportunity ratio but high commercial value. Latin script with diacritics. |
| 7 | `nl` | Nederlands | `nl_NL` | ~25 | ~1.0% | **~1.5×** | Netherlands + Belgium. High purchasing power. Strong English overlap means lower differentiation, but Dutch-language SEO queries still convert. |
| 8 | `it` | Italiano | `it_IT` | ~50 | ~1.5% | **~1.7×** | EU market, formal register similar to ES/FR effort. Quick win. |

## Tier 2 — Highest opportunity, RTL or special-script friction (6 locales)

These are some of the **biggest opportunity ratios on the entire web**, but they need extra one-time work — `dir="rtl"` audit for Arabic-family scripts, or shipping a script-specific webfont. Pair them up so the friction work happens once.

| # | Code | Native name | OG tag | Internet users (M) | Web content share | Opportunity ratio | Friction |
|---|---|---|---|---|---|---|---|
| 9 | `ar` | العربية | `ar_AR` | ~237 | ~0.6% | **~9×** | **RTL.** 5.2% of internet users, ~0.6% of web content — among the highest opportunity ratios in the world. Use Modern Standard Arabic (MSA), not a regional dialect. Once shipped, unlocks the entire MENA region. |
| 10 | `bn` | বাংলা | `bn_BD` | ~100 | <0.1% | **>15×** | Bangladesh + West Bengal. 284M total speakers. Bengali script — system fonts cover it; Noto Sans Bengali polishes it. Effectively zero localized image-hosting competition. |
| 11 | `fa` | فارسی | `fa_IR` | ~70 | ~1.7% | **~2×** | **RTL** (pair with `ar` so you do the RTL audit once). Iran + Afghanistan + Tajikistan diaspora. Strong tech literacy in the diaspora, weak local competitors. |
| 12 | `ur` | اردو | `ur_PK` | ~80 | <0.1% | **>15×** | **RTL.** Pakistan + India + diaspora. Mutually intelligible-ish with Hindi spoken but the Perso-Arabic script makes it a separate SEO market entirely. Pair with `ar` + `fa`. |
| 13 | `th` | ไทย | `th_TH` | ~57 | ~0.7% | **~2×** | Thailand. Thai script — system fonts work. SEA creator hub. Few localized image-hosting tools. |
| 14 | `ko` | 한국어 | `ko_KR` | ~50 | ~0.7% | **~1.5×** | South Korea. Hangul — system fonts cover it; Pretendard or Noto Sans KR for polish. Lower opportunity ratio but high purchasing power. **Caveat:** Korean SEO is fragmented across Naver and Google; ranking on Google alone gives you maybe 60% of the market. |

## Tier 3 — Underserved emerging markets (6 locales)

These are the **highest opportunity ratios** anywhere on the web — the audiences exist, the competition is essentially zero, but the commercial market is still thin. Best for SEO/AI-citation positioning rather than immediate revenue. Confirm intent with analytics before shipping.

| # | Code | Native name | OG tag | Speakers (M) | Web content share | Opportunity ratio | Notes |
|---|---|---|---|---|---|---|---|
| 15 | `sw` | Kiswahili | `sw_KE` | 100+ | <0.05% | **>30×** | East Africa lingua franca (Kenya, Tanzania, Uganda, Rwanda, parts of Congo). Internet penetration is climbing fast. Latin script. Almost zero competition for localized tools. AI-citation goldmine — Perplexity/ChatGPT have nothing to cite in Swahili right now. |
| 16 | `ms` | Bahasa Melayu | `ms_MY` | ~80 | <0.1% | **~10×** | Malaysia + Singapore + Brunei. Very close to Indonesian (`id`) but distinct SEO market. Latin script. |
| 17 | `ta` | தமிழ் | `ta_IN` | 86 | <0.1% | **>15×** | Tamil Nadu + Sri Lanka + Singapore + Malaysia diaspora. Strong tech literacy in Chennai. Tamil script — system fonts cover it. |
| 18 | `mr` | मराठी | `mr_IN` | 99 | <0.05% | **>20×** | Maharashtra (Mumbai). Mumbai is one of India's biggest tech/startup hubs but Marathi-language tools are nearly nonexistent. Devanagari (same script as Hindi). |
| 19 | `te` | తెలుగు | `te_IN` | 96 | <0.05% | **>20×** | Andhra Pradesh + Telangana (Hyderabad). Hyderabad is a top-3 Indian tech hub. Telugu script. |
| 20 | `zh-Hant` | 繁體中文 | `zh_TW` | 30 | ~1.5% | **~1×** | Traditional Chinese for Taiwan + Hong Kong. Cannot reuse `zh-Hans` content — character set + vocabulary differ. Lower opportunity ratio than the others in this tier but shipping it is cheap once `zh-Hans` is in production. High purchasing power per capita. |

---

## Considered and not in the top 20

| Code | Why deferred |
|---|---|
| `ru` | 116M internet users, ~5% web content. Decent absolute size but **opportunity ratio is barely 1×** because Russian web content is well-developed. Domestic image hosts (Yandex, VK) are entrenched. Skip unless you specifically want Belarus/Kazakhstan/Israel/Germany Russian-diaspora traffic. |
| `pt-PT` | Lower priority than `pt-BR`. Ship `pt-BR` first; revisit only if Portugal traffic shows up. |
| `uk` | Distinct from `ru` post-2022 and worth shipping if you ship Russian, but on its own opportunity ratio doesn't justify the Cyrillic QA work. |
| `he` | Hebrew. RTL. Smaller market (~9M) than `ar`/`fa`/`ur`. If you ship the RTL audit for Arabic, *then* `he` becomes nearly free and should be promoted. |
| `da`, `no`, `fi`, `sv` | Nordic languages. ≥85% English fluency — SEO uplift small, conversion uplift smaller. Defer. |
| `cs`, `hu`, `ro`, `el` | Smaller EU markets. Decent commercial value but low opportunity ratio (web content already exists). Add only if EU traffic grows in dashboard. |
| `bg`, `sk`, `hr`, `sr`, `sl` | Balkan markets. Niche; defer indefinitely. |
| `gu`, `kn`, `ml`, `pa`, `or` | Indian regional languages. High opportunity ratios but smaller speaker bases than `ta`/`te`/`mr`. Add after the bigger Indian regionals if they perform. |
| `ne`, `si` | Nepali, Sinhala. Small markets but very low competition. Sleeper picks. |
| `my`, `km`, `lo` | Burmese, Khmer, Lao. Very high opportunity ratios but tiny commercial markets. SEO/AI-citation play only. |
| `am`, `ha`, `yo`, `ig`, `zu` | African languages. Highest opportunity ratios on the planet but image-hosting search demand is still very low. Revisit in 2-3 years as African internet penetration crosses 75%. |
| `kk`, `uz`, `az` | Central Asia. Niche; defer. |
| Regional Chinese (`yue`, `wuu`, etc.) | Speakers can read `zh-Hans` or `zh-Hant`. Not worth a separate locale. |

---

## Status tracking

Update the **Status** column as work moves forward. Allowed values: `not-started` → `in-progress` → `qa` → `shipped`.

| Code | Status | Started | Shipped | Owner | Notes |
|---|---|---|---|---|---|
| `en` | shipped | — | 2025 | — | Source of truth |
| `hi` | shipped | — | 2025 | — | |
| `es` | shipped | — | 2025 | — | Privacy/terms re-translated 2026-04-14 |
| `fr` | shipped | — | 2025 | — | Privacy/terms re-translated 2026-04-14 |
| `de` | shipped | — | 2025 | — | Privacy/terms re-translated 2026-04-14 |
| `ja` | shipped | — | 2025 | — | Privacy/terms re-translated 2026-04-14 |
| `zh-Hans` | shipped | — | 2025 | — | Renamed from `zh` 2026-04-14 |
| `id` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 — opportunity ~7× |
| `vi` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 — opportunity ~6× |
| `pt-BR` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 — Brazil priority |
| `tr` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 |
| `tl` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 — opportunity >20× |
| `pl` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 |
| `nl` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 |
| `it` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 1 |
| `ar` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 — RTL, opportunity ~9× |
| `bn` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 — opportunity >15× |
| `fa` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 — RTL (pair with `ar`) |
| `ur` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 — RTL (pair with `ar`+`fa`) |
| `th` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 |
| `ru` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Bonus (Tier 2 Batch) |
| `ko` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 2 |
| `sw` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 — opportunity >30× |
| `ms` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 |
| `ta` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 — opportunity >15× |
| `mr` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 — opportunity >20× |
| `te` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 — opportunity >20× |
| `zh-Hant` | shipped | 2026-04-14 | 2026-04-14 | Antigravity | Tier 3 — pair with `zh-Hans` |

---

## Decision rules (read before picking the next one)

1. **Ship Tier 1 in order.** They're the highest absolute traffic per hour of work — established markets, ranking-friendly competition.
2. **Pair RTL work in one sprint.** When you start Arabic, also do Persian + Urdu + Hebrew at the same time. The `dir="rtl"` audit + Tailwind logical-property pass is the expensive part; once it's done, additional RTL locales are nearly free. This is the single biggest leverage point in the whole roadmap.
3. **Pair Indic regional languages.** Once you ship `ta`, doing `te` + `mr` is cheap because the translation workflow + script font handling is already in place.
4. **Check Search Console before each ship.** Look at impressions and clicks for the target country/language *before* you start work. If a market shows zero impressions today, that's not a "skip" signal — the page being missing is *why* there's no traffic — but it's a tie-breaker between candidates.
5. **Don't ship more than 2 locales per week.** Translation quality drops when batched too tightly, and key drift (the bug we just fixed in the privacy/terms files) becomes more likely.
6. **Re-translate from EN, never refactor in the same PR.** Schema changes ship in a separate commit and propagate to all locales atomically.
7. **Watch AI-search citations.** Use Perplexity / ChatGPT search / Google AI Overviews to query "best free image hosting" in each target language. If the AI returns English results or no results at all, that locale is currently uncited — shipping a localized page can capture those AI citations within weeks.

---

## Sources

- [Languages used on the Internet — Wikipedia](https://en.wikipedia.org/wiki/Languages_used_on_the_Internet)
- [W3Techs — Usage Statistics of Content Languages for Websites, April 2026](https://w3techs.com/technologies/overview/content_language)
- [Statista — Most used languages online by share of websites 2025](https://www.statista.com/statistics/262946/most-common-languages-on-the-internet/)
- [List of languages by total number of speakers — Wikipedia](https://en.wikipedia.org/wiki/List_of_languages_by_total_number_of_speakers)
- [Ethnologue — Top 200 languages](https://www.ethnologue.com/insights/ethnologue200/)
- [Search Engine Land — The web is multilingual, so why does search still speak just a few languages?](https://searchengineland.com/web-multilingual-search-few-languages-460026)
- [Most Popular Languages Used on the Internet by 2026 — Optimational](https://optimational.com/blog/top-10-popular-languages-used-internet/)
- [25 Most Spoken Languages in the World in 2026 — Berlitz](https://www.berlitz.com/blog/most-spoken-languages-world)
- [The 10 Most Spoken Languages In The World In 2026 — Babbel](https://www.babbel.com/en/magazine/the-10-most-spoken-languages-in-the-world)
- [Internet World Stats — Languages by user count](https://www.internetworldstats.com/stats7.htm)

Speaker counts and content shares are 2026 estimates and shift year to year. Treat the rankings as directional, not absolute — Search Console data from your own dashboards should override this list whenever they conflict.

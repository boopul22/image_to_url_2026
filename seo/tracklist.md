# SEO Tracklist — imagetourl.cloud
_Date started: 2026-06-07 · Status: ⬜ todo · 🟡 drafted · ✅ done_

## Edit-target rule (verified against live canonicals)
- **Module pages** → indexed at `/en/<slug>`; edit `src/i18n/landing/<slug>.ts` (`content.en`). The root `/<slug>.astro` is a **noindex redirect stub — never edit it**.
- **Standalone-only pages** → indexed at root `/<slug>`; edit `src/pages/<slug>.astro` (inline / `PlatformHostingPage` props).
- **Homepage** → `src/i18n/translations/en.json`.
- English first; propagate later via `scripts/translate-landing.mjs` + `translate-missing.mjs`. **Do not rename English slugs.**

---

## Wave 0 — Homepage
| Page | Main keyword | Secondary | Edit target | Status |
|---|---|---|---|---|
| / (home) | image to url | image url, picture url, image urls, url image | `src/i18n/translations/en.json` (`home.meta.*`, `home.hero.*`, `home.faq.*`) | ✅ done (title 66→50, meta 184→158, subheadline +`image URL`) |

## Wave 1 — Core "image to url" + generator cluster (modules)
| Page (/en/) | Main keyword | Secondary | Edit target | Status |
|---|---|---|---|---|
| image-url-generator | image url generator | how to generate image url, photo url generator, get image url | `landing/image-url-generator.ts` | ✅ title 72→50 |
| photo-to-url | photo to url | photo url, picture url, convert photo to link | `landing/photo-to-url.ts` | ✅ title 64→51 |
| image-to-url-for-html | image url for html | image src url, html image link | `landing/image-to-url-for-html.ts` | ✅ title→50, meta 126→148 |
| image-url-for-chatgpt | image url for chatgpt | image link for chatgpt, ai image url | `landing/image-url-for-chatgpt.ts` | ✅ title→50, meta 131→148 |
| image-to-url-for-whatsapp | image url for whatsapp | share image link whatsapp | `landing/image-to-url-for-whatsapp.ts` | ✅ already optimal |
| image-to-url-vercel | image hosting vercel | image url for vercel, next image url | `landing/image-to-url-vercel.ts` | ✅ title 72→48, meta 136→154 |
| jpg-to-url | jpg to url | jpeg to url, convert jpg to link | `landing/jpg-to-url.ts` | ✅ already optimal |
| png-to-url | png to url | convert png to link, png image url | `landing/png-to-url.ts` | ✅ already optimal |
| webp-to-url | webp to url | convert webp to link | `landing/webp-to-url.ts` | ✅ title 65→52 |
| gif-to-url | gif to url | host gif, animated gif link | `landing/gif-to-url.ts` | ✅ title 63→50 |
| screenshot-to-url | screenshot to url | screenshot link, upload screenshot | `landing/screenshot-to-url.ts` | ✅ already optimal |

## Wave 2 — "Image as link" + how-to + hosting cluster
| Page | Main keyword | Secondary | Edit target | Status |
|---|---|---|---|---|
| direct-image-link (module) | direct image link | image as link, image in link, link for picture, picture link | `landing/direct-image-link.ts` | ✅ title 63→50 |
| image-embed-code-generator (module) | image embed code | image link html, embed image url | `landing/image-embed-code-generator.ts` | ✅ title 65→52 |
| how-to-get-direct-url-for-image (standalone) | how to get image url | how to get a photo url, how to generate image url | `pages/how-to-get-direct-url-for-image.astro` | ✅ already optimal |
| how-to-share-image-as-link (standalone) | how to share image as link | share image link | `pages/how-to-share-image-as-link.astro` | ✅ already optimal |
| free-image-hosting (module) | free image hosting | free image host, image host website, image hosting sites | `landing/free-image-hosting.ts` | ✅ title 66→53 |
| free-image-cdn (module) | free image cdn | image cdn, fast image hosting | `landing/free-image-cdn.ts` | ✅ already optimal |
| permanent-image-hosting (module) | permanent image hosting | image hosting that doesn't expire | `landing/permanent-image-hosting.ts` | ✅ title 64→51 |
| anonymous-image-upload (module) | anonymous image upload | upload image without account | `landing/anonymous-image-upload.ts` | ✅ already optimal |
| bulk-image-upload (module) | bulk image upload | upload multiple images, batch image upload | `landing/bulk-image-upload.ts` | ✅ title 63→50, meta 163→148 |
| ai-image-hosting (module) | ai image hosting | host ai images, image url for ai | `landing/ai-image-hosting.ts` | ✅ already optimal |

## Wave 3 — Existing converters (modules)
| Page (/en/) | Main keyword | Secondary | Edit target | Status |
|---|---|---|---|---|
| webp-to-jpg | webp to jpg | convert webp to jpg, webp to jpg converter | `landing/webp-to-jpg.ts` | ✅ already optimal (T≤52, D138–155) |
| webp-to-png | webp to png | convert webp to png | `landing/webp-to-png.ts` | ✅ already optimal (T≤52, D138–155) |
| jpg-to-webp | jpg to webp | convert jpg to webp | `landing/jpg-to-webp.ts` | ✅ already optimal (T≤52, D138–155) |
| png-to-webp | png to webp | convert png to webp | `landing/png-to-webp.ts` | ✅ already optimal (T≤52, D138–155) |
| jpg-to-png | jpg to png | convert jpg to png, jpeg to png converter | `landing/jpg-to-png.ts` | ✅ already optimal (T≤52, D138–155) |
| png-to-jpg | png to jpg | convert png to jpg, png to jpg converter | `landing/png-to-jpg.ts` | ✅ already optimal (T≤52, D138–155) |
| heic-to-jpg | heic to jpg | convert heic to jpg, heic to jpg converter | `landing/heic-to-jpg.ts` | ✅ already optimal (T≤52, D138–155) |
| heic-to-png | heic to png | convert heic to png | `landing/heic-to-png.ts` | ✅ already optimal (T≤52, D138–155) |
| heic-to-pdf | heic to pdf | convert heic to pdf | `landing/heic-to-pdf.ts` | ✅ already optimal (T≤52, D138–155) |
| jpg-to-pdf | jpg to pdf | convert jpg to pdf | `landing/jpg-to-pdf.ts` | ✅ already optimal (T≤52, D138–155) |
| png-to-pdf | png to pdf | convert png to pdf | `landing/png-to-pdf.ts` | ✅ already optimal (T≤52, D138–155) |
| image-to-base64 | image to base64 | convert image to base64, base64 encode image | `landing/image-to-base64.ts` | ✅ already optimal (T≤52, D138–155) |
| base64-to-image | base64 to image | decode base64 image, base64 to png | `landing/base64-to-image.ts` | ✅ already optimal (T≤52, D138–155) |
| image-compressor | image compressor | compress image online, online image compressor | `landing/image-compressor.ts` | ✅ already optimal (T≤52, D138–155) |
| image-resizer | image resizer | resize image online, image resizer free | `landing/image-resizer.ts` | ✅ already optimal (T≤52, D138–155) |
| favicon-generator | favicon generator | favicon from image, png to favicon | `landing/favicon-generator.ts` | ✅ already optimal (T≤52, D138–155) |

## Wave 4 — NEW converter pages (create module + slug entry)
| New slug | Main keyword | Vol/KD | Widget | Status |
|---|---|---|---|---|
| convert-to-jpg | convert to jpg | 33,100 / 13 | canvas (any→jpg) | ✅ built + client-side widget |
| jpeg-to-jpg | jpeg to jpg | 14,800 / 0 | canvas (jpg→jpg/rename) | ✅ built + client-side widget |
| jfif-to-jpg | jfif to jpg | 12,100 / 14 | canvas (jfif→jpg) | ✅ built + client-side widget |
| avif-to-jpg | avif to jpg | 5,400 / 5 | canvas (avif→jpg) | ✅ built + client-side widget |
| tiff-to-jpg | tif to jpg | 5,400 / 0 | canvas (tiff→jpg) | ✅ built + client-side widget |
| jpg-to-jpeg | jpg to jpeg | 4,400 / 0 | canvas (rename) | ✅ built + client-side widget |
_(jpeg-to-png-converter 9,900/15 — fold into existing jpg-to-png copy rather than a new page.)_

## Wave 5 — Platform "image hosting for X" pages
**Modules** (edit `landing/<slug>.ts`): discord, ebay, email-signatures, forums, github-readme, google-forms, google-sheets, newsletters, notion, shopify, wordpress — ✅ audited; discord/email-signatures/google-sheets/wordpress titles trimmed, rest already ≤60.
**Standalone** (edit `pages/<slug>.astro`, `PlatformHostingPage` props): instagram, twitter, reddit, pinterest, linkedin, medium, substack, markdown, stack-overflow, jira, nextjs, webflow, squarespace, wix, framer — ✅ audited; linkedin + stack-overflow titles trimmed, rest already ≤60.
Pattern: main keyword `image hosting for <platform>`; tighten metaTitle ≤60, metaDescription ~155, H1, intro.

## Wave 6 — Comparison / alternative / API / GEO pages (standalone, meta+H1 touch)
imgur-alternative (module), imgbb-alternative (module), cloudinary-alternative (module); imagetourl-vs-imgur, imagetourl-vs-imgbb, imagetourl-vs-cloudinary, imgur-vs-imgbb, postimages-alternative, google-photos-direct-link, dropbox-direct-image-link (standalone); image-upload-api, image-hosting-api-python/nodejs/php/curl, image-upload-zapier/make/n8n, image-hosting-rest-api (standalone); how-to-embed-image-in-email, how-to-host-image-for-free, how-long-does-imagetourl-store-images, what-is-image-hotlinking (standalone). ✅ audited; imgur-alternative + postimages-alternative titles trimmed, rest already ≤60.

---

## Post-English steps
- `npm run astro -- check` after each wave.
- After Waves 1–6 English: `node scripts/translate-landing.mjs` (slugs for new pages) → `node scripts/translate-missing.mjs` (UI keys) → translate new-page modules.
- `npm run build` → confirm new pages + `patch-worker-entry.mjs` slug pickup.
- Add new pages to `src/pages/sitemap.xml.ts` (landing registry auto-emits if added to SLUGS).

## Wave 7 — image-to-URL cluster consolidation (canonical-safe, 2026-06-07)
Focus: rank for `image to url` + its 844-keyword cluster (431k vol). Synonyms woven into the ONE owning page per sub-intent (no new pages = no cannibalization).

| Owning page | Sub-intent / synonyms folded in | Vol | Status |
|---|---|---:|---|
| HOMEPAGE | image to url, image url, image urls, picture url, pic url, url image, url picture | 209k | ✅ Wave 0 (head term) |
| direct-image-link | image as a link, link for a picture, image to link, picture link, turn an image into a link | 88k | ✅ intro + Why + FAQ + de-stuffed |
| how-to-get-direct-url-for-image | how to get a photo/picture url, how to generate image url | 86k | ✅ shortAnswer + 2 FAQs |
| image-url-generator | picture URL generator, photo URL generator, image link generator | 26k | ✅ Why item (de-stuffed) |
| photo-to-url | photo URL converter, photo to link, create a photo URL | 19k | ✅ Why item (de-stuffed) |
| screenshot-to-url, image-to-url-for-html, image-embed-code-generator | minor variants | <2k | ⬜ low priority |

Coverage: ~92% of on-intent volume now has a canonical page. External tool clusters (gif compressor ~150k, image converter hub ~35k) deferred per user — image-to-URL focus first.

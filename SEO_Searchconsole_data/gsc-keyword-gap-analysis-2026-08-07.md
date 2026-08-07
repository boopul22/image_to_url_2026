# GSC keyword gap analysis — imagetourl.cloud

2026-08-07

Sources: `SEO_Searchconsole_data/Queries.csv` + `Pages.csv`, live sitemap (~76 EN URLs), landing `PageKey` list (62), plus the cleaned notes in `imagetourl_keyword_gaps.md`.

This export: ~1,000 queries, 51,140 impressions, 2,409 clicks.

## Bottom line

Use-case landings with a tool on top still beat how-to blogs. That part of the earlier brief holds up.

Where it went wrong: about 12 of the 30 "missing pages" already exist. The bigger leak is titles and wording. People search "jpg to link", "make image into a link", "upload pic to link", "photos to url" — and the live pages don't say those words loudly enough. Fix that before inventing Claude or Midjourney pages that have zero impressions in this export.

## Prioritized opportunities

| Pri | Kind | Topic | Imp | Clicks | Avg pos | Intent | Page type | Why bother |
|---|---|---|---|---|---|---|---|---|
| P0 | Fix existing | JPG → "link" wording | 4,296 | 195 | 8.7 | Get a URL | Retitle `/en/jpg-to-url` | "jpg to link" CTR is 1.17%. png-to-url sits around 15%. Same job, worse snippet. |
| P0 | Fix existing | "make / turn image into a link" | 2,564 | 40 | 37 | Get a URL | Rebuild `/en/image-to-link` | Lots of impressions around positions 24–60. Page is there; it's just losing. |
| P0 | Fix existing | pic / picture / photos | 2,874 | 10 | 51 | Get a URL | Expand `/en/photo-to-url` | Synonym pile is bigger than most "new niche" ideas. |
| P0 | Fix existing | "upload … for a link" | 2,139 | 15 | 59 | Upload | New slug or fold into free-hosting | People say upload, not convert. Titles miss that. |
| P1 | Fix existing | Free image hosting | 2,503 | 6 | 65 | Compare hosts | Rewrite `/en/free-image-hosting` | Blog version has 3,995 impressions at 0.25% CTR. One strong page beats three weak ones. |
| P1 | Fix existing | Imgur alternative (EN) | 646 | 15 | 21 | Switch hosts | Comparison | EN "imgur alternative" ≈ 120 imp, 0 clicks. RU pages already get clicks. |
| P1 | Fix existing | Email embed / signatures | 201 | 2 | 82 | Host for email | Landing + 301 | Old `/how-to-embed-image-in-email/` soaks impressions. Point it at the real landing. |
| P1 | Fix existing | eBay listing images | 64 | 0 | 52 | Seller workflow | Rewrite ebay landing | Not missing. Just dead in the SERP. |
| P1 | Fix existing | Reddit / forums | 72 | 2 | 26 | Share in threads | Retitle forums or split Reddit | Forums page is close; "reddit" isn't in the title. |
| P1 | Fix existing | Cloudinary / ImgBB alts | 174 | 3 | 30–53 | Switch hosts | Comparison | Pages exist. Rankings don't. |
| P2 | New | Postimages alternative | 0* | 0 | — | Switch hosts | Comparison | No hits yet. Same template as Imgur/ImgBB. Best clean gap. |
| P2 | New | Telegram image URL | 0* | 0 | — | Messaging | Landing + tool | WhatsApp page works; Telegram is the obvious sibling. |
| P2 | New | Image upload / hosting API | 97 | 0 | 92 | Developer | Docs page | Small, but real. You already have API keys. |
| P2 | New | Lightshot alternative | 0* | 0 | — | Screenshots | Comparison | Feeds `/en/screenshot-to-url/`. |
| P2 | Fix existing | HEIC / iPhone | 277 | 1 | 50 | Convert phone photos | Existing heic tools | Japanese HEIC→PDF queries; titles need work. |
| P2 | Fix existing | Format converters | 748 | 3 | 65 | Convert formats | Existing tools | You already have 15+. They're stuck on page 7–9. |
| P3 | Maybe later | Claude / Midjourney / Perplexity / DALL·E | 0 | 0 | — | AI workflows | Landing | ChatGPT page works. These can wait. |
| P3 | Maybe later | Amazon / Etsy / FB Ads | 0 | 0 | — | Marketplace | Landing | Prove the eBay rewrite first. Shopify already exists. |
| P3 | Maybe later | Slack / Jupyter / Stack Overflow | 0 | 0 | — | Niche share | Landing | Cute. No query evidence here. |
| P3 | Skip | Generic "what is an image URL" blogs | 1,151+ | 11 | 53 | Learn a concept | Don't write more | Impressions without clicks. AI overviews own this. |

\* No direct hits in this export. Listed because they fit a pattern that already works.

## Already in the sitemap (not gaps)

| Topic | URL |
|---|---|
| GitHub README | `/en/image-hosting-for-github-readme/` |
| Discord | `/en/image-hosting-for-discord/` |
| WhatsApp | `/en/image-to-url-for-whatsapp/` |
| eBay | `/en/image-hosting-for-ebay/` |
| Shopify | `/en/image-hosting-for-shopify/` |
| Imgur / ImgBB / Cloudinary | `/en/*-alternative/` |
| WebP to URL | `/en/webp-to-url/` |
| HEIC | `/en/heic-to-jpg`, `heic-to-png`, `heic-to-pdf` |
| Email signatures | `/en/image-hosting-for-email-signatures/` |
| Base64 | `/en/image-to-base64/` |
| Forums | `/en/image-hosting-for-forums/` |
| ChatGPT | `/en/image-url-for-chatgpt/` |

## Build order

1. Fix wording on `jpg-to-url`, `image-to-link`, `photo-to-url`, and the upload-for-link angle.
2. One strong free-hosting page + better EN Imgur comparison. 301 the old how-to URLs.
3. Then ship Postimages alternative, Telegram landing, and an API docs page that can rank.
4. AI extras (Claude, Midjourney) only after the P0/P1 stuff is live.

## What already works

`png-to-url`, `gif-to-url`, and `webp-to-url` pull solid CTRs in the top 10. ChatGPT and Vercel-style pages do too. Keep that shape: specific job in the URL, tool first, short copy. Don't go back to long explainers.

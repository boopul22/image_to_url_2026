# Client-Side Tools Tracker

All tools below run **100% in the browser**. Zero server cost. Each becomes its own SEO landing page using the brutalist HEIC page template (`src/pages/heic-to-jpg.astro` style).

Status legend: `[ ]` todo · `[~]` in progress · `[x]` done

---

## Tier 1 — Canvas API only (fastest to ship, highest volume)

- [ ] **PNG → JPG** — `canvas.toBlob('image/jpeg')`
- [ ] **JPG → PNG** — Canvas
- [ ] **WebP → PNG** — Canvas (native WebP decode)
- [ ] **WebP → JPG** — Canvas
- [ ] **JPG → WebP** — `canvas.toBlob('image/webp')`
- [ ] **PNG → WebP** — Canvas
- [ ] **Image Compressor** (reduce KB, quality slider) — `browser-image-compression`
- [ ] **Image Resizer** (px / %) — Canvas `drawImage`

## Tier 2 — Small WASM / JS libraries

- [ ] **SVG → PNG** — Canvas + `<img>`
- [ ] **PNG → ICO / Favicon Generator** — `png-to-ico` (multi-size pack)
- [ ] **AVIF → JPG** — `@jsquash/avif`
- [ ] **AVIF → PNG** — `@jsquash/avif`
- [ ] **JPG → AVIF** — `@jsquash/avif`
- [ ] **TIFF → JPG** — `utif.js`
- [ ] **TIFF → PNG** — `utif.js`
- [ ] **BMP → JPG** — Canvas
- [ ] **BMP → PNG** — Canvas
- [ ] **GIF → MP4** — `ffmpeg.wasm`
- [ ] **GIF → WebM** — `ffmpeg.wasm`
- [ ] **Video → GIF** — `ffmpeg.wasm`
- [ ] **PDF → JPG (per page)** — `pdf.js`
- [ ] **PDF → PNG (per page)** — `pdf.js`
- [ ] **Images → PDF** — `pdf-lib`

## Tier 3 — Adjacent high-volume utilities

- [ ] **Background Remover** — `@imgly/background-removal` (ONNX in browser)
- [ ] **Image Cropper** (square / IG / passport presets) — Canvas
- [ ] **Image → Base64** — `FileReader`
- [ ] **Base64 → Image** — `FileReader`
- [ ] **EXIF Viewer** — `exifr`
- [ ] **EXIF Remover** (privacy) — Canvas re-encode
- [ ] **Watermark Adder** (text + image) — Canvas
- [ ] **Image Color Picker** — Canvas `getImageData`
- [ ] **Bulk Resize** — Canvas + JSZip
- [ ] **Bulk Rename** — File API + JSZip

---

## Build order (recommended)

1. Tier 1 batch (8 tools, all Canvas — one weekend)
2. Image Compressor + Resizer polish
3. Favicon Generator (low competition, high intent)
4. PDF ↔ Image set
5. Background Remover (premium differentiator)

## Shared requirements per page

- Brutalist design system (2px charcoal borders, 4px offset shadows, rose-600, Space Grotesk uppercase, no rounded corners)
- Drop zone + batch upload (signed-in users)
- "100% in your browser — files never uploaded" trust badge
- SEO: H1 with exact-match keyword, FAQ schema, HowTo schema, internal links to sibling tools
- Mobile-optimized, no layout shift

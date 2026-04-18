import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Favicon Generator — 100% Browser | All sizes + HTML',
  metaDescription: 'Generate favicons at every required size from one image, plus the HTML snippet. No upload.',
  schemaName: 'Favicon Generator',
  schemaDescription: 'Generate favicons at 16/32/48/180/192/512 sizes from a single source image.',
  badge: 'Browser-only Tool',
  h1Pre: 'Favicon Generator', h1Highlight: 'every size, one drop.',
  intro: 'Drop a square image (512×512 ideal) — get 16, 32, 48, 180, 192, and 512 favicon PNGs plus a ready-to-paste HTML snippet.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop a square image', body: 'A 512×512 PNG or JPG is ideal — the tool scales down from your source.' },
    { title: 'Download each size', body: '16×16, 32×32, 48×48, 180×180, 192×192, 512×512 PNGs appear.' },
    { title: 'Paste the HTML snippet', body: 'Copy the generated <link> tags into your <head>.' },
  ],
  whyTitle: 'Why all these sizes',
  whyItems: [
    { title: '32×32 — browser tabs', body: 'The default every browser picks for tabs.' },
    { title: '180×180 — Apple touch', body: 'Home-screen icon on iOS.' },
    { title: '192×192 / 512×512 — PWA', body: 'Manifest icons for Android install.' },
    { title: '16×16 / 48×48 — legacy', body: 'Cramped bookmark bars and Windows shortcuts.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'What sizes do I need in 2026?', a: '32×32 (tabs), 180×180 (iOS), 192/512 (PWA). 16×16 for bookmarks, 48×48 for Windows.' },
    { q: 'Do I still need .ico?', a: 'No for modern browsers. IE11 still asks for /favicon.ico if you need it.' },
    { q: 'SVG favicon — better?', a: 'Better for flat logos. Worse for photographic logos.' },
    { q: 'Is anything uploaded?', a: 'No. Canvas resizing in your browser.' },
    { q: 'Non-square logo?', a: 'The tool center-crops to square before scaling.' },
    { q: 'Light and dark mode?', a: 'Use a PNG with a colored badge, or SVG with prefers-color-scheme.' },
    { q: 'What HTML do I need?', a: 'The generated snippet wires up <link rel="icon">, Apple touch icon, and manifest.' },
    { q: 'Need a manifest.json?', a: 'Only for PWA install prompt.' },
  ],
  ctaTitle: 'Need favicons hosted?', ctaBody: 'Upload them to our CDN for fast delivery.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'फेविकॉन जनरेटर — 100% ब्राउज़र | सभी आकार + HTML', schemaName: 'फेविकॉन जनरेटर', h1Pre: 'फेविकॉन जनरेटर', h1Highlight: 'हर आकार, एक ड्रॉप।', intro: 'एक वर्गाकार इमेज ड्रॉप करें — 16, 32, 48, 180, 192, 512 favicon PNG और HTML स्निपेट पाएं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Generador de Favicon — Navegador | Gratis', schemaName: 'Generador de Favicon', h1Pre: 'Generador de Favicon', h1Highlight: 'todos los tamaños, un arrastre.', intro: 'Suelta una imagen cuadrada — obtén favicons 16, 32, 48, 180, 192, 512 PNG más el fragmento HTML.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Générateur de Favicon — Navigateur | Gratuit', schemaName: 'Générateur de Favicon', h1Pre: 'Générateur de Favicon', h1Highlight: 'toutes les tailles, un dépôt.', intro: 'Déposez une image carrée — obtenez des favicons 16, 32, 48, 180, 192, 512 PNG plus le snippet HTML.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Favicon Generator — Browser | Kostenlos', schemaName: 'Favicon Generator', h1Pre: 'Favicon Generator', h1Highlight: 'alle Größen, ein Ablegen.', intro: 'Quadratisches Bild ablegen — erhalten Sie Favicons 16, 32, 48, 180, 192, 512 PNG plus HTML-Snippet.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'Favicon ジェネレーター — ブラウザ | 無料', schemaName: 'Favicon ジェネレーター', h1Pre: 'Favicon ジェネレーター', h1Highlight: '全サイズ、ワンドロップ。', intro: '正方形の画像をドロップ — 16、32、48、180、192、512 favicon PNG と HTML スニペットを取得。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });

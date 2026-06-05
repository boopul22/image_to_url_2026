import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'Favicon Generator — 100% Browser | All sizes + HTML',
  metaDescription: 'Generate favicons at every required size (16 to 512) from one source image, plus a ready-to-paste HTML snippet. Free, runs in your browser, no upload.',
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
const es: LandingContent = { ...en, metaTitle: 'Generador de Favicon — Navegador | Gratis', metaDescription: 'Genera favicons en todos los tamaños necesarios (16 a 512) desde una sola imagen, más el fragmento HTML listo para pegar. Gratis, en tu navegador, sin subir nada.', schemaName: 'Generador de Favicon', h1Pre: 'Generador de Favicon', h1Highlight: 'todos los tamaños, un arrastre.', intro: 'Suelta una imagen cuadrada — obtén favicons 16, 32, 48, 180, 192, 512 PNG más el fragmento HTML.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Générateur de Favicon — Navigateur | Gratuit', metaDescription: 'Générez des favicons dans toutes les tailles requises (16 à 512) depuis une seule image, plus le snippet HTML prêt à coller. Gratuit, dans votre navigateur, sans envoi.', schemaName: 'Générateur de Favicon', h1Pre: 'Générateur de Favicon', h1Highlight: 'toutes les tailles, un dépôt.', intro: 'Déposez une image carrée — obtenez des favicons 16, 32, 48, 180, 192, 512 PNG plus le snippet HTML.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'Favicon Generator — Browser | Kostenlos', metaDescription: 'Erzeugen Sie Favicons in allen benötigten Größen (16 bis 512) aus einem Bild, plus das fertige HTML-Snippet zum Einfügen. Kostenlos, im Browser, ohne Upload.', schemaName: 'Favicon Generator', h1Pre: 'Favicon Generator', h1Highlight: 'alle Größen, ein Ablegen.', intro: 'Quadratisches Bild ablegen — erhalten Sie Favicons 16, 32, 48, 180, 192, 512 PNG plus HTML-Snippet.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'Favicon ジェネレーター — ブラウザ | 無料', metaDescription: '1 枚の画像から必要なすべてのサイズ（16〜512）の favicon を生成し、貼り付け用の HTML スニペットも出力。無料、ブラウザ完結、アップロード不要。', schemaName: 'Favicon ジェネレーター', h1Pre: 'Favicon ジェネレーター', h1Highlight: '全サイズ、ワンドロップ。', intro: '正方形の画像をドロップ — 16、32、48、180、192、512 favicon PNG と HTML スニペットを取得。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'Favicon 生成器 — 纯浏览器 | 免费', metaDescription: '从一张图片生成所有必需尺寸（16 至 512）的 favicon，并附带可直接粘贴的 HTML 代码片段。免费、在浏览器中运行、无需上传。', schemaName: 'Favicon 生成器', h1Pre: 'Favicon 生成器', h1Highlight: '所有尺寸，一次拖放。', intro: '拖入一张正方形图片 — 获得 16、32、48、180、192、512 的 favicon PNG 以及 HTML 代码片段。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

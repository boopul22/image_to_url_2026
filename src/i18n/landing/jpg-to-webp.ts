import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'JPG to WebP — Browser-only, 25–35% smaller',
  metaDescription: 'Convert JPG to WebP locally. Faster web pages, better Lighthouse scores. Free, no upload.',
  schemaName: 'JPG to WebP Converter',
  schemaDescription: 'Convert JPG to WebP in your browser for 25–35% size reduction at same visual quality.',
  badge: 'Browser-only Tool',
  h1Pre: 'JPG to WebP', h1Highlight: 'lighter pages, same look.',
  intro: 'Shrink JPGs by 25–35% with WebP for web delivery. Conversion runs in your browser — no upload, no signup.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop JPGs', body: 'Drag .jpg files into the drop zone.' },
    { title: 'Pick quality', body: 'Default 92% matches the original; drop to 75–80% for noticeably smaller files.' },
    { title: 'Download WebP', body: 'Save each output or click Get URL to host it.' },
  ],
  whyTitle: 'Why WebP',
  whyItems: [
    { title: '25–35% smaller than JPG', body: 'At the same visual quality.' },
    { title: 'Better Lighthouse scores', body: 'Google has recommended WebP over JPG for 8+ years.' },
    { title: '98% browser support', body: 'Everywhere modern.' },
    { title: 'Free and local', body: 'No upload, runs in your device.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Why convert JPG to WebP?', a: 'Faster page loads, better Lighthouse scores, lower bandwidth costs.' },
    { q: 'How much smaller?', a: '25–35% smaller than JPG at the same visual quality.' },
    { q: 'Will I lose quality?', a: 'A small amount — you are adding one lossy generation. At quality 92 it is invisible on screen.' },
    { q: 'Do all browsers show WebP?', a: 'Yes, everywhere modern. Safari 14+, Chrome, Edge, Firefox.' },
    { q: 'Are files uploaded?', a: 'No — fully local conversion.' },
    { q: 'Batch limits?', a: 'No limit.' },
    { q: 'EXIF and color profile?', a: 'Stripped. Canvas re-encoding drops all metadata.' },
    { q: 'Folder drop?', a: 'Drag a whole folder works in Chrome/Edge.' },
  ],
  ctaTitle: 'Want a hosted URL?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'JPG से WebP — ब्राउज़र में, 25–35% छोटा', schemaName: 'JPG से WebP कनवर्टर', h1Pre: 'JPG से WebP', h1Highlight: 'हल्के पेज, वही दिखावट।', intro: 'वेब के लिए WebP से JPG को 25–35% छोटा करें।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'JPG a WebP — Navegador, 25–35% más pequeño', schemaName: 'Convertidor JPG a WebP', h1Pre: 'JPG a WebP', h1Highlight: 'páginas más ligeras, mismo aspecto.', intro: 'Reduce JPG un 25–35% con WebP para la web.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'JPG vers WebP — Navigateur, 25–35% plus petit', schemaName: 'Convertisseur JPG vers WebP', h1Pre: 'JPG vers WebP', h1Highlight: 'pages plus légères, même rendu.', intro: 'Réduisez les JPG de 25–35% avec WebP pour le web.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'JPG zu WebP — Browser, 25–35% kleiner', schemaName: 'JPG zu WebP Konverter', h1Pre: 'JPG zu WebP', h1Highlight: 'leichtere Seiten, gleiches Aussehen.', intro: 'Verkleinern Sie JPG um 25–35% mit WebP für das Web.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'JPG から WebP — ブラウザ、25–35% 小さい', schemaName: 'JPG から WebP 変換ツール', h1Pre: 'JPG から WebP', h1Highlight: '軽いページ、同じ見た目。', intro: 'ウェブ用に WebP で JPG を 25–35% 小さく。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });

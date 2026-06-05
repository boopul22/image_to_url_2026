import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'JPG to WebP — Browser-only, 25–35% smaller',
  metaDescription: 'Convert JPG to WebP locally in your browser for files 25–35% smaller at the same quality. Faster web pages, better Lighthouse scores. Free, no signup, no upload.',
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
const es: LandingContent = { ...en, metaTitle: 'JPG a WebP — Navegador, 25–35% más pequeño', metaDescription: 'Convierte JPG a WebP localmente en tu navegador para archivos un 25–35% más pequeños con la misma calidad. Páginas más rápidas, mejor Lighthouse. Gratis, sin subir nada.', schemaName: 'Convertidor JPG a WebP', h1Pre: 'JPG a WebP', h1Highlight: 'páginas más ligeras, mismo aspecto.', intro: 'Reduce JPG un 25–35% con WebP para la web.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'JPG vers WebP — Navigateur, 25–35% plus petit', metaDescription: 'Convertissez JPG en WebP localement dans votre navigateur pour des fichiers 25–35% plus légers à qualité égale. Pages plus rapides, meilleur Lighthouse. Gratuit, sans envoi.', schemaName: 'Convertisseur JPG vers WebP', h1Pre: 'JPG vers WebP', h1Highlight: 'pages plus légères, même rendu.', intro: 'Réduisez les JPG de 25–35% avec WebP pour le web.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'JPG zu WebP — Browser, 25–35% kleiner', metaDescription: 'Konvertieren Sie JPG lokal im Browser zu WebP für 25–35% kleinere Dateien bei gleicher Qualität. Schnellere Seiten, bessere Lighthouse-Werte. Kostenlos, ohne Upload.', schemaName: 'JPG zu WebP Konverter', h1Pre: 'JPG zu WebP', h1Highlight: 'leichtere Seiten, gleiches Aussehen.', intro: 'Verkleinern Sie JPG um 25–35% mit WebP für das Web.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'JPG から WebP — ブラウザ、25–35% 小さい', metaDescription: 'JPG をブラウザ内でローカルに WebP へ変換し、同じ画質でファイルを 25〜35% 小さく。ページ高速化、Lighthouse スコア向上。無料、登録不要、アップロードなし。', schemaName: 'JPG から WebP 変換ツール', h1Pre: 'JPG から WebP', h1Highlight: '軽いページ、同じ見た目。', intro: 'ウェブ用に WebP で JPG を 25–35% 小さく。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'JPG 转 WebP — 浏览器，缩小 25–35%', metaDescription: '在浏览器中本地将 JPG 转换为 WebP，同等画质下文件缩小 25–35%。网页更快，Lighthouse 分数更高。免费、无需注册、无需上传。', schemaName: 'JPG 转 WebP 转换器', h1Pre: 'JPG 转 WebP', h1Highlight: '页面更轻，外观不变。', intro: '用 WebP 将 JPG 缩小 25–35%，适合网页投放。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'PNG to WebP — 100% Browser | Free & Private',
  metaDescription: 'Convert PNG to WebP locally in your browser and shrink files by 60–85% while keeping transparency intact. Free, no signup, no upload — better Lighthouse scores.',
  schemaName: 'PNG to WebP Converter',
  schemaDescription: 'Convert PNG images to WebP in your browser. Smaller files, transparency preserved.',
  badge: 'Browser-only Tool',
  h1Pre: 'PNG to WebP', h1Highlight: 'half the size.',
  intro: 'Shrink PNGs by 60–85% with WebP. Alpha preserved. Conversion runs in your browser — no upload, no signup.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop PNG files', body: 'Drag .png files into the drop zone.' },
    { title: 'Choose a quality', body: '85–92% halves file size with no visible loss.' },
    { title: 'Download WebP', body: 'Save each output to your device.' },
  ],
  whyTitle: 'Why WebP',
  whyItems: [
    { title: '60–85% smaller', body: 'Photos shrink dramatically. Lighthouse rewards WebP over PNG.' },
    { title: 'Transparency works', body: 'WebP has the same alpha channel as PNG.' },
    { title: 'Modern browser support', body: '98%+ coverage in 2026.' },
    { title: 'Better than JPG alternative', body: 'For transparent images, WebP beats PNG for size and JPG for transparency.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'How much smaller is WebP than PNG?', a: 'For photos: 60–85% smaller. For flat graphics: 20–40% smaller.' },
    { q: 'Does transparency survive?', a: 'Yes. WebP supports an 8-bit alpha channel identical to PNG.' },
    { q: 'Is WebP lossy or lossless?', a: 'It can be either. Our converter produces lossy WebP controlled by the quality slider.' },
    { q: 'What browsers support WebP?', a: 'Chrome since 2010, Safari since 14, Firefox 65+. Over 98% coverage.' },
    { q: 'Should I use WebP everywhere?', a: 'For websites: yes. For email or print: stick with JPG/PNG.' },
    { q: 'Are files uploaded?', a: 'No — conversion runs entirely locally via canvas.' },
    { q: 'Batch size limit?', a: 'None. Process dozens of files at once.' },
    { q: 'Does EXIF carry over?', a: 'No. Canvas re-encoding drops all metadata.' },
  ],
  ctaTitle: 'Want a hosted URL?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const es: LandingContent = { ...en, metaTitle: 'PNG a WebP — Navegador | Gratis', metaDescription: 'Convierte PNG a WebP localmente en tu navegador y reduce el tamaño un 60–85% manteniendo la transparencia. Gratis, sin registro, sin subir nada — mejor Lighthouse.', schemaName: 'Convertidor PNG a WebP', h1Pre: 'PNG a WebP', h1Highlight: 'la mitad del tamaño.', intro: 'Reduce PNG un 60–85% con WebP. Alfa preservada. En tu navegador.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'PNG vers WebP — Navigateur | Gratuit', metaDescription: 'Convertissez PNG en WebP localement dans votre navigateur et réduisez la taille de 60–85% en gardant la transparence. Gratuit, sans inscription ni envoi — meilleur Lighthouse.', schemaName: 'Convertisseur PNG vers WebP', h1Pre: 'PNG vers WebP', h1Highlight: 'moitié taille.', intro: 'Réduisez les PNG de 60–85% avec WebP. Alpha préservée. Dans le navigateur.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'PNG zu WebP — Browser | Kostenlos', metaDescription: 'Konvertieren Sie PNG lokal im Browser zu WebP und verkleinern Sie Dateien um 60–85% bei erhaltener Transparenz. Kostenlos, ohne Anmeldung, ohne Upload — bessere Lighthouse-Werte.', schemaName: 'PNG zu WebP Konverter', h1Pre: 'PNG zu WebP', h1Highlight: 'halbe Größe.', intro: 'Verkleinern Sie PNGs um 60–85% mit WebP. Alpha erhalten. Im Browser.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'PNG から WebP — ブラウザ | 無料', metaDescription: 'PNG をブラウザ内でローカルに WebP へ変換し、透明度を保ったままファイルを 60〜85% 縮小。無料、登録不要、アップロードなし、Lighthouse スコア向上。', schemaName: 'PNG から WebP 変換ツール', h1Pre: 'PNG から WebP', h1Highlight: 'サイズ半分。', intro: 'WebP で PNG を 60–85% 小さく。透明度保持。ブラウザで。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'PNG 转 WebP — 纯浏览器 | 免费', metaDescription: '在浏览器中本地将 PNG 转换为 WebP，文件缩小 60–85% 且保留透明度。免费、无需注册、无需上传 — 提升 Lighthouse 分数。', schemaName: 'PNG 转 WebP 转换器', h1Pre: 'PNG 转 WebP', h1Highlight: '尺寸减半。', intro: '用 WebP 将 PNG 缩小 60–85%，保留透明通道。在浏览器中完成。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

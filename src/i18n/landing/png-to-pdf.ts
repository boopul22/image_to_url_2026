import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'PNG to PDF Converter — 100% Browser | Free, No Upload',
  metaDescription: 'Merge PNG screenshots, receipts, and scans into one multi-page PDF, or one PDF per image, in your browser. Free, no upload, no watermark — transparency preserved.',
  schemaName: 'PNG to PDF Converter',
  schemaDescription: 'Merge PNG images into a multi-page PDF entirely in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'PNG to PDF', h1Highlight: 'merge or individual.',
  intro: 'Drop PNG screenshots, receipts, or page scans — get one multi-page PDF or one PDF per image. Runs in your browser.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop PNGs', body: 'Drag one or more PNG files — they appear in order.' },
    { title: 'Choose merge or per-file', body: 'Merge on = single multi-page PDF. Off = one PDF per image.' },
    { title: 'Download the PDF', body: 'Click Download — or Get URL to host it.' },
  ],
  whyTitle: 'Why PNG to PDF',
  whyItems: [
    { title: 'Receipts and scans', body: 'Combine many PNG scans into one PDF for filing.' },
    { title: 'Screenshot reports', body: 'Package a sequence of UI screenshots into a shareable PDF.' },
    { title: 'Print-ready output', body: 'PDF is the universal format for print and email.' },
    { title: 'No software needed', body: 'Works in any browser. Zero installs.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Does this upload my PNGs?', a: 'No. Everything runs in your browser using jsPDF.' },
    { q: 'Can I put multiple PNGs into one PDF?', a: 'Yes — drop several PNGs and they become one multi-page PDF.' },
    { q: 'What page size?', a: 'A4 with a 10 mm margin. Each image auto-fits preserving aspect ratio.' },
    { q: 'Does transparency survive?', a: 'Yes. PDF supports alpha in embedded images.' },
    { q: 'Is the PDF searchable?', a: 'No — the PNGs are embedded as images.' },
    { q: 'Any file-count limit?', a: 'No technical cap. Dozens merge fine.' },
    { q: 'Will the file be large?', a: 'Output size tracks the sum of input PNGs.' },
    { q: 'Offline after first load?', a: 'Yes. jsPDF is cached after first use.' },
  ],
  ctaTitle: 'Host the PDF too?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const es: LandingContent = { ...en, metaTitle: 'Convertidor PNG a PDF — Navegador | Gratis', metaDescription: 'Combina capturas, recibos y escaneos PNG en un PDF de varias páginas, o uno por imagen, en tu navegador. Gratis, sin subir nada, sin marca de agua — transparencia intacta.', schemaName: 'Convertidor PNG a PDF', h1Pre: 'PNG a PDF', h1Highlight: 'fusionar o individual.', intro: 'Suelta capturas o escaneos PNG — obtén un PDF combinado o uno por imagen.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Convertisseur PNG vers PDF — Navigateur | Gratuit', metaDescription: 'Combinez captures, reçus et scans PNG en un PDF multipage, ou un par image, dans votre navigateur. Gratuit, sans envoi, sans filigrane — transparence préservée.', schemaName: 'Convertisseur PNG vers PDF', h1Pre: 'PNG vers PDF', h1Highlight: 'fusionner ou individuel.', intro: 'Déposez captures d\'écran ou scans PNG — obtenez un PDF fusionné ou un par image.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'PNG zu PDF Konverter — Browser | Kostenlos', metaDescription: 'Führen Sie PNG-Screenshots, Belege und Scans im Browser zu einer mehrseitigen PDF oder einer PDF pro Bild zusammen. Kostenlos, ohne Upload, ohne Wasserzeichen, Transparenz bleibt.', schemaName: 'PNG zu PDF Konverter', h1Pre: 'PNG zu PDF', h1Highlight: 'zusammenführen oder einzeln.', intro: 'Legen Sie PNG-Screenshots oder Scans ab — erhalten Sie ein zusammengeführtes PDF oder eines pro Bild.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'PNG から PDF 変換ツール — ブラウザ | 無料', metaDescription: 'PNG のスクリーンショット・領収書・スキャンをブラウザ内で 1 つの複数ページ PDF、または画像ごとの PDF に結合。無料、アップロード不要、透かしなし、透明度保持。', schemaName: 'PNG から PDF 変換ツール', h1Pre: 'PNG から PDF', h1Highlight: '結合または個別。', intro: 'PNG スクリーンショット、領収書、ページスキャンをドロップ — 一つの PDF または画像ごとに。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'PNG 转 PDF 转换器 — 纯浏览器 | 免费', metaDescription: '在浏览器中将 PNG 截图、收据和扫描件合并为一个多页 PDF，或每张图片生成一个 PDF。免费、无需上传、无水印 — 保留透明度。', schemaName: 'PNG 转 PDF 转换器', h1Pre: 'PNG 转 PDF', h1Highlight: '合并或单独。', intro: '拖入 PNG 截图、收据或扫描件 — 获得合并的 PDF 或每张图片一个 PDF。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

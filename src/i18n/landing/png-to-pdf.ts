import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'PNG to PDF Converter — 100% Browser | Free, No Upload',
  metaDescription: 'Merge PNG files into a single PDF in your browser. Free, no upload, no watermark.',
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
const hi: LandingContent = { ...en, metaTitle: 'PNG से PDF कनवर्टर — 100% ब्राउज़र | मुफ्त', schemaName: 'PNG से PDF कनवर्टर', h1Pre: 'PNG से PDF', h1Highlight: 'मर्ज या अलग।', intro: 'PNG स्क्रीनशॉट, रसीदें या पेज स्कैन ड्रॉप करें — एक PDF या प्रत्येक के लिए एक PDF पाएं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'Convertidor PNG a PDF — Navegador | Gratis', schemaName: 'Convertidor PNG a PDF', h1Pre: 'PNG a PDF', h1Highlight: 'fusionar o individual.', intro: 'Suelta capturas o escaneos PNG — obtén un PDF combinado o uno por imagen.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'Convertisseur PNG vers PDF — Navigateur | Gratuit', schemaName: 'Convertisseur PNG vers PDF', h1Pre: 'PNG vers PDF', h1Highlight: 'fusionner ou individuel.', intro: 'Déposez captures d\'écran ou scans PNG — obtenez un PDF fusionné ou un par image.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'PNG zu PDF Konverter — Browser | Kostenlos', schemaName: 'PNG zu PDF Konverter', h1Pre: 'PNG zu PDF', h1Highlight: 'zusammenführen oder einzeln.', intro: 'Legen Sie PNG-Screenshots oder Scans ab — erhalten Sie ein zusammengeführtes PDF oder eines pro Bild.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'PNG から PDF 変換ツール — ブラウザ | 無料', schemaName: 'PNG から PDF 変換ツール', h1Pre: 'PNG から PDF', h1Highlight: '結合または個別。', intro: 'PNG スクリーンショット、領収書、ページスキャンをドロップ — 一つの PDF または画像ごとに。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });

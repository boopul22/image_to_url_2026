import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'HEIC to PDF — 100% Browser | Free iPhone PDF',
  metaDescription: 'Convert iPhone HEIC photos into a multi-page PDF in your browser. Free, private, no upload.',
  schemaName: 'HEIC to PDF Converter',
  schemaDescription: 'Convert and merge iPhone HEIC photos into a single PDF in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'HEIC to PDF', h1Highlight: 'iPhone photos in one file.',
  intro: 'Drop iPhone HEIC photos — they are decoded and merged into a single shareable PDF, all in your browser. No upload.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop HEIC files', body: 'Drag iPhone .heic files straight from Photos, Mail, or a USB transfer.' },
    { title: 'Browser decodes and merges', body: 'WASM decodes each HEIC to JPEG, then jsPDF embeds them in one PDF.' },
    { title: 'Download the PDF', body: 'Save locally or click Get URL to host.' },
  ],
  whyTitle: 'Why HEIC to PDF',
  whyItems: [
    { title: 'Shareable format', body: 'PDF is the universal format for sharing multi-page documents.' },
    { title: 'Print-ready', body: 'Most print shops accept PDF.' },
    { title: 'One file, many photos', body: 'Merge trip photos or receipts into a single attachment.' },
    { title: 'Local and private', body: 'Photos never touch a server.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'How does this handle HEIC?', a: 'A WASM decoder loads on first drop, decodes each photo to JPEG, then jsPDF embeds into a fresh PDF.' },
    { q: 'Is anything uploaded?', a: 'No. Both decoder and PDF writer run in your browser.' },
    { q: 'Why does HEIC need conversion for PDF?', a: 'PDF readers do not natively render HEIC. It has to be transcoded first.' },
    { q: 'Will I lose quality?', a: 'One JPEG generation at 92% quality during decoding. Visually imperceptible.' },
    { q: 'Can I merge dozens of HEICs?', a: 'Yes. Sequential processing keeps memory bounded.' },
    { q: 'Does EXIF carry over?', a: 'No. JPEG re-encoding strips EXIF, GPS, and color profiles.' },
    { q: 'What if a file fails?', a: 'Only well-formed HEIC decodes. Corrupt files are skipped.' },
    { q: 'Mix HEIC and JPG?', a: 'This page accepts HEIC only. For mixed batches, use JPG to PDF.' },
  ],
  ctaTitle: 'Host the PDF?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'HEIC से PDF — 100% ब्राउज़र | iPhone PDF मुफ्त', schemaName: 'HEIC से PDF कनवर्टर', h1Pre: 'HEIC से PDF', h1Highlight: 'iPhone फोटो एक फ़ाइल में।', intro: 'iPhone HEIC फोटो ड्रॉप करें — वे डिकोड और एक साझा करने योग्य PDF में मर्ज होते हैं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'HEIC a PDF — Navegador | PDF de iPhone gratis', schemaName: 'Convertidor HEIC a PDF', h1Pre: 'HEIC a PDF', h1Highlight: 'fotos de iPhone en un archivo.', intro: 'Suelta fotos HEIC de iPhone — se decodifican y combinan en un PDF.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'HEIC vers PDF — Navigateur | PDF iPhone gratuit', schemaName: 'Convertisseur HEIC vers PDF', h1Pre: 'HEIC vers PDF', h1Highlight: 'photos iPhone en un fichier.', intro: 'Déposez vos photos HEIC — elles sont décodées et fusionnées en un PDF.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'HEIC zu PDF — Browser | Kostenloses iPhone PDF', schemaName: 'HEIC zu PDF Konverter', h1Pre: 'HEIC zu PDF', h1Highlight: 'iPhone-Fotos in einer Datei.', intro: 'iPhone HEIC-Fotos ablegen — dekodiert und zu einem PDF zusammengeführt.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'HEIC から PDF — ブラウザ | 無料 iPhone PDF', schemaName: 'HEIC から PDF 変換ツール', h1Pre: 'HEIC から PDF', h1Highlight: 'iPhone 写真を一つに。', intro: 'iPhone HEIC 写真をドロップ — デコードされ、共有可能な PDF に結合。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });

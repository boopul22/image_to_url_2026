import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'JPG to PDF — 100% Browser | Merge Photos, Free',
  metaDescription: 'Merge JPG photos into a single PDF in your browser. Unlimited files, no watermark, no upload.',
  schemaName: 'JPG to PDF Converter',
  schemaDescription: 'Combine JPG photos into a multi-page PDF in your browser.',
  badge: 'Browser-only Tool',
  h1Pre: 'JPG to PDF', h1Highlight: 'merge photos into one file.',
  intro: 'Combine JPG photos, receipts, or page scans into a single PDF. Runs in your browser — no upload, no watermark.',
  howTitle: 'How It Works',
  steps: [
    { title: 'Drop JPGs', body: 'Drag one or more JPGs into the drop zone.' },
    { title: 'Pick merge or separate', body: 'Merge on = single multi-page PDF. Off = one PDF per JPG.' },
    { title: 'Download', body: 'Save the PDF or click Get URL to host.' },
  ],
  whyTitle: 'Why JPG to PDF',
  whyItems: [
    { title: 'Scans and receipts', body: 'Batch into one PDF for record-keeping.' },
    { title: 'Photo albums', body: 'Trip photos packaged as a PDF.' },
    { title: 'No quality loss', body: 'JPG bytes embedded directly — no re-encoding.' },
    { title: 'Email-friendly', body: 'PDFs attach cleanly across all email clients.' },
  ],
  faqTitle: 'FAQ',
  faqs: [
    { q: 'Is this really free and watermark-free?', a: 'Yes. Because conversion happens in your browser, there is no reason to watermark.' },
    { q: 'Does it upload my photos?', a: 'No. Everything is local — jsPDF embeds the JPGs directly.' },
    { q: 'Max file size or count?', a: 'No server cap. RAM is the only limit.' },
    { q: 'Is image quality preserved?', a: 'Fully. JPG bytes embedded without re-encoding.' },
    { q: 'Page size and orientation?', a: 'A4 portrait with 10 mm margin.' },
    { q: 'Can I reorder images?', a: 'The order of your drop is preserved.' },
    { q: 'Append to existing PDF?', a: 'Not directly — build a fresh PDF, then merge with a PDF merger.' },
    { q: 'Browser support?', a: 'Any modern browser with File API and Blob support.' },
  ],
  ctaTitle: 'Host the PDF?', ctaBody: 'Click Get URL after conversion.', ctaButton: 'Try the main uploader',
};
const hi: LandingContent = { ...en, metaTitle: 'JPG से PDF — 100% ब्राउज़र | फोटो मर्ज, मुफ्त', schemaName: 'JPG से PDF कनवर्टर', h1Pre: 'JPG से PDF', h1Highlight: 'फोटो को एक फ़ाइल में मर्ज करें।', intro: 'JPG फोटो, रसीदें, या स्कैन को एक PDF में मिलाएं।', faqTitle: 'अक्सर पूछे जाने वाले प्रश्न' };
const es: LandingContent = { ...en, metaTitle: 'JPG a PDF — Navegador | Fusionar Fotos, Gratis', schemaName: 'Convertidor JPG a PDF', h1Pre: 'JPG a PDF', h1Highlight: 'fusiona fotos en un archivo.', intro: 'Combina fotos, recibos o escaneos JPG en un solo PDF.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'JPG vers PDF — Navigateur | Fusionner Photos, Gratuit', schemaName: 'Convertisseur JPG vers PDF', h1Pre: 'JPG vers PDF', h1Highlight: 'fusionnez photos en un fichier.', intro: 'Combinez photos, reçus, ou scans JPG en un seul PDF.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'JPG zu PDF — Browser | Fotos zusammenführen, kostenlos', schemaName: 'JPG zu PDF Konverter', h1Pre: 'JPG zu PDF', h1Highlight: 'Fotos zu einer Datei zusammenführen.', intro: 'Kombinieren Sie JPG-Fotos, Belege oder Scans zu einer einzigen PDF.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'JPG から PDF — ブラウザ | 写真結合、無料', schemaName: 'JPG から PDF 変換ツール', h1Pre: 'JPG から PDF', h1Highlight: '写真を一つに結合。', intro: 'JPG の写真、領収書、ページスキャンを一つの PDF に結合。', faqTitle: 'よくある質問' };
export const content: LandingContentMap = fillLocales(en, { hi, es, fr, de, ja });

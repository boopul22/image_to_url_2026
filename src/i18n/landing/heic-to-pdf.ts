import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'HEIC to PDF — 100% Browser | Free iPhone PDF',
  metaDescription: 'Convert and merge iPhone HEIC photos into a single multi-page PDF entirely in your browser. Free, private, no upload — your photos never touch a server.',
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
const es: LandingContent = { ...en, metaTitle: 'HEIC a PDF — Navegador | PDF de iPhone gratis', metaDescription: 'Convierte y combina fotos HEIC de iPhone en un solo PDF de varias páginas en tu navegador. Gratis y privado, sin subir nada — tus fotos no tocan ningún servidor.', schemaName: 'Convertidor HEIC a PDF', h1Pre: 'HEIC a PDF', h1Highlight: 'fotos de iPhone en un archivo.', intro: 'Suelta fotos HEIC de iPhone — se decodifican y combinan en un PDF.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'HEIC vers PDF — Navigateur | PDF iPhone gratuit', metaDescription: 'Convertissez et fusionnez vos photos HEIC d\'iPhone en un seul PDF multipage dans votre navigateur. Gratuit et privé, sans envoi — vos photos ne touchent aucun serveur.', schemaName: 'Convertisseur HEIC vers PDF', h1Pre: 'HEIC vers PDF', h1Highlight: 'photos iPhone en un fichier.', intro: 'Déposez vos photos HEIC — elles sont décodées et fusionnées en un PDF.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'HEIC zu PDF — Browser | Kostenloses iPhone PDF', metaDescription: 'Konvertieren und führen Sie iPhone-HEIC-Fotos in Ihrem Browser zu einer einzigen mehrseitigen PDF zusammen. Kostenlos und privat, ohne Upload — kein Server beteiligt.', schemaName: 'HEIC zu PDF Konverter', h1Pre: 'HEIC zu PDF', h1Highlight: 'iPhone-Fotos in einer Datei.', intro: 'iPhone HEIC-Fotos ablegen — dekodiert und zu einem PDF zusammengeführt.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'HEIC から PDF — ブラウザ | 無料 iPhone PDF', metaDescription: 'iPhone の HEIC 写真をブラウザ内で変換し、1 つの複数ページ PDF に結合。無料でプライベート、アップロード不要 — 写真はサーバーに送られません。', schemaName: 'HEIC から PDF 変換ツール', h1Pre: 'HEIC から PDF', h1Highlight: 'iPhone 写真を一つに。', intro: 'iPhone HEIC 写真をドロップ — デコードされ、共有可能な PDF に結合。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'HEIC 转 PDF — 纯浏览器 | 免费 iPhone PDF', metaDescription: '在浏览器中将 iPhone 的 HEIC 照片转换并合并为单个多页 PDF。免费、私密、无需上传 — 照片不会上传到任何服务器。', schemaName: 'HEIC 转 PDF 转换器', h1Pre: 'HEIC 转 PDF', h1Highlight: 'iPhone 照片合为一个文件。', intro: '拖入 iPhone 的 HEIC 照片 — 解码后合并为一个可共享的 PDF。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

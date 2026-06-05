import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';
const en: LandingContent = {
  metaTitle: 'JPG to PDF — 100% Browser | Merge Photos, Free',
  metaDescription: 'Merge JPG photos, receipts, and scans into a single multi-page PDF in your browser. Unlimited files, no watermark, no upload — quality preserved, runs locally.',
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
const es: LandingContent = { ...en, metaTitle: 'JPG a PDF — Navegador | Fusionar Fotos, Gratis', metaDescription: 'Combina fotos, recibos y escaneos JPG en un solo PDF de varias páginas en tu navegador. Archivos ilimitados, sin marca de agua, sin subir nada — calidad intacta.', schemaName: 'Convertidor JPG a PDF', h1Pre: 'JPG a PDF', h1Highlight: 'fusiona fotos en un archivo.', intro: 'Combina fotos, recibos o escaneos JPG en un solo PDF.', faqTitle: 'Preguntas frecuentes' };
const fr: LandingContent = { ...en, metaTitle: 'JPG vers PDF — Navigateur | Fusionner Photos, Gratuit', metaDescription: 'Combinez photos, reçus et scans JPG en un seul PDF multipage dans votre navigateur. Fichiers illimités, sans filigrane, sans envoi — qualité préservée, en local.', schemaName: 'Convertisseur JPG vers PDF', h1Pre: 'JPG vers PDF', h1Highlight: 'fusionnez photos en un fichier.', intro: 'Combinez photos, reçus, ou scans JPG en un seul PDF.', faqTitle: 'Questions fréquentes' };
const de: LandingContent = { ...en, metaTitle: 'JPG zu PDF — Browser | Fotos zusammenführen, kostenlos', metaDescription: 'Führen Sie JPG-Fotos, Belege und Scans im Browser zu einer einzigen mehrseitigen PDF zusammen. Unbegrenzte Dateien, kein Wasserzeichen, ohne Upload — Qualität bleibt.', schemaName: 'JPG zu PDF Konverter', h1Pre: 'JPG zu PDF', h1Highlight: 'Fotos zu einer Datei zusammenführen.', intro: 'Kombinieren Sie JPG-Fotos, Belege oder Scans zu einer einzigen PDF.', faqTitle: 'Häufige Fragen' };
const ja: LandingContent = { ...en, metaTitle: 'JPG から PDF — ブラウザ | 写真結合、無料', metaDescription: 'JPG の写真・領収書・スキャンをブラウザ内で 1 つの複数ページ PDF に結合。ファイル数無制限、透かしなし、アップロード不要、画質そのまま。', schemaName: 'JPG から PDF 変換ツール', h1Pre: 'JPG から PDF', h1Highlight: '写真を一つに結合。', intro: 'JPG の写真、領収書、ページスキャンを一つの PDF に結合。', faqTitle: 'よくある質問' };
const zhHans: LandingContent = { ...en, metaTitle: 'JPG 转 PDF — 纯浏览器 | 合并照片，免费', metaDescription: '在浏览器中将 JPG 照片、收据和扫描件合并为单个多页 PDF。文件数量不限、无水印、无需上传 — 画质不变，完全本地处理。', schemaName: 'JPG 转 PDF 转换器', h1Pre: 'JPG 转 PDF', h1Highlight: '将照片合并为一个文件。', intro: '将 JPG 照片、收据或页面扫描件合并为单个 PDF。', faqTitle: '常见问题' };
export const content: LandingContentMap = fillLocales(en, { es, fr, de, ja, 'zh-Hans': zhHans });

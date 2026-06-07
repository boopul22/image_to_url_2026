import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'TIFF to JPG Converter — Free, In Your Browser',
  metaDescription: 'Convert TIFF to JPG free in your browser. Shrink large .tif and .tiff scans into compact, shareable JPGs. No upload, no signup, no watermark, no software.',
  schemaName: 'TIFF to JPG Converter',
  schemaDescription: 'Convert TIFF images to JPG locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'TIFF to JPG Converter,',
  h1Highlight: 'shrink big scans',
  intro: 'TIFF files are large and many apps and websites will not accept them. Drop your .tif or .tiff here to convert TIFF to JPG and get a smaller, universally supported image, processed right in your browser.',
  howTitle: 'How to convert TIFF to JPG',
  steps: [
    { title: 'Drop TIFF files', body: 'Drag your .tif or .tiff images into the box or click to browse.' },
    { title: 'Pick a quality', body: 'Quality 92 keeps scans readable. Lower it to make the JPG even smaller.' },
    { title: 'Download the JPGs', body: 'Click Download on each result. The conversion happens on your device.' },
  ],
  whyTitle: 'Why convert TIFF to JPG?',
  whyItems: [
    { title: 'Much smaller files', body: 'A TIFF scan can be tens of megabytes. The JPG version is a fraction of the size and far easier to email or upload.' },
    { title: 'Accepted everywhere', body: 'Web forms, chat apps, and social platforms take JPG but usually reject TIFF outright.' },
    { title: 'Good for documents', body: 'Scanned contracts, receipts, and forms become light, shareable JPGs you can send in seconds.' },
    { title: 'Stays on your device', body: 'Files are converted in your browser. Nothing is uploaded unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert TIFF to JPG free and online, with no signup and no watermark. Your files stay on your device.',
  faqs: [
    { q: 'Why convert TIFF to JPG?', a: 'TIFF files are large and not widely supported online. JPG is small and opens everywhere, which makes it the better choice for sharing.' },
    { q: 'Will I lose quality?', a: 'JPG is lossy, so very fine detail softens slightly, but at quality 92 a scan or photo still looks sharp at a tiny fraction of the size.' },
    { q: 'My TIFF will not open. What now?', a: 'TIFF decoding depends on your browser, and Safari handles it most reliably. If a file fails, open it in another browser or save it as JPG from your photo app first.' },
    { q: 'Can I convert multi-page TIFFs?', a: 'The converter reads the first page of a TIFF. For multi-page scans, split them first, then convert each page to JPG.' },
    { q: 'Are my files uploaded?', a: 'No. The conversion runs locally in your browser. Your files only leave the device if you click Get URL to host one.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

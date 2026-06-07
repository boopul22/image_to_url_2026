import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'AVIF to JPG — Free Online Converter, No Upload',
  metaDescription: 'Convert AVIF to JPG free in your browser. Open those next-gen .avif images in any app by turning them into universal JPGs. No upload, no signup, no watermark.',
  schemaName: 'AVIF to JPG Converter',
  schemaDescription: 'Convert AVIF images to JPG locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'AVIF to JPG Converter,',
  h1Highlight: 'open AVIF anywhere',
  intro: 'Downloaded an .avif image that simply will not open? Drop it here to convert AVIF to JPG and get a file every app and device understands. The conversion runs in your browser with nothing uploaded.',
  howTitle: 'How to convert AVIF to JPG',
  steps: [
    { title: 'Drop AVIF files', body: 'Drag your .avif images into the box or click to browse. Several at once is fine.' },
    { title: 'Set the quality', body: 'Quality 92 keeps the detail. Slide it down for a smaller JPG.' },
    { title: 'Download the JPGs', body: 'Click Download on each result. Your files never touch a server.' },
  ],
  whyTitle: 'Why convert AVIF to JPG?',
  whyItems: [
    { title: 'Old apps cannot read AVIF', body: 'AVIF is new, so many editors, office tools, and printers still cannot open it. JPG works in all of them.' },
    { title: 'Easy sharing', body: 'Send a JPG and you never have to explain why the other person cannot view your file.' },
    { title: 'No software to install', body: 'Skip the desktop converter. This runs in any recent browser that already decodes AVIF.' },
    { title: 'Private conversion', body: 'Your images are processed on your device and never uploaded unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert AVIF to JPG free and online, with no signup and no watermark. Your files stay on your device.',
  faqs: [
    { q: 'What is an AVIF file?', a: 'AVIF is a modern image format that makes very small files at high quality. The trade-off is that older apps often cannot open it yet.' },
    { q: 'Does converting to JPG lose quality?', a: 'A little, since JPG is lossy, but at quality 92 the difference is hard to see. The JPG will be larger than the AVIF.' },
    { q: 'My AVIF will not convert. Why?', a: 'AVIF decoding relies on your browser. Use an up-to-date Chrome, Edge, Safari, or Firefox and it will work.' },
    { q: 'Can I convert several at once?', a: 'Yes. Drop a batch of .avif files and each one converts to JPG in turn, right in your browser.' },
    { q: 'Are my files uploaded anywhere?', a: 'No. The conversion is local. Your files only leave the device if you click Get URL to host one.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

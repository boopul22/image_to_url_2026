import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'JPG to JPEG Converter — Free & Instant',
  metaDescription: 'Convert JPG to JPEG free in your browser. Same image, just the .jpeg extension some upload forms require. One click, no upload, no signup, no quality loss.',
  schemaName: 'JPG to JPEG Converter',
  schemaDescription: 'Rename and re-save JPG files with the .jpeg extension locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'JPG to JPEG,',
  h1Highlight: 'the extension some forms want',
  intro: 'Some upload forms only accept .jpeg, not .jpg, even though the two are identical. Drop your .jpg files here to convert JPG to JPEG and download them with the .jpeg extension, all in your browser.',
  howTitle: 'How to convert JPG to JPEG',
  steps: [
    { title: 'Drop JPG files', body: 'Drag your .jpg images into the box or click to select them.' },
    { title: 'Keep the quality', body: 'Leave quality at 92 for a faithful copy, or lower it for a smaller file.' },
    { title: 'Download as JPEG', body: 'Each file saves with the .jpeg extension. The conversion stays on your device.' },
  ],
  whyTitle: 'Why convert JPG to JPEG?',
  whyItems: [
    { title: 'Strict upload rules', body: 'A few portals and job-application forms only allow .jpeg and reject .jpg, even though they are the same format.' },
    { title: 'Matching requirements', body: 'When a spec literally says JPEG, handing over a .jpeg file avoids back-and-forth and rejected submissions.' },
    { title: 'No quality loss worth noticing', body: 'Both extensions point to the same JPEG format, so the switch is essentially a rename.' },
    { title: 'Runs on your device', body: 'Files are processed in your browser. Nothing is uploaded unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert JPG to JPEG free and online, with no signup and no watermark. Your files stay on your device.',
  faqs: [
    { q: 'Is JPG different from JPEG?', a: 'No. They are the same image format. The .jpg spelling exists because old systems limited file extensions to three letters.' },
    { q: 'Why would a form need .jpeg?', a: 'Some uploaders match the extension text exactly and only look for .jpeg. Converting gives them the name they expect.' },
    { q: 'Will my image lose quality?', a: 'Practically none. Since both are JPEG, the conversion is close to a straight rename at quality 92.' },
    { q: 'Can I convert a batch?', a: 'Yes. Drop several .jpg files at once and they all save with the .jpeg extension.' },
    { q: 'Are my files uploaded?', a: 'No. The conversion runs in your browser. Your files only leave the device if you click Get URL to host one.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPEG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

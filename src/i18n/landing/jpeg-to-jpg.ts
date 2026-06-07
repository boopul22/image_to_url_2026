import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'JPEG to JPG — Free Converter, No Upload',
  metaDescription: 'Convert JPEG to JPG free in your browser. JPEG and JPG are the same format with different extensions, so rename and re-save in one click. No upload, no signup.',
  schemaName: 'JPEG to JPG Converter',
  schemaDescription: 'Convert JPEG files to the .jpg extension locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'JPEG to JPG,',
  h1Highlight: 'same image, right extension',
  intro: 'JPEG and JPG are the exact same format, just spelled differently. Drop your .jpeg files here to convert JPEG to JPG and download them with the clean .jpg extension, all in your browser.',
  howTitle: 'How to convert JPEG to JPG',
  steps: [
    { title: 'Drop JPEG files', body: 'Drag your .jpeg images into the box or click to select them. Batches are fine.' },
    { title: 'Pick a quality', body: 'Leave it at 92 to keep the image as-is, or lower it for a smaller file.' },
    { title: 'Download as JPG', body: 'Each file saves with the .jpg extension. The conversion runs on your device.' },
  ],
  whyTitle: 'Why convert JPEG to JPG?',
  whyItems: [
    { title: 'Picky upload forms', body: 'Some sites and apps only show .jpg in their file list and skip over .jpeg, even though they are identical.' },
    { title: 'Tidy file names', body: 'A consistent .jpg extension keeps folders, galleries, and bulk uploads neat and predictable.' },
    { title: 'No quality surprise', body: 'Because both are the same JPEG format, the switch is essentially a rename with no real loss.' },
    { title: 'Stays on your device', body: 'Files are processed in your browser. Nothing is uploaded unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert JPEG to JPG free and online, with no signup and no watermark. Your files never leave your device.',
  faqs: [
    { q: 'Is JPEG different from JPG?', a: 'No. They are the same image format. The short .jpg extension is a leftover from older Windows systems that only allowed three letters.' },
    { q: 'Will I lose quality?', a: 'Hardly any. Both are JPEG, so converting is close to a straight rename. At quality 92 the result matches the original.' },
    { q: 'Can I convert many files at once?', a: 'Yes. Drop a whole batch of .jpeg images and they all save as .jpg one after another.' },
    { q: 'Are my files uploaded anywhere?', a: 'No. Everything happens in your browser. Your files only leave the device if you choose Get URL to host one.' },
    { q: 'Does it remove EXIF data?', a: 'Yes. Re-saving drops EXIF metadata, so location and camera details are not carried into the new file.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

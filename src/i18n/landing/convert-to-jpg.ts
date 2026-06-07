import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'Convert to JPG — Free Online Image to JPG Converter',
  metaDescription: 'Convert any image to JPG free, right in your browser. Drop a PNG, WebP, AVIF, GIF, or BMP and download a clean JPG. No upload, no signup, no watermark.',
  schemaName: 'Convert to JPG',
  schemaDescription: 'Convert PNG, WebP, AVIF, GIF, and BMP images to JPG locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'Convert to JPG,',
  h1Highlight: 'any image, free',
  intro: 'Need a JPG? Drop almost any image and convert to JPG right here. PNG, WebP, AVIF, GIF, and BMP all work, and the whole thing runs in your browser, so nothing is uploaded unless you choose to host it.',
  howTitle: 'How to convert an image to JPG',
  steps: [
    { title: 'Drop your images', body: 'Drag your files into the box or click to pick them. You can select a whole batch at once.' },
    { title: 'Set the quality', body: 'Quality 92 keeps photos crisp. Slide it down if you want a smaller file size.' },
    { title: 'Download the JPGs', body: 'Click Download on each result. Nothing leaves your device during the conversion.' },
  ],
  whyTitle: 'Why convert to JPG?',
  whyItems: [
    { title: 'Works everywhere', body: 'JPG opens on every phone, laptop, printer, and website. It is the safest format to send to someone else.' },
    { title: 'Smaller files', body: 'JPG compression shrinks big photos so they upload faster and fit inside email and form size limits.' },
    { title: 'One tool, many formats', body: 'Instead of hunting for a separate WebP, AVIF, or PNG converter, drop any of them here and get a JPG back.' },
    { title: 'Private by default', body: 'The conversion runs on your device. Your photos are never sent to a server unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert images to JPG free and online, with no signup and no watermark. Your files stay on your device.',
  faqs: [
    { q: 'Which formats can I convert to JPG?', a: 'PNG, WebP, AVIF, GIF, and BMP all convert here. AVIF needs a recent browser, which most people already have.' },
    { q: 'Does converting to JPG lose quality?', a: 'JPG is lossy, so there is a tiny change, but at quality 92 it is hard to spot. Your original file stays untouched.' },
    { q: 'What happens to transparent areas?', a: 'JPG has no transparency, so any clear areas are filled with white. Keep the PNG or use a PNG tool if you need transparency.' },
    { q: 'Are my images uploaded?', a: 'No. Everything runs in your browser. Your files only leave your device if you click Get URL to host one.' },
    { q: 'Can I convert several images at once?', a: 'Yes. Drop a whole folder and each image converts to JPG one after another, right on your device.' },
    { q: 'Does it keep EXIF data?', a: 'No. Re-encoding drops EXIF metadata, which also helps protect your privacy when you share the image.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

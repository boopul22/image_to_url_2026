import type { LandingContent, LandingContentMap } from './types';
import { fillLocales } from './types';

const en: LandingContent = {
  metaTitle: 'JFIF to JPG Converter — Free, No Upload',
  metaDescription: 'Convert JFIF to JPG free in your browser. Turn the .jfif files Windows saved into normal .jpg images you can open and share anywhere. No upload, no signup.',
  schemaName: 'JFIF to JPG Converter',
  schemaDescription: 'Convert JFIF files to standard JPG locally in your browser. No upload required.',
  badge: 'Browser-only Tool',
  h1Pre: 'JFIF to JPG Converter,',
  h1Highlight: 'fix those .jfif files',
  intro: 'Windows sometimes saves photos as .jfif, and plenty of apps refuse to open them. Drop them here to convert JFIF to JPG and get standard .jpg files back, processed entirely in your browser.',
  howTitle: 'How to convert JFIF to JPG',
  steps: [
    { title: 'Drop JFIF files', body: 'Drag your .jfif images into the box or click to browse for them.' },
    { title: 'Choose a quality', body: 'Quality 92 keeps the photo sharp. Lower it if you want a lighter file.' },
    { title: 'Download as JPG', body: 'Each image saves as a normal .jpg. Nothing is sent to a server.' },
  ],
  whyTitle: 'Why convert JFIF to JPG?',
  whyItems: [
    { title: 'Apps reject .jfif', body: 'Older editors, some social uploaders, and a few print services do not recognize the .jfif extension at all.' },
    { title: 'Same image, usable name', body: 'JFIF is really just JPEG with an odd extension, so you get the same picture under a name everything accepts.' },
    { title: 'No install needed', body: 'You do not need Photoshop or a desktop app. The converter runs in any modern browser.' },
    { title: 'Files stay private', body: 'Conversion happens on your device. Your photos are never uploaded unless you click Get URL.' },
  ],
  faqTitle: 'FAQ',
  faqIntro: 'Convert JFIF to JPG free and online, with no signup and no watermark. Your files stay on your device.',
  faqs: [
    { q: 'Why did my photo save as .jfif?', a: 'Some Windows and browser combinations save downloaded JPEGs with the .jfif extension. The image data is normal JPEG underneath.' },
    { q: 'Is JFIF the same as JPG?', a: 'Almost. JFIF is the standard JPEG file format. Converting to .jpg gives you the same picture with an extension every app understands.' },
    { q: 'Will the quality change?', a: 'Barely. It is a JPEG either way, so at quality 92 the converted file looks the same as the original.' },
    { q: 'Can I convert several at once?', a: 'Yes. Drop a batch of .jfif files and they convert to .jpg one after another, right in your browser.' },
    { q: 'Are my files uploaded?', a: 'No. The whole process runs locally. Your files only leave the device if you click Get URL to host one.' },
  ],
  ctaTitle: 'Want a permanent URL?',
  ctaBody: 'After converting, click Get URL to host any JPG on our CDN. Free, no signup.',
  ctaButton: 'Try the main uploader',
};

export const content: LandingContentMap = fillLocales(en);

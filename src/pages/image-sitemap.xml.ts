// Image sitemap — lists marketing/hero images on tool + converter pages so
// Google Images can index them. Does NOT include user-uploaded content under
// /uploads (blocked by robots.txt).

export const prerender = false;

import type { APIContext } from 'astro';

const SITE = 'https://imagetourl.cloud';

type ImgEntry = {
  page: string;            // page URL where the image is embedded
  image: string;           // absolute image URL
  caption: string;
  title: string;
};

const IMAGES: ImgEntry[] = [
  { page: '/', image: SITE + '/og-default.png', caption: 'ImageToURL upload interface', title: 'Free image hosting with permanent URLs' },
  { page: '/heic-to-jpg', image: SITE + '/og-default.png', caption: 'HEIC to JPG converter', title: 'Convert iPhone HEIC to JPG in your browser' },
  { page: '/heic-to-png', image: SITE + '/og-default.png', caption: 'HEIC to PNG converter', title: 'HEIC to PNG lossless converter' },
  { page: '/heic-to-pdf', image: SITE + '/og-default.png', caption: 'HEIC to PDF converter', title: 'Merge HEIC photos into PDF' },
  { page: '/png-to-jpg', image: SITE + '/og-default.png', caption: 'PNG to JPG converter', title: 'Convert PNG to JPG in browser' },
  { page: '/jpg-to-png', image: SITE + '/og-default.png', caption: 'JPG to PNG converter', title: 'Convert JPG to PNG lossless' },
  { page: '/webp-to-jpg', image: SITE + '/og-default.png', caption: 'WebP to JPG converter', title: 'Convert WebP to JPG browser-only' },
  { page: '/webp-to-png', image: SITE + '/og-default.png', caption: 'WebP to PNG converter', title: 'WebP to PNG preserves transparency' },
  { page: '/png-to-webp', image: SITE + '/og-default.png', caption: 'PNG to WebP converter', title: 'PNG to WebP for smaller files' },
  { page: '/jpg-to-webp', image: SITE + '/og-default.png', caption: 'JPG to WebP converter', title: 'JPG to WebP for faster pages' },
  { page: '/png-to-pdf', image: SITE + '/og-default.png', caption: 'PNG to PDF converter', title: 'PNG to PDF merge in browser' },
  { page: '/jpg-to-pdf', image: SITE + '/og-default.png', caption: 'JPG to PDF converter', title: 'JPG to PDF no watermark' },
  { page: '/image-compressor', image: SITE + '/og-default.png', caption: 'Image compressor', title: 'Compress images locally' },
  { page: '/image-resizer', image: SITE + '/og-default.png', caption: 'Image resizer', title: 'Resize images by pixels or percent' },
  { page: '/favicon-generator', image: SITE + '/og-default.png', caption: 'Favicon generator', title: 'Generate favicons at every size' },
  { page: '/image-to-base64', image: SITE + '/og-default.png', caption: 'Image to base64', title: 'Encode image as data URI' },
  { page: '/base64-to-image', image: SITE + '/og-default.png', caption: 'Base64 to image', title: 'Decode base64 data URI to image' },
];

function escapeXml(str: string): string {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

export async function GET(_ctx: APIContext): Promise<Response> {
  // Group by page URL — Google allows up to 1000 <image:image> per <url>
  const byPage = new Map<string, ImgEntry[]>();
  for (const img of IMAGES) {
    const arr = byPage.get(img.page) || [];
    arr.push(img);
    byPage.set(img.page, arr);
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  for (const [page, imgs] of byPage) {
    xml += `  <url>\n    <loc>${escapeXml(SITE + page)}</loc>\n`;
    for (const img of imgs) {
      xml += `    <image:image>\n`;
      xml += `      <image:loc>${escapeXml(img.image)}</image:loc>\n`;
      xml += `      <image:caption>${escapeXml(img.caption)}</image:caption>\n`;
      xml += `      <image:title>${escapeXml(img.title)}</image:title>\n`;
      xml += `    </image:image>\n`;
    }
    xml += `  </url>\n`;
  }
  xml += '</urlset>\n';

  return new Response(xml, { status: 200, headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
}

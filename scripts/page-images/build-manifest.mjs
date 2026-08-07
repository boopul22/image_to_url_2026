#!/usr/bin/env node
/**
 * Build scripts/page-images/manifest.json + src/data/page-images-meta.json
 * for every SEO page id (landings, EN platform/compare/API, guides).
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');

const LANDING_KEYS = [
  'gif-to-url', 'heic-to-jpg', 'png-to-url', 'jpg-to-url', 'webp-to-url', 'photo-to-url',
  'screenshot-to-url', 'image-url-generator', 'image-to-url', 'image-to-url-converter',
  'image-to-link', 'image-embed-code-generator', 'image-url-for-chatgpt',
  'image-to-url-for-whatsapp', 'image-to-url-for-html', 'image-to-url-vercel',
  'image-hosting-for-wordpress', 'image-hosting-for-discord', 'image-hosting-for-ebay',
  'image-hosting-for-email-signatures', 'image-hosting-for-forums',
  'image-hosting-for-github-readme', 'image-hosting-for-google-forms',
  'image-hosting-for-google-sheets', 'image-hosting-for-newsletters',
  'image-hosting-for-notion', 'image-hosting-for-shopify', 'free-image-hosting',
  'free-image-cdn', 'ai-image-hosting', 'anonymous-image-upload', 'bulk-image-upload',
  'direct-image-link', 'permanent-image-hosting', 'imgbb-alternative', 'imgur-alternative',
  'cloudinary-alternative', 'png-to-jpg', 'jpg-to-png', 'convert-to-jpg', 'jpeg-to-jpg',
  'jfif-to-jpg', 'jpg-to-jpeg', 'avif-to-jpg', 'tiff-to-jpg', 'webp-to-jpg', 'webp-to-png',
  'png-to-webp', 'jpg-to-webp', 'png-to-pdf', 'jpg-to-pdf', 'heic-to-png', 'heic-to-pdf',
  'image-compressor', 'image-resizer', 'image-to-base64', 'base64-to-image',
  'favicon-generator', 'about', 'contact', 'content-guidelines', 'mp3-to-url',
];

const EN_PLATFORM = [
  'image-hosting-for-reddit', 'image-hosting-for-twitter', 'image-hosting-for-instagram',
  'image-hosting-for-pinterest', 'image-hosting-for-linkedin', 'image-hosting-for-substack',
  'image-hosting-for-medium', 'image-hosting-for-ghost', 'image-hosting-for-webflow',
  'image-hosting-for-squarespace', 'image-hosting-for-wix', 'image-hosting-for-framer',
  'image-hosting-for-stack-overflow', 'image-hosting-for-markdown', 'image-hosting-for-nextjs',
  'image-hosting-for-jira',
];

const EN_COMPARE = [
  'postimages-alternative', 'google-photos-direct-link', 'dropbox-direct-image-link',
  'imagetourl-vs-imgur', 'imagetourl-vs-imgbb', 'imagetourl-vs-cloudinary', 'imgur-vs-imgbb',
];

const EN_API = [
  'image-upload-api', 'image-hosting-rest-api', 'image-hosting-api-python',
  'image-hosting-api-nodejs', 'image-hosting-api-php', 'image-hosting-api-curl',
  'image-upload-zapier', 'image-upload-make', 'image-upload-n8n',
];

const EN_GEO = [
  'what-is-image-hotlinking', 'how-long-does-imagetourl-store-images',
];

const GUIDES = [
  'jpg-vs-png-vs-webp-vs-avif', 'image-lcp-optimization',
  'image-optimization-core-web-vitals', 'responsive-images-cheatsheet',
  'what-exif-leaks', 'embed-images-in-notion', 'why-reddit-strips-exif',
];

function titleCase(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function familyFor(id) {
  if (id.startsWith('guides/')) return 'guide-explain';
  if (EN_API.includes(id) || id.includes('api') || id.includes('zapier') || id.includes('n8n') || id.includes('make')) return 'api-dev';
  if (EN_COMPARE.includes(id) || id.includes('alternative') || id.includes('-vs-')) return 'comparison';
  if (
    id.startsWith('image-hosting-for-') ||
    id.includes('for-whatsapp') ||
    id.includes('for-chatgpt') ||
    id.includes('for-html') ||
    id.includes('for-vercel') ||
    id.includes('email-signatures') ||
    id.includes('newsletters')
  ) return 'platform-use';
  if (
    id.includes('hosting') || id.includes('cdn') || id.includes('anonymous') ||
    id.includes('bulk') || id.includes('permanent') || id.includes('direct-image') ||
    id.includes('ai-image')
  ) return 'hosting-feature';
  if (id === 'about' || id === 'contact' || id === 'content-guidelines' || EN_GEO.includes(id)) return 'guide-explain';
  return 'tool-flow';
}

function keywordFor(id) {
  const clean = id.replace(/^guides\//, '');
  if (clean === 'jpg-to-url') return 'JPG to link';
  if (clean === 'image-to-link') return 'make image into a link';
  if (clean === 'photo-to-url') return 'photo to URL';
  if (clean === 'free-image-hosting') return 'free image hosting';
  if (clean === 'imgur-alternative') return 'Imgur alternative';
  return titleCase(clean);
}

function fileLabelFor(id) {
  if (id.includes('png')) return 'logo.png';
  if (id.includes('gif')) return 'clip.gif';
  if (id.includes('webp')) return 'shot.webp';
  if (id.includes('heic')) return 'iphone.heic';
  if (id.includes('pdf')) return 'scan.pdf';
  if (id.includes('mp3')) return 'clip.mp3';
  if (id.includes('jpg') || id.includes('jpeg') || id.includes('photo') || id.includes('screenshot')) return 'photo.jpg';
  return 'image.png';
}

function extFor(id) {
  const m = id.match(/\b(png|jpg|jpeg|gif|webp|heic|pdf|svg|mp3)\b/);
  return m ? (m[1] === 'jpeg' ? 'jpg' : m[1]) : 'png';
}

function buildEntry(id) {
  const family = familyFor(id);
  const primaryKeyword = keywordFor(id);
  const fileLabel = fileLabelFor(id);
  const ext = extFor(id);
  const pretty = titleCase(id.replace(/^guides\//, ''));
  const platform = pretty.replace(/^Image Hosting For /, '');

  const heroAlt = `${primaryKeyword} illustrated as a clear on-page diagram for imagetourl.cloud`;
  const bodyAlt = `${primaryKeyword} example showing a direct image URL used in context`;
  const heroCaption = `${pretty}: visual overview of how the flow works on ImageToURL.`;
  const bodyCaption = `A practical ${primaryKeyword} example you can copy for sharing and embeds.`;

  /** @type {Record<string, string>} */
  let heroParams = {};
  /** @type {Record<string, string>} */
  let bodyParams = {};

  if (family === 'tool-flow') {
    heroParams = {
      eyebrow: 'Tool flow',
      title: `${pretty} in three steps`,
      step1Title: 'Upload',
      step1Body: 'Drop your file in the browser. No account wall.',
      step2Title: 'Host on CDN',
      step2Body: 'We store the original on a global CDN.',
      step3Title: 'Copy the link',
      step3Body: `Get a direct .${ext} URL that embeds inline.`,
      fileLabel,
      primaryKeyword,
    };
    bodyParams = {
      title: `Direct ${ext.toUpperCase()} link`,
      subtitle: 'The URL ends in the real file extension so chats and forums show the picture.',
      urlExample: `https://imagetourl.cloud/abc123.${ext}`,
      previewLabel: fileLabel,
      chatLine: 'Paste the link in Discord or a forum…',
      embedLabel: 'Inline preview',
    };
  } else if (family === 'hosting-feature') {
    heroParams = {
      eyebrow: 'Hosting',
      title: pretty,
      badge: 'No signup to start',
      dropTitle: 'Drop an image, get a URL',
      dropSub: 'JPG, PNG, WebP, GIF, SVG up to 50MB',
      primaryKeyword,
    };
    bodyParams = {
      leftTag: 'Guest',
      leftTitle: 'Temporary link',
      leftBody: 'Anonymous uploads stay live for at least a couple of weeks.',
      leftItem1: 'No account required',
      leftItem2: 'Cleared on monthly cleanup',
      rightTag: 'Signed in',
      rightTitle: 'Keep forever',
      rightBody: 'Free account can mark files permanent.',
      rightItem1: 'No credit card',
      rightItem2: 'Best for signatures and sites',
    };
  } else if (family === 'platform-use') {
    heroParams = {
      eyebrow: `For ${platform}`,
      title: `Host once, paste into ${platform}`,
      windowTitle: platform,
      sideText: `Upload on ImageToURL, then paste the direct URL into ${platform}.`,
      mainLabel: 'Image embed',
      urlExample: `https://imagetourl.cloud/abc123.${ext}`,
    };
    bodyParams = {
      title: `Three steps for ${platform}`,
      s1: 'Upload',
      s1b: 'Drop the image on imagetourl.cloud.',
      s2: 'Copy URL',
      s2b: 'Grab the direct https link.',
      s3: 'Paste',
      s3b: `Use it in ${platform} where an image URL is expected.`,
    };
  } else if (family === 'comparison') {
    const other = pretty.includes('Imgur') ? 'Imgur' : pretty.includes('ImgBB') ? 'ImgBB' : pretty.includes('Cloudinary') ? 'Cloudinary' : 'Other host';
    heroParams = {
      eyebrow: 'Compare',
      title: pretty,
      colA: 'ImageToURL',
      colB: other,
      r1l: 'No signup',
      r1a: 'Yes',
      r1b: other === 'Imgur' ? 'No (since 2023)' : 'Varies',
      r2l: 'Direct hotlink',
      r2a: 'Yes',
      r2b: 'Often gallery page',
      r3l: 'Full quality',
      r3a: 'Yes',
      r3b: 'Sometimes resized',
      r4l: 'Max size',
      r4a: '50 MB',
      r4b: 'Varies',
    };
    bodyParams = {
      leftTag: other,
      leftTitle: 'Account or gallery friction',
      leftBody: `${other} may require signup or wrap the file in a viewer page.`,
      rightTag: 'ImageToURL',
      rightTitle: 'Direct file URL',
      rightBody: 'Upload once and paste a link that ends in the image itself.',
    };
  } else if (family === 'api-dev') {
    heroParams = {
      eyebrow: 'API',
      title: pretty,
      code: `$ curl -F file=@${fileLabel} https://imagetourl.cloud/api/upload\n→ { "url": "https://imagetourl.cloud/abc123.${ext}" }`,
    };
    bodyParams = {
      title: 'Example response',
      code: `{\n  "ok": true,\n  "url": "https://imagetourl.cloud/abc123.${ext}",\n  "id": "abc123"\n}`,
    };
  } else {
    // guide-explain
    heroParams = {
      eyebrow: 'Guide',
      title: pretty,
      n1: 'Concept',
      n1b: 'What the topic means in practice.',
      n2: 'Trade-offs',
      n2b: 'When to choose one approach over another.',
      n3: 'Action',
      n3b: 'How ImageToURL fits the workflow.',
      footer: 'imagetourl.cloud guides',
    };
    bodyParams = {
      title: 'Checklist',
      i1: `Keep ${primaryKeyword} concrete and testable.`,
      i2: 'Prefer direct image URLs over gallery pages.',
      i3: 'Watch file size and format for the destination.',
      i4: 'Sign in when the link needs to last.',
    };
  }

  return {
    id,
    family,
    primaryKeyword,
    hero: {
      template: `${family}-hero.html`,
      params: heroParams,
      alt: heroAlt,
      caption: heroCaption,
    },
    body: {
      template: `${family}-body.html`,
      params: bodyParams,
      alt: bodyAlt,
      caption: bodyCaption,
    },
  };
}

const allIds = [
  ...LANDING_KEYS,
  ...EN_PLATFORM,
  ...EN_COMPARE,
  ...EN_API,
  ...EN_GEO,
  ...GUIDES.map(g => `guides/${g}`),
];

const manifest = { version: 1, width: 1200, height: 675, pages: allIds.map(buildEntry) };
const meta = {};
for (const p of manifest.pages) {
  meta[p.id] = {
    hero: { alt: p.hero.alt, caption: p.hero.caption },
    body: { alt: p.body.alt, caption: p.body.caption },
  };
}

const manifestPath = join(root, 'scripts/page-images/manifest.json');
const metaPath = join(root, 'src/data/page-images-meta.json');
mkdirSync(dirname(manifestPath), { recursive: true });
mkdirSync(dirname(metaPath), { recursive: true });
writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
writeFileSync(metaPath, JSON.stringify(meta, null, 2));
console.log(`Wrote ${manifest.pages.length} pages → manifest + meta`);

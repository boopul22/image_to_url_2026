#!/usr/bin/env node
/**
 * Render HTML card templates → WebP under public/page-images/<id>/{hero,body}.webp
 *
 * Usage:
 *   node scripts/render-page-images.mjs
 *   node scripts/render-page-images.mjs --key=jpg-to-url
 *   node scripts/render-page-images.mjs --only=wave0
 */
import { readFileSync, mkdirSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const templatesDir = join(root, 'scripts/page-images/templates');
const manifestPath = join(root, 'scripts/page-images/manifest.json');
const outRoot = join(root, 'public/page-images');

const WAVE0 = new Set([
  'png-to-url', 'jpg-to-url', 'gif-to-url', 'webp-to-url', 'photo-to-url',
  'image-to-link', 'image-to-url-converter', 'free-image-hosting',
  'imgur-alternative', 'image-hosting-for-email-signatures',
]);

function fill(html, params) {
  return html.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    const v = params[key];
    return v == null ? '' : String(v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  });
}

function parseArgs(argv) {
  const opts = { key: null, only: null };
  for (const a of argv) {
    if (a.startsWith('--key=')) opts.key = a.slice(6);
    if (a.startsWith('--only=')) opts.only = a.slice(7);
  }
  return opts;
}

async function renderOne(page, slot, outDir, width, height) {
  const tplPath = join(templatesDir, slot.template);
  if (!existsSync(tplPath)) throw new Error(`Missing template ${slot.template}`);
  const html = fill(readFileSync(tplPath, 'utf8'), slot.params || {});
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: 'load' });
  const card = page.locator('#card');
  const png = await card.screenshot({ type: 'png' });
  const webp = await sharp(png).webp({ quality: 82 }).toBuffer();
  return webp;
}

async function main() {
  if (!existsSync(manifestPath)) {
    console.error('Missing manifest. Run: node scripts/page-images/build-manifest.mjs');
    process.exit(1);
  }
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const { key, only } = parseArgs(process.argv.slice(2));
  let pages = manifest.pages;
  if (key) pages = pages.filter(p => p.id === key);
  if (only === 'wave0') pages = pages.filter(p => WAVE0.has(p.id));

  if (!pages.length) {
    console.error('No pages matched.');
    process.exit(1);
  }

  const width = manifest.width || 1200;
  const height = manifest.height || 675;
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ deviceScaleFactor: 2 });

  let ok = 0;
  for (const entry of pages) {
    const outDir = join(outRoot, entry.id);
    mkdirSync(outDir, { recursive: true });
    try {
      const hero = await renderOne(page, entry.hero, outDir, width, height);
      const body = await renderOne(page, entry.body, outDir, width, height);
      writeFileSync(join(outDir, 'hero.webp'), hero);
      writeFileSync(join(outDir, 'body.webp'), body);
      ok += 1;
      console.log(`✓ ${entry.id}`);
    } catch (err) {
      console.error(`✗ ${entry.id}:`, err.message || err);
    }
  }

  await browser.close();
  console.log(`Done: ${ok}/${pages.length}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

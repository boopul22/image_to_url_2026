import { SLUGS, PAGE_KEYS } from '../src/i18n/landing/slugs.js';
import { locales } from '../src/i18n/config.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const errors = [];

// 1. Every PageKey has every locale slug
for (const key of PAGE_KEYS) {
  for (const loc of locales) {
    if (!SLUGS[key][loc]) errors.push(`missing slug: ${key} / ${loc}`);
  }
}

// 2. Every PageKey has a content module
for (const key of PAGE_KEYS) {
  const p = path.join('src/i18n/landing', key + '.ts');
  try { await fs.access(p); } catch { errors.push(`missing content module: ${p}`); }
}

// 3. Every content module has every locale key
for (const key of PAGE_KEYS) {
  const p = '../src/i18n/landing/' + key + '.ts';
  try {
    const mod = await import(p);
    for (const loc of locales) {
      if (!mod.content[loc]) errors.push(`missing locale in content: ${key} / ${loc}`);
    }
  } catch (e) {
    errors.push(`failed to import ${p}: ${e.message}`);
  }
}

// 4. No duplicate slugs within a locale
for (const loc of locales) {
  const seen = new Map();
  for (const key of PAGE_KEYS) {
    const slug = SLUGS[key][loc];
    if (seen.has(slug)) errors.push(`duplicate slug in ${loc}: ${slug} shared by ${seen.get(slug)} + ${key}`);
    seen.set(slug, key);
  }
}

// 5. Slug format rules
for (const key of PAGE_KEYS) {
  for (const loc of locales) {
    const slug = SLUGS[key][loc];
    if (!slug) continue;
    if (slug.startsWith('/') || slug.endsWith('/')) errors.push(`slug has slash: ${key} / ${loc}`);
    if (slug !== slug.toLowerCase() && !/[\u0900-\u2FFF\u4E00-\u9FFF\u3040-\u309F\u30A0-\u30FF]/.test(slug)) {
      errors.push(`non-lowercase latin slug: ${key} / ${loc} = ${slug}`);
    }
    if (/\s/.test(slug)) errors.push(`slug has whitespace: ${key} / ${loc}`);
  }
}

if (errors.length) {
  console.log(errors.join('\n'));
  process.exit(1);
}
console.log('i18n OK: ' + PAGE_KEYS.length + ' pages × ' + locales.length + ' locales');

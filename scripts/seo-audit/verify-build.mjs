#!/usr/bin/env node

import { gunzipSync } from 'node:zlib';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.argv[2] || 'dist/client';
const site = 'https://imagetourl.cloud';
const locales = new Set(['en', 'es', 'fr', 'de', 'ja', 'zh-Hans']);

function filesUnder(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) out.push(...filesUnder(path));
    else if (name.endsWith('.html')) out.push(path);
  }
  return out;
}

function readHtml(path) {
  const bytes = readFileSync(path);
  return bytes[0] === 0x1f && bytes[1] === 0x8b
    ? gunzipSync(bytes).toString('utf8')
    : bytes.toString('utf8');
}

function attr(tag, name) {
  return tag.match(new RegExp(`\\b${name}=(["'])(.*?)\\1`, 'i'))?.[2] ?? '';
}

function one(html, re) {
  return decodeHtmlText(html.match(re)?.[1]?.replace(/<[^>]*>/g, '').trim() ?? '');
}

function decodeHtmlText(value) {
  return value
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#(?:39|x27);/gi, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(Number.parseInt(n, 16)));
}

function pathFor(file) {
  const rel = relative(root, file).split(sep).join('/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'/index.html'.length)}/`;
  return `/${rel.replace(/\.html$/, '')}`;
}

const pages = filesUnder(root).map((file) => {
  const html = readHtml(file);
  const path = pathFor(file);
  const title = one(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  const descriptionTag = html.match(/<meta\b[^>]*\bname=["']description["'][^>]*>/i)?.[0] ?? '';
  const canonicalTag = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/i)?.[0] ?? '';
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) => decodeHtmlText(m[1].replace(/<[^>]*>/g, '').trim()));
  const h2s = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => decodeHtmlText(m[1].replace(/<[^>]*>/g, '').trim()));
  const headingLevels = [...html.matchAll(/<h([1-6])\b/gi)].map((m) => Number(m[1]));
  const alternates = [...html.matchAll(/<link\b[^>]*\brel=["']alternate["'][^>]*>/gi)]
    .map((m) => ({ hreflang: attr(m[0], 'hreflang'), href: attr(m[0], 'href') }))
    .filter((x) => x.hreflang);
  const locale = path.split('/')[1];
  return {
    file,
    path,
    title,
    description: decodeHtmlText(attr(descriptionTag, 'content')),
    canonical: attr(canonicalTag, 'href'),
    lang: attr(htmlTag, 'lang'),
    h1: h1s[0] ?? '',
    h1s,
    h2s,
    headingLevels,
    alternates,
    pathLocale: locales.has(locale) ? locale : null,
  };
});

const indexable = pages.filter((p) => p.path !== '/404');
const issues = {
  missingTitle: indexable.filter((p) => !p.title),
  shortTitle: indexable.filter((p) => p.title && p.title.length < 30),
  longTitle: indexable.filter((p) => p.title.length > 60),
  missingDescription: indexable.filter((p) => !p.description),
  shortDescription: indexable.filter((p) => p.description && p.description.length < 70),
  longDescription: indexable.filter((p) => p.description.length > 155),
  h1Count: indexable.filter((p) => p.h1s.length !== 1),
  longH1: indexable.filter((p) => p.h1s.some((h) => h.length > 70)),
  longH2: indexable.filter((p) => p.h2s.some((h) => h.length > 70)),
  h1NotFirst: indexable.filter((p) => p.headingLevels.length && p.headingLevels[0] !== 1),
  missingCanonical: indexable.filter((p) => !p.canonical),
  canonicalMismatch: indexable.filter((p) => p.canonical && p.canonical !== new URL(p.path, site).href),
  langMismatch: indexable.filter((p) => p.pathLocale && p.lang !== p.pathLocale),
  missingHreflangSelf: indexable.filter((p) => p.alternates.length && !p.alternates.some((a) => {
    try { return new URL(a.href).href === new URL(p.canonical).href; } catch { return a.href === p.canonical; }
  })),
};

function duplicateGroups(field) {
  const values = new Map();
  for (const page of indexable) {
    const value = page[field];
    if (!value) continue;
    const group = values.get(value) ?? [];
    group.push(page.path);
    values.set(value, group);
  }
  return [...values.entries()].filter(([, paths]) => paths.length > 1);
}

const duplicates = {
  title: duplicateGroups('title'),
  description: duplicateGroups('description'),
  h1: duplicateGroups('h1'),
};

console.log(`Verified ${indexable.length} prerendered HTML pages in ${root}`);
for (const [name, rows] of Object.entries(issues)) {
  console.log(`${name}: ${rows.length}`);
  for (const page of rows.slice(0, 8)) console.log(`  ${page.path}`);
}
for (const [name, groups] of Object.entries(duplicates)) {
  const affected = groups.reduce((sum, [, paths]) => sum + paths.length, 0);
  console.log(`duplicate${name[0].toUpperCase()}${name.slice(1)}: ${affected} URLs in ${groups.length} groups`);
  for (const [value, paths] of groups.slice(0, 5)) {
    console.log(`  ${JSON.stringify(value)} -> ${paths.join(', ')}`);
  }
}

const hardFailures = [
  ...issues.missingTitle,
  ...issues.missingDescription,
  ...issues.h1Count,
  ...issues.missingCanonical,
  ...issues.canonicalMismatch,
  ...issues.langMismatch,
  ...issues.missingHreflangSelf,
];
if (hardFailures.length) process.exitCode = 1;

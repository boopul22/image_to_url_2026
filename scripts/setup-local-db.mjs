#!/usr/bin/env node
// Create the schema in the LOCAL miniflare D1 so `npm run dev` (credential-free,
// remoteBindings off) can render blog/CMS pages with empty tables instead of
// throwing "no such table" 500s.
//
// `wrangler d1 execute --local` operates only on the SQLite file under
// .wrangler/state/v3 — the same store the Astro Cloudflare adapter reads in dev.
// It NEVER contacts Cloudflare, so no `wrangler login` / no credentials needed.
//
// A content contributor runs this once: `npm run setup` (alias `npm run setup:db`).
// Safe to re-run — base schema uses CREATE TABLE IF NOT EXISTS; migrations that
// re-add an existing column simply fail that one file and are skipped (the
// columns already exist from the first run), which is harmless.

import { readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DB_NAME = 'imagetourl-db'; // d1_databases[].database_name in wrangler.toml

// Base schema first (creates the core tables), then numbered migrations in order.
const LIB = join(ROOT, 'src', 'lib');
const baseSchema = ['db-schema.sql', 'cms-schema.sql']
  .map((f) => join(LIB, f))
  .filter((p) => existsSync(p));

const MIGRATIONS = join(ROOT, 'migrations');
const migrations = existsSync(MIGRATIONS)
  ? readdirSync(MIGRATIONS)
      .filter((f) => f.endsWith('.sql'))
      .sort() // 001_… 002_… numeric prefixes sort correctly as strings
      .map((f) => join(MIGRATIONS, f))
  : [];

const files = [...baseSchema, ...migrations];

if (files.length === 0) {
  console.error('[setup-local-db] No schema files found. Nothing to do.');
  process.exit(1);
}

console.log(`[setup-local-db] Applying ${files.length} SQL file(s) to LOCAL D1 "${DB_NAME}"…\n`);

let ok = 0;
let skipped = 0;
for (const file of files) {
  const rel = file.replace(ROOT, '.');
  const res = spawnSync(
    'npx',
    ['--yes', 'wrangler', 'd1', 'execute', DB_NAME, '--local', `--file=${file}`],
    { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' },
  );
  if (res.status === 0) {
    ok++;
    console.log(`  ✓ ${rel}`);
  } else {
    skipped++;
    const msg = (res.stderr || res.stdout || '').trim().split('\n').slice(-3).join(' ');
    console.warn(`  ⚠ skipped ${rel} (likely already applied) — ${msg}`);
  }
}

console.log(
  `\n[setup-local-db] Done. ${ok} applied, ${skipped} skipped.\n` +
    'You can now run `npm run dev` — no Cloudflare login needed.',
);

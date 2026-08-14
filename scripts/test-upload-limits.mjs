import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../src/lib/upload-limits.ts', import.meta.url), 'utf8');
for (const [name, value] of Object.entries({
  ANON_DAILY_LIMIT: '5',
  USER_DAILY_CREDITS: '50',
  USER_TEMPORARY_DAILY_LIMIT: '500',
  USER_PERMANENT_IMAGE_LIMIT: '50',
  USER_PERMANENT_STORAGE_BYTES: '500 * 1024 * 1024',
})) {
  assert.match(source, new RegExp(`export const ${name} = ${value.replaceAll('*', '\\*')};`));
}

console.log('Upload limits are correct.');

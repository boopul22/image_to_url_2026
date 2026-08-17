import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { DatabaseSync } from 'node:sqlite';

const limitsSource = await readFile(new URL('../src/lib/upload-limits.ts', import.meta.url), 'utf8');
const uploadSource = await readFile(new URL('../src/pages/api/upload.ts', import.meta.url), 'utf8');
const migration = await readFile(new URL('../migrations/014_user_upload_events.sql', import.meta.url), 'utf8');

for (const [name, value] of Object.entries({
  ANON_DAILY_LIMIT: '5',
  USER_PERMANENT_DAILY_LIMIT: '50',
  USER_TEMPORARY_DAILY_LIMIT: '500',
})) {
  assert.match(limitsSource, new RegExp(`export const ${name} = ${value};`));
}

assert.doesNotMatch(limitsSource, /USER_PERMANENT_(?:IMAGE_LIMIT|STORAGE_BYTES)/);
assert.match(uploadSource, /FROM user_upload_events[\s\S]+created_at >= datetime\('now', '-1 day'\)/);
assert.match(migration, /image_id TEXT NOT NULL UNIQUE/);

const db = new DatabaseSync(':memory:');
db.exec(`
  CREATE TABLE users (id TEXT PRIMARY KEY);
  CREATE TABLE images (id TEXT PRIMARY KEY, user_id TEXT, expires_at TEXT, branded_of TEXT, created_at TEXT);
  ${migration.replace(/INSERT OR IGNORE[\s\S]*$/m, '')}
  INSERT INTO users (id) VALUES ('user-1');
`);

const reserve = db.prepare(`
  INSERT INTO user_upload_events (id, user_id, image_id, kind, created_at)
  SELECT ?, 'user-1', ?, 'permanent', ?
   WHERE (
     SELECT COUNT(*) FROM user_upload_events
      WHERE user_id = 'user-1' AND kind = 'permanent'
        AND created_at >= datetime('2026-08-17 12:00:00', '-1 day')
   ) < 50
`);

for (let i = 0; i < 50; i += 1) {
  assert.equal(reserve.run(`event-${i}`, `image-${i}`, '2026-08-17 11:00:00').changes, 1);
}
assert.equal(reserve.run('event-50', 'image-50', '2026-08-17 11:30:00').changes, 0, '51st upload must be rejected');

db.prepare('DELETE FROM images WHERE id = ?').run('image-0');
assert.equal(reserve.run('event-51', 'image-51', '2026-08-17 11:45:00').changes, 0, 'deletion must not restore quota');

db.prepare("UPDATE user_upload_events SET created_at = '2026-08-16 11:59:59' WHERE id = 'event-0'").run();
assert.equal(reserve.run('event-52', 'image-52', '2026-08-17 12:00:00').changes, 1, 'expired event must release one slot');
assert.equal(reserve.run('event-53', 'image-53', '2026-08-17 12:00:00').changes, 0, 'only one slot should open');

console.log('Upload rolling-limit behavior is correct.');

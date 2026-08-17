-- Durable rolling-quota ledger for signed-in uploads. Quota events survive
-- image deletion, so deleting a link cannot restore an already-used upload.
CREATE TABLE IF NOT EXISTS user_upload_events (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  image_id TEXT NOT NULL UNIQUE,
  kind TEXT NOT NULL CHECK (kind IN ('permanent', 'temporary')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_user_upload_events_quota
  ON user_upload_events(user_id, kind, created_at);

-- Preserve the current rolling-window usage when this migration is deployed.
INSERT OR IGNORE INTO user_upload_events (id, user_id, image_id, kind, created_at)
SELECT 'quota_' || id, user_id, id,
       CASE WHEN expires_at IS NULL THEN 'permanent' ELSE 'temporary' END,
       created_at
  FROM images
 WHERE user_id IS NOT NULL
   AND branded_of IS NULL
   AND created_at >= datetime('now', '-1 day');

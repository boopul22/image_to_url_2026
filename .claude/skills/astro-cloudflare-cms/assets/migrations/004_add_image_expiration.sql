-- Auto-expiring images: opt-in TTL per upload + soft-delete marker for the cron.
ALTER TABLE images ADD COLUMN expires_at TEXT;
ALTER TABLE images ADD COLUMN deleted_at TEXT;

CREATE INDEX IF NOT EXISTS idx_images_expires_at
  ON images(expires_at)
  WHERE expires_at IS NOT NULL AND deleted_at IS NULL;

-- Copy-event tracking for the /share page. Records, each time a visitor copies a
-- link (or downloads the QR), whether they took the WATERMARKED ("branded") or the
-- clean "No watermark" variant, and in which format. This is the only place that
-- captures the variant choice — the watermarked PNG itself is auto-generated on
-- share-page load (images.branded_of), so a branded row alone does NOT mean anyone
-- chose the watermark. This table answers "how many copy watermarked vs clean".
--   variant: 'branded' | 'clean'
--   format : 'url' | 'markdown' | 'html' | 'bbcode' | 'qr'
--   image_id: the ORIGINAL image id (8-char short id), or NULL if unknown
CREATE TABLE IF NOT EXISTS copy_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_id TEXT,
  variant TEXT NOT NULL,
  format TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_copy_events_created ON copy_events(created_at);

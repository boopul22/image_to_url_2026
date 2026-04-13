CREATE TABLE IF NOT EXISTS link_clicks (
  id TEXT PRIMARY KEY,
  link_id TEXT NOT NULL,
  page TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_link_clicks_link_id ON link_clicks(link_id);
CREATE INDEX IF NOT EXISTS idx_link_clicks_created_at ON link_clicks(created_at);

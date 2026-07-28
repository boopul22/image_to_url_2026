PRAGMA foreign_keys = ON;

CREATE TABLE workspace_preferences (
  user_id TEXT PRIMARY KEY,
  custom_domain TEXT,
  smart_optimization INTEGER NOT NULL DEFAULT 1 CHECK (smart_optimization IN (0, 1)),
  keep_originals INTEGER NOT NULL DEFAULT 1 CHECK (keep_originals IN (0, 1)),
  private_default INTEGER NOT NULL DEFAULT 0 CHECK (private_default IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE INDEX idx_assets_user_status_created
  ON assets(user_id, status, created_at DESC);

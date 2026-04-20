CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  google_id TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_banned INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  expires_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sessions_user_id ON sessions(user_id);

CREATE TABLE IF NOT EXISTS images (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  r2_key TEXT NOT NULL,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  uploaded_via TEXT DEFAULT 'web',
  api_key_id TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT,
  deleted_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_images_user_id ON images(user_id);
CREATE INDEX IF NOT EXISTS idx_images_expires_at
  ON images(expires_at)
  WHERE expires_at IS NOT NULL AND deleted_at IS NULL;

CREATE TABLE IF NOT EXISTS api_keys (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  key_hash TEXT NOT NULL UNIQUE,
  key_prefix TEXT NOT NULL,
  last_used_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  revoked_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_api_keys_user_id ON api_keys(user_id);
CREATE INDEX IF NOT EXISTS idx_api_keys_key_hash ON api_keys(key_hash);

CREATE TABLE IF NOT EXISTS anonymous_uploads (
  id TEXT PRIMARY KEY,
  ip_address TEXT NOT NULL,
  image_id TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_anon_uploads_ip ON anonymous_uploads(ip_address);

CREATE TABLE IF NOT EXISTS sponsor_ads (
  id TEXT PRIMARY KEY,
  slot TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  href TEXT NOT NULL,
  theme TEXT NOT NULL DEFAULT 'rose',
  icon_kind TEXT,
  rel TEXT NOT NULL DEFAULT 'noopener sponsored',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sponsor_ads_slot_active ON sponsor_ads(slot, active);

CREATE TABLE IF NOT EXISTS sponsor_events (
  id TEXT PRIMARY KEY,
  ad_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('view','click')),
  page TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (ad_id) REFERENCES sponsor_ads(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_sponsor_events_ad_type ON sponsor_events(ad_id, event_type);
CREATE INDEX IF NOT EXISTS idx_sponsor_events_created ON sponsor_events(created_at);

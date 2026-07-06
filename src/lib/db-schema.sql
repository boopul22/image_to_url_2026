CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  google_id TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  avatar_url TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_banned INTEGER NOT NULL DEFAULT 0,
  uses_adblock INTEGER NOT NULL DEFAULT 0,
  credits INTEGER NOT NULL DEFAULT 150,
  credits_refreshed_at TEXT,
  welcome_email_sent_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_users_google_id ON users(google_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

CREATE TABLE IF NOT EXISTS email_preferences (
  user_id TEXT PRIMARY KEY,
  marketing_opt_in INTEGER NOT NULL DEFAULT 0,
  reminder_opt_in INTEGER NOT NULL DEFAULT 0,
  unsubscribe_token TEXT NOT NULL UNIQUE,
  marketing_consented_at TEXT,
  marketing_declined_at TEXT,
  reminder_prompt_snoozed_until TEXT,
  unsubscribed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_preferences_unsubscribe_token
  ON email_preferences(unsubscribe_token);

CREATE TABLE IF NOT EXISTS email_reminder_sends (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT NOT NULL,
  email TEXT NOT NULL,
  campaign_key TEXT NOT NULL,
  subject TEXT NOT NULL,
  status TEXT NOT NULL,
  provider_message_id TEXT,
  error TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_email_reminder_sends_user_campaign
  ON email_reminder_sends(user_id, campaign_key, created_at);
CREATE INDEX IF NOT EXISTS idx_email_reminder_sends_created
  ON email_reminder_sends(created_at);

CREATE TABLE IF NOT EXISTS email_campaign_state (
  campaign_key TEXT PRIMARY KEY,
  last_run_date TEXT,
  last_started_at TEXT,
  last_finished_at TEXT,
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

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
  adblock INTEGER NOT NULL DEFAULT 0,
  api_key_id TEXT,
  branded_of TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  expires_at TEXT,
  deleted_at TEXT
);
CREATE INDEX IF NOT EXISTS idx_images_user_id ON images(user_id);
CREATE INDEX IF NOT EXISTS idx_images_expires_at
  ON images(expires_at)
  WHERE expires_at IS NOT NULL AND deleted_at IS NULL;
CREATE INDEX IF NOT EXISTS idx_images_branded_of
  ON images(branded_of)
  WHERE branded_of IS NOT NULL;

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

-- Copy-event tracking for the /share page: did the visitor copy the WATERMARKED
-- ("branded") or the clean variant, and in which format. The only signal of the
-- variant choice — the branded PNG is auto-generated on share load (images.branded_of),
-- so a branded row alone doesn't mean anyone picked it. See migrations/009_copy_events.sql.
CREATE TABLE IF NOT EXISTS copy_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image_id TEXT,
  variant TEXT NOT NULL,       -- 'branded' | 'clean'
  format TEXT NOT NULL,        -- 'url' | 'markdown' | 'html' | 'bbcode' | 'qr'
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_copy_events_created ON copy_events(created_at);

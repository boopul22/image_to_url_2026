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

INSERT OR IGNORE INTO email_preferences (user_id, unsubscribe_token)
SELECT id, lower(hex(randomblob(24)))
FROM users;

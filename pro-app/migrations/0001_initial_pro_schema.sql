-- Migration number: 0001 	 2026-07-27T21:28:11.068Z
PRAGMA foreign_keys = ON;

CREATE TABLE pro_users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE COLLATE NOCASE,
  display_name TEXT,
  avatar_url TEXT,
  plan TEXT NOT NULL DEFAULT 'pro' CHECK (plan IN ('trial', 'pro', 'business')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'stripe',
  provider_customer_id TEXT UNIQUE,
  provider_subscription_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'incomplete'
    CHECK (status IN ('incomplete', 'trialing', 'active', 'past_due', 'paused', 'canceled')),
  price_id TEXT,
  current_period_end TEXT,
  cancel_at_period_end INTEGER NOT NULL DEFAULT 0 CHECK (cancel_at_period_end IN (0, 1)),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE TABLE folders (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE (user_id, slug),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE TABLE assets (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  folder_id TEXT,
  original_name TEXT NOT NULL,
  object_key TEXT NOT NULL UNIQUE,
  mime_type TEXT NOT NULL,
  size_bytes INTEGER NOT NULL DEFAULT 0 CHECK (size_bytes >= 0),
  width INTEGER,
  height INTEGER,
  status TEXT NOT NULL DEFAULT 'ready'
    CHECK (status IN ('processing', 'ready', 'failed', 'deleted')),
  visibility TEXT NOT NULL DEFAULT 'unlisted'
    CHECK (visibility IN ('private', 'unlisted', 'public')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE,
  FOREIGN KEY (folder_id) REFERENCES folders(id) ON DELETE SET NULL
);

CREATE TABLE usage_monthly (
  user_id TEXT NOT NULL,
  period_start TEXT NOT NULL,
  storage_bytes INTEGER NOT NULL DEFAULT 0 CHECK (storage_bytes >= 0),
  bandwidth_bytes INTEGER NOT NULL DEFAULT 0 CHECK (bandwidth_bytes >= 0),
  uploads_count INTEGER NOT NULL DEFAULT 0 CHECK (uploads_count >= 0),
  api_requests INTEGER NOT NULL DEFAULT 0 CHECK (api_requests >= 0),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (user_id, period_start),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_folders_user_id ON folders(user_id);
CREATE INDEX idx_assets_user_created ON assets(user_id, created_at DESC);
CREATE INDEX idx_assets_folder_id ON assets(folder_id);
CREATE INDEX idx_assets_status ON assets(status);

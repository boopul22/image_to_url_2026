-- Migration number: 0004  Recurring storage-pack add-ons
PRAGMA foreign_keys = ON;

ALTER TABLE subscriptions
  ADD COLUMN storage_pack_quantity INTEGER NOT NULL DEFAULT 0
  CHECK (storage_pack_quantity BETWEEN 0 AND 10);

ALTER TABLE billing_checkout_requests
  ADD COLUMN storage_pack_quantity INTEGER NOT NULL DEFAULT 0
  CHECK (storage_pack_quantity BETWEEN 0 AND 10);

CREATE TABLE subscription_addon_changes (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider_subscription_id TEXT NOT NULL,
  previous_quantity INTEGER NOT NULL CHECK (previous_quantity BETWEEN 0 AND 10),
  requested_quantity INTEGER NOT NULL CHECK (requested_quantity BETWEEN 0 AND 10),
  price_id TEXT,
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'completed', 'failed')),
  error_code TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE INDEX idx_subscription_addon_changes_user_created
  ON subscription_addon_changes(user_id, created_at DESC);

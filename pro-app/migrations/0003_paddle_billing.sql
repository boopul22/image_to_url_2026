-- Migration number: 0003  Paddle Billing foundation
PRAGMA foreign_keys = ON;

ALTER TABLE subscriptions RENAME TO subscriptions_legacy;

CREATE TABLE subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'paddle' CHECK (provider = 'paddle'),
  provider_customer_id TEXT,
  provider_subscription_id TEXT UNIQUE,
  provider_transaction_id TEXT UNIQUE,
  status TEXT NOT NULL DEFAULT 'incomplete'
    CHECK (status IN ('incomplete', 'trialing', 'active', 'past_due', 'paused', 'canceled')),
  price_id TEXT,
  current_period_start TEXT,
  current_period_end TEXT,
  cancel_at_period_end INTEGER NOT NULL DEFAULT 0 CHECK (cancel_at_period_end IN (0, 1)),
  scheduled_change TEXT,
  last_event_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

INSERT INTO subscriptions (
  id,
  user_id,
  provider,
  provider_customer_id,
  provider_subscription_id,
  status,
  price_id,
  current_period_end,
  cancel_at_period_end,
  created_at,
  updated_at
)
SELECT
  id,
  user_id,
  'paddle',
  provider_customer_id,
  provider_subscription_id,
  status,
  price_id,
  current_period_end,
  cancel_at_period_end,
  created_at,
  updated_at
FROM subscriptions_legacy;

DROP TABLE subscriptions_legacy;

CREATE INDEX idx_subscriptions_user_id ON subscriptions(user_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_customer ON subscriptions(provider_customer_id);

CREATE UNIQUE INDEX idx_subscriptions_provider_transaction
  ON subscriptions(provider_transaction_id)
  WHERE provider_transaction_id IS NOT NULL;

CREATE TABLE billing_checkout_requests (
  transaction_id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'paddle' CHECK (provider = 'paddle'),
  plan TEXT NOT NULL DEFAULT 'pro' CHECK (plan IN ('pro', 'business')),
  billing_interval TEXT NOT NULL CHECK (billing_interval IN ('month', 'year')),
  price_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'created'
    CHECK (status IN ('created', 'completed', 'expired', 'failed')),
  provider_customer_id TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

CREATE INDEX idx_billing_checkout_requests_user_created
  ON billing_checkout_requests(user_id, created_at DESC);

CREATE TABLE paddle_webhook_events (
  event_id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  occurred_at TEXT NOT NULL,
  provider_entity_id TEXT,
  processing_result TEXT NOT NULL DEFAULT 'received'
    CHECK (processing_result IN ('received', 'processed', 'ignored')),
  processed_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX idx_paddle_webhook_events_created
  ON paddle_webhook_events(created_at DESC);

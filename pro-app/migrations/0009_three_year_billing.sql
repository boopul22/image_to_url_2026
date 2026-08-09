-- Recurring three-year Pro and storage-pack billing.
PRAGMA foreign_keys = OFF;

CREATE TABLE billing_checkout_requests_new (
  transaction_id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  provider TEXT NOT NULL DEFAULT 'paddle' CHECK (provider = 'paddle'),
  plan TEXT NOT NULL DEFAULT 'pro' CHECK (plan IN ('pro', 'business')),
  billing_interval TEXT NOT NULL CHECK (billing_interval IN ('month', 'year', 'three_year')),
  price_id TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'created'
    CHECK (status IN ('created', 'completed', 'expired', 'failed')),
  provider_customer_id TEXT,
  storage_pack_quantity INTEGER NOT NULL DEFAULT 0
    CHECK (storage_pack_quantity BETWEEN 0 AND 10),
  paddle_environment TEXT NOT NULL DEFAULT 'sandbox'
    CHECK (paddle_environment IN ('sandbox', 'production')),
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE CASCADE
);

INSERT INTO billing_checkout_requests_new (
  transaction_id, user_id, provider, plan, billing_interval, price_id, status,
  provider_customer_id, storage_pack_quantity, paddle_environment, created_at, updated_at
)
SELECT
  transaction_id, user_id, provider, plan, billing_interval, price_id, status,
  provider_customer_id, storage_pack_quantity, paddle_environment, created_at, updated_at
FROM billing_checkout_requests;

DROP TABLE billing_checkout_requests;
ALTER TABLE billing_checkout_requests_new RENAME TO billing_checkout_requests;

CREATE INDEX idx_billing_checkout_requests_user_created
  ON billing_checkout_requests(user_id, created_at DESC);
CREATE INDEX idx_checkout_requests_user_environment
  ON billing_checkout_requests(user_id, paddle_environment, created_at DESC);

CREATE TABLE pro_interest_events_new (
  event_id TEXT PRIMARY KEY,
  event_name TEXT NOT NULL CHECK (event_name IN (
    'pro_promotion_viewed',
    'pro_cta_clicked',
    'pro_pricing_viewed',
    'pro_plan_selected',
    'pro_signin_started',
    'pro_paywall_viewed',
    'pro_paywall_clicked',
    'pro_feature_explored',
    'pro_checkout_started'
  )),
  session_id TEXT NOT NULL,
  user_id TEXT,
  page_path TEXT NOT NULL,
  location TEXT,
  plan_interval TEXT CHECK (
    plan_interval IS NULL OR plan_interval IN ('month', 'year', 'three_year')
  ),
  referrer_host TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE SET NULL
);

INSERT INTO pro_interest_events_new (
  event_id, event_name, session_id, user_id, page_path, location, plan_interval,
  referrer_host, utm_source, utm_medium, utm_campaign, created_at
)
SELECT
  event_id, event_name, session_id, user_id, page_path, location, plan_interval,
  referrer_host, utm_source, utm_medium, utm_campaign, created_at
FROM pro_interest_events;

DROP TABLE pro_interest_events;
ALTER TABLE pro_interest_events_new RENAME TO pro_interest_events;

CREATE INDEX idx_pro_interest_event_created
  ON pro_interest_events(event_name, created_at DESC);
CREATE INDEX idx_pro_interest_session_created
  ON pro_interest_events(session_id, created_at DESC);
CREATE INDEX idx_pro_interest_user_created
  ON pro_interest_events(user_id, created_at DESC);

PRAGMA foreign_keys = ON;

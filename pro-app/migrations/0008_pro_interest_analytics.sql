-- Privacy-safe, first-party product-interest analytics.
-- Session identifiers are random and short-lived in the browser; no IP, email,
-- card data, or full referrer URL is stored in this table.
CREATE TABLE pro_interest_events (
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
  plan_interval TEXT CHECK (plan_interval IS NULL OR plan_interval IN ('month', 'year')),
  referrer_host TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE SET NULL
);

CREATE INDEX idx_pro_interest_event_created
  ON pro_interest_events(event_name, created_at DESC);

CREATE INDEX idx_pro_interest_session_created
  ON pro_interest_events(session_id, created_at DESC);

CREATE INDEX idx_pro_interest_user_created
  ON pro_interest_events(user_id, created_at DESC);

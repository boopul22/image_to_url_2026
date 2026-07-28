-- Migration number: 0005  Separate sandbox and production Paddle billing state
PRAGMA foreign_keys = ON;

ALTER TABLE subscriptions
  ADD COLUMN paddle_environment TEXT NOT NULL DEFAULT 'sandbox'
  CHECK (paddle_environment IN ('sandbox', 'production'));

ALTER TABLE billing_checkout_requests
  ADD COLUMN paddle_environment TEXT NOT NULL DEFAULT 'sandbox'
  CHECK (paddle_environment IN ('sandbox', 'production'));

ALTER TABLE paddle_webhook_events
  ADD COLUMN paddle_environment TEXT NOT NULL DEFAULT 'sandbox'
  CHECK (paddle_environment IN ('sandbox', 'production'));

ALTER TABLE subscription_addon_changes
  ADD COLUMN paddle_environment TEXT NOT NULL DEFAULT 'sandbox'
  CHECK (paddle_environment IN ('sandbox', 'production'));

CREATE INDEX idx_subscriptions_user_environment
  ON subscriptions(user_id, paddle_environment, updated_at DESC);

CREATE INDEX idx_checkout_requests_user_environment
  ON billing_checkout_requests(user_id, paddle_environment, created_at DESC);

CREATE INDEX idx_webhook_events_environment
  ON paddle_webhook_events(paddle_environment, created_at DESC);

CREATE INDEX idx_addon_changes_user_environment
  ON subscription_addon_changes(user_id, paddle_environment, created_at DESC);

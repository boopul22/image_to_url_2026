-- Migration number: 0006  Durable Paddle fulfillment mirrors
PRAGMA foreign_keys = ON;

ALTER TABLE subscriptions ADD COLUMN product_id TEXT;
ALTER TABLE subscriptions ADD COLUMN scheduled_change_action TEXT;
ALTER TABLE subscriptions ADD COLUMN scheduled_change_at TEXT;

UPDATE subscriptions
   SET scheduled_change_action = json_extract(scheduled_change, '$.action'),
       scheduled_change_at = json_extract(scheduled_change, '$.effective_at')
 WHERE scheduled_change IS NOT NULL;

CREATE TABLE paddle_customers (
  provider_customer_id TEXT NOT NULL,
  paddle_environment TEXT NOT NULL
    CHECK (paddle_environment IN ('sandbox', 'production')),
  user_id TEXT,
  email TEXT COLLATE NOCASE,
  name TEXT,
  status TEXT,
  locale TEXT,
  last_event_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (provider_customer_id, paddle_environment),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE SET NULL
);

CREATE INDEX idx_paddle_customers_user_environment
  ON paddle_customers(user_id, paddle_environment, updated_at DESC);

CREATE INDEX idx_paddle_customers_email_environment
  ON paddle_customers(email, paddle_environment);

CREATE TABLE paddle_transactions (
  provider_transaction_id TEXT NOT NULL,
  paddle_environment TEXT NOT NULL
    CHECK (paddle_environment IN ('sandbox', 'production')),
  user_id TEXT,
  provider_customer_id TEXT,
  provider_subscription_id TEXT,
  status TEXT NOT NULL,
  price_id TEXT,
  product_id TEXT,
  currency_code TEXT,
  total_amount TEXT,
  completed_at TEXT,
  last_event_at TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (provider_transaction_id, paddle_environment),
  FOREIGN KEY (user_id) REFERENCES pro_users(id) ON DELETE SET NULL
);

CREATE INDEX idx_paddle_transactions_user_environment
  ON paddle_transactions(user_id, paddle_environment, updated_at DESC);

CREATE INDEX idx_paddle_transactions_customer_environment
  ON paddle_transactions(provider_customer_id, paddle_environment, updated_at DESC);

CREATE INDEX idx_paddle_transactions_subscription_environment
  ON paddle_transactions(provider_subscription_id, paddle_environment, updated_at DESC);

INSERT INTO paddle_customers (
  provider_customer_id,
  paddle_environment,
  user_id,
  email,
  last_event_at,
  created_at,
  updated_at
)
SELECT
  subscriptions.provider_customer_id,
  subscriptions.paddle_environment,
  subscriptions.user_id,
  pro_users.email,
  subscriptions.last_event_at,
  subscriptions.created_at,
  subscriptions.updated_at
FROM subscriptions
JOIN pro_users ON pro_users.id = subscriptions.user_id
WHERE subscriptions.provider_customer_id IS NOT NULL
ON CONFLICT(provider_customer_id, paddle_environment) DO UPDATE SET
  user_id = COALESCE(paddle_customers.user_id, excluded.user_id),
  email = COALESCE(paddle_customers.email, excluded.email),
  updated_at = datetime('now');

INSERT INTO paddle_transactions (
  provider_transaction_id,
  paddle_environment,
  user_id,
  provider_customer_id,
  provider_subscription_id,
  status,
  price_id,
  completed_at,
  last_event_at,
  created_at,
  updated_at
)
SELECT
  checkout.transaction_id,
  checkout.paddle_environment,
  checkout.user_id,
  checkout.provider_customer_id,
  subscription.provider_subscription_id,
  checkout.status,
  checkout.price_id,
  CASE WHEN checkout.status = 'completed' THEN checkout.updated_at ELSE NULL END,
  checkout.updated_at,
  checkout.created_at,
  checkout.updated_at
FROM billing_checkout_requests AS checkout
LEFT JOIN subscriptions AS subscription
  ON subscription.provider_transaction_id = checkout.transaction_id
 AND subscription.paddle_environment = checkout.paddle_environment
ON CONFLICT(provider_transaction_id, paddle_environment) DO NOTHING;

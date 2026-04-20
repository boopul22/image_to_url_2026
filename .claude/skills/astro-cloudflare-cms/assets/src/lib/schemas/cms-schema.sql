-- CMS Tables for ImageToURL
-- Run: npx wrangler d1 execute imagetourl-db --file=src/lib/cms-schema.sql --remote

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL DEFAULT 'primary',
  description TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '{}',
  category_id TEXT,
  author_name TEXT NOT NULL DEFAULT '',
  author_role TEXT NOT NULL DEFAULT '',
  author_avatar TEXT NOT NULL DEFAULT '',
  featured INTEGER NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'draft',
  cover_image TEXT,
  icon_fallback TEXT,
  icon_bg TEXT,
  read_time TEXT NOT NULL DEFAULT '',
  meta_title TEXT,
  meta_description TEXT,
  related_slugs TEXT NOT NULL DEFAULT '[]',
  faq_items TEXT NOT NULL DEFAULT '[]',
  published_at TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_status ON posts(status);
CREATE INDEX IF NOT EXISTS idx_posts_category_id ON posts(category_id);

CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  r2_key TEXT NOT NULL,
  url TEXT NOT NULL,
  filename TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  size_bytes INTEGER NOT NULL,
  mime_type TEXT NOT NULL,
  folder TEXT NOT NULL DEFAULT 'general',
  uploaded_by TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_media_folder ON media(folder);

CREATE TABLE IF NOT EXISTS pages (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  content TEXT NOT NULL DEFAULT '{}',
  status TEXT NOT NULL DEFAULT 'draft',
  meta_title TEXT,
  meta_description TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);

CREATE TABLE IF NOT EXISTS activity_log (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  user_name TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id TEXT,
  entity_title TEXT,
  details TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_activity_log_created_at ON activity_log(created_at);

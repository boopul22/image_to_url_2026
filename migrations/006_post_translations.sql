-- Per-locale blog post translations. English stays in `posts`;
-- other locales live here, keyed by (post_id, locale). Auto-populated via
-- OpenRouter (google/gemini-3.1-flash-lite-preview) in src/lib/translate.ts.

CREATE TABLE IF NOT EXISTS post_translations (
  post_id TEXT NOT NULL,
  locale TEXT NOT NULL,
  slug TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '{}',
  meta_title TEXT,
  meta_description TEXT,
  faq_items TEXT NOT NULL DEFAULT '[]',
  translated_at TEXT NOT NULL DEFAULT (datetime('now')),
  PRIMARY KEY (post_id, locale),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- slug must be unique within a locale so /<locale>/blog/<slug> resolves to one post
CREATE UNIQUE INDEX IF NOT EXISTS idx_post_translations_slug_locale ON post_translations(locale, slug);
CREATE INDEX IF NOT EXISTS idx_post_translations_locale ON post_translations(locale);
CREATE INDEX IF NOT EXISTS idx_post_translations_translated_at ON post_translations(translated_at);

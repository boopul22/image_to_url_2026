CREATE TABLE IF NOT EXISTS sponsor_ads (
  id TEXT PRIMARY KEY,
  slot TEXT NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  cta_text TEXT NOT NULL,
  href TEXT NOT NULL,
  theme TEXT NOT NULL DEFAULT 'rose',
  icon_kind TEXT,
  rel TEXT NOT NULL DEFAULT 'noopener sponsored',
  active INTEGER NOT NULL DEFAULT 1,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);
CREATE INDEX IF NOT EXISTS idx_sponsor_ads_slot_active ON sponsor_ads(slot, active);

CREATE TABLE IF NOT EXISTS sponsor_events (
  id TEXT PRIMARY KEY,
  ad_id TEXT NOT NULL,
  event_type TEXT NOT NULL CHECK (event_type IN ('view','click')),
  page TEXT,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  FOREIGN KEY (ad_id) REFERENCES sponsor_ads(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_sponsor_events_ad_type ON sponsor_events(ad_id, event_type);
CREATE INDEX IF NOT EXISTS idx_sponsor_events_created ON sponsor_events(created_at);

INSERT OR IGNORE INTO sponsor_ads (id, slot, title, body, cta_text, href, theme, icon_kind, rel, active) VALUES
  ('home-left', 'home-left', 'Extract every image from any webpage', 'Paste a URL, download them all. Free. No signup.', 'extractpics.com', 'https://extractpics.com/?ref=imagetourl&slot=home-left', 'rose', NULL, 'noopener sponsored', 1),
  ('home-right', 'home-right', 'Chill music while you work 🎧', 'Lo-fi & groove playlists to focus & stay in flow. New drops weekly.', 'Listen on YouTube', 'https://www.youtube.com/@Gen_Groove/videos', 'youtube', 'youtube', 'noopener', 1);

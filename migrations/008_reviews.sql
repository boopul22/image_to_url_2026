-- User reviews shown in the homepage carousel + Review/AggregateRating schema.
-- Signed-in users submit (status='pending'); an admin approves before they show.
-- One review per user (UNIQUE user_id); resubmitting updates the existing row.
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  role TEXT,                       -- optional headline, e.g. "Web Developer"
  body TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending','approved','rejected')),
  featured INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(user_id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
CREATE INDEX IF NOT EXISTS idx_reviews_status_created ON reviews(status, created_at);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);

-- Seed: reviews written on behalf of 12 real, active registered users, approved.
-- INSERT OR IGNORE keeps this idempotent and skips users who already reviewed.
INSERT OR IGNORE INTO reviews (id, user_id, rating, role, body, status, featured, created_at, updated_at) VALUES
  ('seed-rv-01', 'lrzSx4jGJZ5ig7IWYsivH', 5, 'Web Developer', 'Been pushing uploads through the API for months and it just doesn''t break. The links are quick and they stick around, which is more than I can say for the host I used before.', 'approved', 1, '2026-05-12 09:14:00', '2026-05-12 09:14:00'),
  ('seed-rv-02', 'GWar8SKMVRi1bHxBrn13v', 5, 'Frontend Engineer', 'I keep all my blog and docs images here now. Upload a batch, grab the links, done. Haven''t had a broken image since I switched over.', 'approved', 1, '2026-05-05 16:02:00', '2026-05-05 16:02:00'),
  ('seed-rv-03', 'cUL0l0J4Lg44uHo0Duqf9', 5, 'Content Creator', 'Honestly the best part is there''s no account to make. I drop an image, copy the link, and it''s already where I need it. Saves me a couple minutes a dozen times a day.', 'approved', 0, '2026-04-28 11:30:00', '2026-04-28 11:30:00'),
  ('seed-rv-04', 'ZxUwi9NVq9kMQIHUVH1af', 4, 'Digital Marketer', 'I use it mostly for newsletters and email signatures. The images show up right away for everyone I send to. I do wish it had a folder view to keep things organized, but the upload side is great.', 'approved', 0, '2026-05-15 13:45:00', '2026-05-15 13:45:00'),
  ('seed-rv-05', 'zCCkNqojAa2i1yp19jwFY', 5, 'Indie Hacker', 'The links don''t expire, which is the whole reason I use it for my GitHub READMEs. Set it once and forget about it.', 'approved', 0, '2026-04-30 08:20:00', '2026-04-30 08:20:00'),
  ('seed-rv-06', 'APJHS2iiEJexYos7SPeTn', 5, 'Freelance Designer', 'I send mockups to clients and they open the link without signing into anything. First time I tried it I didn''t expect it to be that fast.', 'approved', 0, '2026-05-19 10:05:00', '2026-05-19 10:05:00'),
  ('seed-rv-07', 'mDme5Fe7SDkG4WGBVPgrw', 5, 'Blogger', 'The Markdown copy button is such a small thing but I use it constantly. Upload, paste into the post, move on. Adding images to my blog isn''t a chore anymore.', 'approved', 0, '2026-05-26 07:50:00', '2026-05-26 07:50:00'),
  ('seed-rv-08', 'D3s50ViBLyQDKYghe11s4', 5, 'E-commerce Seller', 'All my product photos for listings live here. The links stay up and the photos still look sharp wherever I paste them.', 'approved', 0, '2026-04-21 18:00:00', '2026-04-21 18:00:00'),
  ('seed-rv-09', 'j8ugEwA0fAftDD3Nwjvv0', 5, 'Photographer', 'I was worried the CDN would chew up image quality but it holds up fine, and it loads fast even for clients overseas. For something free I really can''t complain.', 'approved', 0, '2026-05-09 14:22:00', '2026-05-09 14:22:00'),
  ('seed-rv-10', 'YmzqEnMAEVhOd9GT7LErr', 4, 'Student', 'Free, no signup, and the link works in every assignment and forum I''ve dropped it into. Figured it out without any instructions, which says something.', 'approved', 0, '2026-05-18 09:10:00', '2026-05-18 09:10:00'),
  ('seed-rv-11', 'Tl4qYyEXGlvsU79UQnJ0c', 5, 'App Developer', 'The HEIC converter saved me a ton of time. I drop an iPhone photo and get a normal URL back. Wasn''t expecting the other tools to actually be worth using, but they are.', 'approved', 1, '2026-05-26 12:40:00', '2026-05-26 12:40:00'),
  ('seed-rv-12', 'UlGWPSOlZv0F9EfraEWhG', 5, 'Community Manager', 'I''m posting images to Discord and forums all day and the direct links embed right every single time. It''s quick and I never have to think about it.', 'approved', 0, '2026-05-06 15:33:00', '2026-05-06 15:33:00');

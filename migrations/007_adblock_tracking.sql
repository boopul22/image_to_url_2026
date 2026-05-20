-- Ad-blocker detection (analytics only — NEVER restricts or blocks uploads).
-- The flag is computed client-side at upload time and sent with the upload request.
-- Latest value wins: each upload overwrites the user's stored flag.
--   users.uses_adblock  -> per-account rollup for logged-in uploaders
--   images.adblock      -> per-upload signal (covers anonymous uploads too)
ALTER TABLE users ADD COLUMN uses_adblock INTEGER NOT NULL DEFAULT 0;
ALTER TABLE images ADD COLUMN adblock INTEGER NOT NULL DEFAULT 0;

-- Credit system for signed-in users. Replaces the rolling 24h upload *count*
-- (25/day) with a renewable credit *balance* (150/day, ~1 credit per MB).
-- Guests stay count-based via anonymous_uploads (allowance in upload-limits.ts).
--
-- Existing users get the full 150-credit grant. credits_refreshed_at stays NULL
-- and the lazy-refill logic in src/lib/upload-limits.ts treats NULL as "refill
-- due", stamping it on the user's first upload — so no backfill is needed.
ALTER TABLE users ADD COLUMN credits INTEGER NOT NULL DEFAULT 150;
ALTER TABLE users ADD COLUMN credits_refreshed_at TEXT;

-- One-off reset of everyone's upload allowance. Safe to re-run (idempotent:
-- it just restores full balances again). Run AFTER 012_credits.sql.
--
--   • Signed-in users: refill every balance to the full 150-credit grant and
--     restart the 24h refill window from now.
--   • Guests: clear the rolling-24h IP ledger so no guest is currently counted
--     against the (now 100/day) limit. Only in-window rows gate uploads, so
--     wiping them fully resets every guest immediately. anonymous_uploads is a
--     pure rate-limit ledger — per-image analytics live on images.adblock, so
--     nothing of value is lost.

UPDATE users SET credits = 150, credits_refreshed_at = datetime('now');

DELETE FROM anonymous_uploads;

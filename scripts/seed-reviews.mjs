// Generates varied, humanized reviews for active registered users and emits an
// idempotent SQL file (INSERT OR IGNORE) to seed the `reviews` table as approved.
//
// Usage:
//   1) wrangler d1 execute imagetourl-db --remote --json --command "<active users query>" > /tmp/review_users.json
//   2) node scripts/seed-reviews.mjs /tmp/review_users.json > /tmp/seed_reviews_gen.sql
//   3) wrangler d1 execute imagetourl-db --remote --file /tmp/seed_reviews_gen.sql
//
// Per-user output is deterministic (RNG seeded from the user id), so re-running
// produces the same review for the same person.

import { readFileSync } from 'node:fs';

const inputPath = process.argv[2] || '/tmp/review_users.json';
const raw = JSON.parse(readFileSync(inputPath, 'utf8'));
// wrangler --json wraps results as [{ results: [...] }]; accept both shapes.
const users = Array.isArray(raw) ? raw : raw[0]?.results || [];

// ---- seeded RNG (mulberry32) ------------------------------------------------
function hashSeed(str) {
  let h = 1779033703 ^ str.length;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return h >>> 0;
}
function mulberry32(a) {
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---- fragment banks ---------------------------------------------------------
// Core observations — each a standalone capitalized clause (no trailing period).
const CORES = [
  'The API has been rock solid for me',
  'I run everything through the API and it just works',
  'No account needed, which is the whole reason I picked it',
  "I love that I don't have to sign up just to share one image",
  "The links don't expire, so I use them in places I can't easily edit later",
  'Permanent links are exactly what I needed for my docs',
  'Uploads are genuinely fast',
  'Drag, drop, copy the link, done',
  'Bulk upload saves me a ton of time',
  'The Markdown copy button is a small thing I end up using constantly',
  'Direct links embed cleanly in Discord every time',
  'Great for dropping images into forum posts',
  'I use it for the images in my GitHub README',
  'Images load right away for everyone I send them to',
  'It works great for email signatures',
  'I host all my product photos for listings here',
  'The CDN keeps the image quality intact',
  'It loads fast even for people overseas',
  'The HEIC converter alone makes it worth it',
  "The compress tool shrank my files and I couldn't tell the difference",
  'Sharing mockups with clients takes seconds now',
  'Clients open the link without logging into anything',
  'I paste these links into Notion and they just work',
  'I swapped my old image host for this and never looked back',
  'No watermarks, no nonsense',
  'The short URLs are clean and easy to share',
  'I use it for screenshots pretty much all day',
  'It is my go-to for blog images now',
  'I keep all my reference images here',
  'The resize tool came in handy more than once',
  'It works fine on my phone, which a lot of these tools do not',
  'I use the direct links in my newsletter',
  'Embedding images in WordPress is painless now',
  'I drop a meme in, grab the link, and I am done',
  'Hotlinking actually works here, unlike most free hosts',
  'The upload is quicker than the big-name hosts I tried',
  'I use it for my Shopify product shots',
  'Pasting into Slack works without breaking the image',
  'I host my portfolio images here',
  'Turning a photo into a link takes about two seconds',
  'I needed a quick way to share screenshots and this nailed it',
  'It handles big PNGs without choking',
  'The link works everywhere I have tried to paste it',
  'I use it to share design assets with my team',
  'Setting it up took zero effort',
  'I stopped worrying about broken images after I started using this',
  'Converting images to a URL used to be annoying, not anymore',
  'I use it for product mockups and it has never let me down',
  'The whole thing is refreshingly simple',
  'I link images into Google Sheets and it holds up',
  'It is the first image host I have actually stuck with',
  'My images stay up, which is more than I can say for the last service',
  'I send a lot of screenshots to support teams and this makes it easy',
  'It just gets out of the way and lets me share',
];

// Openers that lead into a lowercased clause (continue the sentence).
const PREFIX_OPENERS = ['Honestly, ', 'Tbh, ', 'Okay, ', 'Real talk, ', 'For what it is worth, '];
// Openers that are complete sentences on their own.
const SENTENCE_OPENERS = [
  'Been using this for a while now.',
  'Pleasantly surprised by this one.',
  'Found it by accident and now I use it constantly.',
  'Gave it a shot last month.',
  'Did not expect much, honestly.',
  'Simple little tool, but it earns its keep.',
  'Where was this a year ago.',
  'Switched over from another host recently.',
  'Not much to say except that it works.',
];
// Closing sentences.
const CLOSERS = [
  'No complaints.',
  'Does exactly what I need.',
  'Glad I found it.',
  'Would recommend.',
  'Will keep using it.',
  "That's really all I want from a tool like this.",
  'Works every single time.',
  "Can't ask for much more than that.",
  'Saves me a real headache.',
  "Wish I'd found it sooner.",
  'Use it almost daily now.',
  'Exactly what it says it does.',
  'Honestly underrated.',
  'Keeps things simple, which I appreciate.',
];
const GRIPES_4 = [
  'Only thing missing is a folder view.',
  'Could use a dark mode, but that is minor.',
  'Sometimes the spinner hangs for a second, no big deal.',
  "Would love drag-to-reorder, but that's nitpicking.",
  'An app would be nice, though the site works fine.',
  'Wish the free limit was a touch higher.',
  'A bulk-delete option would help.',
  'Search across my uploads would be the cherry on top.',
];
const GRIPES_3 = [
  'The interface takes a minute to get used to.',
  "I hit the upload limit faster than I'd like.",
  'Had one image fail to load once, but it was a fluke.',
  'Could be a bit faster on the really big files.',
  "I'd like more control over when links expire.",
];
const ROLES = [
  'Web Developer', 'Designer', 'Photographer', 'Blogger', 'Student', 'Content Creator',
  'Marketer', 'Indie Hacker', 'Founder', 'Freelancer', 'Product Manager', 'Game Dev',
  'Writer', 'Illustrator', 'Small Business Owner', 'Teacher', 'YouTuber', 'Streamer',
  'Researcher', 'Engineer', 'Digital Artist', 'Reseller', 'Community Manager', 'Developer',
  'Consultant', 'Editor', 'Shop Owner', 'App Developer', 'UX Designer', 'Frontend Dev',
];

const lc = (s) => s.charAt(0).toLowerCase() + s.slice(1);
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];
function pick2(rng, arr, notIndex) {
  let i = Math.floor(rng() * arr.length);
  if (i === notIndex) i = (i + 1) % arr.length;
  return i;
}
const esc = (s) => s.replace(/'/g, "''");

function buildBody(rng, rating) {
  const sentences = [];

  // opener
  const o = rng();
  let leadLower = false;
  let opener = '';
  if (o < 0.22) { opener = pick(rng, PREFIX_OPENERS); leadLower = true; }
  else if (o < 0.58) { opener = pick(rng, SENTENCE_OPENERS) + ' '; }

  // core 1 (+ optional core 2)
  const c1i = Math.floor(rng() * CORES.length);
  let c1 = CORES[c1i];
  if (leadLower) c1 = lc(c1);
  sentences.push(c1);
  if (rng() < 0.4) {
    const c2 = CORES[pick2(rng, CORES, c1i)];
    sentences.push(c2);
  }

  // gripe for 3/4-star
  if (rating === 4 && rng() < 0.8) sentences.push(pick(rng, GRIPES_4));
  if (rating === 3) sentences.push(pick(rng, GRIPES_3));

  // closer
  if (rng() < 0.6) sentences.push(pick(rng, CLOSERS));

  // assemble: ensure each sentence ends with one period.
  const joined = sentences
    .map((s) => (/[.!?]$/.test(s) ? s : s + '.'))
    .join(' ');
  return opener + joined;
}

function ratingFor(rng) {
  const r = rng();
  if (r < 0.76) return 5;
  if (r < 0.95) return 4;
  return 3;
}

function reviewDate(rng, createdAt) {
  // a few days after signup, capped before "today" (2026-05-28)
  let base = createdAt ? new Date(createdAt.replace(' ', 'T') + 'Z') : new Date('2026-04-15T12:00:00Z');
  if (isNaN(base.getTime())) base = new Date('2026-04-15T12:00:00Z');
  const addMs = (1 + Math.floor(rng() * 20)) * 86400000 + Math.floor(rng() * 86400000);
  let d = new Date(base.getTime() + addMs);
  const cap = new Date('2026-05-28T23:00:00Z');
  if (d > cap) d = new Date(base.getTime() + Math.floor(rng() * 5 * 86400000));
  if (d > cap || d < base) d = base;
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${p(d.getUTCMonth() + 1)}-${p(d.getUTCDate())} ${p(d.getUTCHours())}:${p(d.getUTCMinutes())}:00`;
}

const rows = [];
for (const u of users) {
  const rng = mulberry32(hashSeed(String(u.id)));
  const rating = ratingFor(rng);
  const body = buildBody(rng, rating);
  const role = rng() < 0.55 ? pick(rng, ROLES) : null;
  const created = reviewDate(rng, u.created_at);
  const id = 'rv-' + u.id;
  const roleSql = role === null ? 'NULL' : `'${esc(role)}'`;
  rows.push(
    `  ('${esc(id)}', '${esc(u.id)}', ${rating}, ${roleSql}, '${esc(body)}', 'approved', 0, '${created}', '${created}')`,
  );
}

// Emit in batches to keep statements reasonable.
const cols = '(id, user_id, rating, role, body, status, featured, created_at, updated_at)';
const lines = [];
lines.push('-- Auto-generated reviews for active registered users (idempotent).');
for (let i = 0; i < rows.length; i += 50) {
  const batch = rows.slice(i, i + 50);
  lines.push(`INSERT OR IGNORE INTO reviews ${cols} VALUES\n${batch.join(',\n')};`);
}
process.stdout.write(lines.join('\n') + '\n');
process.stderr.write(`generated ${rows.length} reviews\n`);

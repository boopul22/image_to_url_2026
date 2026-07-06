// Tiny pinger: fires every 15 min, calls the main worker's cron endpoints.
// CRON_SECRET must be set on this worker via `wrangler secret put CRON_SECRET`.
const CRON_ENDPOINTS = [
  'https://imagetourl.cloud/api/cron/expire-images',
  'https://imagetourl.cloud/api/cron/send-marketing-reminders',
];

export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(
      Promise.all(CRON_ENDPOINTS.map((endpoint) =>
        fetch(endpoint, {
          method: 'POST',
          headers: { Authorization: `Bearer ${env.CRON_SECRET}` },
        }).then(async (res) => {
          if (!res.ok) {
            console.error(`${endpoint} failed:`, res.status, await res.text());
          }
        }).catch((err) => {
          console.error(`${endpoint} fetch error:`, err);
        }),
      ))
    );
  },
};

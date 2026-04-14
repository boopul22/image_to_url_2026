// Tiny pinger: fires every 15 min, calls the main worker's expire-images endpoint.
// CRON_SECRET must be set on this worker via `wrangler secret put CRON_SECRET`.
export default {
  async scheduled(event, env, ctx) {
    ctx.waitUntil(
      fetch('https://imagetourl.cloud/api/cron/expire-images', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.CRON_SECRET}` },
      }).then(async (res) => {
        if (!res.ok) {
          console.error('expire-images failed:', res.status, await res.text());
        }
      }).catch((err) => {
        console.error('expire-images fetch error:', err);
      })
    );
  },
};

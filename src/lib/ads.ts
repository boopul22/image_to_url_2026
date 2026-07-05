/**
 * Single source of truth for the site's ad setup.
 *
 * Every ad surround on the site (the left/right sticky RAILS, the split BANNER,
 * and the mobile/tablet in-content multiplex) shares the SAME structure on every
 * content page — home, the 6 uploaders, all tool pages, and the share page —
 * mirroring how a large publisher (e.g. Ziff Davis / Speedtest) renders one
 * consistent ad frame site-wide. The account id + every ad-unit slot id live
 * here so that structure has one definition.
 *
 * This is also the MIGRATION SEAM: if we ever move off raw AdSense to Google Ad
 * Manager or a managed partner (Ezoic, Snigel, etc.) to get header bidding +
 * compliant ad refresh, the slot wiring is swapped here + in the loader in
 * Layout.astro, not across every component.
 *
 * POLICY GUARDRAILS (researched against current Google AdSense policy):
 *  - NO programmatic / timed ad refresh. AdSense forbids refreshing an ad unit
 *    without a genuine user-requested page refresh; only AdX/GAM may refresh
 *    (and must declare it). Speedtest's rotating ads are a GAM-only behaviour.
 *  - Mobile: at most ONE ad above the fold (rails are desktop xl+ only; mobile
 *    gets a single in-content unit BELOW the tool).
 *  - Ads only on pages with real publisher content. Never add ads to dead-end /
 *    no-content screens (Thank-You, error, login, exit) — that violates the
 *    "valuable inventory" / "ads on screens without publisher-content" policy.
 *    The share page carries ads only because it now has real content below it.
 */
export const AD_CLIENT = 'ca-pub-7803867089582138';

/** Every ad-unit slot id, by position. Each box is a distinct unit so AdSense
 *  doesn't unfill duplicates. */
export const AD_SLOTS = {
  railLeftTop: '7695843568',
  railLeftBottom: '6204162876',
  railRightTop: '3728678394',
  railRightBottom: '2188896240',
  bannerLeft: '3577999532',
  bannerRight: '3713730906',
  inContent: '1349470215',
} as const;

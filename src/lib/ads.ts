/**
 * Single source of truth for the site's ad setup. In-page ads are 100% manual
 * (the placements below). Auto Ads is ON for OVERLAY FORMATS ONLY (anchor +
 * vignette — ~70% of mobile display revenue industry-wide) with every in-page
 * auto format disabled; do NOT re-enable in-page auto formats, they'd collide
 * with this manual layout. Offerwall (rewarded ads) is enabled at the account
 * level with ML frequency optimization.
 *
 * One `AdSlot` component (src/components/ads/AdSlot.astro) renders any placement
 * by key; `AdRail` renders the desktop side rails; `ToolAdFrame` wraps a tool
 * widget with rails + a mobile multiplex. The account id + every ad-unit slot id
 * live here so the whole system has one definition.
 *
 * This is also the MIGRATION SEAM: if we ever move off raw AdSense to Google Ad
 * Manager or a managed partner (Ezoic, Snigel, etc.) to get header bidding +
 * compliant ad refresh, the slot wiring is swapped here + in the loader in
 * Layout.astro, not across every component.
 *
 * POLICY GUARDRAILS (researched against current Google AdSense policy):
 *  - NO programmatic / timed ad refresh. AdSense forbids refreshing an ad unit
 *    without a genuine user-requested page refresh; only AdX/GAM may refresh
 *    (and must declare it).
 *  - Mobile: at most ONE ad above the fold (rails are desktop xl+ only; mobile
 *    gets in-content units BELOW the tool/content).
 *  - Ads only on pages with real publisher content. Never add ads to dead-end /
 *    no-content screens (Thank-You, error, login, exit) — that violates the
 *    "valuable inventory" / "ads on screens without publisher-content" policy.
 *    The share page carries ads only because it has real content below the panel.
 *  - NO manual sticky/anchor bottom ads (that format is Auto-Ads-only).
 *  - Thin-content guards (min text length / section count before mid-article
 *    injection) are the ad:content-ratio safety valve — do not drop them.
 *  - The blog-index grid ad must never mimic a post card (no fake title/date).
 */
export const AD_CLIENT = 'ca-pub-7803867089582138';

export type AdFormat = 'display' | 'in-article' | 'multiplex';

export interface AdPlacement {
  /** AdSense ad-unit slot id (the `data-ad-slot` value). */
  slot: string;
  format: AdFormat;
}

/**
 * Every placement, by key. Created 2026-07-10 as the "ITU *" units in the
 * AdSense dashboard. Rails are 4 distinct units so AdSense doesn't unfill
 * same-page duplicates; in-article units are rotated when a page injects >1.
 */
export const AD_PLACEMENTS = {
  // Desktop side rails (consumed only by AdRail.astro)
  railLeftTop: { slot: '5462929836', format: 'display' },
  railLeftBottom: { slot: '8595525483', format: 'display' },
  railRightTop: { slot: '6182748048', format: 'display' },
  railRightBottom: { slot: '5602530637', format: 'display' },
  // Mobile/tablet gap-filler below tool widgets (where desktop shows rails)
  toolBelowMultiplex: { slot: '5416461285', format: 'multiplex' },
  // After-intro leaderboard (first in-page unit on content templates)
  leaderTop: { slot: '2466487018', format: 'display' },
  // Between-section display units, shared across templates
  contentMidA: { slot: '8617339698', format: 'display' },
  contentMidB: { slot: '9738849672', format: 'display' },
  // Mid-article fluid units (rotate A→B→C→D when a page injects several)
  articleMidA: { slot: '9547277983', format: 'in-article' },
  articleMidB: { slot: '4462472264', format: 'in-article' },
  articleMidC: { slot: '8234196312', format: 'in-article' },
  articleMidD: { slot: '7527242008', format: 'in-article' },
  // End-of-content multiplex, shared across templates
  bottomMultiplex: { slot: '2790297942', format: 'multiplex' },
  // Blog index in-grid cell
  blogGrid: { slot: '2243503035', format: 'display' },
} as const satisfies Record<string, AdPlacement>;

export type PlacementKey = keyof typeof AD_PLACEMENTS;

/** In-article rotation order for templates that inject multiple A units. */
export const ARTICLE_ROTATION: readonly PlacementKey[] = [
  'articleMidA',
  'articleMidB',
  'articleMidC',
  'articleMidD',
];

/**
 * Raw HTML for an in-article unit — for templates that build the article body
 * as an HTML string (blog `htmlContent` mode) and can't render AdSlot.astro.
 * Markup must stay in sync with AdSlot.astro's in-article branch: the
 * `data-ad-lazy` attr hands push timing to the Layout.astro observer, and the
 * `.ad-reserve` wrapper provides the CLS reserve + unfilled collapse.
 */
export function inArticleAdHtml(key: PlacementKey): string {
  const p = AD_PLACEMENTS[key];
  return (
    // width:100% is load-bearing: .ad-reserve is display:flex, so a plain
    // block <ins> shrinks to 0 width as a flex item — the lazy observer then
    // never pushes it AND it sits as a statusless DOM-order sink that eats
    // later slots' bare pushes. Must stay in sync with AdSlot.astro.
    `<div class="ad-reserve ad-reserve--in-article my-8" aria-label="Advertisement">` +
    `<ins class="adsbygoogle" style="display:block;text-align:center;width:100%" ` +
    `data-ad-layout="in-article" data-ad-format="fluid" ` +
    `data-ad-client="${AD_CLIENT}" data-ad-slot="${p.slot}" data-ad-lazy></ins>` +
    `</div>`
  );
}

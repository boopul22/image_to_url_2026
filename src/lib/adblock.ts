// Client-only ad-blocker detection — an analytics signal only. It must NEVER
// block or degrade an upload. Shared by the homepage uploader (HomePage.astro)
// and the tool-page uploader (ImageUploader.astro) so both report consistently.
//
// Bait-element (cosmetic-filter) detection is the only reliable cross-blocker
// signal. We deliberately do NOT check `adsbygoogle.loaded` or load
// adsbygoogle.js and watch for `onerror`: uBlock Origin / Brave inject a
// *surrogate* stub for that script that "loads" successfully and even sets
// `adsbygoogle.loaded = true`, so those checks report "no blocker" for the most
// common blockers. Cosmetic filters can't be surrogated around — every major
// blocker (uBlock, AdBlock, ABP, AdGuard, Brave) hides elements whose class/id
// match EasyList's generic rules. The result is cached for the page session.
let adblockFlag: boolean | null = null;

export function resetAdBlockCache(): void {
  adblockFlag = null;
}

export async function detectAdBlock(opts?: { force?: boolean }): Promise<boolean> {
  if (opts?.force) adblockFlag = null;
  if (adblockFlag !== null) return adblockFlag;
  let blocked = false;

  try {
    const baitClass =
      'adsbox ad-banner ads ad-placement pub_300x250 adsbygoogle ' +
      'textAd text-ad text_ad text-ads text_ads ad-text sponsored-ad banner_ad';
    const baitIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead', 'adsense'];

    const baits: HTMLElement[] = [];
    for (const id of baitIds) {
      const el = document.createElement('div');
      el.id = id;
      el.className = baitClass;
      // Offscreen + sized. No display/visibility override, so the blocker's
      // `display:none !important` cosmetic rule can still take effect.
      el.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:14px;height:14px;';
      el.innerHTML = '&nbsp;';
      document.body.appendChild(el);
      baits.push(el);
    }

    await new Promise((r) => setTimeout(r, 120)); // let cosmetic filters apply

    for (const el of baits) {
      const cs = getComputedStyle(el);
      if (
        el.offsetParent === null ||
        el.offsetHeight === 0 ||
        el.offsetWidth === 0 ||
        el.clientHeight === 0 ||
        cs.display === 'none' ||
        cs.visibility === 'hidden' ||
        cs.opacity === '0'
      ) {
        blocked = true;
        break;
      }
    }

    for (const el of baits) el.remove();
  } catch {
    /* ignore — analytics only, never affects the upload */
  }

  adblockFlag = blocked;
  return blocked;
}

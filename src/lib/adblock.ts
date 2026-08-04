// Client-only ad-blocker detection shared by every browser uploader. The bait
// elements target EasyList's generic cosmetic rules, which also catches
// blockers that substitute a successful-looking AdSense script surrogate.
let adblockFlag: boolean | null = null;

export function resetAdBlockCache(): void {
  adblockFlag = null;
}

export async function detectAdBlock(opts?: { force?: boolean }): Promise<boolean> {
  if (opts?.force) adblockFlag = null;
  if (adblockFlag !== null) return adblockFlag;

  let blocked = false;
  const baits: HTMLElement[] = [];

  try {
    const baitClass =
      'adsbox ad-banner ads ad-placement pub_300x250 adsbygoogle ' +
      'textAd text-ad text_ad text-ads text_ads ad-text sponsored-ad banner_ad';
    const baitIds = ['AdHeader', 'AdContainer', 'AD_Top', 'homead', 'ad-lead', 'adsense'];

    for (const id of baitIds) {
      const el = document.createElement('div');
      el.id = id;
      el.className = baitClass;
      el.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:14px;height:14px;';
      el.innerHTML = '&nbsp;';
      document.body.appendChild(el);
      baits.push(el);
    }

    await new Promise((resolve) => setTimeout(resolve, 120));

    for (const el of baits) {
      const style = getComputedStyle(el);
      if (
        el.offsetParent === null ||
        el.offsetHeight === 0 ||
        el.offsetWidth === 0 ||
        el.clientHeight === 0 ||
        style.display === 'none' ||
        style.visibility === 'hidden' ||
        style.opacity === '0'
      ) {
        blocked = true;
        break;
      }
    }
  } catch {
    // Detection failures must not create a false-positive lockout.
    blocked = false;
  } finally {
    for (const el of baits) el.remove();
  }

  adblockFlag = blocked;
  return blocked;
}

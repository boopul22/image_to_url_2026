import type { LandingImages } from '../i18n/landing/types';
import meta from '../data/page-images-meta.json';

type FigureMeta = { alt: string; caption: string };
type PageMeta = { hero: FigureMeta; body: FigureMeta };

const WIDTH = 1200;
const HEIGHT = 675;

/**
 * Resolve the two SEO figures for a page id (landing pageKey, EN slug, or
 * guides/<slug>). Returns undefined when meta is missing so templates can
 * skip during partial rollouts.
 */
export function resolvePageImages(id: string): LandingImages | undefined {
  const entry = (meta as Record<string, PageMeta>)[id];
  if (!entry?.hero?.alt || !entry?.body?.alt) return undefined;
  return {
    hero: {
      src: `/page-images/${id}/hero.webp`,
      alt: entry.hero.alt,
      caption: entry.hero.caption,
      width: WIDTH,
      height: HEIGHT,
    },
    body: {
      src: `/page-images/${id}/body.webp`,
      alt: entry.body.alt,
      caption: entry.body.caption,
      width: WIDTH,
      height: HEIGHT,
    },
  };
}

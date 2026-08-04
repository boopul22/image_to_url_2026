export const ADSENSE_CLIENT = 'ca-pub-7803867089582138';

// The same three responsive tool units used by the TTS site. These are the
// only manual placements in ImageToURL: one banner and two wide-screen rails.
export const TOOL_AD_SLOTS = {
  top: '5304939741',
  leftRail: '9000642171',
  rightRail: '6374478833',
} as const;

const EXCLUDED_PREFIXES = ['/admin', '/api', '/dashboard'];

export function isMonetizedPath(pathname: string): boolean {
  const path = pathname.replace(/\/+$/, '') || '/';
  return !EXCLUDED_PREFIXES.some((prefix) => path === prefix || path.startsWith(`${prefix}/`));
}

/** Split an FAQ answer so the first sentence can be bolded for snippet / ATF clarity. */
export function splitFaqAnswer(answer: string): { lead: string; rest: string } {
  const text = (answer || '').trim();
  if (!text) return { lead: '', rest: '' };
  const m = text.match(/^([\s\S]+?[.!?])(?:\s+|$)([\s\S]*)$/);
  if (!m) return { lead: text, rest: '' };
  return { lead: m[1].trim(), rest: (m[2] || '').trim() };
}

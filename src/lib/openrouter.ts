// Shared OpenRouter client. Used by runtime blog translator and the one-shot
// UI-string filler script. Model is pinned to google/gemini-3.1-flash-lite-preview
// for cost; override via OPENROUTER_MODEL env if needed.

export const OPENROUTER_MODEL = 'google/gemini-3.1-flash-lite-preview';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

export interface OpenRouterOptions {
  apiKey: string;
  model?: string;
  system: string;
  user: string;
  temperature?: number;
  responseFormat?: 'json' | 'text';
  signal?: AbortSignal;
}

export async function openrouterFetch(opts: OpenRouterOptions): Promise<string> {
  const body: Record<string, unknown> = {
    model: opts.model ?? OPENROUTER_MODEL,
    messages: [
      { role: 'system', content: opts.system },
      { role: 'user', content: opts.user },
    ],
    temperature: opts.temperature ?? 0.2,
  };
  if (opts.responseFormat === 'json') {
    body.response_format = { type: 'json_object' };
  }

  const res = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${opts.apiKey}`,
      'HTTP-Referer': 'https://imagetourl.cloud',
      'X-Title': 'ImageToURL',
    },
    body: JSON.stringify(body),
    signal: opts.signal,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OpenRouter ${res.status}: ${text.slice(0, 500)}`);
  }

  const json = (await res.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };
  const content = json.choices?.[0]?.message?.content;
  if (!content) throw new Error('OpenRouter returned no content');
  return content;
}

export async function openrouterJSON<T>(opts: OpenRouterOptions): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    const raw = await openrouterFetch({ ...opts, responseFormat: 'json' });
    try {
      const cleaned = raw.trim().replace(/^```json\s*/i, '').replace(/```$/, '').trim();
      return JSON.parse(cleaned) as T;
    } catch (err) {
      lastErr = err;
    }
  }
  throw new Error(`OpenRouter JSON parse failed after retries: ${lastErr}`);
}

const ACCOUNT_ID = 'ab54ca2d01df4886aa0c3f240ace806d';
const DATABASE_ID = '4cc70585-dd14-4083-9b03-6dda95846d64';

function createHttpD1(): D1Database {
  const apiToken = import.meta.env.CLOUDFLARE_API_TOKEN || '';

  if (!apiToken) {
    throw new Error(
      'CLOUDFLARE_API_TOKEN not set in .env — create one at https://dash.cloudflare.com/profile/api-tokens with D1 Edit permission',
    );
  }

  async function query(sql: string, params: any[] = []): Promise<any> {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sql, params }),
      },
    );
    const data: any = await res.json();
    if (!data.success) {
      throw new Error(data.errors?.[0]?.message || 'D1 query failed');
    }
    return data.result?.[0] || { results: [], meta: {} };
  }

  function createStatement(sql: string) {
    let boundParams: any[] = [];
    return {
      bind(...params: any[]) {
        boundParams = params;
        return this;
      },
      async first<T = any>(): Promise<T | null> {
        const result = await query(sql, boundParams);
        return (result.results?.[0] as T) || null;
      },
      async all() {
        const result = await query(sql, boundParams);
        return { results: result.results || [], meta: result.meta || {} };
      },
      async run() {
        const result = await query(sql, boundParams);
        return { meta: result.meta || {} };
      },
    };
  }

  return { prepare: createStatement } as unknown as D1Database;
}

export function getDB(locals: App.Locals): D1Database {
  try {
    const db = (locals as any).runtime?.env?.DB;
    if (db) return db;
  } catch {
    // runtime.env not available in dev
  }

  if (import.meta.env.DEV) {
    return createHttpD1();
  }

  throw new Error('D1 database not available');
}

const ACCOUNT_ID = 'ab54ca2d01df4886aa0c3f240ace806d';
const DATABASE_ID = '4cc70585-dd14-4083-9b03-6dda95846d64';

// D1 HTTP API client for dev mode (mimics D1Database interface)
function createHttpD1(): D1Database {
  async function getToken(): Promise<string> {
    // Try env var first
    const envToken =
      (import.meta as any).env?.CLOUDFLARE_API_TOKEN ||
      (import.meta as any).env?.CF_API_TOKEN;
    if (envToken) return envToken;

    // Read wrangler OAuth token from config file
    try {
      const fs = await import('node:fs');
      const os = await import('node:os');
      const path = await import('node:path');
      const configPaths = [
        path.join(os.homedir(), '.wrangler', 'config', 'default.toml'),
        path.join(os.homedir(), 'Library', 'Preferences', '.wrangler', 'config', 'default.toml'),
      ];
      for (const p of configPaths) {
        try {
          const content = fs.readFileSync(p, 'utf-8');
          const match = content.match(/oauth_token\s*=\s*"([^"]+)"/);
          if (match) return match[1];
        } catch {
          continue;
        }
      }
    } catch {
      // node:fs not available
    }

    throw new Error('No Cloudflare API token found for D1 HTTP API');
  }

  async function query(sql: string, params: any[] = []): Promise<any> {
    const token = await getToken();
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${ACCOUNT_ID}/d1/database/${DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
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
      async first<T = any>(col?: string): Promise<T | null> {
        const result = await query(sql, boundParams);
        const row = result.results?.[0] || null;
        if (col && row) return row[col];
        return row;
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

  // Fallback to D1 HTTP API for dev mode
  if (import.meta.env.DEV) {
    return createHttpD1();
  }

  throw new Error('D1 database not available');
}

export function getEnv(locals: App.Locals): Record<string, string> {
  try {
    const runtimeEnv = (locals as any).runtime?.env;
    if (runtimeEnv) return runtimeEnv;
  } catch {
    // runtime.env not available in dev
  }

  // Fallback to import.meta.env for dev mode
  return import.meta.env as any;
}

export function getDB(locals: App.Locals): D1Database | null {
  try {
    return (locals as any).runtime?.env?.DB ?? null;
  } catch {
    return null;
  }
}

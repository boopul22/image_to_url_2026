export function getDB(locals: App.Locals): D1Database {
  try {
    const db = (locals as any).runtime?.env?.DB;
    if (db) return db;
  } catch {
    // runtime.env not available in dev
  }
  throw new Error('D1 database not available');
}

import { generateId } from './crypto';

// --- Types ---

export interface PostContent {
  intro: string;
  sections: Array<{ heading: string; number: string; body: string }>;
  blockquote?: string;
  callout?: { title: string; body: string };
  outro: string;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: PostContent;
  htmlContent: string;
  categoryId: string | null;
  categoryName: string | null;
  categoryColor: string | null;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
  coverImage: string | null;
  iconFallback: string | null;
  iconBg: string | null;
  readTime: string;
  metaTitle: string | null;
  metaDescription: string | null;
  relatedSlugs: string[];
  publishedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
  description: string | null;
  sortOrder: number;
  postCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  content: string;
  status: 'draft' | 'published';
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityEntry {
  id: string;
  userId: string;
  userName: string;
  action: string;
  entityType: string;
  entityId: string | null;
  entityTitle: string | null;
  details: string | null;
  createdAt: string;
}

// --- Helpers ---

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function calculateReadTime(content: PostContent): string {
  let words = 0;
  const countWords = (text: string) => text.split(/\s+/).filter(Boolean).length;

  words += countWords(content.intro || '');
  for (const section of content.sections || []) {
    words += countWords(section.heading || '');
    words += countWords(section.body || '');
  }
  if (content.blockquote) words += countWords(content.blockquote);
  if (content.callout) {
    words += countWords(content.callout.title || '');
    words += countWords(content.callout.body || '');
  }
  words += countWords(content.outro || '');

  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function calculateReadTimeFromHtml(html: string): string {
  const text = html.replace(/<[^>]*>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export function isHtmlContent(raw: string): boolean {
  if (!raw) return false;
  const trimmed = raw.trim();
  if (trimmed.startsWith('{')) {
    try {
      const parsed = JSON.parse(trimmed);
      if (parsed && typeof parsed === 'object' && 'intro' in parsed) return false;
    } catch {}
  }
  return true;
}

export function calculateReadTimeAuto(raw: string): string {
  if (isHtmlContent(raw)) {
    return calculateReadTimeFromHtml(raw);
  }
  return calculateReadTime(parseContentJson(raw));
}

export function parseContentJson(raw: string): PostContent {
  try {
    const parsed = JSON.parse(raw);
    return {
      intro: parsed.intro || '',
      sections: Array.isArray(parsed.sections) ? parsed.sections : [],
      blockquote: parsed.blockquote || undefined,
      callout: parsed.callout || undefined,
      outro: parsed.outro || '',
    };
  } catch {
    return { intro: '', sections: [], outro: '' };
  }
}

export function mapPostRow(row: any): Post {
  const rawContent = row.content || '';
  const html = isHtmlContent(rawContent);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt || '',
    content: html ? { intro: '', sections: [], outro: '' } : parseContentJson(rawContent),
    htmlContent: html ? rawContent : '',
    categoryId: row.category_id || null,
    categoryName: row.category_name || null,
    categoryColor: row.category_color || null,
    authorName: row.author_name || '',
    authorRole: row.author_role || '',
    authorAvatar: row.author_avatar || '',
    featured: !!row.featured,
    status: row.status || 'draft',
    coverImage: row.cover_image || null,
    iconFallback: row.icon_fallback || null,
    iconBg: row.icon_bg || null,
    readTime: row.read_time || '',
    metaTitle: row.meta_title || null,
    metaDescription: row.meta_description || null,
    relatedSlugs: parseJsonArray(row.related_slugs),
    publishedAt: row.published_at || null,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function parseJsonArray(raw: string | null): string[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

// --- Database Queries ---

export async function getPublishedPosts(
  db: D1Database,
  opts: { limit?: number; offset?: number; categoryId?: string; search?: string } = {},
): Promise<{ posts: Post[]; total: number }> {
  const limit = opts.limit || 20;
  const offset = opts.offset || 0;
  const params: any[] = [];
  let where = "WHERE p.status = 'published'";

  if (opts.categoryId) {
    where += ' AND p.category_id = ?';
    params.push(opts.categoryId);
  }
  if (opts.search) {
    where += ' AND (p.title LIKE ? OR p.excerpt LIKE ?)';
    params.push(`%${opts.search}%`, `%${opts.search}%`);
  }

  const countResult = await db
    .prepare(`SELECT COUNT(*) as count FROM posts p ${where}`)
    .bind(...params)
    .first<{ count: number }>();
  const total = countResult?.count || 0;

  const rows = await db
    .prepare(
      `SELECT p.*, c.name as category_name, c.color as category_color
       FROM posts p LEFT JOIN categories c ON p.category_id = c.id
       ${where} ORDER BY p.published_at DESC, p.created_at DESC LIMIT ? OFFSET ?`,
    )
    .bind(...params, limit, offset)
    .all();

  return {
    posts: (rows.results || []).map(mapPostRow),
    total,
  };
}

export async function getPostBySlug(db: D1Database, slug: string): Promise<Post | null> {
  const row = await db
    .prepare(
      `SELECT p.*, c.name as category_name, c.color as category_color
       FROM posts p LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.slug = ? AND p.status = 'published'`,
    )
    .bind(slug)
    .first();

  return row ? mapPostRow(row) : null;
}

export async function getRelatedPosts(db: D1Database, slugs: string[]): Promise<Post[]> {
  if (!slugs.length) return [];
  const placeholders = slugs.map(() => '?').join(',');
  const rows = await db
    .prepare(
      `SELECT p.*, c.name as category_name, c.color as category_color
       FROM posts p LEFT JOIN categories c ON p.category_id = c.id
       WHERE p.slug IN (${placeholders}) AND p.status = 'published'`,
    )
    .bind(...slugs)
    .all();

  return (rows.results || []).map(mapPostRow);
}

export async function getCategories(db: D1Database): Promise<Category[]> {
  const rows = await db
    .prepare(
      `SELECT c.*, (SELECT COUNT(*) FROM posts WHERE category_id = c.id) as post_count
       FROM categories c ORDER BY c.sort_order ASC, c.name ASC`,
    )
    .all();

  return (rows.results || []).map((row: any) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    color: row.color,
    description: row.description || null,
    sortOrder: row.sort_order || 0,
    postCount: row.post_count || 0,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }));
}

export async function logActivity(
  db: D1Database,
  params: {
    userId: string;
    userName: string;
    action: string;
    entityType: string;
    entityId?: string;
    entityTitle?: string;
    details?: string;
  },
): Promise<void> {
  const id = generateId();
  await db
    .prepare(
      `INSERT INTO activity_log (id, user_id, user_name, action, entity_type, entity_id, entity_title, details)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      id,
      params.userId,
      params.userName,
      params.action,
      params.entityType,
      params.entityId || null,
      params.entityTitle || null,
      params.details || null,
    )
    .run();
}

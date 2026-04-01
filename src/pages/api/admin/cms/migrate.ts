export const prerender = false;

import type { APIRoute } from 'astro';
import { getDB } from '../../../../lib/db';
import { generateId } from '../../../../lib/crypto';
import { generateSlug, logActivity } from '../../../../lib/cms';
import { blogPosts } from '../../../../data/blog-posts';

export const POST: APIRoute = async ({ locals }) => {
  if (!locals.user || locals.user.role !== 'admin') {
    return new Response(JSON.stringify({ error: 'Forbidden' }), {
      status: 403,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const db = getDB(locals);

  // Check if already migrated
  const existing = await db.prepare('SELECT COUNT(*) as count FROM posts').first<{ count: number }>();
  if (existing && existing.count > 0) {
    return new Response(JSON.stringify({ error: 'Posts already exist. Migration skipped.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Extract unique categories
  const categoryMap = new Map<string, { id: string; color: string }>();
  for (const post of blogPosts) {
    if (!categoryMap.has(post.category)) {
      categoryMap.set(post.category, {
        id: generateId(),
        color: post.categoryColor,
      });
    }
  }

  // Insert categories
  let catCount = 0;
  for (const [name, { id, color }] of categoryMap) {
    await db
      .prepare(
        `INSERT INTO categories (id, name, slug, color, sort_order) VALUES (?, ?, ?, ?, ?)`,
      )
      .bind(id, name, generateSlug(name), color, catCount)
      .run();
    catCount++;
  }

  // Insert posts
  for (const post of blogPosts) {
    const id = generateId();
    const cat = categoryMap.get(post.category)!;
    const contentJson = JSON.stringify(post.content);
    const relatedJson = JSON.stringify(post.relatedSlugs);

    // Parse date like "Oct 24, 2024" to ISO
    const parsedDate = new Date(post.date);
    const publishedAt = isNaN(parsedDate.getTime()) ? null : parsedDate.toISOString();

    await db
      .prepare(
        `INSERT INTO posts (id, slug, title, excerpt, content, category_id, author_name, author_role, author_avatar, featured, status, cover_image, icon_fallback, icon_bg, read_time, related_slugs, published_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'published', ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        id,
        post.slug,
        post.title,
        post.excerpt,
        contentJson,
        cat.id,
        post.author.name,
        post.author.role,
        post.author.avatar,
        post.featured ? 1 : 0,
        post.image || null,
        post.iconFallback || null,
        post.iconBg || null,
        post.readTime,
        relatedJson,
        publishedAt,
      )
      .run();
  }

  await logActivity(db, {
    userId: locals.user.id,
    userName: locals.user.name,
    action: 'migrate_blog',
    entityType: 'system',
    entityTitle: `Migrated ${blogPosts.length} posts and ${categoryMap.size} categories`,
  });

  return new Response(
    JSON.stringify({
      success: true,
      data: {
        postsCreated: blogPosts.length,
        categoriesCreated: categoryMap.size,
        categories: Array.from(categoryMap.entries()).map(([name, { id }]) => ({ id, name })),
      },
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } },
  );
};

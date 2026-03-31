export const prerender = false;

import type { APIRoute } from 'astro';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { getDB } from '../../lib/db';
import { getEnv } from '../../lib/env';

const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];
const MAX_SIZE = 10 * 1024 * 1024; // 10MB

function generateId(): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

function getExtension(mimeType: string): string {
  const map: Record<string, string> = {
    'image/jpeg': 'jpg',
    'image/png': 'png',
    'image/webp': 'webp',
    'image/gif': 'gif',
    'image/svg+xml': 'svg',
  };
  return map[mimeType] || 'bin';
}

export const POST: APIRoute = async ({ request, locals }) => {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || !(file instanceof File)) {
      return new Response(JSON.stringify({ error: 'No file provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!ALLOWED_TYPES.includes(file.type)) {
      return new Response(
        JSON.stringify({
          error: `Unsupported file type: ${file.type}. Allowed: JPG, PNG, WebP, GIF, SVG`,
        }),
        { status: 400, headers: { 'Content-Type': 'application/json' } },
      );
    }

    if (file.size > MAX_SIZE) {
      return new Response(JSON.stringify({ error: 'File too large. Maximum size is 10MB.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const env = getEnv(locals);
    const accountId = env.CLOUDFLARE_ACCOUNT_ID;
    const accessKeyId = env.R2_ACCESS_KEY_ID;
    const secretAccessKey = env.R2_SECRET_ACCESS_KEY;
    const bucketName = env.R2_BUCKET_NAME;
    const publicUrl = env.R2_PUBLIC_URL;

    if (!accessKeyId || !secretAccessKey) {
      return new Response(JSON.stringify({ error: 'R2 credentials not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const s3 = new S3Client({
      region: 'auto',
      endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
      credentials: { accessKeyId, secretAccessKey },
    });

    const id = generateId();
    const ext = getExtension(file.type);
    const key = `uploads/${id}.${ext}`;
    const buffer = await file.arrayBuffer();

    await s3.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: new Uint8Array(buffer),
        ContentType: file.type,
      }),
    );

    const imageUrl = publicUrl
      ? `${publicUrl}/${key}`
      : `https://${bucketName}.${accountId}.r2.cloudflarestorage.com/${key}`;

    // Save to D1 if database is available
    try {
      const db = getDB(locals) as any;
      const user = locals.user;
      const uploadedVia = request.headers.get('authorization') ? 'api' : 'web';

      await db
        .prepare(
          `INSERT INTO images (id, user_id, r2_key, url, filename, size_bytes, mime_type, uploaded_via)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        )
        .bind(id, user?.id ?? null, key, imageUrl, file.name, file.size, file.type, uploadedVia)
        .run();
    } catch {
      // DB insert failed but upload succeeded — still return success
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: {
          id: `img_${id}`,
          key,
          url: imageUrl,
          filename: file.name,
          size: file.size,
          mimetype: file.type,
          created_at: new Date().toISOString(),
        },
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (err: any) {
    console.error('Upload error:', err);
    return new Response(
      JSON.stringify({ error: 'Upload failed: ' + (err.message || 'Unknown error') }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};

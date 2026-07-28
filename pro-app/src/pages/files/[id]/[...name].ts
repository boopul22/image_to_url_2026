export const prerender = false;

import type { APIRoute } from 'astro';
import { currentPeriodStart } from '../../../lib/assets';
import { authenticateSession } from '../../../lib/auth';
import { getProEnv } from '../../../lib/env';

export const GET: APIRoute = async ({ request, params, locals }) => {
	const id = params.id;
	if (!id) return new Response('Not found', { status: 404 });

	const env = getProEnv();
	const asset = await env.PRO_DB.prepare(
		`SELECT user_id, object_key, original_name, mime_type, visibility
		   FROM assets
		  WHERE id = ? AND status = 'ready'
		  LIMIT 1`,
	)
		.bind(id)
		.first<{
			user_id: string;
			object_key: string;
			original_name: string;
			mime_type: string;
			visibility: 'private' | 'unlisted' | 'public';
		}>();

	if (!asset) {
		return new Response('Not found', { status: 404 });
	}
	if (asset.visibility === 'private') {
		let viewer = locals.proUser;
		if (!viewer) {
			const match = request.headers.get('Cookie')?.match(/(?:^|;\s*)session=([^;]+)/);
			if (match?.[1]) {
				try {
					viewer = (await authenticateSession(env, decodeURIComponent(match[1]))) ?? undefined;
				} catch (error) {
					console.error('Private asset authentication failed', error);
				}
			}
		}
		if (viewer?.id !== asset.user_id) return new Response('Not found', { status: 404 });
	}

	const object = await env.PRO_STORAGE.get(asset.object_key);
	if (!object) return new Response('Not found', { status: 404 });

	const headers = new Headers();
	object.writeHttpMetadata(headers);
	headers.set('Content-Type', asset.mime_type);
	headers.set('Content-Length', String(object.size));
	headers.set('ETag', object.httpEtag);
	headers.set('X-Content-Type-Options', 'nosniff');
	headers.set(
		'Cache-Control',
		asset.visibility === 'private'
			? 'private, no-store'
			: 'public, max-age=31536000, immutable',
	);
	headers.set(
		'Content-Disposition',
		`inline; filename*=UTF-8''${encodeURIComponent(asset.original_name)}`,
	);

	if (request.headers.get('If-None-Match') === object.httpEtag) {
		return new Response(null, { status: 304, headers });
	}
	locals.cfContext.waitUntil(
		env.PRO_DB.prepare(
			`INSERT INTO usage_monthly
			   (user_id, period_start, bandwidth_bytes)
			 VALUES (?, ?, ?)
			 ON CONFLICT(user_id, period_start) DO UPDATE SET
			   bandwidth_bytes = bandwidth_bytes + excluded.bandwidth_bytes,
			   updated_at = datetime('now')`,
		)
			.bind(asset.user_id, currentPeriodStart(), object.size)
			.run()
			.catch((error) => console.error('Bandwidth usage update failed', error)),
	);
	return new Response(object.body, { headers });
};

import type { APIRoute } from 'astro';
import { paddleEnvironment } from '../../../lib/billing';
import { getProEnv } from '../../../lib/env';
import { json } from '../../../lib/http';
import { getPaddleInstance, getPaddleWebhookSecret } from '../../../lib/paddle';
import { processPaddleWebhookEvent } from '../../../lib/paddle-webhooks';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const env = getProEnv();
	const environment = paddleEnvironment(env);
	const secret = getPaddleWebhookSecret(env);
	const signature = request.headers.get('paddle-signature') ?? '';
	const rawBody = await request.text();

	if (!environment || !secret) {
		return json({ error: 'Paddle webhook is not configured' }, 503);
	}
	if (!signature || !rawBody) {
		return json({ error: 'Missing Paddle signature or body' }, 400);
	}

	try {
		// Signature verification must use the exact raw body before any parsing or database work.
		const event = await getPaddleInstance(env).webhooks.unmarshal(rawBody, secret, signature);
		const result = await processPaddleWebhookEvent(env, event, environment);
		return json({ received: true, result });
	} catch (error) {
		console.error('Paddle webhook processing failed', error);
		// Paddle retries every non-2xx response; never acknowledge an unverified or failed delivery.
		return json({ error: 'Paddle webhook processing failed' }, 500);
	}
};

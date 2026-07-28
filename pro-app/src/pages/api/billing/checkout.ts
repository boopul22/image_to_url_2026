import type { APIRoute } from 'astro';
import {
	isPaddleCheckoutConfigured,
	paddleEnvironment,
	paddlePriceId,
	paddleRequest,
	PaddleApiError,
	storageAddonPriceId,
	storagePackQuantity,
	type BillingInterval,
	type PaddleTransaction,
} from '../../../lib/billing';
import { getProEnv } from '../../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../../lib/http';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
	const unauthorized = requireUser(locals.proUser);
	if (unauthorized) return unauthorized;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	if (!isPaddleCheckoutConfigured(env)) {
		return json({ error: 'Paddle checkout is not configured yet' }, 503);
	}

	const input = (await request.json().catch(() => ({}))) as {
		interval?: string;
		storagePacks?: unknown;
	};
	const interval: BillingInterval = input.interval === 'year' ? 'year' : 'month';
	const priceId = paddlePriceId(env, interval);
	const storagePacks = storagePackQuantity(input.storagePacks);
	const addonPriceId = storagePacks > 0 ? storageAddonPriceId(env, interval) : null;
	if (!priceId || !env.PADDLE_CLIENT_TOKEN) {
		return json({ error: 'The selected Paddle price is not configured' }, 503);
	}
	if (storagePacks > 0 && !addonPriceId) {
		return json({ error: 'The storage add-on is not configured yet' }, 503);
	}

	const activeSubscription = await env.PRO_DB.prepare(
		`SELECT provider_subscription_id
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND status IN ('trialing', 'active', 'past_due', 'paused')
		  LIMIT 1`,
	)
		.bind(locals.proUser!.id)
		.first<{ provider_subscription_id: string | null }>();
	if (activeSubscription) {
		return json({ error: 'This workspace already has a Paddle subscription' }, 409);
	}

	const recentAttempts = await env.PRO_DB.prepare(
		`SELECT COUNT(*) AS attempts
		   FROM billing_checkout_requests
		  WHERE user_id = ?
		    AND created_at >= datetime('now', '-1 hour')`,
	)
		.bind(locals.proUser!.id)
		.first<{ attempts: number }>();
	if (Number(recentAttempts?.attempts ?? 0) >= 5) {
		return json({ error: 'Too many checkout attempts. Please try again later.' }, 429);
	}

	const previousCustomer = await env.PRO_DB.prepare(
		`SELECT provider_customer_id
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND provider_customer_id IS NOT NULL
		  ORDER BY updated_at DESC
		  LIMIT 1`,
	)
		.bind(locals.proUser!.id)
		.first<{ provider_customer_id: string }>();

	try {
		const transaction = await paddleRequest<PaddleTransaction>(env, '/transactions', {
			method: 'POST',
			body: JSON.stringify({
				items: [
					{ price_id: priceId, quantity: 1 },
					...(addonPriceId ? [{ price_id: addonPriceId, quantity: storagePacks }] : []),
				],
				...(previousCustomer?.provider_customer_id
					? { customer_id: previousCustomer.provider_customer_id }
					: {}),
				custom_data: {
					imagetourl_user_id: locals.proUser!.id,
					imagetourl_plan: 'pro',
					imagetourl_storage_packs: storagePacks,
				},
				checkout: {
					url: `${env.SITE_URL}/pricing`,
				},
			}),
		});

		await env.PRO_DB.prepare(
			`INSERT INTO billing_checkout_requests
			   (transaction_id, user_id, plan, billing_interval, price_id, storage_pack_quantity, provider_customer_id)
			 VALUES (?, ?, 'pro', ?, ?, ?, ?)`,
		)
			.bind(
				transaction.id,
				locals.proUser!.id,
				interval,
				priceId,
				storagePacks,
				previousCustomer?.provider_customer_id ?? null,
			)
			.run();

		return json(
			{
				transactionId: transaction.id,
				clientToken: env.PADDLE_CLIENT_TOKEN,
				environment: paddleEnvironment(env),
			},
			201,
		);
	} catch (error) {
		if (error instanceof PaddleApiError) {
			console.error('Paddle checkout creation failed', {
				code: error.code,
				status: error.status,
				requestId: error.requestId,
			});
			return json(
				{
					error:
						error.code === 'transaction_checkout_url_domain_is_not_approved'
							? 'Paddle has not approved the Pro checkout domain yet'
							: 'Paddle could not start checkout. Please try again.',
				},
				error.status >= 400 && error.status < 500 ? 400 : 502,
			);
		}
		console.error('Unexpected checkout creation failure', error);
		return json({ error: 'Paddle could not start checkout. Please try again.' }, 502);
	}
};

import type { APIRoute } from 'astro';
import { paddleEnvironment } from '../../../lib/billing';
import { getProEnv } from '../../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../../lib/http';
import { getPaddleInstance } from '../../../lib/paddle';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
	const unauthorized = requireUser(locals.proUser);
	if (unauthorized) return unauthorized;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	const environment = paddleEnvironment(env);
	if (!environment || !env.PADDLE_API_KEY) {
		return json({ error: 'Paddle billing is not configured' }, 503);
	}

	// The customer id is resolved only from the authenticated server session's user id.
	const customer = await env.PRO_DB.prepare(
		`SELECT provider_customer_id
		   FROM paddle_customers
		  WHERE user_id = ? AND paddle_environment = ?
		  ORDER BY updated_at DESC
		  LIMIT 1`,
	)
		.bind(locals.proUser!.id, environment)
		.first<{ provider_customer_id: string }>();

	if (!customer?.provider_customer_id) {
		return json({ error: 'No Paddle billing account exists for this workspace' }, 404);
	}

	const subscriptions = await env.PRO_DB.prepare(
		`SELECT provider_subscription_id
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND paddle_environment = ?
		    AND provider_subscription_id IS NOT NULL
		    AND status IN ('active', 'trialing', 'past_due', 'paused')
		  ORDER BY updated_at DESC`,
	)
		.bind(locals.proUser!.id, environment)
		.all<{ provider_subscription_id: string }>();
	const subscriptionIds = (subscriptions.results ?? []).map((row) => row.provider_subscription_id);

	try {
		const portal = await getPaddleInstance(env).customerPortalSessions.create(
			customer.provider_customer_id,
			subscriptionIds,
		);
		return json({ url: portal.urls.general.overview });
	} catch (error) {
		console.error('Paddle portal creation failed', error);
		return json({ error: 'Could not open the billing portal. Please try again.' }, 502);
	}
};

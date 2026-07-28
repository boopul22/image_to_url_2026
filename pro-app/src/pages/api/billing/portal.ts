import type { APIRoute } from 'astro';
import {
	paddleRequest,
	PaddleApiError,
	type PaddlePortalSession,
} from '../../../lib/billing';
import { getProEnv } from '../../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../../lib/http';

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
	const unauthorized = requireUser(locals.proUser);
	if (unauthorized) return unauthorized;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const env = getProEnv();
	const subscription = await env.PRO_DB.prepare(
		`SELECT provider_customer_id, provider_subscription_id
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND provider_customer_id IS NOT NULL
		  ORDER BY
		    CASE status
		      WHEN 'active' THEN 1
		      WHEN 'trialing' THEN 2
		      WHEN 'past_due' THEN 3
		      WHEN 'paused' THEN 4
		      ELSE 5
		    END,
		    updated_at DESC
		  LIMIT 1`,
	)
		.bind(locals.proUser!.id)
		.first<{
			provider_customer_id: string;
			provider_subscription_id: string | null;
		}>();

	if (!subscription) {
		return json({ error: 'No Paddle billing account exists for this workspace' }, 404);
	}

	try {
		const portal = await paddleRequest<PaddlePortalSession>(
			env,
			`/customers/${encodeURIComponent(subscription.provider_customer_id)}/portal-sessions`,
			{
				method: 'POST',
				body: JSON.stringify(
					subscription.provider_subscription_id
						? { subscription_ids: [subscription.provider_subscription_id] }
						: {},
				),
			},
		);
		return json({ url: portal.urls.general.overview });
	} catch (error) {
		if (error instanceof PaddleApiError) {
			console.error('Paddle portal creation failed', {
				code: error.code,
				status: error.status,
				requestId: error.requestId,
			});
		} else {
			console.error('Unexpected Paddle portal failure', error);
		}
		return json({ error: 'Could not open the billing portal. Please try again.' }, 502);
	}
};

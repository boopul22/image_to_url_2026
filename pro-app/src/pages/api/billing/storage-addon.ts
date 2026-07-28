import type { APIRoute } from 'astro';
import {
	billingIntervalForBasePrice,
	MAX_STORAGE_PACKS,
	paddlePriceId,
	paddleRequest,
	PaddleApiError,
	storageAddonPriceId,
	storagePackQuantity,
	type BillingInterval,
	type PaddleSubscriptionData,
} from '../../../lib/billing';
import { getNumberEnv, getProEnv } from '../../../lib/env';
import { isSameOriginMutation, json, requireUser } from '../../../lib/http';

export const prerender = false;

interface PaddleSubscriptionPreview {
	immediate_transaction?: {
		currency_code?: string;
		details?: { totals?: { total?: string } };
	} | null;
	next_transaction?: {
		currency_code?: string;
		details?: { totals?: { total?: string } };
	} | null;
}

function formatMinorAmount(amount: string | undefined, currency: string | undefined): string | null {
	if (!amount || !currency || !/^-?\d+$/.test(amount)) return null;
	try {
		const formatter = new Intl.NumberFormat('en', { style: 'currency', currency });
		const digits = formatter.resolvedOptions().maximumFractionDigits ?? 2;
		return formatter.format(Number(amount) / 10 ** digits);
	} catch {
		return null;
	}
}

function intervalFromSubscription(
	env: ReturnType<typeof getProEnv>,
	subscription: PaddleSubscriptionData,
	storedPriceId: string | null,
): BillingInterval | null {
	const stored = billingIntervalForBasePrice(env, storedPriceId);
	if (stored) return stored;
	for (const item of subscription.items ?? []) {
		const itemInterval = item.price?.billing_cycle?.interval;
		if (itemInterval === 'month' || itemInterval === 'year') {
			const id = item.price?.id;
			if (id === paddlePriceId(env, itemInterval)) return itemInterval;
		}
	}
	return null;
}

async function prepareChange(
	env: ReturnType<typeof getProEnv>,
	providerSubscriptionId: string,
	storedPriceId: string | null,
	requestedQuantity: number,
) {
	const subscription = await paddleRequest<PaddleSubscriptionData>(
		env,
		`/subscriptions/${providerSubscriptionId}`,
	);
	const interval = intervalFromSubscription(env, subscription, storedPriceId);
	if (!interval) {
		throw new PaddleApiError('The subscription billing interval could not be identified', 409);
	}
	const addonPrice = storageAddonPriceId(env, interval);
	if (!addonPrice) throw new PaddleApiError('The storage add-on is not configured', 503);

	const addonIds = new Set(
		[storageAddonPriceId(env, 'month'), storageAddonPriceId(env, 'year')].filter(
			(value): value is string => Boolean(value),
		),
	);
	const items = (subscription.items ?? [])
		.filter((item) => item.price?.id && !addonIds.has(item.price.id))
		.map((item) => ({ price_id: item.price!.id!, quantity: Math.max(1, Number(item.quantity ?? 1)) }));
	if (items.length === 0) throw new PaddleApiError('The base subscription item is missing', 409);
	if (requestedQuantity > 0) {
		items.push({ price_id: addonPrice, quantity: requestedQuantity });
	}
	return { interval, addonPrice, items };
}

export const POST: APIRoute = async ({ request, locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;
	if (!isSameOriginMutation(request)) return json({ error: 'Invalid request origin' }, 403);

	const input = (await request.json().catch(() => null)) as {
		quantity?: unknown;
		action?: unknown;
	} | null;
	const rawQuantity = Number(input?.quantity);
	if (!Number.isInteger(rawQuantity) || rawQuantity < 0 || rawQuantity > MAX_STORAGE_PACKS) {
		return json({ error: `Choose between 0 and ${MAX_STORAGE_PACKS} storage packs` }, 400);
	}
	const requestedQuantity = storagePackQuantity(rawQuantity);
	const action = input?.action === 'apply' ? 'apply' : 'preview';
	const env = getProEnv();

	const current = await env.PRO_DB.prepare(
		`SELECT provider_subscription_id, status, price_id, storage_pack_quantity
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND status IN ('trialing', 'active')
		  ORDER BY updated_at DESC
		  LIMIT 1`,
	)
		.bind(locals.proUser!.id)
		.first<{
			provider_subscription_id: string | null;
			status: 'trialing' | 'active';
			price_id: string | null;
			storage_pack_quantity: number;
		}>();
	if (!current?.provider_subscription_id) {
		return json({ error: 'An active Pro subscription is required' }, 409);
	}
	const previousQuantity = storagePackQuantity(current.storage_pack_quantity);
	if (requestedQuantity === previousQuantity) {
		return json({ error: 'Your storage allowance is already set to that amount' }, 409);
	}

	try {
		const change = await prepareChange(
			env,
			current.provider_subscription_id,
			current.price_id,
			requestedQuantity,
		);
		if (action === 'preview') {
			const preview = await paddleRequest<PaddleSubscriptionPreview>(
				env,
				`/subscriptions/${current.provider_subscription_id}/preview`,
				{
					method: 'PATCH',
					body: JSON.stringify({
						items: change.items,
						proration_billing_mode: 'prorated_immediately',
					}),
				},
			);
			const immediateCharge = formatMinorAmount(
				preview.immediate_transaction?.details?.totals?.total,
				preview.immediate_transaction?.currency_code,
			);
			const renewalTotal = formatMinorAmount(
				preview.next_transaction?.details?.totals?.total,
				preview.next_transaction?.currency_code,
			);
			const packBytes = getNumberEnv(env.STORAGE_ADDON_BYTES, 50 * 1024 ** 3);
			const baseBytes = getNumberEnv(env.STORAGE_LIMIT_BYTES, 50 * 1024 ** 3);
			return json({
				ok: true,
				previousQuantity,
				requestedQuantity,
				totalStorageBytes: baseBytes + requestedQuantity * packBytes,
				immediateCharge,
				renewalTotal,
				interval: change.interval,
			});
		}

		const recentChange = await env.PRO_DB.prepare(
			`SELECT id
			   FROM subscription_addon_changes
			  WHERE user_id = ?
			    AND requested_quantity = ?
			    AND status IN ('pending', 'completed')
			    AND created_at >= datetime('now', '-1 minute')
			  LIMIT 1`,
		)
			.bind(locals.proUser!.id, requestedQuantity)
			.first();
		if (recentChange) return json({ error: 'That storage change was already submitted' }, 409);

		const changeId = crypto.randomUUID();
		await env.PRO_DB.prepare(
			`INSERT INTO subscription_addon_changes
			   (id, user_id, provider_subscription_id, previous_quantity, requested_quantity, price_id)
			 VALUES (?, ?, ?, ?, ?, ?)`,
		)
			.bind(
				changeId,
				locals.proUser!.id,
				current.provider_subscription_id,
				previousQuantity,
				requestedQuantity,
				requestedQuantity > 0 ? change.addonPrice : null,
			)
			.run();

		try {
			await paddleRequest<PaddleSubscriptionData>(
				env,
				`/subscriptions/${current.provider_subscription_id}`,
				{
					method: 'PATCH',
					body: JSON.stringify({
						items: change.items,
						proration_billing_mode: 'prorated_immediately',
						on_payment_failure: 'prevent_change',
					}),
				},
			);
			await env.PRO_DB.batch([
				env.PRO_DB.prepare(
					`UPDATE subscription_addon_changes
					    SET status = 'completed', updated_at = datetime('now')
					  WHERE id = ?`,
				).bind(changeId),
				env.PRO_DB.prepare(
					`UPDATE subscriptions
					    SET storage_pack_quantity = ?, updated_at = datetime('now')
					  WHERE provider_subscription_id = ?`,
				).bind(requestedQuantity, current.provider_subscription_id),
			]);
		} catch (error) {
			await env.PRO_DB.prepare(
				`UPDATE subscription_addon_changes
				    SET status = 'failed', error_code = ?, updated_at = datetime('now')
				  WHERE id = ?`,
			)
				.bind(error instanceof PaddleApiError ? error.code : 'unexpected_error', changeId)
				.run();
			throw error;
		}

		return json({ ok: true, requestedQuantity });
	} catch (error) {
		if (error instanceof PaddleApiError) {
			console.error('Paddle storage add-on change failed', {
				code: error.code,
				status: error.status,
				requestId: error.requestId,
			});
			return json(
				{
					error:
						error.status === 409
							? error.message
							: 'Paddle could not update storage right now. Please try again.',
				},
				error.status >= 400 && error.status < 500 ? error.status : 502,
			);
		}
		console.error('Unexpected storage add-on failure', error);
		return json({ error: 'Storage could not be updated right now' }, 502);
	}
};

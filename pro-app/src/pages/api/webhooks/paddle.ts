import type { APIRoute } from 'astro';
import {
	normalizeSubscriptionStatus,
	paddleEnvironment,
	paddlePriceId,
	storageAddonPriceId,
	storagePackQuantity,
	verifyPaddleWebhook,
	type PaddleWebhookEvent,
} from '../../../lib/billing';
import { getProEnv } from '../../../lib/env';
import { json } from '../../../lib/http';

export const prerender = false;

const SUBSCRIPTION_EVENTS = new Set([
	'subscription.created',
	'subscription.updated',
	'subscription.canceled',
]);

export const POST: APIRoute = async ({ request }) => {
	const env = getProEnv();
	const environment = paddleEnvironment(env);
	if (!env.PADDLE_WEBHOOK_SECRET) {
		return json({ error: 'Paddle webhook is not configured' }, 503);
	}
	if (!environment) {
		return json({ error: 'Paddle environment is not configured' }, 503);
	}

	const signature = request.headers.get('Paddle-Signature');
	if (!signature) return json({ error: 'Missing Paddle signature' }, 400);

	const rawBody = await request.text();
	if (!(await verifyPaddleWebhook(rawBody, signature, env.PADDLE_WEBHOOK_SECRET))) {
		return json({ error: 'Invalid Paddle signature' }, 401);
	}

	let event: PaddleWebhookEvent;
	try {
		event = JSON.parse(rawBody) as PaddleWebhookEvent;
	} catch {
		return json({ error: 'Invalid Paddle event body' }, 400);
	}
	if (!event.event_id || !event.event_type || !event.occurred_at || !event.data?.id) {
		return json({ error: 'Invalid Paddle event' }, 400);
	}

	const existingEvent = await env.PRO_DB.prepare(
		`SELECT event_id
		   FROM paddle_webhook_events
		  WHERE event_id = ?
		    AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(event.event_id, environment)
		.first();
	if (existingEvent) return json({ received: true, duplicate: true });

	if (!SUBSCRIPTION_EVENTS.has(event.event_type)) {
		await recordIgnoredEvent(env.PRO_DB, event, environment);
		return json({ received: true, ignored: true });
	}

	const status = normalizeSubscriptionStatus(event.data.status);
	if (!status || !event.data.customer_id) {
		await recordIgnoredEvent(env.PRO_DB, event, environment);
		return json({ received: true, ignored: true });
	}

	const currentSubscription = await env.PRO_DB.prepare(
		`SELECT user_id, last_event_at
		   FROM subscriptions
		  WHERE provider = 'paddle'
		    AND provider_subscription_id = ?
		    AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(event.data.id, environment)
		.first<{ user_id: string; last_event_at: string | null }>();

	let checkout:
		| {
				user_id: string;
				plan: 'pro' | 'business';
				price_id: string;
				storage_pack_quantity: number;
		  }
		| null = null;
	if (event.data.transaction_id) {
		checkout = await env.PRO_DB.prepare(
			`SELECT user_id, plan, price_id, storage_pack_quantity
			   FROM billing_checkout_requests
			  WHERE transaction_id = ?
			    AND paddle_environment = ?
			  LIMIT 1`,
		)
			.bind(event.data.transaction_id, environment)
			.first<{
				user_id: string;
				plan: 'pro' | 'business';
				price_id: string;
				storage_pack_quantity: number;
			}>();
	}

	const userId = currentSubscription?.user_id ?? checkout?.user_id;
	const basePriceIds = new Set(
		[paddlePriceId(env, 'month'), paddlePriceId(env, 'year')].filter(
			(value): value is string => Boolean(value),
		),
	);
	const addonPriceIds = new Set(
		[storageAddonPriceId(env, 'month'), storageAddonPriceId(env, 'year')].filter(
			(value): value is string => Boolean(value),
		),
	);
	const priceId =
		event.data.items?.find((item) => item.price?.id && basePriceIds.has(item.price.id))?.price?.id ??
		null;
	const addonQuantity = storagePackQuantity(
		event.data.items
			?.filter((item) => item.price?.id && addonPriceIds.has(item.price.id))
			.reduce((total, item) => total + Number(item.quantity ?? 0), 0) ?? 0,
	);
	if (
		!userId ||
		(!currentSubscription &&
			(!checkout ||
				!priceId ||
				checkout.price_id !== priceId ||
				storagePackQuantity(checkout.storage_pack_quantity) !== addonQuantity))
	) {
		await recordIgnoredEvent(env.PRO_DB, event, environment);
		return json({ received: true, ignored: true });
	}

	if (
		currentSubscription?.last_event_at &&
		event.occurred_at < currentSubscription.last_event_at
	) {
		await recordIgnoredEvent(env.PRO_DB, event, environment);
		return json({ received: true, ignored: true, reason: 'older_event' });
	}

	const scheduledChange = event.data.scheduled_change
		? JSON.stringify(event.data.scheduled_change)
		: null;
	const cancelAtPeriodEnd = event.data.scheduled_change?.action === 'cancel' ? 1 : 0;

	await env.PRO_DB.batch([
		env.PRO_DB.prepare(
			`INSERT INTO paddle_webhook_events (
			   event_id,
			   event_type,
			   occurred_at,
			   provider_entity_id,
			   paddle_environment,
			   processing_result,
			   processed_at
			 ) VALUES (?, ?, ?, ?, ?, 'processed', datetime('now'))`,
		).bind(event.event_id, event.event_type, event.occurred_at, event.data.id, environment),
		env.PRO_DB.prepare(
			`INSERT INTO subscriptions (
			   id,
			   user_id,
			   provider,
			   provider_customer_id,
			   provider_subscription_id,
			   provider_transaction_id,
			   status,
			   price_id,
			   current_period_start,
			   current_period_end,
			   cancel_at_period_end,
			   scheduled_change,
			   last_event_at,
			   storage_pack_quantity,
			   paddle_environment
			 ) VALUES (?, ?, 'paddle', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(provider_subscription_id) DO UPDATE SET
			   provider_customer_id = excluded.provider_customer_id,
			   provider_transaction_id = COALESCE(
			     excluded.provider_transaction_id,
			     subscriptions.provider_transaction_id
			   ),
			   status = excluded.status,
			   price_id = COALESCE(excluded.price_id, subscriptions.price_id),
			   current_period_start = excluded.current_period_start,
			   current_period_end = excluded.current_period_end,
			   cancel_at_period_end = excluded.cancel_at_period_end,
			   scheduled_change = excluded.scheduled_change,
			   last_event_at = excluded.last_event_at,
			   storage_pack_quantity = excluded.storage_pack_quantity,
			   paddle_environment = excluded.paddle_environment,
			   updated_at = datetime('now')`,
		).bind(
			`paddle:${event.data.id}`,
			userId,
			event.data.customer_id,
			event.data.id,
			event.data.transaction_id,
			status,
			priceId,
			event.data.current_billing_period?.starts_at ?? null,
			event.data.current_billing_period?.ends_at ?? null,
			cancelAtPeriodEnd,
			scheduledChange,
			event.occurred_at,
			addonQuantity,
			environment,
		),
		...(event.data.transaction_id
			? [
					env.PRO_DB.prepare(
						`UPDATE billing_checkout_requests
						    SET status = 'completed',
						        provider_customer_id = ?,
						        updated_at = datetime('now')
						  WHERE transaction_id = ?
						    AND paddle_environment = ?`,
					).bind(event.data.customer_id, event.data.transaction_id, environment),
				]
			: []),
		env.PRO_DB.prepare(
			`UPDATE pro_users
			    SET plan = CASE
			      WHEN EXISTS (
			        SELECT 1 FROM subscriptions
			         WHERE user_id = ?
			           AND provider = 'paddle'
			           AND paddle_environment = ?
			           AND status IN ('trialing', 'active', 'past_due')
			      ) THEN 'pro'
			      ELSE 'trial'
			    END,
			    updated_at = datetime('now')
			  WHERE id = ?`,
		).bind(userId, environment, userId),
	]);

	return json({ received: true });
};

async function recordIgnoredEvent(
	db: D1Database,
	event: PaddleWebhookEvent,
	environment: 'sandbox' | 'production',
): Promise<void> {
	await db
		.prepare(
			`INSERT INTO paddle_webhook_events (
			   event_id,
			   event_type,
			   occurred_at,
			   provider_entity_id,
			   paddle_environment,
			   processing_result,
			   processed_at
			 ) VALUES (?, ?, ?, ?, ?, 'ignored', datetime('now'))`,
		)
		.bind(event.event_id, event.event_type, event.occurred_at, event.data.id, environment)
		.run();
}

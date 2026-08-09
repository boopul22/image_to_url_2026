import {
	EventName,
	type CustomerCreatedEvent,
	type CustomerUpdatedEvent,
	type EventEntity,
	type SubscriptionCanceledEvent,
	type SubscriptionCreatedEvent,
	type SubscriptionUpdatedEvent,
	type TransactionCompletedEvent,
} from '@paddle/paddle-node-sdk';
import {
	normalizeSubscriptionStatus,
	paddlePriceId,
	type PaddleEnvironment,
} from './billing';
import type { ProEnv } from './env';

type CustomerEvent = CustomerCreatedEvent | CustomerUpdatedEvent;
type SubscriptionEvent =
	| SubscriptionCreatedEvent
	| SubscriptionUpdatedEvent
	| SubscriptionCanceledEvent;

export type PaddleWebhookProcessingResult = 'processed' | 'ignored' | 'duplicate';

interface ExistingResource {
	user_id: string | null;
	last_event_at: string | null;
}

interface CheckoutLink {
	user_id: string;
	plan: 'pro' | 'business';
	price_id: string;
}

export async function processPaddleWebhookEvent(
	env: ProEnv,
	event: EventEntity,
	environment: PaddleEnvironment,
): Promise<PaddleWebhookProcessingResult> {
	const duplicate = await env.PRO_DB.prepare(
		`SELECT event_id FROM paddle_webhook_events WHERE event_id = ? LIMIT 1`,
	)
		.bind(event.eventId)
		.first();
	if (duplicate) return 'duplicate';

	switch (event.eventType) {
		case EventName.CustomerCreated:
		case EventName.CustomerUpdated:
			return upsertCustomer(env, event, environment);
		case EventName.SubscriptionCreated:
		case EventName.SubscriptionUpdated:
		case EventName.SubscriptionCanceled:
			return upsertSubscription(env, event, environment);
		case EventName.TransactionCompleted:
			return upsertCompletedTransaction(env, event, environment);
		default:
			await recordEvent(env.PRO_DB, event, environment, 'ignored');
			return 'ignored';
	}
}

async function upsertCustomer(
	env: ProEnv,
	event: CustomerEvent,
	environment: PaddleEnvironment,
): Promise<PaddleWebhookProcessingResult> {
	const customer = event.data;
	const existing = await env.PRO_DB.prepare(
		`SELECT user_id, last_event_at
		   FROM paddle_customers
		  WHERE provider_customer_id = ? AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(customer.id, environment)
		.first<ExistingResource>();

	if (isOlderEvent(existing?.last_event_at, event.occurredAt)) {
		await recordEvent(env.PRO_DB, event, environment, 'ignored');
		return 'ignored';
	}

	const userId =
		existing?.user_id ??
		(await validCustomUserId(env.PRO_DB, customUserId(customer.customData))) ??
		(
			await env.PRO_DB.prepare(`SELECT id FROM pro_users WHERE email = ? COLLATE NOCASE LIMIT 1`)
				.bind(customer.email)
				.first<{ id: string }>()
		)?.id ??
		null;

	await env.PRO_DB.batch([
		recordEventStatement(env.PRO_DB, event, environment, 'processed'),
		env.PRO_DB.prepare(
			`INSERT INTO paddle_customers (
			   provider_customer_id, paddle_environment, user_id, email, name, status, locale, last_event_at
			 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(provider_customer_id, paddle_environment) DO UPDATE SET
			   user_id = COALESCE(paddle_customers.user_id, excluded.user_id),
			   email = excluded.email,
			   name = excluded.name,
			   status = excluded.status,
			   locale = excluded.locale,
			   last_event_at = excluded.last_event_at,
			   updated_at = datetime('now')`,
		).bind(
			customer.id,
			environment,
			userId,
			customer.email,
			customer.name,
			customer.status,
			customer.locale,
			event.occurredAt,
		),
	]);

	return 'processed';
}

async function upsertSubscription(
	env: ProEnv,
	event: SubscriptionEvent,
	environment: PaddleEnvironment,
): Promise<PaddleWebhookProcessingResult> {
	const subscription = event.data;
	const status = normalizeSubscriptionStatus(subscription.status);
	if (!status) {
		await recordEvent(env.PRO_DB, event, environment, 'ignored');
		return 'ignored';
	}

	const existing = await env.PRO_DB.prepare(
		`SELECT user_id, last_event_at
		   FROM subscriptions
		  WHERE provider = 'paddle'
		    AND provider_subscription_id = ?
		    AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(subscription.id, environment)
		.first<ExistingResource>();
	if (isOlderEvent(existing?.last_event_at, event.occurredAt)) {
		await recordEvent(env.PRO_DB, event, environment, 'ignored');
		return 'ignored';
	}

	const transactionId = 'transactionId' in subscription ? subscription.transactionId : null;
	const checkout = transactionId
		? await env.PRO_DB.prepare(
				`SELECT user_id, plan, price_id
				   FROM billing_checkout_requests
				  WHERE transaction_id = ? AND paddle_environment = ?
				  LIMIT 1`,
			)
				.bind(transactionId, environment)
				.first<CheckoutLink>()
		: null;
	const customerLink = await env.PRO_DB.prepare(
		`SELECT user_id
		   FROM paddle_customers
		  WHERE provider_customer_id = ? AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(subscription.customerId, environment)
		.first<{ user_id: string | null }>();
	const userId =
		existing?.user_id ??
		checkout?.user_id ??
		customerLink?.user_id ??
		(await validCustomUserId(env.PRO_DB, customUserId(subscription.customData)));

	if (!userId) {
		// A related customer/transaction delivery may still be in flight. Throwing keeps
		// this delivery retryable instead of permanently acknowledging an unprovisioned sale.
		throw new Error(`Could not map Paddle subscription ${subscription.id} to an app user`);
	}

	const basePriceIds = new Set(
		[paddlePriceId(env, 'month'), paddlePriceId(env, 'year'), paddlePriceId(env, 'three_year')].filter(
			(value): value is string => Boolean(value),
		),
	);
	const baseItem =
		subscription.items.find((item) => item.price?.id && basePriceIds.has(item.price.id)) ??
		subscription.items.find((item) => item.price?.id);
	const priceId = baseItem?.price?.id ?? checkout?.price_id ?? null;
	const productId = baseItem?.price?.productId ?? null;
	const scheduledChange = subscription.scheduledChange;

	await env.PRO_DB.batch([
		recordEventStatement(env.PRO_DB, event, environment, 'processed'),
		env.PRO_DB.prepare(
			`INSERT INTO paddle_customers (
			   provider_customer_id, paddle_environment, user_id, last_event_at
			 ) VALUES (?, ?, ?, ?)
			 ON CONFLICT(provider_customer_id, paddle_environment) DO UPDATE SET
			   user_id = COALESCE(paddle_customers.user_id, excluded.user_id),
			   updated_at = datetime('now')`,
		).bind(subscription.customerId, environment, userId, null),
		env.PRO_DB.prepare(
			`INSERT INTO subscriptions (
			   id, user_id, provider, provider_customer_id, provider_subscription_id,
			   provider_transaction_id, status, price_id, product_id,
			   current_period_start, current_period_end, cancel_at_period_end,
			   scheduled_change, scheduled_change_action, scheduled_change_at,
			   last_event_at, storage_pack_quantity, paddle_environment
			 ) VALUES (?, ?, 'paddle', ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(provider_subscription_id) DO UPDATE SET
			   user_id = excluded.user_id,
			   provider_customer_id = excluded.provider_customer_id,
			   provider_transaction_id = COALESCE(excluded.provider_transaction_id, subscriptions.provider_transaction_id),
			   status = excluded.status,
			   price_id = COALESCE(excluded.price_id, subscriptions.price_id),
			   product_id = COALESCE(excluded.product_id, subscriptions.product_id),
			   current_period_start = excluded.current_period_start,
			   current_period_end = excluded.current_period_end,
			   cancel_at_period_end = excluded.cancel_at_period_end,
			   scheduled_change = excluded.scheduled_change,
			   scheduled_change_action = excluded.scheduled_change_action,
			   scheduled_change_at = excluded.scheduled_change_at,
			   last_event_at = excluded.last_event_at,
			   storage_pack_quantity = excluded.storage_pack_quantity,
			   paddle_environment = excluded.paddle_environment,
			   updated_at = datetime('now')`,
		).bind(
			`paddle:${subscription.id}`,
			userId,
			subscription.customerId,
			subscription.id,
			transactionId,
			status,
			priceId,
			productId,
			subscription.currentBillingPeriod?.startsAt ?? null,
			subscription.currentBillingPeriod?.endsAt ?? null,
			scheduledChange?.action === 'cancel' ? 1 : 0,
			scheduledChange ? JSON.stringify(toScheduledChangeJson(scheduledChange)) : null,
			scheduledChange?.action ?? null,
			scheduledChange?.effectiveAt ?? null,
			event.occurredAt,
			0,
			environment,
		),
		...(transactionId
			? [
					env.PRO_DB.prepare(
						`UPDATE billing_checkout_requests
						    SET status = 'completed', provider_customer_id = ?, updated_at = datetime('now')
						  WHERE transaction_id = ? AND paddle_environment = ?`,
					).bind(subscription.customerId, transactionId, environment),
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
			           AND status IN ('trialing', 'active')
			      ) THEN 'pro'
			      ELSE 'trial'
			    END,
			    updated_at = datetime('now')
			  WHERE id = ?`,
		).bind(userId, environment, userId),
	]);

	return 'processed';
}

async function upsertCompletedTransaction(
	env: ProEnv,
	event: TransactionCompletedEvent,
	environment: PaddleEnvironment,
): Promise<PaddleWebhookProcessingResult> {
	const transaction = event.data;
	const existing = await env.PRO_DB.prepare(
		`SELECT user_id, last_event_at
		   FROM paddle_transactions
		  WHERE provider_transaction_id = ? AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(transaction.id, environment)
		.first<ExistingResource>();
	if (isOlderEvent(existing?.last_event_at, event.occurredAt)) {
		await recordEvent(env.PRO_DB, event, environment, 'ignored');
		return 'ignored';
	}

	const checkout = await env.PRO_DB.prepare(
		`SELECT user_id, plan, price_id
		   FROM billing_checkout_requests
		  WHERE transaction_id = ? AND paddle_environment = ?
		  LIMIT 1`,
	)
		.bind(transaction.id, environment)
		.first<CheckoutLink>();
	const customerLink = transaction.customerId
		? await env.PRO_DB.prepare(
				`SELECT user_id
				   FROM paddle_customers
				  WHERE provider_customer_id = ? AND paddle_environment = ?
				  LIMIT 1`,
			)
				.bind(transaction.customerId, environment)
				.first<{ user_id: string | null }>()
		: null;
	const userId =
		existing?.user_id ??
		checkout?.user_id ??
		customerLink?.user_id ??
		(await validCustomUserId(env.PRO_DB, customUserId(transaction.customData)));
	const basePriceIds = new Set(
		[paddlePriceId(env, 'month'), paddlePriceId(env, 'year'), paddlePriceId(env, 'three_year')].filter(
			(value): value is string => Boolean(value),
		),
	);
	const baseItem =
		transaction.items.find((item) => item.price?.id && basePriceIds.has(item.price.id)) ??
		transaction.items.find((item) => item.price?.billingCycle);
	const priceId = baseItem?.price?.id ?? checkout?.price_id ?? null;
	const productId = baseItem?.price?.productId ?? null;

	await env.PRO_DB.batch([
		recordEventStatement(env.PRO_DB, event, environment, 'processed'),
		...(transaction.customerId
			? [
					env.PRO_DB.prepare(
						`INSERT INTO paddle_customers (
						   provider_customer_id, paddle_environment, user_id, last_event_at
						 ) VALUES (?, ?, ?, ?)
						 ON CONFLICT(provider_customer_id, paddle_environment) DO UPDATE SET
						   user_id = COALESCE(paddle_customers.user_id, excluded.user_id),
						   updated_at = datetime('now')`,
					).bind(transaction.customerId, environment, userId, null),
				]
			: []),
		env.PRO_DB.prepare(
			`INSERT INTO paddle_transactions (
			   provider_transaction_id, paddle_environment, user_id, provider_customer_id,
			   provider_subscription_id, status, price_id, product_id, currency_code,
			   total_amount, completed_at, last_event_at
			 ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(provider_transaction_id, paddle_environment) DO UPDATE SET
			   user_id = COALESCE(paddle_transactions.user_id, excluded.user_id),
			   provider_customer_id = excluded.provider_customer_id,
			   provider_subscription_id = excluded.provider_subscription_id,
			   status = excluded.status,
			   price_id = COALESCE(excluded.price_id, paddle_transactions.price_id),
			   product_id = COALESCE(excluded.product_id, paddle_transactions.product_id),
			   currency_code = excluded.currency_code,
			   total_amount = excluded.total_amount,
			   completed_at = excluded.completed_at,
			   last_event_at = excluded.last_event_at,
			   updated_at = datetime('now')`,
		).bind(
			transaction.id,
			environment,
			userId,
			transaction.customerId,
			transaction.subscriptionId,
			transaction.status,
			priceId,
			productId,
			transaction.currencyCode,
			transaction.details?.totals?.total ?? null,
			event.occurredAt,
			event.occurredAt,
		),
		env.PRO_DB.prepare(
			`UPDATE billing_checkout_requests
			    SET status = 'completed',
			        provider_customer_id = COALESCE(?, provider_customer_id),
			        updated_at = datetime('now')
			  WHERE transaction_id = ? AND paddle_environment = ?`,
		).bind(transaction.customerId, transaction.id, environment),
	]);

	return 'processed';
}

function customUserId(customData: unknown): string | null {
	if (!customData || typeof customData !== 'object') return null;
	const value = (customData as Record<string, unknown>).imagetourl_user_id;
	return typeof value === 'string' && value.length > 0 ? value : null;
}

async function validCustomUserId(db: D1Database, userId: string | null): Promise<string | null> {
	if (!userId) return null;
	const user = await db.prepare(`SELECT id FROM pro_users WHERE id = ? LIMIT 1`).bind(userId).first();
	return user ? userId : null;
}

function isOlderEvent(lastEventAt: string | null | undefined, occurredAt: string): boolean {
	return Boolean(lastEventAt && occurredAt <= lastEventAt);
}

function toScheduledChangeJson(change: {
	action: string;
	effectiveAt: string;
	resumeAt: string | null;
}): Record<string, string | null> {
	return {
		action: change.action,
		effective_at: change.effectiveAt,
		resume_at: change.resumeAt,
	};
}

async function recordEvent(
	db: D1Database,
	event: EventEntity,
	environment: PaddleEnvironment,
	result: 'processed' | 'ignored',
): Promise<void> {
	await recordEventStatement(db, event, environment, result).run();
}

function recordEventStatement(
	db: D1Database,
	event: EventEntity,
	environment: PaddleEnvironment,
	result: 'processed' | 'ignored',
): D1PreparedStatement {
	const data = event.data as { id?: string };
	return db
		.prepare(
			`INSERT INTO paddle_webhook_events (
			   event_id, event_type, occurred_at, provider_entity_id,
			   paddle_environment, processing_result, processed_at
			 ) VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
			 ON CONFLICT(event_id) DO NOTHING`,
		)
		.bind(event.eventId, event.eventType, event.occurredAt, data.id ?? null, environment, result);
}

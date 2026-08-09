import type { ProEnv } from './env';

export type BillingInterval = 'month' | 'year' | 'three_year';
export type PaddleEnvironment = 'sandbox' | 'production';
export type SubscriptionStatus =
	| 'incomplete'
	| 'trialing'
	| 'active'
	| 'past_due'
	| 'paused'
	| 'canceled';

interface PaddleErrorBody {
	error?: {
		code?: string;
		detail?: string;
	};
}

interface PaddleResponse<T> extends PaddleErrorBody {
	data?: T;
	meta?: {
		request_id?: string;
	};
}

export interface PaddleTransaction {
	id: string;
	status: string;
	checkout?: {
		url?: string | null;
	} | null;
}

export interface PaddleSubscriptionData {
	id: string;
	status: string;
	customer_id: string;
	transaction_id: string | null;
	items?: Array<{
		quantity?: number;
		price?: {
			id?: string;
			billing_cycle?: {
				interval?: string;
			} | null;
		};
	}>;
	current_billing_period?: {
		starts_at?: string;
		ends_at?: string;
	} | null;
	scheduled_change?: {
		action?: string;
		effective_at?: string;
	} | null;
}

export interface PaddleWebhookEvent {
	event_id: string;
	event_type: string;
	occurred_at: string;
	data: PaddleSubscriptionData;
}

export class PaddleApiError extends Error {
	status: number;
	code: string;
	requestId: string;

	constructor(message: string, status: number, code = 'paddle_api_error', requestId = '') {
		super(message);
		this.name = 'PaddleApiError';
		this.status = status;
		this.code = code;
		this.requestId = requestId;
	}
}

export function paddleEnvironment(env: ProEnv): PaddleEnvironment | null {
	return env.PADDLE_ENVIRONMENT === 'sandbox' || env.PADDLE_ENVIRONMENT === 'production'
		? env.PADDLE_ENVIRONMENT
		: null;
}

export function paddlePriceId(env: ProEnv, interval: BillingInterval): string | null {
	const priceId = interval === 'three_year'
		? env.PADDLE_PRO_THREE_YEAR_PRICE_ID
		: interval === 'year'
			? env.PADDLE_PRO_ANNUAL_PRICE_ID
			: env.PADDLE_PRO_MONTHLY_PRICE_ID;
	return priceId?.startsWith('pri_') ? priceId : null;
}

export function billingIntervalForBasePrice(
	env: ProEnv,
	priceId: string | null | undefined,
): BillingInterval | null {
	if (priceId && priceId === paddlePriceId(env, 'month')) return 'month';
	if (priceId && priceId === paddlePriceId(env, 'year')) return 'year';
	if (priceId && priceId === paddlePriceId(env, 'three_year')) return 'three_year';
	return null;
}

export function isPaddleCheckoutConfigured(env: ProEnv): boolean {
	const environment = paddleEnvironment(env);
	const clientToken = env.PADDLE_CLIENT_TOKEN;
	const tokenMatchesEnvironment =
		environment === 'sandbox' ? clientToken?.startsWith('test_') : clientToken?.startsWith('live_');

	return Boolean(
		environment &&
			tokenMatchesEnvironment &&
			env.PADDLE_API_KEY &&
			paddlePriceId(env, 'month') &&
			paddlePriceId(env, 'year') &&
			paddlePriceId(env, 'three_year'),
	);
}

function paddleApiOrigin(env: ProEnv): string {
	return paddleEnvironment(env) === 'sandbox'
		? 'https://sandbox-api.paddle.com'
		: 'https://api.paddle.com';
}

export async function paddleRequest<T>(
	env: ProEnv,
	path: string,
	init: RequestInit = {},
): Promise<T> {
	if (!env.PADDLE_API_KEY || !paddleEnvironment(env)) {
		throw new PaddleApiError('Paddle is not configured', 503, 'billing_not_configured');
	}

	const response = await fetch(`${paddleApiOrigin(env)}${path}`, {
		...init,
		headers: {
			Authorization: `Bearer ${env.PADDLE_API_KEY}`,
			'Content-Type': 'application/json',
			'Paddle-Version': '1',
			...(init.headers ?? {}),
		},
	});
	const body = (await response.json().catch(() => ({}))) as PaddleResponse<T>;

	if (!response.ok || !body.data) {
		throw new PaddleApiError(
			body.error?.detail || 'Paddle rejected the billing request',
			response.status,
			body.error?.code,
			body.meta?.request_id,
		);
	}

	return body.data;
}

export function normalizeSubscriptionStatus(status: string): SubscriptionStatus | null {
	return ['trialing', 'active', 'past_due', 'paused', 'canceled'].includes(status)
		? (status as SubscriptionStatus)
		: null;
}

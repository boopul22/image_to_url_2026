import type { ProEnv } from './env';

export type BillingInterval = 'month' | 'year';
export type PaddleEnvironment = 'sandbox' | 'production';
export const MAX_STORAGE_PACKS = 10;
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

export interface PaddlePortalSession {
	urls: {
		general: {
			overview: string;
		};
	};
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
	const priceId =
		interval === 'year' ? env.PADDLE_PRO_ANNUAL_PRICE_ID : env.PADDLE_PRO_MONTHLY_PRICE_ID;
	return priceId?.startsWith('pri_') ? priceId : null;
}

export function storageAddonPriceId(env: ProEnv, interval: BillingInterval): string | null {
	const priceId =
		interval === 'year'
			? env.PADDLE_STORAGE_ADDON_ANNUAL_PRICE_ID
			: env.PADDLE_STORAGE_ADDON_MONTHLY_PRICE_ID;
	return priceId?.startsWith('pri_') ? priceId : null;
}

export function billingIntervalForBasePrice(
	env: ProEnv,
	priceId: string | null | undefined,
): BillingInterval | null {
	if (priceId && priceId === paddlePriceId(env, 'month')) return 'month';
	if (priceId && priceId === paddlePriceId(env, 'year')) return 'year';
	return null;
}

export function isStorageAddonConfigured(env: ProEnv): boolean {
	return Boolean(storageAddonPriceId(env, 'month') && storageAddonPriceId(env, 'year'));
}

export function storagePackQuantity(value: unknown): number {
	const parsed = Number(value);
	if (!Number.isInteger(parsed)) return 0;
	return Math.max(0, Math.min(MAX_STORAGE_PACKS, parsed));
}

export async function workspaceStorageLimitBytes(env: ProEnv, userId: string): Promise<number> {
	const baseBytes = getPositiveNumber(env.STORAGE_LIMIT_BYTES, 50 * 1024 ** 3);
	const packBytes = getPositiveNumber(env.STORAGE_ADDON_BYTES, 50 * 1024 ** 3);
	const subscription = await env.PRO_DB.prepare(
		`SELECT storage_pack_quantity
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND paddle_environment = ?
		    AND status IN ('trialing', 'active', 'past_due')
		  ORDER BY updated_at DESC
		  LIMIT 1`,
	)
		.bind(userId, paddleEnvironment(env))
		.first<{ storage_pack_quantity: number }>();
	return baseBytes + storagePackQuantity(subscription?.storage_pack_quantity) * packBytes;
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
			paddlePriceId(env, 'year'),
	);
}

function getPositiveNumber(value: string | undefined, fallback: number): number {
	const parsed = Number(value);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
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

function parsePaddleSignature(header: string): { timestamp: string; signatures: string[] } | null {
	const values = header.split(';').reduce<Record<string, string[]>>((result, part) => {
		const separator = part.indexOf('=');
		if (separator <= 0) return result;
		const key = part.slice(0, separator).trim();
		const value = part.slice(separator + 1).trim();
		if (value) (result[key] ??= []).push(value);
		return result;
	}, {});
	const timestamp = values.ts?.[0];
	const signatures = values.h1 ?? [];
	return timestamp && signatures.length > 0 ? { timestamp, signatures } : null;
}

function toHex(bytes: ArrayBuffer): string {
	return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, '0')).join('');
}

function timingSafeEqual(left: string, right: string): boolean {
	if (left.length !== right.length) return false;
	let difference = 0;
	for (let index = 0; index < left.length; index += 1) {
		difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
	}
	return difference === 0;
}

export async function verifyPaddleWebhook(
	rawBody: string,
	signatureHeader: string,
	secret: string,
	toleranceSeconds = 5,
): Promise<boolean> {
	const parsed = parsePaddleSignature(signatureHeader);
	if (!parsed || !/^\d+$/.test(parsed.timestamp)) return false;

	const eventTime = Number(parsed.timestamp);
	if (!Number.isSafeInteger(eventTime)) return false;
	if (Math.abs(Math.floor(Date.now() / 1000) - eventTime) > toleranceSeconds) return false;

	const encoder = new TextEncoder();
	const key = await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign'],
	);
	const digest = await crypto.subtle.sign(
		'HMAC',
		key,
		encoder.encode(`${parsed.timestamp}:${rawBody}`),
	);
	const expected = toHex(digest);
	return parsed.signatures.some((signature) => timingSafeEqual(expected, signature));
}

export function normalizeSubscriptionStatus(status: string): SubscriptionStatus | null {
	return ['trialing', 'active', 'past_due', 'paused', 'canceled'].includes(status)
		? (status as SubscriptionStatus)
		: null;
}

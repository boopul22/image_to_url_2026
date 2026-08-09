// @ts-ignore Cloudflare Workers built-in module.
import { env } from 'cloudflare:workers';

export interface ProEnv {
	PRO_DB: D1Database;
	PRO_STORAGE: R2Bucket;
	AUTH_API: Fetcher;
	SITE_URL: string;
	AUTH_API_ORIGIN: string;
	MAX_UPLOAD_BYTES: string;
	PADDLE_ENVIRONMENT?: 'sandbox' | 'production';
	PADDLE_CLIENT_TOKEN?: string;
	PADDLE_PRO_MONTHLY_PRICE_ID?: string;
	PADDLE_PRO_ANNUAL_PRICE_ID?: string;
	PADDLE_PRO_THREE_YEAR_PRICE_ID?: string;
	PADDLE_API_KEY?: string;
	PADDLE_NOTIFICATION_WEBHOOK_SECRET?: string;
	PADDLE_WEBHOOK_SECRET?: string;
}

export function getProEnv(): ProEnv {
	return env as unknown as ProEnv;
}

export function getNumberEnv(value: string | undefined, fallback: number): number {
	const parsed = Number(value);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

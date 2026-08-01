import { Environment, LogLevel, Paddle } from '@paddle/paddle-node-sdk';
import type { ProEnv } from './env';

export function getPaddleInstance(env: ProEnv): Paddle {
	if (!env.PADDLE_API_KEY) throw new Error('PADDLE_API_KEY is not configured');

	return new Paddle(env.PADDLE_API_KEY, {
		environment:
			env.PADDLE_ENVIRONMENT === 'sandbox' ? Environment.sandbox : Environment.production,
		logLevel: LogLevel.error,
	});
}

export function getPaddleWebhookSecret(env: ProEnv): string | null {
	return env.PADDLE_NOTIFICATION_WEBHOOK_SECRET ?? env.PADDLE_WEBHOOK_SECRET ?? null;
}

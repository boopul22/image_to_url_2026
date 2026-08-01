import { paddleEnvironment, type SubscriptionStatus } from './billing';
import type { ProEnv } from './env';
import { json } from './http';
import { proPath } from './paths';

export type ProAccessStatus = SubscriptionStatus | 'preview';

const WRITE_ENABLED_STATUSES = new Set<SubscriptionStatus>(['active', 'trialing']);

export function hasProAccess(status: string | null | undefined): boolean {
	return Boolean(status && WRITE_ENABLED_STATUSES.has(status as SubscriptionStatus));
}

export async function getProAccessStatus(env: ProEnv, userId: string): Promise<ProAccessStatus> {
	const subscription = await env.PRO_DB.prepare(
		`SELECT status
		   FROM subscriptions
		  WHERE user_id = ?
		    AND provider = 'paddle'
		    AND paddle_environment = ?
		  ORDER BY
		    CASE status
		      WHEN 'active' THEN 1
		      WHEN 'trialing' THEN 2
		      WHEN 'past_due' THEN 3
		      WHEN 'paused' THEN 4
		      WHEN 'incomplete' THEN 5
		      ELSE 6
		    END,
		    updated_at DESC
		  LIMIT 1`,
	)
		.bind(userId, paddleEnvironment(env))
		.first<{ status: SubscriptionStatus }>();

	return subscription?.status ?? 'preview';
}

export async function requireProAccess(env: ProEnv, userId: string): Promise<Response | null> {
	const status = await getProAccessStatus(env, userId);
	if (hasProAccess(status)) return null;

	const billingAction = status === 'past_due' || status === 'paused' ? 'manage' : 'subscribe';
	const error =
		status === 'past_due'
			? 'Your payment needs attention before you can upload new images.'
			: status === 'paused'
				? 'Your subscription is paused. Resume it to upload new images.'
				: 'An active Pro plan is required to upload or import images.';

	return json(
		{
			error,
			code: 'PRO_REQUIRED',
			subscriptionStatus: status,
			billingAction,
			upgradeUrl: proPath('/pricing'),
		},
		402,
	);
}

export async function assertProAccess(env: ProEnv, userId: string): Promise<void> {
	const status = await getProAccessStatus(env, userId);
	if (!hasProAccess(status)) throw new Error('PRO_REQUIRED');
}

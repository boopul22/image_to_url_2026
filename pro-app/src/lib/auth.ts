import type { ProEnv } from './env';
import type { ProUser } from './types';

interface AuthRow {
	id: string;
	name: string;
	email: string;
	avatar_url: string | null;
	role: 'user' | 'admin';
}

export async function authenticateSession(env: ProEnv, token: string): Promise<ProUser | null> {
	let response: Response;
	try {
		response = await env.AUTH_API.fetch(
			new Request(new URL('/api/auth/session', env.AUTH_API_ORIGIN), {
				method: 'GET',
				headers: {
					Accept: 'application/json',
					Cookie: `session=${encodeURIComponent(token)}`,
				},
				redirect: 'manual',
			}),
		);
	} catch {
		return null;
	}

	if (!response.ok) return null;

	const result = (await response.json()) as {
		user?: {
			id?: unknown;
			name?: unknown;
			email?: unknown;
			avatarUrl?: unknown;
			role?: unknown;
		} | null;
	};
	const user = result.user;
	if (
		!user ||
		typeof user.id !== 'string' ||
		typeof user.name !== 'string' ||
		typeof user.email !== 'string' ||
		typeof user.avatarUrl !== 'string' ||
		(user.role !== 'user' && user.role !== 'admin')
	) {
		return null;
	}

	const account: AuthRow = {
		id: user.id,
		name: user.name,
		email: user.email,
		avatar_url: user.avatarUrl || null,
		role: user.role,
	};

	const profile = await env.PRO_DB.prepare(
		`SELECT email, display_name, avatar_url, plan
		   FROM pro_users WHERE id = ? LIMIT 1`,
	)
		.bind(account.id)
		.first<{
			email: string;
			display_name: string | null;
			avatar_url: string | null;
			plan: ProUser['plan'];
		}>();

	if (!profile) {
		await env.PRO_DB.prepare(
			`INSERT INTO pro_users (id, email, display_name, avatar_url, plan)
			 VALUES (?, ?, ?, ?, 'trial')`,
		)
			.bind(account.id, account.email, account.name, account.avatar_url)
			.run();
	} else if (
		profile.email !== account.email ||
		profile.display_name !== account.name ||
		profile.avatar_url !== account.avatar_url
	) {
		await env.PRO_DB.prepare(
			`UPDATE pro_users
			    SET email = ?, display_name = ?, avatar_url = ?, updated_at = datetime('now')
			  WHERE id = ?`,
		)
			.bind(account.email, account.name, account.avatar_url, account.id)
			.run();
	}

	return {
		id: account.id,
		name: account.name,
		email: account.email,
		avatarUrl: account.avatar_url ?? '',
		role: account.role,
		plan: profile?.plan ?? 'trial',
	};
}

export async function createDevelopmentUser(env: ProEnv): Promise<ProUser> {
	const user: ProUser = {
		id: 'local-development-user',
		name: 'Bipul Kumar',
		email: 'local@imagetourl.cloud',
		avatarUrl: '',
		role: 'admin',
		plan: 'trial',
	};

	await env.PRO_DB.prepare(
		`INSERT INTO pro_users (id, email, display_name, avatar_url, plan)
		 VALUES (?, ?, ?, ?, ?)
		 ON CONFLICT(id) DO UPDATE SET
		   display_name = excluded.display_name,
		   updated_at = datetime('now')`,
	)
		.bind(user.id, user.email, user.name, user.avatarUrl, user.plan)
		.run();

	return user;
}

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
	const account = await env.AUTH_DB.prepare(
		`SELECT u.id, u.name, u.email, u.avatar_url, u.role
		   FROM sessions s
		   JOIN users u ON u.id = s.user_id
		  WHERE s.id = ?
		    AND s.expires_at > datetime('now')
		    AND COALESCE(u.is_banned, 0) = 0
		  LIMIT 1`,
	)
		.bind(token)
		.first<AuthRow>();

	if (!account) return null;

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

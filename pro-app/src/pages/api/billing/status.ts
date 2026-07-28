export const prerender = false;

import type { APIRoute } from 'astro';
import { getProAccessStatus, hasProAccess } from '../../../lib/entitlements';
import { getProEnv } from '../../../lib/env';
import { json, requireUser } from '../../../lib/http';

export const GET: APIRoute = async ({ locals }) => {
	const authError = requireUser(locals.proUser);
	if (authError) return authError;

	const status = await getProAccessStatus(getProEnv(), locals.proUser!.id);
	return json({
		ok: true,
		status,
		hasAccess: hasProAccess(status),
	});
};

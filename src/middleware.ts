import { defineMiddleware } from 'astro:middleware';
import { verifySessionToken } from './lib/auth';

export const onRequest = defineMiddleware(async ({ cookies, locals }, next) => {
  const token = cookies.get('session')?.value;
  if (token) {
    const user = await verifySessionToken(token);
    if (user) {
      locals.user = user;
    }
  }
  return next();
});

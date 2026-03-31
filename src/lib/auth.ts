import { Google } from 'arctic';
import { SignJWT, jwtVerify } from 'jose';

export interface SessionUser {
  googleId: string;
  name: string;
  email: string;
  avatarUrl: string;
}

const getRedirectURI = () => {
  if (import.meta.env.DEV) {
    return 'http://localhost:4321/api/auth/callback';
  }
  return `${import.meta.env.SITE || 'https://imagetourl.cloud'}/api/auth/callback`;
};

export function getGoogleClient() {
  return new Google(
    import.meta.env.GOOGLE_CLIENT_ID,
    import.meta.env.GOOGLE_CLIENT_SECRET,
    getRedirectURI(),
  );
}

const getSecret = () => new TextEncoder().encode(import.meta.env.AUTH_SECRET);

export async function createSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({ ...user })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(getSecret());
}

export async function verifySessionToken(token: string): Promise<SessionUser | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return {
      googleId: payload.googleId as string,
      name: payload.name as string,
      email: payload.email as string,
      avatarUrl: payload.avatarUrl as string,
    };
  } catch {
    return null;
  }
}

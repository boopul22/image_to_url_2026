export interface ProUser {
	id: string;
	name: string;
	email: string;
	avatarUrl: string;
	role: 'user' | 'admin';
	plan: 'trial' | 'pro' | 'business';
}

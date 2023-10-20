import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	//if user has a cookie
	if (!session) {
		return await resolve(event);
	}

	event.locals.user = {
		session_id: session,
	}
	return await resolve(event);
};

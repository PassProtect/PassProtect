import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');

	if (event.url.pathname.startsWith('/')) {
    // Required for CORS to work
    if(event.request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        }
      });
    }

  }
  const response = await resolve(event);
  if (event.url.pathname.startsWith('/api')) {
    response.headers.append('Access-Control-Allow-Origin', `*`);
  }
	//if user doesn't have a cookie
	if (!session) {
		return await resolve(event);
	}

	event.locals.user = {
		session_id: session,
	}
	return await resolve(event);
};

import type { Handle } from '@sveltejs/kit';
import { pool } from './routes/db';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	const response = await resolve(event);

	if (!session) {
		return response;
	}
	const queryString = `SELECT * FROM sessions WHERE session_id = $1;`;
	const queryValues = [session];
	const user = await pool.query(queryString, queryValues);
	if (user.rows) {
		event.locals.user = {
			name: user.username,
			user_id: user.user_id
		};
	}
	return response;

	// set user_Id and username on locals
};

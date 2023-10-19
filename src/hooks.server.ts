import type { Handle } from '@sveltejs/kit';
import { pool } from './routes/db';

export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('session');
	// const response = await resolve(event);

	if (!session) {
		return await resolve(event);
	}
	const queryString = `SELECT * FROM sessions WHERE session_id = $1;`;
	const queryValues = [session];
	const user = await pool.query(queryString, queryValues);
	if (user.rows[0]) {
    event.locals.user = {
      name: user.rows[0].username,
			user_id: user.rows[0].user_id
		};
	}
  // console.log('LOCALS IN HOOKS', event.locals)
	return await resolve(event);

};

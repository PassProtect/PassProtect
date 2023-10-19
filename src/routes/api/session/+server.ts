import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '../../(auth)/db';

// function for deleting an individual account
export const DELETE: RequestHandler = async ({ request, cookies }) => {
	try {
		// get variables from request body
		const body = await request.json();
		const user_id = body.user_id;

		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});

		const queryString = `DELETE FROM sessions WHERE user_id = $1`;
		const queryValues = [user_id];
		const result = pool.query(queryString, queryValues);

		// if deletion is successful...
		if (result.rowCount === 1) {
			return new Response(String('Successfully Deleted'));
		} else {
			// otherwise...
			return new Response(String('Unable To Delete Session'));
		}
	} catch (e) {
		return new Response(String('Error While Deleting'));
	}
};

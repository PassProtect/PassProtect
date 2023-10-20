import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { pool } from '../../(auth)/db';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/');
};

export const actions: Actions = {
	default: async({ cookies, locals }) => {
		const queryString = `DELETE FROM sessions WHERE session_id = $1`;
		const queryValues = [locals.user.session_id];
		await pool.query(queryString, queryValues);

		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
		throw redirect(302, '/');
	}
};

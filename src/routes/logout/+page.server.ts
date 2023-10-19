import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from '../$types';
import { pool } from '../db';

export const load: PageServerLoad = async () => {
	throw redirect(302, '/');
};

export const actions: Actions = {
	default({ cookies, locals }) {
    
    const queryString = `DELETE FROM sessions WHERE user_id = $1`;
		const queryValues = [locals.user.user_id];
		const result = pool.query(queryString, queryValues);

		cookies.set('session', '', {
			path: '/',
			expires: new Date(0)
		});
    //delete the session from DB as well***
		throw redirect(302, '/');
	}
};

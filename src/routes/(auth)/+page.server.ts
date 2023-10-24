import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { pool } from './db';

export const actions = {
	login: async ({ cookies, request }) => {
		// get form data
		const data = await request.formData();
		// delete all expired sessions from database (temporary solution until more proper method is implemented)
		await pool.query(`DELETE FROM sessions WHERE expires_at < now();`)
		
		const username = String(data.get('username'));
		const password = String(data.get('password'));

		// get stored hashed password and user_id (for cookie) from database
		const queryString = `
        SELECT user_id, password
        FROM users
        WHERE username = $1
			;`;
		const queryValues = [username];
		const response = await pool.query(queryString, queryValues);
		if (!response.rowCount) return fail(400, { success: false });
		const storedHashedPassword = response.rows[0].password;
		const user_id = response.rows[0].user_id;

		// verify inputted and saved password hashes match
		const isMatch = await Bun.password.verify(password, storedHashedPassword);
		// if passwords match, set a cookie for user_id and redirect to dashboard
		if (isMatch) {
			const uuid = crypto.randomUUID();
			const sessionQuery = `INSERT INTO sessions (session_id, user_id, username) VALUES ($1, $2, $3) ON CONFLICT (user_id) DO NOTHING;`;
			const sessionValues = [uuid, user_id, username];
			const response = await pool.query(sessionQuery, sessionValues);
			//if the session is created, set a cookie and redirect
			if (response.rowCount === 1) {
				cookies.set('session', `${uuid}`, {
					path: '/',
					httpOnly: true,
					sameSite: 'strict',
					// secure: process.env.VITE_ENV === 'production',
					maxAge: 60 * 60
				});
				throw redirect(307, '/dashboard');
			}
			return fail(400, { success: false });
		} else {
			// return {success: false};
			return fail(400, { success: false });
		}
	},
	Preston: async ({ cookies }) => {
		const uuid = crypto.randomUUID();
		const user_id = 42;
		const username = 'PristonColdwell';
		const sessionQuery = `INSERT INTO sessions (session_id, user_id, username) VALUES ($1, $2, $3) ON CONFLICT (user_id) DO NOTHING;`;
		const sessionValues = [uuid, user_id, username];
		const response = await pool.query(sessionQuery, sessionValues);
		//if the session is created, set a cookie and redirect
		if (response.rowCount === 1) {
			cookies.set('session', `${uuid}`, {
				path: '/',
				httpOnly: true,
				sameSite: 'strict',
				// secure: process.env.VITE_ENV === 'production',
				maxAge: 60 * 15
			});
			throw redirect(307, '/dashboard');
		}
		return fail(400, { success: false });
	},
	Docker: async () => {
		throw redirect(307, '/docker')
		return {success:true}
	}
} satisfies Actions;

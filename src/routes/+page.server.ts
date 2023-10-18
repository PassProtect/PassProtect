import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { pool } from './db';
import Cookies from 'js-cookie';

export const actions = {
	default: async ({ request }) => {

			// get form data
			const data = await request.formData();
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
			const storedHashedPassword = response.rows[0].password;
			const user_id = response.rows[0].user_id;

			// verify inputted and saved password hashes match
			const isMatch = await Bun.password.verify(password, storedHashedPassword);
			console.log('Match status: ', isMatch);

			// if passwords match, set a cookie for user_id and redirect to dashboard
			if (isMatch) {
				Cookies.set('userid', `${user_id}`, {
					path: '/',
					// httpOnly: true,
					expires: 1 // 24 hours..?
				});
				// throw redirect(307, '/dashboard')
			} else {
				console.error('Could not login - an error occurred.');
			}
		} 
} satisfies Actions;

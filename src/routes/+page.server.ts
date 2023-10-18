import type { Actions } from './$types';
import { pool } from './db';
import Cookies from 'js-cookie';

export const actions = {
	default: async ({ request }) => {
		try {
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
			console.log('storedHashedPassword: ', storedHashedPassword);
			console.log('user_id: ', user_id);

			// hash inputted password for comparison
			const hashedPassword = await Bun.password.hash(password, {
				algorithm: 'bcrypt',
				cost: 4
			});
			console.log('hashedPass: ', hashedPassword);

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
			} else {
				console.error('Could not login - an error occurred.');
			}
		} catch (e) {
			console.error(`An error has occurred: ${e}`);
		}
	}
} satisfies Actions;

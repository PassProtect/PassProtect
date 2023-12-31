import type { Actions } from './$types';
import { pool } from '../db';
import { fail } from '@sveltejs/kit';
import logyard from 'logyard';

// const { logyard } = logyardbackend;
export const actions = {
	default: async ({ request }) => {
		// get form data
		const data = await request.formData();
		const email = String(data.get('email'));
		const username = String(data.get('username'));
		const password = String(data.get('password'));

		const hashedPassword = await Bun.password.hash(password, {
			algorithm: 'bcrypt',
			cost: 4
		});
		// query database to create account
		const queryString = `
					INSERT INTO users (email, username, password) 
					VALUES ($1, $2, $3)
          ON CONFLICT (username) DO NOTHING
					;`;
		const queryValues = [email, username, hashedPassword];

		const createResponse = await pool.query(queryString, queryValues);

		// if an account has been successfully made, redirect to login
		if (createResponse.rowCount === 1) {
			logyard('info', 'account created', {username});
			return {success:true}
		} else {
			logyard('warn', 'account creation failed', {username, hashedPassword})
			return fail(400, { failed: true });
		}
	}
} satisfies Actions;

import type { Actions } from './$types';
import { pool } from '../db';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
	
			// get form data
			const data = await request.formData();
			const email = String(data.get('email'));
			const username = String(data.get('username'));
			const password = String(data.get('password'));


			const hashedPassword = await Bun.password.hash(password, {
				algorithm:'bcrypt',
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
        console.log('account successfully created');
        // redirect to '/' to login ..?
      } else {
        console.log('unable to create account');
        // otherwise, if a username is taken... send something back to frontend..? but its a form..?

      }
			throw redirect(307, '/');


	}
} satisfies Actions;

import type { Actions } from './$types';
import { pool } from '../db';
// import crypto from 'crypto';

// function encrypt(text: string) {
// 	const algorithm = 'aes-256-cbc';
// 	const pass = process.env.VITE_KEY;
// 	const key = crypto.scryptSync(pass, 'GfG', 32);
// 	const iv = crypto.randomBytes(16);
// 	const cipher = crypto.createCipheriv(algorithm, key, iv);

// 	let encrypted = cipher.update(text);

// 	encrypted = Buffer.concat([encrypted, cipher.final()]);

// 	return { iv: iv.toString('hex'), data: encrypted.toString('hex') };
// }

export const actions = {
	default: async ({ request }) => {
		try {
			// get form data
			const data = await request.formData();
			const email = String(data.get('email'));
			const username = String(data.get('username'));
			const password = String(data.get('password'));

      // TODO: hash password
      // const passwordEncryption = encrypt(password);
      // const hashedPassword = passwordEncryption.data;
      const hashedPassword = password;

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
		} catch (e) {
			console.log(`An error has occurred: ${e}`);
		}
	}
} satisfies Actions;

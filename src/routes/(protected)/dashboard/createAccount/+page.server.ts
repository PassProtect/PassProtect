import { fail, type Actions } from '@sveltejs/kit';
import { pool } from '../../../(auth)/db';
import crypto from 'crypto';

function encrypt(text: string) {
	const algorithm = 'aes-256-cbc';
	const pass = process.env.VITE_KEY;
	const key = crypto.scryptSync(pass, 'GfG', 32);
	const iv = crypto.randomBytes(16);
	const cipher = crypto.createCipheriv(algorithm, key, iv);

	let encrypted = cipher.update(text);

	encrypted = Buffer.concat([encrypted, cipher.final()]);

	return { iv: iv.toString('hex'), data: encrypted.toString('hex') };
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const companyName = String(data.get('companyname'));
		const url = String(data.get('url'));
		const username = String(data.get('username'));
		const password = String(data.get('password'));
		const user_id = Number(data.get('user_id'));
		console.log('UID', user_id)

		const encryptedPass = encrypt(password);
		const queryString =
			'INSERT INTO accounts (companyName, url, username, password, iv, user_id) VALUES ($1, $2, $3, $4, $5, $6)ON CONFLICT (companyName) DO NOTHING';
		const queryValues = [companyName, url, username, encryptedPass.data, encryptedPass.iv, user_id];
		const response = await pool.query(queryString, queryValues);
		if (response.rowCount) {
			return {
				success: true
			};
		} else {
			return fail(400, {
				success: false
			});
		}
	}
} satisfies Actions;

import { redirect } from '@sveltejs/kit';
import { pool } from '../../../(auth)/db.js';
import { encrypt } from '../../../../components/functions/encryption';

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const { companyname, url, username, password, user_id } = data

		const encryptedPass = encrypt(password);

		const queryString =
			'UPDATE accounts SET url = $1, username = $2, password = $3, iv = $4 WHERE user_id = $5 AND companyname = $6;';
		const queryValues = [
			url,
			username,
			encryptedPass.data,
			encryptedPass.iv,
			user_id,
			companyname
		];

		await pool.query(queryString, queryValues);
    throw(redirect(301, `/dashboard`))
	}
};

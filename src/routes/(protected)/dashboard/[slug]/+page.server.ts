import { fail, redirect } from '@sveltejs/kit';
import { pool } from '../../../(auth)/db.js';
import { encrypt } from '../../../../components/functions/encryption';
import type { PageServerLoad } from './$types.js';

//runs the auth check again before fetching any data
export const load: PageServerLoad = async ({ parent }) => {
		await parent();
}

export const actions = {
	edit: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const { companyname, url, username, password, user_id } = data;
    const passwordString = String(password)

		const encryptedPass = encrypt(passwordString);

		const queryString =
			'UPDATE accounts SET url = $1, username = $2, password = $3, iv = $4 WHERE user_id = $5 AND companyname = $6;';
		const queryValues = [url, username, encryptedPass.data, encryptedPass.iv, user_id, companyname];

		await pool.query(queryString, queryValues);
		throw redirect(301, `/dashboard`);
	},
	delete: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const { user_id, companyname } = data;

		const queryString = `
            DELETE FROM accounts 
            WHERE user_id = $1 AND companyname = $2;
        `;
		const queryValues = [user_id, companyname];

		// query database for deletion
		const result = await pool.query(queryString, queryValues);

		// if deletion is successful...
		if (result.rowCount === 1) {
      throw redirect(301, '/dashboard');
		} else {
			return fail(400);
		}
	}
};

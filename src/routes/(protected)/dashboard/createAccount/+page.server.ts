import { fail, type Actions } from '@sveltejs/kit';
import { pool } from '../../../(auth)/db';
import { encrypt } from '../../../../components/functions/encryption';

export const actions = {
	default: async ({ request }) => {
		const data = Object.fromEntries(await request.formData());
		const { companyname, url, username, password, user_id } = data
		const passwordString: string = String(password);
		const encryptedPass = encrypt(passwordString);
		const queryString =
			'INSERT INTO accounts (companyname, url, username, password, iv, user_id) VALUES ($1, $2, $3, $4, $5, $6) ON CONFLICT ON CONSTRAINT unique_companyname DO NOTHING';
		const queryValues = [companyname, url, username, encryptedPass.data, encryptedPass.iv, user_id];
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

import { pool } from '../../(auth)/db';
import { encrypt } from '../../../components/functions/encryption';

type body = {
	companyname: string;
	user_id: number;
	url: string;
	username: string;
	password: string;
};
export const actions = {
	default: async ({ request }) => {
    console.log('IN EDIT ACTIONS')
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

		return {
			success: true
		};
	}
};

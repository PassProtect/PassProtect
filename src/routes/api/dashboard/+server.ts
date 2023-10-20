import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '../../(auth)/db';
import crypto from 'crypto';

export const GET: RequestHandler = async ({ locals }) => {
	// TODO: get user_id somehow
	const session_id = locals.user.session_id;
	const userResponse = await pool.query(`SELECT * FROM sessions WHERE session_id = $1`, [
		session_id
	]);
	const queryString = 'SELECT * FROM accounts WHERE user_id = $1';
	const user_id = userResponse.rows[0].user_id;
	const username = userResponse.rows[0].username;
	const queryValues = [user_id];
	const response = await pool.query(queryString, queryValues);
	const rows = response.rows;

	return new Response(JSON.stringify({ rows, user_id, username }), { status: 200 });
};

export const POST: RequestHandler = async ({ request }) => {
	const body = await request.json();

	function decrypt(iv: string, encrypted: string) {
		const pass = process.env.VITE_KEY;
		//add to .env
		const algorithm = 'aes-256-cbc';
		const key = crypto.scryptSync(pass, 'GfG', 32);
		const ivBuffer = Buffer.from(iv, 'hex');
		const encryptedText = Buffer.from(encrypted, 'hex');
		const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
		let decrypted = decipher.update(encryptedText);
		decrypted = Buffer.concat([decrypted, decipher.final()]);

		return decrypted.toString();
	}
	const plaintext = decrypt(body.iv, body.password);

	return new Response(JSON.stringify({ plaintext }), { status: 200 });
};

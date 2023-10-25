import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '../../(auth)/db';
import { decrypt } from '../../../components/functions/encryption';

export const GET: RequestHandler = async ({ locals }) => {
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
	const plaintext = decrypt(body.iv, body.password);

	return new Response(JSON.stringify({ plaintext }), { status: 200 });
};

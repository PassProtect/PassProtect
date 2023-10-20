

// import type { RequestHandler } from '@sveltejs/kit';
// import { pool } from '../../(auth)/db';
// import { encrypt } from '../../../components/functions/encryption';

// type body = {
// 	companyname: string;
// 	user_id: number;
// 	url: string;
// 	username: string;
// 	password: string;
// };
// export const POST: RequestHandler = async ({ request }) => {
// 	const body: body = await request.json();

// 	const encryptedPass = encrypt(body.password);

// 	const queryString =
// 		'UPDATE accounts SET url = $1, username = $2, password = $3, iv = $4 WHERE user_id = $5 AND companyname = $6;';
// 	const queryValues = [
// 		body.url,
// 		body.username,
// 		encryptedPass.data,
// 		encryptedPass.iv,
// 		body.user_id,
// 		body.companyname
// 	];
	
// 	await pool.query(queryString, queryValues);

// 	const res = {};
// 	return new Response(JSON.stringify({ res }), { status: 200 });
// };

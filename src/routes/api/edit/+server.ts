import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '../../(auth)/db';
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
type body = {
	companyname: string;
	url: string;
	username: string;
	password: string;
};
export const POST: RequestHandler = async ({ request }) => {
	const body: body = await request.json();
	const user_id = 1;

	const encryptedPass = encrypt(body.password);

	const queryString =
		'UPDATE accounts SET url = $1, username = $2, password = $3, iv = $4 WHERE user_id = $5 AND companyname = $6;';
	const queryValues = [
		body.url,
		body.username,
		encryptedPass.data,
		encryptedPass.iv,
		user_id,
		body.companyname
	];
	await pool.query(queryString, queryValues);

	const res = {};
	return new Response(JSON.stringify({ res }), { status: 200 });
};

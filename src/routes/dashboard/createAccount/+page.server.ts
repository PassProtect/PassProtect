import type { Actions } from '../../$types';
import { pool } from '../../db';
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

function decrypt(iv:string, encrypt:string) {
	const pass = process.env.VITE_KEY;
	const algorithm = 'aes-256-cbc';
	const key = crypto.scryptSync(pass, 'GfG', 32);
	const ivBuffer = Buffer.from(iv, 'hex');
	const encryptedText = Buffer.from(encrypt, 'hex');
	const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), ivBuffer);
	let decrypted = decipher.update(encryptedText);
	decrypted = Buffer.concat([decrypted, decipher.final()]);

	return decrypted.toString();
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const companyName = String(data.get('companyname'));
		const url = String(data.get('url'));
		const username = String(data.get('username'));
		const password = String(data.get('password'));
		const user_id = 1;

		// const hashedPass = await Bun.password.hash(password, {
		// 	algorithm: "bcrypt",
		// 	cost: 4
		// });
		// console.log(hashedPass);
		// const isMatch = await Bun.password.verify(password, hashedPass);
		// console.log('MATCHES', isMatch);

		// const key = crypto.randomBytes(32);

		const encryptedPass = encrypt(password);
		console.log(encryptedPass);
		const decryptedPass = decrypt(encryptedPass.iv, encryptedPass.data);
		console.log(decryptedPass);

		const queryString =
			'INSERT INTO accounts (companyName, url, username, password, iv, user_id) VALUES ($1, $2, $3, $4, $5, $6);';
		const queryValues = [companyName, url, username, encryptedPass.data, encryptedPass.iv, user_id];
		await pool.query(queryString, queryValues);
		return {
			status: 303
		};
	}
} satisfies Actions;

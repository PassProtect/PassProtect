import type { Actions } from './$types';
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

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const companyName = String(data.get('companyname'));
    const url = data.get('url');
    const username = data.get('username');
    const password = data.get('password');
    const user_id = 1;
 
    const queryString = 'INSERT INTO accounts (companyName, url, username, password, user_id) VALUES ($1, $2, $3, $4, $5);';
    const queryValues = [companyName, url, username, password, user_id];
    await pool.query(queryString, queryValues);
    return {
      status: 303,
    }
  },
} satisfies Actions;

import type { RequestHandler } from "@sveltejs/kit";
import { pool } from "../../db";
import crypto from 'crypto';

export const GET: RequestHandler = async () => {

      // TODO: get user_id somehow
      const queryString = 'SELECT * FROM accounts WHERE user_id = 1';
      // const queryValues = [user_id]
      const response = await pool.query(queryString);
      const rows = response.rows;
      return new Response(JSON.stringify({rows}), {status:200});
}

export const POST: RequestHandler = async ({request}) => {
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
      
      return new Response(JSON.stringify({plaintext}), {status:200});
}

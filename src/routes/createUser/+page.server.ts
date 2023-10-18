import type { Actions } from '../$types';
import { pool } from '../db';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const username = String(data.get('username'));
    const password = String(data.get('password'));
 

    // const hashedPass = await Bun.password.hash(password, {
		// 	algorithm: "bcrypt",
		// 	cost: 4
		// });
		// console.log(hashedPass);
		// const isMatch = await Bun.password.verify(password, hashedPass);
		// console.log('MATCHES', isMatch);

    const queryString = 'INSERT INTO accounts (companyName, url, username, password, user_id) VALUES ($1, $2, $3, $4, $5);';
    const queryValues = [companyName, url, username, password, user_id];
    await pool.query(queryString, queryValues);
    return {
      status: 303,
    }
  },
} satisfies Actions;


import type { Actions } from './types'
import { pool } from '../../db';


export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const companyName = String(data.get('companyname'));
    const url = data.get('url');
    const username = data.get('username');
    const password = data.get('password');
    const user_id = 1;
 
    const queryString = `
      INSERT INTO accounts (companyName, url, username, password, user_id) 
      VALUES ($1, $2, $3, $4, $5);
    `;
    const queryValues = [companyName, url, username, password, user_id];
    await pool.query(queryString, queryValues);
    return {
      status: 303,
    }
  },
} satisfies Actions;


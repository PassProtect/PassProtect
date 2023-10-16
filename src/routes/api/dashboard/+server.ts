import type { RequestHandler } from "@sveltejs/kit";
import { pool } from "../../db";

export const GET: RequestHandler = async () => {

      // TODO: get user_id somehow
      const queryString = 'SELECT * FROM accounts WHERE user_id = 1';
      // const queryValues = [user_id]
      const response = await pool.query(queryString);
      const rows = response.rows;
      return new Response(JSON.stringify({rows}), {status:200});
}

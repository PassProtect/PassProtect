import type { RequestHandler } from "@sveltejs/kit";
import { pool } from "../../db";

export const GET: RequestHandler = async () => {

      // TODO: get user_id somehow
      const queryString = 'SELECT * FROM accounts WHERE account_id = 1';
      // const queryValues = [user_id]
      const response = await pool.query(queryString);
      const rows = response.rows;
      return new Response(JSON.stringify({rows}), {status:200});
}

export const POST: RequestHandler = async ({ request }) => {
      const data = await request.json();
      console.log("DATA IN POST", data)
      // const queryString = 'INSERT INTO accounts (companyName, url, username, password)';
      // const queryValues = (companyName, url, username, password);
      // const response = await pool.query(queryString, queryValues);
      // return new Response(JSON.stringify(response), {status:200})
      return new Response('Hello', {status:200})

}

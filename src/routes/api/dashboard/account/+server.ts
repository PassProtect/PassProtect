import type { RequestHandler } from "@sveltejs/kit";
import { pool } from "../../../db";

export const POST: RequestHandler = async (req) => {

    const { user_id, companyname } = req.body;

    console.log('user_id: ', user_id);
    console.log('companyname: ', companyname);

    // TODO: get user_id somehow
    const queryString = `
        SELECT companyname, url, username, password 
        FROM accounts 
        WHERE user_id = $1 AND companyname = $2
    `;
    const queryValues = [user_id, companyname];
    const response = await pool.query(queryString, queryValues);
    const rows = response.rows;
    return new Response(JSON.stringify({rows}), {status:200});
}
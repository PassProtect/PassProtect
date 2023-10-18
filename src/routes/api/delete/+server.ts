import type { RequestHandler } from '@sveltejs/kit';
import { pool } from '../../db';

// function for deleting an individual account
export const DELETE: RequestHandler = async (event) => {
	try {
        // get variables from request body
		const body = await event.request.json();
        const user_id = body.user_id
        const companyname = body.companyname;

        const queryString = `
            DELETE FROM accounts 
            WHERE user_id = $1 AND companyname = $2;
        `;
        const queryValues = [user_id, companyname];

        // query database for deletion
        const result = await pool.query(queryString, queryValues);

        // if deletion is successful...
        if (result.rowCount === 1) {
            return new Response(String('Successfully Deleted'));
        } else {
            // otherwise...
            return new Response(String('Unable To Delete Account'));
        }
        
	} catch (e) {
        return new Response(String('Error While Deleting'));
    }
};

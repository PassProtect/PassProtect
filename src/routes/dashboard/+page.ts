// import axios from 'axios';
// import type { PageLoad } from './$types.js';


// export const load: PageLoad = async ({ fetch }) => {
//     try {
//         const response = await fetch('/api/dashboard');
//         // const item = await response.json();
//         console.log('THIS IS THE RESPONSE', response.body);
//         return {
//           response
//         }
//     } catch (e) {
//       console.log(e)
//     }
// }

export const load = ({fetch}) => {
    const fetchAccounts = async () => {
        const res = await fetch('/api/dashboard');
        const data = await res.json();
        return data.rows;
    }

    return {
        accounts: fetchAccounts()
    }
}
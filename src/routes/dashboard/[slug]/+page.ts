import type { PageLoad } from '../$types.js';

export const load: PageLoad = async ({ params }) => {

  const requestBody = {
    account: 'Netflix',
    user_id: 1
  }

  const fetchAccount = async () => {
    const res = await fetch('/api/dashboard/account', {
      method: 'POST',
      body: JSON.stringify(requestBody)
    });
    const data = await res.json();
    console.log('single account data: ', data.rows)
    return data.rows;
  }

  //get app from making a db call to params.slug
  const app = {
    url : `${params}.com`,
    username : 'geoff',
    password : '123'
  }

  // const data = data from store
  // url: data.url

  
  return {
    account: fetchAccount(),
    slug : params,
    app,
  }
}
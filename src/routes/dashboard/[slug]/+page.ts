import type { PageLoad } from '../$types.js';

export const load: PageLoad = async ({ params, parent, accountURL }) => {


  const parentData = await parent();
  console.log("PARENT: ", parentData);
  //get app from making a db call to params.slug
  const app = {
    url : `${params}.com`,
    username : 'geoff',
    password : '123'
  }


  
  return {
    slug : params,
    // result,
    app,
    accountURL
  }
}
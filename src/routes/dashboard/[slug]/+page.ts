import type { PageLoad } from '../$types.js';

export const load: PageLoad = async ({ params }) => {

  //get app from making a db call to params.slug

  return {
    slug : params,
  }
}
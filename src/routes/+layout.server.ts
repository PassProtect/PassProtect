import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async({ locals }) => {
  // console.log('LOCALS IN LAYOUT', locals)
  return {
    user: locals.user
  }
}
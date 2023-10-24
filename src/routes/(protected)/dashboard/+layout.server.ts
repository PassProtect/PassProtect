import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./createAccount/$types";
export const load: PageServerLoad = async ({ locals }) => {
  //if the user is not logged in, send to login
  if (!locals.user) {
    throw redirect(302, '/');
  }
}
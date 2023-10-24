import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({locals}) => {
	//if user already has a cookie, route them to the dashboard
	if (locals.user) {
		throw redirect(302, '/dashboard');
	}
	return {};
};

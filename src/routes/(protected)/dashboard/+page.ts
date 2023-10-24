interface FetchOptions {
	fetch: (string: string) => Promise<Response>;
}

export const load = ({ fetch }: FetchOptions) => {
	const fetchAccounts = async () => {
		const res = await fetch('/api/dashboard');
		const data = await res.json();
		return { rows: data.rows, user_id: data.user_id, username: data.username };
	};

	return {
		userInfo: fetchAccounts()
	};
};

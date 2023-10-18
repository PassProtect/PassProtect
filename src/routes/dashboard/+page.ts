interface FetchOptions {
    fetch: (string: string) => Promise<Response>;
}

export const load = ({fetch}: FetchOptions) => {
    
    const fetchAccounts = async () => {
        const res = await fetch('/api/dashboard');
        const data = await res.json();
        return data.rows;
    }

    return {
        accounts: fetchAccounts()
    }
}
<script lang='ts'>
  import '../../app.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import type { LayoutData } from '../$types';

	export let data: LayoutData;

	interface AccountData {
		accounts : Array<object>
	}
	const accounts = writable<AccountData>({ accounts: []});
	$: accounts.set(data.accounts);
	

	setContext('accounts', accounts)
</script>

<nav>
	<a href="/">Log Out</a>
  <a href="/dashboard">Dashboard</a>
</nav>
<main>
	<slot />
</main>
<!-- <footer>
	This is the footer
</footer> -->
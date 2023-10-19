<script>
	import { scale } from 'svelte/transition';
	import accountStore from '../../Store.js';
	import { setupViewTransition } from 'sveltekit-view-transition';

	export let data;

	const { transition } = setupViewTransition();

	/**
	 * @param {{ iv: any; password: any; companyname: any; url: any; username: any; }} account
	 */

	async function updateStore(account) {
		//async wait for request and update password in store to plaintext
		const info = {
			iv: account.iv,
			password: account.password
		};
		const data = await fetch('/api/dashboard', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(info)
		});
		const pass = await data.json();
		accountStore.update(() => {
			return {
				companyname: account.companyname,
				url: account.url,
				username: account.username,
				password: pass.plaintext,
				iv: ''
			};
		});
	}
</script>

<div class="flex justify-center my-6">
	<a
		href="/dashboard/createAccount"
		class="viewLink variant-soft-primary hover:variant-soft-secondary px-36 py-2 rounded-md text-primary-500"
		use:transition={'viewLink'}>Add an Account</a
	>
</div>
<div class=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4">
	{#each data.accounts as account}
		<a 
			href="/dashboard/{account.companyname}" 
			on:click={updateStore(account)}
			class="viewLink variant-ghost-primary px-4 py-8 hover:variant-ghost-success text-center rounded-lg"
		>
			<h1 class="text-2xl font-semibold text-primary-500">{account.companyname}</h1>
		</a>
	{/each}
</div>

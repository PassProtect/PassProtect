<script>
	import accountStore, { userStore } from '../../../Store.js';

	export let data;

	/**
	 * @param {{ iv: any; password: any; companyname: any; url: any; username: any; }} account
	 */

	async function updateStore(account) {
		//async wait for request and update password in store to plaintext
		const info = {
			iv: account.iv,
			password: account.password
		}
		//decrypt the password
		const response = await fetch('/api/dashboard', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(info)
		});
		const pass = await response.json();
		//update the account store with the information of the chosen account
		accountStore.update(() => {
			return {
				companyname: account.companyname,
				url: account.url,
				username: account.username,
				password: pass.plaintext,
				iv: '',
			};
		});
	}
	//add the current user_id to the store to access at create account
	userStore.update(() => {
			return {
				user_id: data.userInfo.user_id
			}
		})
</script>

<div class="flex flex-col justify-center items-center mb-6">
	<h1 class="text-2xl my-4">Welcome {data.userInfo.username}!</h1>
	<a class='createAccount btn w-fit px-2' href='/dashboard/createAccount'>Create Account</a>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4" >
	{#each data.userInfo.rows as account}
		<a href="/dashboard/{account.companyname}" on:click={updateStore(account)} class="variant-ghost-primary px-4 py-16 dark:hover:variant-ghost-tertiary text-center rounded-lg">
			<h5
				class="text-2xl font-semibold text-primary-500"
			>
				{account.companyname}
			</h5>
		</a>
	{/each}
</div>

<style>
.createAccount {
	view-transition-name: active-page;
}
</style>
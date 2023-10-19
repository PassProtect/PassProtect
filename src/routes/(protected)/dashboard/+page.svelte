<script>
	import accountStore, { userStore } from '../../../Store.js';
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
	<h1 class="text-2xl mb-4">Hello {data.userInfo.username}</h1>
  <a href="/dashboard/createAccount" class="viewLink flex bg-sky-600/40 text-gray-100 border-2 border-sky-600 px-8 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200" use:transition={'viewLink'}>Create Account</a>
</div>
<div class=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4" >
	{#each data.userInfo.rows as account}
		<a href="/dashboard/{account.companyname}" on:click={updateStore(account)}>
			<h5
				class="text-2xl font-bold border-2 bg-slate-500/30 hover:bg-slate-500/50 border-sky-500 hover:border-sky-400 w-full h-36 flex items-center justify-center hover:shadow-md hover:shadow-sky-500"
			>
				{account.companyname}
			</h5>
		</a>
	{/each}
</div>

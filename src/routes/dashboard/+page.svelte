<script>
	import accountStore from '../../Store.js';
	export let data;
	
	function updateStore(account) {
		accountStore.update(() => {
			return {
				companyname: account.companyname,
				url: account.url,
				username: account.username,
				password: account.password,
				iv: account.iv
			};
		});
	}
</script>

<div class="flex justify-center my-6">
	<a
		href="/dashboard/createAccount"
		class="flex w-48 bg-blue-500 text-gray-100 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200"
		>Create Account</a
	>
</div>
<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 mx-4">
	{#each data.accounts as account}
		<a href="/dashboard/{account.companyname}" class="" on:click={updateStore(account)}>
			<h5
				class="text-2xl font-bold border-2 border-sky-500 w-full h-36 flex items-center justify-center"
			>
				{account.companyname}
			</h5>
		</a>
	{/each}
</div>

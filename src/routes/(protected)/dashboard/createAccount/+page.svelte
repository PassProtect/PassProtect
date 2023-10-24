<script lang="ts">
	import { enhance } from '$app/forms';
	import { userStore } from '../../../../Store';
	import type { ActionData } from './$types';


	export let form: ActionData;

</script>

<div class="w-full max-w-lg mx-auto border-2 border-tertiary-800 rounded-xl mt-32 text-center text-xl bg-primary-300/10">
	<div class="flex justify-end p-2 pr-4 text-red-600"><a href='/dashboard' class='hover:text-red-300'>X</a></div>
	<div class="pb-8 px-24">
	<h1 class="text-5xl pb-2 text-center mb-4 bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone">New Account</h1>
	
	{#if  (form?.success === false)}
		<h1 class="text-2xl text-center py-4 text-error-600">Account could not be created. Please try again.</h1>
	{/if}

	<form
		class="text-center text-lg"
		method="POST"
		action="/dashboard/createAccount"
		use:enhance
	>
		<!-- for passing along user_id ..? -->
		<input class='hidden' name='user_id' value={$userStore.user_id}>
		<input class='inputForm mb-2' name= 'companyname' type='text' placeholder="Company Name">
		<input class='inputForm mb-2' name= 'url' type='text' placeholder="Website URL">
		<input class='inputForm mb-2' name= 'username' type='text' placeholder="Username">
		<input class='inputForm mb-4' name= 'password' type='password' placeholder="Password">
		<button class='createAccount btn' type='submit'>Add Account</button>
	</form>
	</div>
</div>

<style>
	.createAccount {
	view-transition-name: active-page;
}
</style>
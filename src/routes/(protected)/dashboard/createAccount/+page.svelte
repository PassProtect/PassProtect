<script lang="ts">
	import { enhance } from '$app/forms';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { userStore } from '../../../../Store';
	import type { ActionData } from './$types';


	export let form: ActionData;
	const { transition } = setupViewTransition();

</script>

<div class="viewLink w-full max-w-lg mx-auto border-2 rounded-xl mt-32 text-center text-xl">
	<div class="flex justify-end p-2 text-red-600"><a href='/dashboard'>X</a></div>
	<div class=" p-8 px-24">
	<h1 class="my-2 text-4xl pb-8">Add New Account</h1>
	{#if (form?.success)}
		<h1 class="text-2xl text-center py-4 text-success-600">Account Created</h1>
	{/if}
	{#if  (form?.success === false)}
		<h1 class="text-2xl text-center py-4 text-error-600">Account could not be created. Please try again.</h1>
	{/if}


	<form
		class="text-center text-lg"
		method="POST"
		action="/dashboard/createAccount"
		use:transition={'viewLink'}
		use:enhance
	>
		<!-- for passing along user_id ..? -->
		<input class='hidden' name='user_id' value={$userStore.user_id}>
		<input class='inputForm mb-2' name= 'companyname' type='text' placeholder="Company Name">
		<input class='inputForm mb-2' name= 'url' type='text' placeholder="Website URL">
		<input class='inputForm mb-2' name= 'username' type='text' placeholder="Username">
		<input class='inputForm mb-4' name= 'password' type='password' placeholder="Password">
		<button class='btn' type='submit'>Add Account</button>
	</form>
	</div>
</div>


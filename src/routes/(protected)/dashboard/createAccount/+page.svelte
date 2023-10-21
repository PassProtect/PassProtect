<script lang="ts">
	import { enhance } from '$app/forms';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { userStore } from '../../../../Store';
	import type { ActionData } from './$types';

	import Button from '../../../../components/Button.svelte';
	import FormInput from '../../../../components/FormInput.svelte';

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
		<FormInput name='companyname' type='text' placeholder='Company Name' />
		<FormInput name='url' type='text' placeholder='Website URL' />
		<FormInput name='username' type='text' placeholder='Username' />
		<FormInput name='password' type='password' placeholder='Password' />
		<Button label='Add Account' type='submit'/>
	</form>
	</div>
</div>


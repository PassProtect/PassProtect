<script lang="ts">
	import { enhance } from '$app/forms';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { userStore } from '../../../../Store';
	import type { ActionData } from './$types';

	export let form: ActionData;
	const { transition } = setupViewTransition();

	$: user_id = $userStore.user_id;


</script>

<div data-theme="skeleton" class="viewLink variant-soft-tertiary w-full max-w-lg mx-auto border-2 border-tertiary-400 rounded-xl p-8 px-24 mt-[15%] text-center text-xl">
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
		<input class='hidden' name='user_id' value={$userStore.user_id}>
		<label class="py-2">
			<p>Company Name:</p>
			<input
				name="companyname"
				type="text"
				placeholder="Google"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Website URL:</p>
			<input
				name="url"
				type="text"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Username:</p>
			<input
				name="username"
				type="text"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Password:</p>
			<input
				name="password"
				type="password"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<button
			type="submit"
			class="viewLink variant-soft-tertiary hover:variant-filled-tertiary px-6 py-2 rounded-md text-tertiary-800 w-full mx-auto border-2 border-tertiary-500 mt-4"
			>Add Account</button
		>
	</form>
</div>


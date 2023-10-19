<script lang="ts">
	import { enhance } from '$app/forms';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import { userStore } from '../../../../Store';
	import type { ActionData } from './$types';

	export let form: ActionData;
	const { transition } = setupViewTransition();

	$: user_id = $userStore.user_id;


</script>

<div class="">
	<h1 class="text-4xl text-center py-8">Add New Account</h1>
	{#if (form?.success)}
	<h1 class="text-2xl text-center py-4 text-green-400">Account Created</h1>
	{/if}
	{#if  (form?.success === false)}
	<h1 class="text-2xl text-center py-4 text-red-600">Account Creation FAILED</h1>
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
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Website URL:</p>
			<input
				name="url"
				type="text"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Username:</p>
			<input
				name="username"
				type="text"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
				required
			/>
		</label>
		<label class="py-2">
			<p>Password:</p>
			<input
				name="password"
				type="password"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
				required
			/>
		</label>
		<button
			type="submit"
			class="bg-sky-600/40 hover:bg-sky-500 border-2 border-sky-600 w-96 px-8 py-2 rounded-lg cursor-pointer transition duration-200 mt-4"
			>Add Account</button
		>
	</form>
</div>


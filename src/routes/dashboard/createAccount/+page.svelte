<script lang="ts">
	import { showAlert } from '../../../Store';
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition } = setupViewTransition();

	function handleSubmit() {
		showAlert.set(true);
	}
</script>

<div class="">
	<h1 class="text-4xl text-center py-8">Add New Account</h1>

	<form
		class="text-center text-lg"
		method="POST"
		action="/dashboard/createAccount/"
		use:transition={'viewLink'}
		on:submit={handleSubmit}
	>
		<label class="py-2">
			<p>Company Name:</p>
			<input
				name="companyname"
				type="text"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
			/>
		</label>
		<label class="py-2">
			<p>Website URL:</p>
			<input
				name="url"
				type="text"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
			/>
		</label>
		<label class="py-2">
			<p>Username:</p>
			<input
				name="username"
				type="text"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
			/>
		</label>
		<label class="py-2">
			<p>Password:</p>
			<input
				name="password"
				type="password"
				class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
			/>
		</label>
		<button
			type="submit"
			class="bg-sky-600/40 hover:bg-sky-500 border-2 border-sky-600 w-96 px-8 py-2 rounded-lg cursor-pointer transition duration-200 mt-4"
			>Add Account</button
		>
	</form>
</div>

{#if $showAlert}
	<div class="alert">Account was successfully added!</div>
{/if}

<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	export let companyname = 'companyname';
	export let url = 'url';
	export let user_id = 0;
	export let username = 'username';
	export let password = 'password';
	export let editMode = false;

	const dispatch = createEventDispatcher();
</script>

<div
	class="viewLink w-full max-w-lg mx-auto border-2 rounded-xl p-8 px-24 mt-32 text-center text-xl"
>
	<h1 class="my-2 text-4xl pb-8">{companyname}</h1>
	<form
		class="text-center text-lg"
		action="/dashboard/[slug]?/edit"
		method="post"
		use:enhance={({ cancel }) => {
			const answer = confirm('Are you sure you want to update this entry?');
			if (!answer) {
				cancel();
			}
		}}
	>
		<input class="hidden" name="companyname" value={companyname} />
		<input class="hidden" name="user_id" value={user_id} />
		<label class="py-2">
			<p>New Link:</p>
			<input
				name="url"
				type="text"
				placeholder={url}
				value={url}
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
			/>
		</label>
		<label class="py-2">
			<p>New Username:</p>
			<input
				name="username"
				type="text"
				placeholder={username}
				value={username}
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
			/>
		</label>
		<label class="py-2">
			<p>New Password:</p>
			<input
				name="password"
				type="text"
				placeholder={password}
				value={password}
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
			/>
		</label>
		<button
			type="submit"
			class="viewLink variant-soft-tertiary hover:variant-filled-tertiary px-6 py-2 rounded-md text-tertiary-800 w-full mx-auto border-2 border-tertiary-500 mt-4"
			>Submit Changes</button
		>
	</form>
	<button
		class="viewLink variant-soft-error hover:variant-filled-error px-6 py-2 rounded-md text-error-800 w-full mx-auto border-2 border-error-500 mt-2"
		on:click={() => {
			editMode = false;
			dispatch('editModeOff', editMode);
		}}>Cancel</button
	>
</div>

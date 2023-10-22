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
	class="viewLink w-full max-w-lg mx-auto border-2 border-tertiary-800 rounded-xl p-8 px-24 mt-32 text-center text-xl bg-primary-300/10"
>

	<h1 class="text-6xl pb-2 text-center mb-4 bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone">{companyname}</h1>
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
				class="inputForm"
			/>
		</label>
		<label class="py-2">
			<p>New Username:</p>
			<input
				name="username"
				type="text"
				placeholder={username}
				value={username}
				class="inputForm"
			/>
		</label>
		<label class="py-2">
			<p>New Password:</p>
			<input
				name="password"
				type="text"
				placeholder={password}
				value={password}
				class="inputForm"
			/>
		</label>
		<button
			type="submit"
			class="btn text-xl my-4"
			>Submit Changes</button
		>
	</form>
	<button
		class="btn-error"
		on:click={() => {
			editMode = false;
			dispatch('editModeOff', editMode);
		}}>Cancel</button
	>
</div>

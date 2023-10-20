<script>
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	export let password = 'password';
	export let companyname = 'company';
	export let url = 'url';
	export let username = 'username';
	export let user_id = 0;
	export let editMode = false;
	export let showPassword = false;

	const dispatch = createEventDispatcher();

	function updateEditMode() {
		editMode = true;
		dispatch('editModeOn', editMode);
	}
</script>

<div
	data-theme="skeleton"
	class="viewLink variant-soft-tertiary w-full max-w-lg mx-auto border-2 border-tertiary-400 rounded-xl  mt-32 text-center text-xl"
>
	<a href='/dashboard' class="flex justify-end p-2 text-red-600">X</a>
	<div class="pb-8 px-24">
	<h1 class="my-2 pb-4">
		<strong class="text-bold">URL: </strong>
		<a href={url} target="_blank" class="text-sky-500">
			{url}
		</a>
	</h1>
	<h1 class="my-2">
		<strong class="text-bold">Username: {username}</strong>
	</h1>
	<h1 class="my-2 relative">
		<strong class="text-bold"
			>Password: {#if showPassword}{password}{/if}
			{#if !showPassword}********{/if}</strong
		>

		<button class="align-middle" on:click={() => (showPassword = !showPassword)}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 absolute inline-block bottom-2 right-10"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
				/>
			</svg>
		</button>
	</h1>
	<button
		class="viewLink variant-soft-tertiary hover:variant-filled-tertiary px-6 py-2 rounded-md text-tertiary-800 w-full mx-auto border-2 border-tertiary-500 mt-4"
		on:click={updateEditMode}
	>
		Edit Account
	</button>
	<form
		method="post"
		action="/dashboard/[slug]?/delete"
		use:enhance={({ cancel }) => {
			const answer = confirm('Are you sure you want to delete this entry?');
			if (!answer) cancel();
		}}
	>
		<input class="hidden" name="companyname" value={companyname} />
		<input class="hidden" name="user_id" value={user_id} />
		<button type="submit" class="viewLink variant-soft-error hover:variant-filled-error px-6 py-2 rounded-md text-error-800 w-full mx-auto border-2 border-error-500 mt-2">Delete Account</button>
	</form>
	</div>
</div>

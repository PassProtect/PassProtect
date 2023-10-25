<script>
	import { createEventDispatcher } from 'svelte';
	import { enhance } from '$app/forms';
	import HiddenEye from '../../public/HiddenEye.svelte';
	import { goto } from '$app/navigation';
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
	function dashboard() {
		goto('/dashboard');
	}
</script>

<div
	class="w-full max-w-lg mx-auto border-2 border-tertiary-800 rounded-xl mt-32 text-center text-xl overflow-x-auto bg-primary-300/10"
>
	<div class="flex justify-end p-2 pr-4 text-red-600">
		<a href="/dashboard" class="hover:text-red-300">X</a>
	</div>
	<div class="pb-8 px-24">
		{#if companyname}
			<h1
				class="text-6xl pb-2 text-center mb-4 bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone"
			>
				{companyname}
			</h1>
		{:else}
			<h1
				on:mousemove={dashboard}
				class="text-6xl pb-2 text-center mb-4 bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone"
			>
				null
			</h1>
		{/if}
		<div class="flex justify-center">
			<div class="font-bold text-right text-primary-100/50 w-1/2">
				<h1>URL:</h1>
				<h1>Username:</h1>
				<h1>
					<button class="align-middle text-white" on:click={() => (showPassword = !showPassword)}>
						<HiddenEye />
					</button>
					Password:
				</h1>
			</div>
			<div class="ml-2 text-left w-1/2">
				<h1 class="">
					{#if url}
						<a href={url} target="_blank" class="text-sky-500 hover:underline">
							{url}
						</a>
					{:else}
						<h1 class="italic text-gray-50/50">null</h1>
					{/if}
				</h1>
				{#if username}
					<h1 class="">
						{username}
					</h1>
				{:else}
					<h1 class="italic text-gray-50/50">null</h1>
				{/if}
				{#if password}
					<h1 class="relative">
						<strong class="text-bold"
							>{#if showPassword}{password}{/if}
							{#if !showPassword}********{/if}</strong
						>
					</h1>
				{:else}
					<h1 class="italic text-gray-50/50">null</h1>
				{/if}
			</div>
		</div>
		<button class="btn text-xl my-8" on:click={updateEditMode}>Edit Account</button>
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
			<button type="submit" class="btn-error">Delete Account</button>
		</form>
	</div>
</div>

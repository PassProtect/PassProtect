<script lang="ts">
	import { goto } from '$app/navigation';
	import accountStore, { userStore } from '../../../../Store.js';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import type { PageData } from './$types.js';
	import { scale } from 'svelte/transition';
	import { deleteAccount } from '../../../../components/functions/slug.js';
	import AccountInfo from '../../../../components/functions/slug/accountInfo.svelte';

	const { transition } = setupViewTransition();

	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;
	$: password = $accountStore.password;
	$: user_id = $userStore.user_id

	export let data: PageData;

	$: editMode = false;
	$: showPassword = false;
	$: type = showPassword ? 'text' : 'password'

	let formData = {
		companyname: data.slug,
		user_id: $userStore.user_id,
		url: '',
		username: '',
		password: ''
	};
	async function handleSubmit(event:any) {
		try {
			const answer = confirm('Are you sure you want to update this entry?');

			if (answer) {
				event.preventDefault();
				const response = await fetch('/api/edit', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(formData)
				});
				if (response.ok) {
					goto('/dashboard');
				} else {
					console.error('Failed to edit account');
				}
			}
      else {
        goto(`/dashboard/${data.slug}`);
      }
		} catch (error) {
			console.error('An error occurred while trying to edit account');
		}
	}
</script>
<div in:scale out:scale class="w-full h-full flex flex-col justify-center items-center overflow-hidden">
	
	{#if !editMode}
		<AccountInfo {companyname} {password} {url} {user_id} {username} {editMode} {showPassword} on:editModeOn={()=> {editMode = true}}/>
	{/if}

	{#if editMode}
		<div data-theme="skeleton" class="viewLink variant-soft-tertiary w-full max-w-lg mx-auto border-2 border-tertiary-400 rounded-xl p-8 px-24 mt-[15%] text-center text-xl">
			<h1 class="my-2 text-4xl pb-8">{companyname}</h1>
			<form class="text-center text-lg" on:submit={handleSubmit}>
				<input class="hidden" name="companyname" bind:value={companyname} />
				<label class="py-2">
					<p>New Link:</p>
					<input
						name="url"
						type="text"
						placeholder={url}
						bind:value={formData.url}
						class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
					/>
				</label>
				<label class="py-2">
					<p>New Username:</p>
					<input
						name="username"
						type="text"
						placeholder={username}
						bind:value={formData.username}
						class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
					/>
				</label>
				<label class="py-2">
					<p>New Password:</p>
					<input
						name="password"
						type="text"
						placeholder={password}
						bind:value={formData.password}
						class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
					/>
				</label>
				<button
					type="submit"
					class="viewLink variant-soft-tertiary hover:variant-filled-tertiary px-6 py-2 rounded-md text-tertiary-800 w-full mx-auto border-2 border-tertiary-500 mt-4"
					>Submit Changes</button
				>
				<button
					class="viewLink variant-soft-error hover:variant-filled-error px-6 py-2 rounded-md text-error-800 w-full mx-auto border-2 border-error-500 mt-2"
					on:click={() => {
						editMode = false;
					}}>Cancel</button
				>
			</form>
		</div>
	{/if}
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
	import accountStore, { userStore } from '../../../../Store.js';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import type { PageData } from './$types.js';
	import { scale } from 'svelte/transition';

	const { transition } = setupViewTransition();

	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;
	$: password = $accountStore.password;
	$: user_id = $userStore.user_id

	export let data: PageData;

	let editMode = false;

	let showPassword = false;
	$: type = showPassword ? 'text' : 'password'


	async function deleteAccount() {
		try {
			let answer = confirm('Are you sure you want to delete this entry?');
			console.log('ANSWER: ', answer);
			if (answer) {
				const response = await fetch('/api/delete', {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						companyname,
						user_id
					})
				});

				if (response.ok) {
					goto('/dashboard');
				} else {
					console.error('Failed to delete account');
				}
			}
		} catch (e) {
			console.error('An error occured while deleting the account: ', e);
		}
	}

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
		<div data-theme="skeleton" class="viewLink variant-soft-tertiary w-full max-w-lg mx-auto border-2 border-tertiary-400 rounded-xl p-8 px-24 mt-[15%] text-center text-xl">
			<h1 class="my-2 text-4xl pb-8">{companyname}</h1>
			<h1 class="my-2 pb-4">
				<strong class="text-bold">URL: </strong>
				<a 
					href={url} 
					target="_blank" 
					class="text-sky-500"
				>
					{url}
				</a>
			</h1>
			<h1 class="my-2">
				<strong class="text-bold">Username: {username}</strong>

			</h1>
			<h1 class="my-2 relative">
				<strong class="text-bold">Password: {#if showPassword}{password}{/if} {#if !showPassword}********{/if}</strong>
				
				<button 
					class="align-middle"
					on:click={ () => showPassword = !showPassword }
				>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute inline-block bottom-2 right-10">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
				</svg>				  
				</button>  
			</h1>
			<button
				class="viewLink variant-soft-tertiary hover:variant-filled-tertiary px-6 py-2 rounded-md text-tertiary-800 w-full mx-auto border-2 border-tertiary-500 mt-4"
				on:click={() => {
					editMode = true;
				}}
			>
				Edit Account
			</button>
			<button
				class="viewLink variant-soft-error hover:variant-filled-error px-6 py-2 rounded-md text-error-800 w-full mx-auto border-2 border-error-500 mt-2"
				on:click={deleteAccount}
			>
				Delete Account
			</button>
		</div>
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

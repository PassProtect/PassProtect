<script lang="ts">
	import { goto } from '$app/navigation';
	import accountStore from '../../../Store.js';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import type { PageData } from './$types.js';
	import { scale } from 'svelte/transition';

	const { transition } = setupViewTransition();

	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;
	$: password = $accountStore.password;

	export let data: PageData;

	let editMode = false;

	let showPassword = false;
	$: type = showPassword ? 'text' : 'password'

	const user_id = 1; // temporary variable
	// $: user_id = $userStore.user_id; // real variable

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
		<div data-theme="skeleton" class="bg-gray-800/80 border-2 border-gray-50 rounded-xl p-4 px-24 text-gray-50 mt-[15%] text-center text-xl">
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
				<strong class="text-bold">Password: {#if showPassword} {password}{/if}{#if !showPassword}**********{/if}</strong>
				
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
				class="mx-auto bg-sky-600/40 hover:bg-sky-500 border-2 border-sky-600 e rounded-md mt-8 py-1 px-8 text-lg w-full"
				on:click={() => {
					editMode = true;
				}}
			>
				Edit Account
			</button>
			<button
				class="mx-auto bg-red-600/40 hover:bg-red-600/75 border-2 border-red-600 hover:border-white rounded-md mt-3 py-1 px-8 text-lg w-full"
				on:click={deleteAccount}
			>
				Delete Account
			</button>
		</div>
	{/if}

	{#if editMode}
		<div class="border-2 border-sky-600 rounded-xl p-4 px-24 text-gray-50 my-4 text-center text-xl">
			<h1 class="my-2 text-4xl">{companyname}</h1>
			<form class="text-center text-lg" on:submit={handleSubmit}>
				<input class="hidden" name="companyname" bind:value={companyname} />
				<label class="py-2">
					<p>Change "{url}" to :</p>
					<input
						name="url"
						type="text"
						placeholder={url}
						bind:value={formData.url}
						class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
					/>
				</label>
				<label class="py-2">
					<p>Change "{username}" to :</p>
					<input
						name="username"
						type="text"
						placeholder={username}
						bind:value={formData.username}
						class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
					/>
				</label>
				<label class="py-2">
					<p>Change "{password}" to :</p>
					<input
						name="password"
						type="password"
						placeholder={password}
						bind:value={formData.password}
						class="w-96 bg-transparent focus:border-sky-600 focus:outline-none border-2 rounded-lg border-sky-600"
					/>
				</label>
				<button
					type="submit"
					class="bg-red-600/40 hover:bg-red-600/75 border-2 border-red-600 hover:border-white w-96 px-8 py-2 rounded-lg cursor-pointer transition duration-200 mt-4"
					>Submit Changes</button
				>
				<button
					class="bg-sky-600/40 hover:bg-sky-500 border-2 border-sky-600 w-96 px-8 py-2 rounded-lg cursor-pointer transition duration-200 mt-4"
					on:click={() => {
						editMode = false;
					}}>Cancel</button
				>
			</form>
		</div>
	{/if}
</div>

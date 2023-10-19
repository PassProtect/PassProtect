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

<div in:scale out:scale class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
	{#if !editMode}
		<div class="border-2 border-sky-600 rounded-xl p-4 px-24 text-gray-50 my-4 text-center text-xl">
			<h1 class="my-2 text-4xl">{companyname}</h1>
			<h1 class="my-2">
				<strong class="text-bold">URL: </strong><a href={url} target="_blank" class="text-blue-500"
					>{url}</a
				>
			</h1>
			<h1 class="my-2"><strong class="text-bold">Username: </strong>{username}</h1>
			<h1 class="my-2"><strong class="text-bold">Password: </strong>{password}</h1>
			<button
				class="mx-auto bg-sky-600/40 hover:bg-sky-500 border-2 border-sky-600 e rounded-md mt-3 py-1 px-8 text-lg w-full"
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

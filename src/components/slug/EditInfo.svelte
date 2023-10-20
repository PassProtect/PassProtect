<script>
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';

	import FormInput from '../FormInput.svelte';
	import Button from '../Button.svelte';

	export let companyname = 'companyname';
	export let url = 'url';
	export let user_id = 0;
	export let username = 'username';
	export let password = 'password';
	export let editMode = false;

	const dispatch = createEventDispatcher();
</script>

<div
	data-theme="skeleton"
	class="viewLink variant-soft-tertiary w-full max-w-lg mx-auto border-2 border-tertiary-400 rounded-xl p-8 px-24 mt-[15%] text-center text-xl"
>
	<h1 class="my-2 text-4xl pb-8">{companyname}</h1>
	<form
		class="text-center text-lg"
		action="/dashboard/[slug]"
		method="post"
		use:enhance={({ cancel }) => {
			const answer = confirm('Are you sure you want to update this entry?');
			if (!answer) {
				console.log('NAH');
				cancel();
			}
		}}
	>
		<input class="hidden" name="companyname" value={companyname} />
		<input class="hidden" name="user_id" value={user_id} />
		
		<p>New Link:</p>
		<FormInput name='url' placeholder={url} value={url}/>
		
		<p>New Username:</p>
		<FormInput name='username' placeholder={username} value={username}/>

		<p>New Password:</p>
		<FormInput name='password' placeholder={password} value={password}/>

		<Button type='submit' label='Confirm Changes'/>

		<!-- <Button 
			label='Cancel' 
			on:click={() => {
				editMode = false;
				dispatch('editModeOff', editMode);
			}}
		/> -->
		<button
			class="viewLink variant-soft-error hover:variant-filled-error px-6 py-2 rounded-md text-error-800 w-full mx-auto border-2 border-error-500 mt-2"
			on:click={() => {
				editMode = false;
				dispatch('editModeOff', editMode);
			}}
		>
		Cancel
		</button
	>
	</form>
</div>

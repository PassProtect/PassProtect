<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	import FormInput from '../../components/FormInput.svelte';
	import Button from '../../components/Button.svelte';

	export let form: ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1
		class="text-center font-mono font-bold text-6xl mb-4 bg-gradient-to-br from-primary-700 to-secondary-300 bg-clip-text text-transparent box-decoration-clone"
	>
		PassProtect
	</h1>

	{#if form?.success === false}
		<h1 class="text-error-600">Unsuccessful login. Please try again.</h1>
	{/if}
	<form
		method="POST"
		action="/?/login"
		class="w-full text-center flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<FormInput name="username" type="text" placeholder="username"/>

		<FormInput name="password" type="password" placeholder="password"/>

		<Button type='submit' label='Login'/>

		<Button label='Sign Up' href='/createUser'/>
	</form>

	<form method="POST" action="/?/Preston">
		<Button type='submit' label='BYBASS THIS BS'></Button>
	</form>
	<button type="button" class="btn variant-filled">Button</button>
</div>

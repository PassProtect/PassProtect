<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';


	export let form: ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1
		class="text-center font-mono font-bold text-6xl mb-4 bg-gradient-to-br from-primary-700 to-secondary-300 bg-clip-text text-transparent box-decoration-clone"
	>
		PassPro
	</h1>

	{#if form?.success === false}
		<h1 class="text-error-600">Unsuccessful login. Please try again.</h1>
	{/if}
	<form
		method="POST"
		action="/?/login"
		class="w-full flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<input class='inputForm' type='text' placeholder="username" name="username">
		<input class='inputForm mb-4' type='password' placeholder="password" name="password">

		<button class='btn' type='submit'>Login</button>
		<a class='signup btn' href='/createUser'>Sign Up</a>
	</form>

	<form method="POST" action="/?/Preston">
		<button class='btn' type='submit'>BYPASS THIS BS</button>
	</form>
	<form method='POST' action='/?/docker'>
		<button class='btn' type='submit'>docker</button>
	</form>
</div>

<style>
	.signup {
		view-transition-name: signup;
	}
</style>
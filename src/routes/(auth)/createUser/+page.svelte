<script lang='ts'>
	import type { ActionData } from './$types';
	import { enhance } from "$app/forms";
	export let form:ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1 class="text-center font-mono text-4xl mb-4">Sign Up</h1>

	{#if (form?.failed)}
	<h1>You messed up signing up somehow. Nice.</h1>
	{/if}
	<form 
		method="POST" 
		action="/createUser" 
		class="w-full text-center flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<label>
			<input
				name="email"
				type="text"
				placeholder="email"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<label>
			<input
				name="username"
				type="text"
				placeholder="username"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600"
				required
			/>
		</label>
		<label>
			<input
				name="password"
				type="password"
				placeholder="password"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-tertiary-600 text-tertiary-300"
				required
			/>
		</label>
		<button
			type="submit"
			class="viewLink variant-soft-secondary hover:variant-filled-secondary px-36 py-2 rounded-md w-full max-w-lg mx-auto border-2 border-secondary-500"
		>
			Create Account
		</button>
		<a
			href="/"
			class="viewLink variant-soft-secondary hover:variant-filled-secondary px-36 py-2 rounded-md w-full max-w-lg mx-auto border-2 border-secondary-500"
		>
			Back to Login
		</a>
	</form>
</div>

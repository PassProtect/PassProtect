<script lang='ts'>
	import type { ActionData } from './$types';
	import { enhance } from "$app/forms";
	export let form:ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1 class="text-5xl pb-2 text-center mb-4 bg-gradient-to-br from-primary-500 to-secondary-300 bg-clip-text text-transparent box-decoration-clone">Sign Up</h1>

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
				class="input w-full max-w-lg"
				required
			/>
		</label>
		<label>
			<input
				name="username"
				type="text"
				placeholder="username"
				class="input w-full max-w-lg"
				required
			/>
		</label>
		<label>
			<input
				name="password"
				type="password"
				placeholder="password"
				class="input w-full max-w-lg"
				required
			/>
		</label>
		<button
			type="submit"
			class="btn mt-4"
		>
			Create Account
		</button>
		<a
			href="/"
			class="btn-a-empty w-32"
		>
			Back to Login
		</a>
	</form>
</div>

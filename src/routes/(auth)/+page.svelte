<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1 class="text-center font-mono font-bold text-6xl mb-4 bg-gradient-to-br from-primary-700 to-secondary-300 bg-clip-text text-transparent box-decoration-clone">PassProtect</h1>

	{#if form?.success === false}
	<h1 class="text-error-600">Unsuccessful login. Please try again.</h1>
  {/if}
	<form
		method="POST"
		action="/?/login"
		class="w-full text-center flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<label>
			<input
				name="username"
				type="text"
				placeholder="username"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-secondary-600"
				required
			/>
		</label>
		<label>
			<input
				name="password"
				type="password"
				placeholder="password"
				class="input w-full max-w-lg border-2 rounded-lg focus:border-secondary-600"
				required
			/>
		</label>
		<button
			type="submit"
			class="viewLink variant-soft-secondary hover:variant-filled-secondary px-36 py-2 rounded-md w-full max-w-lg mx-auto border-2 border-secondary-500"
		>
			Login
		</button>
		<a
			href="/createUser"
			class="viewLink variant-soft-secondary hover:variant-filled-secondary px-36 py-2 rounded-md w-full max-w-lg mx-auto border-2 border-secondary-500"
		>
			Sign Up
		</a>
	</form>

	<form method="POST" action="/?/Preston">
		<button class="bg-green-600/40 text-gray-100 border-2 border-green-600 px-8 rounded-lg cursor-pointer hover:bg-green-500 transition duration-200"> Shortcut for Preston</button>
	</form>
</div>

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1 class="text-center font-mono text-4xl mb-4">PassProtect</h1>

	{#if form?.success === false}
	<h1>Login FAILED GG</h1>
  {/if}
	<form
		method="POST"
		action="/?/login"
		class="w-full text-gray-50 text-center flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<label>
			<input
				name="username"
				type="text"
				placeholder="username"
				class="w-full max-w-lg bg-transparent border-2 rounded-lg focus:border-sky-600 border-sky-600/70"
				required
			/>
		</label>
		<label>
			<input
				name="password"
				type="password"
				placeholder="password"
				class="w-full max-w-lg bg-transparent border-2 rounded-lg focus:border-sky-600 border-sky-600/70"
				required
			/>
		</label>
		<button
			type="submit"
			class="w-full max-w-lg py-1 mx-auto bg-sky-600/40 text-gray-50 border-2 border-sky-600/70 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200"
		>
			Login
		</button>
		<a
			href="/createUser"
			class="w-full max-w-lg py-1 mx-auto bg-sky-600/40 text-gray-50 border-2 border-sky-600/70 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200"
		>
			Sign Up
		</a>
	</form>

	<form method="POST" action="/?/Preston">
		<button class="bg-green-600/40 text-gray-100 border-2 border-green-600 px-8 rounded-lg cursor-pointer hover:bg-green-500 transition duration-200"> Shortcut for Preston</button>
	</form>
</div>

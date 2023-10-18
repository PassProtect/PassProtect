<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let form;
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
			/>
		</label>
		<label>
			<input
				name="password"
				type="password"
				placeholder="password"
				class="w-full max-w-lg bg-transparent border-2 rounded-lg focus:border-sky-600 border-sky-600/70"
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
	<a
		href="/dashboard"
		class="bg-green-600/40 text-gray-100 border-2 border-green-600 px-8 rounded-lg cursor-pointer hover:bg-green-500 transition duration-200"
	>
		!! Skip to Dashboard !!
	</a>
</div>

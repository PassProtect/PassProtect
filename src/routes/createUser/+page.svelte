<script>
	import { enhance } from "$app/forms";
	export let form;
</script>

<div class="flex h-screen flex-col justify-center items-center">
	<h1 class="text-center font-mono text-4xl mb-4">Create User</h1>

	{#if (form?.failed)}
	<h1>Create User FAILED lol</h1>
	{/if}
	<form 
		method="POST" 
		action="/createUser" 
		class="w-full text-gray-50 text-center flex flex-col gap-2 px-12 pt-12 pb-2"
		use:enhance
	>
		<label>
			<input
				name="email"
				type="text"
				placeholder="email"
				class="w-full max-w-lg bg-transparent border-2 rounded-lg focus:border-sky-600 border-sky-600/70"
				required
			/>
		</label>
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
			Create Account
		</button>
		<a
			href="/"
			class="w-full max-w-lg py-1 mx-auto bg-sky-600/40 text-gray-50 border-2 border-sky-600/70 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200"
		>
			Back to Login
		</a>
	</form>
</div>

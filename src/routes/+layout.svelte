<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import '../app.css';
</script>

<nav class="bg-black text-gray-50 grow text-right sticky top-0 px-5 py-4 flex justify-between">
	{#if !$page.data.user}
		<a href='/'>LogIn</a>
		<a href="/createUser">Register</a>
	{/if}

	{#if $page.data.user}
	<div class="text-2xl align-middle">PassProtect</div>
	<div class="flex">
		<a href="/dashboard" class="px-2 align-middle">Dashboard</a>
		<form action="/logout" method="POST" class="px-2 align-middle" use:enhance>
			<button type="submit">Log Out</button>
		</form>
	</div>
		
	{/if}
</nav>
<main
	class="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-neutral-900 to-black h-screen text-gray-50"
>
	<slot />
</main>

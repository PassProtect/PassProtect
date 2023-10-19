<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
</script>

<nav>
	{#if $page.data.user}
		<a href='/' class="text-white text-xl">LOGGED IN</h1>
	{/if}
</nav>

<main
	class="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-gray-700 via-neutral-900 to-black h-screen text-gray-50"
>
	<slot />
</main>

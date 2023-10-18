<script lang="ts">
	import '../../app.css';
</script>

<nav class="bg-black/40 grow text-right sticky top-0 px-5 py-4 flex justify-between">
	<div class="text-2xl align-middle">PassProtect</div>
	<div>
		<a href="/dashboard" class="px-2 align-middle">Dashboard</a>
		<a href="/" class="px-2 align-middle"> Log Out </a>
	</div>
</nav>
<main>
	<slot />
</main>
<!-- <footer>
	This is the footer
</footer> -->

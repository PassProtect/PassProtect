<script lang="ts">
	import '../../app.css';
	import { onNavigate } from '$app/navigation';


onNavigate(async (navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
		document.startViewTransition(async () => {
			resolve();
			await navigation.complete;
		});
	});
});
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
<style>
	@keyframes fade-in {
	from {
		opacity: 0;
	}
}

@keyframes fade-out {
	to {
		opacity: 0;
	}
}

@keyframes slide-from-right {
	from {
		transform: translateX(30px);
	}
}

@keyframes slide-to-left {
	to {
		transform: translateX(-30px);
	}
}

</style>

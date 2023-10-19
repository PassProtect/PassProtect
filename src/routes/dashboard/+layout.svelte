<script lang="ts">
	import '../../app.css';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();

	let curTheme = 'rocket';
	const setTheme = (theme: string) => {
		if (browser) {
			const bodyElement = document.body;
			bodyElement.setAttribute('data-theme', theme);
		}
	};

	$: {
		setTheme(curTheme);
	}

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

<nav class="bg-gradient-to-br from-primary-700/30 to-secondary-300/30 grow text-right sticky top-0 px-5 py-4 flex justify-between">
	<div class="text-3xl font-bold my-auto text-primary-500">PassProtect</div>
	<div>
		<div class="flex flex-row items-center justify-between p-4 gap-x-4">
			<select class="select text-sm font-light rounded-md" bind:value={curTheme}>
				<option value="rocket" selected>Rocket🚀</option>
				<option value="wintry">Wintry🥶</option>
				<option value="skeleton">Naturey🌳</option>
				<option value="crimson">Crimson🔴</option>
				<option value="gold-nouveau">Luxury🌟</option>
			</select>
			<div>
				<LightSwitch />
			</div>
		<a href="/dashboard" class="align-middle text-primary-500 font-bold">Dashboard</a>
		<a href="/" class="align-middle text-primary-500 font-bold w-full"> Log Out </a>
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

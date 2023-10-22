<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { setupViewTransition } from 'sveltekit-view-transition';

	setupViewTransition();

	// let curTheme = 'rocket';
	// const setTheme = (theme: string) => {
	// 	if (browser) {
	// 		const bodyElement = document.body;
	// 		bodyElement.setAttribute('data-theme', theme);
	// 	}
	// };

	// $: {
	// 	setTheme(curTheme);
	// }

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

{#if $page.data.user}
<nav class="bg-gradient-to-br from-primary-700/30 to-secondary-300/30 grow text-right  top-0 px-5 py-4 flex justify-between">
	<div class="text-3xl font-bold my-auto text-primary-500">PassPro</div>
	<div>
		<div class="flex flex-row items-center justify-between p-2 gap-x-4">
			<!-- <select class="select text-sm font-light rounded-md pl-4 pr-10" bind:value={curTheme}>
				<option value="rocket" selected>Rocket🚀</option>
				<option value="wintry">Wintry🥶</option>
				<option value="skeleton">Naturey🌳</option>
				<option value="crimson">Crimson🔴</option>
				<option value="gold-nouveau">Luxury🌟</option>
				<option value="seafoam">Seafoam</option>
				<option value="customThemeOne">CustomOne</option>
				<option value="customThemeTwo">CustomTwo</option>
				<option value="customThemeThree">CustomThree</option>
				
			</select> -->
			<div>
				<LightSwitch />
			</div>
		<a href="/dashboard" class="align-middle text-primary-500 font-bold ">Dashboard</a>
		<form action="/api/logout" method="POST" class="px-2 align-middle text-primary-500 font-bold" use:enhance>
			<button type="submit">LogOut</button>
		</form>	</div>
</nav>
{/if}



<main>
	<slot />
</main>

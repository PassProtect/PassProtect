<script lang="ts">
	import accountStore, { userStore } from '../../../../Store.js';
	import { setupViewTransition } from 'sveltekit-view-transition';
	import type { PageData } from './$types.js';
	import { scale } from 'svelte/transition';
	import AccountInfo from '../../../../components/slug/AccountInfo.svelte';
	import EditInfo from '../../../../components/slug/EditInfo.svelte';

	const { transition } = setupViewTransition();

	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;
	$: password = $accountStore.password;
	$: user_id = $userStore.user_id;
	$: editMode = false;
	$: showPassword = false;
</script>

<div
	in:scale
	out:scale
	class="w-full h-full flex flex-col justify-center items-center overflow-hidden"
>
	{#if !editMode}
		<AccountInfo
			{companyname}
			{password}
			{url}
			{user_id}
			{username}
			{editMode}
			{showPassword}
			on:editModeOn={() => {
				editMode = true;
			}}
		/>
	{/if}

	{#if editMode}
		<EditInfo
			{companyname}
			{password}
			{url}
			{user_id}
			{username}
			on:editModeOff={() => {
				editMode = false;
			}}
		/>
	{/if}
</div>

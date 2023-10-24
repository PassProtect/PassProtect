<script lang="ts">
	import accountStore, { userStore } from '../../../../Store.js';
	import EditInfo from '../../../../components/slug/EditInfo.svelte';
	import AccountInfo from '../../../../components/slug/AccountInfo.svelte';


	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;
	$: password = $accountStore.password;
	$: user_id = $userStore.user_id;
	$: editMode = false;
	$: showPassword = false;
</script>

<div
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


<script>
	import { Card } from 'flowbite-svelte';
	export let data;
  let cardProps = {
    url: null,
    username: null,
    password: null
  }
</script>

{#each data.accounts as account}

	<a href="/dashboard/{account.companyname}" class="text-center">
		<h5 class="text-2xl font-bold tracking-tight text-gray-900 border-2 border-sky-500 w-36 m-2 ">{account.companyname}</h5>
  </a>
{/each}

<script>
  import accountStore from '../../Store.js';
	export let data;

  accountStore.subscribe((data)=> {
    console.log(data)
  })

  function updateStore(account) {
    accountStore.update((currentData)=> {
      return {
        companyname: account.companyname,
        url: account.url,
        username: account.username,
        password: account.password
      };
    })
  }

</script>

{#each data.accounts as account}
	<a href="/dashboard/{account.companyname}" class="text-center" on:click={updateStore(account)}>
		<h5 class="text-2xl font-bold tracking-tight text-gray-900 border-2 border-sky-500 w-36 m-2 ">{account.companyname}</h5>
  </a>
{/each}

<script>
  import { getContext } from 'svelte';

  const accounts = getContext('accounts');
  export let data;

  console.log('ACCOUNTS', accounts)
</script>


<h1>{data.slug}</h1>
<h2>{data.app.username}</h2>
<h2>{data.app.password}</h2>
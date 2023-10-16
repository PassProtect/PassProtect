<script>
  import accountStore from '../../../Store.js';

  $: companyname = $accountStore.companyname
  $: url = $accountStore.url
  $: username = $accountStore.username
  $: password = $accountStore.password
</script>


<h1>{companyname}</h1>
<h1>{url}</h1>
<h1>{username}</h1>
<h1>{password}</h1>
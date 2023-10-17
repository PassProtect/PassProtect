<script lang="ts">
	import accountStore from '../../../Store.js';

	$: companyname = $accountStore.companyname;
	$: url = $accountStore.url;
	$: username = $accountStore.username;

  const plainPass = 'helo'
  export let data;
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
	<div class="border-2 border-blue-500 rounded-xl p-4">
		<h1 class="text-4xl my-4 text-center">{companyname}</h1>
		<h1 class="text-4xl my-4 text-center">{url}</h1>
		<h1 class="text-4xl my-4 text-center">{username}</h1>
		<h1 class="text-4xl my-4 text-center">{plainPass}</h1>
	</div>
</div>

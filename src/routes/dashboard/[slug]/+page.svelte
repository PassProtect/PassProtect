<script>
	import { goto } from '$app/navigation';
  import accountStore from '../../../Store.js';

  $: companyname = $accountStore.companyname
  $: url = $accountStore.url
  $: username = $accountStore.username
  $: password = $accountStore.password

  const user_id = 1; // temporary variable
  // $: user_id = $userStore.user_id; // real variable

  async function deleteAccount() {
    try {
      const response = await fetch('/api/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyname,
          user_id
        })
      })

      if (response.ok) {
        let answer = confirm('Are you sure you want to delete this entry?')
        if (answer !== null) {
          goto('/dashboard');
        }
      } else {
        console.error('Failed to delete account')
      }
    } catch (e) {
      console.error('An error occured while deleting the account: ', e)
    }
  }
</script>

<div class="w-screen h-screen flex flex-col justify-center items-center overflow-hidden">
  <div class='border-2 border-blue-500 rounded-xl p-4 px-24 text-gray-50 my-4 text-center text-xl'>
    <h1 class='my-2 text-4xl'>{companyname}</h1>
    <h1 class='my-2'><strong class="text-bold">URL: </strong><a href={url} class="text-blue-500">{url}</a></h1>
    <h1 class='my-2'><strong class="text-bold">Username: </strong>{username}</h1>
    <h1 class='my-2'><strong class="text-bold">Password: </strong>{password}</h1>
    <button 
      class="mx-auto bg-red-600/40 hover:bg-red-600/75 border-2 border-red-600 hover:border-white rounded-md mt-3 py-1 px-8 text-lg w-full"
      on:click={deleteAccount}>
      Delete Account
    </button>
  </div>
</div>

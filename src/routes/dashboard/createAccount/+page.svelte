<script lang="ts">
  import { showAlert } from "../../../Store";

  function handleSubmit() {
    showAlert.set(true);
  }
</script>

<h1>CREATE ACCOUNT</h1>

<form method="POST" action="/dashboard/createAccount/" on:submit={handleSubmit}>
	<label>
		Company Name
		<input name="companyname" type="text" class=" w-full bg-transparent focus:outline-none border-2 rounded-lg border-blue-500 my-2">
	</label>
  <label>
		Website URL
		<input name="url" type="text" class=" w-full bg-transparent focus:outline-none border-2 rounded-lg border-blue-500 ">
	</label>
  <label>
		Username
		<input name="username" type="text" class=" w-full bg-transparent focus:outline-none border-2 rounded-lg border-blue-500 ">
	</label>
	<label>
		Password
		<input name="password" type="password" class=" w-full bg-transparent focus:outline-none border-2 rounded-lg border-blue-500 ">
	</label>
  <button type="submit" class="bg-blue-500 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200 mt-4">Create Account</button>
</form>
{#if $showAlert}
<div class="alert">Account was successfully added!</div>
{/if}
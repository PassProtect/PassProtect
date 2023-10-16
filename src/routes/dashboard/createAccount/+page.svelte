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
		<input name="companyname" type="companyname">
	</label>
  <label>
		Website URL
		<input name="url" type="url">
	</label>
  <label>
		Username
		<input name="username" type="username">
	</label>
	<label>
		Password
		<input name="password" type="password">
	</label>
	<button>Create Account</button>
</form>
{#if $showAlert}
<div class="alert">Account was successfully added!</div>
{/if}
<script lang="ts">

</script>

<h1>CREATE ACCOUNT</h1>

<!-- <form method="post" action="/createAccount">
  <input type="text" name="companyname" />
  <input type="text" name="url" />
  <input type="text" name="username" />
  <input type="text" name="password" />
  <button type="submit">Create Account</button>
</form> -->

<form method="POST" action="/dashboard/createAccount/">
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
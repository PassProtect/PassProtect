<script lang="ts">
	import { showAlert } from '../../../Store';

	function handleSubmit() {
		showAlert.set(true);
	}
</script>

<div class="">
	<h1 class="text-4xl text-center py-8">Add New Account</h1>

	<form class="text-center text-lg" method="POST" action="/dashboard/createAccount/" on:submit={handleSubmit}>
		<label class="py-2">
			<p>Company Name: </p>
			<input
				name="companyname"
				type="text"
				class=" w-96 bg-transparent focus:outline-none border-2 rounded-lg border-blue-500"
			/>
		</label>
		<label class="py-2">
			<p>Website URL: </p>
			<input
				name="url"
				type="text"
				class="w-96 bg-transparent focus:outline-none border-2 rounded-lg border-blue-500"
			/>
		</label>
		<label class="py-2">
			<p>Username: </p>
			<input
				name="username"
				type="text"
				class="w-96 bg-transparent focus:outline-none border-2 rounded-lg border-blue-500"
			/>
		</label>
		<label class="py-2">
			<p>Password: </p>
			<input
				name="password"
				type="password"
				class="w-96 bg-transparent focus:outline-none border-2 rounded-lg border-blue-500"
			/>
		</label>
		<button
			type="submit"
			class="bg-blue-500/40 hover:bg-blue-500 border-2 border-blue-500 w-96 px-8 py-2 rounded-lg cursor-pointer transition duration-200 mt-4"
			>Add Account</button
		>
	</form>
</div>

{#if $showAlert}
	<div class="alert">Account was successfully added!</div>
{/if}

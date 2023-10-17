<script>
</script>

<div class='flex h-screen flex-col justify-center items-center'>

	<form method="POST" action="/" class="text-gray-50 flex flex-col gap-2 max-w-lg p-12 ">
		<h1 class="text-center font-mono text-4xl mb-4">PassProtect</h1>
		<label>
			<input name="username" type="text" placeholder="username" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-blue-500 ">
		</label>
		<label>
			<input name="password" type="password" placeholder="password" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-blue-500 ">
		</label>
		<button type="button" class="bg-blue-500 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200">Login</button>
	</form>
	<a href="/createUser" class="bg-blue-500 text-gray-100 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200 mb-8">Create User</a>
	<a href="/dashboard" class="bg-blue-500 text-gray-100 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200">Skip to Dash</a>

</div>




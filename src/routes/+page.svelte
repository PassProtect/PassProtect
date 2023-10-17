<script>
</script>

<div class='flex h-screen flex-col justify-center items-center'>

	<form method="POST" action="/" class="text-sky-500 flex flex-col gap-2 max-w-lg p-12 ">
		<h1 class="text-center font-mono text-4xl mb-4">PassProtect</h1>
		<label>
			<input name="username" type="text" placeholder="username" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-sky-600 ">
		</label>
		<label>
			<input name="password" type="password" placeholder="password" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-sky-600 ">
		</label>
		<button type="button" class="bg-sky-600 text-gray-50 border-none px-8 rounded-lg cursor-pointer hover:bg-sky-400 transition duration-200">Login</button>
	</form>
	<a href="/createUser" class="bg-sky-600 text-gray-100 border-none px-8 rounded-lg cursor-pointer hover:bg-sky-400 transition duration-200 mb-8">Create User</a>
	<a href="/dashboard" class="bg-sky-600 text-gray-100 border-none px-8 rounded-lg cursor-pointer hover:bg-blue-400 transition duration-200">Skip to Dash</a>

</div>




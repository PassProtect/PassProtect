<script>
</script>

<div class='flex h-screen flex-col justify-center items-center'>

	<form method="POST" action="/" class="text-gray-50 flex flex-col gap-2 max-w-lg p-12 ">
		<h1 class="text-center font-mono text-4xl mb-4">Create User</h1>
		
		<label>
			<input name="username" type="text" placeholder="username" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-sky-600 ">
		</label>
		<label>
			<input name="password" type="password" placeholder="password" class=" w-full bg-transparent focus:border-none focus:outline-none border-2 rounded-lg border-sky-600 ">
		</label>
		<button type="button" class="bg-sky-600/40 border-2 border-sky-600 px-8 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200 mt-4">Create Account</button>
	</form>
	<a href="/" class="bg-sky-600/40 text-gray-100 border-2 border-sky-600 px-8 rounded-lg cursor-pointer hover:bg-sky-500 transition duration-200">Back to Login</a>
	

</div>




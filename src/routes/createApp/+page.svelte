<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	const handleSubmit = async () => {
		const body = {
			message: 'hello'
		};
		console.log('BEFORE FETCH')
		const data = await fetch('/api/createAccount', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		console.log('DATA BACK FROM API', data);
	};
</script>

<button on:click={handleSubmit}>Submit</button>
<!-- <form action="/createApp" method="post" use:enhance>
	<input name="companyname" type="text" required />
</form> -->

<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';


</script>

<form action="/createApp" method="post" use:enhance> 
  <input name='companyname' type='text'required>
  <button type="submit">Submit</button>
</form>
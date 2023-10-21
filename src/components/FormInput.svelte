<script lang="ts">
    export let name = '';
    export let type: 'text' | 'password' = 'text';
    export let placeholder = '';
</script>

<label for={name}>
	<input
		id={name}
		{name}
		{type}
		{placeholder}
		class="input w-full my-2 max-w-lg"
		required
	/>
</label>
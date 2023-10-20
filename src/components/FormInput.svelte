<script lang="ts">
    export let name = '';
	export let value: string | null = null;
    export let type: 'text' | 'password' = 'text';
    export let placeholder = '';
</script>

<label for={name}>
	<input
		name={name}
		type={type}
		value={value}
		placeholder={placeholder}
		class="w-full my-2 bg-primary-500/20 max-w-lg border-2 border-primary-500 rounded-lg focus:border-primary-200 text-primary-800"
		required
	/>
</label>
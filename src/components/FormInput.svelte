<script>
    export let name = '';
    export let type = '';
    export let placeholder = '';
</script>
<label for={name}>
	<input
		name={name}
		type={type}
		placeholder={placeholder}
		class="w-full bg-primary-500/20 max-w-lg border-2 border-primary-800 rounded-lg focus:border-primary-400 text-primary-800"
		required
	/>
</label>

<!-- 
<script lang="ts">
    export let value: string;
	export let label: string | undefined = undefined;
    export let placeholder = '';
</script>
<label>
	{#if label}<span>{label}</span>
</label>
<input
	name={name}
	type={type}
	placeholder={placeholder}
	class="w-full bg-primary-500/20 max-w-lg border-2 border-primary-800 rounded-lg focus:border-primary-400 text-primary-800"
	required
/>
 -->

<script lang="ts">
    export let href: string | 'none' = 'none';
    export let label = '';
    export let type: 'button' | 'submit' | null = 'button';

    const buttonClass = 'viewLink variant-soft-secondary hover:variant-filled-secondary px-36 py-2 rounded-md w-full max-w-lg mx-auto border-2 border-secondary-500'
</script>

<!-- if 'href' isn't provided, return an anchor -->
{#if href !== 'none'}

    <a href={href} type={type} class={buttonClass}>
        {label}
    </a>

{:else}
<!-- otherwise, return a button -->

    <button type={type} class={buttonClass}>
        {label}
    </button>

{/if}

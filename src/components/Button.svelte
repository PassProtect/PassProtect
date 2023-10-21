<script lang="ts">
    export let href: string | 'none' = 'none';
    export let label = '';
    export let type: 'button' | 'submit' | null = 'button';

    const buttonClass = 'viewLink btn text-center py-2 rounded-md w-full max-w-lg mx-auto my-4 border-2'

    const anchorClass = `${buttonClass}`
</script>

<!-- if 'href' isn't provided, return an anchor -->
{#if href !== 'none'}

    <a href={href} type={type} class={buttonClass}>
        {label}
    </a>

{:else}
<!-- otherwise, return a button -->

    <button type={type} class={anchorClass}>
        {label}
    </button>

{/if}

<script>
	import { goto } from "$app/navigation";

  export let message = '';
  export let title = '';
</script>

<!-- <div class='alert'>
  {message}
</div> -->

<aside class="alert variant-ghost mt-4">
  <!-- Icon -->
  <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-10 h-10">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
  </div>
  <!-- Message -->
  <div class="alert-message">
      <h3 class="h3">{title}</h3>
      <p>{message}</p>
  </div>
  <!-- Actions -->
  <div class="alert-actions">
    <button class='btn' on:click={()=> {goto('/')}}>Ok</button>
  </div>
</aside>
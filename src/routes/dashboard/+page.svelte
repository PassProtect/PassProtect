<script>
  import { Card } from 'flowbite-svelte'

  //make a call to db to find all accounts
  //map through the array and make a card with the company name
  const company = 'Netflix'
</script>

<Card href="/cards">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{company}</h5>
  <p class="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
</Card>

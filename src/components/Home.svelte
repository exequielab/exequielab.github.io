<script>

  import { data } from '../store.js'

	
	import Services from './Services.svelte'
	import Email from './Email.svelte'

	let services

  data.subscribe(d => {
    services = d?.services
  })


</script>

<div class="bg-teal-200">
	{#if services}
		<Services bind:services={services} ></Services>
	{/if}

	<Email></Email>
</div>
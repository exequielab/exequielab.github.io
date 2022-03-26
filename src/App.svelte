<script>
	import './main.css';	
	
	import Services from './Services'
	import Email from './Email'

	let data
	let services

	$: if(data) services = data.services
		
	let locationHref = window.location.href

	const getData = async () => {
		const res = await fetch(`${locationHref}data.json`, { method: 'GET' })
		
		const json = await res.json()
		data = json // JSON.stringify(json)
	}

	getData()

</script>


<div class="bg-teal-200">
	{#if services}
		<Services bind:services={services} ></Services>
	{/if}

	<Email></Email>
</div>
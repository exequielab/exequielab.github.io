<script>
	import './main.css';	

	let result = null
	$: console.log(result);
	
	let locationHref = window.location.href

	async function getData () {
		const res = await fetch(`${locationHref}/data.json`, { method: 'GET' })
		
		const json = await res.json()
		result = JSON.stringify(json)
		
	}

	getData()


</script>


<div class="bg-teal-200">
	<p>Snowpack + Svelte + Tailwindcss</p>
</div>
<script lang="ts">
	import { onMount } from 'svelte';

	import {data} from './store.js'

  import Home from './components/Home.svelte';

  import datax from './data'
	
	const getData = async () => {
		// window.location.href
		const res = await fetch(`${window.location.origin}/data.json`, { method: 'GET' })	
		console.log('res',res)

		const json = await res.json()
		console.log('json',json);
		
		return json
	}

	onMount(async () => {
	//	let datax = await getData()		
		data.set(datax); 
		
	});

</script>

<main>
  <div class="text-align-center antialiased text-gray-900">
    <Home />
  </div>
</main>

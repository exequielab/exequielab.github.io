<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import datax from './data';
	import { data } from './store.js';
	import { createScene } from "./scene";

	let el;

	const getData = async () => {
		// window.location.href
		const promisedData = fetch(`${window.location.origin}/data.json`, { method: 'GET' })	
		const res = await promisedData
		console.log('res',res)

		const json = await res.json()
		console.log('json',json);
		
		return json
	}
	onMount(async () => {
		//	let datax = await getData()		
		data.set(datax); 
		createScene(el)
		
	});


</script>

<canvas bind:this={el}></canvas>

<main>
  <div class="text-align-center antialiased text-gray-900">
    <Home />
  </div>
</main>






	
	
  

  
  
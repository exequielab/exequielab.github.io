<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import datax from './data';
	import { data } from './store.js';

	import Car from './car/Car.svelte'

	import Box from './cube/Box.svelte'
	import City from './cube/City.svelte'
	

	onMount(async () => {
		//	let datax = await getData()		
		data.set(datax); 
		
	});


</script>

 

	 
	 
	 


<div class="bg-scroll ..." style="background-image: url(istockphoto-652997680-612x612.jpg)">
	<img class=" absolute w-full h-screen  bg-scroll border-x-8  " src="docs/istockphoto-652997680-612x612.jpg" alt="holas" >
	
	
	
	<div  class=" h-screen m-0  flex items-center justify-center " >
		<div class="relative w-3/4 h-screen m-0">
			<City />
			
		</div>
		
	</div>
	
</div>

<main>
  <div class="text-align-center antialiased text-white">
    <Home />
  </div>
</main>






	
	
  

  
  
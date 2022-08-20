<script lang="ts">
	import { onMount } from 'svelte';
	import { createScene } from "./scene";

	let el;

	onMount(async () => {
		createScene(el)		
	});


</script>

<canvas bind:this={el}></canvas>





	
	
  

  
  
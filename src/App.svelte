<script lang="ts">
	import { onMount } from 'svelte';
	import Car from './car/Car.svelte';
	import Home from './components/Home.svelte';
	import datax from './data';
	import { cameraPosition, data } from './store';

	let grados = 91;

	let _cameraPosition = [];
	cameraPosition.subscribe((p) => (_cameraPosition = p));

	function calcularAngulo(x1, y1, x2, y2) {
		return (180 + (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI) % 360;
	}

	console.log(calcularAngulo(0, 0, 12, 0));
	console.log(calcularAngulo(0, 0, 0, 10));
	console.log(calcularAngulo(0, 0, -12, 0));
	console.log(calcularAngulo(0, 0, 0, -10));

	onMount(async () => {
		//	let datax = await getData()
		data.set(datax);
	});
</script>

<div class="text-blue-600">
	{#if 1 < grados && grados < 89}
		<h1>studies</h1>
	{:else if 90 < grados && grados < 179}
		<h1>email</h1>
	{:else if 180 < grados && grados < 269}
		<h1>name</h1>
	{:else if 270 < grados && grados < 359}
		<h1>services</h1>
	{:else}
		<h1>nada</h1>
	{/if}

	<!-- TODO:
    1: temp > 1    //  
	2: temp < 89 
	        ==> (estudies)
    if true
	if true && true 

	1 < grados < 90

	if (true) && (true)
	if (ture === true ) && (true)
	
	1 89 grados (studies)
    
	
-->
</div>

<div class="flex items-center justify-center ">
	<div class="flex items-center justify-center w-full">
		<div class="relative w-screen h-screen grow">
			<Car />
		</div>
	</div>
</div>

<div>
	<p>{_cameraPosition}</p>
</div>
<main>
	<div class="text-align-center antialiased text-white">
		<Home />
	</div>
</main>

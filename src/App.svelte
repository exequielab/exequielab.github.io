<script lang="ts">
	import { onMount } from 'svelte';
	import Home from './components/Home.svelte';
	import datax from './data';
	import { data } from './store';
	//	import City from './cube/City.svelte';
	import Car from './car/Car.svelte';

	onMount(async () => {
		//	let datax = await getData()
		data.set(datax);
	});
</script>

<div class="flex items-center justify-center ">
	<div class="flex items-center justify-center w-full">
		<div class="relative w-screen h-screen grow">
			<Car />
		</div>
	</div>
</div>

<!-- <div class="flex items-center justify-center ">
	<div class="flex items-center justify-center w-full">
		<div class="relative w-screen h-screen grow">
			<City />
		</div>
	</div>
</div> -->

<main>
	<div class="text-align-center antialiased text-white">
		<Home />
	</div>
</main>

<script lang="ts">
	import { onMount } from 'svelte';
	import Car from './car/Car.svelte';
	import Email from './components/Email.svelte';
	import Hobbies from './components/Hobbies.svelte';
	import StudiesMechanics from './components/StudiesMechanics.svelte';
	import Technologies from './components/technologies.svelte';
	import datax from './data';
	import { cameraPosition, data } from './store';
	let grados = 0;
	let hobbies = [];
	let studiesmechanics = [];
	let technologies = [];

	$: console.log('grados', grados);
	let filteredStudiesmechanics = [];
	$: if (studiesmechanics) filteredStudiesmechanics = studiesmechanics;
	let filteredHobbies = [];
	$: if (hobbies) filteredHobbies = hobbies;
	let filteredTechnologies = [];
	$: if (technologies) filteredTechnologies = technologies;

	cameraPosition.subscribe((p) => {
		console.log(p);

		grados = calcularAngulo(0, 0, p[0], p[2]);
	});

	data.subscribe((d) => {
		hobbies = d?.hobbies;
		studiesmechanics = d?.studiesmechanics;
		technologies = d?.technologies;
	});

	function calcularAngulo(x1, y1, x2, y2) {
		let g = (180 + (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI) % 360;
		return g;
	}

	// console.log(calcularAngulo(0, 0, 12, 0));
	// console.log(calcularAngulo(0, 0, 0, 10));
	// console.log(calcularAngulo(0, 0, -12, 0));
	// console.log(calcularAngulo(0, 0, 0, -10));

	onMount(async () => {
		//	let datax = await getData()
		data.set(datax);
	});
</script>

<div class="flex items-center justify-center ">
	<div class="flex items-center justify-center w-full">
		<div class="relative w-screen h-1/3 grow">
			<Car />
		</div>
	</div>
</div>

<div class="text-blue-600">
	{#if 1 < grados && grados < 89}
		{#if filteredStudiesmechanics}
			<StudiesMechanics bind:studiesmechanics={filteredStudiesmechanics} />
		{/if}
	{/if}
</div>

<div>
	{#if 90 < grados && grados < 179}
		<Email />
	{/if}

	{#if 180 < grados && grados < 269}
		{#if filteredTechnologies}
			<Technologies bind:technologies={filteredTechnologies} />
		{/if}
	{/if}

	{#if 270 < grados && grados < 359}
		{#if filteredHobbies}
			<Hobbies bind:hobbies={filteredHobbies} />
		{/if}
	{:else}
		<h1>nada</h1>
	{/if}
</div>

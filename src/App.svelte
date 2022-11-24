<script lang="ts">
	import { onMount } from 'svelte';
	import Car from './car/Car.svelte';
	import Footer from './components/Footer.svelte';
	import Header from './components/Header.svelte';
	import Hobbies from './components/Hobbies.svelte';
	import ResumeTemplate from './components/resumeTemplate.svelte';
	import StudiesMechanics from './components/StudiesMechanics.svelte';
	import Technologies from './components/Technologies.svelte';
	import datax from './data';

	import { cameraPosition, data } from './store';
	let grados = 0;
	let printable;
	let information;
	$: console.log('printable', printable);
	let hobbies = [];
	let studiesmechanics = [];
	let technologies = [];

	let filteredStudiesmechanics = [];
	$: if (studiesmechanics) filteredStudiesmechanics = studiesmechanics;
	let filteredHobbies = [];
	$: if (hobbies) filteredHobbies = hobbies;
	let filteredTechnologies = [];
	$: if (technologies) filteredTechnologies = technologies;

	cameraPosition.subscribe((p) => {
		grados = calcularAngulo(0, 0, p[0], p[2]);
	});

	data.subscribe((d) => {
		hobbies = d?.hobbies;
		information = d;
		studiesmechanics = d?.studiesmechanics;
		technologies = d?.technologies;
	});

	function calcularAngulo(x1, y1, x2, y2) {
		let g = (180 + (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI) % 360;
		return g;
	}

	onMount(async () => {
		//	let datax = await getData()
		data.set(datax);
	});
</script>

<div class="flex  items-center justify-center w-full relative ">
	<div class="absolute w-screen h-1/2 ">
		<Car />
	</div>

	<div class=" absolute w-screen h-1/3 grow mt-10">
		<Header />
	</div>
</div>

<div class=" relative  top-96 mt-32 ">
	<div class="  bg-black ">
		{#if 0 < grados && grados < 120}
			{#if filteredStudiesmechanics}
				<StudiesMechanics bind:studiesmechanics={filteredStudiesmechanics} />
			{/if}
		{/if}

		{#if 121 < grados && grados < 240}
			{#if filteredTechnologies}
				<Technologies bind:technologies={filteredTechnologies} />
			{/if}
		{/if}

		{#if 241 < grados && grados < 360}
			{#if filteredHobbies}
				<Hobbies bind:hobbies={filteredHobbies} />
			{/if}
		{/if}
	</div>

	<div class="relative top-12 hidden ">
		<ResumeTemplate bind:this={printable} {information} />
	</div>
	<footer
		class=" fixed bottom-0 left-0 z-20  w-full   shadow  md:justify-between  dark:bg-gray-800 dark:border-gray-600"
	>
		<Footer />
		<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400" />
		<div class="grid justify-center">
			<button
				class=" hover:bg-gray-600 duration-300 bg-black mb-2  text-xl  font-semibold text-orange-600 "
				on:click={() => {
					console.log('onclick - printable', printable);

					printable.printInvoice();
				}}
			>
				Resume
			</button>
		</div>
	</footer>
</div>

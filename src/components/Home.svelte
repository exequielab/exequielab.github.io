<script>
	import { data } from '../store.js';
	import Email from './Email.svelte';
	import Hobbies from './Hobbies.svelte';
	import StudiesMechanics from './StudiesMechanics.svelte';
	import Technologies from './technologies.svelte';

	let searchTerm = '';
	let show = false;
	let hobbies = [];
	let studiesmechanics;
	let technologies;
	let name;
	let lastname;

	let filteredServices = [];
	$: if (hobbies)
		filteredServices = hobbies.filter(
			(item) => item.indexOf(searchTerm) !== -1
		);

	data.subscribe((d) => {
		hobbies = d?.hobbies;
		studiesmechanics = d?.studiesmechanics;
		technologies = d?.technologies;
		name = d?.name;
		lastname = d?.lastname;
	});

	// getFullname()
	function getFullname() {
		return name + ' ' + lastname;
	}

	function handleClick() {
		show = !show;
	}

	function intermediary() {
		const p = new Promise((resolve) => {
			setTimeout(() => resolve('resolved'), 3000);
		});
		return p;
	}

	let promised = intermediary();
</script>

<main>
	{#await promised then number}
		<div class=" bg-white flex justify-center my-5">
			<img
				class="object-contain w-60 rounded-full border-x-8 border-blue-900 shadow-2xl "
				src="/public/1651170223948.jpg"
				alt="holas"
			/>
		</div>
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</main>

<div class="text-black text-xl  " />

<div
	class="bg-blue-800 text-4xl rounded-full mr-96 ml-96 p-3 flex justify-center  border-4 border-gray-600"
>
	{#if name}
		<h1 class="text-white capitalize">{getFullname()}</h1>
	{/if}
</div>

<div
	class="flex justify-center text-gray-700 bg-blue-500 border-blue-600 mt-2 rounded-full mr-96 ml-96 border-4 p-6"
>
	{#if show}
		Filter: <input bind:value={searchTerm} />
		{searchTerm}
	{/if}
</div>

<div class="flex justify-center">
	<button
		class=" text-white bg-blue-700 p-5  mt-36 rounded-3xl border-4 border-gray-600 transition ease-in-out duration-500 "
		on:click={handleClick}
	>
		Conocimientos
	</button>
</div>
<div class="bg-blue-500 ">
	{#if show}
		<!-- todo lo que este aqui se esconde -->
		<div class="bg-blue-500">
			{#if filteredServices}
				<Hobbies bind:hobbies={filteredServices} />
			{/if}
		</div>

		<div class="bg-blue-400 text-xl">
			{#if studiesmechanics}
				<StudiesMechanics bind:studiesmechanics />
			{/if}

			{#if technologies}
				<Technologies bind:technologies />
			{/if}
		</div>

		<div class="bg-blue-400">
			<Email />
		</div>
	{/if}
</div>

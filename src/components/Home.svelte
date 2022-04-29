<script>
	import { data } from "../store.js";

	import Services from "./Services.svelte";
	import Email from "./Email.svelte";
	import Studies from "./Studies.svelte";
	import Technologies from "./technologies.svelte";


	let  show= false

	let services;
	let studies;
	let technologies;
	let fullname;
	data.subscribe((d) => {
		services = d?.services;
		studies = d?.studies;
		technologies = d?.technologies;
		fullname = d?.fullname;
	});

	function handleClick() {
		show = true
	}
</script>

<div class="bg-white flex justify-center my-5">
	<img class="object-contain w-60 rounded-full border-x-8 border-blue-900 shadow-2xl " src="/public/1651170223948.jpg" alt="holas" >

</div>	

<div class="bg-blue-800 text-4xl rounded-3xl mr-96 ml-96 p-3 flex justify-center  border-4 border-gray-600">
	{#if fullname}
	<h1 class="text-white capitalize">{fullname}</h1>
	{/if}
</div>
 

<div class="flex justify-center">
	<button
		class=" text-white bg-blue-700 p-5  mt-36 rounded-3xl border-4 border-gray-600 transition ease-in-out duration-500 "
		on:click|once={handleClick}
	>
		Conocimientos
	</button>
</div>
<div class="bg-blue-500 ">
	{#if show}
	<!-- todo lo que este aqui se esconde -->
	<div class="bg-blue-500">
		{#if services}
			<Services bind:services />
		{/if}
	</div>
	
	<div class="bg-blue-400 text-xl">
		{#if studies}
			<Studies bind:studies />
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

<script>
	export let hobbies = [];

	$: console.log(hobbies);
</script>

<section class="bg-white border-b py-8">
	<div class="container mx-auto flex flex-wrap pt-4 pb-12">
		<h1
			class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
		>
			Hobbies
		</h1>

		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>

		{#each hobbies as hobbie}
			<div
				class="w-full  flex flex-col flex-grow flex-shrink p-2 rounded-t rounded-b-none "
			>
				<div class="flex-1 bg-white">
					<p
						class=" text-center  w-full font-semibold text-lg text-gray-800 px-6"
					>
						{hobbie}
					</p>
					<!-- <div class="flex items-center justify-center">
					<button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-2 px-4 shadow-lg">More...</button>
				</div> -->
				</div>
			</div>
		{/each}
	</div>
</section>

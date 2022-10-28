<script>
	export let technologies = [];

	$: console.log(technologies);
</script>

<section class="bg-black  ">
	<div class="container mx-auto flex flex-wrap  pb-12">
		<h1
			class="w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"
		>
			Technologies
		</h1>
		<div class="w-full mb-4">
			<div class="h-1 mx-auto gradient w-64 opacity-25 " />
		</div>

		{#each technologies as technology}
			<div
				class=" flex flex-grow flex-shrink p-3 rounded-t rounded-b-none overflow-hidden shadow"
			>
				<div class="flex-1 bg-black">
					<p class="w-full font-semibold text-lg text-gray-400 px-6">
						{technology}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

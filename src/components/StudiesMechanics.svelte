<script>
	export let studiesmechanics = [];

	$: console.log(studiesmechanics);
</script>

<section class="bg-black  ">
	<div class="container mx-auto flex flex-wrap  ">
		<h1
			class="w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"
		>
			Studies Mechanics
		</h1>

		{#each studiesmechanics as studymechanic}
			<div
				class="w-full  flex flex-col flex-grow flex-shrink p-2 rounded-t rounded-b-none "
			>
				<div class="flex-1 bg-black">
					<p
						class="text-center w-full font-semibold text-lg text-gray-400 mt-3 px-6"
					>
						{studymechanic}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

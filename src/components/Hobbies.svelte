<script>
	export let hobbies = [];
</script>

<section class="bg-black   ">
	<div class="container mx-auto flex flex-wrap  pb-12 ">
		<h1
			class="w-full my-2 text-5xl font-bold leading-tight text-center text-orange-600"
		>
			Hobbies
		</h1>

		<div class="w-full mb-4 ">
			<div class="h-1 mx-auto gradient  w-64 opacity-25 my-0 py-0 rounded-t" />
		</div>

		{#each hobbies as hobbie}
			<div
				class="w-full  flex flex-col flex-grow flex-shrink p-2 rounded-t rounded-b-none "
			>
				<div class="flex-1 bg-black">
					<p
						class=" text-center  w-full font-semibold text-xl text-gray-400 px-6"
					>
						{hobbie}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

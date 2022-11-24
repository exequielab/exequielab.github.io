<script>
	// @ts-nocheck

	import Footer from './Footer.svelte';
	import Header from './Header.svelte';
	import Hobbies from './Hobbies.svelte';
	import StudiesMechanics from './StudiesMechanics.svelte';
	import Technologies from './Technologies.svelte';
	export let information;
	let printTemplate;
	let printable;

	export function printInvoice() {
		console.log('printInvoce');
		if (!information) return;
		// var printContents = printTemplate.innerHTML;
		// var originalContents = document.body.innerHTML;

		// document.body.innerHTML = printContents;
		// window.print();
		// document.body.innerHTML = originalContents;
		var newWin = window.frames['printf'];
		let mydoc = `<body onload="window.print()">${printTemplate.innerHTML}</body>`;
		console.log('mydoc', mydoc);
		newWin.document.write(mydoc);
		newWin.document.close();
	}
</script>

<iframe id="printf" name="printf" />

<!-- Print Template -->

<div class="m-10" bind:this={printTemplate}>
	<div>
		<div>
			<h1><Header /></h1>
			<div>
				<!-- {JSON.stringify(information)} -->
				{#if information}
					<Technologies technologies={information.technologies} />
				{/if}
				{#if information}
					<Hobbies hobbies={information.hobbies} />
				{/if}
				{#if information}
					<StudiesMechanics studiesmechanics={information.studiesmechanics} />
				{/if}
			</div>

			<Footer />
		</div>
	</div>
</div>

<!-- <div>
          <div class="mb-1 flex items-center">
            <label
              class="w-32 text-gray-800 block font-bold text-xs uppercase tracking-wide"
              >Invoice No.</label
            > 
            <span class="mr-4 inline-block">:</span>
            <div class="font-bold">{invoice.invoiceNumber}</div>
          </div>
         -->

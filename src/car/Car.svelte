<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { createScene } from './scene';

	let el;

	onMount(async () => {
		createScene(el);
	});

	onDestroy(async () => {
		console.log('onDestroy');
		// destroyScene(el)
	});
</script>

<canvas bind:this={el} />

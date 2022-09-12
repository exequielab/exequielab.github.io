import { writable } from 'svelte/store';

export const data = writable(null);

export const cameraPosition = writable([300, 0, 0]);

// export const filter = writable(localStorage.getItem('filter') || '')
// filter.subscribe(
//   (val) => localStorage.setItem('filter', val) && console.log(val)
// )

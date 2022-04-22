<script>

  import { data } from '../store.js'


	import Services from './Services.svelte'
	import Email from './Email.svelte'
    import Studies from './Studies.svelte'
    import Otherworks from './otherworks.svelte';


	let services
    let studies
	let otherworks
	let fullname 
  data.subscribe(d => {
    services = d?.services   
	studies= d?.studies
	otherworks= d?.otherworks
	fullname= d?.fullname
  })

</script>


<div class="bg-blue-900 flex justify-center"> 
	{#if fullname}
	<h1 class="text-white capitalize">{fullname} </h1>
	{/if}

</div>


<div class="bg-yellow-500">
	{#if services}
		<Services bind:services={services} ></Services>
	{/if}

	
</div>

<div class="bg-gray-300 flex">
	<img class="object-contain w-60 rounded-full ml-5" src="/motorew10j4s.jpg" alt="holas" >
	<div class="bg-gray-300 flex">
		<img class="object-contain w-96 rounded-full" src="/public/m1by0e5bxk88_600.jpg" alt="hola" >	
	</div>
</div>	


<div class="bg-teal-200">
	{#if studies}
		<Studies bind:studies={studies} ></Studies>
	{/if}


</div>






<div class= "bg-teal-200">

	<Email></Email>

</div>


{#if otherworks}
<Otherworks bind:otherworks={otherworks} ></Otherworks>
{/if}  
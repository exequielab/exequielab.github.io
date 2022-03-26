<script>

    let email // = 'cabrerajavier@gmail.com'
    let phone // = '634550886'
        // viewform

    let _sended
    
    const glink = 'https://docs.google.com/forms/d/e/1FAIpQLSe4vbWqqtCphDDUk2l0YCTMCenKctZXF0jeAexzxM27gZCB1Q/formResponse?usp=pp_url'
    // & entry.839337160=cabrera.javier@gmail.com & entry.1166974658=634550886

    const send = (e) => {
        if(!email) return

        _sended = true
        let formData = new FormData();
        formData.append('entry.1045781291', email);
        formData.append('entry.1166974658', phone);
        formData.append('entry.839337160', comment);

        fetch(glink, {
            mode: 'no-cors',
            body: formData,
            method: "post"
        })
        .catch((e) => console.log("Can’t access " + glink + " response. Blocked by browser?", e))

    }

</script>


<!-- <form action={glink} target="hidden_iframe" on:submit={send} >
  <input type="submit" value="Submit" >
</form> -->
{#if !_sended}
<p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Dejame tu contacto</p>
<div class="flex flex-wrap mb-6 px-3">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Email</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" bind:value={email} >
    </div>
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >Telefono</label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" bind:value={phone} >
    </div>
    <div class="md:flex md:items-center md:w-1/3 px-3">    
        <button class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" on:click={send}>SEND</button>
    </div>
</div>
{:else}
<p class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">gracias, te contactaremos</p>
{/if}


<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;" title="hiddenForm" ></iframe>
<script>
  import * as THREE from "three";
  import * as SC from "svelte-cubed";
  // import LittleCity from "./LittleCity.svelte";
  import ReusableGLTF from "./ReusableGLTF.svelte";
  // import Loading from "./Loading.svelte";
  import {
    statusOfModels,
    modelURL,
    modelsLoading,
    updateModelStatus,
  } from "./stores";

  function handleStatusChange(evt) {
    updateModelStatus(evt.detail.name, evt.detail.status);
  }
</script>

<!-- fog={new THREE.FogExp2('papayawhip', 0.1)} -->
<SC.Canvas antialias background={new THREE.Color("black")} shadows>
  <SC.PerspectiveCamera
    position={[-500, 300, 100]}
    near={4.9}
    far={3000}
    fov={50}
  />


  
        <ReusableGLTF
        modelURL={modelURL["car"]}
        name="sheep"
        position={[-6, 17, 4]}
        rotation={[0, Math.PI * 1.25, 0]}
        on:statusChange={handleStatusChange}
        
        />
        
    
      
  <SC.OrbitControls
    enabled={true}
    enableZoom={false}
    autoRotate={false}
    autoRotateSpeed={1}
    enableDamping={true}
    dampingFactor={0.1}
    target={[-6, 17, 0]}
  />

  <SC.DirectionalLight
    color={new THREE.Color(0xffffff)}
    position={[0, 10, 10]}
    intensity={4}
    shadow={true}
    
  />

  <SC.AmbientLight color={new THREE.Color(0xffffff)} intensity={4} />


</SC.Canvas>
<!-- <Loading showLoading={$modelsLoading} /> -->

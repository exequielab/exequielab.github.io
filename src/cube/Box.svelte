<script>
	import * as THREE from 'three';
	import * as SC from 'svelte-cubed';
  
    // …
  </script>
  
  <SC.Canvas>
  <!-- … all the scene stuff is here -->
  
  <SC.Mesh geometry={new THREE.BoxGeometry()} /> 
  <SC.PerspectiveCamera position={[1, 1, 3]} />

  </SC.Canvas>


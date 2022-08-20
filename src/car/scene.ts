import { GLTFLoader } from "./GLTFLoader.js";
import { OrbitControls } from "./OrbitControls.js";
import * as THREE from "three";
window.THREE = THREE;

let scene = new THREE.Scene();
let camera, renderer;

function init() {
  let loader = new GLTFLoader();

  // scene.background = new THREE.color (0xdddddd);

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener("change", renderer);

  let hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  let light = new THREE.PointLight(0xc4c4c4, 10);
  light.position.set(0, 300, 500);
  scene.add(light);

  let light2 = new THREE.PointLight(0xc4c4c4, 10);
  light2.position.set(500, 100, 0);
  scene.add(light2);

  let light3 = new THREE.PointLight(0xc4c4c4, 10);
  light3.position.set(0, 100, -500);
  scene.add(light3);

  let light4 = new THREE.PointLight(0xc4c4c4, 10);
  light4.position.set(-500, 300, 0);
  scene.add(light4);

  //renderer = new THREE.WebGLRenderer({antialias:true});
  //renderer.setSize(window.innerWidth,window.innerHeight);
  // document.body.appendChild(renderer.domElement);

  loader.load("scene.gltf", function (gltf) {
    let car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
  });
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const resize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};

export const createScene = (el) => {
  renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
  init();
  resize();
  animate();
};

window.addEventListener("resize", resize);

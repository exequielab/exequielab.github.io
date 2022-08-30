import * as THREE from 'three';
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js';
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
	camera.position.x = -500;
	camera.position.y = 300;
	camera.position.z = 100;
	// near={4.9}
	// far={3000}
	// fov={50}

	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
	controls.autoRotate = true;
	controls.autoRotateSpeed = 1.5;
	controls.autoRotate = true;
	controls.rotateSpeed = 1.5;

	controls.addEventListener('change', (evt) => console.log(evt));

	let hlight = new THREE.AmbientLight(0x404040, 100);
	scene.add(hlight);

	let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
	directionalLight.position.set(0, 1, 0);
	directionalLight.castShadow = true;
	scene.add(directionalLight);

	let light = new THREE.PointLight(0xc4c4c4, 10);
	light.position.set(0, 300, 500);
	scene.add(light);

	loader.load('scene.gltf', function (gltf) {
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
	window.addEventListener('resize', resize);
};

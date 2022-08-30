import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { cameraPosition } from '../store';
window.THREE = THREE;

let scene, camera, renderer, controls;

let _cameraPosition = [];
cameraPosition.subscribe((p) => (_cameraPosition = p));

function orbitChange(evt) {
	console.log('orbitChange', evt);
}

function init(el) {
	console.log('init');
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	scene = new THREE.Scene();
	let loader = new GLTFLoader();

	camera = new THREE.PerspectiveCamera(
		40,
		window.innerWidth / window.innerHeight,
		1,
		5000
	);
	camera.rotation.y = (45 / 180) * Math.PI;
	camera.position.set(..._cameraPosition); // x y z
	// near={4.9}
	// far={3000}
	// fov={50}
	camera.lookAt(scene.position);
	// controls.target.set(...scene.position);

	controls = new OrbitControls(camera, renderer.domElement);
	controls.enableZoom = false;
	// controls.autoRotateSpeed = 1.5;
	// controls.autoRotate = true;
	controls.rotateSpeed = 0.5;
	// controls.addEventListener('change', orbitChange);

	let hlight = new THREE.AmbientLight(0x404040, 100);
	scene.add(hlight);
	orbitChange;
	let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
	directionalLight.position.set(0, 1, 0);
	directionalLight.castShadow = true;
	scene.add(directionalLight);

	let light = new THREE.PointLight(0xc4c4c4, 10);
	light.position.set(0, 300, 500); //  (...cameraPosition); // 0, 300, 500
	scene.add(light);

	loader.load('scene.gltf', function (gltf) {
		let car = gltf.scene.children[0];
		car.scale.set(0.5, 0.5, 0.5);
		scene.add(gltf.scene);
	});
	animate();
}

function animate() {
	// console.log('animate');

	let { x, y, z } = camera.position;
	// console.log('camera', camera.position);
	camera.position.y = 0;

	cameraPosition.set([x, y, z]);

	controls.update();
	renderer.render(scene, camera);
	// requestAnimationFrame(animate);
}

const resize = () => {
	console.log('resize');
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	console.log('createScene');
	init(el);
	resize();
	// animate();
	renderer.setAnimationLoop(animate);

	window.addEventListener('resize', resize);
};

export const destroyScene = () => {
	let scene, camera, renderer;
};

//import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'
import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});

renderer.render(scene, camera);

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);

const geometry = new THREE.BoxGeometry(10, 10, 10);

//set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshBasicMaterial( { color: 0xFF6347 } );

const cube = new THREE.Mesh( geometry, material );

scene.add( cube );

cube.position.z = -15;
cube.position.x = -15;

cube.rotation.x = 2;
cube.rotation.y = .5;
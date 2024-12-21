import * as THREE from 'https://cdn.skypack.dev/three@0.128.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.128.0/examples/jsm/loaders/GLTFLoader.js';
//import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'
//import { setupCounter } from './counter.js'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


// create a new renderer by instating the canvas element in our HTML // file
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});


const geometry = new THREE.BoxGeometry(10, 10, 10);

//set the color of the basic material in the object parameters `{}`

const material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } );

//orbit controls
const control = new OrbitControls(camera, renderer.domElement);

const cubeTexture = new THREE.TextureLoader().load('img/NicolaSamoriNOF.jpg');
const cube = new THREE.Mesh( new THREE.BoxGeometry(10,10,10), new THREE.MeshBasicMaterial({map: cubeTexture}) );
cube.position.z = -25;
cube.position.x = 8;


cube.rotation.x = 2;
cube.rotation.y = .5;


const ballTexture = new THREE.TextureLoader().load('img/kirby.jpg');
const ball = new THREE.Mesh( new THREE.SphereGeometry(5, 32, 32), new THREE.MeshBasicMaterial({map: ballTexture}) );
ball.position.z = 0;
ball.position.x = -15;


// Lights

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(0, -10, 10);

const ambientLight = new THREE.AmbientLight(0xffffff);
ambientLight.position.set(25, -15, -400);

const pointLight2 = new THREE.PointLight(0xffffff, 7);
pointLight2.position.set(50, 30, -20);

scene.add( cube );
scene.add( ball );
scene.add(pointLight);
scene.add( pointLight2 );
scene.add(ambientLight);
scene.background = new THREE.TextureLoader().load('img/retroGrid.jpg');
//Render the scene:

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(50);
camera.position.setX(-3);
//camera.position.setY(10);
renderer.render(scene, camera);



function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);

function animate() {
    requestAnimationFrame( animate );
    // slowly rotate the cube:
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    ball.rotation.x += .01;
    ball.rotation.y += -.02;

    renderer.render( scene, camera );
}

animate();
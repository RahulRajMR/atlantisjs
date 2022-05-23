import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import $ from "jquery"

       
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 1000 );


let renderer = new THREE.WebGLRenderer({  });
scene.background = new THREE.Color(0xdddddd);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0xECF0F1);
let doc = document.querySelector('.main');
doc.appendChild( renderer.domElement );


// var geo = new THREE.PlaneBufferGeometry(2000, 2000, 8, 8);
// var mat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
// var plane = new THREE.Mesh(geo, mat);

// scene.add(plane);
var images = [];
const geometry = new THREE.PlaneGeometry( 10, 10 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
scene.add( plane );


camera.position.z = 10;


for(let i = 0 ; i < 150; i++) {

     this.images.push(`/images/Background sequence/AtlantisBGTransition_${i}.jpg`)
 }
 
 new THREE.TextureLoader().load(
     images[this.startingTime],
     texture => {
     //Update Texture
     plane.material.map = texture;
     plane.material.needsUpdate = true;
     },
     xhr => {
     //Download Progress
     console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
     },
     error => {
     //Error CallBack
     console.log("An error happened" + error);
     }
 );


const animate = function () {
     requestAnimationFrame( animate );

     renderer.render( scene, camera );

};

animate();

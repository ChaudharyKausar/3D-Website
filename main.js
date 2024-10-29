// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// ------------------gsap for navbar------------------
var menu=document.querySelector('.nav i');
var close=document.querySelector('.navbar i');

var tl=gsap.timeline();
tl.to('.navbar',{
    right:0,
    duration:0.6,
    display:'flex'
});
tl.from('.navbar a',{
    x:150,
    duration:0.7,
    stagger:0.15,
    opacity:0
})
tl.from('.navbar i',{
    opacity:0,
});
tl.pause();

menu.addEventListener('click',function(){
    tl.play();
});
close.addEventListener('click',function(){
    tl.reverse();
})







// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.getElementById('planet');
//   if (!container) {
//     console.error('Container not found!');
//     return;
//   }

//   const scene = new THREE.Scene();
//   const renderer = new THREE.WebGLRenderer({ antialias: true });
//   const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);

//   renderer.setSize(container.clientWidth, container.clientHeight);
//   renderer.setPixelRatio(window.devicePixelRatio);
//   container.appendChild(renderer.domElement);

//   camera.position.set(0, 0, 30);

//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.enableDamping = true;
//   controls.enablePan = false;
//   controls.minDistance = 10;
//   controls.maxDistance = 50;

//   const spotLight = new THREE.SpotLight(0x8AFFFF, 1000);
//   spotLight.position.set(0, 100, 10);
//   scene.add(spotLight);

//   const loader = new GLTFLoader();
//   loader.load('static/blue-palnet/scene.gltf',
//     (gltf) => {
//       const mesh = gltf.scene;
//       mesh.scale.set(5, 5, 5);
//       mesh.position.set(0, 0, 0);
//       scene.add(mesh);

//       document.getElementById('progress').style.display = 'none';
//     },
//     (xhr) => {
//       console.log(`Model loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
//     },
//     (error) => {
//       console.error('An error occurred:', error);
//     }
//   );

//   window.addEventListener('resize', () => {
//     camera.aspect = container.clientWidth / container.clientHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(container.clientWidth, container.clientHeight);
//   });

//   function animate() {
//     controls.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(animate);
//   }

//   animate();
// });



// --------------------------Scipt end for planet---------------------

//--------------------------------Script for Cursor-----------------
const cursor = document.querySelector('.cursor');
var timeout;

document.addEventListener('mousemove', (e) =>
   {
  let x = e.pageX;
  let y = e.pageY;

  cursor.style.display = 'block';
  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';

  // function mouseStopped() {
  //   cursor.style.display = 'none';
  // }
  // clearTimeout(timeout);
  // timeout = setTimeout(mouseStopped, 1000);
});

document.addEventListener('mouseout', () => {
  cursor.style.display = 'none';
});


// -----------------------script for background animation--------------------
new FinisherHeader({
  "count": 40,
  "size": {
    "min": 5,
    "max": 7,
    "pulse": 0.1
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.5
    },
    "y": {
      "min": 0,
      "max": 0.5
    }
  },
  "colors": {
    "background": "#0A131D",
    "particles": [
      "#e22434",
      "#12e2ff"
    ]
  },
  "blending": "none",
  "opacity": {
    "center": 1,
    "edge": 1
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});







// gsap animation
// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation for the "About" section
gsap.from(".about h2", {
  scrollTrigger: {
    trigger: ".about", 
    start: "top 80%",  
    end: "bottom 20%", 
    scrub: true,       
    markers: false,    
  },
  opacity: 0,
  y: 50,  
  duration: 1.60
});

gsap.from(".about p", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    markers: false
  },
  opacity: 0,
  y: 100,  
  duration: 1.60
});


//Gsap For Horizontal Scrolling
gsap.to('#scrollingText', {
  x: '-88%',  // Scroll the text horizontally
  scrollTrigger: {
    trigger: '.horizontal-Scrolling',
    start: 'top top',    
    end: 'bottom top',   
    scrub: true,         
    pin: true,           
    markers: false,
    duration:1         
  }
});

// parallex effect
// var homeSection=document.getElementById('home');
// window.addEventListener(e,()=>{
// let val=window.scrollX;
// homeSection.style.marginRight=val*2.5+'px';
// })

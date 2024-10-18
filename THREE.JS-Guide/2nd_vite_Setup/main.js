import * as THREE from "three";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
)

camera.position.z = 2

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
const cube = new THREE.Mesh(geometry, material);



scene.add(cube)





const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({ canvas : canvas})
renderer.setSize(window.innerWidth,  window.innerHeight)

let clock = new THREE.Clock()
function animate(){
  window.requestAnimationFrame(animate);
  cube.rotation.x = clock.getElapsedTime() * 2;
  // cube.rotation.y += 0.01;
  // cube.rotation.z += 0.01;
  console.log(clock.getElapsedTime())
  renderer.render(scene, camera)
}
    animate()
    
    
//fps :- frame per second

//using Clock 

// because sab ki device ke fps diff hotey h to vo khi tej or dhire na chlne lagey that's why we use Clock

// Example:-

// let clock = new THREE.Clock()
// function animate(){
//   window.requestAnimationFrame(animate);
//   cube.rotation.x = clock.getElapsedTime() * 2;
//   // cube.rotation.y += 0.01;
//   // cube.rotation.z += 0.01;
//   console.log(clock.getElapsedTime())
//   renderer.render(scene, camera)
// }
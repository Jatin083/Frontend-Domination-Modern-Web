import * as THREE from "three";

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100,
)

camera.position.z = 5

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
const cube = new THREE.Mesh(geometry, material);

cube.position.x = -1

// by grouping
const spheregeo = new THREE.SphereGeometry(1, 10, 10);
const sphereMat = new THREE.MeshBasicMaterial({color:"red", wireframe:true})
const sphere = new THREE.Mesh(spheregeo, sphereMat);
    
sphere.position.x = 1
    
const group = new THREE.Group()
group.add(cube)
group.add(sphere)
scene.add(group);

group.position.x = -1



const canvas = document.querySelector("canvas")
const renderer = new THREE.WebGLRenderer({ canvas : canvas})
renderer.setSize(window.innerWidth,  window.innerHeight)

function animate(){
  window.requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  renderer.render(scene, camera)
  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;
  renderer.render(scene, camera)
    }
    animate()
    
    

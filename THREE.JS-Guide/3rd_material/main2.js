import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 2;

let textureLoader = new THREE.TextureLoader();

let tex = textureLoader.load("./map.jpg");
tex.colorSpace = THREE.SRGBColorSpace;

let tex2 = textureLoader.load("./Clouds.jpg");
tex2.colorSpace = THREE.SRGBColorSpace;

const geometry = new THREE.SphereGeometry(1, 250, 250);
const material = new THREE.MeshPhysicalMaterial({ map: tex });
const Mesh = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.SphereGeometry(1.01, 250, 250);
const material2 = new THREE.MeshPhysicalMaterial({ alphaMap: tex2 });
material2.transparent = true;
const Mesh2 = new THREE.Mesh(geometry2, material2);
Mesh.rotation.y = 1;

scene.add(Mesh);
scene.add(Mesh2);

let hdri = new RGBELoader();

hdri.load(
  "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/buikslotermeerplein_2k.hdr",
  function (hdritexture) {
    hdritexture.mapping = THREE.EquirectangularReflectionMapping;
    scene.environment = hdritexture;
    scene.background = hdritexture;
  }
);
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  window.requestAnimationFrame(animate);
  //   Mesh.rotation.x += 0.01;
  Mesh.rotation.y += 0.0002;

  Mesh2.rotation.y += 0.0003;
  //   Mesh.rotation.z += 0.01;
  controls.update();
  renderer.render(scene, camera);
}
animate();

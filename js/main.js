const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xeff9f0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Bed
const bedShape = new THREE.BoxGeometry(15, 3, 30);
const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const bed = new THREE.Mesh(bedShape, bedMaterial);
scene.add(bed);

//Desk
const deskShape = new THREE.BoxGeometry(15, 12, 24);
const deskMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const desk = new THREE.Mesh(deskShape, deskMaterial);
scene.add(desk);

//Window

//Door

//Closet

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
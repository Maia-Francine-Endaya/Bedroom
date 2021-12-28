const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xeff9f0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Bed
const bedShape = new THREE.BoxGeometry(12, 7, 19);
const bedMaterial = new THREE.MeshBasicMaterial({ color: 0x37505c });
const bed = new THREE.Mesh(bedShape, bedMaterial);
scene.add(bed);

//Desk
const deskShape = new THREE.BoxGeometry(17, 8, 8);
const deskMaterial = new THREE.MeshBasicMaterial({ color: 0xddc8c4 });
const desk = new THREE.Mesh(deskShape, deskMaterial);
scene.add(desk);

//Closet
const closetShape = new THREE.BoxGeometry(12, 30, 6);
const closetMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const closet = new THREE.Mesh(closetShape, closetMaterial);
scene.add(closet);

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  bed.position.x = 28;
  bed.position.y = -8;
  bed.position.z = 1;

  desk.position.x = 10;
  desk.position.y = -8;
  desk.position.z = -9;


  closet.position.x = -39;

  renderer.render(scene, camera);
}
animate();
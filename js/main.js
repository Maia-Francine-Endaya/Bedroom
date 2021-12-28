const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xeff9f0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Furnitures
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

//Doors and Windows
//Door
const doorPlane = new THREE.PlaneGeometry(12, 23);
const doorMaterial = new THREE.MeshBasicMaterial({ color: 0x693d41, side: THREE.DoubleSide });
const door = new THREE.Mesh(doorPlane, doorMaterial);
scene.add(door);

//Window
const windowPlane = new THREE.PlaneGeometry(18, 13);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x34a8eb, side: THREE.DoubleSide });
const roomWindow = new THREE.Mesh(windowPlane, windowMaterial);
scene.add(roomWindow);

camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  //Furniture
  bed.position.x = 28;
  bed.position.y = -8;
  bed.position.z = 1;

  desk.position.x = 10;
  desk.position.y = -8;
  desk.position.z = -9;

  closet.position.x = -39;

  //Doors and Windows
  door.position.x = -25;
  door.position.z = -10;

  roomWindow.position.x = 10;
  roomWindow.position.y = 5;
  roomWindow.position.z = -10;


  renderer.render(scene, camera);
}
animate();
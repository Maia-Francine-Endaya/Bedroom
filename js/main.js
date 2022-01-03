const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

scene.background = new THREE.Color(0xade1ff);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//Furnitures
//Bed
const mattressShape = new THREE.BoxGeometry(12, 3, 19);
const mattressMaterial = new THREE.MeshBasicMaterial({ color: 0xebebeb });
const mattress = new THREE.Mesh(mattressShape, mattressMaterial);
scene.add(mattress);

const frameShape = new THREE.BoxGeometry(12, 3, 19);
const frameMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const bedFrame = new THREE.Mesh(frameShape, frameMaterial);
scene.add(bedFrame);

const blanketShape = new THREE.BoxGeometry(13, 1, 13);
const blanketMaterial = new THREE.MeshBasicMaterial({ color: 0x5aa9e6 });
const blanket = new THREE.Mesh(blanketShape, blanketMaterial);
scene.add(blanket);

const pillowShape = new THREE.BoxGeometry(10, 2, 2);
const pillowMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const pillow = new THREE.Mesh(pillowShape, pillowMaterial);
scene.add(pillow);

//Desk
const deskShape = new THREE.BoxGeometry(17, 3, 8);
const deskMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const desk = new THREE.Mesh(deskShape, deskMaterial);
scene.add(desk);

const rightLegShape = new THREE.BoxGeometry(2, 7, 8);
const rightLegMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const rightDeskLeg = new THREE.Mesh(rightLegShape, rightLegMaterial);
scene.add(rightDeskLeg);

const leftLegShape = new THREE.BoxGeometry(2, 7, 8);
const leftLegMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const leftDeskLeg = new THREE.Mesh(leftLegShape, leftLegMaterial);
scene.add(leftDeskLeg);

//Potted Plant
const potShape = new THREE.CylinderGeometry(4, 3, 5, 8);
const potMaterial = new THREE.MeshBasicMaterial({ color: 0x693d41 });
const pot = new THREE.Mesh(potShape, potMaterial);
scene.add(pot);

const stemShape = new THREE.CylinderGeometry(1, 1, 8, 8);
const stemMaterial = new THREE.MeshBasicMaterial({ color: 0x4f3b36 });
const stem = new THREE.Mesh(stemShape, stemMaterial);
scene.add(stem);

const treeShape = new THREE.ConeGeometry(4, 8, 21);
const treeMaterial = new THREE.MeshBasicMaterial({ color: 0x4e9171 });
const tree = new THREE.Mesh(treeShape, treeMaterial);
scene.add(tree);

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

const knobShape = new THREE.SphereGeometry(0.8, 32, 16);
const knobMaterial = new THREE.MeshBasicMaterial({ color: 0xe6c187 });
const knob = new THREE.Mesh(knobShape, knobMaterial);
scene.add(knob);

//Window
const windowPlane = new THREE.PlaneGeometry(18, 13);
const windowMaterial = new THREE.MeshBasicMaterial({ color: 0x34a8eb, side: THREE.DoubleSide });
const roomWindow = new THREE.Mesh(windowPlane, windowMaterial);
scene.add(roomWindow);

const windowBeamGeometry = new THREE.CylinderGeometry(0.5, 0.5, 22, 20);
const windowBeamMaterial = new THREE.MeshBasicMaterial({ color: 0x96616b });
const windowBeam = new THREE.Mesh(windowBeamGeometry, windowBeamMaterial);
scene.add(windowBeam);

//Curtains
const leftCurtainShape = new THREE.PlaneGeometry(4, 14);
const leftCurtainMaterial = new THREE.MeshBasicMaterial({ color: 0xffcfe0, side: THREE.DoubleSide });
const leftCurtain = new THREE.Mesh(leftCurtainShape, leftCurtainMaterial);
scene.add(leftCurtain);

const rightCurtainShape = new THREE.PlaneGeometry(4, 14);
const rightCurtainMaterial = new THREE.MeshBasicMaterial({ color: 0xffcfe0, side: THREE.DoubleSide });
const rightCurtain = new THREE.Mesh(rightCurtainShape, rightCurtainMaterial);
scene.add(rightCurtain);

//Rug
const rugShape = new THREE.BoxGeometry(45, 0.5, 21);
const rugMaterial = new THREE.MeshBasicMaterial({ color: 0x424874 });
const rug = new THREE.Mesh(rugShape, rugMaterial);
scene.add(rug);

//Floor
const floorShape = new THREE.BoxGeometry(105, 0.5, 65);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x5aa9e6 });
const floor = new THREE.Mesh(floorShape, floorMaterial);
scene.add(floor);

//Stationery
const bookGeometry = new THREE.BoxGeometry(6, 1, 5);
const bookMaterial = new THREE.MeshBasicMaterial({ color: 0x090d59 });
const book = new THREE.Mesh(bookGeometry, bookMaterial);
scene.add(book);

const notebookGeometry = new THREE.BoxGeometry(6, 1, 5);
const notebookMaterial = new THREE.MeshBasicMaterial({ color: 0xff548a });
const notebook = new THREE.Mesh(notebookGeometry, notebookMaterial);
scene.add(notebook);

//Other things/decorations
const ballGeometry = new THREE.SphereGeometry(3, 32, 16);
const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xde9254 });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
scene.add(ball);

const posterGeometry = new THREE.PlaneGeometry(7, 15);
const posterMaterial = new THREE.MeshBasicMaterial({ color: 0xcb7ccc, side: THREE.DoubleSide });
const poster = new THREE.Mesh(posterGeometry, posterMaterial);
scene.add(poster);

const secondPosterGeometry = new THREE.PlaneGeometry(3, 3);
const secondPosterMaterial = new THREE.MeshBasicMaterial({ color: 0xe3c988, side: THREE.DoubleSide });
const secondPoster = new THREE.Mesh(secondPosterGeometry, secondPosterMaterial);
scene.add(secondPoster);

const thirdPosterGeometry = new THREE.PlaneGeometry(12, 16);
const thirdPosterMaterial = new THREE.MeshBasicMaterial({ color: 0x72b875, side: THREE.DoubleSide });
const thirdPoster = new THREE.Mesh(thirdPosterGeometry, thirdPosterMaterial);
scene.add(thirdPoster);

const boxGeometry = new THREE.BoxGeometry(14, 10, 8);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0xe6b98c });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);


camera.position.z = 35;

function animate() {
  requestAnimationFrame(animate);

  //Bed
  mattress.position.x = 28;
  mattress.position.y = -9;
  mattress.position.z = 2;

  bedFrame.position.x = 28;
  bedFrame.position.y = -11;
  bedFrame.position.z = 2;

  blanket.position.x = 26;
  blanket.position.y = -6.6;
  blanket.position.z = 6.2;

  pillow.position.x = 27.5;
  pillow.position.y = -6;
  pillow.position.z = -2;

  //Desk
  desk.position.x = 10;
  desk.position.y = -4;
  desk.position.z = -9;

  rightDeskLeg.position.x = 17.5;
  rightDeskLeg.position.y = -9;
  rightDeskLeg.position.z = -9;

  leftDeskLeg.position.x = 2.5;
  leftDeskLeg.position.y = -9;
  leftDeskLeg.position.z = -9;

  //Stationery
  book.position.x = 13;
  book.position.y = -2;
  book.position.z = -8;
  book.rotation.y = 0.5;

  notebook.position.x = 13;
  notebook.position.y = -1;
  notebook.position.z = -8;
  notebook.rotation.y = -0.2;

  //Potted Plant
  pot.position.x = -6;
  pot.position.y = -9;
  pot.position.z = -6;

  stem.position.x = -6;
  stem.position.y = -7;
  stem.position.z = -6;

  tree.position.x = -6;
  tree.position.y = -1;
  tree.position.z = -6;

  //Closet
  closet.position.x = -39;

  //Doors and Windows
  door.position.x = -20;
  door.position.z = -10;

  knob.position.x = -15;
  knob.position.z = -8;

  roomWindow.position.x = 10;
  roomWindow.position.y = 5;
  roomWindow.position.z = -10;

  windowBeam.position.x = 10;
  windowBeam.position.y = 11;
  windowBeam.position.z = -10;
  windowBeam.rotation.z = 11;

  leftCurtain.position.x = 2;
  leftCurtain.position.y = 5;
  leftCurtain.position.z = -9;

  rightCurtain.position.x = 18;
  rightCurtain.position.y = 5;
  rightCurtain.position.z = -9;

  rug.position.x = 1;
  rug.position.y = -15;
  rug.position.z = 0;

  floor.position.x = -5;
  floor.position.y = -17;
  floor.position.z = 0;

  //Other things/decorations
  ball.position.x = -12;
  ball.position.y = -12;
  ball.position.z = -3;


  poster.position.x = 33;
  poster.position.y = 4;
  poster.position.z = 4;
  poster.rotation.y = 30;

  secondPoster.position.x = 32;
  secondPoster.position.y = 11;
  secondPoster.position.z = 8;
  secondPoster.rotation.y = 30;

  thirdPoster.position.x = 31;
  thirdPoster.position.y = 4;
  thirdPoster.position.z = -10;

  box.position.x = -39;
  box.position.y = -9;
  box.position.z = -10;

  renderer.render(scene, camera);
}
animate();
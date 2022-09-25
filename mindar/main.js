// main.js

//  Import three.js 3D rendering engine
const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    // Instantiate a MindARThree object using MindAR engine
	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
	  container: document.body,
	  imageTargetSrc: './assets/target.mind'
	 });
    const {renderer, scene, camera} = mindarThree;

	// Create a 3D yellow cube
	const geometry = new THREE.BoxGeometry(0.5, 0.5);
	const material = new THREE.MeshBasicMaterial({color: 0xFFFF00});
	const cube = new THREE.Mesh(geometry, material);

	// Create a MindArThree image anchor 
	const anchor = mindarThree.addAnchor(0);
    // Attach the cube to the image anchor
	anchor.group.add(cube);

	// Start the MindARThree engine
	await mindarThree.start();
	renderer.setAnimationLoop(() => {
	  renderer.render(scene, camera);
	});
  };
  start();
});

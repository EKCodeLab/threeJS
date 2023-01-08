//document.write("<p>main hello world</p>");

//refactor - name variables to use in multiple functions
let scene, camera, renderer, cube;

//refactor function init holds all but the animate function1
function init() {
scene = new THREE.Scene();


camera = new THREE.PerspectiveCamera(
    75,
    //define the aspect ratio
    window.innerWidth / window.innerHeight,
    //define near focal plane
    0.1,
    //define far focal plane
    1000,
);
//define rendering
//const renderer = new THREE.WebGLRenderer();
//change render style
renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth, window.innerHeight);

//pass the rendered scene to html
document.body.appendChild(renderer.domElement);


// define object to render
const geometry = new THREE.BoxGeometry(2,2,2);
//const material = new THREE.MeshBasicMaterial({color: 0x0000ff});
// add an image(texture) to the object--first load the image
const texture = new THREE.TextureLoader().load('textures/crate.gif')
// assign the image to the cube
const material = new THREE.MeshBasicMaterial({ map: texture});
cube = new THREE.Mesh(geometry,material);
// add object to scene
scene.add(cube);
camera.position.z = 5// place camera at a location different than the object location
}


function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.11;
    renderer.render(scene,camera);
}

// make responsive to window resizing
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

//call the window resize function with an event listener
window.addEventListener('resize', onWindowResize, false);

//refactor call the init function to display scene
init();
//call the animate function to display object
animate();

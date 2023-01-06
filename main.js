const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    75,
    //define the aspect ratio
    window.innerWidth / window.innerHeight
    //define near focal plane
    0.1
    //define far focal plane
    1000
);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

//pass the rendered scene to html
document.body.appendChild(renderer.domElement);


// define object to render
const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color: pink});
const cube = new THREE.(geometry,material);
// add object to scene
scene.add(cube);
camera.position.z = 5// place camera at a location different than the object location
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene,camera);
}
//call the animate function
animate();
import * as THREE from "three";

// Canvas
const canvas = document.querySelector('canvas.webgl');


// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'red'})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh)

// Position
// mesh.position.x = 0.7
// mesh.position.y = -0.6
// mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)

// Scale
//mesh.scale.x = 2
//mesh.scale.y = 0.5
//mesh.scale.z = 0.5
mesh.scale.set(2, 0.5, 0.5)

// Rotation
mesh.rotation.y = 0.5

// Axes Helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
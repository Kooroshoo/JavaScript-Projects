
var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 3;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#222");                           
renderer.setSize(window.innerWidth,window.innerHeight);

// create the canvas with our settings
document.body.appendChild(renderer.domElement);              

// make it responsive
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})

// create cube
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshLambertMaterial({color: 0xFF0000});
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// add light
var light = new THREE.PointLight(0xFFFFFF, 1, 1000)
light.position.set(10,0,25);
scene.add(light);


// fix render function aspect ratio (runs 60 fps)
var render = function(){
    // mesh.rotation.y += 0.01;   
    renderer.render(scene,camera);
    requestAnimationFrame(render);
}



// for easy animations we use the timeline plugin
tl = new TimelineMax({paused: true});
tl.to(this.mesh.rotation, 1, {y: Math.PI*0.5, ease: Expo.easeOut}, )

document.body.addEventListener("click", function () {

    if (tl.paused() === true) {
        tl.play();

        setTimeout(function() {
            tl.restart();
            tl.pause();
            
          }, 1000);
    }
});


render();


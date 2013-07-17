/*
  Three.js "tutorials by example"
  Author: Lee Stemkoski
  Date: May 2013 (three.js v56)
 */

// MAIN

// standard global variables
var container, scene, camera, renderer, controls, earth, particles = {};
var cameraSet = false;
Meteor.startup(function() {
  init();
  animate();
});

// FUNCTIONS
function init()
{
  // SCENE
  scene = new THREE.Scene();

  // CAMERA
  var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
  var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
  var dpr = window.devicePixelRatio || 1;

  camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
  scene.add(camera);

  /*Deps.autorun(function() {
    if (!cameraSet && Meteor.user() && Meteor.user().position) {
      var pos = Meteor.user().position;
      camera.position.set(pos.x, pos.y, pos.z);
      cameraSet = true;
    }
  })*/

  camera.position.set(0,120,250);
  camera.lookAt(scene.position);

  // RENDERER
  if ( Detector.webgl )
    renderer = new THREE.WebGLRenderer( {antialias:true} );
  else
    renderer = new THREE.CanvasRenderer();
  renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
  container = document.createElement( 'div' );
  document.body.appendChild( container );
  container.appendChild( renderer.domElement );

  // EVENTS
  THREEx.WindowResize(renderer, camera);
  THREEx.FullScreen.bindKey({ charCode : 'm'.charCodeAt(0) });

  // CONTROLS
  controls = new THREE.TrackballControls( camera, renderer.domElement );
  //controls.noZoom = true;
  controls.maxDistance = Math.sqrt(120 * 120 + 250 * 250);
  controls.minDistance = 100;

  // LIGHT
  var light = new THREE.DirectionalLight(0xffffff);
  light.position.set(200,200,200);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x222222);
  scene.add(ambientLight);

  var imagePrefix = "/nebula-";
  var directions  = ["xpos", "xneg", "ypos", "yneg", "zpos", "zneg"];
  var imageSuffix = ".jpg";
  var skyGeometry = new THREE.CubeGeometry( 10000, 10000, 10000 );

  var imageURLs = [];
  for (var i = 0; i < 6; i++)
    imageURLs.push( imagePrefix + directions[i] + imageSuffix );
  var textureCube = THREE.ImageUtils.loadTextureCube( imageURLs );
  var shader = THREE.ShaderLib[ "cube" ];
  shader.uniforms[ "tCube" ].value = textureCube;
  var skyMaterial = new THREE.ShaderMaterial( {
    fragmentShader: shader.fragmentShader,
    vertexShader: shader.vertexShader,
    uniforms: shader.uniforms,
    depthWrite: false,
    side: THREE.BackSide
  } );
  var skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
  scene.add( skyBox );

  var sphereGeo = new THREE.SphereGeometry(100, 50, 50);
  var earthTexture = THREE.ImageUtils.loadTexture('/earth-4096.jpg');
  earthTexture.anisotropy = renderer.getMaxAnisotropy();
  var normalEarthTexture = THREE.ImageUtils.loadTexture("/earth-4096-normal.jpeg");
  var earthMaterial = new THREE.MeshPhongMaterial({
    map: earthTexture,
    normalMap: normalEarthTexture,
    ambient: 10405375,
    emissive: 2702145,
    specular: 5141677,
    shininess: 42
  });
  earth = new THREE.Mesh(sphereGeo, earthMaterial);
  earth.rotation.x = 0.4;
  earth.rotation.y = -1.5;
  scene.add(earth);

  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);

  var lineMaterial = new THREE.LineBasicMaterial({
    color: "#ffffff",
    linewidth: 3
  });

  /*Deps.autorun(function() {

    var users = Meteor.users.find().fetch();
    for (var i = 0; i < users.length; i++) {
      var user = users[i];
      if (!user.position) continue;

      var particleSystem = particles[user._id];

      if (!particleSystem) {
        var map = THREE.ImageUtils.loadTexture('/particle.png');
        map.needsUpdate = true;
        var particleMaterial = new THREE.ParticleBasicMaterial({
          map: map,
          transparent: true,
          size: 42
        });
        var particleGeometry = new THREE.Geometry();
        particleGeometry.vertices.push(new THREE.Vector3(user.position.x * 5, user.position.y * 5, user.position.z * 5));

        var particleSystem = new THREE.ParticleSystem(particleGeometry, particleMaterial);
        scene.add(particleSystem);
        particles[user._id] = particleSystem;
      }
      else {
        particleSystem.geometry.vertices[0].set(user.position.x * 5, user.position.y * 5, user.position.z * 5);
        particleSystem.geometry.verticesNeedUpdate = true;
        particleSystem.geometry.computeBoundingSphere();
      }
    }

    var currUser = Meteor.user();
    if (currUser && currUser.position && camera.position.x == 0 && camera.position.y == 150 && camera.position.z == 400) {
      camera.position.set(currUser.position.x, currUser.position.y, currUser.position.z);
      camera.lookAt(scene.position);
    }

  });

  window.particles = particles;*/

}

function animate()
{
  requestAnimationFrame( animate );
  render();
  update();
}

function update()
{
  earth.rotation.y += 0.005;
  earth.rotation.x -= 0.00004;
  controls.update();
}

function render()
{
  renderer.render(scene, camera);
}

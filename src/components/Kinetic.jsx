import React, { useEffect } from "react";
import * as THREE from "three";
import SceneInit from "../lib/SceneInit";
import img from "../assets/name.png";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


function Kinetic() {

  useEffect(() => {
    const kinetic = new SceneInit("text");
    kinetic.initialize();
    kinetic.animate();
    kinetic.camera = new THREE.PerspectiveCamera(
      76,
      window.innerWidth/ window.innerHeight,
      1,
      1000
    );
    kinetic.camera.position.z = 25;

    kinetic.controls = new OrbitControls(kinetic.camera, kinetic.renderer.domElement);
    kinetic.controls.enableZoom = false;

    kinetic.renderer.setSize(1200, 700);

    window.addEventListener("resize", () => onWindowResize(), false);
    
    function onWindowResize() {
      kinetic.camera.aspect = 300 / 150;
      kinetic.camera.updateProjectionMatrix();
      kinetic.renderer.setSize(window.innerWidth, window.innerHeight/2.2);
    }

    const light = new THREE.AmbientLight(0xffffff);
    kinetic.scene.add(light);

    const Torusgeometry = new THREE.TorusGeometry(12, 3);

    const texture = new THREE.TextureLoader().load(img, (texture) => {
      texture.minFilter = THREE.NearestFilter;
    });

    const vertex = `
    varying vec2 vUv;
    uniform float uTime;
    
    void main() {
      vUv = uv;
    
      float time = uTime * 1.0;
    
      vec3 transformed = position;
      transformed.z += sin(position.y + time);
    
      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
    }
  `;

    const fragment = `
    varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  uv.x += sin(uv.y * 0.002);
  vec2 repeat = vec2(6.0, 12.0);
  uv = fract(uv * repeat + vec2(0.0, time));
  
  vec4 color = texture2D(uTexture, uv);
  
  gl_FragColor = color;
}
  `;

    const Torusmaterial = new THREE.ShaderMaterial({
      vertexShader: vertex,
      fragmentShader: fragment,
      uniforms: {
        uTime: { value: 5 },
        uTexture: { value: texture },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });

    const torus = new THREE.Mesh(Torusgeometry, Torusmaterial);
    torus.rotation.x = 150;
    torus.rotation.y -= 128;
    kinetic.scene.add(torus);

    function animate(time){
      time *= 0.001;
      requestAnimationFrame(animate);
      torus.rotation.z += 0.009;
      kinetic.renderer.render(kinetic.scene, kinetic.camera);
      Torusmaterial.uniforms.uTime.value = clock.getElapsedTime();
      
    };

    let clock;
    clock = new THREE.Clock();

    requestAnimationFrame(animate);
  }, []);

  return (
    <>
      <canvas id="text" ></canvas>
    </>
  );
}

export default Kinetic;

import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SceneInit from "../lib/SceneInit";
import css from "../assets/tech/css.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import reactjs from "../assets/tech/reactjs.png";
import threejs from "../assets/tech/threejs.png";

function Ball(props) {
  useEffect(() => {
    const ball = new SceneInit("ball");
    ball.initialize();
    ball.animate();
    ball.camera = new THREE.PerspectiveCamera(
      40,
      1000 / 100,
      1,
      1000
    );
    ball.camera.position.z = 5;
   //ball.controls = new OrbitControls(ball.camera, ball.renderer.domElement);
    //ball.controls.enableZoom = false;
    ball.renderer.setSize(window.innerWidth, window.innerHeight/4);
  
    window.addEventListener("resize", () => onWindowResize(), false);
    
    function onWindowResize() {
      ball.camera.aspect = 300 / 100;
      ball.camera.position.z = 6.5;
      ball.camera.updateProjectionMatrix();
      ball.renderer.setSize(window.innerWidth, window.innerHeight/3);
    }
  
  
    const light = new THREE.AmbientLight(0xffffff);  
    ball.scene.add(light);


    const geometry1 = new THREE.BoxGeometry();
    const shapeTexture1 = new THREE.TextureLoader().load(html);
    const material1 = new THREE.MeshBasicMaterial({ map: shapeTexture1 });
    const shape1 = new THREE.Mesh(geometry1, material1);
    shape1.position.x = -5

    const geometry2 = new THREE.BoxGeometry();
    const shapeTexture2 = new THREE.TextureLoader().load(css);
    const material2 = new THREE.MeshBasicMaterial({ map: shapeTexture2 });
    const shape2 = new THREE.Mesh(geometry2, material2);
    shape2.position.x = -2.5

    const geometry3 = new THREE.BoxGeometry();
    const shapeTexture3 = new THREE.TextureLoader().load(javascript);
    const material3 = new THREE.MeshBasicMaterial({ map: shapeTexture3 });
    const shape3 = new THREE.Mesh(geometry3, material3);
    shape3.position.x = 0

    const geometry4 = new THREE.BoxGeometry();
    const shapeTexture4 = new THREE.TextureLoader().load(reactjs);
    const material4 = new THREE.MeshBasicMaterial({ map: shapeTexture4 });
    const shape4 = new THREE.Mesh(geometry4, material4);
    shape4.position.x = 2.5

    const geometry5 = new THREE.BoxGeometry();
    const shapeTexture5 = new THREE.TextureLoader().load(threejs);
    const material5 = new THREE.MeshBasicMaterial({ map: shapeTexture5 });
    const shape5 = new THREE.Mesh(geometry5, material5);
    shape5.position.x = 5

    const group = new THREE.Group();
    group.add( shape1 );
    group.add( shape2 );
    group.add( shape3 );
    group.add( shape4 );
    group.add( shape5 );
    ball.scene.add(group)


    const animate = () => {
      requestAnimationFrame(animate);
      shape1.rotation.y += 0.01;
      group.position.x= Math.tan(Date.now()*0.001)/-1.5
      shape2.rotation.y += 0.01;
      shape3.rotation.y += 0.01;
      shape4.rotation.y += 0.01;
      shape5.rotation.y += 0.01;
      render()
    };
    function render() {
      ball.renderer.render(ball.scene, ball.camera);
    }

    animate()

  }, []);

  return (
    <div>
      <canvas id="ball" ></canvas>
    </div>
  );
}

export default Ball;

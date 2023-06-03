import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf");

  return <primitive object={scene} scale={2.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />;
};

const EarthCanvas = () => {
  return (
      <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
    }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
      />
      <React.Suspense fallback={null}>
        <Earth />
      </React.Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
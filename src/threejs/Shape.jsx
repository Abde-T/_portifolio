import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas} from "@react-three/fiber";
import * as THREE from 'three'
import { Decal, Float, OrbitControls} from "@react-three/drei";

const Shape = ({ texture }) => {
  return (
    <Float speed={10.75} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={texture} flatShading />
      </mesh>
    </Float>
  );
};

const ShapeCanvas = ({ icon }) => {
  const [texture, setTexture] = useState(null);
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const loadedTexture = textureLoader.load(icon);
    setTexture(loadedTexture);
    return () => {
      loadedTexture.dispose();
    };
  }, [icon]);

  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} />
        {texture && <Shape texture={texture} />}
      </Suspense>
    </Canvas>
  );
};

export default ShapeCanvas;
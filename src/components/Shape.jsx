import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";



const Shape = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.y += 0.01));
  return (
    <Float speed={10.75} rotationIntensity={1} floatIntensity={2}  >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} {...props} ref={ref}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          />
          <Decal
          position={[0, 0, -1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
          />
     
      </mesh>
    </Float>

  );
};

const ShapeCanvas = ({ icon }) => {
  
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      
        <OrbitControls enableZoom={false} />
        <Shape imgUrl={icon} />
      <Preload all />
    </Canvas>
  );
};

export default ShapeCanvas;
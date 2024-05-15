import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const ComputerCanvas = () => {
  const computer = useGLTF("./pc_3d/scene.gltf");
  useEffect(() => {});
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor={"black"} />
      <primitive object={computer.scene} position={[2, 4.5, -1.5]} />
    </mesh>
  );
};
const ComputerModel = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [36, 30, -2.5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        ></OrbitControls>
        <ComputerCanvas />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerModel;

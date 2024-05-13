import React from "react";
import { useProgress, Html } from "@react-three/drei";
const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-loader">
        <p className="text-white text-lg">{progress.toFixed(2)}% </p>
      </span>
    </Html>
  );
};

export default CanvasLoader;

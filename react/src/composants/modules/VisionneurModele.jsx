import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Modele3D from "./Modele3D";

const VisionneurModele = ({ cheminModele, scale, position }) => {
  return (
    <Canvas style={{width: 1000, height: 1000}}>
      <ambientLight intensity={100000000000} />
      <spotLight position={[0, 0, 1]} rotation={[0, 0, 0]} intensity={1} power={1000000} />
      {/* <pointLight position={[0, 0, 0]} intensity={10000} power={1000} /> */}
      <Suspense fallback={null}>
        <Modele3D modelPath={cheminModele} scale={scale} position={position} />
      </Suspense>
    </Canvas>
  );
};

export default VisionneurModele;
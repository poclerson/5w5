import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Modele3D from "./Modele3D";

const VisionneurModele = ({ cheminModele, echelle, position, rotation, tourne = false }) => {
    return (
        <Canvas style={{width: '100%', height: '100%', overflow: 'visible'}}>
            <ambientLight intensity={0} />
            <pointLight intensity={.5} position={[10, 50, 100]} />
            <Suspense fallback={null}>
                <Modele3D 
                    chemin={cheminModele} 
                    echelle={echelle} 
                    position={position} 
                    rotation={rotation}
                    tourne={tourne}
                />
            </Suspense>
        </Canvas>
    );
};

export default VisionneurModele;
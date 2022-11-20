import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Modele3D from "./Modele3D";

const VisionneurModele = ({ cheminModele, echelle, position, rotation }) => {
    return (
        <Canvas style={{width: '100%', height: '100%', overflow: 'visible'}}>
            <ambientLight intensity={1} />
            <pointLight intensity={1.5} position={[0, 0, 30]} />
            <Suspense fallback={null}>
                <Modele3D 
                    chemin={cheminModele} 
                    echelle={echelle} 
                    position={position} 
                    rotation={rotation}
                />
            </Suspense>
        </Canvas>
    );
};

export default VisionneurModele;
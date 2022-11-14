import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Modele3D from "./Modele3D";

const VisionneurModele = ({ cheminModele, echelle, position, rotation }) => {
    return (
        <Canvas concurrent style={{width: '100%', height: '100%', overflow: 'visible'}}>
            <ambientLight intensity={.05} />
            <spotLight position={[1, 10, 1]} rotation={[0, 0, 0]} intensity={3} power={2} />
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
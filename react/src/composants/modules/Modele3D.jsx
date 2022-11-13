import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modele3D = ({ 
    chemin, 
    echelle = 1, 
    position = [0, 0, 0],
    rotation = [0, 0, 0]
}) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, chemin);
    const [estHover, hover] = useState(false);

    useEffect(() => {

    }, [estHover])

    // useFrame(() => {
    //     ref.current.rotation.y += 0.02;
    // })
    return (
        <primitive
            ref={ref}
            object={gltf.scene}
            position={position}
            rotation={rotation}
            scale={echelle}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
        />
    );
};

export default Modele3D;

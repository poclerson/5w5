import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Modele3D = ({ modelPath, scale = 40, position = [0, 0, -900] }) => {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, modelPath);
    const [hovered, hover] = useState(false);

    useEffect(() => {
          ref.current.rotation.y = -1.5;
    }, [])
    return (
        <>
        <primitive
            ref={ref}
            object={gltf.scene}
            position={position}
            scale={scale}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
        />
        </>
    );
};

export default Modele3D;

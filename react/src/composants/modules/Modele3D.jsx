import React, { useRef, useState, useEffect } from "react";
import useScene from '../../hooks/useScene';

const Modele3D = ({ 
    chemin = "", 
    echelle = 1, 
    position = [0, 0, 0],
    rotation = [0, 0, 0]
}) => {
    const ref = useRef();
    const [estHover, hover] = useState(false);
    const scene = useScene(chemin)

    // useFrame(() => {
    //     ref.current.rotation.y += 0.02;
    // })
    return (
        <>
            <primitive
                ref={ref}
                object={scene}
                position={position}
                rotation={rotation}
                scale={echelle}
                onPointerOver={() => hover(true)}
                onPointerOut={() => hover(false)}
            />
        </>
    );
};

export default Modele3D;

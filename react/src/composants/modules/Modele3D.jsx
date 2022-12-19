import React, {useRef, useState, useEffect } from "react";
import useScene from '../../hooks/useScene';
import {useFrame} from '@react-three/fiber';

const Modele3D = ({ 
    chemin = "", 
    echelle = 1, 
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    tourne = false
}) => {
    const ref = useRef();
    const [estHover, hover] = useState(false);
    const scene = useScene(chemin)

    useFrame(() => {
        if (tourne) {
            ref.current.rotation.y += 0.02;
            console.log(ref.current.rotation.y % 8)
        }

        // if (!tourne && ref.current.rotation.y != rotation[1]) {
        //     ref.current.rotation.y = rotation[1] / 10;
        //     console.log("allo")
        // }
    })
    useEffect(() => {
        // ref.current.rotation.y += .02;
    }, [estHover])
    useEffect(() => {
        if (ref.current) {
            // console.log(ref.current)
            // ref.current.translate(1, 0, 0)
            // ref.current.position.set(-1, 0, 0)   
        }
    }, [])
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

import {useMemo} from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const useScene = (chemin) => {
    console.log(chemin)
    const gltf = useLoader(GLTFLoader, chemin);
    const scene = useMemo(() => gltf.scene.clone())

    return scene;
}

export default useScene;
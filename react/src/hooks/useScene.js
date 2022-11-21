import {useMemo} from 'react';
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

/**
 * Crée la scène du modèle GLTF et l'enregistre en tant que variable memoizée
 * @param {string} chemin Chemin vers le modèle 3D
 * @returns {Object} Scene contenant l'objet
 */
export const useScene = (chemin) => {
    const gltf = useLoader(GLTFLoader, chemin);
    const scene = useMemo(() => gltf.scene.clone())

    return scene;
}

export default useScene;
import {useState} from 'react';

/**
 * Gère l'ouverture d'un élément sur la page
 * @param {Boolean} ouvertureInitiale État d'ouverture initiale
 * @returns {Array} Que faire si on clique et l'état d'ouverture
 */
export default function useOuverture(ouvertureInitiale = 'false') {
    const [ouverture, setOuverture] = useState(ouvertureInitiale);

    const surClic = () => {
        console.log(ouverture)
        setOuverture(ouverture == 'true' ? 'false' : 'true');
        console.log(ouverture)
    }

    const verifierOuverture = () => {
        return ouverture;
    }

    return [surClic, verifierOuverture, setOuverture]
}
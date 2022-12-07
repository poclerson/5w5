import {useState} from 'react';

/**
 * Gère l'ouverture d'un élément sur la page
 * @param {Boolean} ouvertureInitiale État d'ouverture initiale
 * @returns {Array} Que faire si on clique et l'état d'ouverture
 */
export default function useOuverture(ouvertureInitiale = 'false') {
    const [ouverture, setOuverture] = useState(ouvertureInitiale);

    const surClic = () => {
        setOuverture(ouverture == 'true' ? 'false' : 'true')
    }

    const verifierOuverture = () => {
        return ouverture;
    }

    return [surClic, verifierOuverture, ouverture, setOuverture]
}
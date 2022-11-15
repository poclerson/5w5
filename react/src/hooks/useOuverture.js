import {useState} from 'react';
import '../composants/modules/BoutonBurger';


/**
 * Gère l'ouverture d'un élément sur la page
 * @param {Boolean} ouvertureInitiale État d'ouverture initiale
 * @returns {Array} Que faire si on clique et l'état d'ouverture
 */
export default function useOuverture(ouvertureInitiale = 'false') {
    const [ouverture, setOuverture] = useState(ouvertureInitiale);


    const surClic = () => {
        setOuverture(ouverture === 'true' ? 'false' : 'true');
        document.getElementById("MenuIcon").classList.add('on');
        document.getElementById("Close").classList.add('off');
    }

    const verifierOuverture = () => {
        return ouverture;
    }

    const fermer = () => {
        setOuverture('false')
        document.getElementById("MenuIcon").classList.add('off');
        document.getElementById("Close").classList.add('on');
    }

    return [surClic, verifierOuverture, fermer]
}
import {useState} from 'react';

/**
 * Gère l'ouverture des différents items sur la page grâce à des callbacks
 * @param {Array | Object} donnees Données relatives à la page. Si plusieurs sont nécessaires, on passe un object
 * @returns {Object} Callbacks nécessaires à la gestion des ouvertures
 */
export default function useOuverture(donnees, ouvertureInitiale = -1) {
    const [indexOuvert, setIndexOuvert] = useState(ouvertureInitiale);

    const verifierOuvertureParent = () => {
        return indexOuvert != -1 ? "true" : "false"
    }

    const surClic = index => {
        setIndexOuvert(index);
    }

    const verifierOuverture = index => {
        return index == indexOuvert ? "true" : "false"
    }

    // Quand on clique sur le bouton suivant (ordinateur seulement)
    const surClicSuivant = () => {
        if (donnees != null) {
            if (Array.isArray(donnees)) {
                if (indexOuvert + 1 == donnees.length) {
                    setIndexOuvert(0);
                    return;
                }
            }

            else {
                // console.log(Object.values(donnees))
            }
        }

        setIndexOuvert(indexOuvert + 1);
    }

    return {
        verifierOuvertureParent: verifierOuvertureParent,
        surClic: surClic,
        verifierOuverture: verifierOuverture,
        surClicSuivant: surClicSuivant,
        indexOuvert: indexOuvert
    }
}
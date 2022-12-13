import {useState} from 'react';

/**
 * Gère l'ouverture des différents items sur la page grâce à des callbacks
 * @param {Array | Object} donnees Données relatives à la page. Si plusieurs sont nécessaires, on passe un object
 * @returns {Object} Callbacks nécessaires à la gestion des ouvertures
 */
export default function useOuverture(donnees, ouvertureInitiale = -1) {
    const [indexOuvert, setIndexOuvert] = useState(ouvertureInitiale);

    const verifierOuvertureParent = (index = indexOuvert) => {
        return index != -1 ? "true" : "false"
    }

    /**
     * Ouvre d'après un index
     * @param {int} index Index de l'article
     * @param {Callback} callback Fonction à effectuer, s'il y en a une
     */
    const surClic = (index, callback) => {
        if (callback != undefined) callback()

        setIndexOuvert(index);
    }

    const verifierOuverture = index => {
        return index == indexOuvert ? "true" : "false"
    }

    // Quand on clique sur le bouton suivant (ordinateur seulement)
    const surClicSuivant = (e, callback) => {
        if (donnees != null) {
            if (Array.isArray(donnees)) {

                // Si on est arrivés à la fin
                if (parseInt(indexOuvert) + 1 == donnees.length) {
                    setIndexOuvert(0);
                    return;
                }
            }
        }

        if (callback != undefined) callback();
        setIndexOuvert(parseInt(indexOuvert) + 1);
    }

    const surClicPrecedent = (e, callback) => {
        if (donnees != null) {
            if (Array.isArray(donnees)) {

                // Si on est arrivés à la fin
                if (parseInt(indexOuvert) + 1 == donnees.length) {
                    setIndexOuvert(0);
                    return;
                }
            }
        }

        if (callback != undefined) callback();
        setIndexOuvert(parseInt(indexOuvert) - 1);
    }

    return {
        verifierOuvertureParent: verifierOuvertureParent,
        surClic: surClic,
        verifierOuverture: verifierOuverture,
        surClicSuivant: surClicSuivant,
        surClicPrecedent: surClicPrecedent,
        indexOuvert: indexOuvert
    }
}
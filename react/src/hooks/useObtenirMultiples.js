import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer plusieurs articles WP dans un objet
 * @param {Array} chemins Liste des URLs dont on veut obtenir les données WP
 * @param {string} fournisseur Option du différent type de données à traiter
 * @returns {Object} Liste d'objets d'articles WP nommés par leur chemin de fetch
 */
export default function useObtenirMultiples(chemins = [], fournisseur = 'bre' || 'wp' || 'hcms') {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        async function obtenirArticles() {

            // Obtenir toutes les données spécifiées par les chemins
            Promise.all(chemins.map(async chemin => 
                fetch(wp.traiterRequete(chemin, fournisseur))
            )).then(
                // Transformer chaque élément de la promesse en json
                reponses => Promise.all(reponses.map(reponse => reponse.json()))
            ).then(
                /*
                    Attribuer une clé d'après les chemins à chaque item de la promesse
                    afin de permettre la destructuration
                */
                reponse => setArticles(reponse.reduce(
                    (precedent, courant, index) => (
                        {...precedent, [chemins[index].split('/').pop()]: courant}
                    ), {}
                ))
            )
        }
    
        obtenirArticles();
    }, []);
    return articles;
}
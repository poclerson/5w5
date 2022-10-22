import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer plusieurs articles WP
 * @param {array} chemins Liste des URLs dont on veut obtenir les données WP
 * @returns {array} Liste d'objets d'articles WP
 */
export default function useObtenirMultiplesTypes(chemins = [], fournisseur = 'bre' || 'wp' || 'hcms') {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            chemins.map(async (chemin) => {
                const reponse = await fetch(wp.traiterRequete(chemin, fournisseur));

                if(!reponse.ok)
                    return;

                setArticles(await reponse.json())
            })
        }
    
        obtenirArticles();
    }, []);

    return articles;
}
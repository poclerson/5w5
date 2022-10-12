import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer plusieurs articles WP
 * @param {array} chemins Liste des URLs dont on veut obtenir les données WP
 * @returns {array} Liste d'objets d'articles WP
 */
export default function useObtenirMultiplesTypes(chemins) {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            chemins.map(async (chemin) => {
                const reponse = await fetch(`${wp.url}/wp-json/better-rest-endpoints/v1${chemin}${wp.parametresRequete}`);

                if(!reponse.ok)
                    return;

                setArticles(await reponse.json())
            })
        }
    
        obtenirArticles();
    }, []);

    return articles;
}
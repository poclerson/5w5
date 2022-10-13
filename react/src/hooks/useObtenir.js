import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer les données de WP
 * @param {string} url URL des données à obtenir
 * @returns Articles demandées par l'URL
 */
export default function useObtenir(chemin) {
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(`${wp.url}/wp-json/better-rest-endpoints/v1${chemin}${wp.parametresRequete}`);

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            setDonnees(reponseJSON);
        }
    
        obtenirArticles();
    }, []);

    return donnees;
}
import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer les données de WP
 * @param {string} chemin URL des données à obtenir
 * @param {string} fournisseur Option du différent type de donnée à traiter
 * @returns Articles demandées par l'URL
 */
export default function useObtenir(chemin = '', fournisseur = 'bre' || 'wp' || 'hcms', parametres) {
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(wp.traiterRequete(chemin, fournisseur, parametres));

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            setDonnees(reponseJSON);
        }
    
        obtenirArticles();
    }, []);

    return donnees;
}
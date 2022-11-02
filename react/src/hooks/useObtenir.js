import {useEffect, useState} from 'react';
import * as wp from '../wp-rest-api';

/**
 * Hook permettant de récupérer les données de WP
 * @param {string} chemin URL des données à obtenir
 * @param {string} fournisseur Option du différent type de donnée à traiter
 * @param {string} parametres Utile pour la recherche de données. Permet d'ajouter des paramètres de filtrage à la fin de la requête
 * @returns Articles demandés par l'URL
 */
export default function useObtenir(chemin = '', fournisseur = 'wp' || 'bre' || 'hcms', parametres) {
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
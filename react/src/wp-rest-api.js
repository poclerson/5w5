import {useEffect, useState} from 'react';

export const url = 'http://localhost:8888/5w5/wordpress';
export const parametresRequete = '?acf=true&media=true'
/**
 * Hook permettant de récupérer les données de WP
 * @param {string} url URL des données à obtenir
 * @returns Articles demandées par l'URL
 */
export function useObtenir(chemin) {
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(`${url}/wp-json/better-rest-endpoints/v1${chemin}${parametresRequete}`);

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            setDonnees(reponseJSON);
        }
    
        obtenirArticles();
    }, [url]);

    return donnees;
}

/**
 * Hook permettant de récupérer plusieurs articles WP
 * @param {array} chemins Liste des URLs dont on veut obtenir les données WP
 * @returns {array} Liste d'objets d'articles WP
 */
export function useObtenirMultipleTypes(chemins) {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            chemins.map(async (chemin) => {
                const reponse = await fetch(`${url}/wp-json/better-rest-endpoints/v1${chemin}${parametresRequete}`);

                if(!reponse.ok)
                    return;

                setArticles(await reponse.json())
            })
        }
    
        obtenirArticles();
    }, []);

    return articles;
}
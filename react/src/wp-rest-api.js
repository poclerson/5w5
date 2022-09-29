import {useEffect, useState} from 'react';

export const url = 'https://timm175.sg-host.com/wordpress/wp-json/wp/v2';

/**     
 * Filtre toutes les images de WP pour trouver celle ayant l'ID demandé
 * @param {string} id ID de l'image dans WP
 * @param {array} media Liste des médias dans WP
 * @returns Lien de l'image dans WP
 */
export function trouverImage(id, media) {
    return media.filter(medium =>
        medium.id == id)[0].guid.rendered
}

/**
 * Hook permettant de récupérer les données de WP
 * @param {string} url URL des données à obtenir
 * @returns Articles demandées par l'URL
 */
export function useObtenir(chemin) {
    const [donnees, setDonnees] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(url + '' + chemin);

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
 * @param {array} urls Liste des URLs dont on veut obtenir les données WP
 * @returns {array} Liste d'objets d'articles WP
 */
export function useObtenirMultipleTypes(chemins) {
    const [articles, setArticles] = useState(null);
    useEffect(() => {
        async function obtenirArticles() {
            chemins.map(async (chemin) => {
                const reponse = await fetch(url + '' + chemin);

                if(!reponse.ok)
                    return;

                setArticles(await reponse.json())
            })
        }
    
        obtenirArticles();
    }, []);

    return articles;
}
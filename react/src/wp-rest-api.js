export const url = 'https://timm175.sg-host.com';

export const cheminsFournisseurs = {
    bre: "/wp-json/better-rest-endpoints/v1%%cheminFinal%%?per_page=100&acf=true&media=true",
    hcms: "/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer",
    wp: "/wp-json/wp/v2%%cheminFinal%%?per_page=100"
};

/**
 * Prend des paramètres et retourne 
 * @param {string} chemin Chemin WP ou route React à charger
 * @param {string} fournisseur Fournisseur de REST à utiliser (wp, hcms ou bre)
 * @param {string} parametres Paramètres de la requête
 * @returns {string} URL modifiée selon les paramètres de la fonction
 */
export const traiterRequete = (chemin, fournisseur, parametres) => {
    if (parametres == undefined)
        return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin);

    else
        return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin) + parametres;
}

/**
 * Trouve un article WP selon son identifiant et retourne son type
 * @param {string} id Identifiant de l'article WP
 * @param {Array} articlesRecherches Liste des articles WP
 * @returns {Object} Objet contenant le type de l'article WP ainsi que lui-même
 */
export function obtenirTypeArticle(id, articlesRecherches) {
    const article = articlesRecherches.map(article => {
        if (article.id == id) {
            return {
                // Exception pour les projets
                type: article.permalink.replace('projets', 'galerie-etudiante')
                    // Retirer tout de l'URL afin de n'obtenir que le type d'article
                    // Fuck regex
                    .replace('https://timm175.sg-host.com/', '')
                    .replace('?', '')
                    .split('=')[0]
                    .split('/')[0], 
                ['articleWP']: article
            }
        }
        // Empêcher de générer des erreurs aux articles qui ne passent pas le test
    }).filter(article => article != undefined)[0]

    return article
}


/**
 * Convertit en texte plus beau
 * @param {string} domaine Domaine d'étude
 * @returns {string} Domaine d'étude mais moins laid
 */
export const versVraisDomaines = domaine => {
    const vraisDomaines = {
        modelisation3d: 'Modélisation 3D',
        jeu: 'Jeu',
        web: 'Web',
        design: 'Design',
        video: 'Vidéo',
        methodologie: 'Méthodologie'
    }

    return vraisDomaines[domaine] ? vraisDomaines[domaine] : domaine;
}
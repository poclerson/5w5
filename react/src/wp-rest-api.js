// Pour siteground
// export const url = 'https://timm175.sg-host.com';
export const url = 'http://localhost:8888/5w5/wordpress';

export const cheminsFournisseurs = {
    bre: "/wp-json/better-rest-endpoints/v1%%cheminFinal%%?acf=true&media=true",
    hcms: "/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer",
    wp: "/wp-json/wp/v2%%cheminFinal%%"
};

export const traiterRequete = (chemin, fournisseur) => {
    return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin);
}
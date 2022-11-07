export const url = 'https://timm175.sg-host.com';

export const cheminsFournisseurs = {
    bre: "/wp-json/better-rest-endpoints/v1%%cheminFinal%%?per_page=100&acf=true&media=true",
    hcms: "/wp-json/rae/v1/header-footer?header_location_id=hcms-menu-header&footer_location_id=hcms-menu-footer",
    wp: "/wp-json/wp/v2%%cheminFinal%%?per_page=100"
};

export const traiterRequete = (chemin, fournisseur, parametres) => {
    if (parametres == undefined)
        return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin);

    else
        return url + cheminsFournisseurs[fournisseur].replace("%%cheminFinal%%", chemin) + parametres;
}
/**
 * Met la première lettre d'une chaine de caractère en majuscule
 * @param {string} string Chaine de caractère à capitaliser la première lettre de
 * @returns {string} Chaine de caractère capitalisée à la première lettre
 */
export function capitaliserPremiereLettre(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * Filtre chaque item afin de l'exclure s'il fait partie de la liste des exclusions
 * @param {array} itemsAFiltrer Liste d'items dont on veut retirer quelque chose
 * @param {array} exclusions Liste des choses à retirer
 * @returns {array} Liste des items filtrés
 */
export function exclureSiContient(itemsAFiltrer, exclusions) {
    return itemsAFiltrer.map(item =>
        exclusions.filter(exclusion =>
            item.includes(exclusion) 
        )
    )
}

/**
 * Insère une chaine de caractère dans une autre d'après un index
 * @param {string} string Chaine de caractère où on veut insérer quelque chose
 * @param {int} index Index dans la chaine de caractère où on veut insérer quelque chose
 * @param {string} valeur Chaine de caractère à insérer
 * @returns {string} Chaine de caractère où on a inséré une valeur
 */
export function inserer(string, index, valeur) {
    return string.substr(0, index) + valeur+ string.substr(index);
}

/**
 * "Clamp" un chiffre entre deux valeurs, l'empessant de les dépasser
 * @param {int} chiffre Valeur à "clamper"
 * @param {int} min Valeur minimale
 * @param {int} max Valeur minimale
 */
export const clamp = (chiffre, min, max) => Math.min(Math.max(chiffre, min), max);

Array.prototype.shuffle = function() {
    for (var i = 0; i < this.length; i++)
        this.push(this.splice(Math.random() * (this.length - i), 1)[0]);
    return this;
}
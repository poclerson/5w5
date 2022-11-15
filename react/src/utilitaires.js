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

/**
 * Réorganise pseudo-aléatoirement les éléments d'un tableau
 * @returns {Array}
 */
Array.prototype.pseudoMelanger = function() {
    for (var i = 0; i < this.length; i++)
        this.push(this.splice(prng(i) * (this.length - i), 1)[0]);
    return this;
}

/**
 * Retire des mots d'un string
 * @param {int} nombreMotsAGarder nombre de mots à garder dans le string
 * @param {bool} commencerFin si on doit commencer à tronquer à partir de la fin ou du début
 * @returns {string} 
 */
String.prototype.tronquerMots = function(nombreMotsAGarder, commencerFin = false) {
    if (commencerFin)
        return this.split(' ').slice(-nombreMotsAGarder).join(' ');
    return this.split(' ').slice(0, nombreMotsAGarder).join(' ');
}

/**
 * Prend un string en kebab case et le transforme en camel case
 * @returns {string} String transformé en camel case
 */
String.prototype.kebabVersCamel = function() {
    if (this == undefined) return;
    return this.replace(/-./g, x=>x[1].toUpperCase())
}

export function prng(seed) {
    let x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
}

// Object.prototype.trier = function() {
//     return Object.keys(this).sort().reverse().reduce(
//         (objet, cle) => {
//             objet[cle] = this[cle];
//             return objet
//         }, {}
//     )
// }

export function cleSelonValeur(objet, valeur) {
    return Object.keys(objet).find(cle => objet[cle] === valeur);
}
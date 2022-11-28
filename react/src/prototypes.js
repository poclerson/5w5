import * as u from './utilitaires';

/**
 * Restreint un chiffre dans une intervalle
 * @param {Number} min Valeur minimale
 * @param {Number} max Valeur maximale
 * @returns {Number} Valeur contenue dans l'intervalle
 */
Number.prototype.intervalle = function(min, max) {
    return Math.min(Math.max(this, min), max);
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
 * Prend un string en kebab-case et le transforme en camelCase
 * @returns {string} String transformé en camelCase
 */
String.prototype.kebabVersCamel = function() {
    if (this == undefined) return;
    return this.replace(/-./g, x=>x[1].toUpperCase())
}

/**
 * Insère une chaine de caractère dans une autre d'après un index
 * @param {string} valeur Chaine de caractère à insérer
 * @param {int} index Index dans la chaine de caractère où on veut insérer quelque chose
 * @returns {string} Chaine de caractère où on a inséré une valeur
 */
String.prototype.inserer = function(valeur, index) {
    return this.substr(0, index) + valeur+ this.substr(index);
}

/**
 * Retourne l'élément le plus à gauche par rapport à la fenêtre à partir d'un tableau
 * @param {int} decalage 
 * @returns {Element} Élément le plus à gauche
 */
Array.prototype.obtenirElementPlusAGauche = function(decalage = 0) {
    return this.reduce((precedent, present) => {
        // Comparer la position en x de l'élément présent et du précédent
        return precedent.getBoundingClientRect().x < present.getBoundingClientRect().x && 

            // L'élément précédent doit aussi être plus grand que le décalage pour passer le test
            precedent.getBoundingClientRect().x > decalage ? 

            // Choisir d'après la condition
            precedent : present
    })
}

/**
 * Réorganise pseudo-aléatoirement les éléments d'un tableau
 * @returns {Array}
 */
Array.prototype.pseudoMelanger = function() {
    for (var i = 0; i < this.length; i++)
        this.push(this.splice(u.prng(i) * (this.length - i), 1)[0]);
    return this;
}

/**
 * Retourne l'élément le plus à gauche par rapport à la fenêtre à partir d'une collection d'éléments
 * @param {int} decalage 
 * @returns {Element} Élément le plus à gauche
 */
HTMLCollection.prototype.obtenirPlusAGauche = function(decalage = 0) {
    return Array.some(this).reduce((precedent, present) => {
        // Comparer la position en x de l'élément présent et du précédent
        return precedent.getBoundingClientRect().x < present.getBoundingClientRect().x && 

        // L'élément précédent doit aussi être plus grand que le décalage pour passer le test
        precedent.getBoundingClientRect().x > decalage ? 

        // Choisir d'après la condition
        precedent : present
    })
}
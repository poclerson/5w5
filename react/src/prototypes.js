import * as u from './utilitaires';

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

/**
 * Retourne l'élément le plus à gauche par rapport à la fenêtre à partir d'un tableau
 * @param {int} decalage 
 * @returns {Element} Élément le plus à gauche
 */
Array.prototype.obtenirElementPlusAGauche = function(decalage) {
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
 * Retourne l'élément le plus à gauche par rapport à la fenêtre à partir d'une collection d'éléments
 * @param {int} decalage 
 * @returns {Element} Élément le plus à gauche
 */
HTMLCollection.prototype.obtenirPlusAGauche = function(decalage) {
    return Array.some(this).reduce((precedent, present) => {
        // Comparer la position en x de l'élément présent et du précédent
        return precedent.getBoundingClientRect().x < present.getBoundingClientRect().x && 

            // L'élément précédent doit aussi être plus grand que le décalage pour passer le test
            precedent.getBoundingClientRect().x > decalage ? 

            // Choisir d'après la condition
            precedent : present
    })
}
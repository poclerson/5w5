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

/**
 * Défile selon un ratio de refListe
 * @param {Object} refListe Référence de la liste contenant tous les items défilables
 * @param {string} direction Direction du défilemen t
 * @param {Number} ratioDefilement Ratio entre la largeur de refListe et le défilement voulu
 */
export function defiler(refListe, direction = 'precedent' || 'suivant', ratioDefilement) {
    const element = refListe.current;
    // Si on est arrivés à la fin, retourner au début
    if (element.scrollLeft + window.innerWidth >= element.scrollWidth) {
        element.scrollLeft = 0;
        return;
    }

    if (direction == 'suivant') {
        element.scrollLeft += element.scrollWidth / ratioDefilement;
    }

    if (direction == 'precedent') {
        console.log("prec")
        element.scrollLeft -= element.scrollWidth / ratioDefilement;
    }
}

/**
 * Défile d'un item vers la gauche ou la droite
 * @param {Object} refListe Référence de la liste contenant tous les items défilables
 * @param {string} direction Direction du défilement
 */
export function defilerSelonCases(refListe, direction = 'precedent' || 'suivant') {
    if (direction == 'precedent' || direction == 'suivant') {
        const liste = refListe.current;
        const items = Array.prototype.slice.call(liste.children)
        const item = items.obtenirElementPlusA('gauche');
        const distanceItems = (items[1].offsetLeft - items[0].offsetLeft) / 3;

        if (direction == 'suivant') {
            // Si on est arrivés à la fin, retourner au début
            if (liste.scrollLeft + window.innerWidth >= liste.scrollWidth) {
                liste.scrollLeft = 0;
                return;
            }

            // Ajuster le scroll
            liste.scrollLeft = item.offsetLeft + item.offsetWidth;
        }

        if (direction == 'precedent') {
            if (liste.scrollLeft == 0) {
                liste.scrollLeft = liste.scrollWidth - window.innerWidth;
                return;
            }

            // Ajuste le scroll de la liste d'après l'élément avant le plus à gauche
            liste.scrollLeft = items[items.indexOf(item) - 1].offsetLeft - distanceItems;
        }
    }
}

/**
 * Défile vers un élément dans une liste d'élément
 * @param {Object} refListe Référence de la liste contenant tous les items défilables
 * @param {Object} index Index de l'élément dans refListe.current.children
 * vers lequel on veut défiler
 */
export function defilerVersCase(refListe, index) {
    const liste = refListe.current;
    const distance = liste.children[1].offsetLeft - liste.children[0].offsetLeft;

    liste.scrollLeft = distance * index;
}
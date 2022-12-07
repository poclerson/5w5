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

export function defiler(refListe, ratioDefilement) {
    const element = refListe.current;

    // Si on est arrivés à la fin, retourner au début
    if (element.scrollLeft + window.innerWidth >= element.scrollWidth) {
        element.scrollLeft = 0;
        return;
    }
    
    element.scrollLeft += element.scrollWidth / ratioDefilement;
}

export function defilerSelonCases(refListe) {
    const liste = refListe.current;
    const item = Array.prototype.slice.call(liste.children).obtenirElementPlusAGauche()

    // Si on est arrivés à la fin, retourner au début
    if (liste.scrollLeft + window.innerWidth >= liste.scrollWidth) {
        liste.scrollLeft = 0;
        return;
    }
    
    liste.scrollLeft = item.offsetLeft + item.offsetWidth;
}
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
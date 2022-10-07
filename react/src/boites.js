/**
 * Réinitialise les états d'ouverture d'un tableau pour ouvrir le bon item selon l'index donné
 * @param {int} index Index de l'item à ouvrir
 * @param {array} ouvertures Liste des états d'ouverture
 * @returns La liste des états d'ouverture nouvellement créée
 */
export function ouvrir(index, ouvertures) {
    // On doit créer une copie pour éviter des problèmes avec splice()
    // Réintialiser les ouvertures à chaque ouverture
    let copie = ouvertures.map(() => "ferme");

    // Ramener au début
    if (index + 1 > ouvertures.length) {
        index = 0;
    }

    // Attribuer l'ouverture au bon index
    copie.splice(index, 1, "ouvert")

    return copie;
}
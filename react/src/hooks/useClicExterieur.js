/**
 * Appelle une fonction 
 * @param {Function} condition Vérifie si on peut enregistrer un clic extérieur
 * @param {Function} callback Fonction à exécuter lors d'un clic extérieur
 * @param {Object} refOuvert Référence vers l'élément ouvert duquel on doit cliquer à l'extérieur
 * @param {Array} refsExceptions Références vers toutes les exceptions qui ne devraient pas
 * compter comme étant un clic extérieur
 * @returns {Function} Fonction permettant d'exécuter certaines fonctions lors d'un clic extérieur
 */
export default function useClicExterieur(condition, callback, refOuvert, refsExceptions) {
    return (event) => {
            if (
                // Vérifier que les refs existent
                refOuvert.current && 
                refsExceptions.every(ref => ref.current) &&

                // Vérifier que les refs ne contiennent pas l'élément cliqué
                !refOuvert.current.contains(event.target) &&
                refsExceptions.every(ref => !ref.current.contains(event.target)) &&

                // Vérifier que la condition est bonne
                condition() == 'true'
            ) {
                callback()
            }
        }
    ;
}
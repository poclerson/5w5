import { useState, useEffect, useLayoutEffect } from "react";

/**
 * Appelle une fonction à chaque fois que la fin du défilement d'une section est effectuée
 * @param {Function} ajouterDonnees Fonction à appeler quand on arrive à la fin du défilement 
 * et qu'il faut ajouter du contenu
 * @param {Function} callback
 * @param {Object} ref Référence à l'élément qui effectue le défilement
 * @returns {array} Tableau des états permettant de savoir si le défilement est terminé ou non
 */
const useDefilementInfini = (ref, ajouterDonnees, callback) => {
    const [estArrive, setEstArrive] = useState(false);
    const [donneesAjoutees, setDonneesAjoutees] = useState(false);
    const [nombreIterations, setNombreIterations] = useState(0);

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("scroll", defile);
        }

        return () => {
            if (ref.current)
                ref.current.removeEventListener("scroll", defile)
        }
    }, [ref]);

    // estArrive se fait mettre a true à une certaine distance de défilement
    useEffect(() => {
        if (estArrive) {
            ajouterDonnees()
            setNombreIterations(nombreIterations + 1)
        }
    }, [estArrive])

    useEffect(() => {
        if (ref.current)
            callback();
    }, [donneesAjoutees])

    function defile() {
        console.log(ref.current.children[0].offsetWidth)
        if (estArrive) {
            setEstArrive(false)
            return;
        }
        if (ref.current.scrollWidth - ref.current.scrollLeft <= ref.current.clientWidth + ref.current.children[0].offsetWidth) {
            console.log("estarrivetrue")
            setEstArrive(true);
        }
    }

    return [setEstArrive, setDonneesAjoutees];
};

export default useDefilementInfini;
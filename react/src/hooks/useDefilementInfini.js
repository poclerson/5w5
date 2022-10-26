import { useState, useEffect } from "react";

/**
 * Appelle une fonction à chaque fois que la fin du défilement d'une section est effectuée
 * @param {Function} prolongerDefilement Fonction à appeler quand on arrive à la fin du défilement et qu'il faut ajouter du contenu
 * @param {Object} ref Référence à l'élément qui effectue le défilement
 * @returns {array} Tableau des états permettant de savoir si le défilement est terminé ou non
 */
const useDefilementInfini = (prolongerDefilement, ref) => {
    const [estArrive, setEstArrive] = useState(false);

    useEffect(() => {
        if (ref.current)
            ref.current.addEventListener("scroll", defile);
        return () => {
            if (ref.current)
                ref.current.removeEventListener("scroll", defile)
        }
    }, [ref]);

    useEffect(() => {
        if (estArrive) prolongerDefilement();
    }, [estArrive])

    function defile() {
        if (ref.current.scrollLeft + window.innerWidth / 2 < (ref.current.scrollWidth - ref.current.clientWidth) || estArrive)
            return;
        setEstArrive(true);
    }

    return [estArrive, setEstArrive];
};

export default useDefilementInfini;
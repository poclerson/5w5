import {useEffect} from 'react'

/**
 * Transforme le défilement vertical d'un élément en défilement horizontal sur un autre élément
 * @param {Element} ecouteur Écoute l'évènement de défilement pour récupérer ses informations
 * @param {Element} applicateur Applique le défilement au bon élément
 * @param {Number} multiplicateur Multiplie le défilement
 */
export default function useDefilementHorizontal(ecouteur, applicateur, multiplicateur) {
    useEffect(() => {
        if (ecouteur && applicateur) {
            const gestionMolette = e => {
                if (e.deltaY == 0) return;

                // Empêcher de faire chier
                e.preventDefault();
                e.stopPropagation();

                applicateur.scrollTo({
                    left: applicateur.scrollLeft + (e.deltaY * multiplicateur)
                });
            }

            ecouteur.addEventListener('wheel', gestionMolette);
            return () => ecouteur.removeEventListener('wheel', gestionMolette);
        }
        
    }, [ecouteur, applicateur])
}
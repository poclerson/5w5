import { useState, useEffect } from 'react';

function obtenirDimensionsFenetre() {
  const { innerWidth: largeur, innerHeight: hauteur } = window;
  return {
    largeur,
    hauteur
  };
}

/**
 * Retourne les dimensions de la fenêtre (viewport) dynamiquement
 * @returns {object} Largeur et hauteur de la fenêtre
 */
export default function useDimensionsFenetre() {
    const [dimensionsFenetre, setDimensionsFenetre] = useState(obtenirDimensionsFenetre());

    useEffect(() => {
        function gestionRedimensionnement() {
            setDimensionsFenetre(obtenirDimensionsFenetre());
        }

        window.addEventListener('resize', gestionRedimensionnement);
        return () => window.removeEventListener('resize', gestionRedimensionnement);
    }, []);

    return dimensionsFenetre;
}
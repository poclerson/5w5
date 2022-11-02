import {useState, useEffect} from 'react';

/**
 * !!! À AMÉLIORER !!! permet de faire des requêtes médias dans react
 * @param {string} tailleMedia taille en px du média
 */
const useMediaQuery = (tailleMedia) => {
    const stringMedia = `(min-width: ${tailleMedia}px)`;
    const [matches, setMatches] = useState(window.matchMedia(stringMedia).matches);

    useEffect(() => {
        window.matchMedia(stringMedia).addEventListener('change', e => setMatches(e.matches));
    }, []);

    return matches;
}

export default useMediaQuery;
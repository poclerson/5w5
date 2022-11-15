// import {useState, useEffect} from 'react';

// /**
//  * !!! À AMÉLIORER !!! permet de faire des requêtes médias dans react
//  * @param {string} tailleMedia taille en px du média
//  */
// const useMediaQuery = (valeurs) => {
//     const stringMedia = tailleMedia => {return `(min-width: ${tailleMedia}px)`};
//     const [valeur, setValeur] = useState(null);
//     const [matches, setMatches] = useState([]);
//     useEffect(() => {
//         Object.keys(valeurs).forEach(taille => 
//             window.matchMedia(stringMedia(taille)).addEventListener('change', e => {
//                 console.log('allo')
//                 setMatches(...matches, e.matches)
//                 setValeur(valeurs[Object.keys(valeurs.trier()).reverse().find(taille => window.matchMedia(stringMedia(taille)))])   
//             })
//         )
//     }, []);
//     console.log(matches)
//     return valeur;
// }

// export default useMediaQuery;
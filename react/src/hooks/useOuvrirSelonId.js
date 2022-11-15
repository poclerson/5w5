import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

/**
 * Ouvre la boite d'une recherche d'après son id dans la page
 * @param {Callback} ouvrir Callback de useOuverture ouvrant une boite
 */
export default function useOuvrirSelonId(ouvrir) {
    const endroit = useLocation();
    const {recherche, idArticle} = endroit.state;

    useEffect(() => {
        if (recherche) {
            ouvrir(document.getElementById(idArticle).getAttribute('index'))
        }
    }, [])
}
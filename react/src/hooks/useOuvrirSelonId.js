import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

/**
 * Ouvre la boite d'une recherche d'après son id dans la page
 * @param {Callback} ouvrir Callback de useOuverture ouvrant une boite
 */
export default function useOuvrirSelonId(ouvrir) {
    const endroit = useLocation();

    useEffect(() => {
        if (endroit.state) {
            const {recherche, article} = endroit.state;
            if (recherche && article.id != undefined) {
                ouvrir(document.getElementById(article.id).getAttribute('index'))
            }
        }
    }, [])
}
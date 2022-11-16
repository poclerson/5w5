import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';

/**
 * Ouvre la boite d'une recherche d'après son id dans la page
 * @param {Callback} ouvrir Callback de useOuverture ouvrant une boite
 */
export default function useOuvrirSelonId(ouvrir, comportementPersonnalise) {
    const endroit = useLocation();

    useEffect(() => {
        // Vérifier que state existe
        if (endroit.state) {
            const {recherche, article} = endroit.state;

            // S'assurer qu'on navigue à partir d'une recherche
            if (recherche && article.articleWP.id != undefined) {
                
                // Appeler le callback pour une fonction d'ouverte personnalisée
                if (comportementPersonnalise != null) {
                    comportementPersonnalise(article);
                    return;
                } 

                // Fonction d'ouverture générique (ouvre l'élément recherché)
                ouvrir(document.getElementById(article.articleWP.id).getAttribute('index'))
            }
        }
    }, [endroit.state])
} 
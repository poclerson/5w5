import './App.scss';

import EnTete from './composants/navigation/EnTete';
import PiedPage from './composants/navigation/PiedPage';
import Chargement from './composants/modules/Chargement';

import Accueil from './composants/pages/Accueil';
import ListeEnseignants from './composants/pages/ListeEnseignants';
import ListeCours from './composants/pages/ListeCours';
import Contact from './composants/pages/Contact';
import ListeProjets from './composants/pages/ListeProjets';

import {Route, Routes} from 'react-router-dom';
import useObtenir from './hooks/useObtenir';
import ContexteDonneesSite from './ContexteDonneesSite';
import useObtenirMultiples from './hooks/useObtenirMultiples';

export default function App() {
    /**
     * Array contenant tout ce qui est nécessaire pour render les routes et créer le menu de navigation
     */
    const hcms = useObtenir('', 'hcms');

    // Statique
    const identifierComposant = (page) => {
        const composants = {
            'accueil': Accueil,
            'enseignants': ListeEnseignants,
            'cours': ListeCours,
            'galerie-etudiante': ListeProjets,
            'contact': Contact
        };

        return composants[page];
    }

    const donneesSite = useObtenirMultiples([
        '/cours',
        '/degrades',
        '/enseignants',
        '/projets',
        '/environnement'
    ]); 
        
    return (
        <div className="App">
            {hcms != null && donneesSite != null ?
                <ContexteDonneesSite.Provider value={donneesSite}>
                    <EnTete enteteWP={hcms.data.header} />
                    <Routes>
                        {hcms.data.header.headerMenuItems.map(page => {
                            let Composant = identifierComposant(page.pageSlug);
                            return <Route 
                                key={"page" + page.pageID}
                                path={page.pageSlug}
                                element={<Composant titre={page.title} />}
                            />
                        })}
                    </Routes> 
                    <PiedPage enteteWP={hcms.data.header} />
                </ContexteDonneesSite.Provider> : <Chargement />
            }
        </div>
    );
}

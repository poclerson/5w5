import './App.scss';

import EnTete from './composants/navigation/EnTete';
import PiedPage from './composants/navigation/PiedPage';
import Chargement from './composants/modules/Chargement';

import Accueil from './composants/pages/Accueil';
import ListeEnseignants from './composants/pages/ListeEnseignants';
import ListeCours from './composants/pages/ListeCours';
import Contact from './composants/pages/Contact';
import ListeProjets from './composants/pages/ListeProjets';
import Page from './composants/pages/Page';

import {Route, Routes, Navigate} from 'react-router-dom';
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

        if (!composants[page]) {
            return Page
        }
        return composants[page];
    }

    const donneesSite = useObtenirMultiples([
        '/cours',
        '/degrades',
        '/enseignants',
        '/projets',
        '/environnement',
        '/pages'
    ]); 
        
    return (
        <div className="App">
            <div className="thermometre">
                <div className="boule"></div>
                <div className="barre"></div>
            </div>
            {hcms != null && donneesSite != null ?
                <ContexteDonneesSite.Provider value={donneesSite}>
                    <EnTete enteteWP={hcms.data.header} />
                    <Routes>
                        {/* Aller à l'accueil par défaut */}
                        <Route exact path={'/*'} element={<Navigate to={'/accueil'} />}/>
                        {hcms.data.header.headerMenuItems.map(page => {
                            let Composant = identifierComposant(page.pageSlug);
                            return <Route 
                                key={"page" + page.pageID}
                                path={page.pageSlug}
                                element={<Composant id={page.pageID} key={Math.random(0, 1000)} />}
                            />
                        })}
                    </Routes> 
                    <PiedPage enteteWP={hcms.data.header} />
                </ContexteDonneesSite.Provider> : <Chargement />
            }
        </div>
    );
}

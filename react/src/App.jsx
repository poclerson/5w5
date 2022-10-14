import './App.scss';

import EnTete from './composants/navigation/EnTete';
import PiedPage from './composants/navigation/PiedPage';
import Chargement from './composants/modules/Chargement';

import Accueil from './composants/pages/Accueil';
import APropos from './composants/pages/APropos';
import ListeEnseignants from './composants/pages/ListeEnseignants';
import ListeCours from './composants/pages/ListeCours';
import Contact from './composants/pages/Contact';
import Etudiants from './composants/pages/Etudiants';

import {Route, Routes} from 'react-router-dom';
import useObtenir from './hooks/useObtenir';
import * as wp from './wp-rest-api';

export default function App() {
    /**
     * Array contenant tout ce qui est nécessaire pour render les routes et créer le menu de navigation
     */
    const pages = useObtenir('/pages');

    const identifierComposant = (page) => {
        const composants = {
            'accueil': Accueil,
            'enseignants': ListeEnseignants,
            'cours': ListeCours,
            'etudiants': Etudiants,
            'contact': Contact
        };

        return composants[page.slug];
    }

    function adapterChemin(permalink) {
        let chemin = permalink.replace(wp.url, "");

        if (chemin == '/')
            return '/';

        return chemin.slice(0, -1);
    }

    const routes = [
        {
            nom: 'Accueil',
            chemin: '/',
            composant: () => <Accueil />,
            estRoute: true
        },
        {
            nom: 'Enseignants',
            chemin: '/enseignants',
            composant: () => <ListeEnseignants />,
            estRoute: true
        },
        {
            nom: 'Cours',
            chemin: '/cours',
            composant: () => <ListeCours />,
            estRoute: true
        },
        {
            nom: 'Étudiants',
            chemin: '/etudiants',
            composant: () => <Etudiants />,
            estRoute: true
        },
        {
            nom: 'À propos',
            chemin: '/a-propos',
            composant: () => <APropos />,
            estRoute: true
        },
        {
            nom: 'Contact',
            chemin: '/contact',
            composant: () => <Contact />,
            estRoute: true
        },
        {
            nom: 'Inscription',
            chemin: '',
            composant: <a className="lien-page" href="https://www.cmaisonneuve.qc.ca">Inscription</a>,
            estRoute: false
        }
    ];
        
    return (
        <div className="App">
            {pages != null ?
                <Routes>
                {pages.map(page => {
                    let Composant = identifierComposant(page);

                    return <Route 
                        key={page.id}
                        path={adapterChemin(page.permalink)}
                        element={<Composant />}
                    />
                })}
            </Routes> :
            <Chargement />
            }
            <EnTete routes={routes} />
            
            <PiedPage />
            <div id="lol"></div>
        </div>
    );
}

import './App.scss';

// Meta
import EnTete from './composants/navigation/EnTete';
import PiedPage from './composants/navigation/PiedPage';

// Contenu
import Accueil from './composants/pages/Accueil';
import APropos from './composants/pages/APropos';
import ListeEnseignants from './composants/pages/ListeEnseignants';
import ListeCours from './composants/pages/ListeCours';
import Contact from './composants/pages/Contact';
import Etudiants from './composants/pages/Etudiants';

import {Route, Routes} from 'react-router-dom';

export default function App() {
    /**
     * Array contenant tout ce qui est nécessaire pour render les routes et créer le menu de navigation
     */
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
    ]        
        
    return (
        <div className="App">
            <EnTete routes={routes} />
            <Routes>
                {routes.map(route => {
                    if (route.estRoute)
                        return <Route key={route.nom} path={route.chemin} element={ <route.composant />} />
                })}
            </Routes>
            <PiedPage />
        </div>
    );
}

import './App.scss';

// Meta
import EnTete from './composants/EnTete';
import PiedPage from './composants/PiedPage';

// Contenu
import Accueil from './composants/Accueil';
import APropos from './composants/APropos';
import ListeEnseignants from './composants/ListeEnseignants';
import ListeCours from './composants/ListeCours';
import Contact from './composants/Contact';
import Etudiants from './composants/Etudiants';

import {Route, Routes} from 'react-router-dom';

export default function App() {
    /**
     * Array contenant tout ce qui est nécessaire pour render les routes et créer le menu de navigation
     */
    const routes = [
        {
            nom: 'Accueil',
            chemin: '/',
            composant: () => <Accueil />
        },
        {
            nom: 'Enseignants',
            chemin: '/enseignants',
            composant: () => <ListeEnseignants />
        },
        {
            nom: 'Cours',
            chemin: '/cours',
            composant: () => <ListeCours />
        },
        {
            nom: 'Étudiants',
            chemin: '/etudiants',
            composant: () => <Etudiants />
        },
        {
            nom: 'À propos',
            chemin: '/a-propos',
            composant: () => <APropos />
        },
        {
            nom: 'Contact',
            chemin: '/contact',
            composant: () => <Contact />
        },
    ]        
        
    return (
        <div className="App">
            <EnTete routes={routes} />
            <Routes>
                {routes.map(route => {
                    return <Route key={route.nom} path={route.chemin} element={ <route.composant />} />
                })}
            </Routes>
            <PiedPage />
        </div>
    );
}

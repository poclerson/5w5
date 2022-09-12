import './App.css';

import Navigation from './components/Navigation';

import Accueil from './components/Accueil';
import APropos from './components/APropos';
import ListeEnseignants from './components/ListeEnseignants';
import ListeCours from './components/ListeCours';
import Contact from './components/Contact';
import Etudiants from './components/Etudiants';

import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';

export default function App() {

    // Récuperer les données
    const [enseignants, setEnseignants] = useState(null);

    const [media, setMedia] = useState(null);

    const [cours, setCours] = useState(null);

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
            composant: () => <ListeEnseignants 
                enseignants={enseignants} 
                setEnseignants={setEnseignants} 
                cours={cours}
                setCours={setCours}
                media={media} 
                setMedia={setMedia}
            />
        },
        {
            nom: 'Cours',
            chemin: 'cours',
            composant: () => <ListeCours 
                cours={cours} 
                setCours={setCours} 
            />
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
            <Navigation routes={routes}/>
                <Routes>
                    {routes.map(route => {
                        return <Route key={route.nom} path={route.chemin} element={ <route.composant />} />
                    })}
                </Routes>
        </div>
    );
}

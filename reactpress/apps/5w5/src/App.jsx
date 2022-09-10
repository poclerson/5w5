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

    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="a-propos" element={<APropos />}/>
                <Route 
                    path="enseignants" 
                    element={<ListeEnseignants 
                        enseignants={enseignants} 
                        setEnseignants={setEnseignants} 
                        cours={cours}
                        setCours={setCours}
                        media={media} 
                        setMedia={setMedia}
                    />}
                />
                <Route path="cours" element={<ListeCours cours={cours} setCours={setCours} />}/>
            </Routes>
        </div>
    );
}

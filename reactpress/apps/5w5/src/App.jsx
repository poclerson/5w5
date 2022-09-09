import './App.css';

import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import APropos from './components/APropos';
import ListeEnseignants from './components/ListeEnseignants';
import ListeCours from './components/ListeCours';
import Contact from './components/Contact';

import {useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import obtenirArticles from './obtenirArticles';

export default function App() {

        // Récuperer les données
        const [enseignants, setEnseignants] = useState(null);
        useEffect(() => {
            obtenirArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignants').then(
                reponse => setEnseignants(reponse)
            )
        });

        const [cours, setCours] = useState(null);
        useEffect(() => {
            obtenirArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/cours').then(
                reponse => setCours(reponse)
            )
        })
        
        const [media, setMedia] = useState(null);
        useEffect(() => {
            obtenirArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/media').then(
                reponse => setMedia(reponse)
            )
        })
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

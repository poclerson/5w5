import './App.css';
import {React, useEffect, useState} from 'react';
import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import APropos from './components/APropos';
import ListeEnseignants from './components/ListeEnseignants';
import ListeCours from './components/ListeCours';
import Contact from './components/ListeCours';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {

    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="a-propos" element={<APropos />}/>
                <Route path="enseignants" element={<ListeEnseignants />}/>
                <Route path="cours" element={<ListeCours />}/>
            </Routes>
        </div>
    );
}

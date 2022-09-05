import './App.css';
import {React, useEffect, useState} from 'react';
import useFetch from './useFetch';
import ListeEnseignants from './components/ListeEnseignants';
import Accueil from './components/Accueil';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function App() {

    return (
        <div className="App">
            {/* <Navigation */}
            <Routes>
                <Route path="/" element={<Accueil />}></Route>
                <Route path="enseignant" element={<ListeEnseignants />}/>
            </Routes>
        </div>
    );
}

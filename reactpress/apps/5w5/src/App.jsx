import logo from './logo.svg';
import './App.css';
import {React, useEffect, useState} from 'react';
import useFetch from './useFetch';
import ListeEnseignants from './ListeEnseignants';
import Enseignant from './Enseignant';

export default function App() {

    return (
        <div className="App">
            <ListeEnseignants></ListeEnseignants>

        </div>
    );
}

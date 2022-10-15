import './Recherche.scss';

import {useEffect, useState} from 'react';
import * as wp from '../../wp-rest-api';

import TextField from '@mui/material/TextField';
import Chargement from './Chargement';

export default function Rechercher({gestionResultats}) { 
    const [resultats, setResultats] = useState(null);
    const [saisie, setSaisie] = useState(null);

    const gestionSaisie = e => {
        setSaisie(e.target.value);
    }

    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(wp.traiterRequete('/search', 'bre', "&content=true&search=" + saisie));
            console.log(wp.traiterRequete('/search', 'bre', "&content=true&search=" + saisie))

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            gestionResultats(reponseJSON);
        }
    
        obtenirArticles();
    }, [saisie]);


    // Appeler la fonction de recherche chaque fois qu'on écrit un caractère
    return(
        <div className="Recherche">
            {console.log(resultats)}
            <TextField
                placeholder="Recherche..."
                onChange={gestionSaisie}
                className="zone-saisie"
            />
        </div>
    )
}
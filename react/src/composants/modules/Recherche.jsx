import './Recherche.scss';

import {useEffect, useState} from 'react';
import * as wp from '../../wp-rest-api';

import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

export default function Rechercher({gestionResultats, ouverture, gestionClic}) { 
    const [saisie, setSaisie] = useState('');

    const gestionSaisie = e => {
        setSaisie(e.target.value);

        if (e.target.value.length) {

        }
    }

    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(wp.traiterRequete('/search', 'bre', "&content=true&search=" + saisie));

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            gestionResultats(reponseJSON);
        }
    
        obtenirArticles();
    }, [saisie]);


    // Appeler la fonction de recherche chaque fois qu'on écrit un caractère
    return(
        <div className={"Recherche " + ouverture}>
            <SearchIcon className="Icone icone-recherche" onClick={gestionClic} />
            <TextField
                onChange={gestionSaisie}
                className={"zone-saisie " + ouverture}
            />
        </div>
    )
}
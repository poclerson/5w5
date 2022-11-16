/* Dès que l'utilisateur clique sur la loupe de recherche, prépare le système de recherche et prepare à prendre ce qui est écrit comme valeur */
import './Recherche.scss';
import {useEffect, useState} from 'react';
import * as wp from '../../wp-rest-api';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';



export default function Rechercher({gestionResultats, verifierOuverture, surClic}) { 
    const [saisie, setSaisie] = useState('');

    const gestionSaisie = e => {
        setSaisie(e.target.value);
    }

    // Ne peut pas utiliser useObtenir parce qu'il doit appeler gestionResultats
    useEffect(() => {
        async function obtenirArticles() {
            const reponse = await fetch(
                wp.traiterRequete('/search', 'bre', "&content=true&search=" + saisie)
            );

            if(!reponse.ok)
                return;
    
            const reponseJSON = await reponse.json();

            gestionResultats(reponseJSON);
        }
    
        obtenirArticles();
    }, [saisie]);

    // Appeler la fonction de recherche chaque fois qu'on écrit un caractère
    return(
        <div className="Recherche" ouvert={verifierOuverture()}>
            <SearchIcon className="Icone icone-recherche" onClick={surClic} />
            <TextField
                onChange={gestionSaisie}
                className="zone-saisie"
            />
        </div>
    )
}
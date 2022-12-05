/* 
    Dès que l'utilisateur clique sur la loupe de recherche, 
    prépare le système de recherche et prepare à prendre
    ce qui est écrit comme valeur 
*/
import './Recherche.scss';
import {useEffect} from 'react';
import * as wp from '../../wp-rest-api';
import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';

import Icone from './Icone';

export default function Rechercher({
    gestionResultats, 
    verifierOuverture, 
    surClic, 
    saisie, 
    setSaisie, 
    refZoneSaisie,
    setEcrit
}) { 
    const tabletteMax = useMediaQuery(medias.tablette, 'max');
    
    const gestionSaisie = e => {
        setSaisie(e.target.value);
    }

    const gestionFocus = () => {
        if (tabletteMax && verifierOuverture() == 'false') {
            surClic();
        }
        setEcrit('true');
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
            <label htmlFor="zone-saisie">
                <Icone type="recherche" classes="icone-recherche" />
            </label>
            <input 
                className="zone-saisie"
                id="zone-saisie"
                ref={refZoneSaisie}
                type="text"
                onChange={gestionSaisie}
                onFocus={gestionFocus}
            />

        </div>
    )
}
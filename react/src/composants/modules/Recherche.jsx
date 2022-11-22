/* 
    Dès que l'utilisateur clique sur la loupe de recherche, 
    prépare le système de recherche et prepare à prendre
    ce qui est écrit comme valeur 
*/
import './Recherche.scss';
import {useEffect} from 'react';
import * as wp from '../../wp-rest-api';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';

export default function Rechercher({
    gestionResultats, 
    verifierOuverture, 
    surClic, 
    saisie, 
    setSaisie, 
    refZoneSaisie
}) { 
    const tabletteMax = useMediaQuery(medias.tablette, 'max');
    
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
            <input 
                ref={refZoneSaisie}
                type="text"
                onChange={gestionSaisie}
                onFocus={() => {tabletteMax && verifierOuverture() == 'false' && surClic()}}
                className="zone-saisie"
            />

        </div>
    )
}
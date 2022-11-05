import './ListeProjets.scss';

import {useContext} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import ContexteDonneesSite from '../../ContexteDonneesSite';

import Projet from './Projet';
import Chargement from '../modules/Chargement';

export default function ListeProjets() {
    const {projets, environnement} = useContext(ContexteDonneesSite);

    const {surClic, gestionClicParent, verifierOuverture} = useOuvertures({
        projets: projets,
        environnement: environnement
    });

    // Tout mettre dans un callback permet de déclarer des variables (index)
    const rendreCases = () => {
        let index = 0;

        return [...projets, ...environnement].shuffle().map((projet => {
            if (projet.acf.hasOwnProperty('nom')) {
                let composant = <Projet 
                    key={projet.id}
                    {... projet.acf}
                    index={index}
                    surClic={surClic}
                    verifierOuverture={verifierOuverture}
                />
                index++;
                return composant;
            }

            else {
                return <li key={projet.id} className="photo-environnement">
                    <div className="miniature">
                        <img src={projet.acf.photo} alt="" className="image-presentation"/>
                    </div>
                </li>
            }
        }))
    }

    return(
        projets != null && environnement != null ?
            <section className="ListeProjets" item-ouvert={gestionClicParent()}>
                <ul className="liste">
                    <h1 className="titre">galerie <br/> étudiante.</h1>
                    {rendreCases()}
                </ul>
            </section> : <Chargement />
    )
}
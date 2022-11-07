import './ListeProjets.scss';

import {useContext} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import ContexteDonneesSite from '../../ContexteDonneesSite';

import Projet from './Projet';
import Chargement from '../modules/Chargement';

export default function ListeProjets({id}) {
    const {projets, environnement} = useContext(ContexteDonneesSite);

    const {surClic, gestionClicParent, verifierOuverture} = useOuvertures({
        projets: projets,
        environnement: environnement
    });

    const {titre} = useStructure(id);

    // Tout mettre dans un callback permet de déclarer des variables (index)
    const rendreCases = () => {
        let index = 0;

        return [...projets, ...environnement].shuffle().map((projet => {
            if (projet.acf.hasOwnProperty('nom')) {
                let composant = <Projet 
                    key={projet.id}
                    id={projet.id}
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
                    {titre}
                    {rendreCases()}
                </ul>
            </section> : <Chargement />
    )
}
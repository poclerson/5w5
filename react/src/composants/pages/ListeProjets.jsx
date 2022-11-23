import './ListeProjets.scss';

import {useContext, useRef} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import ContexteDonneesSite from '../../ContexteDonneesSite';

import Projet from './Projet';
import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';
import DegradeSuivant from '../modules/DegradeSuivant';

export default function ListeProjets({id}) {
    const {projets, environnement} = useContext(ContexteDonneesSite);

    const {surClic, verifierOuvertureParent, verifierOuverture} = useOuvertures({
        projets: projets,
        environnement: environnement
    });

    const refListe = useRef();

    const {titre, BACKGROUND} = useStructure(id);

    useOuvrirSelonId(surClic);

    // Tout mettre dans un callback permet de déclarer des variables (index)
    const rendreCases = () => {
        let index = 0;

        return [...projets, ...environnement].pseudoMelanger().map((projet => {
            // Un projet
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

            // Une image d'environnement
            else {
                return <li key={projet.id} className="photo-environnement">
                    <div className="miniature">
                        <div className="image-presentation-conteneur">
                            <img src={projet.acf.photo} alt="" className="image-presentation"/>
                        </div>
                    </div>
                </li>
            }
        }))
    }

    return(
        projets != null && environnement != null ?
            <section 
                className="ListeProjets" 
                item-ouvert={verifierOuvertureParent()}
                ref={refListe}
            >
                <ul className="liste" item-ouvert={verifierOuvertureParent()}>
                    {titre}
                    {rendreCases()}
                </ul>
                <Fond fond={{backgroundImage: BACKGROUND}} />
                <DegradeSuivant refListe={refListe} />
            </section> : <Chargement />
    )
}
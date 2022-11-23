import './ListeProjets.scss';

import {useContext} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import ContexteDonneesSite from '../../ContexteDonneesSite';

import Projet from './Projet';
import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';

export default function ListeProjets({id}) {
    const {projets, environnement} = useContext(ContexteDonneesSite);

    const {surClic, verifierOuvertureParent, verifierOuverture} = useOuvertures({
        projets: projets,
        environnement: environnement
    });

    const {titre, BACKGROUND} = useStructure(id);

    useOuvrirSelonId(surClic);

    // Tout mettre dans un callback permet de déclarer des variables (index)
    const rendreCases = () => {
        let index = 0;

        return [...projets, ...environnement].pseudoMelanger().map((projet => {
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
            >
                <Fond fond={{backgroundImage: BACKGROUND}} />
                <ul className="liste" item-ouvert={verifierOuvertureParent()}>
                    {titre}
                    {rendreCases()}
                </ul>
            </section> : <Chargement />
    )
}
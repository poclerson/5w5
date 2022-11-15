import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import {useLocation} from 'react-router-dom';
import {useContext, useLayoutEffect} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import Suivant from '../modules/Suivant';

export default function ListeEnseignants({id}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {surClic, surClicSuivant, verifierOuvertureParent, verifierOuverture, indexOuvert} = useOuvertures(enseignants)

    const {titre} = useStructure(id);

    useOuvrirSelonId(surClic)

    return(
        enseignants != null ?
            <section className="ListeEnseignants" enseignant-ouvert={verifierOuvertureParent()} >
                {titre}
                <ul className="liste">
                    {
                        enseignants.map((enseignant, index) => {
                            return <Enseignant 
                                ouvert={false}
                                {... enseignant.acf}
                                key={enseignant.id} 
                                id={enseignant.id}
                                index={index}
                                surClic={surClic}
                                verifierOuverture={verifierOuverture}
                            />
                        }
                        ) 
                    }
                </ul>
                <Suivant gestionClic={surClicSuivant} />
            </section>  
        : <Chargement />
    );
}
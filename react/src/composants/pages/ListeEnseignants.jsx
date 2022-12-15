import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import {useContext, useRef} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import NavCarousel from '../modules/NavCarousel';

export default function ListeEnseignants({id}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {
        surClic, 
        surClicSuivant, 
        surClicPrecedent,
        verifierOuvertureParent, 
        verifierOuverture
    } = useOuvertures(enseignants)

    const {titre} = useStructure(id);

    useOuvrirSelonId(surClic);

    const refListe = useRef();

    return(
        enseignants ?
            <section 
                className="ListeEnseignants" 
                item-ouvert={verifierOuvertureParent()} 
            >
                {titre}
                <ul className="liste" item-ouvert={verifierOuvertureParent()} ref={refListe}>
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
                        })
                    }
                </ul>
                {/* Quand un enseignant est ouvert, 
                on utilise les fonctions de useOuvertures */}
                <NavCarousel 
                    refListe={refListe} 
                    versPrecedent={
                        verifierOuvertureParent() == 'true' ?
                        surClicPrecedent :
                        undefined
                    }
                    versSuivant={
                        verifierOuvertureParent() == 'true' ?
                        surClicSuivant :
                        undefined
                    } 
                    classesAdditionnelles={
                        verifierOuvertureParent() == 'true' ?
                        'ouvert' :
                        'ferme'
                    }
                />
            </section>  
        : <Chargement />
    );
}
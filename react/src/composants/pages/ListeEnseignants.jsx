import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import {useContext} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import Suivant from '../modules/Suivant';

export default function ListeEnseignants({titre}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {surClic, surClicSuivant, gestionClicParent, verifierOuverture} = useOuvertures(enseignants)

    return(
        enseignants != null ?
            <section className="ListeEnseignants" enseignant-ouvert={gestionClicParent()} >
                <h1 className="titre">nos <br/> enseignants.</h1>
                <ul className="liste">
                    {
                        enseignants.map((enseignant, index) => {
                            return <Enseignant 
                                ouvert={false}
                                {... enseignant.acf}
                                key={enseignant.id} 
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
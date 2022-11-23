import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import {useContext} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import FlecheNav from '../modules/FlecheNav';
import Fond from '../modules/Fond';

export default function ListeEnseignants({id}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {
        surClic, 
        surClicSuivant, 
        verifierOuvertureParent, 
        verifierOuverture
    } = useOuvertures(enseignants)

    const {titre, BACKGROUND} = useStructure(id);

    useOuvrirSelonId(surClic)

    return(
        enseignants != null ?
            <section 
                className="ListeEnseignants" 
                item-ouvert={verifierOuvertureParent()} 
            >
                {titre}
                <ul className="liste" item-ouvert={verifierOuvertureParent()}>
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
                <FlecheNav gestionClic={surClicSuivant} texte={true} classesAdditionnelles="suivant" />
                <Fond fond={{backgroundImage: BACKGROUND}} />
            </section>  
        : <Chargement />
    );
}
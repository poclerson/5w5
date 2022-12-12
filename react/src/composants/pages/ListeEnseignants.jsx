import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import {useContext, useRef} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import FlecheNav from '../modules/FlecheNav';
import Fond from '../modules/Fond';
import DegradeCarousel from '../modules/DegradeCarousel';

export default function ListeEnseignants({id}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {
        surClic, 
        surClicSuivant, 
        verifierOuvertureParent, 
        verifierOuverture
    } = useOuvertures(enseignants)

    const {titre, BACKGROUND} = useStructure(id);

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
                <FlecheNav gestionClic={surClicSuivant} texte={true} classesAdditionnelles="suivant" />
                <Fond fond={{backgroundImage: BACKGROUND}} />
                <DegradeCarousel refListe={refListe} />
                <DegradeCarousel refListe={refListe} direction="precedent" />
            </section>  
        : <Chargement />
    );
}
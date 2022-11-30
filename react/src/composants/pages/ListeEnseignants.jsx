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
import DegradeSuivant from '../modules/DegradeSuivant';

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

    const defilerVersEnseignant = () => {
        const element = refListe.current;
        const enseignant = Array.prototype.slice.call(
            element.children).obtenirElementPlusAGauche();

        // Revenir quand on est arrivés au bout
        if (element.scrollLeft + window.innerWidth >= element.scrollWidth) {
            element.scrollLeft = 0;
            return;
        }

        element.scrollLeft = enseignant.offsetLeft + enseignant.offsetWidth; 
    }

    return(
        enseignants != null ?
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
                        }
                        ) 
                    }
                </ul>
                <FlecheNav gestionClic={surClicSuivant} texte={true} classesAdditionnelles="suivant" />
                <Fond fond={{backgroundImage: BACKGROUND}} />
                <DegradeSuivant surClicFleche={defilerVersEnseignant} />
            </section>  
        : <Chargement />
    );
}
import './ListeEnseignants.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import {useLocation} from 'react-router-dom';
import {useContext, useLayoutEffect} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import FlecheNav from '../modules/FlecheNav';

export default function ListeEnseignants({id}) {
    const {enseignants} = useContext(ContexteDonneesSite);

    const {surClic, surClicSuivant, verifierOuvertureParent, verifierOuverture} = useOuvertures(enseignants)

    const {titre} = useStructure(id);

    useOuvrirSelonId(surClic)

    return(
        enseignants != null ?
<<<<<<< HEAD
            <section className="ListeEnseignants">    
                <h1 className={"titre " + listeOuverte}>nos enseignants.</h1>

                <ul className={"liste " + listeOuverte}>
                    {enseignants.map(enseignant => 
                        <Enseignant 
                            {... enseignant.acf}
                            key={enseignant.id} 
                            gestionClicListe={gestionClicListe}
                        />
                    )}
=======
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
>>>>>>> 443a262d99e3343c74e821c178b27a53d9222583
                </ul>
                <FlecheNav gestionClic={surClicSuivant} texte={true} classesAdditionnelles="suivant" />
            </section>  
        : <Chargement />
    );
}
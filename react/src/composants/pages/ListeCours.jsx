import './ListeCours.scss';

import {useEffect, useState, useRef, useContext} from 'react';
import ContexteDonneesSite from '../../ContexteDonneesSite';
import useStructure from '../../hooks/useStructure';

import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';
import ListeSessions from './ListeSessions';

/**
 * Gère la page en entier.
 * ListeSessions s'occupe du positionnement de tous les éléments relatifs aux sessions dans la pages
 * 
 * On a besoin de deux composants pour permettre au deuxième de ne pas avoir de restrictions de chargement
 */
export default function ListeCours({id}) {
    const {cours, degrades} = useContext(ContexteDonneesSite)

    const [sessions, setSessions] = useState(null);

    const {BACKGROUND} = useStructure(id);

    // Permettre aux composants plus bas de gérer l'affiche de ListeCours
    const listeCoursRef = useRef(null);

    useEffect(() => {
        if (cours) {
            // Un Set ne prend qu'une seule occurence de chaque itération dans un tableau
            setSessions([... new Set(cours.map(_cours => _cours.acf.session))].sort());
        }
    }, [cours])

    return(
        cours ?
            <section className="ListeCours" ref={listeCoursRef}>
                {
                    sessions && degrades ? 
                    <ListeSessions sessions={sessions} cours={cours} degrades={degrades} pageRef={listeCoursRef} />
                    : <Chargement />
                }
                <Fond fond={{backgroundImage: BACKGROUND}} />
            </section>
        : <Chargement />
    )
}
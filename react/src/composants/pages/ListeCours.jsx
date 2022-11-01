import './ListeCours.scss';

import {useEffect, useState, useRef} from 'react';

import useObtenir from '../../hooks/useObtenir';

import Chargement from '../modules/Chargement';
import ListeSessions from './ListeSessions';

export default function ListeCours({titre}) {
    const cours = useObtenir('/cours');
    const degrades = useObtenir('/degrades', 'bre');

    const [sessions, setSessions] = useState(null);

    const listeCoursRef = useRef(null);

    useEffect(() => {
        if (cours != null) {
            // Un Set ne prend qu'une seule occurence de chaque itération dans un tableau
            setSessions([... new Set(cours.map(_cours => _cours.acf.session))].sort());
        }
    }, [cours])

    return(
        cours != null ?
        <section className="ListeCours" ref={listeCoursRef}>
            {console.log(titre)}
            {
                sessions && degrades != null ? 
                <ListeSessions sessions={sessions} cours={cours} degrades={degrades} pageRef={listeCoursRef} />
                : <Chargement />
            }
        </section>
        : <Chargement />
    )
}
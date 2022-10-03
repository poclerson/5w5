import './ListeCours.scss';

import {createRef, useRef, useEffect, useLayoutEffect, useState} from 'react';

import * as wp from '../../wp-rest-api';
import * as u from '../../utilitaires';

import Chargement from '../modules/Chargement';
import Session from './Session';
import ListeSessions from './ListeSessions';
import Cours from './Cours';

export default function ListeCours() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');
    const media = wp.useObtenir('/media');

    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        if (cours != null) {
            setSessions([... new Set(cours.map(_cours => _cours.acf.session))].reverse());
        }
    }, [cours])

    return(
        cours != null ?
        <section className="ListeCours">
            <h1 className="titre">
                {u.capitaliserPremiereLettre(cours[0].type)}
            </h1>

            {
                enseignants && media && sessions != null ? 
                <ListeSessions sessions={sessions} cours={cours} enseignants={enseignants} />
                : <Chargement />
            }
        </section>
        : <Chargement />
    )
}
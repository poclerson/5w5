import './ListeCours.scss';

import {useEffect, useState} from 'react';

import * as wp from '../../wp-rest-api';
import * as u from '../../utilitaires';

import Chargement from '../modules/Chargement';

import ListeSessions from './ListeSessions';

export default function ListeCours() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');

    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        if (cours != null) {
            // Un Set ne prend qu'une seule occurence de chaque itération dans un tableau
            setSessions([... new Set(cours.map(_cours => _cours.acf.session))].reverse());
        }
    }, [cours])

    return(
        cours != null ?
        <section className="ListeCours">
            <h1 className="titre">
                {/* {u.capitaliserPremiereLettre(cours[0].type)} */}
            </h1>

            {
                enseignants && sessions != null ? 
                <ListeSessions sessions={sessions} cours={cours} enseignants={enseignants} />
                : <Chargement />
            }
        </section>
        : <Chargement />
    )
}
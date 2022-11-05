import './ListeSessions.scss';

import Session from './Session';
import SessionRonds from './SessionRonds';

import {useState, useEffect} from 'react';
import useOuvertures from '../../hooks/useOuvertures';

import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

import * as u from '../../utilitaires';

export default function ListeSessions({sessions, cours, degrades, pageRef}) {
    const tailleOrdinateur = useMediaQuery(medias.ordinateur);
    const tailleTablette = useMediaQuery(medias.tablette);

    // Gestion de l'ouverture de chaque session
    const {surClic, surClicSuivant, verifierOuverture} = useOuvertures(sessions, 0);

    // Active certains styles uniquement aux bons moments. Change d'état dans onAnimationEnd des titres de session
    const [transition, setTransition] = useState(1);

    // État de rotation du carousel rond des titres de session
    const [rotation, setRotation] = useState(0);

    // Est activé quand on clique sur un bouton qui fait changer de session
    function surClicSession(index) {
        // Ouvrir selon l'index donné
        if (tailleOrdinateur) {
            surClic(index)
            setRotation(-(360 * index / sessions.length))
        }
        
        // Simplement ouvrir le prochain. Permet une rotation constante (ne brise pas à chaque cycle)
        else {
            surClicSuivant()
            setRotation(rotation - (360 / sessions.length))
        }
    }

    return (
        <div 
            className="ListeSessions" 
            transition={transition} 
        >
            <div className="sessions-titres-conteneur">
                <ol className="sessions-titres">
                    {sessions.map((session, index) => 
                        <li className="session-titre" ouvert={verifierOuverture(index)} key={"titre" + session} onClick={() => surClicSession(index)}>
                            <h3 className="sous-titre">{u.inserer(session, 7, " ")}</h3>
                        </li>
                    )}
                </ol>
            </div>

            {/* La session ouverte */}
            <ul className="liste">
                {
                    sessions.map((session, index) => 
                        <Session 
                            key={session}   
                            cours={cours.filter(_cours =>
                                _cours.acf.session == session
                            )} 
                            session={session}
                            index={index}
                            pageRef={pageRef}
                            verifierOuverture={verifierOuverture}
                        />
                    )
                }
            </ul>

            <SessionRonds 
                sessions={sessions} 
                surClic={surClicSession} 
                quantite={sessions.length} 
                rotation={rotation}
            />
        </div>
    )
}

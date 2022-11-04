import './ListeSessions.scss';

import Session from './Session';
import SessionRonds from './SessionRonds';

import {useState, useEffect} from 'react';
import useOuvertures from '../../hooks/useOuvertures';

import * as u from '../../utilitaires';

export default function ListeSessions({sessions, cours, degrades, pageRef}) {
    // Gestion de l'ouverture de chaque session
    const {surClic, surClicSuivant, gestionClicParent, verifierOuverture, indexOuvert} = useOuvertures(sessions, 0);

    // Active certains styles uniquement aux bons moments. Change d'état dans onAnimationEnd des titres de session
    const [transition, setTransition] = useState(1);

    // Conserve l'état du dégradé correspondant à la session sur laquelle on se trouve. 
    // Permet de transitionner en changeant l'opacité vers la prochaine image de dégradé
    const [degradePresent, setDegradePresent] = useState(null);

    const stylesDegrades = {
        section: {backgroundImage: `url(${degrades[indexOuvert]})`},
        prochaineSection: {backgroundImage: `url(${degradePresent})`}
    }

    const actualiserDegrade = () => {
        setDegradePresent(degrades[indexOuvert]);
    }

    useEffect(() => {
        actualiserDegrade();
        surClic(0)
    }, []);

    return (
        <div 
            className="ListeSessions" 
            transition={transition} 
            style={stylesDegrades.section}
        >
            {/* Destination permet de gérer le fondu entre les images */}
            <div className="destination" onAnimationEnd={actualiserDegrade} style={stylesDegrades.prochaineSection}></div>

            {/* Titres des sessions */}
            <ol className="sessions-titres">
                {sessions.map((session, index) => 
                    <li className="session-titre" key={"titre" + session} onClick={() => surClic(index)}>
                        <h3 className="sous-titre">{u.inserer(session, 7, " ")}</h3>
                    </li>
                )}
            </ol>

            {/* La session ouverte */}
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

            <SessionRonds 
                sessions={sessions} 
                surClic={surClic} 
                surClicSuivant={surClicSuivant}
                quantite={cours.length} 
            />
        </div>
    )
}

import './ListeSessions.scss';

import Session from './Session';
import SessionRonds from './SessionRonds';

import {useState, useRef} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';

import * as u from '../../utilitaires';

export default function ListeSessions({sessions, cours, pageRef}) {
    const tailleOrdinateur = useMediaQuery(medias.ordinateur);

    // Gestion de l'ouverture de chaque session
    const {surClic, surClicSuivant, verifierOuverture} = useOuvertures(sessions, 0);

    // État de rotation du carousel rond des titres de session
    const [rotation, setRotation] = useState(0);

    const refTitres = useRef(null);

    // Référence vers une seule session, celle qui est ouverte
    const refListeCoursSessionOuverte = useRef();

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

    const defilerVersCours = cours => {
        if (cours) {
            console.log(cours) 
            refListeCoursSessionOuverte.current.scrollLeft = 
            cours.offsetLeft - refTitres.current.offsetWidth;
        }
    }

    useOuvrirSelonId(undefined, article => {
        document.querySelectorAll('#' + article.articleWP.acf.session).forEach(
            element => {
                const indexSession = element.getAttribute('index')
                surClic(
                    indexSession,
                    tailleOrdinateur ? 
                        () => {setRotation(-(360 * indexSession / sessions.length))} :
                        () => {setRotation(rotation - (360 / sessions.length))}
                )

                const cours = document.getElementById(article.articleWP.id)
                defilerVersCours(cours)
            }
        )
    })

    return (
        <div className="ListeSessions">
            <div className="sessions-titres-conteneur" ref={refTitres}>
                <ol className="sessions-titres">
                    {sessions.map((session, index) => 
                        <li 
                            className="session-titre" 
                            ouvert={verifierOuverture(index)} 
                            key={"titre" + session} 
                            id={session}
                            index={index}
                            onClick={() => surClicSession(index)}
                        >
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
                            defilerVersCours={defilerVersCours}
                            refTitres={refTitres}
                            refListeCoursSessionOuverte={
                                verifierOuverture(index) == 'true' && refListeCoursSessionOuverte
                            }
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

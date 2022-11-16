import './ListeSessions.scss';

import Session from './Session';
import SessionRonds from './SessionRonds';

import {useState, useRef} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';

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
            console.log(verifierOuverture(index))
            surClicSuivant()
            setRotation(rotation - (360 / sessions.length))
        }
    }

    // Défile vers un cours en tenant en compte les titres de session
    const defilerVersCours = cours => {
        if (cours) {
            refListeCoursSessionOuverte.current.scrollLeft = 
            cours.offsetLeft - refTitres.current.offsetWidth; 
        }
    }

    useOuvrirSelonId(
        undefined,  
        [
            article => {
                // Sélectionner plusieurs éléments (session + titre de session)
                document.querySelectorAll('#' + article.articleWP.acf.session).forEach(
                    element => {
                        // On doit parser, sinon indexSession est un string 
                        // et ça crée des problèmes pour l'addition d'indexes
                        const indexSession = parseInt(element.getAttribute('index'));

                        // Ouvrir les deux (et changer la rotation des titres)
                        surClic(
                            indexSession,
                            () => {setRotation(-(360 * indexSession / sessions.length))} 
                        )
                    }
                )
            },
            article => {
                // setTimeout permet d'attendre que la première fonction s'excéute.
                // Sinon, on essaie de défiler vers le cours avant que la page soit chargée
                setTimeout(
                    () => {
                        const cours = document.getElementById(article.articleWP.id);
                        defilerVersCours(cours);
                    }, 1
                )
            }
        ]
    )

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
                            <h3 className="sous-titre">{session.inserer(" ", 7)}</h3>
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

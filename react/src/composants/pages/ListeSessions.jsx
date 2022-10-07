import './ListeSessions.scss';

import Session from './Session';

import {useState, useEffect} from 'react';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListeSessions({sessions, cours, enseignants}) {

    const [ouvertures, setOuvertures] = useState([... sessions.map(() => "ferme")]);

    // Ouvre une session d'après un index dans le tableau des ouvertures
    function ouvrirSession(index) {
        // On doit créer une copie pour éviter des problèmes avec splice()
        // Réintialiser les ouvertures à chaque ouverture
        let copie = sessions.map(() => "ferme");

        // Ramener au début
        if (index + 1 > ouvertures.length) {
            index = 0;
        }

        // Attribuer l'ouverture au bon index
        copie.splice(index, 1, "ouvert")

        setOuvertures([... copie]);
    }

    useEffect(() => {
        ouvrirSession(0);
    }, [])

    return (
        <div className="ListeSessions">
            <ol className="sessions">
                {
                    sessions.map((session, index) => 
                        <Session 
                            cours={cours.filter(_cours =>
                                _cours.acf.session == session
                            )} 
                            enseignants={enseignants}
                            session={session}
                            ouverture={ouvertures[index]}
                            key={session}
                        />
                    )
                }
            </ol>
            <ol className="sessions-titres">
                {sessions.map((session, index) => 
                    <li className={`session-titre ${ouvertures[index]}`} key={session}>
                        <h3 className="titre">{session.charAt(7)}</h3>
                        {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                        <ArrowForwardIosIcon className="Icone" onClick={() => ouvrirSession(index + 1)} />
                    </li>
                )}
            </ol>
        </div>
    )
}

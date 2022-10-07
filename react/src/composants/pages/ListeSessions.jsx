import './ListeSessions.scss';

import Session from './Session';

import {useState, useEffect} from 'react';

import * as gestionOuverture from '../../boites';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListeSessions({sessions, cours, enseignants}) {

    const [ouvertures, setOuvertures] = useState([... sessions.map(() => "ferme")]);

    useEffect(() => {
        setOuvertures(gestionOuverture.ouvrir(0, sessions.map(() => "ferme")))
    }, [])

    return (
        <div className="ListeSessions">
            {
                sessions.map((session, index) => {
                    if (ouvertures[index] == "ouvert") {
                        return <Session 
                            cours={cours.filter(_cours =>
                                _cours.acf.session == session
                            )} 
                            enseignants={enseignants}
                            session={session}
                            ouverture={ouvertures[index]}
                            key={session}
                        />
                    }
                })
            }
            <ol className="sessions-titres">
                {sessions.map((session, index) => 
                    <li className={`session-titre ${ouvertures[index]}`} key={session}>
                        <h3 className="titre">{session.charAt(7)}</h3>
                        {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                        <ArrowForwardIosIcon className="Icone" onClick={() => setOuvertures(gestionOuverture.ouvrir(index + 1, sessions.map(() => "ferme")))} />
                    </li>
                )}
            </ol>
        </div>
    )
}

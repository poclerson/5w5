import Session from './Session';

import {useState} from 'react';

export default function ListeSessions({sessions, cours, enseignants}) {

    const [ouvertures, setOuvertures] = useState({...[... sessions.map(() => "ferme")]});

    function controllerOuvertures(indexSessionAppuyee) {
        let ouverturesCopie = Object.values(ouvertures);
        ouverturesCopie.splice(indexSessionAppuyee, 1, ouvertures[indexSessionAppuyee] == "ferme" ? "ouvert" : "ferme")

        setOuvertures({... ouverturesCopie});
    }

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
                    <li className="session-titre" key={session}>
                        <h3 className="titre" onClick={() => controllerOuvertures(index)}>{session}</h3>
                    </li>
                )}
            </ol>
        </div>
    )
}

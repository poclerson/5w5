import './ListeSessions.scss';

import Session from './Session';

import {useState, useEffect} from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ListeSessions({sessions, cours, enseignants}) {

    const [ouvertures, setOuvertures] = useState([... sessions.map(() => "ferme")]);

    function ouvrirSession(index) {
        let copie = sessions.map(() => "ferme");

        copie.splice(index, 1, "ouvert")

        setOuvertures([... copie]);
    }

    useEffect(() => {
        ouvrirSession(0);
    }, [])


    function controllerOuvertures(indexSessionAppuyee) {
        const nombreSessionsOuvertes = Object.values(ouvertures).filter(ouverture => ouverture == "ouvert").length;

        let ouverturesCopie = Object.values(ouvertures);

        const indexSessionOuverte = ouverturesCopie.findIndex(ouverture => ouverture == "ouvert");
        
        // Empêcher de fermer si on reclique sur le même titre de session
        if (indexSessionAppuyee == indexSessionOuverte)
            return;

        // Insérer la valeur ouverte dans les états d'ouverture d'après l'index du titre de la session appuyé
        ouvrirSession(indexSessionAppuyee)
    }

    function ouvrirProchaineSession(index) {
        if (index + 1 == ouvertures.length) {
            ouvrirSession(0);
            return;
        }
        
        ouvrirSession(index + 1);
    }

    return (
        <div className="ListeSessions">
            <ol className="sessions-titres">
                {sessions.map((session, index) => 
                    <li className={`session-titre ${ouvertures[index]}`} key={session}>
                        <h3 className="titre">{session.charAt(7)}</h3>
                        {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                        <ArrowForwardIcon className="Icone" onClick={() => ouvrirProchaineSession(index)} />
                    </li>
                )}
            </ol>
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
        </div>
    )
}

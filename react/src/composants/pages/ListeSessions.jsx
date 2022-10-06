import './ListeSessions.scss';

import Session from './Session';

import {useState} from 'react';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ListeSessions({sessions, cours, enseignants}) {

    const [ouvertures, setOuvertures] = useState({...[... sessions.map(() => "ferme")]});

    function controllerOuvertures(indexSessionAppuyee) {
        const nombreSessionsOuvertes = Object.values(ouvertures).filter(ouverture => ouverture == "ouvert").length;

        let ouverturesCopie = Object.values(ouvertures);

        const indexSessionOuverte = ouverturesCopie.findIndex(ouverture => ouverture == "ouvert");
        
        // Empêcher de fermer si on reclique sur le même titre de session
        if (indexSessionAppuyee == indexSessionOuverte)
            return;

        // Fermer toutes les sesions s'il y en a une d'ouverte
        if (nombreSessionsOuvertes != 0) {
            ouverturesCopie = [... ouverturesCopie.map(() => "ferme")];
        }

        // Insérer la valeur ouverte dans les états d'ouverture d'après l'index du titre de la session appuyé
        ouverturesCopie.splice(indexSessionAppuyee, 1, ouvertures[indexSessionAppuyee] == "ferme" ? "ouvert" : "ferme")

        setOuvertures({... ouverturesCopie});
    }

    function activerProchaineSession(indexSessionActivee) {
        let ouverturesCopie = Object.values(ouvertures);

        ouverturesCopie = [... ouverturesCopie.map(() => "ferme")];
        ouverturesCopie.splice(indexSessionActivee + 1, 1, "ouvert")

        setOuvertures({... ouverturesCopie});
    }

    return (
        <div className="ListeSessions">
            <ol className="sessions-titres">
                {sessions.map((session, index) => 
                    <li className="session-titre" key={session}>
                        <h3 className="titre" >{session.charAt(7)}</h3>
                        {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                        <ArrowForwardIcon className="Icone" onClick={() => activerProchaineSession(index)} />
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

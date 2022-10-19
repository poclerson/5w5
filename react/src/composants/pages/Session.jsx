import './Session.scss';

import {useState, useEffect, useRef} from 'react';
import * as boites from '../../boites';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cours from './Cours';
import BarreDefilement from '../modules/BarreDefilement';
import Chargement from '../modules/Chargement';

export default function Session({cours, enseignants, session}) {
    const [ouvertures, setOuvertures] = useState([... cours.map(() => "ferme")]);

    const [positionDefilement, setPositionDefilement] = useState(null);
    const [largeurDefilement, setLargeurDefilement] = useState(null);

    const distanceActivationDerniereFenetre = 50;

    const gestionDefilement = (e) => {
        setPositionDefilement(e.target.scrollLeft);

        // Ouvrir la dernière fenêtre si on défile "trop loin"
        if (positionDefilement > largeurDefilement + distanceActivationDerniereFenetre) {
            setOuvertures(boites.ouvrir(ouvertures.length - 1, cours.map(() => "ferme")));
            return;
        }
        setOuvertures(boites.ouvrir(
            Math.round(ouvertures.length * positionDefilement / largeurDefilement),
            cours.map(() => "ferme")
        ))
    }

    useEffect(() => {
        setLargeurDefilement(sessionRef.current.scrollWidth)
        setOuvertures(boites.ouvrir(0, cours.map(() => "ferme")))
    }, [])

    const sessionRef = useRef(null);

    return (
        <article className={"Session " + session}>
            <ul className="liste-cours" onScroll={gestionDefilement} ref={sessionRef} >
                {cours.map((cours, index) => 
                    <Cours 
                        key={cours.acf.titre}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                        id={"cours" + index}
                        ouverture={ouvertures[index]}
                    />
                )}
            </ul>
            {/* {sessionRef.current != null ?
                <BarreDefilement largeurTotale={largeurDefilement} elementScroll={sessionRef.current} />
                :
                <Chargement />
            } */}
            {/* <a href={"#cours" + (ouvertures.indexOf("ouvert"))} className="prochain-cours" onClick={() => setOuvertures(boites.ouvrir(ouvertures.indexOf("ouvert") + 1, cours.map(() => "ferme")))}>
                <ArrowForwardIosIcon className="Icone"  />
            </a> */}
        </article>
    )
}

import './Session.scss';

import {useState, useEffect} from 'react';

import * as boites from '../../boites';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Cours from './Cours';
import BarreDefilement from '../modules/BarreDefilement';

export default function Session({cours, enseignants, session}) {
    const [ouvertures, setOuvertures] = useState([... cours.map(() => "ferme")]);

    const [positionDefilement, setPositionDefilement] = useState(null);
    const [largeurDefilement, setLargeurDefilement] = useState(null);

    const distanceActivationDerniereFenetre = 50;

    const gestionPositionIndicateur = position => {
        // TODO Bouger les cours d'après position qui est récupéré de la barre de scroll
        console.log("posution" + position)
        return position;
    }

    const gestionDefilement = (e) => {
        setLargeurDefilement(e.target.offsetWidth);
        setPositionDefilement(e.target.scrollLeft);

        // Ouvrir la dernière fenêtre si on défile "trop loin"
        if (positionDefilement > largeurDefilement + distanceActivationDerniereFenetre) {
            setOuvertures(boites.ouvrir(ouvertures.length - 1, cours.map(() => "ferme")));
            return;
        }

        setOuvertures(boites.ouvrir(
            Math.round(ouvertures.length * positionDefilement / largeurDefilement / 2),
            cours.map(() => "ferme")
        ))
    }

    useEffect(() => {
        setOuvertures(boites.ouvrir(0, cours.map(() => "ferme")))
    }, [])

    return (
        <article className={"Session " + session} scrollLeft={gestionPositionIndicateur}>
            <ul className="liste-cours" onScroll={gestionDefilement}>
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
            <BarreDefilement defilement={positionDefilement} largeurTotale={largeurDefilement} ratio={.2} gestionPositionIndicateur={gestionPositionIndicateur} />
            {/* <a href={"#cours" + (ouvertures.indexOf("ouvert"))} className="prochain-cours" onClick={() => setOuvertures(boites.ouvrir(ouvertures.indexOf("ouvert") + 1, cours.map(() => "ferme")))}>
                <ArrowForwardIosIcon className="Icone"  />
            </a> */}
        </article>
    )
}

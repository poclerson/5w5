import './Session.scss';

import {useState, useEffect} from 'react';

import * as boites from '../../boites';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Cours from './Cours';

export default function Session({cours, enseignants, session}) {
    // const [ouvertures, setOuvertures] = useState([... cours.map(() => "ferme")]);

    // useEffect(() => {
    //     setOuvertures(boites.ouvrir(0, cours.map(() => "ferme")))
    // }, [])

    return (
        <article className={"Session " + session}>
            <ul className="liste-cours">
                {cours.map((cours, index) => 
                    <Cours 
                        key={cours.acf.titre}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                        id={"cours" + index}
                    />
                )}
            </ul>

            {/* <a href={"#cours" + (ouvertures.indexOf("ouvert"))} className="prochain-cours" onClick={() => setOuvertures(boites.ouvrir(ouvertures.indexOf("ouvert") + 1, cours.map(() => "ferme")))}>
                <ArrowForwardIosIcon className="Icone"  />
            </a> */}
        </article>
    )
}

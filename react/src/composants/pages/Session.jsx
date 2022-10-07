import './Session.scss';

import {useState, useEffect} from 'react';

import * as gestionOuverture from '../../gestionOuverture';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Cours from './Cours';

export default function Session({cours, enseignants, ouverture}) {
    const [ouvertures, setOuvertures] = useState([... cours.map(() => "ferme")]);

    useEffect(() => {
        setOuvertures(gestionOuverture.ouvrir(0, cours.map(() => "ferme")))
    }, [])

    return (
        <li className={"Session " + ouverture}>
            <ul className="liste-cours">
                {cours.map((cours, index) => 
                    <Cours 
                        key={cours.acf.titre}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                        ouverture={ouvertures[index]}
                    />
                )}
            </ul>
            {console.log(cours.length)}
            <button className="prochain-cours" onClick={() => setOuvertures(gestionOuverture.ouvrir(ouvertures.indexOf("ouvert") + 1, cours.map(() => "ferme")))}>
                <ArrowForwardIosIcon className="Icone"  />
            </button>
        </li>
    )
}

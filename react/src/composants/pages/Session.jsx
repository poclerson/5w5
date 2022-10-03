import './Session.scss';

import {useState, useRef} from 'react';

import Cours from './Cours';

export default function Session({cours, enseignants, session, ouverture}) {
    console.log(ouverture)
    return (
        <li className="Session">
            <ul className={"liste " + ouverture}>
                {cours.map(cours => 
                    <Cours 
                        key={cours.acf.titre}
                        titre={cours.acf.titre}
                        description={cours.acf.description}
                        enseignants={enseignants}
                        enseignantsAttitres={cours.acf.enseignants}
                        domaines={cours.acf.domaines}
                    />
                )}
            </ul>
        </li>
    )
}

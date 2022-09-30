import './Enseignant.scss';

import {useState} from 'react';

import Icone from '../modules/Icone';

export default function Enseignant({nom, description, photo, domaines}) {
    const [ouverture, setOuverture] = useState("ferme");

    return(
        <li className="Enseignant">
            <div className="miniature" onClick={() => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme")}>
                <h2 className="titre">{nom}</h2>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
            </div>
            <div className={"contenu " + ouverture}>
                <p className="desc">{description}</p>
                <ul className="domaines">
                    {domaines.map(domaine => 
                        <li className="domaine" key={domaine}>
                            <Icone type={domaine} />
                        </li>
                    )}
                </ul>
            </div>
        </li>
    )
}
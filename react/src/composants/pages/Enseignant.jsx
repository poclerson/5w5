import './Enseignant.scss';

import {useState} from 'react';

export default function Enseignant({nom, description, photo, domaine}) {
    const [ouverture, setOuverture] = useState("ferme");

    return(
        <li className="Enseignant">
            <div className="miniature" onClick={() => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme")}>
                <h3 className="titre">{nom}</h3>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
                <p className="domaine">{domaine}</p>
            </div>
            <div className={"contenu " + ouverture}>
                <h3 className="titre">{nom}</h3>
                <p className="desc">{description}</p>
                <p className="domaine">{domaine}</p>
            </div>
        </li>
    )
}
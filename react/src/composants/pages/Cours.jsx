import './Cours.scss';

import {useState} from 'react';

import Icone from '../modules/Icone';
import FlecheCarousel from '../modules/FlecheCarousel';
import {Link} from 'react-router-dom';

export default function Cours({titre, description, enseignants: enseignantsAttitres, domaines, tousEnseignants: enseignants, id, ouverture}) {
    return(
        <li className={"Cours " + ouverture} id={id}>
            <h3 className="titre">{titre}</h3>
            <p className="description">{description}</p>
            <ul className="domaines">
                {domaines.map(domaine => 
                    <li className="domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
            <a href={"#cours" + (Number(id.charAt(5)) + 1)}>
                <FlecheCarousel />
            </a>
            {/* <div className="enseignants">
                <h3 className="titre">Enseignants</h3>
                <ul className="liste">
                    {enseignantsAttitres.map(enseignantAttitre => 
                        <li className="item" key={enseignantAttitre} >
                            <Link className="lien">
                                {enseignants.filter(enseignant =>
                                        enseignant.id == enseignantAttitre  
                                ).id}
                            </Link>
                        </li>
                    )}
                </ul>
            </div> */}
        </li>
    )
}
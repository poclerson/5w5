import './Cours.scss';

import Icone from '../modules/Icone';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, domaines, id, ouvert}) {
    return(
        <li className="Cours" id={id} ouvert={ouvert}>
            <ul className="domaines">
                {console.log()}
            </ul>
            <div className="carte">
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
            </div>
            <div className="rond"></div>
        </li>
    )
}
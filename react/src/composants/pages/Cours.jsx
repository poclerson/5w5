import './Cours.scss';

import Icone from '../modules/Icone';

export default function Cours({titre, description, domaines, id, ouverture}) {
    return(
        <li className={"Cours " + ouverture} id={id}>
            <ul className="domaines">
                {domaines.map(domaine => 
                    <li className="domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
            <div className="carte">
                <h3 className="titre">{titre}</h3>
                <p className="description">{description}</p>
            </div>
            <div className="rond"></div>
        </li>
    )
}
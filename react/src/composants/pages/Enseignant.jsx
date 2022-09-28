import './Enseignant.scss';

import Icone from '../modules/Icone';

export default function Enseignant({nom, description, photo, domaines}) {
    return(
        <li className="Enseignant">
            <h2 className="titre">{nom}</h2>
            <img className="photo" src={photo} alt=""/>
            <p className="desc">{description}</p>
            <ul className="domaines">
                {domaines.map(domaine => 
                    <li className="domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
        </li>
    )
}
import './Enseignant.scss';

import Icone from '../modules/Icone';

export default function Enseignant({nom, description, photo, domaines}) {
    return(
        <li className="Enseignant">
            <h2 className="Enseignant__titre">{nom}</h2>
            <img className="Enseignant__photo" src={photo} alt=""/>
            <p className="Enseignant__desc">{description}</p>
            <ul className="Enseignant__domaines">
                {domaines.map(domaine => 
                    <li className="Enseignant__domaines__domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
        </li>
    )
}
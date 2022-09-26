import './Cours.scss';

import Icone from '../modules/Icone';
import {Link} from 'react-router-dom';

export default function Cours({titre, description, enseignants, enseignantsAttitres, domaines, session}) {
    return(
        <li className="Cours">
            <h2 className="Cours__titre">{titre}</h2>
            <p className="Cours__description">{description}</p>
            <ul className="Cours__domaines">
                {domaines.map(domaine => 
                    <li className="Cours__domaines__domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
            <div className="Cours__enseignants">
                <h3 className="Cours__enseignants__titre">Enseignants</h3>
                <ul className="Cours__enseignants__liste">
                    {enseignantsAttitres.map(enseignantAttitre => 
                        <li className="Cours__enseignants__liste__item" key={enseignantAttitre} >
                            <Link className="Cours__enseignants__liste__item__lien">
                                {enseignants.filter(enseignant =>
                                        enseignant.id == enseignantAttitre  
                                )[0].acf.nom}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </li>
    )
}
import './Cours.scss';

import Icone from '../modules/Icone';
import {Link} from 'react-router-dom';

export default function Cours({titre, description, enseignants, enseignantsAttitres, domaines, session}) {
    return(
        <li className="Cours">
            <h2 className="titre">{titre}</h2>
            <p className="description">{description}</p>
            <ul className="domaines">
                {domaines.map(domaine => 
                    <li className="domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
            <div className="enseignants">
                <h3 className="titre">Enseignants</h3>
                <ul className="liste">
                    {enseignantsAttitres.map(enseignantAttitre => 
                        <li className="item" key={enseignantAttitre} >
                            <Link className="lien">
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
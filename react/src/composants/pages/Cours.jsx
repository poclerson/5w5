import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, ouvert}) {
    return(
        <li className="Cours" id={id} ouvert={ouvert}>
            <div className="modele">
                {modele != undefined && 
                    <VisionneurModele 
                        cheminModele={modele}
                        echelle={1.25}
                        position={[0, 0, 0]}
                        rotation={[.2, -.5, 0]}
                    />
                }
            </div>
            <div className="carte">
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
            </div>
            <div className="rond"></div>
        </li>
    )
}
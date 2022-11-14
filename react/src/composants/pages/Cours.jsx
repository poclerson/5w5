import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, ouvert}) {
    return(
        <li className="Cours" id={id} ouvert={ouvert}>
            <div className="carte">
            <div className="modele">
                {modele != undefined && 
                    <VisionneurModele 
                        cheminModele={modele}
                        echelle={.9}
                        position={[0, -1, 0]}
                        rotation={[0, -.5, 0]}
                    />
                }
                </div>
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
            </div>
            <div className="rond"></div>
        </li>
    )
}
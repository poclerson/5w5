import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, index, ouvert}) {
    return(
        <li className="Cours" id={id} index={index} ouvert={ouvert}>
            <div className="carte">
            <div className="modele">
                {modele != undefined && 
                    <VisionneurModele 
                        cheminModele={modele}
                        echelle={.5}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                    />
                }
                </div>
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
                <div className="rond"></div>
            </div>
        </li>
    )
}
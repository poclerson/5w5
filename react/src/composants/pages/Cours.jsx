import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, index, ouvert}) {
    return(
        <li className="Cours" id={id} index={index} ouvert={ouvert}>
            <div className="carte">
            <div className="modele">
                {modele != undefined && modele != false && 
                    <>
                        <VisionneurModele 
                            cheminModele={modele}
                            echelle={.5}
                            position={[0, 0, 3]}
                            rotation={[0, .5, 0]}
                        />
                    </>
                }
                </div>
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
            </div>
            <div className="rond"></div>
        </li>
    )
}
import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

import * as wp from '../../wp-rest-api';

export default function Cours({titre, description, modele, domaine, id, index, ouvert}) {
    /* Positionnement des icônes 3D */
    const positionSelonCours = {
        'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursJEU.glb': {
            position: [0, 0, 1.2],
            rotation: [0, 4.7, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/recherche.glb': {
            position: [0, 0, -4],
            rotation: [0, -1.54, 0]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/12/video_.glb': {
            position: [0, 0.2, -5],
            rotation: [0, 4.7, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursWEB.glb': {
            position: [-1.2, -0.2, 0.8],
            rotation: [-0.05, 4.75, -.05]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/cours3D-1.glb': {
            position: [1.6, 0, 3.5],
            rotation: [0, -0.3, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursDESIGN.glb': {
            position: [-1.8, -0.5, -2.5],
            rotation: [-0.05, 4.5, -0.0]
        }
    };

    return(
        <li className="Cours" id={id} index={index} ouvert={ouvert}>
            <div className="carte">
                <div className="modele">
                    {modele != undefined && !modele && 
                        <VisionneurModele 
                            cheminModele={modele}
                            echelle={.4}
                            position={positionSelonCours[modele] && positionSelonCours[modele].position}
                            rotation={positionSelonCours[modele] && positionSelonCours[modele].rotation}
                        />
                    }
                </div>
                <h4 className="titre">{titre}</h4>
                <h5 className="sous-titre domaine">{wp.versVraisDomaines(domaine)}</h5>
                <p className="description">{description}</p>
            </div>
        </li>
    )
}
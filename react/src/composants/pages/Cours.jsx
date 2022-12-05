import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, index, ouvert}) {
    /* Positionnement des icônes 3D */
    const positionSelonCours = {
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/coursJEU.glb': {
            position: [0, 0, 1.2],
            rotation: [0, 4.7, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/recherche.glb': {
            position: [0, 0, -4],
            rotation: [0, -1.54, 0]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/video_.glb': {
            position: [0, 0.2, -5],
            rotation: [0, 4.7, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/coursWEB.glb': {
            position: [-1.2, -0.2, 0.8],
            rotation: [-0.05, 4.75, -.05]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/cours3D-1.glb': {
            position: [2.5, -.3, 1.9],
            rotation: [0, 4.3, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/coursDESIGN.glb': {
            position: [-0.6, -0.2, -2],
            rotation: [-0.05, 4.5, -0.0]
        }
    };

    return(
        <li className="Cours" id={id} index={index} ouvert={ouvert}>
            <div className="carte">
            <div className="modele">
                {modele != undefined && modele != false && 
                    <VisionneurModele 
                        cheminModele={modele}
                        echelle={.4}
                        position={positionSelonCours[modele] && positionSelonCours[modele].position}
                        rotation={positionSelonCours[modele] && positionSelonCours[modele].rotation}
                    />
                }
                </div>
                <h4 className="titre">{titre}</h4>
                <p className="description">{description}</p>
            </div>
            {/* <div className="rond"></div> */}
        </li>
    )
}
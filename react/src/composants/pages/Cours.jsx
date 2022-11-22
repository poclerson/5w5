import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, index, ouvert}) {
    /* Positionnement des icônes 3D */
    const positionSelonCours = {
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/manetteLambert.glb': {
            position: [0, 0, 2.5],
            rotation: [0, 4.7, 0]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/methodologieRecherche.glb': {
            position: [-3, -3, 1],
            rotation: [-.1, 5, -.05]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/camera-1.glb': {
            position: [8, -5, 6],
            rotation: [0, 2, 0.4]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/web1.glb': {
            position: [-3, -0.2, 2],
            rotation: [0, 4.75, -.05]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/3d-1.glb': {
            position: [2.5, -.3, 1.9],
            rotation: [0, 4.3, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/designCours.glb': {
            position: [-20, 0.7, 10],
            rotation: [0, 2, 0]
        }
    };

    return(
        <li className="Cours" id={id} index={index} ouvert={ouvert}>
            {console.log(positionSelonCours[modele])}
            <div className="carte">
                {console.log(modele)}
            <div className="modele">
                {modele != undefined && modele != false && 
                    <VisionneurModele 
                        cheminModele={modele}
                        echelle={.4}
                        position={positionSelonCours[modele].position}
                        rotation={positionSelonCours[modele].rotation}
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
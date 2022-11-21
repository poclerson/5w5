import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, modele, id, index, ouvert}) {
    /* Positionnement des icônes 3D */
    const positionSelonCours = {
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/manetteLambert.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/methodologieRecherche.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/11/videoCamera.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/web1.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/3d-1.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/11/designCours.glb': {
            position: [0, 3, 1],
            rotation: [0, 1, 2]
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
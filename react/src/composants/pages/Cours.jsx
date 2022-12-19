import './Cours.scss';

import VisionneurModele from '../modules/VisionneurModele';

import parse from 'html-react-parser';

import * as wp from '../../wp-rest-api';

export default function Cours({titre, description, modele, domaine, id, index, ouvert}) {
    /* Positionnement des icônes 3D */
    const positionSelonCours = {
        'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursJEU.glb': {
            position: [0, 0.1, 1.2],
            rotation: [0, 4.7, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/recherche.glb': {
            position: [0.2, 0.2, -4],
            rotation: [0, -1.54, 0]
        },
        
        'https://timm175.sg-host.com/wp-content/uploads/2022/12/video_.glb': {
            position: [-0.3, 0.5, -5],
            rotation: [0, 4.7, 0]
        },

        // 'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursWEB.glb': {
        //     position: [-1.4, 0.1, 0.8],
        //     rotation: [-0.05, 4.75, -.05]
        // },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/WEB.glb': {
            position: [-1.4, 0.1, 0.8],
            rotation: [-0.05, 4.75, -.05]
        },

        // 'https://timm175.sg-host.com/wp-content/uploads/2022/12/cours3D-1.glb': {
        //     position: [1.75, 0.2, 3.5],
        //     rotation: [0, -0.3, 0]
        // },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/CUBE3D.glb': {
            position: [1.75, 0.2, 3.5],
            rotation: [0, -0.3, 0]
        },

        'https://timm175.sg-host.com/wp-content/uploads/2022/12/coursDESIGN.glb': {
            position: [-0.4, 0.5, -3.5],
            rotation: [-9.8, -10, 0.5]
        }
    };

    return(
        <li className={`Cours${domaine ? " " + domaine : ""}`} id={id} index={index} ouvert={ouvert}>
            <div className="carte">
                <div className="modele">
                    {modele && 
                        <VisionneurModele 
                            cheminModele={modele}
                            echelle={.4}
                            position={
                                positionSelonCours[modele] && 
                                positionSelonCours[modele].position
                            }
                            rotation={
                                positionSelonCours[modele] && 
                                positionSelonCours[modele].rotation
                            }
                            tourne={ouvert == 'true'}
                        />
                    }
                </div>
                <h4 className="titre">{titre}</h4>
                <h5 className="sous-titre domaine">{wp.versVraisDomaines(domaine)}</h5>
                <p className="description">{parse(description)}</p>
            </div>
        </li>
    )
}
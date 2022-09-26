import * as wp from '../../wp-rest-api'
import * as u from '../../utilitaires';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';

import './ListeEnseignants.scss';

export default function ListeEnseignants() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');
    const media = wp.useObtenir('/media');

    return(
        enseignants != null ?
        <div className="ListeEnseignants">    
            <h1 className="ListeEnseignants__titre">
                {u.capitaliserPremiereLettre(enseignants[0].type)}
            </h1>

            {
                cours && media != null ?
                <ul className="ListeEnseignants__liste">
                    {enseignants.map(enseignant => 
                        <Enseignant 
                            key={enseignant.acf.nom} 
                            nom={enseignant.acf.nom} 
                            description={enseignant.acf.description}
                            photo={wp.trouverImage(enseignant.acf.photo, media)}
                            domaines={enseignant.acf.domaines}
                            media={media}
                        />
                    )}
                </ul>
                : <Chargement />
            }
        </div>   
        : <Chargement />
    );
}
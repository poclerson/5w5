import * as wp from '../wp-rest-api';
import * as u from '../utilitaires';

import Chargement from './Chargement';
import Cours from './Cours';

export default function ListeCours() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');
    const media = wp.useObtenir('/media');
    return(
        cours != null ?
        <div className="ListeCours">
            <h1 className="ListeCours__titre">
                {u.capitaliserPremiereLettre(cours[0].type)}
            </h1>

            {
                enseignants && media != null ? 
                <ul className="ListeCours__liste">
                    {cours.map(_cours => 
                        <Cours
                            key={_cours.id} 
                            titre={_cours.acf.titre} 
                            description={_cours.acf.description}
                            enseignantsAttitres={_cours.acf.enseignants}
                            enseignants={enseignants}
                            domaines={_cours.acf.domaines}
                            session={_cours.acf.session}
                        />
                    )}
                </ul>
                : <Chargement />
            }
        </div>
        : <Chargement />
    )
}
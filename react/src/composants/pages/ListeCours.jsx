import './ListeCours.scss';

import * as wp from '../../wp-rest-api';
import * as u from '../../utilitaires';

import Chargement from '../modules/Chargement';
import Cours from './Cours';

export default function ListeCours() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');
    const media = wp.useObtenir('/media');
    return(
        cours != null ?
        <section className="ListeCours">
            <h1 className="titre">
                {u.capitaliserPremiereLettre(cours[0].type)}
            </h1>

            {
                enseignants && media != null ? 
                <ul className="liste">
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
        </section>
        : <Chargement />
    )
}
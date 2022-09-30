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
                    {
                        cours.sort((sessionPrecedente, sessionSuivante) => 
                            (sessionPrecedente.acf.session > sessionSuivante.acf.session) ? 1 : -1
                        ).map(cours => 
                            <Cours
                                key={cours.id} 
                                titre={cours.acf.titre} 
                                description={cours.acf.description}
                                enseignantsAttitres={cours.acf.enseignants}
                                enseignants={enseignants}
                                domaines={cours.acf.domaines}
                                session={cours.acf.session}
                            />
                        )
                    }
                </ul>
                : <Chargement />
            }
        </section>
        : <Chargement />
    )
}
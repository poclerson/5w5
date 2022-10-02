import './ListeCours.scss';

import * as wp from '../../wp-rest-api';
import * as u from '../../utilitaires';

import Chargement from '../modules/Chargement';
import Session from './Session';
import Cours from './Cours';

export default function ListeCours() {
    const enseignants = wp.useObtenir('/enseignants');
    const cours = wp.useObtenir('/cours');
    const media = wp.useObtenir('/media');

    // TODO : Créer un component session d'après chaque session
    // Chaque session pourra individuellement gérer les cours auxquels elle rapporte,
    // À la place de tout gérer dans ListeCours
    return(
        cours != null ?
        <section className="ListeCours">
            <h1 className="titre">
                {u.capitaliserPremiereLettre(cours[0].type)}
            </h1>

            {
                enseignants && media != null ? 
                <ul className="sessions">
                    {
                        [... new Set(cours.map(_cours => _cours.acf.session))].map(session => 
                            <Session 
                                key={session} 
                                cours={cours.filter(_cours =>
                                    _cours.acf.session == session
                                )} 
                                enseignants={enseignants}
                                session={session}
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
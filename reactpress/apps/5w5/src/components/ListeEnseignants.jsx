import Enseignant from './Enseignant';
import Chargement from './Chargement';

import obtenir from '../wp-rest-api'
import * as utilitaires from '../utilitaires';

import {useEffect} from 'react';

export default function ListeEnseignants({enseignants, setEnseignants, media, setMedia, cours, setCours}) {

    useEffect(() => {
        obtenir('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/media').then(
            reponse => setMedia(reponse)
        )
    }, [])

    useEffect(() => {
        obtenir('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignants').then(
            reponse => setEnseignants(reponse)
        )
    }, []);

    useEffect(() => {
        obtenir('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/cours').then(
            reponse => setCours(reponse)
        )
    }, []);

    return(
        enseignants && media && cours != null ?
        <ul className="ListeEnseignants">
            <h1 className="ListeEnseignants__titre">{utilitaires.capitaliserPremiereLettre(enseignants[0].type)}</h1>
            {enseignants.map(enseignant => 
                <Enseignant 
                    key={enseignant.acf.nom} 
                    nom={enseignant.acf.nom} 
                    description={enseignant.acf.description}

                    /**
                     * Filter les média dans enseignants.map() afin de faire correspondre l'id de la photo récupéré dans l'ACF
                     * à l'ID du medium dans la liste des médias de WP
                     */
                    photo={media.filter(medium =>
                        medium.id == enseignant.acf.photo
                    )[0].guid.rendered}

                    /**
                     * Lister les IDs de tous les cours qu'enseigne le professeur,
                     * puisque c'est la seule donnée retournée par WP
                     */

                    coursEnseignes={cours.filter(cours =>
                        cours.id == enseignant.acf.coursEnseignes
                    )}
                />
            )}
        </ul>
        
        :
        <Chargement />
    )
}
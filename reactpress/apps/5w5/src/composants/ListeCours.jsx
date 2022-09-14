import obtenir from '../wp-rest-api';
import * as utilitaires from '../utilitaires';

import {useEffect} from 'react';

import Chargement from './Chargement';

import Cours from './Cours';

export default function ListeCours({enseignants, setEnseignants, cours, setCours, media, setMedia}) {
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
        enseignants && cours && media != null ?
        <div className="ListeCours">
            <h1 className="ListeCours__titre">{utilitaires.capitaliserPremiereLettre(cours[0].type)}</h1>

            <ul className="ListeCours__liste">
                {cours.map(cours => 
                    <Cours
                        key={cours.id} 
                        titre={cours.acf.titre} 
                        description={cours.acf.description}
                    />
                )}
            </ul>
        </div>
        :
        <Chargement />
    )
}
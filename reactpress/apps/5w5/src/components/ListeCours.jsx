import obtenir from '../wp-rest-api';

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
        <ul className="ListeCours">
            <h1 className="ListeCours__titre">Cours</h1>
            {cours.map(cours => 
                <Cours
                    key={cours.id} 
                    titre={cours.acf.titre} 
                    description={cours.acf.description}
                />
            )}
        </ul>
        :
        <Chargement />
    )
}
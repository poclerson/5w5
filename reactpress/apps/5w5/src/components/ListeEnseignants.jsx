import Enseignant from './Enseignant';
import Chargement from './Chargement';
import obtenirArticles from '../obtenirArticles'
import {useState, useEffect} from 'react';

export default function ListeEnseignants(enseignants, setEnseignants, media, setMedia, cours, setCours) {
    return(
        enseignants && media != null ?
        <ul className="ListeEnseignants">
            {enseignants.map(enseignant => 
                <Enseignant 
                    key={enseignant.id} 
                    nom={enseignant.acf.nom} 
                    description={enseignant.acf.description}
                    photo={media.filter(medium =>
                        medium.id == enseignant.acf.photo
                    )[0].guid.rendered}
                    coursEnseignes={enseignant.acf.coursEnseignes.filter(coursEnseigne => 
                        coursEnseigne == cours.map(cours => cours.id)    
                    )}
                />
            )}
        </ul>
        
        :
        <Chargement />
    )
}
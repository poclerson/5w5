import Enseignant from './Enseignant';
import useFetch from './useFetch';
import {useState, useEffect} from 'react';

export default function ListeEnseignants() {
    const enseignants = useFetch('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignant');

    return(
        enseignants != null ?
        <section className="ListeEnseignants">
            {enseignants.map(enseignant => 
                <Enseignant key={enseignant.id} {...enseignant.acf}></Enseignant>
            )}
        </section>
        
        :
        <div>Chargement</div>
    )
}
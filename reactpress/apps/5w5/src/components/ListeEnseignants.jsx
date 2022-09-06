import Enseignant from './Enseignant';
import Chargement from './Chargement';
import useFetch from '../useFetch';
import {useState, useEffect} from 'react';

export default function ListeEnseignants() {
    const [estCharge, setEstCharge] = useState(false);
    
    const enseignants = useFetch('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignant').then(
        reponse => reponse != null ? setEstCharge(true) : setEstCharge(false)
    )

    return(
        estCharge ?
        <section className="ListeEnseignants">
            {enseignants.map(enseignant => 
                <Enseignant key={enseignant.id} {...enseignant.acf}></Enseignant>
            )}
        </section>
        
        :
        <Chargement />
    )
}
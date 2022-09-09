import Enseignant from './Enseignant';
import Chargement from './Chargement';
import obtenirArticles from '../obtenirArticles'
import {useState, useEffect} from 'react';

export default function ListeEnseignants() {

    const [enseignants, setEnseignants] = useState(null);

    // Récuperer les données
    useEffect(() => {
        obtenirArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignants').then(
            reponse => setEnseignants(reponse)
        )
    }, []);

    return(
        enseignants != null ?
        <ul className="ListeEnseignants">
            {enseignants.map(enseignant => 
                <Enseignant key={enseignant.id} {...enseignant.acf}></Enseignant>
            )}
        </ul>
        
        :
        <Chargement />
    )
}
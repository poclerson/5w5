import Enseignant from './Enseignant';
import Chargement from './Chargement';
import chargerArticles from '../chargerArticles'
import {useState, useEffect} from 'react';

export default function ListeEnseignants() {

    const [enseignants, setEnseignants] = useState(null);

    useEffect(() => {
        chargerArticles('http://localhost:8888/5w5/wordpress/wp-json/wp/v2/enseignant').then(
            reponse => setEnseignants(reponse)
        )

    }, []);

    return(
        enseignants != null ?
        <section className="ListeEnseignants">
            {enseignants.map(enseignant => 
                <Enseignant key={enseignant.id} {...enseignant.acf}></Enseignant>
            )}
        </section>
        
        :
        <Chargement />
    )
}
import './ListeEnseignants.scss';

import useObtenir from '../../hooks/useObtenir';
import {useState} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';

export default function ListeEnseignants() {
    const enseignants = useObtenir('/enseignants', 'bre');
    const [listeOuverte, setListeOuverte] = useState('ouvert');

    const gestionClicListe = () => {
        setListeOuverte(listeOuverte == 'ouvert' ? 'ferme' : 'ouvert');
    }

    return(
        enseignants != null ?
            <section className="ListeEnseignants">    
                <h1 className="titre">nos enseignants.</h1>

                <ul className={"liste " + listeOuverte}>
                    {enseignants.map(enseignant => 
                        <Enseignant 
                            {... enseignant.acf}
                            key={enseignant.id} 
                            gestionClicListe={gestionClicListe}
                        />
                    )}
                </ul>
            </section>   
        : <Chargement />
    );
}
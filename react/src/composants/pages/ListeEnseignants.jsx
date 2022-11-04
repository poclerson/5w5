import './ListeEnseignants.scss';

import useObtenir from '../../hooks/useObtenir';
import {useState} from 'react';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import Suivant from '../modules/Suivant';

export default function ListeEnseignants({titre}) {
    const enseignants = useObtenir('/enseignants', 'bre');
    const [indexOuvert, setIndexOuvert] = useState(-1);

    // Quand on clique sur le bouton suivant (ordinateur seulement)
    const gestionClicSuivant = () => {
        if (indexOuvert + 1 == enseignants.length) {
            setIndexOuvert(0);
            return;
        }

        setIndexOuvert(indexOuvert + 1);
    }

    return(
        enseignants != null ?
            <section className="ListeEnseignants" enseignant-ouvert={indexOuvert != -1 ? "true" : "false"} >
                <h1 className="titre">nos <br/> enseignants.</h1>
                <ul className="liste">
                    {
                        enseignants.map((enseignant, index) => 
                            <Enseignant 
                                ouvert={index == indexOuvert ? "true" : "false"}
                                {... enseignant.acf}
                                key={enseignant.id} 
                                index={index}
                                setIndexOuvert={setIndexOuvert}
                            />
                        ) 
                    }
                </ul>
                <Suivant gestionClic={gestionClicSuivant} />
            </section>  
        : <Chargement />
    );
}
import './ListeEnseignants.scss';

import useObtenir from '../../hooks/useObtenir';
import {useState, useEffect} from 'react';
import * as boites from '../../boites';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';

export default function ListeEnseignants() {
    const enseignants = useObtenir('/enseignants', 'bre');
    const [listeOuverte, setListeOuverte] = useState('ouvert');
    const [ouvertures, setOuvertures] = useState(null);

    // Initialiser les états d'ouverture
    useEffect(() => {
        if (enseignants != null) {
            setOuvertures(enseignants.map(() => 'ferme'))
        }
    }, [enseignants])
    

    const gestionClicListe = (index, ouverture) => {
        // S'il était fermé, on ouvre
        if (ouverture == 'ferme')
            setOuvertures(boites.ouvrir(index, enseignants.map(() => 'ferme')))

        // Sinon on ferme
        else
            setOuvertures(enseignants.map(() => 'ferme'))

        // Ouvrir ou fermer la liste
        setListeOuverte(listeOuverte == 'ouvert' ? 'ferme' : 'ouvert');
    }

    return(
        enseignants != null ?
            <section className="ListeEnseignants">    
                <h1 className={"titre " + listeOuverte}>nos enseignants.</h1>

                <ul className={"liste " + listeOuverte}>
                    {
                        // Vérifier l'existence d'ouvertures
                        ouvertures != null ?

                            // Vérifier qu'au moins une boite est ouverte
                            ouvertures.indexOf('ouvert') != -1 ? 

                                // Si c'est le cas, afficher toutes les boites après celle qui l'est
                                enseignants.map((enseignant, index) => {
                                    if (index > ouvertures.indexOf('ouvert') - 1) {
                                        return <Enseignant 
                                            {... enseignant.acf}
                                            key={enseignant.id} 
                                            gestionClicListe={gestionClicListe}
                                            index={index}
                                            ouverture={ouvertures[index]}
                                        />
                                    }
                                }) 

                                // Sinon 
                                : enseignants.map((enseignant, index) => 
                                    <Enseignant 
                                        {... enseignant.acf}
                                        key={enseignant.id} 
                                        gestionClicListe={gestionClicListe}
                                        index={index}
                                        ouverture={ouvertures[index]}
                                    />
                                )
                        : <Chargement />
                    }
                </ul>
            </section>   
        : <Chargement />
    );
}
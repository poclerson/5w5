import './ListeProjets.scss';

import useObtenir from '../../hooks/useObtenir';
import * as boites from '../../boites';
import {useState, useEffect} from 'react';

import Projet from './Projet';
import Chargement from '../modules/Chargement';

export default function ListeProjets() {
    const projets = useObtenir('/projets', 'bre');
    const photosEnvironnement = useObtenir('/environnement', 'bre');

    const [listeOuverte, setListeOuverte] = useState('ouvert');
    const [ouvertures, setOuvertures] = useState(null);
    
    const gestionClicListe = (index, ouverture) => {
        // S'il était fermé, on ouvre
        if (ouverture == 'ferme')
            setOuvertures(boites.ouvrir(index, projets.map(() => 'ferme')))

        // Sinon on ferme
        else 
            setOuvertures(projets.map(() => 'ferme'))
    }

    // Initialiser les états d'ouverture
    useEffect(() => {
        if (projets != null) {
            setOuvertures(projets.map(() => 'ferme'))
        }
    }, [projets])

    useEffect(() => {
        if (ouvertures) {
            // S'il y a une boite ouverte, on doit mettre l'état d'ouverture de la liste à fermé
            ouvertures.includes('ouvert') ?

            setListeOuverte('ferme') : setListeOuverte('ouvert');
        }
    }, [ouvertures])

    const rendreCases = () => {
        let index = 0;

        return [...projets, ...photosEnvironnement].shuffle().map((projet => {
            if (projet.acf.hasOwnProperty('nom')) {
                let composant = <Projet 
                    key={projet.id}
                    {... projet.acf}
                    ouverture={ouvertures[index]}
                    index={index}
                    gestionClicListe={gestionClicListe}
                />
                index++;
                return composant;
            }

            else {
                return <li key={projet.id} className="case photo-environnement">
                    <div className="miniature">
                        <img src={projet.acf.photo} alt="" className="image-presentation"/>
                    </div>
                </li>
            }
        }))
    }

    return(
        projets != null && photosEnvironnement != null ?
            <section className="ListeProjets">
                <ul className={"liste " + listeOuverte}>
                    {ouvertures != null ?
                        <> 
                            <h1 className={"titre " + listeOuverte}>galerie <br/> étudiante.</h1>
                            {rendreCases()}
                        </>
                        : <Chargement />
                    }
                </ul>
            </section> : <Chargement />
    )
}
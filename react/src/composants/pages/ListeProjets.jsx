import './ListeProjets';

import useObtenir from '../../hooks/useObtenir';
import * as boites from '../../boites';
import {useState, useEffect} from 'react';

import Projet from './Projet';
import Chargement from '../modules/Chargement';

export default function ListeProjets() {
    const projets = useObtenir('/projets', 'bre');

    const [ouvertures, setOuvertures] = useState(null);

    useEffect(() => {
        if (projets != null)
            setOuvertures(projets.map(() => 'ferme'))
    }, [projets])
    
    return(
        projets != null ?
            <section className="ListeProjets">
                <h1 className="titre">galerie étudiante</h1>
                <ul className="liste">
                    {ouvertures != null ?
                        projets.map(((projet, index) => 
                            <Projet 
                                key={projet.id}
                                {... projet.acf}
                                ouverture={ouvertures[index]}
                                index={index}
                            />
                        )) : <Chargement />
                    }
                </ul>
            </section> : <Chargement />
    )
}
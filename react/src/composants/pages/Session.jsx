import './Session.scss';

import {useRef, useState, useEffect} from 'react';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

import Cours from './Cours';
import FlecheCarousel from '../modules/FlecheCarousel';

export default function Session({
    cours, 
    session, 
    index, 
    verifierOuverture, 
    refTitres, 
    refListeCoursSessionOuverte,
    defilerVersCours
}) {
    const refListeCours = useRef();
    const [indexPlusAGauche, setIndexPlusAGauche] = useState(0);

    const [enfants, setEnfants] = useState([]);

    const tablette = useMediaQuery(medias.tablette);
    const ordinateur = useMediaQuery(medias.ordinateur);

    const surClicSuivant = () => {
        // Trouver le cours le plus à gauche qui est encore dans la fenêtre
        const plusAGauche = enfants.obtenirElementPlusAGauche(refTitres.current.offsetWidth / 2);
        defilerVersCours(enfants[enfants.indexOf(plusAGauche) + 1])
    }

    const surDefilement = () => {
        setIndexPlusAGauche(enfants.indexOf(enfants.obtenirElementPlusAGauche(
            ordinateur ? 
                refTitres.current.offsetWidth / 2 : 
            tablette ? 
                -100 : 
                -50
        )));
    }

    useEffect(() => {
        if (refListeCoursSessionOuverte != false)
        setEnfants(Array.from(refListeCoursSessionOuverte.current.children))
    }, [refListeCoursSessionOuverte])

    return (
        <article 
            className="Session" 
            id={session} 
            index={index}
            ouvert={verifierOuverture(index)} 
            onScroll={surDefilement}
        >
            <ul 
                className="liste-cours" 
                ref={refListeCoursSessionOuverte != false ? refListeCoursSessionOuverte : refListeCours} 
                onScroll={surDefilement}
            >
                {cours.map((cours, index) => 
                    <Cours 
                        ouvert={index == indexPlusAGauche ? 'true' : 'false'}
                        key={cours.id}
                        id={cours.id}
                        index={index}
                        {...cours.acf}
                    />
                )}
            </ul>
            <div className="degrade">
                <FlecheCarousel gestionClic={surClicSuivant} />
            </div>  
        </article>
    )
}

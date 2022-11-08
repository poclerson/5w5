import './Session.scss';

import {useRef, useState, useEffect} from 'react';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

import Cours from './Cours';
import FlecheCarousel from '../modules/FlecheCarousel';

export default function Session({cours, session, index, pageRef, verifierOuverture, refTitres}) {
    // Liste des cours
    const listeCoursRef = useRef(null);

    const [indexPlusAGauche, setIndexPlusAGauche] = useState(0);

    const [enfants, setEnfants] = useState([]);

    const tablette = useMediaQuery(medias.tablette);
    const ordinateur = useMediaQuery(medias.ordinateur);

    /**
     * Trouve l'élément le plus à gauche dans un tableau d'éléments
     * @param {Number} decalage Décalage par rapport au rebord gauche de la fenêtre
     * @returns {Element} Élément le plus à gauche
     */
    function obtenirPlusAGauche(decalage) {
        return enfants.reduce((precedent, present) => {
            return precedent.getBoundingClientRect().x < present.getBoundingClientRect().x && 
                precedent.getBoundingClientRect().x > decalage ? 
                precedent : present
        })
    }

    const surClicSuivant = () => {
        // Trouver le cours le plus à gauche qui est encore dans la fenêtre
        const plusAGauche = obtenirPlusAGauche(refTitres.current.offsetWidth / 2)
        const index = enfants.indexOf(plusAGauche) + 1;
        
        enfants[index].scrollIntoView({block: 'nearest', inline: 'start'});
    }

    const surDefilement = () => {
        setIndexPlusAGauche(enfants.indexOf(obtenirPlusAGauche(
            ordinateur ? refTitres.current.offsetWidth / 2 : 
                tablette ? -200 : -50
        )));
    }

    useEffect(() => {
        if (listeCoursRef != null)
        setEnfants(Array.from(listeCoursRef.current.children))
    }, [listeCoursRef])

    return (
        <article className={"Session " + session} ouvert={verifierOuverture(index)} onScroll={surDefilement}>
            <ul className="liste-cours" ref={listeCoursRef} onScroll={surDefilement}>
                {cours.map((cours, index) => 
                    <Cours 
                        ouvert={index == indexPlusAGauche ? 'true' : 'false'}
                        key={cours.id}
                        id={cours.id}
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

import './Session.scss';

import {useRef} from 'react';

import Cours from './Cours';
import FlecheCarousel from '../modules/FlecheCarousel';

export default function Session({cours, session, index, pageRef, verifierOuverture, refTitres}) {
    // Liste des cours
    const listeCoursRef = useRef(null);

    const surClicSuivant = () => {
        // Tous les cours de la session
        const enfants = Array.from(listeCoursRef.current.children);

        // Trouver le cours le plus à gauche qui est encore dans la fenêtre
        const plusAGauche = enfants.reduce((precedent, present) => {
            return precedent.getBoundingClientRect().x < present.getBoundingClientRect().x && 
                precedent.getBoundingClientRect().x > refTitres.current.offsetWidth / 2 ? 
                precedent : present
        })
        const index = enfants.indexOf(plusAGauche) + 1;
        
        enfants[index].scrollIntoView({block: 'nearest', inline: 'start'});
    }

    return (
        <article className={"Session " + session} ouvert={verifierOuverture(index)}>
            <ul className="liste-cours" ref={listeCoursRef}>
                {cours.map((cours, index) => 
                    <Cours 
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

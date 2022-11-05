import './Session.scss';

import {useState, useEffect, useRef} from 'react';
import useDefilementHorizontal from '../../hooks/useDefilementHorizontal';

import Cours from './Cours';

export default function Session({cours, session, index, pageRef, verifierOuverture}) {
    // Liste des cours
    const listeCoursRef = useRef(null);

    // Un cours
    const coursRef = useRef(null);

    const gestionDefilement = () => {
        // Obtenir le cours le plus à gauche pour le rendre plus gros
        // Array.from(listeCoursRef.current.children).forEach((enfant, index) => {
        //     if (enfant.getBoundingClientRect().x > 0 && enfant.getBoundingClientRect().x < window.innerWidth / 2) {
        //         setOuvertures(boites.ouvrir(index, coursInfinis.map(() => 'ferme')));
        //         return;
        //     }
        // })
    }

    return (
        <article className={"Session " + session} ouvert={verifierOuverture(index)}>
            <ul className="liste-cours" onScroll={gestionDefilement} ref={listeCoursRef}>
                {cours.map((cours, index) => 
                    <Cours 
                        key={cours.acf.titre + index}
                        {... cours.acf}
                        innerRef={coursRef}
                    />
                )}
            </ul>
            {/* Pour l'utilisation de la barre de défilement */}
            {/* {listeCoursRef.current != null ?
                <BarreDefilement largeurTotale={largeurDefilement} elementScroll={listeCoursRef.current} />
                :
                <Chargement />
            } */}
            {/* <a href={"#cours" + (ouvertures.indexOf("ouvert"))} className="prochain-cours" onClick={() => setOuvertures(boites.ouvrir(ouvertures.indexOf("ouvert") + 1, cours.map(() => "ferme")))}>
                <ArrowForwardIosIcon className="Icone"  />
            </a> */}
            {/* <FlecheCarousel gestionClic={gestionClicFleche} /> */}
        </article>
    )
}

import './Session.scss';

import {useState, useEffect, useRef} from 'react';
import useDefilmentInfini from '../../hooks/useDefilementInfini';
import useDefilementHorizontal from '../../hooks/useDefilementHorizontal';
import * as boites from '../../boites';

import Cours from './Cours';

export default function Session({cours, enseignants, session, pageRef}) {
    const [ouvertures, setOuvertures] = useState(cours.map(() => 'ferme'));

    // Liste des cours
    const listeCoursRef = useRef(null);

    // Un cours
    const coursRef = useRef(null);

    const [estArrive, setEstArrive] = useDefilmentInfini(ajouterDonnees, listeCoursRef);
    useDefilementHorizontal(pageRef.current, listeCoursRef.current, 6);
    const [coursInfinis, setCoursInfinis] = useState(cours);

    const gestionDefilement = () => {
        // Obtenir le cours le plus à gauche pour le rendre plus gros
        // Array.from(listeCoursRef.current.children).forEach((enfant, index) => {
        //     if (enfant.getBoundingClientRect().x > 0 && enfant.getBoundingClientRect().x < window.innerWidth / 2) {
        //         setOuvertures(boites.ouvrir(index, coursInfinis.map(() => 'ferme')));
        //         return;
        //     }
        // })
    }

    function ajouterDonnees() {
        setCoursInfinis([...coursInfinis, ...cours])
        setEstArrive(false);
    }

    useEffect(() => {
        setOuvertures(boites.ouvrir(0, coursInfinis.map(() => 'ferme')));
    }, [])

    useEffect(() => {
        setOuvertures(boites.ouvrir(boites.obtenirOuverte(ouvertures), coursInfinis.map(() => 'ferme')))
    }, [coursInfinis])

    return (
        <article className={"Session " + session}>
            <ul className="liste-cours" onScroll={gestionDefilement} ref={listeCoursRef}>
                {coursInfinis.map((cours, index) => 
                    <Cours 
                        key={cours.acf.titre + index}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                        id={"cours" + index}
                        ouverture={ouvertures[index]}
                        innerRef={coursRef}
                    />
                )}
            </ul>
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

import './Session.scss';

import {useState, useEffect, useRef, useLayoutEffect} from 'react';
import useDefilmentInfini from '../../hooks/useDefilementInfini';
import * as boites from '../../boites';

import Cours from './Cours';
import FlecheCarousel from '../modules/FlecheCarousel';
import BarreDefilement from '../modules/BarreDefilement';
import Chargement from '../modules/Chargement';

export default function Session({cours, enseignants, session}) {
    const [ouvertures, setOuvertures] = useState(cours.map(() => 'ferme'));

    const sessionRef = useRef(null);
    const coursRef = useRef(null);
    const [estArrive, setEstArrive] = useDefilmentInfini(ajouterDonnees, sessionRef);
    const [coursInfinis, setCoursInfinis] = useState(cours);

    const gestionDefilement = () => {
        Array.from(sessionRef.current.children).forEach((enfant, index) => {
            if (enfant.getBoundingClientRect().x > 0 && enfant.getBoundingClientRect().x < window.innerWidth / 2) {
                setOuvertures(boites.ouvrir(index, coursInfinis.map(() => 'ferme')))
            }
        })
    }

    function ajouterDonnees() {
        setCoursInfinis([...coursInfinis, ...cours])
        setEstArrive(false);
    }

    useEffect(() => {
        setOuvertures(boites.ouvrir(0, coursInfinis.map(() => 'ferme')))
    }, [])

    useEffect(() => {
        setOuvertures(boites.ouvrir(boites.obtenirOuverte(ouvertures), coursInfinis.map(() => 'ferme')))
    }, [coursInfinis])

    return (
        <article className={"Session " + session}>
            <ul className="liste-cours" onScroll={gestionDefilement} ref={sessionRef} >
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
            {/* {sessionRef.current != null ?
                <BarreDefilement largeurTotale={largeurDefilement} elementScroll={sessionRef.current} />
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

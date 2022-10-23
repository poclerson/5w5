import './ListeSessions.scss';

import Session from './Session';
import FlecheDefilement from '../modules/FlecheCarousel';

import {useState, useEffect} from 'react';

import * as boites from '../../boites';
import * as u from '../../utilitaires';

import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function ListeSessions({sessions, cours, enseignants, degrades}) {
    // Gestion de l'ouverture de chaque session
    const [ouvertures, setOuvertures] = useState(boites.ouvrir(0, sessions.map(() => "ferme")));

    // Données permettant au carousel d'être dynamique
    const donneesCarousel = {
        petit: {
            rayonRond: 150,
            rayonCarousel: 600,
            decalageGauche: 75,
            decalageHaut: 100,
            decalageAngle: 0
        },

        moyen: {
            rayonRond: 150,
            rayonCarousel: 600,
            decalageGauche: 75,
            decalageHaut: 200,
            decalageAngle: 0
        },

        grand: {
            rayonRond: 200,
            rayonCarousel: 500,
            decalageGauche: -500,
            decalageHaut: 900,
            decalageAngle: 90
        }
    }

    const tailleOrdinateur = useMediaQuery(medias.ordinateur);
    const tailleTablette = useMediaQuery(medias.tablette);

    // Par défaut, utiliser la taille mobile
    const [carousel, setCarousel] = useState(donneesCarousel.petit);

    // État de rotation du carousel rond des titres de session
    const [rotation, setRotation] = useState(0);

    // Active certains styles uniquement aux bons moments. Change d'état dans onAnimationEnd des titres de session
    const [transition, setTransition] = useState(1);

    // Conserve l'état du dégradé correspondant à la session sur laquelle on se trouve. 
    // Permet de transitionner en changeant l'opacité vers la prochaine image de dégradé
    const [degradePresent, setDegradePresent] = useState(null);

    const stylesDegrades = {
        section: {backgroundImage: `url(${obtenirDegrade(boites.obtenirOuverte(ouvertures))})`},
        prochaineSection: {backgroundImage: `url(${degradePresent})`}
    }

    // Est activé quand on clique sur un bouton qui fait changer de session
    function gestionProchaineSession(index) {
        if (index != boites.obtenirOuverte(ouvertures)) {
            setOuvertures(boites.ouvrir(index, sessions.map(() => "ferme")))

            // Ouvrir selon l'index donné
            if (tailleOrdinateur)
                setRotation(-(360 * index / ouvertures.length))
            
            // Simplement ouvrir le prochain. Permet une rotation constante (ne brise pas à chaque cycle)
            else
                setRotation(rotation - (360 / ouvertures.length))

            setTransition(1)
        }
    }

    // Place en cercle dynamiquement les titres de sessions pour permettre une bonne transition
    function placerEnCercle(index) {
        return {
            top: carousel.rayonCarousel + -carousel.rayonCarousel * Math.cos((360 / ouvertures.length / 180) * (index) * Math.PI) + 'px',
            left: carousel.rayonCarousel + carousel.rayonCarousel * Math.sin((360 / ouvertures.length / 180) * (index) * Math.PI) + 'px',
            width: carousel.rayonRond * 2,
            height: carousel.rayonRond * 2,
            transform: `rotate(${-rotation - carousel.decalageAngle}deg)`,
            backgroundImage: `url(${obtenirDegrade(boites.obtenirOuverte(ouvertures))})`
        }
    }

    // Retourne l'url du dégradé d'après un index
    function obtenirDegrade(index) {
        return degrades.find(degrade => {
            if (degrade.acf.session.charAt(7) == index + 1 + "") {
                return degrade;
            }
        }).acf.degrade
    }

    function gestionStylePlacement() {
        // Si on est sur ordinateur, la position du carousel des titres doit être relative au haut de la page
        if (tailleOrdinateur) {
            return {
                top: -carousel.rayonCarousel * 2 - carousel.rayonRond + carousel.decalageHaut,
                left: -carousel.rayonCarousel - carousel.rayonRond + carousel.decalageGauche,
                width: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                height: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                transform: `rotate(${rotation + carousel.decalageAngle}deg)`
            }
        }

        return {
            bottom: -carousel.rayonCarousel * 2 - carousel.rayonRond + carousel.decalageHaut,
            left: -carousel.rayonCarousel - carousel.rayonRond + carousel.decalageGauche,
            width: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
            height: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
            transform: `rotate(${rotation + carousel.decalageAngle}deg)`
        }
    }

    const actualiserDegrade = () => {
        setDegradePresent(obtenirDegrade(boites.obtenirOuverte(ouvertures)));
    }

    useEffect(() => {
        setDegradePresent(obtenirDegrade(boites.obtenirOuverte(ouvertures)));
    }, []);

    // Horrible, à retravailler
    useEffect(() => {
        if (tailleTablette) 
            setCarousel(donneesCarousel.moyen)

        else if (tailleOrdinateur)
            setCarousel(donneesCarousel.grand)

        else
            setCarousel(donneesCarousel.petit)
    }, [tailleOrdinateur, tailleTablette]) 

    return (
        <div 
            className="ListeSessions" 
            transition={transition} 
            style={stylesDegrades.section}
        >
            <div className="destination" onAnimationEnd={actualiserDegrade} style={stylesDegrades.prochaineSection}></div>
            <ol className="sessions-titres">
                {sessions.map((session, index) => {
                    if (ouvertures[index] == "ferme") {
                        return <li className={"session-titre " + ouvertures[index]} key={"titre" + session} onClick={() => gestionProchaineSession(index)}>
                            <h3 className="sous-titre">{u.inserer(session, 7, " ")}</h3>
                        </li>
                    }
                })}
            </ol>
            {
                sessions.map((session, index) => {
                    if (ouvertures[index] == "ouvert") {
                        return <Session 
                            key={session}   
                            cours={cours.filter(_cours =>
                                _cours.acf.session == session
                            )} 
                            enseignants={enseignants}
                            session={session}
                        />
                    }
                })
            }
            <div className="sessions-ronds">
                {/* Placement sert à correctement placer le carousel rond sans fucker le layout */}
                <ol className="carousel" style={gestionStylePlacement()}>
                    
                        
                    {sessions.map((session, index) => 
                        <li className={`session-rond ${ouvertures[index]} ${session}`} key={"rond" + session} style={placerEnCercle(index)}>
                            <div className="destination" style={stylesDegrades.prochaineSection}></div>
                            <h2 
                                className="titre" 
                                onAnimationEnd={() => setTransition(0)} 
                                transition={transition}
                            >
                                    {session.charAt(7)}
                            </h2>
                            {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                            <FlecheDefilement gestionClic={() => gestionProchaineSession(index + 1)} />
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

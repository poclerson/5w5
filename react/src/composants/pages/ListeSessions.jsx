import './ListeSessions.scss';

import Session from './Session';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import {useState, useEffect} from 'react';

import * as boites from '../../boites';
import * as u from '../../utilitaires';

import medias from '../../medias';
import useMediaQuery from '../../useMediaQuery';

export default function ListeSessions({sessions, cours, enseignants, degrades}) {
    const donneesCarousel = {
        petit: {
            rayonRond: 150,
            rayonCarousel: 600,
            decalageGauche: 75,
            decalageHaut: 100,
            decalageAngle: 0
        },

        grand: {
            rayonRond: 200,
            rayonCarousel: 500,
            decalageGauche: -500,
            decalageHaut: 1300,
            decalageAngle: 90
        }
    }

    // Gestion de l'ouverture de chaque session
    const [ouvertures, setOuvertures] = useState(boites.ouvrir(0, sessions.map(() => "ferme")));

    const tailleOrdinateur = useMediaQuery(medias.ordinateur);

    const [carousel, setCarousel] = useState(donneesCarousel.petit);

    // État de rotation du carousel rond des titres de session
    const [rotation, setRotation] = useState(0);

    // Active certains styles uniquement aux bons moments. Change d'état dans onAnimationEnd des titres de session
    const [transition, setTransition] = useState(1);

    // Conserve l'état du dégradé correspondant à la session sur laquelle on se trouve. 
    // Permet de transitionner en changeant l'opacité vers la prochaine image de dégradé
    const [degradePresent, setDegradePresent] = useState(null);

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
            transform: `rotate(${-rotation - carousel.decalageAngle}deg)`
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

    const actualiserDegrade = () => {
        setDegradePresent(obtenirDegrade(boites.obtenirOuverte(ouvertures)));
    }

    useEffect(() => {
        setDegradePresent(obtenirDegrade(boites.obtenirOuverte(ouvertures)));
    }, []);

    useEffect(() => {
        tailleOrdinateur ? setCarousel(donneesCarousel.grand) : setCarousel(donneesCarousel.petit)
    }, [tailleOrdinateur]) 

    return (
        <div 
            className="ListeSessions" 
            transition={transition} 
            style={{backgroundImage: `url(${obtenirDegrade(boites.obtenirOuverte(ouvertures))})`}}
        >
            <div className="destination" onAnimationEnd={actualiserDegrade} style={{backgroundImage: `url(${degradePresent})`}}></div>
            <ol className="sessions-titres">
                {sessions.map((session, index) => {
                    if (ouvertures[index] == "ferme") {
                        return <li className={"session-titre " + ouvertures[index]} onClick={() => gestionProchaineSession(index)}>
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
                <ol className="placement" style={{
                    bottom: -carousel.rayonCarousel * 2 - carousel.rayonRond + carousel.decalageHaut,
                    left: -carousel.rayonCarousel - carousel.rayonRond + carousel.decalageGauche,
                    width: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                    height: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                    transform: `rotate(${rotation + carousel.decalageAngle}deg)`
                }}>
                    
                        
                    {sessions.map((session, index) => 
                        <li className={`session-rond ${ouvertures[index]} ${session}`} key={session} style={placerEnCercle(index)}>
                            <div className="destination"></div>
                            <h2 
                                className="titre" 
                                onAnimationEnd={() => setTransition(0)} 
                                transition={transition}
                            >
                                    {session.charAt(7)}
                            </h2>
                            {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                            <ArrowForwardIosIcon className="Icone" onClick={() => gestionProchaineSession(index + 1)}/>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}

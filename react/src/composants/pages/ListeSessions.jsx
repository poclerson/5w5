import './ListeSessions.scss';

import Session from './Session';

import {useState, useEffect, useLayoutEffect} from 'react';

import * as gestionOuverture from '../../boites';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ListeSessions({sessions, cours, enseignants}) {

    // Gestion de l'ouverture de chaque session
    const [ouvertures, setOuvertures] = useState([... sessions.map(() => "ferme")]);

    const [carousel, setCarousel] = useState({
        rayonRond: 180,
        rayonCarousel: 600
    });

    const [rotation, setRotation] = useState(0);

    const [transition, setTransition] = useState(1);

    const [degrade, setDegrade] = useState(null);

    useEffect(() => {
        // Ouvrir la première session directement
        setOuvertures(gestionOuverture.ouvrir(0, sessions.map(() => "ferme")));
        setDegrade("session" + (ouvertures.indexOf("ouvert") + 1));
    }, []);

    // Place en cercle dynamiquement les titres de sessions pour permettre une bonne transition
    function placerEnCercle(index) {
        return {
            top: carousel.rayonCarousel + -carousel.rayonCarousel * Math.cos((360 / ouvertures.length / 180) * (index) * Math.PI) + 'px',
            left: carousel.rayonCarousel + carousel.rayonCarousel * Math.sin((360 / ouvertures.length / 180) * (index) * Math.PI) + 'px',
            width: carousel.rayonRond * 2,
            height: carousel.rayonRond * 2,
            transform: `rotate(${-rotation}deg)`
        }
    }

    return (
        <div className={"ListeSessions " + degrade} transition={transition}>
            <div className="destination" onAnimationEnd={() => setDegrade("session" + (ouvertures.indexOf("ouvert") + 1))}></div>
            {
                sessions.map((session, index) => {
                    // Mobile
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
            <ol className="sessions-titres">
                <div className="placement" style={{
                    bottom: -carousel.rayonCarousel * 2 - carousel.rayonRond + 100,
                    left: -carousel.rayonCarousel - carousel.rayonRond + 100,
                    width: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                    height: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                    transform: `rotate(${rotation}deg)`
                }}>
                    {
                        
                        sessions.map((session, index) => {
                        
                            return <li className={`session-titre ${ouvertures[index]} ${session}`} key={session} style={placerEnCercle(index)}>
                                <div className="destination"></div>
                                <h2 className="titre" onAnimationEnd={() => setTransition(0)} transition={transition}>{session.charAt(7)}</h2>
                                {/* <ArrowForwardIcon className="Icone" onClick={() => controllerOuvertures(index)} /> */}
                                <ArrowForwardIosIcon className="Icone" onClick={() => {
                                    setOuvertures(gestionOuverture.ouvrir(index + 1, sessions.map(() => "ferme")))
                                    setRotation(rotation - (360 / ouvertures.length))
                                    setTransition(1)
                                }}/>
                            </li>
                        }
                    )}
                </div>
            </ol>
        </div>
    )
}

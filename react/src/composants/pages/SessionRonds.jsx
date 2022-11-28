import './SessionRonds.scss';
import SessionRond from './SessionRond';
import FlecheNav from '../modules/FlecheNav';

import {useState, useEffect, useContext} from 'react';
import ContexteDonneesSite from '../../ContexteDonneesSite';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function SessionRonds({surClic, quantite, sessions, rotation}) {
    const {degrades} = useContext(ContexteDonneesSite);

    const tailleOrdinateur = useMediaQuery(medias.ordinateur);
    const tailleTablette = useMediaQuery(medias.tablette);

    // Données permettant au carousel d'être dynamique
    const donneesCarousel = {
        petit: {
            rayonRond: 150,
            rayonCarousel: 525,
            decalageAngle: 0
        },

        moyen: {
            rayonRond: 175,
            rayonCarousel: 650,
            decalageAngle: 0
        },

        grand: {
            rayonRond: 200,
            rayonCarousel: 700,
            decalageAngle: 90
        }
    }
    // Par défaut, utiliser la taille mobile
    const [carousel, setCarousel] = useState(donneesCarousel.petit);

    // Place en cercle dynamiquement les titres de sessions pour permettre une bonne transition
    function placerEnCercle(index) {
        return {
            top: carousel.rayonCarousel + -carousel.rayonCarousel * Math.cos((360 / quantite / 180) * (index) * Math.PI) + 'px',
            left: carousel.rayonCarousel + carousel.rayonCarousel * Math.sin((360 / quantite / 180) * (index) * Math.PI) + 'px',
            transform: `rotate(${-rotation - carousel.decalageAngle}deg)`,
            backgroundImage: `url(${degrades[index].acf.degrade})`
        }
    }

    // Horrible, à retravailler
    useEffect(() => {
        if (tailleTablette) 
            setCarousel(donneesCarousel.moyen)

        if (tailleOrdinateur)
            setCarousel(donneesCarousel.grand)

        if (!tailleTablette && !tailleOrdinateur)
            setCarousel(donneesCarousel.petit)
    }, [tailleOrdinateur, tailleTablette]) 

    return (
        <div className="SessionRonds">
            {/* carousel sert à correctement placer le carousel rond sans fucker le layout */}
            <ol className="carousel" style={{
                width: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                height: carousel.rayonCarousel * 2 + carousel.rayonRond * 2,
                transform: `rotate(${rotation + carousel.decalageAngle}deg)`
            }}>
                {sessions.map((session, index) => 
                    <SessionRond 
                        key={"rond" + session} 
                        index={index}
                        session={session}
                        carousel={carousel}
                        placement={placerEnCercle(index)}
                        surClic={surClic}
                    />
                )}
            </ol>
            <FlecheNav gestionClic={() => surClic()} texte={false} />
        </div>
    )
}

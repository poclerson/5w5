import './SessionRonds.scss';
import SessionRond from './SessionRond';

import {useState, useEffect} from 'react';

import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function SessionRonds({surClic, quantite, sessions, rotation}) {
    const tailleOrdinateur = useMediaQuery(medias.ordinateur);
    const tailleTablette = useMediaQuery(medias.tablette);

    // Données permettant au carousel d'être dynamique
    const donneesCarousel = {
        petit: {
            rayonRond: 150,
            rayonCarousel: 1000,
            decalageGauche: 80,
            decalageHaut: 2900,
            decalageAngle: 0
        },

        moyen: {
            rayonRond: 175,
            rayonCarousel: 650,
            decalageGauche: 125,
            decalageHaut: 2150,
            decalageAngle: 0
        },

        grand: {
            rayonRond: 200,
            rayonCarousel: 700,
            decalageGauche: -600,
            decalageHaut: 1350,
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
            width: carousel.rayonRond * 2,
            height: carousel.rayonRond * 2,
            transform: `rotate(${-rotation - carousel.decalageAngle}deg)`,
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
                top: -carousel.rayonCarousel * 2 - carousel.rayonRond + carousel.decalageHaut,
                left: -carousel.rayonCarousel - carousel.rayonRond + carousel.decalageGauche,
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
        </div>
    )
}

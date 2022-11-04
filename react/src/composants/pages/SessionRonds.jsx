import './SessionRonds.scss';
import SessionRond from './SessionRond';

import {useState, useEffect} from 'react';

import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

export default function SessionRonds({surClic, surClicSuivant, quantite, sessions}) {
    const tailleOrdinateur = useMediaQuery(medias.ordinateur);
    const tailleTablette = useMediaQuery(medias.tablette);

    // État de rotation du carousel rond des titres de session
    const [rotation, setRotation] = useState(0);

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
            rayonCarousel: 500,
            decalageGauche: 75,
            decalageHaut: 0,
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
    // Par défaut, utiliser la taille mobile
    const [carousel, setCarousel] = useState(donneesCarousel.petit);

    // Est activé quand on clique sur un bouton qui fait changer de session
    function gestionProchaineSession(index) {
        // Ouvrir selon l'index donné
        if (tailleOrdinateur) {
            surClic(index)
            setRotation(-(360 * index / quantite))
        }
        
        // Simplement ouvrir le prochain. Permet une rotation constante (ne brise pas à chaque cycle)
        else {
            surClicSuivant()
            setRotation(rotation - (360 / quantite))
        }

        // setTransition(1)
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

    // Place en cercle dynamiquement les titres de sessions pour permettre une bonne transition
    function placerEnCercle(index) {
        return {
            top: carousel.rayonCarousel + -carousel.rayonCarousel * Math.cos((360 / quantite / 180) * (index) * Math.PI) + 'px',
            left: carousel.rayonCarousel + carousel.rayonCarousel * Math.sin((360 / quantite / 180) * (index) * Math.PI) + 'px',
            width: carousel.rayonRond * 2,
            height: carousel.rayonRond * 2,
            transform: `rotate(${-rotation - carousel.decalageAngle}deg)`,
            // backgroundImage: `url(${obtenirDegrade(boites.obtenirOuverte(ouvertures))})`
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
        <div className="sessions-ronds">
            {/* carousel sert à correctement placer le carousel rond sans fucker le layout */}
            <ol className="carousel" style={gestionStylePlacement()}>
                {sessions.map((session, index) => 
                    <SessionRond 
                        key={"rond" + session} 
                        index={index}
                        session={session}
                        gestionProchaineSession={gestionProchaineSession}
                        carousel={carousel}
                    />
                )}
            </ol>
        </div>
    )
}

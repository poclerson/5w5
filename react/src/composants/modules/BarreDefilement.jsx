import './BarreDefilement.scss';

import {useRef, useState, useEffect} from 'react';

export default function BarreDefilement({largeurTotale, elementScroll}) {
    const indicateurRef = useRef(null);
    const barreRef = useRef(null);
    const barreDefilementRef = useRef(null);

    // Ratio entre la barre de défilement à faire défiler dans elementScroll et la barre de défilment de BarreDefilement
    const [ratio, setRatio] = useState(null);

    // Au moment où on clique sur l'indicateur
    const gestionClic = e => {
        e.preventDefault();
        e.stopPropagation();

        window.addEventListener('mousemove', gestionTenirClic);
        window.addEventListener('mouseup', gestionRelacherClic); 
    }

    // Au moment où on fait glisser l'indicateur en tenant le clic enfoncé
    const gestionTenirClic = e => {
        e.preventDefault();
        e.stopPropagation();

        // Défiler elementScroll d'après les mouvements de la souris
        elementScroll.scrollLeft = (e.clientX - barreDefilementRef.current.getClientRects()[0].x) * ratio

        console.log(elementScroll)
    }

    // Au moment où on relâche le clic
    const gestionRelacherClic = e => {
        e.preventDefault();
        e.stopPropagation();
        window.removeEventListener('mousemove', gestionTenirClic);
        window.removeEventListener('mouseup', gestionRelacherClic);
    }

    useEffect(() => {
        setRatio(elementScroll.offsetWidth / barreRef.current.offsetWidth);
    }, [elementScroll.scrollLeft])

    useEffect(() => {
        // elementScroll.scrollLeftMax = elementScroll.scrollWidth;
    }, [])

    // useEffect(() => {
    //     if (elementScroll != null) 
    //         elementScroll.scrollLeft = positionIndicateur * ratio;
    // }, [positionIndicateur])

    return (
        <div className="BarreDefilement" ref={barreDefilementRef}>
            <div className="barre" ref={barreRef}></div>
            <div 
                className="indicateur" 
                onMouseDown={gestionClic} 
                ref={indicateurRef}
                // On règle l'attribut de style left pour suivre le défilement de elementScroll
                style={{width: 50, left: elementScroll.scrollLeft / ratio}}
            ></div>
        </div>
    )
}

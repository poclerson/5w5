import './BarreDefilement.scss';

import {useState, useRef} from 'react';

export default function BarreDefilement({defilement, largeurTotale, ratio, gestionPositionIndicateur, elementScroll}) {
    const [positionDepart, setPositionDepart] = useState(null);
    const [positionIndicateur, setPositionIndicateur] = useState(null);

    const indicateurRef = useRef(null);
    const barreRef = useRef(null);

    const gestionClic = e => {
        e.preventDefault();
        e.stopPropagation();

        setPositionDepart(e.clientX);  
        window.addEventListener('mousemove', gestionTenirClic);
        window.addEventListener('mouseup', gestionRelacherClic); 
    }

    const gestionTenirClic = e => {
        e.preventDefault();
        e.stopPropagation();

        console.log(defilement, largeurTotale, ratio, (defilement + 1) * ratio * largeurTotale * ratio / largeurTotale)
        setPositionIndicateur(indicateurRef.current.offsetWidth - e.clientX)
        elementScroll.scrollLeft = 50
        console.log(indicateurRef.current.getBoudingClientRect())
    }

    const gestionRelacherClic = e => {
        e.preventDefault();
        e.stopPropagation();
        gestionPositionIndicateur(e.clientX - positionDepart);
        window.removeEventListener('mousemove', gestionTenirClic);
        window.removeEventListener('mouseup', gestionRelacherClic);
    }

    return (
        <div className="BarreDefilement">
            <div className="barre" style={{width: largeurTotale * ratio}} ref={barreRef}></div>
            <div 
                className="indicateur" 
                style={{left: positionIndicateur}} 
                onMouseDown={gestionClic} 
                ref={indicateurRef}
            ></div>
        </div>
    )
}

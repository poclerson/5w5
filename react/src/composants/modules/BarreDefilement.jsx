import './BarreDefilement.scss';

import {useState, useEffect} from 'react';

export default function BarreDefilement({defilement, largeurTotale, ratio, gestionPositionIndicateur}) {
    const [positionDepart, setPositionDepart] = useState(null);
    const [positionFin, setPositionFin] = useState(null);
    const [distance, setDistance] = useState(null);

    const [defile, setDefile] = useState(false);

    const gestionClic = e => {
        e.preventDefault();
        e.stopPropagation();
        setDefile(true);

        setPositionDepart(e.clientX);   
    }

    const gestionTenirClic = e => {
        e.preventDefault();
        e.stopPropagation();


        if (defile) {
            setPositionFin(e.clientX);
            setDistance(positionFin - positionDepart);
        }
    }

    const gestionRelacherClic = e => {
        e.preventDefault();
        e.stopPropagation();

        setDefile(false);  
        gestionPositionIndicateur(distance);
    }

    useEffect(() => {
        document.addEventListener('mousemove', gestionTenirClic);
        document.addEventListener('mouseup', gestionRelacherClic);
        return () => {
            document.removeEventListener('mousemove', gestionTenirClic);
            document.removeEventListener('mouseup', gestionRelacherClic);
        }
    }, [gestionTenirClic, gestionRelacherClic])

    return (
        <div className="BarreDefilement">
            <div className="barre" style={{width: largeurTotale * ratio}} ></div>
            <div 
                className="indicateur" 
                style={{left: defilement * ratio}} 
                onMouseDown={gestionClic} 
            ></div>
        </div>
    )
}

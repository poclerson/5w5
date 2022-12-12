import './PointsCarousel.scss';

import {useLocation, Link} from 'react-router-dom';

import * as u from '../../utilitaires';

export default function PointsCarousel({liste, refListe}) {
    const endroit = useLocation();
    
    return (
        <nav className="PointsCarousel">
            {liste.map((item, index) => 
                <Link 
                    className="rond" 
                    key={"pointscarouselrond" + item.id}
                    to={endroit.pathname + "#" + item.id} 
                    onClick={() => u.defilerVersCase(refListe, index)}
                />
            )}
        </nav>
    )
}

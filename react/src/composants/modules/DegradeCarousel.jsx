import './DegradeCarousel.scss';

import FlecheNav from './FlecheNav';

import * as u from '../../utilitaires';

export default function DegradeCarousel({
    refListe, 
    ratioDefilement = 5, 
    direction = 'suivant',
    cases = true
}) {
    return (
        <div className="DegradeCarousel" direction={direction}>
            <div className="rond">
                <FlecheNav gestionClic={() => {
                    refListe && (
                        !cases && (
                            u.defiler(refListe, direction, ratioDefilement) ||  
                            u.defilerSelonCases(refListe, direction)
                        )
                    )
                }} direction={direction} />
            </div>
        </div>
    )
}

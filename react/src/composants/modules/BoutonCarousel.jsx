import './BoutonCarousel.scss';

import FlecheNav from './FlecheNav';

import * as u from '../../utilitaires';

export default function BoutonCarousel({
    refListe, 
    ratioDefilement = 5, 
    direction = 'suivant',
    cases = true
}) {
    return (
        <div className="BoutonCarousel" direction={direction}>
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

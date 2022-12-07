import './DegradeCarousel.scss';

import FlecheNav from './FlecheNav';

import * as u from '../../utilitaires';

export default function DegradeCarousel({
    refListe, 
    ratioDefilement = 5, 
    direction = 'suivant',
    defilementCases = true
}) {
    // Fonction de base faisant défiler
    

    return (
        <div className="DegradeCarousel" direction={direction}>
            <div className="rond">
                <FlecheNav gestionClic={() => {
                    defilementCases && refListe && u.defilerSelonCases(refListe) ||  
                    refListe && u.defiler(refListe, 5)
                }} direction={direction} />
            </div>
        </div>
    )
}

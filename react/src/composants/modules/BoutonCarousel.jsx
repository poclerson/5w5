import './BoutonCarousel.scss';

import FlecheNav from './FlecheNav';

import * as u from '../../utilitaires';

export default function BoutonCarousel({
    refListe, 
    ratioDefilement = 5, 
    direction = 'suivant',
    cases = true,
    callback
}) {
    return (
        <div className="BoutonCarousel" direction={direction}>
            <FlecheNav 
                gestionClic={
                    // S'il y a un callback personnalisé, le préférer
                    callback ? () => callback() :
                    () => {
                        refListe && (
                            !cases ? 
                            u.defiler(refListe, direction, ratioDefilement) :
                            u.defilerSelonCases(refListe, direction)
                        )
                    }
                } 
                direction={direction}
            />
        </div>
    )
}

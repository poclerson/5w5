import './DegradeSuivant.scss';
import FlecheNav from './FlecheNav';

export default function DegradeSuivant({
    surClicFleche, refListe, ratioDefilement = 5
}) {
    // Fonction de base faisant défiler
    const defiler = refListe => {
        const element = refListe.current;

        // Si on est arrivés à la fin, retourner au début
        if (element.scrollLeft + window.innerWidth >= element.scrollWidth) {
            element.scrollLeft = 0;
            return;
        }
        
        element.scrollLeft += element.scrollWidth / ratioDefilement;
    }

    return (
        <div className="DegradeSuivant">
            <div className="rond">
                <FlecheNav gestionClic={() => {
                    // Par défaut, appeler surClicFleche. Sinon, utiliser defiler
                    surClicFleche && surClicFleche() || refListe && defiler(refListe)
                }} />
            </div>
        </div>
    )
}

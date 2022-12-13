import './NavCarousel.scss';

import BoutonCarousel from './BoutonCarousel';

export default function NavCarousel({
    refListe,
    versPrecedent,
    versSuivant,
    cases = true,
    classesAdditionnelles = ""
}) {
    return (
        <nav className={"NavCarousel " + classesAdditionnelles}>
            <BoutonCarousel 
                refListe={refListe} 
                direction="precedent" 
                cases={cases} 
                callback={versPrecedent} 
            />
            <BoutonCarousel 
                refListe={refListe} 
                cases={cases} 
                callback={versSuivant} 
            />
        </nav>
    )
}

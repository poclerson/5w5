import './NavCarousel.scss';

import BoutonCarousel from './BoutonCarousel';

export default function NavCarousel({refListe}) {
    return (
        <nav className="NavCarousel">
            <BoutonCarousel refListe={refListe} direction="precedent" cases={false} />
            <BoutonCarousel refListe={refListe} cases={false} />
        </nav>
    )
}

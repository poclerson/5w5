import Navigation from './Navigation';
import Recherche from './Recherche';

export default function EnTete({routes}) {
    return (
        <header className="EnTete">
            <h1 className="EnTete__titre">5W5 - Projet web en équipe</h1>
            <a href="https://www.cmaisonneuve.qc.ca">Inscription</a>
            <Navigation routes={routes} />
            <Recherche routes={routes} />
        </header>
    )
}

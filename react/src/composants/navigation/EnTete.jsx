import './EnTete.scss';

import {useState} from 'react';

import Navigation from './Navigation';
import Recherche from '../modules/Recherche';
import Boutonburger from '../modules/BoutonBurger';

export default function EnTete({routes}) {
    const [ouverture, setOuverture] = useState("ferme");

    const gererOuverture = () => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme");

    return (
        <header className="EnTete">
            <Boutonburger gererClic={gererOuverture} />

            <div className={"contenu " + ouverture}>
                <Navigation routes={routes} />
                <Recherche routes={routes} />
            </div>
        </header>
    )
}
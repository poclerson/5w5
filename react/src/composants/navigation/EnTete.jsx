import './EnTete.scss';

import {useState, useEffect} from 'react';

import Navigation from './Navigation';
import Recherche from '../modules/Recherche';
import BoutonBurger from '../modules/BoutonBurger';
import useObtenir from '../../hooks/useObtenir';

export default function EnTete({routes}) {
    const [ouverture, setOuverture] = useState("ferme");

    const gererOuverture = () => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme");
    
    return (
        <header className="EnTete">
            <BoutonBurger gererClic={gererOuverture} />

            <div className={"contenu " + ouverture}>
                <Navigation routes={routes} gererClic={gererOuverture} />
                <Recherche routes={routes} />
            </div>
        </header>
    )
}
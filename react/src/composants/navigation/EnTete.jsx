import './EnTete.scss';

import {useState} from 'react';

import Navigation from './Navigation';
import Recherche from '../modules/Recherche';

export default function EnTete({routes}) {
    const [ouverture, setOuverture] = useState("ferme");

    return (
        <header className="EnTete">
            <button 
                className="ouverture" 
                onClick={() => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme")}
            ></button>

            <div className={"contenu " + ouverture}>
                <a href="https://www.cmaisonneuve.qc.ca">Inscription</a>
                <Navigation routes={routes} />
                <Recherche routes={routes} />
            </div>
        </header>
    )
}
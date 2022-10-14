import './EnTete.scss';

import {useState, useEffect} from 'react';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';

export default function EnTete({enteteWP}) {
    const [ouverture, setOuverture] = useState("ferme");

    const gererOuverture = () => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme");

    return (
        <header className="EnTete">
            <BoutonBurger gererClic={gererOuverture} />
            <div className={"contenu " + ouverture}>
                <SiteLogo url={enteteWP.siteLogoUrl} taille={"p"} />
                <Navigation pages={enteteWP.headerMenuItems} gererClic={gererOuverture} />
                {/* <Recherche routes={pages} /> */}
            </div>
        </header>
    )
}
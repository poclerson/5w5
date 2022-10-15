import './EnTete.scss';

import {useState} from 'react';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import Chargement from '../modules/Chargement';

export default function EnTete({enteteWP}) {
    const [ouverture, setOuverture] = useState("ferme");

    const [resultatsRecherche, setResultatsRecherche] = useState(null);

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    const gererOuverture = () => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme");

    return (
        <header className="EnTete">
            {console.log(resultatsRecherche)}
            <BoutonBurger gererClic={gererOuverture} />
            <div className={"contenu " + ouverture}>
                <SiteLogo url={enteteWP.siteLogoUrl} taille={"p"} />
                <Navigation pages={enteteWP.headerMenuItems} gererClic={gererOuverture} />
                <Recherche gestionResultats={gestionResultatsRecherche} />
            </div>
            <ul className="resultats-recherche">
                {resultatsRecherche != null ?
                    resultatsRecherche.map(resultat => 
                        <li className="resultat">
                            <a href={resultat.permalink} className="lien">
                                <p className="titre">{resultat.title}</p>
                            </a>
                        </li>
                    ) 
                    :
                    <Chargement />
                }
            </ul>
        </header>
    )
}
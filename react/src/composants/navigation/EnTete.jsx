import './EnTete.scss';

import {useState} from 'react';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import Chargement from '../modules/Chargement';

export default function EnTete({enteteWP}) {
    const [ouverture, setOuverture] = useState('ferme');
    const [ouvertureRecherche, setOuvertureRecherche] = useState('ferme');

    const [resultatsRecherche, setResultatsRecherche] = useState(null);

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    const gererOuverture = () => setOuverture(ouverture == "ferme" ? "ouvert" : "ferme");

    const gestionClicLoupe = () => {
        ouvertureRecherche == 'ouvert' ? setOuvertureRecherche('ferme') : setOuvertureRecherche('ouvert')
    }

    return (
        <header className="EnTete">
            <BoutonBurger gererClic={gererOuverture} />
            <div className={"contenu " + ouverture}>
                <SiteLogo url={enteteWP.siteLogoUrl} taille={"p"} />
                <Navigation 
                    pages={enteteWP.headerMenuItems} 
                    gererClic={gererOuverture} 
                    ouverture={ouvertureRecherche == 'ouvert' ? 'ferme' : 'ouvert'} 
                />
                <Recherche 
                    gestionResultats={gestionResultatsRecherche} 
                    ouverture={ouvertureRecherche} 
                    gestionClic={gestionClicLoupe} 
                />
            </div>
            <ul className="resultats-recherche">
                {resultatsRecherche != null ?
                    resultatsRecherche.map(resultat => 
                        <li className="resultat" key={resultat.id}>
                            <a href={resultat.permalink} className="lien">
                                <h6 className="titre">{resultat.title}</h6>
                            </a>
                        </li>
                    ) : <Chargement />
                }
            </ul>
        </header>
    )
}
import './EnTete.scss';

import {useState} from 'react';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';
import Chargement from '../modules/Chargement';

export default function EnTete({enteteWP}) {

    // Ouverture de l'entête, mobile seulement
    const [ouverture, setOuverture] = useState('ferme');

    // Ouverture de la barre de recherche, si on clique dessus
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
        <header className={"EnTete " + ouvertureRecherche}>
            <BoutonBurger gererClic={gererOuverture} />
            <div className={"contenu " + ouverture}>
                <SiteLogo url={enteteWP.siteLogoUrl} />
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
                        <ResultatRecherche key={resultat.id} resultat={resultat} />
                    ) : <Chargement />
                }
            </ul>
        </header>
    )
}
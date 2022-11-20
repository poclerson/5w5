import './EnTete.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useRef} from 'react';
import useOuverture from '../../hooks/useOuverture';
import * as wp from '../../wp-rest-api';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';

export default function EnTete({enteteWP}) {

    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    const [surClicBurger, verifierOuvertureBurger] = useOuverture();

    const [surClicRecherche, verifierOuvertureRecherche] = useOuverture();

    const [resultatsRecherche, setResultatsRecherche] = useState(null);

    const [saisie, setSaisie] = useState("");

    const refZoneSaisie = useRef();

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    const gestionClicRecherche = () => {
        surClicRecherche();
        // Il faut attendre que la zone se soit ouverte
        setTimeout(() => refZoneSaisie.current.focus(), 1)
    }

    return (
        <header className="EnTete" ouvert={verifierOuvertureRecherche()}>
            <BoutonBurger gererClic={surClicBurger} ouvert={verifierOuvertureBurger()} />
           <label for="input">
            <input type="checkbox" id="input" />
            <div className="contenu" ouvert={verifierOuvertureBurger()}>
                <SiteLogo url={enteteWP.siteLogoUrl} />
                <Navigation 
                    pages={enteteWP.headerMenuItems} 
                    surClic={() => gestionClicRecherche} 
                />
                <Recherche 
                    gestionResultats={gestionResultatsRecherche} 
                    verifierOuverture={verifierOuvertureRecherche}
                    surClic={gestionClicRecherche}
                    saisie={saisie}
                    setSaisie={setSaisie}
                    refZoneSaisie={refZoneSaisie}
                />
            </div>
            </label>
            <ul className="resultats-recherche">
                {resultatsRecherche != null &&
                    resultatsRecherche.length > 0 ?
                    resultatsRecherche.map(resultat => 
                        <ResultatRecherche 
                            key={resultat.id} 
                            resultat={resultat} 
                            surClic={() => {surClicRecherche(); surClicBurger()}} 
                            article={wp.obtenirTypeArticle(
                                resultat.id,
                                // Étaler les valeurs dans lesquelles chercher l'article
                                [
                                    ...Object.values(cours), 
                                    ...Object.values(enseignants), 
                                    ...Object.values(projets)
                                ]
                            )}
                        />
                    ) 
                    
                    : <li className="ResultatRecherche">
                        <h6 className="titre">
                            {saisie.length > 0 ? 
                                'Aucun article ne correspond à votre recherche.' :
                                'Écrivez pour commencer à chercher.'
                            }
                        </h6>
                    </li>
                }
            </ul>
        </header>
    )
}
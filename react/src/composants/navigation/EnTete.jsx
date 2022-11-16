import './EnTete.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState} from 'react';
import useOuverture from '../../hooks/useOuverture';
import * as wp from '../../wp-rest-api';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';
import Chargement from '../modules/Chargement';


export default function EnTete({enteteWP}) {

    const [surClicBurger, verifierOuvertureBurger] = useOuverture();

    const [surClicRecherche, verifierOuvertureRecherche] = useOuverture();

    const [resultatsRecherche, setResultatsRecherche] = useState(null);

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    return (
        <header className="EnTete" ouvert={verifierOuvertureRecherche()}>
            <BoutonBurger gererClic={surClicBurger} ouvert={verifierOuvertureBurger()} />
            <div className="contenu" ouvert={verifierOuvertureBurger()}>
                <SiteLogo url={enteteWP.siteLogoUrl} />
                <Navigation 
                    pages={enteteWP.headerMenuItems} 
                    surClic={() => surClicRecherche} 
                />
                <Recherche 
                    gestionResultats={gestionResultatsRecherche} 
                    verifierOuverture={verifierOuvertureRecherche}
                    surClic={surClicRecherche} 
                />
            </div>
            <ul className="resultats-recherche">
                {resultatsRecherche != null ?
                    resultatsRecherche.map(resultat => 
                        <ResultatRecherche 
                            key={resultat.id} 
                            resultat={resultat} 
                            surClic={surClicRecherche} 
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
                    ) : <Chargement />
                }
            </ul>
        </header>
    )
}
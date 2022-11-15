import './EnTete.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useEffect} from 'react';
import useOuverture from '../../hooks/useOuverture';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';
import Chargement from '../modules/Chargement';


export default function EnTete({enteteWP}) {

    // Ouverture de l'entête, mobile seulement
    const [surClicBurger, verifierOuvertureBurger] = useOuverture();

    const [surClicRecherche, verifierOuvertureRecherche, fermerRecherche] = useOuverture();

    const [resultatsRecherche, setResultatsRecherche] = useState(null);

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    function trouverArticle(id) {
        // Étaler dans un tableau toutes les valeurs recherchées
        const articles = [...Object.values(cours), ...Object.values(enseignants), ...Object.values(projets)];
        const article = articles.map(article => {
            if (article.id == id) {
                return {
                    type: article.permalink
                        .replace('https://timm175.sg-host.com/', '')
                        .replace('?', '')
                        .split('=')[0]
                        .split('/')[0], 
                    id: article.id
                };
            }
        }).filter(article => article != undefined)[0]

        return article
    }
        
    const ouvrirItem = id => {
        document.getElementById(id).setAttribute('ouvert', 'true')
    }

    return (
        <header className="EnTete" ouvert={verifierOuvertureRecherche()}>
            <BoutonBurger gererClic={surClicBurger} />
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
                            article={trouverArticle(resultat.id)}
                            ouvrirItem={ouvrirItem}
                        />
                    ) : <Chargement />
                }
            </ul>
        </header>
    )
}
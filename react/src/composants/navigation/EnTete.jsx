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

                // Trouver le type de chaque article d'après ce qui se trouve dans leurs champs ACF
                if (article.acf.session)
                    return {type: 'cours', article: article.id};

                if (article.acf.domaine)
                    return {type: 'enseignants', article: article.id};

                if (article.acf.createurs)
                    return {type: 'galerie-etudiante', article: article.id};
            }
        }).filter(article => article != undefined)[0]

        return article
    }
        
    const ouvrirItem = id => {
        document.getElementById(id).setAttribute('ouvert', 'true')
        document.getElementById(id).scrollIntoView()
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
import './EnTete.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useRef} from 'react';
import useOuverture from '../../hooks/useOuverture';
import useStructure from '../../hooks/useStructure';
import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias'
import * as wp from '../../wp-rest-api';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';

export default function EnTete({enteteWP}) {
    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    // État d'ouverture du menu burger sur mobile
    const [surClicBurger, verifierOuvertureBurger] = useOuverture();

    // État d'ouverture de la recherche
    const [surClicRecherche, verifierOuvertureRecherche] = useOuverture();

    // Zone de recherche
    const [resultatsRecherche, setResultatsRecherche] = useState(null);
    const [saisie, setSaisie] = useState("");
    const refZoneSaisie = useRef();

    const {IMGHEADER} = useStructure('entete', true);
    const mobile = useMediaQuery(medias.mobile);

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
            <div className="vagues" style={{backgroundImage: IMGHEADER && IMGHEADER}}></div>
            {/* <img className="vagues" src={IMGHEADER && IMGHEADER.replace('url(', '').replace(')', '')} alt=""/> */}
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
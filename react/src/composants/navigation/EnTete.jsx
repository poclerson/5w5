import './EnTete.scss';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useRef, useEffect} from 'react';
import useOuverture from '../../hooks/useOuverture';
import useStructure from '../../hooks/useStructure';
import useMediaQuery from '../../hooks/useMediaQuery';
import useClicExterieur from '../../hooks/useClicExterieur';
import medias from '../../medias';
import * as wp from '../../wp-rest-api';

import Navigation from './Navigation';
import BoutonBurger from '../modules/BoutonBurger';
import SiteLogo from '../modules/SiteLogo';
import Recherche from '../modules/Recherche';
import ResultatRecherche from '../modules/ResultatRecherche';
import Icone from '../modules/Icone';

export default function EnTete({enteteWP}) {
    const {cours, enseignants, projets} = useContext(ContexteDonneesSite);

    // État d'ouverture du menu burger sur mobile
    const [surClicBurger, verifierOuvertureBurger] = useOuverture();

    // État d'ouverture de la recherche
    const [surClicRecherche, verifierOuvertureRecherche] = useOuverture();

    // Zone de recherche
    const [resultatsRecherche, setResultatsRecherche] = useState(null);
    const [saisie, setSaisie] = useState("");
    const [ecrit, setEcrit] = useState('false');
    const refZoneSaisie = useRef();
    const refResultatsRecherche = useClicExterieur(surClicRecherche);

    // Vagues de l'entête mobile
    const {IMGHEADER} = useStructure('entete', true);

    const tablette = useMediaQuery(medias.tablette);

    const gestionResultatsRecherche = (resultats) => {
        setResultatsRecherche(resultats);
    }

    useEffect(() => {
        tablette && setEcrit('false');
    }, [tablette])

    return (
        <header className="EnTete" ouvert={verifierOuvertureRecherche()}>
            <BoutonBurger gererClic={() => {
                surClicBurger(); 
                surClicRecherche(); 
                setEcrit('false');
            }} 
                ouvert={verifierOuvertureBurger()} />
            <img 
                className="vagues" 
                src={IMGHEADER && IMGHEADER.replace('url(', '').replace(')', '')} 
            />
            <div ouvert={ecrit} className="fermeur-recherche" onClick={() => setEcrit('false')}>
                <Icone type="fleche-suivant" />
            </div>
            <div className="contenu" ouvert={verifierOuvertureBurger()}>
                <SiteLogo url={enteteWP.siteLogoUrl} />
                <Navigation 
                    pages={enteteWP.headerMenuItems} 
                    surClic={surClicBurger} 
                />
                <Recherche 
                    gestionResultats={gestionResultatsRecherche} 
                    verifierOuverture={verifierOuvertureRecherche}
                    surClic={surClicRecherche}
                    saisie={saisie}
                    setSaisie={setSaisie}
                    refZoneSaisie={refZoneSaisie}
                    setEcrit={setEcrit}
                />
            </div>
            <ul className="resultats-recherche" ref={refResultatsRecherche}>
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
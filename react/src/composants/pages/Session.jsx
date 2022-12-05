import './Session.scss';

import {useRef, useState, useEffect} from 'react';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';
import useDefilementInfini from '../../hooks/useDefilementInfini';

import Cours from './Cours';
import DegradeSuivant from '../modules/DegradeSuivant';

export default function Session({
    cours, 
    session, 
    index, 
    verifierOuverture, 
    refTitres, 
    refListeCoursSessionOuverte,
    defilerVersCours
}) {
    const refListeCours = useRef();
    const [indexPlusAGauche, setIndexPlusAGauche] = useState(0);

    const [enfants, setEnfants] = useState([]);

    const tablette = useMediaQuery(medias.tablette);
    const ordinateur = useMediaQuery(medias.ordinateur);
    const ordinateurLarge = useMediaQuery(medias.ordinateurLarge);

    const surClicFleche = () => {
        const prochainCours = enfants[indexPlusAGauche + 1];
        defilerVersCours(prochainCours)
    }

    const surDefilement = () => {
        setIndexPlusAGauche(enfants.indexOf(enfants.obtenirElementPlusAGauche(
            ordinateurLarge ? 
                refTitres.current.offsetWidth / 1.5 :
            ordinateur ? 
                refTitres.current.offsetWidth / 2 : 
            tablette ? 
                -50 : 
                -25
        )));
    }

    useEffect(() => {
        if (refListeCoursSessionOuverte != false)
        setEnfants(Array.from(refListeCoursSessionOuverte.current.children))
    }, [refListeCoursSessionOuverte])

    return (
        <article 
            className="Session" 
            id={session} 
            index={index}
            ouvert={verifierOuverture(index)} 
            onScroll={surDefilement}
        >
            <ul 
                className="liste-cours" 
                ref={refListeCoursSessionOuverte ? refListeCoursSessionOuverte : refListeCours} 
                onScroll={surDefilement}
            >
                {cours.map((_cours, index) => 
                    { return <Cours 
                        ouvert={index == indexPlusAGauche ? 'true' : 'false'}
                        key={_cours.id + "" + index}
                        id={_cours.id}
                        index={index}
                        {..._cours.acf}
                    />}
                )}
            </ul>
            <DegradeSuivant surClicFleche={surClicFleche} />
        </article>
    )
}

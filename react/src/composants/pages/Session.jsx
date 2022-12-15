import './Session.scss';

import {useRef, useState, useEffect} from 'react';
import medias from '../../medias';
import useMediaQuery from '../../hooks/useMediaQuery';

import Cours from './Cours';
import PointsCarousel from '../modules/PointsCarousel';

export default function Session({
    cours, 
    session, 
    index, 
    verifierOuverture, 
    refTitres, 
    refListeCoursSessionOuverte
}) {
    const refListeCours = useRef();
    const [indexPlusAGauche, setIndexPlusAGauche] = useState(0);

    const [enfants, setEnfants] = useState([]);

    const tablette = useMediaQuery(medias.tablette);
    const ordinateur = useMediaQuery(medias.ordinateur);

    const surDefilement = () => {
        setIndexPlusAGauche(enfants.indexOf(enfants.obtenirElementPlusA(
            'gauche',
            refTitres.current.offsetWidth,
            'faux-cours'
        )));
    }

    useEffect(() => {
        if (refListeCoursSessionOuverte)
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
                    <Cours 
                        ouvert={index == indexPlusAGauche ? 'true' : 'false'}
                        key={_cours.id + "" + index}
                        id={_cours.id}
                        index={index}
                        {..._cours.acf}
                    />
                )}
                {/* Pour permettre de défiler plus loin */}
                {cours.map((_cours, index) => 
                    index < cours.length - 2 && <div className="faux-cours"></div>
                )}
            </ul>
            <PointsCarousel 
                liste={cours} 
                refListe={refListeCoursSessionOuverte} 
                indexOuvert={indexPlusAGauche} 
            />
        </article>
    )
}

import './ListeProjets.scss';

import {useContext, useRef} from 'react';
import useOuvertures from '../../hooks/useOuvertures';
import useStructure from '../../hooks/useStructure';
import useOuvrirSelonId from '../../hooks/useOuvrirSelonId';
import ContexteDonneesSite from '../../ContexteDonneesSite';

import Projet from './Projet';
import PhotoEnvironnement from './PhotoEnvironnement';
import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';
import DegradeCarousel from '../modules/DegradeCarousel';
import EvenementVideo from './EvenementVideo';

export default function ListeProjets({id}) {
    const {projets, environnement, videos} = useContext(ContexteDonneesSite);

    const {surClic, verifierOuvertureParent, verifierOuverture} = useOuvertures({
        projets: projets,
        environnement: environnement,
        videos: videos
    });

    const refListe = useRef();

    const {titre, BACKGROUND} = useStructure(id);

    useOuvrirSelonId(surClic);

    // Tout mettre dans un callback permet de déclarer des variables (index)
    const rendreCases = () => {
        let index = 0;

        return [...projets, ...environnement, ...videos].pseudoMelanger().map((evenement => {
            // Projet
            console.log(evenement.acf)
            if (evenement.acf.hasOwnProperty('nom')) {
                let composant = <Projet 
                    key={evenement.id}
                    id={evenement.id}
                    {... evenement.acf}
                    index={index}
                    surClic={surClic}
                    verifierOuverture={verifierOuverture}
                />
                index++;
                return composant;
            }

            // Vidéo
            else if (evenement.acf.hasOwnProperty('lien')) {
                return <EvenementVideo 
                    key={evenement.id}
                    {... evenement.acf}
                />
            }

            // Image d'environnement
            else {
                return <PhotoEnvironnement 
                    key={evenement.id}
                    {... evenement.acf}
                />
            }
        }))
    }

    return(
        projets && environnement && videos ?
            <section 
                className="ListeProjets" 
                item-ouvert={verifierOuvertureParent()}
                ref={refListe}
            >
                {console.log(videos)}
                <ul className="liste" item-ouvert={verifierOuvertureParent()}>
                    {titre}
                    {rendreCases()}
                </ul>
                <Fond fond={{backgroundImage: BACKGROUND}} />
                <DegradeCarousel refListe={refListe} />
            </section> : <Chargement />
    )
}
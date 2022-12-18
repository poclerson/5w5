import './Projet.scss';

import FlecheNav from '../modules/FlecheNav';
import Icone from '../modules/Icone';

import useClicExterieur from '../../hooks/useClicExterieur';
import {useRef} from 'react';

export default function Projet({
    nom,
    createurs,
    cours,
    image_presentation,
    index,
    surClic,
    verifierOuverture,
    id
}) {
    const refImage = useRef();
    const refTexte = useRef();

    const fermerProjet = useClicExterieur(
        () => verifierOuverture(index),
        () => surClic(-1),
        refImage,
        [refTexte]
    )
    return (
        <li className="Projet evenement" id={id} index={index} ouvert={verifierOuverture(index)} onClick={fermerProjet}>
            <div className="miniature" onClick={() => surClic(index)}>
                <div className="image-presentation-conteneur">
                    <img
                        className="image-presentation"
                        src={image_presentation} 
                        alt={`Image du projet ${nom} par ${createurs}`} 
                    />
                </div>
                <div className="information">
                    <h2 className="titre">{nom}</h2>
                    <p className="details">
                        {cours && cours.post_title}
                    </p>
                    <Icone type="ajouter" />
                </div>
            </div>
            <div className="contenu">
                <FlecheNav gestionClic={() => surClic(-1)} direction='precedent' />
                <img 
                    className="image-presentation"
                    ref={refImage}
                    src={image_presentation} 
                    alt={`Image du projet ${nom} par ${createurs}`} 
                    loading="lazy"
                />
                <div className="texte" ref={refTexte}>
                    <h6 className="createurs">Projet par {createurs}</h6>
                </div>
            </div>
        </li>
    )
}
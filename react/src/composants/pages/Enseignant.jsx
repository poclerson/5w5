import './Enseignant.scss';
import FlecheNav from '../modules/FlecheNav';
// import ImageDecoupee from '../modules/ImageDecoupee';

import {useRef, useState, useEffect} from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';

export default function Enseignant({nom, description, photo, domaine, surClic, index, verifierOuverture, id}) {
    const tablette = useMediaQuery(medias.tablette);
    const tabletteMax = useMediaQuery(medias.ordinateur, 'max');
    const refFondPhoto = useRef(null);

    useEffect(() => {
        if (refFondPhoto.current)
        setFondPhoto(refFondPhoto.current)
    }, [refFondPhoto])

    const [fondPhoto, setFondPhoto] = useState(null);

    return(
        <li onClick={() => console.log(refFondPhoto)} className={`Enseignant ${domaine}`} id={id} index={index} ouvert={verifierOuverture(index)}>

            {/* Prévisualisation (image du prof) */}
            <div className="miniature" onClick={() => surClic(index)}>
                <h2 className="titre">{nom.toUpperCase()}</h2>
                <img className="photo" src={typeof photo != 'boolean' ? photo : undefined} alt={"Photo de " + nom} />
                <span className="conteneur-domaine">
                    <h2 className="domaine">{domaine.toUpperCase()}</h2>
                </span>
            </div>

            {/* Contenu de l'enseignant en contexte */}
            <div className="contenu">
                <FlecheNav 
                    className="retour-liste" 
                    gestionClic={() => surClic(-1)} 
                    direction="precedent"
                    classesAdditionnelles="retour"
                />
                    <div className={"conteneur-photo " + domaine}>
                        <h2 className="titre">{nom.toUpperCase()}</h2>
                        <div className="fond-photo">
                            {/* {tablette && tabletteMax && refFondPhoto.current &&
                                    <ImageDecoupee source={photo} limites={{
                                        x: refFondPhoto.current.clientWidth,
                                        y: -1
                                    }} /> 
                            } */}
                            <div className="agrandisseur">
                                <img className="photo" ref={refFondPhoto} src={typeof photo != 'boolean' ? photo : undefined} alt={"Photo de " + nom} />
                            </div>
                        </div>
                        <span className="conteneur-domaine">
                            <p className="domaine">{domaine.toUpperCase()}</p>
                        </span>
                    </div>
                {/* Boite de texte */}
                <article className="texte">
                    <h5 className="etiquette-titre">nom</h5>
                    <h2 className="titre">{nom}</h2>
                    <h5 className="etiquette-domaine">spécialité</h5>
                    <h3 className="domaine sous-titre">{domaine}</h3>
                    <h5 className="etiquette-description">biographie</h5>
                    <div className="conteneur-description">
                        <p className="description">{description.tronquerMots(100)}</p>
                    </div>
                </article>
            </div>
        </li>
    )
}
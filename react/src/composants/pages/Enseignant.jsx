import './Enseignant.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';
import {useState, useEffect} from 'react';

export default function Enseignant({nom, description, photo, domaine, gestionClicListe, index, ouverture}) {

    const gestionClic = () => {
        gestionClicListe(index, ouverture);
    }

    const tablette = useMediaQuery(medias.tablette);

    useEffect(() => {

    }, [tablette])

    return(
        <li className={`Enseignant ${ouverture} ${domaine}`}>
            <div className="miniature" onClick={gestionClic}>
                <h3 className="titre">{nom.toUpperCase()}</h3>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
                <span className="conteneur-domaine">
                    <p className="domaine">{domaine.toUpperCase()}</p>
                </span>
            </div>
            <div className={"contenu " + ouverture}>
                <ArrowBackIosIcon className="Icone" onClick={gestionClic} />
                <div className={"conteneur-photo " + domaine}>
                    <h3 className="titre">{nom.toUpperCase()}</h3>
                    <div className="fond-photo">
                        <img className="photo" src={photo} alt={"Photo de " + nom} />
                    </div>
                    <span className="conteneur-domaine">
                        <p className="domaine">{domaine.toUpperCase()}</p>
                    </span>
                </div>
                <article className="texte">
                    <h5 className="titre-etiquette">nom</h5>
                    <h3 className="titre">{nom}</h3>
                    <h5 className="sous-titre-etiquette">spécialité</h5>
                    <h4 className="domaine sous-titre">{domaine}</h4>
                    <h5 className="description-etiquette">biographie</h5>
                    <div className="conteneur-description">
                        <p className="description">
                            {/* {description} */}
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere dolorem temporibus eos reprehenderit veritatis culpa error dolor cupiditate officia qui, totam, consequatur esse ipsam fugiat sapiente architecto distinctio. Esse, sequi!
                        </p>
                    </div>
                </article>
            </div>
        </li>
    )
}
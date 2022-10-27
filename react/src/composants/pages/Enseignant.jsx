import './Enseignant.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';
import {useState, useEffect} from 'react';

export default function Enseignant({nom, description, photo, domaine, gestionClicListe}) {
    const [ouverture, setOuverture] = useState('ferme');

    const gestionClic = () => {
        gestionClicListe();
        setOuverture(ouverture == 'ouvert' ? 'ferme' : 'ouvert');
    }

    const tablette = useMediaQuery(medias.tablette);

    useEffect(() => {

    }, [tablette])

    return(
        <li className={`Enseignant ${ouverture} ${domaine}`}>
            {console.log(tablette)}
            <div className="miniature" onClick={gestionClic}>
                <h3 className="titre">{nom}</h3>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
                <p className="domaine">{domaine}</p>
            </div>
            <div className={"contenu " + ouverture}>
                <ArrowBackIosIcon className="Icone" onClick={gestionClic} />
                <div className={"conteneur-photo " + domaine}>
                    <div className="fond-photo">
                        <img className="photo" src={photo} alt={"Photo de " + nom} />
                    </div>
                </div>
                {!tablette ?
                    <article className="texte">
                        <h3 className="titre">{nom}</h3>
                        <h4 className="domaine sous-titre">{domaine}</h4>
                        <div className="conteneur-description">
                            <p className="description">{description}</p>
                        </div>
                    </article>
                    :
                    <>
                        <article className="texte">
                            <h3 className="titre">{nom}</h3>
                            <h4 className="domaine sous-titre">{domaine}</h4>
                        </article>
                        <article className="conteneur-description">
                            <p className="description">{description}</p>
                        </article>
                    </>
                }
            </div>
        </li>
    )
}
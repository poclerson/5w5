import './Enseignant.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useState} from 'react';

export default function Enseignant({nom, description, photo, domaine, gestionClicListe}) {
    const [ouverture, setOuverture] = useState('ferme');

    const gestionClic = () => {
        gestionClicListe();
        setOuverture(ouverture == 'ouvert' ? 'ferme' : 'ouvert');
    }

    return(
        <li className={"Enseignant " + ouverture}>
            <div className="miniature" onClick={gestionClic}>
                <h3 className="titre">{nom}</h3>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
                <p className="domaine">{domaine}</p>
            </div>
            <div className={"contenu " + ouverture}>
                <ArrowBackIosIcon className="Icone" onClick={gestionClic} />
                <h3 className="titre">{nom}</h3>
                <p className="desc">{description}</p>
                <p className="domaine">{domaine}</p>
            </div>
        </li>
    )
}
import './Enseignant.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function Enseignant({nom, description, photo, domaine, surClic, index, verifierOuverture}) {
    return(
        <li className={`Enseignant ${domaine}`} ouvert={verifierOuverture(index)}>
            <div className="miniature" onClick={() => surClic(index)}>
                <h2 className="titre">{nom.toUpperCase()}</h2>
                <img className="photo" src={photo} alt={"Photo de " + nom} />
                <span className="conteneur-domaine">
                    <h2 className="domaine">{domaine.toUpperCase()}</h2>
                </span>
            </div>
            <div className="contenu">
                <ArrowBackIosIcon className="Icone retour-liste" onClick={() => surClic(-1)} />
                <div className={"conteneur-photo " + domaine}>
                    <h2 className="titre">{nom.toUpperCase()}</h2>
                    <div className="fond-photo">
                        <img className="photo" src={photo} alt={"Photo de " + nom} />
                    </div>
                    <span className="conteneur-domaine">
                        <p className="domaine">{domaine.toUpperCase()}</p>
                    </span>
                </div>
                <article className="texte">
                    <h5 className="etiquette-titre">nom</h5>
                    <h2 className="titre">{nom}</h2>
                    <h5 className="etiquette-domaine">spécialité</h5>
                    <h3 className="domaine sous-titre">{domaine}</h3>
                    <h5 className="etiquette-description">biographie</h5>
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
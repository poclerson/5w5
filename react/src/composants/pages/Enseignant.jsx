import './Enseignant.scss';

import FlecheNav from '../modules/FlecheNav';

import useOuverture from '../../hooks/useOuverture';

export default function Enseignant({
    nom,
    description,
    photo,
    domaine,
    surClic,
    index,
    verifierOuverture,
    id
}) {
    const versVraisDomaines = domaine => {
        const vraisDomaines = {
            modelisation3d: 'Modélisation 3D',
            jeu: 'Jeu',
            web: 'Web',
            design: 'Design',
            video: 'Vidéo',
            methodologie: 'Méthodologie'
        }

        return vraisDomaines[domaine] ? vraisDomaines[domaine] : domaine;
    }

    return(
        <li className={`Enseignant ${domaine}`} id={id} index={index} ouvert={verifierOuverture(index)}>

            {/* Prévisualisation (image du prof) */}
            <div className="miniature" onClick={() => surClic(index)}>
                <h2 className="titre">{nom.toUpperCase()}</h2>
                <img className="photo" src={typeof photo != 'boolean' ? photo : undefined} alt={"Photo de " + nom} />
                <span className="conteneur-domaine">
                    <h2 className="domaine">{versVraisDomaines(domaine).toUpperCase()}</h2>
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
                            <div className="agrandisseur">
                                <img className="photo" src={typeof photo != 'boolean' ? photo : undefined} alt={"Photo de " + nom} />
                            </div>
                        </div>
                        <span className="conteneur-domaine">
                            <p className="domaine">{versVraisDomaines(domaine).toUpperCase()}</p>
                        </span>
                    </div>
                {/* Boite de texte */}
                <article className="texte">
                    <h5 className="etiquette-titre">nom</h5>
                    <h2 className="titre">{nom}</h2>
                    <h5 className="etiquette-domaine">spécialité</h5>
                    <h3 className="domaine sous-titre">{versVraisDomaines(domaine)}</h3>
                    <h5 className="etiquette-description">biographie</h5>
                    <div className="conteneur-description">
                        <p className="description">
                            {description.tronquerMots(90)}
                        </p>
                    </div>
                </article>
            </div>
        </li>
    )
}
import './Projet.scss';

import FlecheNav from '../modules/FlecheNav';

export default function Projet({
    nom,
    createurs,
    description,
    image_presentation,
    image_0,
    image_1,
    lien,
    index,
    surClic,
    verifierOuverture,
    id
}) {
    return (
        <li className="Projet evenement" id={id} index={index} ouvert={verifierOuverture(index)}>
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
                    <p className="details">{description.tronquerMots(30)}<br/><br/><u>Lire la suite</u></p>
                </div>
            </div>
            <div className="contenu">
                <FlecheNav gestionClic={() => surClic(-1)} direction='precedent' />
                <div className="texte-conteneur">
                    <div className="texte">
                        <h2 className="titre">
                            <a href={lien} className="lien-titre">{nom}</a>
                        </h2>
                        <h3 className="sous-titre">{createurs}</h3>
                        <p className="description">{description}</p>
                    </div>
                </div>
                <div className="images">
                    <img src={image_presentation} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                    <img src={image_0} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                    <img src={image_1} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                </div>
            </div>
        </li>
    )
}

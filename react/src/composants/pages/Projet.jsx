import './Projet.scss';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
        <li className="Projet" id={id} index={index} ouvert={verifierOuverture(index)}>
            <div className="miniature" onClick={() => surClic(index)}>
                <div className="information">
                    <h2 className="titre">{nom}</h2>
                    <h3 className="sous-titre">{createurs}</h3>
                    <button className="details">Voir en détails</button>
                </div>
                <img 
                    className="image-presentation" 
                    src={image_presentation} 
                    alt={`Image du projet ${nom} par ${createurs}`} 
                />
            </div>
            <div className="contenu">
                <div className="texte-conteneur">
                    <ArrowBackIosIcon className="Icone retour-liste" onClick={() => surClic(-1)} />
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

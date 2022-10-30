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
    ouverture,
    gestionClicListe
}) {
    const gestionClic = () => {
        gestionClicListe(index, ouverture)
    }
    return (
        <li className={"Projet case " + ouverture}>
            <div className="miniature" onClick={gestionClic}>
                <div className="information">
                    <h3 className="titre">{nom}</h3>
                    <h4 className="sous-titre">{createurs}</h4>
                    <button onClick={gestionClic} className="details">Voir en détails</button>
                </div>
                <img 
                    className="image-presentation" 
                    src={image_presentation} 
                    alt={`Image du projet ${nom} par ${createurs}`} 
                />
            </div>
            <div className="contenu">
                <div className="texte-conteneur">
                    <ArrowBackIosIcon className="Icone retour-liste" onClick={gestionClic} />
                    <div className="texte">
                        <h3 className="titre">
                            <a href={lien} className="lien-titre">{nom}</a>
                        </h3>
                        <h4 className="sous-titre">{createurs}</h4>
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

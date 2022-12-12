import './Projet.scss';

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
                    <p className="details">{cours && cours.post_title}<br/><br/><u>Lire la suite</u></p>
                </div>
            </div>
            {/* <div className="contenu">
                <FlecheNav gestionClic={() => surClic(-1)} direction='precedent' />
                <div className="texte-conteneur">
                    <div className="texte">
                        <u>
                            <h2 className="titre">
                                <a href={lien} className="lien-titre">{nom}</a>
                            </h2>
                        </u>
                        <h3 className="sous-titre">{createurs}</h3>
                        <p className="description">{cours && cours.post_title}</p>
                    </div>
                </div>
                <div className="images" grid={image_0 && image_1 ? 'true' : 'false'}>
                    <img src={image_presentation} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                    {image_0 &&
                        <img src={image_0} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                    }
                    {image_1 && 
                        <img src={image_1} alt={`Image du projet ${nom} par ${createurs}`} className="image"/>
                    }
                </div>
            </div> */}
        </li>
    )
}
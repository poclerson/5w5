import './PhotoEnvironnement.scss';

export default function PhotoEnvironnement({nom, description, photo}) {
    return (
        <li className="PhotoEnvironnement evenement">
            <div className="miniature">
                <div className="image-presentation-conteneur">
                    <img 
                        className="image-presentation" 
                        src={photo} 
                        alt={`Image de projet ${nom}`} 
                    />
                </div>
                <div className="information">
                    <h2 className="titre">{nom || 'Projet'}</h2>
                    <p className="details">
                        {description && description.tronquerMots(30) || 'Description'}
                    </p>
                </div>
            </div>
        </li>
    )
}

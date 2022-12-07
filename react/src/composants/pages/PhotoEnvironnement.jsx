import './PhotoEnvironnement.scss';

export default function PhotoEnvironnement({titre, description, photo}) {
    return (
        <li className="PhotoEnvironnement evenement">
            <div className="miniature">
                <div className="image-presentation-conteneur">
                    <img 
                        className="image-presentation" 
                        src={photo} 
                        alt={`Image de projet ${titre}`} 
                    />
                </div>
                <div className="information">
                    <h2 className="titre">{titre || 'Projet'}</h2>
                    <p className="details">
                        {description || 'Description'}
                    </p>
                </div>
            </div>
        </li>
    )
}

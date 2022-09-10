import CoursEnseigne from './CoursEnseigne';

export default function Enseignant({nom, description, photo, coursEnseignes}) {
    return(
        <li className="Enseignant">
            <h2 className="Enseignant__titre">{nom}</h2>
            <img className="Enseignant__photo" src={photo} alt=""/>
            <p className="Enseignant__desc">{description}</p>
            <ul className="Enseignant__cours-enseignes">
                {coursEnseignes.map(coursEnseigne => 
                    <CoursEnseigne key={coursEnseigne.id} {...coursEnseigne} />
                )}
            </ul>
        </li>
    )
}
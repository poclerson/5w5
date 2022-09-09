export default function Enseignant({nom, description, photo, coursEnseignes}) {
    return(
        <li className="Enseignant">
            <h1 className="Enseignant__titre">{nom}</h1>
            <img className="Enseignant__photo" src={photo} alt=""/>
            <p className="Enseignant__desc">{description}</p>
            <ul className="Enseignant__cours-enseignes">
                {coursEnseignes.map(coursEnseigne => 
                    <li className="Enseignant__cours-enseignes__cours">{coursEnseigne}</li>
                )}
            </ul>
        </li>
    )
}
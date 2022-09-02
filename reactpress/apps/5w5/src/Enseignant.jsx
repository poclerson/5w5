export default function Enseignant({nom, photo, description}) {

    return(
        <div className="Enseignant">
            <h1 className="Enseignant-titre">{nom}</h1>
            <img className="Enseignant-photo" src={photo} alt=""/>
            <p className="Enseignant-desc">{description}</p>
        </div>
    )
}
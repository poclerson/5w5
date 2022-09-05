export default function Enseignant({nom, photo, description, image_test}) {

    return(
        <div className="Enseignant">
            <h1 className="Enseignant-titre">{nom}</h1>
            <img className="Enseignant-photo" src={image_test} alt=""/>
            <p className="Enseignant-desc">{description}</p>
        </div>
    )
}
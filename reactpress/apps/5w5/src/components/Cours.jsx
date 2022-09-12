export default function Cours({titre, description}) {
    return(
        <li className="Cours">
            <h2 className="Cours__titre">{titre}</h2>
            <p className="Cours__description">{description}</p>
        </li>
    )
}
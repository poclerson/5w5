import './EvenementVideo.scss';

export default function EvenementVideo({lien}) {
    return (
        <li className="EvenementVideo evenement">
            <video className="video" autoPlay muted loop>
                <source src={lien} type="video/mp4"/>
            </video>
        </li>
    )
}

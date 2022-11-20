import './SessionRond.scss';
import FlecheNav from '../modules/FlecheNav';

export default function SessionRond({index, session, placement, surClic}) {
    return (
        <li className="SessionRond" style={placement}>
            <div className="destination"></div>
            <h2 className="titre">{session.charAt(7)}</h2>
            <FlecheNav gestionClic={() => surClic(index)} texte={false} />
        </li>
    )
}

import './SessionRond.scss';

export default function SessionRond({session, placement}) {
    return (
        <li className="SessionRond" style={placement}>
            <div className="destination"></div>
            <h2 className="titre">{session.charAt(7)}</h2>
        </li>
    )
}

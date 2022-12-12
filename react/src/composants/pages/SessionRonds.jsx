import './SessionRonds.scss';
import FlecheNav from '../modules/FlecheNav';

export default function SessionRonds({surClic, sessions, rotation}) {
    return (
        <div className="SessionRonds">
            {console.log(rotation)}
            <ol className="liste" style={{transform: `rotate(${rotation}deg)`}}>
                {sessions.map((session) => 
                    <li 
                        className="session-rond"
                        key={"rond" + session} 
                        onClick={surClic}
                    >
                        <h2 className="titre">{session.charAt(7)}</h2>
                    </li>
                )}
            </ol>
            <FlecheNav gestionClic={() => surClic()} texte={false} />
        </div>
    )
}

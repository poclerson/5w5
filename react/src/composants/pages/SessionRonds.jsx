import './SessionRonds.scss';
import FlecheNav from '../modules/FlecheNav';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext} from 'react';

export default function SessionRonds({surClic, sessions, rotation}) {
    const {degrades} = useContext(ContexteDonneesSite);

    return (
        degrades &&
        <div className="SessionRonds">
            {/* Tourner la liste entière d'après la rotation */}
            <ol className="liste" style={{transform: `rotate(${rotation}deg)`}}>
                {sessions.map((session, index) => 
                    <li 
                        className="session-rond-conteneur"
                        key={"rond" + session} 
                        onClick={surClic}
                    >
                        <div className="session-rond" style={{
                            // Annuler la rotation causée par la liste
                            transform: `rotate(${-rotation}deg)`
                        }}>
                            <img className="degrade" src={degrades[index].acf.degrade} alt=""/>
                            <h2 className="titre">{session.charAt(7)}</h2>
                        </div>
                    </li>
                )}
            </ol>
            <FlecheNav gestionClic={() => surClic()} texte={false} />
        </div>
    )
}

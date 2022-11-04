import './SessionRond.scss';
import FlecheDefilement from '../modules/FlecheCarousel';

export default function SessionRond({gestionProchaineSession, index, session}) {
    return (
        <li className="SessionRond">
            <div className="destination"></div>
            <h2 
                className="titre" 
                // onAnimationEnd={() => setTransition(0)} 
                // transition={transition}
            >
                    {session.charAt(7)}
            </h2>
            <FlecheDefilement gestionClic={() => gestionProchaineSession(index)} />
        </li>
    )
}

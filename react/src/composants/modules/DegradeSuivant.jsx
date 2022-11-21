import './DegradeSuivant.scss';
import FlecheNav from './FlecheNav';

export default function DegradeSuivant({surClicFleche}) {
    return (
        <div className="DegradeSuivant">
            <FlecheNav gestionClic={surClicFleche} />
        </div>
    )
}

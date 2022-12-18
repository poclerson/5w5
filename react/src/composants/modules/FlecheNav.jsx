import './FlecheNav.scss';
import Icone from './Icone';

// Appelle gestionClic lorsque cliqué
export default function FlecheNav({
    gestionClic, 
    direction = 'suivant', 
    classesAdditionnelles = '',
    rond = true
}) {
    return (
        <span className={`FlecheNav ${classesAdditionnelles}`} onClick={e => gestionClic(e)}>
            <div className="rond">
                {
                    direction == 'suivant' ? 
                    <Icone type='fleche-suivant' /> :
                    <Icone type='fleche-precedent' />
                }
            </div>
        </span>
    )
}

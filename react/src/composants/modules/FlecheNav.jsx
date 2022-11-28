import './FlecheNav.scss';
import Icone from './Icone';

// Appelle gestionClic lorsque cliqué
export default function FlecheNav({
    gestionClic, 
    texte = false, 
    direction = 'suivant', 
    classesAdditionnelles = ''
}) {
    return (
        <span className={`FlecheNav ${classesAdditionnelles}`} onClick={e => gestionClic(e)}>
            {texte && <p className="texte">{direction}</p>}
            {
                direction == 'suivant' ? 
                <Icone type='fleche-suivant' /> :
                <Icone type='fleche-precedent' />
            }
        </span>
    )
}

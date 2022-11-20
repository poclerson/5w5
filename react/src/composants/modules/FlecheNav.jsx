import './FlecheNav.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
                <ArrowForwardIosIcon className="Icone" /> :
                <ArrowBackIosIcon className="Icone" />
            }
        </span>
    )
}

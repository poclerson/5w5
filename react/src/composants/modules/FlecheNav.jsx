import './FlecheNav.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Appelle gestionClic lorsque cliqué
export default function FlecheNav({gestionClic, texte = false, direction = 'suivant'}) {
    return (
        <span className="FlecheNav" onClick={e => gestionClic(e)}>
            {texte && <p className="texte">{direction}</p>}
            {
                direction == 'suivant' ? 
                <ArrowForwardIosIcon className="Icone" /> :
                <ArrowBackIosIcon className="Icone" />
            }
        </span>
    )
}

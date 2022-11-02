import './Suivant.scss';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Appelle gestionClic lorsque cliqué
export default function Suivant({gestionClic}) {
    return (
        <span className="Suivant" onClick={gestionClic}>
            <p className="texte-suivant">suivant</p>
            <ArrowForwardIosIcon className="Icone" />
        </span>
    )
}

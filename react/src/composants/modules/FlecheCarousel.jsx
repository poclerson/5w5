import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Icone de flèche activant un callback quand on la clique
export default function FlecheCarousel({gestionClic}) {
    return (
        <div className="FlecheDefilement" onClick={e => gestionClic(e)}>
            <ArrowForwardIosIcon className="Icone" onClick={e => gestionClic(e)}/>
        </div>
    )
}

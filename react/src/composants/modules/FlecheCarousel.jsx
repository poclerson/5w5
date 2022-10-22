import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function FlecheCarousel({gestionClic}) {
    return (
        <div className="FlecheDefilement" onClick={gestionClic}>
            <ArrowForwardIosIcon className="Icone" onClick={gestionClic}/>
        </div>
    )
}

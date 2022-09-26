import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CreateIcon from '@mui/icons-material/Create';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

export default function Icone({type}) {

    const types = {
        modelisation3d: <ViewInArIcon />,
        web: <LanguageIcon />,
        jeu: <SportsEsportsIcon />,
        design: <CreateIcon />,
        video: <MovieCreationIcon />,
        autres: <MiscellaneousServicesIcon />
    }
    
    return(
        types[type]
    )
}
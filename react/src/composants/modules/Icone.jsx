import './Icone.scss';

import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LanguageIcon from '@mui/icons-material/Language';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import CreateIcon from '@mui/icons-material/Create';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

// Gère les icônes des cours en attendant les icônes 3D
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
        <div className="Icone">
            {types[type]}
        </div>
    )
}
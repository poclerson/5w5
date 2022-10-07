import './Session.scss';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Cours from './Cours';

export default function Session({cours, enseignants, ouverture}) {
    return (
        <li className={"Session " + ouverture}>
            <ul className="liste-cours">
                {cours.map(cours => 
                    <Cours 
                        key={cours.acf.titre}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                    />
                )}
            </ul>
            <button className="prochain-cours">
                <ArrowForwardIosIcon className="Icone" />
            </button>
        </li>
    )
}

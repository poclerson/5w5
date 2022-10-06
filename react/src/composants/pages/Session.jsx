import './Session.scss';

import Cours from './Cours';

export default function Session({cours, enseignants, ouverture}) {
    return (
        <li className={"Session " + ouverture}>
            <ul className="liste">
                {cours.map(cours => 
                    <Cours 
                        key={cours.acf.titre}
                        {... cours.acf}
                        tousEnseignants={enseignants}
                    />
                )}
            </ul>
        </li>
    )
}

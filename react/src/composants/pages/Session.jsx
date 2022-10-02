import './Session.scss';

import Cours from './Cours';

export default function Session({cours, enseignants, session}) {
    return (
        <li className="Session">
            <h3 className="titre">{session}</h3>
            {cours.map(cours => 
                <Cours 
                    key={cours.acf.titre}
                    titre={cours.acf.titre}
                    description={cours.acf.description}
                    enseignants={enseignants}
                    enseignantsAttitres={cours.acf.enseignants}
                    domaines={cours.acf.domaines}
                />
            )}
        </li>
    )
}

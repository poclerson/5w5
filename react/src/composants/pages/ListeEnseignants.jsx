import useObtenir from '../../hooks/useObtenir';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';

import './ListeEnseignants.scss';

export default function ListeEnseignants() {
    const enseignants = useObtenir('/enseignants');
    const cours = useObtenir('/cours');

    return(
        enseignants != null ?
        <section className="ListeEnseignants">    
            <h1 className="titre">
                {/* {u.capitaliserPremiereLettre(enseignants[0].type)} */}
            </h1>

            {
                cours != null ?
                <ul className="liste">
                    {enseignants.map(enseignant => 
                        <Enseignant 
                            {... enseignant.acf}
                            key={enseignant.id} 
                        />
                    )}
                </ul>
                : <Chargement />
            }
        </section>   
        : <Chargement />
    );
}
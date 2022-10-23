import useObtenir from '../../hooks/useObtenir';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';

import './ListeEnseignants.scss';

export default function ListeEnseignants() {
    const enseignants = useObtenir('/enseignants', 'bre');

    return(
        enseignants != null ?
            <section className="ListeEnseignants">    
                <h1 className="titre">nos enseignants.</h1>

                <ul className="liste">
                    {enseignants.map(enseignant => 
                        <Enseignant 
                            {... enseignant.acf}
                            key={enseignant.id} 
                        />
                    )}
                </ul>
            </section>   
        : <Chargement />
    );
}
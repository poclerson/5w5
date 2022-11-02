import './ListeEnseignants.scss';

import useObtenir from '../../hooks/useObtenir';
import {useState, useEffect} from 'react';
import * as boites from '../../boites';

import Enseignant from './Enseignant';
import Chargement from '../modules/Chargement';
import Suivant from '../modules/Suivant';

export default function ListeEnseignants({titre}) {
    const enseignants = useObtenir('/enseignants', 'bre');
    const [listeOuverte, setListeOuverte] = useState('ouvert');
    const [ouvertures, setOuvertures] = useState(null);

    // Quand on ouvre/ferme la liste
    const gestionClicListe = (index, ouverture) => {
        // S'il était fermé, on ouvre
        if (ouverture == 'ferme')
            setOuvertures(boites.ouvrir(index, enseignants.map(() => 'ferme')))

        // Sinon on ferme
        else 
            setOuvertures(enseignants.map(() => 'ferme'))
    }

    // Quand on clique sur le bouton suivant (ordinateur seulement)
    const gestionClicSuivant = () => {
        setOuvertures(
            boites.ouvrir(
                boites.obtenirOuverte(ouvertures) + 1,
                enseignants.map(() => 'ferme')
            )
        )
    }

    // Initialiser les états d'ouverture
    useEffect(() => {
        if (enseignants != null) {
            setOuvertures(enseignants.map(() => 'ferme'))
        }
    }, [enseignants])

    useEffect(() => {
        if (ouvertures) {
            // S'il y a une boite ouverte, on doit mettre l'état d'ouverture de la liste à fermé
            ouvertures.includes('ouvert') ?

            setListeOuverte('ferme') : setListeOuverte('ouvert');
        }
    }, [ouvertures])

    return(
        enseignants != null ?
            <section className="ListeEnseignants">
                <h1 className={"titre " + listeOuverte}>nos <br/> enseignants.</h1>

                <ul className={"liste " + listeOuverte}>
                    {
                        // Vérifier l'existence d'ouvertures
                        ouvertures != null ?

                            // Vérifier qu'au moins une boite est ouverte
                            ouvertures.indexOf('ouvert') != -1 ? 

                                // Si c'est le cas, afficher toutes les boites après celle qui l'est
                                enseignants.map((enseignant, index) => {
                                    if (index > ouvertures.indexOf('ouvert') - 1) {
                                        return <Enseignant 
                                            {... enseignant.acf}
                                            key={enseignant.id} 
                                            gestionClicListe={gestionClicListe}
                                            index={index}
                                            ouverture={ouvertures[index]}
                                        />
                                    }
                                }) 

                                // Sinon 
                                : enseignants.map((enseignant, index) => 
                                    <Enseignant 
                                        {... enseignant.acf}
                                        key={enseignant.id} 
                                        gestionClicListe={gestionClicListe}
                                        index={index}
                                        ouverture={ouvertures[index]}
                                    />
                                ) : <Chargement />
                    }
                </ul>
                <Suivant gestionClic={gestionClicSuivant} />
            </section>  : <Chargement />
    );
}

// import './ListeEnseignants.scss';

// import useObtenir from '../../hooks/useObtenir';
// import { useState, useEffect } from 'react';
// import * as boites from '../../boites';
// import useOuvertures from '../../hooks/useOuvertures';

// import Enseignant from './Enseignant';
// import Chargement from '../modules/Chargement';
// import Suivant from '../modules/Suivant';

// export default function ListeEnseignants() {
//     const enseignants = useObtenir('/enseignants', 'bre');
//     // const [listeOuverte, setListeOuverte] = useState('ouvert');
//     // const [ouvertures, setOuvertures] = useState(null);

//     const {
//         ouvertures: ouvertures,
//         setOuvertures: setOuvertures,
//         ouvertureListe: ouvertureListe,
//         setOuvertureListe: setOuvertureListe
//     } = useOuvertures(enseignants, false);

//     const gestionClicListe = (index, ouverture) => {
//         console.log(index,ouverture)
//         // S'il était fermé, on ouvre
//         if (ouverture == 'ferme')
//             setOuvertures(boites.ouvrir(index, enseignants.map(() => 'ferme')))

//         // Sinon on ferme
//         else
//             setOuvertures(enseignants.map(() => 'ferme'))
//     }

//     const gestionClicSuivant = () => {
//         setOuvertures(
//             boites.ouvrir(
//                 boites.obtenirOuverte(ouvertures) + 1,
//                 enseignants.map(() => 'ferme')
//             )
//         )
//     }

//     const truc = () => {
//         return <>
//             <h1 className={"titre " + ouvertureListe}>nos enseignants.</h1>
//             <ul className={"liste " + ouvertureListe}>
//             {console.log(ouvertures)}
//             {/* // Vérifier qu'au moins une boite est ouverte */}
//             {
//                 ouvertures.indexOf('ouvert') != -1 ?

//                     // Si c'est le cas, afficher toutes les boites après celle qui l'est
//                     enseignants.map((enseignant, index) => {
//                         if (index > ouvertures.indexOf('ouvert') - 1) {
//                             return <Enseignant
//                                 {...enseignant.acf}
//                                 key={enseignant.id}
//                                 gestionClicListe={gestionClicListe}
//                                 index={index}
//                                 ouverture={ouvertures[index]}
//                             />
//                         }
//                     })

//                     // Sinon 
//                     : enseignants.map((enseignant, index) =>
//                         <Enseignant
//                             {...enseignant.acf}
//                             key={enseignant.id}
//                             gestionClicListe={gestionClicListe}
//                             index={index}
//                             ouverture={ouvertures[index]}
//                         />
//                     )
//                 }
//                 <Suivant gestionClic={gestionClicSuivant} />
//             </ul>
//         </>
//     }

//     return(
//         enseignants != null ?
//             <section className="ListeEnseignants">
//                 {
//                     // Vérifier l'existence d'ouvertures
//                         ouvertures != null ? 
//                             truc()
//                         : <Chargement />
//                 }
//         </section>   
//         : <Chargement />
//     );
// }
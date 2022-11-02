import './App.scss';

import EnTete from './composants/navigation/EnTete';
import PiedPage from './composants/navigation/PiedPage';
import Chargement from './composants/modules/Chargement';

import Accueil from './composants/pages/Accueil';
import ListeEnseignants from './composants/pages/ListeEnseignants';
import ListeCours from './composants/pages/ListeCours';
import Contact from './composants/pages/Contact';
import Etudiants from './composants/pages/Etudiants';

import {Route, Routes} from 'react-router-dom';
import useObtenir from './hooks/useObtenir';

export default function App() {
    /**
     * Array contenant tout ce qui est nécessaire pour render les routes et créer le menu de navigation
     */
    const hcms = useObtenir('', 'hcms');

    const identifierComposant = (page) => {
        const composants = {
            'accueil': Accueil,
            'enseignants': ListeEnseignants,
            'cours': ListeCours,
            'etudiants': Etudiants,
            'contact': Contact
        };

        return composants[page];
    }
        
    return (
        <div className="App">
            {hcms != null ?
                <>
                    <Routes>
                        {hcms.data.header.headerMenuItems.map(page => {
                            let Composant = identifierComposant(page.pageSlug);
                            return <Route 
                                key={"page" + page.pageID}
                                path={page.pageSlug}
                                element={<Composant />}
                            />
                        })}
                    </Routes> 
                    <EnTete enteteWP={hcms.data.header} />
                    <PiedPage enteteWP={hcms.data.header}/>
                </>:
            <Chargement />
            }
            
           
        </div>
    );
}

import './PiedPage.scss';

import SiteLogo from '../modules/SiteLogo';

export default function PiedPage() {
    return(
        <footer className="PiedPage">
            <svg className="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#444444" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="contenu">
                {/* Ajouter les éléments du footer ici */}

                <div className="logo">
                <SiteLogo/>
                </div>
                <div className="nous-joindre">
                    {/* À récupérer depuis WP */}
                <h2 className="sous-titre">Nous joindre</h2>
                <h6>adresse courriel</h6> 
                <h6>numéro téléphone</h6>
                <div>carte Maisonneuve</div>
                </div>
                
                <div className="inscription">
                 <h2 className="sous-titre">Inscription</h2>   
                </div>

                <div className="reseau-sociaux">
                 <h2 className="sous-titre">Réseaux sociaux</h2>   
                </div>

            </div>

        </footer>

        
    )

    
}
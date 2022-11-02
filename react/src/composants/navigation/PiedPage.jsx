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
                <h2 className="sous-titre">Nous joindre</h2>
                <h6>adresse courriel</h6> 
                <h6>numéro téléphone</h6>
                <iframe className="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.973181379664!2d-73.55548818445816!3d45.550865035677376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf5bacbeffd%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sfr!2sca!4v1667395642086!5m2!1sfr!2sca" width="300" height="150" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
import './PiedPage.scss';

export default function PiedPage() {
    return(
        <footer className="PiedPage">
            <svg className="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <div className="contenu">
                {/* Ajouter les éléments du footer ici */}
<<<<<<< Updated upstream
                <h2 className="titre">Ceci est le footer</h2>
=======

                <div className="logo">
                <SiteLogo url={enteteWP.siteLogoUrl} />
                </div>
                <div className="nous-joindre">
                    {/* À récupérer depuis WP */}
                <h3 className="sous-titre">Nous joindre</h3>
                <h6>adresse courriel</h6> 
                <h6>numéro téléphone</h6>
                <iframe className="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.9731813796634!2d-73.55548818445818!3d45.55086503567738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf5bacbeffd%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sko!2sca!4v1667352417468!5m2!1sko!2sca" width="300" height="150" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                
                </div>
                
                
                <div className="inscription">
                 <h3 className="sous-titre">Inscription</h3>   
                </div>

                <div className="reseau-sociaux">
                 <h3 className="sous-titre">Réseaux sociaux</h3>   
                </div>

>>>>>>> Stashed changes
            </div>

        </footer>

        
    )

    
}
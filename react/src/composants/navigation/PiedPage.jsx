import './PiedPage.scss';

export default function PiedPage() {
    return(
        <footer className="PiedPage">
            
            <svg className="vague" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#444444" fill-opacity="1" d="M0,96L80,85.3C160,75,320,53,480,53.3C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="contenu">
                {/* Ajouter les éléments du footer ici */}
                <h2 className="titre">Nous joindre</h2>
                <h6>adresse courriel</h6>
            </div>

        </footer>

        
    )

    
}
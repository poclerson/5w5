import './Contact.scss';
import useObtenir from '../../hooks/useObtenir';
import Chargement from '../modules/Chargement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Contact({titre}) {
    const degrades = useObtenir('/degrades', 'bre');
    
    return (
        degrades != null ?
        <section className="Contact" style={{backgroundImage:`url(${degrades[2].acf.degrade})`}}>
            
            <h1 className="titre">
                {titre.tronquerMots(2)}
                <br/>
                {titre.tronquerMots(2, true)}
            </h1>
            <div></div>
            <div>
                <h3>Description</h3>
                <p>Au cours de ta formation, tu apprendras à identifier, analyser, imaginer, réaliser et coordonner différents projets numériques et les différentes étapes de production qui y sont liées :
                    La médiatisation – Créer ou modifier des éléments graphiques et multimédias.
                    La conception –Concevoir le design et l’interactivité d’un projet multimédia.
                    L’intégration – Intégrer de façon cohérente et artistique les composantes d’un projet interactif.
                    L’environnement professionnel – Développer une vision globale du multimédia et connaître l’environnement de travail tant du point de vue technologique qu’interpersonnel.
                    Les logiciels – Photoshop, Illustrator, Maya (3D), Unity, After Effects, etc.
                    Les langages – HTML, CSS, JavaScript, SQL, PHP, C#, etc.
                    56 % de ta formation spécifique se déroulera en laboratoire et en stage
                    Tu réaliseras des projets d’envergure diversifiés, amusants et stimulants qui te permettront d’explorer les multiples facettes de l’intégration multimédia.
                    Sites Web, jeux interactifs, applications mobiles, animations 2D/3D, créations audio et vidéo.
                    Un stage crédité de 8 semaines en entreprise.</p>
                    <div className='Inscription'>
                        <h2>Inscription</h2>
                        <ArrowForwardIosIcon className='Icone'/>
                    </div>
            </div>

        </section>
         : <Chargement />
    )
}

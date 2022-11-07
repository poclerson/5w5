import './Contact.scss';
import useObtenir from '../../hooks/useObtenir';
import Chargement from '../modules/Chargement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Contact({titre}) {
    const degrades = useObtenir('/degrades', 'bre');
    
    return (
        degrades != null ?
        <section className="Contact" style={{backgroundImage:`url(${degrades[2].acf.degrade})`}}>
            {/* À récupérer depuis WP */}
            <article className='boite-principale'>
            <h1 className="titre">À propos <br/> de nous</h1>
            <article className='contenu'>
                <div className='images'>
                    <div className='image1'></div>
                    <div className='image2'></div>
                    <div className='image3'><iframe className="carte" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.973181379664!2d-73.55548818445816!3d45.550865035677376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91bf5bacbeffd%3A0x68ff300997eff5c!2sColl%C3%A8ge%20de%20Maisonneuve!5e0!3m2!1sfr!2sca!4v1667395642086!5m2!1sfr!2sca" width="300" height="150" style={{border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></div>
                </div>
                <div className='informations'>
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non odio euismod lacinia at quis risus sed. Eu nisl nunc mi ipsum faucibus. Eget mauris pharetra et ultrices neque ornare aenean euismod. 
                    </p>
                </div>
            </article>

                <div className='inscription'>
                    <h2 className='titre-inscription'>Inscription</h2>
                    <ArrowForwardIosIcon className='Icone'/>
                </div>
            </article>
        </section>
         : <Chargement />
    )
}

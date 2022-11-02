import './Contact.scss';
import useObtenir from '../../hooks/useObtenir';
import Chargement from '../modules/Chargement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Contact({titre}) {
    const degrades = useObtenir('/degrades', 'bre');
    
    return (
        degrades != null ?
        <section className="Contact" style={{backgroundImage:`url(${degrades[2].acf.degrade})`}}>
            <article className='boite-principale'>
            <h1 className="titre">À propos <br/> de nous</h1>
            <article className='contenu'>
                <div className='images'>
                    <div className='image1'></div>
                    <div className='image2'></div>
                    <div className='image3'></div>
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

import './Contact.scss';

import Chargement from '../modules/Chargement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext} from 'react';
import useStructure from '../../hooks/useStructure';

export default function Contact({id}) {
    const {degrades} = useContext(ContexteDonneesSite);
    const {
        titre, 
        titreDescription, 
        description,
        titreInscription,
        wpBlockImageSizeMedium,
        wpBlockWebfactoryMap,
        wpBlockSocialLinks
    } = useStructure(id);
    return (
        degrades != null ?
        <section className="Contact" style={{backgroundImage:`url(${degrades[2].acf.degrade})`}}>
            <article className='boite-principale'>
                {titre}
                <article className='contenu'>
                    <div className='images'>
                        <div className='wpBlockWebfactoryMap'>{wpBlockWebfactoryMap}</div>
                    </div>
                    <div className='informations'>
                        {titreDescription}
                        {description}
                        {wpBlockSocialLinks}
                    </div>
                </article>


                <div className='inscription'>
                     {titreInscription}
                    <ArrowForwardIosIcon className='Icone'/>
                </div>
            </article>
        </section>
         : <Chargement />
    )
}

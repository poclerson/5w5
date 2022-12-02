import './Contact.scss';

import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext} from 'react';
import useStructure from '../../hooks/useStructure';

export default function Contact({id}) {
    const {degrades} = useContext(ContexteDonneesSite);
    const {
        titre, 
        titreDescription, 
        description,
        wpBlockWebfactoryMap,
        wpBlockSocialLinks,
        BACKGROUND
    } = useStructure(id);
    return (
        degrades != null ?
        <section className="Contact">
            {console.log(BACKGROUND)}
            <Fond fond={{backgroundImage: BACKGROUND}} />
            <article className='boite-principale'>
                {titre}
                <article className='contenu'>
                    <div className='images'>
                        {wpBlockWebfactoryMap}
                    </div>
                    <div className='informations'>
                        {titreDescription}
                        {description}
                        {wpBlockSocialLinks}
                    </div>
                </article>
            </article>
        </section>
         : <Chargement />
    )
}

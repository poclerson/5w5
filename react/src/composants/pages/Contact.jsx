import './Contact.scss';

import Chargement from '../modules/Chargement';

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
        behance,
        linkedin,
        youtube,
        facebook
    } = useStructure(id);
    return (
        degrades != null ?
        <section className="Contact">
            <article className='boite-principale'>
                {titre}
                <article className='contenu'>
                    {wpBlockWebfactoryMap}
                    <div className='informations'>
                        {titreDescription}
                        {description}
                        <div className="social">
                            {behance}
                            {linkedin}
                            {youtube}
                            {facebook}
                        </div>
                    </div>
                </article>
            </article>
        </section>
         : <Chargement />
    )
}

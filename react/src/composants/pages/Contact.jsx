import './Contact.scss';

import Chargement from '../modules/Chargement';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext} from 'react';
import useStructure from '../../hooks/useStructure';

export default function Contact({id}) {
    const {degrades, videos} = useContext(ContexteDonneesSite);
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
            {titre}
            <article className='boite-principale'>
                <div className='contenu'>
                    <div className="video-conteneur">
                        <video src={videos[0].acf.lien} className="video" autoPlay muted></video>
                    </div>
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
                </div>
                <div className="carte">
                    {wpBlockWebfactoryMap}
                </div>
            </article>
        </section>
         : <Chargement />
    )
}

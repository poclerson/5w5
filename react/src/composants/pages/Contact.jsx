import './Contact.scss';

import Chargement from '../modules/Chargement';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ContexteDonneesSite from '../../ContexteDonneesSite';
import {useContext, useState, useEffect} from 'react';
import useStructure from '../../hooks/useStructure';

export default function Contact({id}) {
    const {degrades, pages} = useContext(ContexteDonneesSite);
    const {titre, sousTitre} = useStructure(id);
    return (
        degrades != null ?
        <section className="Contact" style={{backgroundImage:`url(${degrades[2].acf.degrade})`}}>
            <article className='boite-principale'>
                {titre}
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

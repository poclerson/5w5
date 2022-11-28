import './PiedPage.scss';

import SiteLogo from '../modules/SiteLogo';
import Icone from '../modules/Icone';

import {useContext} from 'react';
import ContexteDonneesSite from '../../ContexteDonneesSite';
import useStructure from '../../hooks/useStructure';

export default function PiedPage({enteteWP}) {
    const {pages} = useContext(ContexteDonneesSite);

    const {
        nousJoindre,
        inscription,
        wpBlockSocialLinks,

    } = useStructure('piedpage', true);

    return(
        <footer className="PiedPage">
            <Icone type="vague" classes="vague" />
            <div className="contenu">
                <div className="logo">
                    <SiteLogo url={enteteWP.siteLogoUrl} />
                </div>
                {nousJoindre}
                <u>{inscription}</u>
                {wpBlockSocialLinks}
            </div>
        </footer>
    )

    
}

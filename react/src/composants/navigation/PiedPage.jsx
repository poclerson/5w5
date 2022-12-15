import './PiedPage.scss';

import SiteLogo from '../modules/SiteLogo';
import Icone from '../modules/Icone';

import useStructure from '../../hooks/useStructure';

export default function PiedPage({enteteWP}) {
    const {
        nousJoindre,
        inscription,
        behance,
        linkedin,
        youtube,
        facebook,
        auteurs
    } = useStructure('piedpage', true);

    return(
        <footer className="PiedPage">
            <Icone type="vague" classes="vague" />
            <div className="cacheur"></div>
            <div className="contenu">
                <div className="rangee">
                    <div className="logo">
                        <SiteLogo url={enteteWP.siteLogoUrl} />
                    </div>
                    {nousJoindre}
                    <div className="inscription-conteneur">
                        <u>{inscription}</u>
                        <Icone type="lien-externe" />
                    </div>
                    <div className="social">
                        {behance}
                        {linkedin}
                        {youtube}
                        {facebook}
                    </div>
                </div>
                <div className="rangee trademark">{auteurs}</div>
            </div>
        </footer>
    )   
}
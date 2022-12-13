import './Accueil.scss';

import Marquee from 'react-fast-marquee';

import useMediaQuery from '../../hooks/useMediaQuery';
import useStructure from '../../hooks/useStructure';
import medias from '../../medias';
import Chargement from '../modules/Chargement';
import Fond from '../modules/Fond';

export default function Accueil({id}) {
    const tablette = useMediaQuery(medias.tablette);

    const {titres, BACKGROUND, boiteAccueil} = useStructure(id);
    

    return(
        titres && BACKGROUND &&
            <section className="Accueil">
                    <Marquee speed={tablette ? 200 : 20} gradient={false} pauseOnClick={true}>
                        {titres}
                    </Marquee>
                    {boiteAccueil}
                    <Fond fond={{backgroundImage: BACKGROUND}} />
            </section>
        // <Chargement/>
            
    )
}
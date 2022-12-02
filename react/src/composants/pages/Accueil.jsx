import './Accueil.scss';

import Marquee from 'react-fast-marquee';

import useMediaQuery from '../../hooks/useMediaQuery';
import useStructure from '../../hooks/useStructure';
import medias from '../../medias';

export default function Accueil({id}) {
    const tablette = useMediaQuery(medias.tablette);

    const {titres, BACKGROUND} = useStructure(id);

    return(
        titres && BACKGROUND &&
            <section className="Accueil" style={{backgroundImage: BACKGROUND}}>
                    <Marquee speed={tablette ? 200 : 20} gradient={false} pauseOnClick={true}>
                        {titres.props.children}
                    </Marquee>
            </section>
            
    )
}
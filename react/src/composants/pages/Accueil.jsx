import './Accueil.scss';

import Marquee from 'react-fast-marquee';

import useMediaQuery from '../../hooks/useMediaQuery';
import medias from '../../medias';

export default function Accueil() {
    const nombreTitres = 5;
    const tablette = useMediaQuery(medias.tablette);

    const determinerVitesse = () => {
        if (tablette) {
            return 40;
        }

        return 20;
    }

    return(
        <section className="Accueil">
            {console.log(determinerVitesse())}
            <Marquee speed={tablette ? 300 : 20} gradient={false} pauseOnClick={true} children={
                Array.from(Array(nombreTitres)).map(() => 
                    <span className="item-titre">
                        <h1 className="titre">TIM</h1>
                    </span>
                )
            }>
            </Marquee>
        </section>
    )
}
import './Accueil.scss';

import Marquee from 'react-fast-marquee';

export default function Accueil() {
    const nombreTitres = 5;
    return(
        <section className="Accueil">
            <Marquee gradient={false} pauseOnClick={true} children={
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
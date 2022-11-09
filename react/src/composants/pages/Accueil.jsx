import './Accueil.scss';

import Marquee from 'react-fast-marquee';

import useMediaQuery from '../../hooks/useMediaQuery';
import useStructure from '../../hooks/useStructure';
import medias from '../../medias';

import VisionneurModele from '../modules/VisionneurModele';

import modele from './cours_methode.gltf';

export default function Accueil({id}) {
    const tablette = useMediaQuery(medias.tablette);

    const {titres} = useStructure(id);

    return(
        <section className="Accueil">
            <VisionneurModele cheminModele={modele} />
            <Marquee speed={tablette ? 300 : 20} gradient={false} pauseOnClick={true}>
                {/* {titres.props.children} */}
            </Marquee>
        </section>
    )
}
import './Cours.scss';

import Icone from '../modules/Icone';

import VisionneurModele from '../modules/VisionneurModele';

export default function Cours({titre, description, domaines, id, ouvert}) {
    return(
        <li className="Cours" id={id} ouvert={ouvert}>
            <ul className="domaines">
                {domaines.map(domaine => 
                    <li className="domaine" key={domaine}>
                        <Icone type={domaine} />
                    </li>
                )}
            </ul>
            <div className="carte">
                <h4 className="titre">{titre}</h4>
                <p className="description">
                    {/* {description} */}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, omnis. Incidunt quod laudantium, consequatur nisi doloribus laboriosam quam dolore maxime aliquid eveniet iste nesciunt mollitia provident aspernatur corporis eaque pariatur!
                </p>
            </div>
            <div className="rond"></div>
        </li>
    )
}